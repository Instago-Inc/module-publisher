// publisher@latest - multi-platform publisher (no platform-specific logic)
// API:
//   publish({ platforms, article })

(function(){
  const log = require('log@latest').create('publisher');

  function normalizePlatform(value){
    return String(value || '').trim();
  }

  async function publish(payload = {}){
    if (!payload || typeof payload !== 'object') {
      return { ok:false, error:'publisher.publish: expected payload object' };
    }
    const platformsRaw = payload.platforms;
    const article = payload.article;
    if (!Array.isArray(platformsRaw) || platformsRaw.length === 0) {
      return { ok:false, error:'publisher.publish: missing platforms[]' };
    }
    if (!article || typeof article !== 'object') {
      return { ok:false, error:'publisher.publish: missing article object' };
    }

    const results = [];
    for (const p of platformsRaw) {
      const platform = normalizePlatform(p);
      if (!platform) continue;
      try {
        const mod = require(platform + '@latest');
        if (!mod || typeof mod.publish !== 'function') {
          results.push({ platform, ok:false, error:'missing publish()' });
          continue;
        }
        const res = await mod.publish(article);
        results.push({ platform, result: res, ok: !!(res && res.ok) });
      } catch (err) {
        results.push({ platform, ok:false, error: (err && (err.message || String(err))) || 'unknown' });
      }
    }

    const ok = results.every(r => r.ok !== false);
    if (!ok) log.error('publish: one or more failures', { results });
    return { ok, results };
  }

  module.exports = { publish };
})();

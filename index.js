(function () {
  const wordpress = require("wordpress@1.0.0");
  const medium = require("medium@1.0.0");
  const devto = require("devto@1.0.0");
  const ghost = require("ghost@1.0.0");
  const mastodon = require("mastodon@1.0.0");
  const logger = require('log@1.0.0').create('publisher');

  function emit(platform, message, payload) {
    logger.info(`${platform}: ${message}`, payload || {});
  }

  function publish(platform, data) {
    emit(platform, "publish requested", data);
    switch (platform) {
      case "wordpress":
        wordpress.publish(data);
        break;
      case "medium":
        medium.publish(data);
        break;
      case "devto":
        devto.publish(data);
        break;
      case "ghost":
        ghost.publish(data);
        break;
      case "mastodon":
        mastodon.publish(data);
        break;
      default:
        emit(platform, "unsupported platform", data);
        break;
    }
  }

  module.exports = {
    publish,
    wordpress: (payload) => publish("wordpress", payload),
    medium: (payload) => publish("medium", payload),
    devto: (payload) => publish("devto", payload),
    ghost: (payload) => publish("ghost", payload),
    mastodon: (payload) => publish("mastodon", payload),
  };
})();

# module/publisher - V8 module

Publish the same article to multiple platforms through a single, lightweight module. It focuses on orchestration only, letting each platform module handle its own requirements.

Learn more at https://instago.ai.

## Technical reference

Exports:
- `publish({ platforms, article })`

Usage:
- `platforms` is an array of platform module names (for example, `['devto', 'medium']`).
- `article` is an object passed through to each platform's `publish()` call.
- Returns `{ ok, results }`, where `results` includes per-platform outcomes.

Configuration:
- No required or optional `env` keys.

Examples:
```js
const publisher = require('publisher@latest');

await publisher.publish({
  platforms: ['devto'],
  article: {
    title: 'Hello DEV',
    bodyMarkdown: '# Hello\nThis is an article.',
    tags: ['devto', 'automation'],
    published: true
  }
});
```

```js
const publisher = require('publisher@latest');

await publisher.publish({
  platforms: ['devto', 'medium'],
  article: {
    title: 'Hello DEV',
    bodyMarkdown: '# Hello\nThis is an article.',
    tags: ['devto', 'automation'],
    published: true
  }
});
```

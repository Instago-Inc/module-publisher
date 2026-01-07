# @instago/publisher

Route a publish request to multiple platforms (WordPress, Medium, Dev.to, Ghost, Mastodon). Currently calls each platform’s module; many are stubs until implemented.

- Version: 1.0.0
- Entry: index.js
- Exports: `{ publish, wordpress, medium, devto, ghost, mastodon }`
- Dependencies: platform modules (`wordpress@1.0.0`, `medium@1.0.0`, `devto@1.0.0`, `ghost@1.0.0`, `mastodon@1.0.0`)

## Example
```js
const publisher = require('publisher@1.0.0');
publisher.wordpress({ title: 'Hello', content: '...' }); // calls wordpress.publish
publisher.mastodon({ status: 'Hi there' });             // logs stub publish
```

## Notes
- Functions simply delegate to each platform module; implement those modules to enable real publishing.

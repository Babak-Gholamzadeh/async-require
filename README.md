# Async Require

Requires modules asynchronously

## Usage

```javascript
const asyncRequire = require('./async-require');
let methods = null;

// Using `then` method
asyncRequire('./method-modules').then(data => methods = data);

// Or using async/await syntax
(async () => methods = await asyncRequire('./method-modules'));
```

**Remember: You should use the `methods` variable inside asynchronous functions or some part of codes that don't need to run immediately.**

> Tip: You can use this manner of requiring modules to handle circular dependencies
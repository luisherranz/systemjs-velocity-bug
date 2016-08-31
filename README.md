# SystemJS velocity-animate import bug

To reproduce the problem build first the modules:

```
npm install
npm run build:modules
```

Then run the webpack-dev-server:

```
npm start
```

You can see the error in the console.

----

If the modules are built in development mode, it works. But when they are built using webpack's
production mode, SystemJS tries to require a module which is inside an error string.

The problematic line in development mode:
```javascript
if (Velocity.RegisterEffect === undefined) {
  throw "Velocity.RegisterEffect not found. You need to require('velocity-animate/velocity.ui') at a top level for UI Pack.";
}
```

The same problematic line in production mode (running `webpack -p`):
```
if(void 0===i.RegisterEffect)throw"Velocity.RegisterEffect not found. You need to require('velocity-animate/velocity.ui') at a top level for UI Pack.";return
```

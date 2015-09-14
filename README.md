SimpleControllers
=================

A simple javascript library to load controllers (*functions*) on demand via an html `data` attribute.

## Usage

Load the `simpleControllers.js` on top of all your javascript.

```javascript
<script type="text/javascript" src="/static/js/simpleControllers.js"></script>
// The rest of your javascript imports
```

Register a controller with an identifier

```javascript
SimpleControllers.register('item-detail', ItemDetailControllers);
```

Set the `body[data-controllers]` of the page you want to load a controller with the named identifier. You can load more than one controller, just separate the names with commas.

```html
...
<body data-controllers="item-detail,item-interact">
...
```

## A simple controller

A controllers is just a function that is instanciated on page load, a simple example is something like this:

```javascript
(function() {
  var DummyController = function() {
    this.initialize();
  };

  DummyController.prototype.initialize = function () {
    console.log('DummyController loaded!');
  };

  DummyController.prototype.otherMethod = function() {
    // Do stuff
  };

  SimpleControllers.register('dummy-ctrl', DummyController);
})();

```

## The `global` controller

If you register a controller with the `global` key, it will be loaded without the need of adding it to the `data-controllers` attribute.
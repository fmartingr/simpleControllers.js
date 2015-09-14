(function() {
  var SimpleControllers = function() {
    this.controllers = {};
    var self = this;

    window.addEventListener("load", function() {
      self.onLoad();
    });
  };

  SimpleControllers.prototype.register = function(identifier, object) {
    if (identifier in this.controllers) {
      throw "Identifier '" + identifier + "' is already registered.";
    };
    this.controllers[identifier] = object;
  };

  SimpleControllers.prototype.loadController = function(identifier) {
    if (typeof(this.controllers[identifier]) === 'function') {
      console.log('[SimpleControllers] loaded ctrl: ' + identifier);
      this.controllers[identifier] = new this.controllers[identifier](window);
    } else {
      console.error('Identifier ' + identifier + ' not registered or already loaded.');
    }
  };

  SimpleControllers.prototype.onLoad = function() {
    var body = document.querySelector('body');
    var controllers = body.getAttribute('data-controllers').split(',');
    var self = this;
    if ('global' in self.controllers) self.loadController('global');
    [].forEach.call(controllers, function(ctrl) {
      self.loadController(ctrl);
    })
  };

  window.SimpleControllers = new SimpleControllers();
})(window);

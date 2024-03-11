import Mousetrap from 'mousetrap';
import EventEmitter from 'eventemitter3';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import isValidKey from 'validator/lib/isAlpha';

// SimpleKeyboardShortcuts: A class to manage keyboard shortcuts
class SimpleKeyboardShortcuts extends EventEmitter {
  constructor() {
    super();
    this.shortcuts = new Map();
  }

  // Register a new shortcut
  registerShortcut(key, callback, options = {}) {
    if (!isValidKey(key)) {
      console.warn(`Invalid key: ${key}`);
      return;
    }

    const handler = this.wrapHandler(callback, options);
    this.shortcuts.set(key, handler);
    Mousetrap.bind(key, handler);
  }

  // Wrap the handler with debounce or throttle if needed
  wrapHandler(callback, options) {
    if (options.debounce) {
      return debounce(callback, options.debounce);
    }
    if (options.throttle) {
      return throttle(callback, options.throttle);
    }
    return callback;
  }

  // Unregister a shortcut
  unregisterShortcut(key) {
    if (this.shortcuts.has(key)) {
      const handler = this.shortcuts.get(key);
      Mousetrap.unbind(key, handler);
      this.shortcuts.delete(key);
    }
  }

  // Unregister all shortcuts
  unregisterAll() {
    this.shortcuts.forEach((_, key) => this.unregisterShortcut(key));
  }
}

export default SimpleKeyboardShortcuts;

# Simple Keyboard Shortcuts

A lightweight and easy-to-use library for adding keyboard shortcuts to your web application. `simple-keyboard-shortcuts` allows you to quickly implement customizable shortcuts, enhancing user navigation and interaction.

## Installation

To install the library, run the following command in your project directory:

```bash
npm install simple-keyboard-shortcuts
```

## Usage

First, import the `SimpleKeyboardShortcuts` class from the package:

```javascript
import SimpleKeyboardShortcuts from 'simple-keyboard-shortcuts';
```

Next, create an instance of the `SimpleKeyboardShortcuts`:

```javascript
const shortcuts = new SimpleKeyboardShortcuts();
```

To register a new shortcut, use the `registerShortcut` method:

```javascript
shortcuts.registerShortcut('ctrl+s', () => {
console.log('Saving the document!');
});
```

You can also specify options like `debounce` or `throttle` to control the execution rate of the callback function:

```javascript
shortcuts.registerShortcut('ctrl+d', () => {
console.log('Debounced action!');
}, { debounce: 200 });
```

To unregister a shortcut, use the `unregisterShortcut` method:

```javascript
shortcuts.unregisterShortcut('ctrl+s');
```

And to unregister all shortcuts:

```javascript
shortcuts.unregisterAll();
```

## Contributing

Contributions are welcome! If you have a feature request or bug report, please open an issue on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Toast Container (Pluggable Widget)

React-based pluggable widget that wraps [`react-toastify`](https://github.com/fkhadra/react-toastify)
and attaches the `toast` object to `window` so it can be called from anywhere
in a Mendix app (nanoflows, JavaScript actions, snippets, etc).

This is a drop-in replacement for the original custom widget `Toastify.mpk` /
`mendix.ToastContainer.mpk`. It keeps the same widget id
(`mendix.toastcontainer.ToastContainer`), the same clientModule name
(`ToastContainer`), and the same mpk filename (`mendix.ToastContainer.mpk`),
so existing Mendix projects can update by replacing the file.

## Usage in Mendix

1. Drop the **Toast Container** widget once on a page (typically a layout).
2. From a nanoflow or JavaScript action, call:

```js
window.toast.success("Saved!");
window.toast.error("Something went wrong");
window.toast.info("FYI");
window.toast.warn("Heads up");
window.toast("Plain message");
```

## Configurable properties

| Property         | Type        | Default    | Description                                  |
|------------------|-------------|------------|----------------------------------------------|
| Position         | enumeration | topRight   | Where toasts appear on screen                |
| Auto close (ms)  | integer     | 5000       | Time before auto-dismiss; 0 disables         |
| Hide progress bar| boolean     | false      |                                              |
| Newest on top    | boolean     | false      |                                              |
| Close on click   | boolean     | true       |                                              |
| Pause on hover   | boolean     | true       |                                              |
| RTL              | boolean     | false      | Right-to-left layout                         |
| Theme            | enumeration | light      | light / dark / colored                       |

## Build

```bash
cd mendix.ToastContainer
npm install
npm run build
```

Output: `dist/1.0.0/mendix.ToastContainer.mpk`.

Uses `@mendix/pluggable-widgets-tools` for the build pipeline.

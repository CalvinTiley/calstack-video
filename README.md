# @calstack/video

<p align="center">
    A compact and customisable React-first video player, built with TypeScript.
</p>

<p align="center">
    <b>Customisable:</b> Dynamic controls and a separately imported CSS file.
    <br>
    <b>Simple:</b> Intuitive API with minimal boilerplate.
    <br>
    <b>Future Proof:</b> Well tested, <b>0</b> external dependencies</b>.
</p>

## General Information

This library leverages the standard HTML5 video element to provide improved accessibility features and other functionality native to the browser, so as not to reinvent the wheel.

However, HTML video elements are notoriously difficult to style. Specifically, styling video controls to present them in a manner consistent across modern browsers while allowing customisation is normally a nightmare.

For this reason, the default video controls have been removed and re-created from elements easier to style; including play/pause, time updates, the progress slider, picture-in-picture mode and the fullscreen trigger.

## Getting Started

### Installation

Ensure the package is installed by using one of the following commands depending on your chosen package manager:

**PNPM**

```sh
pnpm i @calstack/video
```

**Yarn**

```sh
yarn add @calstack/video
```

**NPM**

```sh
npm i @calstack/video
```

### Importing the library

With the library installed, import the CSS into your project:

**CSS (with bundling)**

```typescript
import "@calstack/video/video.css";
```

**CSS / SCSS**

```css
@import "@calstack/video/video.css";
```

Import the video component:

```typescript
import { CalstackVideo } from "@calstack/video";
```

### Example Usage

```tsx
import { CalstackVideo } from "@calstack/video";

import "@calstack/video/video.css";

import "./App.css";

const App = () => {
    return (
        <CalstackVideo
            src="http://my-video-url.mp4"
            controls
        />
    );
};

export default App;
```

## Customisation

In order to support custom theming, the colours used throughout the app are exposed as CSS variables that can be overridden by using the `.calstack-video-wrapper` selector to target the wrapping element.

The defined variables are as follows:

| Variable Name                                  | Description                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| `--calstack-video-color-accent`                | Primary accent color (e.g., for highlights or brand elements)       |
| `--calstack-video-color-control`               | Default color for controls                                          |
| `--calstack-video-color-control--hover`        | Color of controls on hover                                          |
| `--calstack-video-color-slider-track`          | Background color of the slider track                                |
| `--calstack-video-color-slider-track-progress` | Color of the filled (progress) part of the slider                   |
| `--calstack-video-color-slider-thumb`          | Color of the slider thumb (inherits from progress color by default) |
| `--calstack-video-control-size`                | Size of control buttons (e.g., play/pause)                          |
| `--calstack-video-font-family`                 | Font used for all video component text                              |
| `--calstack-video-slider-thumb-size`           | Size of the slider thumb (handle)                                   |
| `--calstack-video-slider-track-height`         | Height of the slider track                                          |
| `--calstack-video-slider-thumb-offset`         | Vertical offset to center the slider thumb in the track             |

If you wanted to recreate your own video player using elements from the Calstack player the individual components are exposed on the root component. For example, if you wanted to use the control bar from the video player elsewhere in your app, you can access it as so:

```tsx
import { CalstackVideo } from "@calstack/video";

import "@calstack/video/video.css";

import "./App.css";

const App = () => {
    return (
        <CalstackVideo.Provider>
            <CalstackVideo.Wrapper>
                <CalstackVideo.VideoElement />
            </CalstackVideo.Wrapper>

            <CalstackVideo.ControlBar />
        </CalstackVideo.Provider>
    );
};

export default App;
```

Notice that you must wrap it with `CalstackVideo.Provider`, and for all elements to use the same context, you will need to manually build out all components yourself; basically, if you want to use the individual components, you cannot use `CalstackVideo` directly as it wraps all components in their own context which won't correspond to the context used by any exposed components.

The following are the currently exposed components:

| Component                     | Purpose                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CalstackVideo.ControlBar`    | Renders the main set of playback controls (play, pause, volume, etc.), also exposes its own components e.g. `CalstackVideo.ControlBar.PlayPauseControl` |
| `CalstackVideo.Provider`      | Context provider for video state and control synchronization                                                                                            |
| `CalstackVideo.Overlay`       | Customizable layer for showing UI elements over the video                                                                                               |
| `CalstackVideo.RangeSlider`   | Generic slider component used for seek and volume control                                                                                               |
| `CalstackVideo.Time`          | Displays current time and total duration of the video                                                                                                   |
| `CalstackVideo.VideoElement`  | Low-level `<video>` tag wrapper with enhanced features                                                                                                  |
| `CalstackVideo.VolumeControl` | UI control for adjusting video volume                                                                                                                   |
| `CalstackVideo.Wrapper`       | Outer layout container that arranges all video elements cohesively                                                                                      |

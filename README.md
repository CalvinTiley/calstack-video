# @calstack/video

<p align="center">
    A compact and customisable React-based video player, built with TypeScript.
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

However, HTML video elements are notoriously difficult to style. Specifically, styling video controls to present them in a manner consistent across modern browsers is normally a nightmare.

For this reason, the default video controls have been removed and re-created from elements easier to style; including play/pause, time updates, the progress slider, picture-in-picture mode and the fullscreen trigger.

## Getting Started

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

You can then consume the functionality of the package as so:

```typescript
import { player } from "@calstack/video";
```

Make sure to also include the CSS for the library:

**CSS (with bundling)**

```typescript
import "@calstack/video/style.css";
```

**CSS / SCSS**

```css
@import "@calstack/video/style.css";
```

## Creating Video Player

To mitigate developing having to implement superfluous boilerplate, the video element will be created dynamically and rendered onto the page.

In order to do so, we must provide either a string selector or an HTML element to be the wrapper for our video player:

Example usage:

```typescript
// Example of passing selector to player
import { player } from "@calstack/video";

player("[data-selector='target']", {
    src: "<Insert relevant URL here>",
});

// Example of passing element to player
const container = document.querySelector("[data-selector='target']");

player(container, {
    src: "<Insert relevant URL here>",
});
```

Above we pass in the element or selector as the first argument to `player`, but you may have also noticed we're passing in an object as the second argument. This options argument is mandatory and is how we provide options/configuration to tailor the video player to our needs.

The `src` property is the only mandatory field in options, as it is required in order to build the media, controls and events.

If you're using TypeScript, the options object must satisfy the `PlayerOptions` type, which is also exported by `@calstack/video`.

## Options

|    Property     |                  Signature                  |                                Purpose                                |
| :-------------: | :-----------------------------------------: | :-------------------------------------------------------------------: |
|   `autoplay`    |           `boolean \| undefined`            |                  Play the video as soon as it loads.                  |
|   `controls`    |           `boolean \| undefined`            |            Render video controls to allow user interaction            |
| `maxTimeFormat` |     `"hours" \| "minutes" \| undefined`     | If video is an hour long, show either hours or total minutes instead  |
|      `src`      |                  `string`                   |                      The URL to the video media                       |
|   `subtitles`   | `Partial<HTMLTrackElement>[]; \| undefined` | Configuration for subtitles to loop over and create `track` elements. |

## CSS Variables

To enhance customisability, many of the style values have been abstracted to CSS variables, all set on the root `html` element to allow easy overrides.

The US spelling is used for `color` as opposed to the UK's `colour` to avoid confusion with the `color` CSS property.

|                 Variable                  |                                         Use                                          |
| :---------------------------------------: | :----------------------------------------------------------------------------------: |
|      `--calstack-video-accent-color`      |                 The main colour used for buttons and progress bars.                  |
|   `--calstack-video-accent-color-dark`    |              The dark mode variant of `--calstack-video-accent-color`.               |
|       `--calstack-video-box-shadow`       |                       The box shadow around the video player.                        |
|    `--calstack-video-box-shadow-dark`     |               The dark mode variant of `--calstack-video-box-shadow`.                |
|   `--calstack-video-brightness-active`    |           The colour of the progress bar when the user drags on the thumb.           |
|    `--calstack-video-brightness-hover`    |             The colour of the progress bar when the user hovers over it.             |
|   `--calstack-video-control-bar-color`    |                      The background colour of the control bar.                       |
| `--calstack-video-control-bar-color-dark` |            The dark mode variant of `--calstack-video-control-bar-color`.            |
|       `--calstack-video-text-color`       |                          The colour of text e.g. the time.                           |
|    `--calstack-video-text-color-dark`     |               The dark mode variant of `--calstack-video-text-color`.                |
|      `--calstack-video-thumb-height`      |                       The height of the progress bar's thumb.                        |
|      `--calstack-video-track-color`       | The background colour of the progress bar (current progress will use accent colour). |
|    `--calstack-video-track-color-dark`    |               The dark mode variant of `--calstack-video-track-color`.               |
|      `--calstack-video-track-height`      |                            The height of the progress bar                            |

<!-- TODO: Include documentation for exported types -->****
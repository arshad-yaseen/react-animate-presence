# react-animate-presence

A lightweight and flexible React hook for managing enter/exit animations with CSS classes. Easily add smooth transitions to your components as they mount and unmount.

## Features

- 🚀 Simple API for managing enter/exit animations
- 🎨 Works with custom CSS classes and Tailwind CSS
- 🔄 Smooth transitions between mount and unmount states
- 🎭 Customizable animation durations and styles

## Installation

```bash
npm install react-animate-presence
```

## Usage

### Basic Example

```jsx
import React, {useState} from 'react';

import useAnimatePresence from 'react-animate-presence';

function MyComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const {ref, animationClassName, isRendered} = useAnimatePresence({
    visible: isVisible,
    animation: {
      enter: 'fade-in',
      exit: 'fade-out',
    },
    onExitComplete: () => console.log('Exit animation completed'),
  });

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isRendered && (
        <div ref={ref} className={animationClassName}>
          Fade in/out content
        </div>
      )}
    </>
  );
}
```

### With CSS

Define your animation classes in your CSS file:

```css
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

.fade-out {
  animation: fadeOut 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### With Tailwind CSS

If you're using Tailwind CSS, you can define custom animation classes in your `tailwind.config.ts`:

```js
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'fade-out': 'fadeOut 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
      },
    },
  },
};

export default config;
```

Then use these classes in your component:

```jsx
const {ref, animationClassName, isRendered} = useAnimatePresence({
  visible: isVisible,
  animation: {
    enter: 'animate-fade-in',
    exit: 'animate-fade-out',
  },
});
```

## API

`useAnimatePresence<T extends HTMLElement = HTMLDivElement>(props: UseAnimatePresenceProps): UseAnimatePresenceReturn<T>`

#### Props

| Prop             | Type              | Default | Description                                                     |
| ---------------- | ----------------- | ------- | --------------------------------------------------------------- |
| `visible`        | `boolean`         | `false` | Whether the element should be visible                           |
| `animation`      | `AnimationConfig` | -       | Object containing enter and exit animation class names          |
| `onExitComplete` | `() => void`      | -       | Optional callback function called when exit animation completes |

#### Returns

| Property             | Type                 | Description                                       |
| -------------------- | -------------------- | ------------------------------------------------- |
| `ref`                | `React.RefObject<T>` | Ref to be attached to the animated element        |
| `animationClassName` | `string`             | Current animation class name                      |
| `isRendered`         | `boolean`            | Whether the element should be rendered in the DOM |

## License

MIT © [Arshad Yaseen]

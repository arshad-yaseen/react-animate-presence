# react-animate-presence

A lightweight and flexible React hook for managing enter/exit animations with CSS classes or Tailwind CSS. Easily add smooth transitions to your components as they mount and unmount.

## Features

- 🚀 Simple hook for managing enter/exit animations
- 🎨 Works with any custom CSS animations and Tailwind CSS animations
- 🔄 Smooth transitions between mount and unmount states

## The problem

While animating a modal opening in React is straightforward, adding closing animations is challenging. Exit animations are tricky because components typically unmount immediately. A common workaround is keeping the element mounted, but this can impact performance and accessibility.

## The solution

**react-animate-presence** solves this issue by managing both enter and exit animations efficiently.

Check out the [demo here](https://react-animate-presence.vercel.app).

## Installation

```bash
npm install react-animate-presence
```

## useAnimatePresence Usage

### Basic Example

```jsx
import {useState} from 'react';

import {useAnimatePresence} from 'react-animate-presence';

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

## useAnimatePresence API

```typescript
useAnimatePresence<T extends HTMLElement = HTMLDivElement>(props: UseAnimatePresenceProps): UseAnimatePresenceReturn<T>
```

#### Props

| Prop             | Type              | Default | Description                                               |
| ---------------- | ----------------- | ------- | --------------------------------------------------------- |
| `visible`        | `boolean`         | `false` | Controls the visibility of the element                    |
| `animation`      | `AnimationConfig` | -       | Defines CSS class names for enter and exit animations     |
| `onExitComplete` | `() => void`      | -       | Optional callback triggered when exit animation completes |

#### Returns

| Property             | Type                 | Description                                                 |
| -------------------- | -------------------- | ----------------------------------------------------------- |
| `ref`                | `React.RefObject<T>` | React ref to be attached to the animated element            |
| `animationClassName` | `string`             | Current active animation class name                         |
| `isRendered`         | `boolean`            | Indicates if the element should be rendered in the DOM      |
| `isExiting`          | `boolean`            | Indicates if the element is currently in its exit animation |

## Contributing

For guidelines on contributing, Please read the [contributing guide](https://github.com/arshad-yaseen/react-animate-presence/blob/main/CONTRIBUTING.md).

We welcome contributions from the community to enhance react-animate-presence capabilities and make it even more powerful ❤️

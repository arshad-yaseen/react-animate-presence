/**
 * Configuration for enter and exit animations.
 */
export interface AnimationConfig {
  /** Class name for the enter animation */
  enter: string;
  /** Class name for the exit animation */
  exit: string;
}

/**
 * Props for the useAnimatePresence hook.
 */
export interface UseAnimatePresenceProps {
  /** Configuration object containing enter and exit animation class names */
  animation: AnimationConfig;
  /**
   * Flag to determine if the element should be visible
   * @default false
   */
  visible?: boolean;
  /** Optional callback function triggered when exit animation completes */
  onExitComplete?: () => void;
}

/**
 * Return type for the useAnimatePresence hook.
 * @template T - Type of the HTML element (default: HTMLDivElement)
 */
export interface UseAnimatePresenceReturn<T = HTMLDivElement> {
  /** Ref to be attached to the animated element */
  ref: React.RefObject<T>;
  /** Current active animation class name */
  animationClassName: string;
  /** Flag indicating whether the element should be rendered in the DOM */
  isRendered: boolean;
  /** Flag indicating whether the element is currently in its exit animation */
  isExiting: boolean;
}

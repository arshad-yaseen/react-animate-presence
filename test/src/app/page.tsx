'use client';

import {useState} from 'react';

import {useAnimatePresence} from 'react-animate-presence';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const {ref, animationClassName, isRendered, isExiting} = useAnimatePresence({
    visible: isVisible,
    animation: {
      enter: 'animate-slide-in',
      exit: 'animate-slide-out',
    },
  });

  return (
    <main className="flex min-h-screen w-screen flex-col items-center md:pt-40 pt-20 space-y-5 px-5">
      <div className="flex space-x-4 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-neutral-700">
            isRendered:
          </span>
          <span
            className={`text-md ${isRendered ? 'text-green-600' : 'text-red-600'}`}>
            {isRendered ? 'True' : 'False'}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-neutral-700">
            IsExiting:
          </span>
          <span
            className={`text-md ${isExiting ? 'text-green-600' : 'text-red-600'}`}>
            {isExiting ? 'True' : 'False'}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-neutral-700">
            animationClassName:
          </span>
          <span className="text-md text-blue-600">{animationClassName}</span>
        </div>
      </div>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isRendered && (
        <div
          ref={ref}
          className={`md:w-1/2 w-full p-4 bg-white rounded-lg border border-neutral-300 ${animationClassName}`}>
          <h1 className="text-2xl font-bold">Hello, World!</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}
    </main>
  );
}

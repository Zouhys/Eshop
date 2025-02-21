// polyfills.ts
if (typeof global.setImmediate === 'undefined') {
    // @ts-ignore
    global.setImmediate = (fn: (...args: any[]) => void, ...args: any[]) => {
      return setTimeout(fn, 0, ...args);
    };
  }
  
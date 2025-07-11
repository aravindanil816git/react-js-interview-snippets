const useCustomMemo = (callback, dependency) => {
  const expensiveResult = useRef();
  const dep = useRef(dependency);

  const hasDepChanged = () => {
    return dependency.some((d, idx) => !Object.is(d, dep.current[idx]));
  };

  if (hasDepChanged() || expensiveResult.current === undefined) {
    expensiveResult.current = callback();
    dep.current = dependency;
  }
  return expensiveResult.current;
};

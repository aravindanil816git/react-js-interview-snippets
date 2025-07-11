const useCustomUseState = (initalVal) => {
  const value = useRef(initalVal);
  const [_, render] = useReducer((x) => x + 1, 0);

  const handleChange = (cb) => {
    let newVal = null;
    if (typeof cb === "function") {
      newVal = cb(value.current);
    } else {
      newVal = cb;
    }

    if (!Object.is(newVal, value.current)) {
      value.current = newVal;
      render();
    }
  };

  return [value.current, handleChange];
};

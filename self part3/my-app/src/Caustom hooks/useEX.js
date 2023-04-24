import { useState } from 'react';

export function useEX(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  

  return [value,handleChange];
}

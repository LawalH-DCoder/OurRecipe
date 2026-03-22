import { useEffect, useState } from "react";

const EffectSample = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setInputValue(e.target.value?.trim());
  };

  useEffect(() => {
    document.title = `${inputValue} ${count}`;
  }, [count]);

  return (
    <div className="flex flex-col gap-2 items-center jutsiyf-center mt-[10rem]">
      Hey There! click the button to increase the count below. You can also set
      the name by typing it
      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        className="border rounded"
        value={inputValue}
      />
      <button onClick={incrementCount}>Click Me</button>
      <p>{count}</p>
    </div>
  );
};

export default EffectSample;

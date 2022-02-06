import { useEffect, useState } from "react";
import { useInverseDebounce } from "@skapxd/debounce";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [inverseDebounceText, setInverseDebounceText] = useState("");

  const inverseDebounce = useInverseDebounce({
    minimumDelay: 1000,
    // 2-Receive param text (or any argument) of useState
    fn: (value) => setInverseDebounceText(value)
  });

  useEffect(() => {
    if (!text && text === "") return;

    // 1-Send param text (or any argument) of useState
    inverseDebounce(text);
  }, [text]);

  return (
    <div className="App">
      <div>
        <label>
          <b> debounce input: </b>
        </label>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </div>
      <br />
      <div>
        <label>
          <b>debounce output:</b>
        </label>
        <span>{inverseDebounceText}</span>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useDebounce } from "@skapxd/debounce";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [debounceText, setDebounceText] = useState("");

  const debounce = useDebounce({
    delay: 1000,
    // 2-Receive param text (or any argument) of useState
    fn: (value) => setDebounceText(value)
  });

  useEffect(() => {
    if (!text && text === "") return;

    // 1-Send param text (or any argument) of useState
    debounce(text);
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
        <span>{debounceText}</span>
      </div>
    </div>
  );
}

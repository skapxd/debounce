import { Debounce } from "@skapxd/debounce";
import "./styles.css";

const input = document.querySelector("#debounce_input");
const output = document.querySelector("#debounce_output");

const debounce = Debounce({
  delay: 1000,
  fn: (e) => {
    output.innerHTML = input.value;
  }
});

input.addEventListener("input", debounce);

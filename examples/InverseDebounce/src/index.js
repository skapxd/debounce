import "./styles.css";
import { InverseDebounce } from "@skapxd/debounce";

const input = document.querySelector("#debounce_input");
const output = document.querySelector("#debounce_output");

const inverseDebounce = InverseDebounce({
  minimumDelay: 1000,
  fn: (values) => {
    console.log({ values });
    output.innerHTML = values;
  }
});

input.addEventListener("input", () => inverseDebounce(input.value));

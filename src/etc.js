import { Debounce } from "./index.js";

const debounce = Debounce({
    delay: 1000,
    fn: () => console.log('hello world')
})

debounce();
debounce();
debounce();
debounce();
debounce();
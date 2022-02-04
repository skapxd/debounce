# How to use

## Vanilla 
```js

import { Debounce } from "@skapxd/debounce";

const debounce = Debounce({
    delay: 1000,
    fn: () => console.log('hello world')
})

debounce();
debounce();
debounce();
debounce();
debounce();
```

## React 
```js

import { useDebounce } from "@skapxd/debounce";

const debounce = useDebounce({
    delay: 1000,
    fn: () => console.log('hello world')
})

debounce();
debounce();
debounce();
debounce();
debounce();
```
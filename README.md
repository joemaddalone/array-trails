# array-trails

Traverse arrays in interesting ways.

## Installation

```sh
npm install --save array-trails
```

## Usage

```js
import { cycle, scan, bounce } from 'array-trails'
```

### cycle

Iterate through any flat array in a loop that begins again at the `startingIndex` once an end is reached.
`cycle` accepts the following arguments, all arguments are optional.

* `arr`
  * this is a flat array to cycle through
* `dir`
  * `f` (forwards or right) or `r` (reverse or left)
  * the default is `f`
* `startingIndex`
  * where in the array to begin the cycle
  * the default is 0

Once your cycle generator is instantiated you can retrieve the next element in the cycle by calling: `[generator].next().value` which will return an object containing `{el: the element, col: index of the element}`

```js
const cycler = cycle([0, 1, 2, 3])
cycler.next().value.el // 0
cycler.next().value.el // 1
cycler.next().value.el // 2
cycler.next().value.el // 3
cycler.next().value.el // 0
cycler.next().value.el // 1
cycler.next().value.el // 2
cycler.next().value.el // 3
// ... and so on forever.
```

### scan

Iterate through any flat array in a loop that reverses direction once an end is reached.
`scan` accepts the following arguments, all arguments are optional.

* `arr`
  * this is a flat array to scan through
* `dir`
  * `f` (forwards or right) or `r` (reverse or left)
  * the default is `f`
* `startingIndex`
  * where in the array to begin the scan
  * the default is 0

Once your scan generator is instantiated you can retrieve the next element in the scan by calling: `[generator].next().value` which will return an object containing `{el: the element, col: index of the element}`

```js
const scanner = scan(arr, [dir = 'f', startingIndex = 0])
const firstElement = scanner.next().value.el
const secondElement = scanner.next().value.el
const thirdElement = scanner.next().value.el
// ... and so on forever.
```

```js
let scanner = scan([0, 1, 2, 3])
scanner.next().value.el // 0
scanner.next().value.el // 1
scanner.next().value.el // 2
scanner.next().value.el // 3
scanner.next().value.el // 2
scanner.next().value.el // 1
scanner.next().value.el // 0
scanner.next().value.el // 1
// ... and so on forever.
```

### bounce

Iterate through any two-dimensional array in a loop that creates a bouncing pattern once an end is reached.  `bounce` always starts moving down and to the right.

`bounce` accepts the following arguments, all arguments are optional.

* `arr`
  * this is a two-dimensional array to bounce through
* `sx`
  * starting x or col index
  * the default is 0
* `sy`
  * starting y or row index
  * the default is 0

Once your bounce generator is instantiated you can retrieve the next element in the scan by calling: `[generator].next().value` which will return an object containing `{el: the element, row: index of the element's array, col: element index}`

```js
const bouncer = bounce([
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L']
])
bouncer.next().value.el // 'A'
bouncer.next().value.el // 'F'
bouncer.next().value.el // 'K'
bouncer.next().value.el // 'H'
bouncer.next().value.el // 'C'
bouncer.next().value.el // 'F'
bouncer.next().value.el // 'I'
bouncer.next().value.el // 'F'
// ... and so on forever.
```

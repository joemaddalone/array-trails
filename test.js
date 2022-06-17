import assert from 'node:assert'
import { cycle, scan, bounce } from './index.js'

let cycler = cycle([0, 1, 2, 3])
assert.strictEqual(cycler.next().value.el, 0)
assert.strictEqual(cycler.next().value.el, 1)
assert.strictEqual(cycler.next().value.el, 2)
assert.strictEqual(cycler.next().value.el, 3)
assert.strictEqual(cycler.next().value.el, 0)
assert.strictEqual(cycler.next().value.el, 1)
assert.strictEqual(cycler.next().value.el, 2)
assert.strictEqual(cycler.next().value.el, 3)

cycler = cycle([0, 1, 2, 3])
assert.strictEqual(cycler.next().value.col, 0)
assert.strictEqual(cycler.next().value.col, 1)
assert.strictEqual(cycler.next().value.col, 2)
assert.strictEqual(cycler.next().value.col, 3)
assert.strictEqual(cycler.next().value.col, 0)
assert.strictEqual(cycler.next().value.col, 1)
assert.strictEqual(cycler.next().value.col, 2)
assert.strictEqual(cycler.next().value.col, 3)

let scanner = scan([0, 1, 2, 3])
assert.strictEqual(scanner.next().value.el, 0)
assert.strictEqual(scanner.next().value.el, 1)
assert.strictEqual(scanner.next().value.el, 2)
assert.strictEqual(scanner.next().value.el, 3)
assert.strictEqual(scanner.next().value.el, 2)
assert.strictEqual(scanner.next().value.el, 1)
assert.strictEqual(scanner.next().value.el, 0)
assert.strictEqual(scanner.next().value.el, 1)

scanner = scan([0, 1, 2, 3])
assert.strictEqual(scanner.next().value.col, 0)
assert.strictEqual(scanner.next().value.col, 1)
assert.strictEqual(scanner.next().value.col, 2)
assert.strictEqual(scanner.next().value.col, 3)
assert.strictEqual(scanner.next().value.col, 2)
assert.strictEqual(scanner.next().value.col, 1)
assert.strictEqual(scanner.next().value.col, 0)
assert.strictEqual(scanner.next().value.col, 1)

let bouncer = bounce([
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L']
])
assert.strictEqual(bouncer.next().value.el, 'A')
assert.strictEqual(bouncer.next().value.el, 'F')
assert.strictEqual(bouncer.next().value.el, 'K')
assert.strictEqual(bouncer.next().value.el, 'H')
assert.strictEqual(bouncer.next().value.el, 'C')
assert.strictEqual(bouncer.next().value.el, 'F')
assert.strictEqual(bouncer.next().value.el, 'I')
assert.strictEqual(bouncer.next().value.el, 'F')

bouncer = bounce([
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L']
])
assert.strictEqual(bouncer.next().value.col, 0)
assert.strictEqual(bouncer.next().value.col, 1)
assert.strictEqual(bouncer.next().value.col, 2)
assert.strictEqual(bouncer.next().value.col, 3)
assert.strictEqual(bouncer.next().value.col, 2)
assert.strictEqual(bouncer.next().value.col, 1)
assert.strictEqual(bouncer.next().value.col, 0)
assert.strictEqual(bouncer.next().value.col, 1)

bouncer = bounce([
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L']
])
assert.strictEqual(bouncer.next().value.row, 0)
assert.strictEqual(bouncer.next().value.row, 1)
assert.strictEqual(bouncer.next().value.row, 2)
assert.strictEqual(bouncer.next().value.row, 1)
assert.strictEqual(bouncer.next().value.row, 0)
assert.strictEqual(bouncer.next().value.row, 1)
assert.strictEqual(bouncer.next().value.row, 2)
assert.strictEqual(bouncer.next().value.row, 1)

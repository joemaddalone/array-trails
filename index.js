/**
 * @param  {array} arr
 * @param  {string} dir="f"
 * @param  {number} si=0
 */
export const scan = function * (arr, dir = 'f', startingIndex = 0) {
  const end = arr.length - 1
  let index = dir === 'f' ? -1 : end + 1
  if (startingIndex !== null) {
    if (dir === 'f') {
      index = startingIndex - 1
    } else {
      index = startingIndex + 1
    }
  }

  while (true) {
    if (dir === 'f') {
      if (index !== end) {
        index++
      } else {
        dir = 'r'
        index--
      }
    } else {
      if (index !== 0) {
        index--
      } else {
        dir = 'f'
        index++
      }
    }
    yield { el: arr[index], col: index }
  }
}
/**
 * @param  {array} arr
 * @param  {number} sx
 * @param  {number} sy
 * @param  {number} initMx=1
 * @param  {number} initMy=1
 */
export const bounce = function * (arr, sx, sy) {
  let mx = 1
  let my = 1
  // // Because the first yield adds mx/my we reduce sx/sy by mx/my.
  let x = sx ? sx - 1 : -1
  let y = sy ? sy - 1 : -1
  const w = arr.length - 1
  const h = (arr[0] && arr[0].length - 1) || 0
  while (true) {
    if (mx + x > w || mx + x < 0) {
      mx *= -1
    }
    if (my + y > h || my + y < 0) {
      my *= -1
    }
    x = x + mx
    y = y + my
    yield { el: arr?.[x]?.[y] || 0, row: x, col: y }
  }
}
/**
 * @param  {array} arr
 * @param  {string} d="f"
 * @param  {number} si
 */
export const cycle = function * (arr, d = 'f', startingIndex = 0) {
  let index = startingIndex ? startingIndex - 1 : -1
  const dir = d || 'f'
  const w = arr.length - 1
  while (true) {
    if (dir === 'f') {
      if (index === w) {
        index = -1
      }
      index++
    } else {
      if (index <= 0) {
        index = w + 1
      }
      index--
    }
    yield { el: arr[index], col: index }
  }
}

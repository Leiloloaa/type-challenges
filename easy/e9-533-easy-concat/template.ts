type Concat<T extends any[], U extends any[]> = [...T, ...U]

// js 类比学习

function myConcat(a, b) {
  return [...a, ...b]
}

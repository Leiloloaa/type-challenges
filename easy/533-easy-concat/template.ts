type Concat<T extends [], U extends []> = [...T, ...U]

// js 类比学习

function myConcat(a, b) {
  return [...a, ...b]
}

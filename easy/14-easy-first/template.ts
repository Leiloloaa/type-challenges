type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// js 类比

// 如果 arr 长度等于 0 就等于 never 否则等于 第一项
// arr.length === 0 ? never : arr[0]

// 转换到 ts 中就是 T['length'] extends 0
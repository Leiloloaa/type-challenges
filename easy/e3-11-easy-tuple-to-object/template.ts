// type TupleToObject<T extends readonly any[]> = {
//   [P in T[number]]: P
// }

// === 为了控制输入的值 ===
type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}


type r = TupleToObject<typeof tuple>;

// 首先我们要做的事情就是 把 js 世界的东西 转换成 ts 世界的东西
// const、let 这些都是 js 世界
// type、interface 这些都是 ts 世界

// typeof 的作用就是 将 js 转换成 ts

// 题目的要求就是 传入 一个 数组 得到 一个 对象 key/value 值都是 原先数组中的 值

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// as const 表示什么意思呢？
// const 表示常量 是不可以修改的
// 而对于 数组 和 对象 里面的值还是可以改的
// as const 表示 数组中的没一项 都是 不可修改的

// 通过 js 的方式类比 ts 学习

// function tupleObject(array) {
//   let obj = {}
//   for (const key in array) {
//     obj[key] = key
//   }
//   return obj
// }

//  [P in T[number]]:T[P]
// in 表示遍历 而 T[number] 是语法 表示遍历一个数组

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// ts-expect-error 是表示 ts 期望报错 也就是一个错误断言
// 题目中要求传入的是一个数组 然后将这个数组转换成 一个对象
// js 中对象的特点就是 key 只能是 string、number、symbol
// es6 的 map 才能支持
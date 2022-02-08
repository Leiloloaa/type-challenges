type Length<T extends readonly (number | string | symbol)[]> = T['length']

// 要确保 传入的值是 数组 且 是 const 类型 => readonly
// T['length'] 表示长度

// 什么是 tuple(元组) 类型
//    数组的另外一种类型。定死定长的数组类型
// tuple 和 普通数组 有什么区别
//    类数组，它能清晰的描述数组中每一个元素的类型

type StringNumberPair = [string, number]

const str: StringNumberPair = ['123', 123]

// 获取 tuple 的 length 和 普通数组的 length 有没有区别
type t1 = StringNumberPair['length']

type stringArr = string[]
type t2 = stringArr['length']

// js
function getLength(arr) {
  if (Array.isArray(arr)) return
  return arr.length
}
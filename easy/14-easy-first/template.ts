// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

// T[number]

type ages = []
// union
type t1 = ages[number]

//看看 某个值是不是在 union 里面
// type t2 = T[0] extends ages[number] ? "true":"false"


// js 类比
function first(arr) {
  // 如果 arr 不是一个 空数组 就返回 第一个值 否则返回 never
  // 解构出来
  // 如果 arr 长度等于 0 就等于 never 否则等于 第一项
  // arr.length === 0 ? "never" : arr[0]
  const [first, ...rest] = arr
  return first ? first : "never"
}

// 转换到 ts 中就是 T['length'] extends 0

// 可以使用四种方式实现
// 1. extends 类型条件判断
//    表示 a 是否出自 b
//    T[] extends []
// 2. 获取 tuple 的 length 属性  indexed
//    T["length"] 表示长度
//    T["length"] extends 0 ? never : T[0]
// 3. extends union  判断的规则
//    T[number] 表示遍历 得到是 联合类型 如果不存在就是 never
//    T[0] extends T[number] ? T[0] : never
// 4. infer 的使用(推断)
//    infer 有点类似解构
//    T extends [infer First, ...infer Rest]? First : never;
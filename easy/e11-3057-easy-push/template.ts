type Push<T extends unknown[], U> = U extends unknown[] ? [...T, ...U] : [...T, U extends boolean ? boolean : U]

// 类比 js 
// 相当与是实现一个 Array.push 方法
// 如果是两个都是 数组 就直接解构
// [...arr1,...arr2]
// 如果第二个不是数组 就判断 是否是布尔值
// arr2 instanceof Array ? [...arr1,...arr2] :  typeof arr2 === 'boolean' ? boolean : arr2

type test = Push<[1], [1, 2]>
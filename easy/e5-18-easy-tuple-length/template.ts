type Length<T extends readonly (number | string | symbol)[]> = T['length']

// 要确保 传入的值是 数组 且 是 const 类型 => readonly
// T['length'] 表示长度
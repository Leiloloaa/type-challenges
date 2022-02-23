type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer p ? p : never

// return 需要返回的值

// 1、传入的参数类型有很多种 所以使用下方的形式
// T extends (...args: any) => any
// 2、使用 infer 类型推断 返回值得类型
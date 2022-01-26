type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : []

// parameter 是获取参数中的类型 生成一个元组

type test = MyParameters<(arg1: string, arg2: number) => { }>
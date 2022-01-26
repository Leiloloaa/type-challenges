// 这样不能通过所有的测试
// type Includes<T extends readonly unknown[], U> = U extends T[number] ? true : false;

// include 表示包含

type IsEqual<F, U> = (<T>() => T extends F ? true : false) extends (<T>() => T extends U ? true : false) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer R, ...infer args] ? IsEqual<R, U> extends true ? true : Includes<args, U> : false;
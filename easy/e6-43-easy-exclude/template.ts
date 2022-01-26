type MyExclude<T, U> = T extends U ? never : T

type AB = 'a' | 'b'
type BC = 'b' | 'c'
type Demo = MyExclude<AB, BC>

type Str = 'a' | 'b' | 'c';

// type R = Exclude<'a' | 'd', Str>;

// 相当于
type R = Exclude<'a', Str> | Exclude<'d', Str>

// exclude 是不包括 包括就返回 never 否则就返回这个类型
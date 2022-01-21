type If<C extends Boolean, T, F> = C extends true ? T : F;

// C 如果是 true 就返回 T 否则 返回 F
// 判断条件要使用 extends
// extends 类型条件判断
// 表示 a 是否出自 b
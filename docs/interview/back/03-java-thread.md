# 第三章 Java 多线程

## 基础

::: details <font class=details-interview-title>1. 线程和进程区别 ？</font>

:::

::: details <font class=details-interview-title>2. 线程创建方式 ？</font>

:::

::: details <font class=details-interview-title>3. 单核CPU 下为什么不使用多线程？</font>

:::

::: details <font class=details-interview-title>4. 什么是用户线程和守护线程 ？</font>

:::

::: details <font class=details-interview-title>5. 多线程有哪5种状态 ？</font>

:::

::: details <font class=details-interview-title>6. 什么是线程安全问题 ？</font>

:::

::: details <font class=details-interview-title>7. 如何解决线程安全问题 ？</font>

:::

::: details <font class=details-interview-title>8. Synchroized 锁用法 ？</font>

:::

::: details <font class=details-interview-title>9. Web 使用 Synchroized 关键注意事项</font>

:::

::: details <font class=details-interview-title>10. Lock 与 读写锁用法 ？</font>

:::

::: details <font class=details-interview-title>11. Synchronized 与 Lock 之间区别 ？</font>

:::

::: details <font class=details-interview-title>12. 如何理解锁的重入性 ？</font>

:::

::: details <font class=details-interview-title>13. 多线程产生死锁的原因 ？</font>

:::

::: details <font class=details-interview-title>14. 如何排查程序中出现死锁的现象 ？</font>

:::

::: details <font class=details-interview-title>15. 多线程之间是如何实现通信的 ？</font>

:::

::: details <font class=details-interview-title>16. wait、notify、join 分别是什么 ？</font>

:::


## 并发编程

### 考察 Volatile 关键字底层

::: details <font class=details-interview-title>1. 什么是 volatile 关键字 ？ </font>

volatile 关键字，在多线程中，将共享变量数据写入到 CPU 高速缓存中。<br>
作用：
- 保证可见性
- 禁止重排序

:::

::: details <font class=details-interview-title>2. JMM 内存模型 ？ </font>

:::

::: details <font class=details-interview-title>3. 多核 CPU 中为何 Volatile 伪共享问题 ？ </font>

:::

::: details <font class=details-interview-title>4. Jmm 底层分析为什么 Volatile 不能保证原子性 ？ </font>

答： Volatile 只能保证可见性，但不能够保证原子性。<br>
案例：在多线程情况下：
- 如果有一个线程修改了共享变量数据，将修改结果刷新到主内存中。
- 当前状态变为 M 修改状态再通过总线嗅探机制将另其他的线程中工作内存副本数据变为无效，相当于有可能其他数据修改后产生数据丢失，所以无法保证原子性问题。<br>

:::

::: details <font class=details-interview-title>6. 什么是重排序？ </font>
Jmm 模型允许编译器 和 cpu 处理器 对指令代码实现重排序。<br>
作用：提高运行效率，`只会对不存在数据依赖的指令`实现重排序。<br>
提醒：
- 在单线程的情况下，重排序保证最终执行结果与程序顺序执行结果一致性。
- 在多线程情况下，会产生乱序。

:::

::: details <font class=details-interview-title>7. 多线程情况下, Volatile 重排序后，可能存在的问题 ？ </font>

:::

::: details <font class=details-interview-title>8. 单例中双重检验锁为什么需要加上 Volatitle ？</font>

:::

::: details <font class=details-interview-title>9. Synchronized 与 Volatile 存在区别 ？</font>

:::

### 考察 锁的底层

::: details <font class=details-interview-title>1. 悲观锁与乐观锁区别 ？</font>
:::

::: details <font class=details-interview-title>2. 定义事务没有提交或者回滚事务的情况下 ？</font>
:::


::: details <font class=details-interview-title>3. 公平锁和非公平锁之间的区别 ？</font>
:::


::: details <font class=details-interview-title>4. 独占锁和共享锁之间的区别 ？</font>
:::

::: details <font class=details-interview-title>5. 如何理解解锁的可重入性问题 ？</font>
:::

::: details <font class=details-interview-title>6. Java 自旋锁的实现原理 ？</font>
:::

::: details <font class=details-interview-title>7. Java 轻量锁、偏向锁、轻量级锁 ？</font>
:::




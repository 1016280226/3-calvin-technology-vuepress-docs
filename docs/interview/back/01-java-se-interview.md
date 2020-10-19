# 第一章 Java 基础面试

## 1. 面向对象的特征

::: details <font class=details-interview-title>面向对象的有哪些特征 ？</font>

### 封装

封装最好理解了。封装是面向对象的特征之一，是对象和类概念的主要特性。 封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。

### 继承

面向对象编程 (OOP) 语言的一个主要功能就是“继承”。继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。

### 多态

多态性（polymorphisn）是允许你将父对象设置成为和一个或更多的他的子对象相等的技术，赋值之后，父对象就可以根据当前赋值给它的子对象的特性以不同的方式运作。简单的说，就是一句话：允许将子类类型的指针赋值给父类类型的指针。 实现多态，有二种方式，覆盖，重载。

:::

---

## 2. 覆盖和重载区别

::: details <font class=details-interview-title>覆盖 和 重载区别？</font>

### 覆盖

子类继承了父类的方法，对父类方法进行重新编写。

### 重载

和父类方法名相同，方法参数不同。

:::

---

## 3. final、finally、 finalize 的区别

::: details <font class=details-interview-title> final、finally、 finalize 的区别 ？</font>

### final

用于`声明属性,方法和类`, 分别表示

- 属性不可变 

- 方法不可覆盖
-  类不可继承

### finally

是异常处理语句结构的一部分，表示`总是执行.`

### finalize

是Object类的一个方法，在垃圾收集器执行的时候，`会调用被回收对象的此方法`, 可以覆盖此方法提供垃圾收集时的其他资源回收。

> 例如：关闭文件等. JVM不保证此方法总被调用.

:::

---

## 4. int 和 Integer 有什么区别

::: details <font class=details-interview-title> int 和 Integer 有什么区别 ？</font>

### int

- int 是 Java 提供的 8 种原始数据类型之一。Java 为每个原始类型提供了封装类。
- int 的默认值为 `0`，

### Integer

- Integer 是 Java 为 int 提供的封装类。 
-  Integer 的默认值为 `null`，是引用类型。

:::

## 5. 抽象类和接口区别

::: details <font class=details-interview-title> 抽象类和接口有什么区别 ？</font>

| 参数                 | 抽象类                                                       | 接口                                                         |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 默认的方法实现       | 它可以有默认的方法实现                                       | 接口完全是抽象的。它根本不存在方法的实现                     |
| 实现                 | 子类使用 extends 关键字来继承抽象类。如果子类不是抽象类的话，它需要提供抽象类中所有声明抽象的方法的实现。 | 子类使用关键字 implements 来实现接口。它需要提供接口中所有声明的方法的实现 |
| 构造器               | 抽象类可以有构造器                                           | 接口不能有构造器                                             |
| 与正常 Java 类的区别 | 除了你不能实例化抽象类之外，它和普通Java类没有任何区别       | 接口是完全不同的类型                                         |
| 访问修饰符           | 抽象方法可以有 public、protected 和 default 这些修饰符       | 接口方法默认修饰符是 public。你不可以使用其它修饰符。        |
| main 方法            | 抽象方法可以有 main 方法并且我们可以运行它                   | 接口没有 main 方法，因此我们不能运行它。                     |
| 多继承               | 抽象类可以继承一个类`和`实现多个接口                         | 接口只可以继承一个接口`或`多个其它接口                       |
| 速度                 | 它比接口速度要快                                             | 接口是稍微有点慢的，因为它需要时间去寻找在类中实现的方法。   |
| 添加新方法           | 如果你往抽象类中添加新的方法，你可以给它提供默认的实现。因此你不需要改变你现在的代码。 | 如果你往接口中添加方法，那么你必须改变实现该接口的类。       |

:::

## 6. 说说反射的用途及实现

::: details <font class=details-interview-title> 反射的用途及实现</font>

### 反射的用途

1. 反射是什么

   `反射是在运行期间, 获取类或对象的属性、方法、构造函数等对象信息。`

2. 为什么要使用反射？

   `也可以解决 Java 泛型擦除等令人苦恼的问题。`

3. 反射用在哪些的方？

   `在很多的项目比如 Spring，MyBatis 都都可以看到反射的身影。通过反射机制，我们可以在运行期间获取对象的类型信息。利用这一点我们可以实现工厂模式和代理模式等设计模式`

### 反射的实现

在 Java 中有下列方法可以获取一个对象的反射类

1. 通过 `getClass()` 方法
2. 通过 `Class.forName()` 方法
3. 使用 `类.class`
4. 通过类加载器实现，`getClassLoader()`

:::

## 7. 自定义注解的场景及实现

::: details <font class=details-interview-title> 自定义注解的场景及实现</font>

### 自定义注解的场景

登陆、权限拦截、日志处理，以及各种 Java 框架，如 Spring，Hibernate，JUnit 提到注解就不能不说反射，

Java 自定义注解是通过运行时靠反射获取注解。

### 自定义注解的实现

实际开发中，例如我们要获取某个方法的调用日志，可以通过 AOP（动态代理机制）给方法添加切面，通过反射来获取方法包含的注解，如果包含日志注解，就进行日志记录。反射的实现在 Java 应用层面上讲，是通过对 Class 对象的操作实现的，Class 对象为我们提供了一系列方法对类进行操作。在 JVM 这个角度来说，Class 文件是一组以 8 位字节为基础单位的二进制流，各个数据项目按严格的顺序紧凑的排列在 Class 文件中，里面包含了类、方法、字段等等相关数据。通过对 Class 数据流的处理我们即可得到字段、方法等数据。

:::

## 8. HTTP 请求的 GET 与 POST 方式的区别

::: details <font class=details-interview-title> HTTP 请求的 GET 与 POST 方式的区别</font>

### HTTP GET

- 根据 HTTP 规范，GET 用于信息获取，而且应该是安全的和幂等的。
- 首先是 "GET 方式提交的数据最多只能是 1024 字节"，因为 GET 是通过 URL 提交数据，那么 GET 可提交的数据量就跟 URL 的长度有直接关系了。而实际上，URL 不存在参数上限的问题，HTTP 协议规范没有对 URL 长度进行限制。这个限制是特定的浏览器及服务器对它的限制。IE 对 URL 长度的限制是 2083 字节(2K+35)。对于其他浏览器，如 Netscape、FireFox 等，理论上没有长度限制，其限制取决于操作系统的支持。注意这是限制是整个 URL 长度，而不仅仅是你的参数值数据长度。

### HTTP POST

- 根据 HTTP 规范，POST 表示可能修改变服务器上的资源的请求。
- POST 是没有大小限制的，HTTP 协议规范也没有进行大小限制

:::

## 9. session 与 cookie 区别

::: details <font class=details-interview-title> session 与 cookie 区别</font>

### cookie

- cookie 数据存放在客户的浏览器上，session 数据放在服务器上。
- cookie 不是很安全，别人可以分析存放在本地的 cookie 并进行 cookie 欺骗，考虑到安全应当使用 session。

### session

- session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用 cookie。
- 单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 20 个 cookie。

:::

## 10. session 分布式处理

::: details <font class=details-interview-title> session 分布式处理</font>

### Session 复制

在支持 Session 复制的 Web 服务器上，通过修改 Web 服务器的配置，可以实现将 Session 同步到其它 Web 服务器上，达到每个 Web 服务器上都保存一致的 Session。

- 优点：代码上不需要做支持和修改。
- 缺点：需要依赖支持的 Web 服务器，一旦更换成不支持的 Web 服务器就不能使用了，在数据量很大的情况下不仅占用网络资源，而且会导致延迟。
- 适用场景：只适用于Web服务器比较少且 Session 数据量少的情况。
- 可用方案：开源方案 tomcat-redis-session-manager，暂不支持 Tomcat8。

### Session 粘滞

将用户的每次请求都通过某种方法强制分发到某一个 Web 服务器上，只要这个 Web 服务器上存储了对应 Session 数据，就可以实现会话跟踪。

- 优点：使用简单，没有额外开销。
- 缺点：一旦某个 Web 服务器重启或宕机，相对应的 Session 数据将会丢失，而且需要依赖负载均衡机制。
- 适用场景：对稳定性要求不是很高的业务情景。

### Session 集中管理

在单独的服务器或服务器集群上使用缓存技术，如 Redis 存储 Session 数据，集中管理所有的 Session，所有的Web服务器都从这个存储介质中存取对应的 Session，实现 Session 共享。

- 优点：可靠性高，减少 Web 服务器的资源开销。
- 缺点：实现上有些复杂，配置较多。
- 适用场景：Web服务器较多、要求高可用性的情况。
- 可用方案：开源方案 Spring Session，也可以自己实现，主要是重写 HttpServletRequestWrapper 中的 getSession 方法。

### 基于 Cookie 管理

这种方式每次发起请求的时候都需要将 Session 数据放到 Cookie 中传递给服务端。

- 优点：不需要依赖额外外部存储，不需要额外配置。
- 缺点：不安全，易被盗取或篡改；Cookie 数量和长度有限制，需要消耗更多网络带宽。
- 适用场景：数据不重要、不敏感且数据量小的情况。

### 总结

这四种方式，相对来说，**Session 集中管理** 更加可靠，使用也是最多的。

:::

## 11. JDBC 流程

:::  details <font class=details-interview-title>JDBC 流程</font>

- 向 DriverManager 类注册驱动数据库驱动程序
- 调用 DriverManager.getConnection 方法， 通过 JDBC URL，用户名，密码取得数据库连接的 Connection 对象。
- 获取 Connection 后， 便可以通过 createStatement 创建 Statement 用以执行 SQL 语句。
- 有时候会得到查询结果，比如 select，得到查询结果，查询（SELECT）的结果存放于结果集（ResultSet）中。
- 关闭数据库语句，关闭数据库连接。

:::

## 12. MVC 设计思想

:::  details <font class=details-interview-title>JDBC 流程</font>

MVC 是三个单词的首字母缩写，它们是 Model（模型）、View（视图）和 Controller（控制）。 这个模式认为，程序不论简单或复杂，从结构上看，都可以分成三层：

- 最上面的一层，是直接面向最终用户的"视图层"（View）。它是提供给用户的操作界面，是程序的外壳。
- 最底下的一层，是核心的"数据层"（Model），也就是程序需要操作的数据或信息。
- 中间的一层，就是"控制层"（Controller），它负责根据用户从"视图层"输入的指令，选取"数据层"中的数据，然后对其进行相应的操作，产生最终结果。

:::

## 13. equals 与 == 的区别

:::  details <font class=details-interview-title>equals 与 == 的区别</font>

- `==` 与`equals` 的主要区别是：`==` 常用于比较原生类型，而 `equals()` 方法用于检查对象的相等性。
- 另一个不同的点是：如果 `==` 和 `equals()` 用于比较对象，当两个引用地址相同，`==` 返回 true。而 `equals()` 可以返回 true 或者 false 主要取决于重写实现。最常见的一个例子，字符串的比较，不同情况 `==` 和 `equals()` 返回不同的结果。

:::
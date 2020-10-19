# 第一章 Java 程序设计基础

<font size=4px>在本章中，我们将对 Java 程序中的上述3种流程结构进行学习。<br></font>
<font size=4px>初学者应该对本章的每个小节进行仔细阅读、思考，这样才能达到事半功倍的效果。</font>

::: warning <p class=warning-title>本章学习要点</p>

- <font class=warning-inner>掌握常量的声明</font>
- <font class=warning-inner>掌握变量的声明和赋值</font>
- <font class=warning-inner>掌握数据类型的分类</font>
- <font class=warning-inner>掌握算术运算符和赋值运算符</font>
- <font class=warning-inner> 熟悉逻辑运算符和关系运算符</font>
- <font class=warning-inner>了解位运算符</font>
- <font class=warning-inner>熟悉运算符的优先级</font>
- <font class=warning-inner>熟悉两种基本类型转换</font>

:::

## Java 标识符和关键字

::: details <font class=details-title>标识符</font><br>

<h3> 1. Java中标识符是为方法、变量或其他用户定义项所定义的名称。</h3>

`标识符`可以有一个或多个字符。<br>

在 Java 语言中，标识符的构成规则如下：

- 标识符由`数字（0~9）和字母（A~Z 和 a~z）、美元符号（$）、下划线（_）以及 Unicode 字符集中符号大于 0xC0 的所有符号`组合构成（各符号之间没有空格）。

- 标识符的`第一个符号为字母、下划线和美元符号`，`后面可以是任何字母、数字、美元符号或下划线`。

- Java `区分大小写`，因此 `myvar` 和 `MyVar` 是两个不同的标识符。

<h3> 2. 标识符分为两类，分别为关键字和用户自定义标识符。</h3>

- `关键字`-标识符: 是有特殊含义的标识符
> 如 true、false 表示逻辑的真假。

- `用户自定义表`-标识符：由用户按标识符构成规则生成的非保留字的标识符
> 如 abc 就是一个标识符。

<h3> 3. 标识符用来命名常量、变量、类和类的对象等。</h3>
因此，一个良好的编程习惯要求命名标识符时，应赋予它一个有意义或有用途的名字。 

<h3> 4. 举例说明</h3>

```
合法标识符：date、$2011、_date、D_$date 等。
不合法的标识符：123.com、2com、for、if 等。
```
:::

::: details <font class=details-title>关键字</font>


`关键字`（或者保留字）是对编译器有特殊意义的固定单词，不能在程序中做其他目的使用。
`关键字` 具有专门的意义和用途，和自定义的标识符不同，不能当作一般的标识符来使用。

> 例如，在《使用记事本编写运行Java程序》一节的实例 HelloJava.java 中的 class 就是一个关键字，它用来声明一个类，其类名称为 HelloJava。public 也是关键字，它用来表示公共类。另外，static 和 void 也是关键字，它们的使用将在本教程后面的章节中详细介绍。

<h3> 1. Java 的关键字对 Java 编译器有特殊的意义，它们用来表示一种数据类型，或者表示程序的结构等。</h3>

> 保留字是为 Java 预留的关键字，它们虽然现在没有作为关键字，但在以后的升级版本中有可能作为关键字。

<h3> 2. Java 语言目前定义了 51 个关键字，以下对这些关键字进行了分类。</h3>

> 这些关键字不能作为变量名、类名和方法名来使用。

- **数据类型**：<font class=key-font>boolean、int、long、short、byte、float、double、char、class、interface </font>。
- **流程控制**：<font class=key-font>if、else、do、while、for、switch、case、default、break、continue、return、try、catch、finally</font>。
- **修饰符**：<font class=key-font>public、protected、private、final、void、static、strict、abstract、transient、synchronized、volatile、native</font>。
- **动作**：<font class=key-font>package、import、throw、throws、extends、implements、this、supper、instanceof、new</font>。
- **保留字**：<font class=key-font>true、false、null、goto、const</font>。

:::

::: danger 注意事项

注意 1：`标识符命名`不能以**数字开头**，也不能使用任何 **Java 关键字**作为标识符，而且不能赋予标识符任何**标准的方法名**。<br>
注意 2：`标识符命名`标识符**可以包含关键字**，但**不能与关键字重名**。<br>
注意 3：`关键字`由于 Java **区分大小写**，因此 **public 是关键字**，而 **Public 则不是关键字**。但是为了程序的清晰及可读性，要尽量避免使用关键字的其他形式来命名。

:::

## Java 注释


::: details <font class=details-title>单行注释</font>

以`双斜杠“//”标识`，只能注释`一行内容`，用在注释`信息内容少的地方`。

```java
package com.java.se

public class Test {
    public static void main(String[] args) {
        // 单行注释
        System.out.println("注释方式");
    }
}
```
:::

::: details <font class=details-title>多行注释</font>

包含在`“/*”和“*/”`之间，能注释很`多行的内容`。为了可读性比较好，一般`首行`和`尾行`不写注释信息（这样也比较美观好看），

```java
package com.java.se

public class Test {
    public static void main(String[] args) {
        /*
         * 多行注释
         */
        System.out.println("注释方式");
    }
}
```
:::

::: details <font class=details-title>文档注释</font>

包含在`“/**”和“*/”`之间，也能注释`多行内容`，一般用在`类、方法和变量`上面，用来描述其作用。

注释后，鼠标放在类和变量上面会自动显示出我们注释的内容。

```java
package com.java.se

/**
 * 文档注释
 */
public class Test {
    public static void main(String[] args) {
        System.out.println("注释方式");
    }
}
```
:::

::: tip 总结

总结 1: 一行注释以双斜杠`“//”`标识；-> 当编译器执行到`“//”`时，就会**忽略**该行`“//”`之后的所有文本；<br>
总结 2：多行注释包含在`“/*”和“*/”`之间；-> 当执行到`“/*”`时，会扫描下一个`“*/”`并**忽略**`“/*”和“*/”`之间的任何文本；<br>
总结 3：文档注释包含在`“/**”和“*/”`之间；-> 当执行到`“/**”`时，也会扫描下一个`“*/”`并**忽略**`“/**”和“*/”`之间的任何文本内容。

:::

::: danger 注意事项：
注意 1：`多行注释`可以嵌套单行注释，但是不能嵌套多行注释和文档注释。<br>
注意 2：`文档注释`能嵌套单行注释，不能嵌套多行注释和文档注释，一般首行和尾行也不写注释信息
:::

### 

## Javadoc（文档注释）详解

## Java 常量

### Java常量的定义
### Java常量的分类

## Java 变量的声明和初始化

## Java 变量的作用域

### 静态变量
### 全局变量
### 局部变量

## Java 数据类型

### 基本数据类型
### 引用数据类型

## Java 数据类型转换

### 强制类型转换
### 自动类型转换

## Java 算术运算符

## Java 赋值运算符（=）

## Java 逻辑运算符

### &&
### ||
### !

## Java 关系运算符

## Java 自增和自减运算符（++和--）

## Java 位运算符

### Java移位运算符
### 复合位赋值运算符
### 位逻辑运算

## Java 三目运算符（条件运算符? :）

## Java 运算符优先级

## Java 直接量（字面量）


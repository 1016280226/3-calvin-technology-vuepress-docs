# 23种设计模式

## 一、 简介

<center>
    <img src="../../../docs/.vuepress/public/design/01-gang_of_four.jpg" style="zoom:100%;" />
</center>

> 1995 年，GoF（Gang of Four，四人组/四人帮）合作出版了《设计模式：可复用面向对象软件的基础》一书，共收录了 23 种设计模式，从此树立了软件设计模式领域的里程碑，人称「GoF设计模式」。

<font size=4px> 1.  <font color=#e96900><b>设计模式（Design pattern）</b></font>是前辈们对代码开发经验的总结，是解决特定问题的一系列套路。它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。</font>

<font size=4px>2. 这 23 种设计模式的本质是面向对象设计原则的实际运用，是 **对类的<font color=#e96900><b>封装性</b></font>、<font color=#e96900><b>继承性</b></font>和<font color=#e96900><b>多态性</b></font>，以及类的<font color=#e96900><b>关联关系</b></font>和<font color=#e96900><b>组合关系</b></font>的充分理解**。</font>

<font size=4px>3. 当然，软件设计模式只是一个引导，在实际的软件开发中，必须根据具体的需求来选择：</font>

- 对于简单的程序，可能写一个简单的算法要比引入某种设计模式更加容易；
- 但是对于大型项目开发或者框架设计，用设计模式来组织代码显然更好。

##  二、作用

<br><font size=4px> 设计模式的本质是面向对象设计原则的实际运用，是对类的封装性、继承性和多态性以及类的关联关系和组合关系的充分理解。</font>

<font size=4px>正确使用设计模式具有以下优点。</font>

- ### 可以提高程序员的思维能力、编程能力和设计能力。

- ### 使程序设计更加标准化、代码编制更加工程化，使软件开发效率大大提高，从而缩短软件的开发周期。

- ### 使设计的代码可重用性高、可读性强、可靠性高、灵活性好、可维护性强。

---

## 三、七大设计原则

<br>

<font size=4px>在软件开发中，为了提高软件系统的`可维护性`和`可复用性`，增加软件的`可扩展性和灵活性`，程序员要尽量根据 7 条原则来开发程序，从而**提高软件开发效率、节约软件开发成本和维护成本。**</font>

### 1. 开闭原则 （Open Close Principle）主

- ####  对扩展开放，对修改关闭

> 当应用的需求改变时，在不修改软件实体的源代码或者二进制代码的前提下，可以扩展模块的功能，使其满足新的需求。

### 2. 接口隔离原则 （Interface Segregation Principle）辅

- ####  要为各个类建立它们需要的专用接口，而不要试图去建立一个很庞大的接口供所有依赖它的类去调用。

> 要求程序员尽量将臃肿庞大的接口拆分成更小的和更具体的接口，让接口中只包含客户感兴趣的方法。

### 3. 合成复用原则（Composite Reuse Principle）辅

- ####  又叫组合/聚合复用原则。它要求在软件复用时，要尽量先使用组合或者聚合等关联关系来实现，其次才考虑使用继承关系来实现。

> 如果要使用继承关系，则必须严格遵循里氏替换原则。合成复用原则同里氏替换原则相辅相成的，两者都是开闭原则的具体实现规范。

### 4. 里氏代换原则 （Liskov Substiution Principle）辅

- ####  主要阐述了有关继承的一些原则，也就是什么时候应该使用继承，什么时候不应该使用继承，以及其中蕴含的原理。里氏替换原是继承复用的基础。(子类可以扩展父类的功能，但不能改变父类原有的功能。)

> 它反映了基类与子类之间的关系，是对开闭原则的补充，是对实现抽象化的具体步骤的规范。

### 5. 迪米特法则（最少知道原则） （Demeter Principle）

- ####  如果两个软件实体无须直接通信，那么就不应当发生直接的相互调用，可以通过第三方转发该调用。其目的是降低类之间的耦合度，提高模块的相对独立性。

> 迪米特法则的定义是：只与你的直接朋友交谈，不跟“陌生人”说话（Talk only to your immediate friends and not to strangers）。
>
> 迪米特法则中的“朋友”是指：当前对象本身、当前对象的成员对象、当前对象所创建的对象、当前对象的方法参数等，这些对象同当前对象存在关联、聚合或组合关系，可以直接访问这些对象的方法。

###  6. 单一职责原则 （Single Responsibility Principle） 

- ####  这里的职责是指类变化的原因，单一职责原则规定一个类应该有且仅有一个引起它变化的原因，否则类应该被拆分 

> 该原则提出对象不应该承担太多职责，如果一个对象承担了太多的职责，至少存在以下两个缺点：
>
> 1. 一个职责的变化可能会削弱或者抑制这个类实现其他职责的能力；
> 2. 当客户端需要该对象的某一个职责时，不得不将其他不需要的职责全都包含进来，从而造成冗余代码或代码的浪费。

###  7. 依赖倒转原则 （Dependence Inversion Principle） 

- ####  高层模块不应该依赖低层模块，两者都应该依赖其抽象；抽象不应该依赖细节，细节应该依赖抽象。其核心思想是：要面向接口编程，不要面向实现编程。 

> 依赖倒置原则是实现开闭原则的重要途径之一，它降低了客户与实现模块之间的耦合。
>
> 由于在软件设计中，细节具有多变性，而抽象层则相对稳定，因此以抽象为基础搭建起来的架构要比以细节为基础搭建起来的架构要稳定得多。这里的抽象指的是接口或者抽象类，而细节是指具体的实现类。
>
> 使用接口或者抽象类的目的是制定好规范和契约，而不去涉及任何具体的操作，把展现细节的任务交给它们的实现类去完成。

---

##  四、分类和功能 

<br>

<font size=4px>设计模式有两种分类方法，即根据模式的`目的`来分和根据模式的`作用的范围`来分。</font>

### 1. 目的

<font size=4px>根据模式是用来完成什么工作来划分，这种方式可分为 **`创建型模式`** 、 **`结构型模式`** 和 **`行为型模式`**  3 种。</font>

- #### 创建型模式 (5)

  > 用于描述 “怎样创建对象”，它的主要特点是 “将对象的创建与使用分离”。

  <font size=4px>GoF 中提供了 **`单例、原型、工厂方法、抽象工厂、建造者`** 等 5 种创建型模式。</font>

- #### 结构型模式 (7)

  > 用于描述如何将类或对象按某种布局组成更大的结构

  GoF 中提供了 **`代理、适配器、桥接、装饰、外观、享元、组合`** 等 7 种结构型模式。

- #### 行为型模式 (11)

  > 用于描述类或对象之间怎样相互协作共同完成单个对象都无法单独完成的任务，以及怎样分配职责。

  GoF 中提供了 **`模板方法、策略、命令、职责链、状态、观察者、中介者、迭代器、访问者、备忘录、解释器`**  等 11 种行为型模式。

### 2. 作用的范围

<font size=4px> 根据模式是主要用于类上还是主要用于对象上来分，这种方式可分为`类模式`和`对象模式`两种。</font>

- #### 类模式

  > 用于处理类与子类之间的关系，这些关系通过继承来建立，是静态的，在编译时刻便确定下来了。

  GoF中的 **`工厂方法、（类）适配器、模板方法、解释器`** 属于该模式。

- #### 对象模式

  > 用于处理对象之间的关系，这些关系可以通过组合或聚合来实现，在运行时刻是可以变化的，更具动态性。

  GoF 中除了以上 4 种，其他的都是对象模式。

| 范围\目的 |           创建型模式            |                       结构型模式                        |                          行为型模式                          |
| :-------: | :-----------------------------: | :-----------------------------------------------------: | :----------------------------------------------------------: |
|  类模式   |            工厂方法             |                       (类）适配器                       |                       模板方法、解释器                       |
| 对象模式  | 单例 、原型、 抽象工厂、 建造者 | 代理 、(对象）适配器、 桥接、 装饰、 外观、 享元、 组合 | 策略、 命令、 职责链、 状态、 观察者、 中介者、 迭代器、 访问者、 备忘录 |

### 3. 23种设计模式的功能

<font size=4px> 前面说明了 GoF 的 23 种设计模式的分类，现在对各个模式的功能进行介绍。</font>

#### (1) 单例（Singleton）模式

> 某个类只能生成一个实例，该类提供了一个全局访问点供外部获取该实例，其拓展是有限多例模式。

#### (2) 原型（Prototype）模式

> 将一个对象作为原型，通过对其进行复制而克隆出多个和原型类似的新实例。

#### (3) 工厂方法（Factory Method）模式

> 定义一个用于创建产品的接口，由子类决定生产什么产品。

#### (4) 抽象工厂（AbstractFactory）模式

> 提供一个创建产品族的接口，其每个子类可以生产一系列相关的产品。

#### (5) 建造者（Builder）模式

> 将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象。

#### (6) 代理（Proxy）模式

> 为某对象提供一种代理以控制对该对象的访问。即客户端通过代理间接地访问该对象，从而限制、增强或修改该对象的一些特性。

#### (7) 适配器（Adapter）模式

> 将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。

#### (8) 桥接（Bridge）模式

> 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。

#### (9) 装饰（Decorator）模式

> 动态的给对象增加一些职责，即增加其额外的功能。

#### (10) 外观（Facade）模式

> 为多个复杂的子系统提供一个一致的接口，使这些子系统更加容易被访问。

#### (11) 享元（Flyweight）模式

> 运用共享技术来有效地支持大量细粒度对象的复用。

#### (12) 组合（Composite）模式

> 将对象组合成树状层次结构，使用户对单个对象和组合对象具有一致的访问性。

#### (13) 模板方法（TemplateMethod）模式

> 定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。

#### (14) 策略（Strategy）模式

> 定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的改变不会影响使用算法的客户。

#### (15) 命令（Command）模式

> 将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。

#### (16) 职责链（Chain of Responsibility）模式

> 把请求从链中的一个对象传到下一个对象，直到请求被响应为止。通过这种方式去除对象之间的耦合。

#### (17) 状态（State）模式

> 允许一个对象在其内部状态发生改变时改变其行为能力。

#### (18) 观察者（Observer）模式

> 多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为。

#### (19) 中介者（Mediator）模式

> 定义一个中介对象来简化原有对象之间的交互关系，降低系统中对象间的耦合度，使原有对象之间不必相互了解。

#### (20) 迭代器（Iterator）模式

> 提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。

#### (21) 访问者（Visitor）模式

> 在不改变集合元素的前提下，为一个集合中的每个元素提供多种访问方式，即每个元素有多个访问者对象访问。

#### (22) 备忘录（Memento）模式

> 在不破坏封装性的前提下，获取并保存一个对象的内部状态，以便以后恢复它。

#### (23) 解释器（Interpreter）模式

> 提供如何定义语言的文法，以及对语言句子的解释方法，即解释器。


##  五、总结  

### 1. 设计模式—三大类型

- #### `建 5` ： 创建型， 有五种

- #### `构 7` ： 结构型， 有七种

- #### `行 11`：行为型， 有十一种

### 2. 设计模式—七个原则

- #### `开`：面向扩展开发，面向修改关闭。

- #### `口`：接口隔离原则

- #### `合`：组合/聚合原则

- #### `里`：里氏替换原则

- #### `最`：最少知道原则

- #### `单`：单一职责原则

- #### `依`：依赖倒置原则

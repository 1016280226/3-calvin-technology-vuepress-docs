# 第九章 Java 集合、泛型和枚举


<font size=4px>在 Java 中数组的长度是不可修改的。然而在实际应用的很多情况下，无法确定数据数量。这些数据不适合使用数组来保存，这时候就需要使用集合。<br>
`Java 的集合`就像一个容器，用来存储 Java 类的对象。有些容器内部存放的东西在容器内部是不可操作的，像水瓶里的水，除了将其装入和倒出之外，就不能再进行别的操作了，但是很容易装入和倒出；而有些容器内部存放的东西在容器内部是可以操作的，例如，衣柜里面摆放的衣服，不仅可以将衣服存放到衣柜中，还可以将衣服有序地摆放，以便在使用时快速查找，但是却不容易取出。Java 的集合类比这些容器功能还多，其中有些是方便放入和取出的，有些是方便查找的。在集合中经常会用到泛型来使集合更加安全。<br></font>
<font size=4px>本章将详细介绍 `Java 中集合和泛型的使用`，最后简单介绍`枚举`的应用。</font>
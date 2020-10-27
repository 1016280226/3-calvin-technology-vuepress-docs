# 第一章  equals 方法 和 hashCode 方法

## 一、 为什么重写 equals 还要重写 hashCode 方法 ?

### 1. 分析：

- 知识点 1：什么是 equals ? 它有什么用 ？
- 知识点 2： 什么是 hashCode ？ 它又有什么用 ？
- 知识点 3：为什么要重写 equals ？ 同时还要重写 hashCode ?

### equals 方法：中文翻译相等，是用来判断两个对象值是否相等。

### hashCode 方法：哈希码，它是 C 语言编写出来的，底层将对象内存地址转化成为整数，提高哈希表的性能。

- 源码分析： 从 Object.java 中，查看 hashCode 方法

  ```java
  
  package java.lang;
  
  public class Object {
  ...
      /**
       * 原则 1：如果根据{@code equals(Object)}两个对象相等方法，然后对每个方法调用
       *        {@code hashCode}方法两个对象必须产生相同的整数结果。
       *
       * 原则 2：{@code equals}中使用的对象比较被修改。这个整数不需要保持一致从一个执行应用程序
       *        的另一个执行相同的应用程序。
       *
       * 原则 3：当它在同一对象上被多次调用时一个Java应用程序的执行，{@code hashCode}方法
       *        必须始终如一地返回相同的整数。
       * 
       *
       * 原则 4： 如果在2个对象值不同
       *    根据对比 {@link java.lang.Object#equals(java.lang.Object)}方法, 这个{@code hashCode}      *    哈希码方法结果也要不一样。然而,这个程序必须产生不同的整形结果。因为不等对象可以提高哈希表的性        *    能。
       */
      public native int hashCode();
  
  }
  ```

  

### 1. 原则 1、3 :  两个对象的 `equals方法`比较两个对象`内容值相等`时，则两个对象的 `hashCode值相等`

- #### 作用：保证对象唯一性，提高程序性能。

#### 分析原则1：为什么要重写 equals 方法 ？不重写两个对象值就不相等了吗？

```java
package com.java.base.invterview.question;

/**
 * description: HashCode
 * date: 2020/9/23 23:25
 * author: Calvin
 * version: 1.0
 */
public class HashCode {

    public HashCode(Integer i, Integer b) {
        this.i = i;
        this.b = b;
    }

    private Integer i;

    public void setB(Integer b) {
        this.b = b;
    }

    private Integer b;

    public Integer getI() {
        return i;
    }

    public Integer getB() {
        return b;
    }

    public static void main(String[] args) {
        HashCode h1 = new HashCode(1, 5);
        HashCode h2 = new HashCode(1, 5);
        System.out.println(h1);
        System.out.println(h2);
        System.out.println(h1.equals(h2));
    }

```

```verilog
# 不重写，运行结果
com.java.base.invterview.question.HashCode@330bedb4 # 对象内存地址
com.java.base.invterview.question.HashCode@2503dbd3 # 对象内存地址
false # 比较后不相同
```

结果是不相同。

- #### 因为执行了 Object.java 的 equals 方法

  ```java
  package java.lang;
  
  public class Object {
  ...
      /**
       * 原则: 如果{@code x}和{@code y}引用同一个对象({@code x == y}的值为{@code true})。
       * 对象
       * 注意：通常需要重写{@code hashCode}方法在重写此方法时，以维护{@code hashCode}方法的通用契约，其中声      * 明 equal对象必须具有相等的哈希码。
       */
      public boolean equals(Object obj) {
          return (this == obj);
      }
  ```

  

根据上述源码分析，得出结论<font size=5px color=Red>必须重写equals 方法</font>, 如果不重写就执行默认Object.java中equals方法进行比较，此时同样的初始值，对比后，产生不同结果，导致违背对象初始值一样，引用不一样的问题。

我们可以查看包装类 `Integer` 类、`String` 类，都进行 equals 方法； 、

- #### String 类源码

  ```Java
      public boolean equals(Object anObject) {
          if (this == anObject) {
              return true;
          }
          if (anObject instanceof String) {
              String anotherString = (String)anObject;
              int n = value.length;
              if (n == anotherString.value.length) {
                  char v1[] = value;
                  char v2[] = anotherString.value;
                  int i = 0;
                  while (n-- != 0) {
                      if (v1[i] != v2[i])
                          return false;
                      i++;
                  }
                  return true;
              }
          }
          return false;
      }
  ```

  

- #### Integer 类源码

  ```java
      public boolean equals(Object obj) {
          if (obj instanceof Integer) {
              return value == ((Integer)obj).intValue();
          }
          return false;
      }
  ```

  

#### 分析原则1：为什么要重写 equals 方法还要重写 hashCode方法 ? 难道hashCode 值就不一样了吗？

```java
        HashCode h1 = new HashCode(1, 5);
        HashCode h2 = new HashCode(1, 5);
        System.out.println(h1);
        System.out.println(h2);
        System.out.println(h1.equals(h2));
        System.out.println(h1.hashCode());
        System.out.println(h2.hashCode());
        System.out.println(h1.hashCode() == h2.hashCode());
```

```verilog
# 不重写hashCode 方法，结果
856419764 # h1 哈希值
621009875 # h2 哈希值
false     # 对比后，结果不一样
```

得出结论，违背了原则1，如果不这样做对象唯一性就很难保证。所以<font size=5px color=Red>必须重写hashCode方法</font>,



#### 案例1：根据原则1：重写equals方法和重写hashCode方法

```java
package com.java.base.invterview.question;

/**
 * description: HashCode
 * date: 2020/9/23 23:25
 * author: Calvin
 * version: 1.0
 */
public class HashCode {

    public HashCode(Integer i, Integer b) {
        this.i = i;
        this.b = b;
    }

    private Integer i;

    public void setB(Integer b) {
        this.b = b;
    }

    private Integer b;

    public Integer getI() {
        return i;
    }

    public Integer getB() {
        return b;
    }

    public static void main(String[] args) {
        HashCode h1 = new HashCode(1, 5);
        HashCode h2 = new HashCode(1, 5);
        System.out.println(h1);
        System.out.println(h2);
        System.out.println(h1.equals(h2));
        System.out.println(h1.hashCode());
        System.out.println(h2.hashCode());
        System.out.println(h1.hashCode() == h2.hashCode());
    }

    /**
     * 原则 1 重写 equals
     * @param obj
     * @return
     */
    @Override
    public boolean equals(Object obj) {
        if (null == obj) {
            return false;
        }
        HashCode h = (HashCode) obj;
        return h.b == b && h.i == i;
    }

    /**
     * 原则 1 重写 hashCode方法
     * @return
     */
    @Override
    public int hashCode() {
        return b.hashCode() + i.hashCode();
    }
}
```

```verilog
# 运行结果
com.java.base.invterview.question.HashCode@6 # h1 地址内存
com.java.base.invterview.question.HashCode@6 # h2 地址内存，由于从写hashcode 引用对象是同一个h1
true # 重写 equals后，对象值一样
6    # h1 哈希值为6
6    # h2 哈希值为6
true # 重写hasCode后，hashCode值一样
```

### 面试题高频题-总结：

#### 1. equals 方法重写原因：当两个对象比较时，比较后值需要相同或引用对象相同时，所以需要重写equals方法，如果不重写equals 方法它会执行Object类的equals 方法，进行对象内存地址比较，从而导致对象不一样。

#### 2. hashCode方法重写原因：当两个对象比较时，比较后值相同或引用对象相同时，如果不重写hashCode方法，会导致影响hash表的性能问题（对象一样、值一样、hash值不是一样？）所以遵循原则：“两个对象的 `equals方法`比较两个对象`内容值相等`时，则两个对象的 `hashCode值相等`”



### 2. 原则2、4：两个对象的 `HashCode 值相等`时，对象的内容值`不一定相等`.（产生hash碰撞）

- #### 作用：提高哈希表的性能。

```java
package com.java.base.invterview.question;

/**
 * description: HashCode
 * date: 2020/9/23 23:25
 * author: Calvin
 * version: 1.0
 */
public class HashCode {

    public static void main(String[] args) {
        /* hashCode-总结 1：两个对象的 `HashCode 值相等`时，对象的内容值`不一定相等`. */
        String a1 = "a";
        Integer a2 = 97;
        System.out.println(a1.hashCode());
        System.out.println(a2.hashCode());
        System.out.println(a1.equals(a2));

    }
}
```

```verilog
# 运行结果
97 # hash码值一样
97 # hahs码值一样
false # 对比后，内容值不一样
```



## 二、总结

### 重写equals还要重写hashCode方法？

#### 作用：保证对象的唯一性，提高hash表性能，遵循了原则：“两个对象值相等时，hash码值一定要相等”。

#### 证明：我们使用HashMap 中 equals 和 hashCode 用来判断Key是否重复，如果不重写，hashMap中无法成立key是否重复，因为不重写equals 方法，默认，使用Object类的内存地址进行比较，这样就无法保证key的唯一性。 

```java
自定义HashMap {
    
   自定义HashMap h1 = new 自定义HashMap (1, "315231")
   // 底层通过equals 来判断，不重写导致，使用对象内存地址比较，从而使得唯一key 失效。 
   h1.put(1, "31523555")
   system.out.println(h1)
   
 }
```


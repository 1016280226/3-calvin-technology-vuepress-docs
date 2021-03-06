# 第十章 Java 反射机制

<font size=4px>通过`Java 的反射机制`，程序员可以更深入地控制程序的运行过程。例如，在程序运行时由用户输入一个类名，然后动态获取该类拥有的构造、属性和方法，甚至调用任意类的任意方法。<br></font>
<font size=4px>本章首先介绍 Java 中` Class 类`与 `Java 反射的基本用法`，然后介绍具体的`反射应用`。为了便于读者理解，在讲解过程中还结合了大量案例。</font>

## 一、Java 反射 

就是`正在运行`，`动态获取这个类的所有信息`.



## 二、 作用 

- 反编译：xxx.class --> xxx.java
- 可以访问 Java对象中构造函数、方法（公有、私有）、属性。


## 三、应用场景

> - JDBC 加载驱动
>
> - Spring IOC
>
> - 框架

## 四、案例1: 用户实体

### 1. 获取类

- 1. 创建用户类 `User`

  - 该类包含了：
    - `User(Long id, String username, Integer age)`有参构造函数
    - `User()`无参构造函数
  - 行为有：
    - `setAge()`获取年龄
    - `getAge()`设置年龄

  ```java
  package advanced.reflect;
  
  /**
   * Created by Calvin on 2019/5/8
   * 用户
   */
  public class User {
  
      /** 用户 ID */
      private Long id;
  
      /** 用户名 */
      private String username;
  
      /** 年龄 */
      private Integer age;
  
      /**
       * 无参构造 (公开)
       */
      public User() {}
  
      /**
       * 有参构造 (公开)
       *
       * @param id 用户ID
       * @param username 用户名
       */
      public User(Long id, String username, Integer age) {
          this.id = id;
          this.username = username;
          this.age = age;
      }
  
      /**
       * 设置年龄 （私有方法）
       * @param age 年龄
       */
      private void setAge(Integer age) {
          this.age = age;
      }
  
      /**
       * 获取年龄 （公开方法）
       */
      public Integer getAge() {
          return this.age;
      }
  
  }
  ```

- 2.创建一个测试反射类 `Reflect`，获取类的三种方式：

  - `Class.forName`方法获取类。
  - `对象.class` 获取类。
  - 通过实例化后，实例化后的方法`getClass` 获取类。

  ```java
  package advanced.reflect;
  
  import java.lang.reflect.Constructor;
  import java.lang.reflect.Field;
  import java.lang.reflect.InvocationTargetException;
  import java.lang.reflect.Method;
  
  /**
   * Created by Calvin on 2019/5/8
   * 反射机制
   * 含义： 动态获取这个类的所有信息
   */
  public class Reflect {
  
      public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException, NoSuchFieldException {
  
          /** 1.获取类-三种方法: */
          // 1. 通过 Class.forName 方法中参数必须 包名+类名
          Class classOne = Class.forName("advanced.reflect.User");
          // 2. java 中每个类型都有 class 属性
          Class<User> classTwo = User.class;
          System.out.println(classTwo);
          // 3. java 语言中任何一个 java 对象都有 getClass 方法
          User user = new User(1L, "Calvin", 26);
          Class<? extends User> classTree = user.getClass();
      }
  
  }
  
  ```

  

### 2. 创建对象

- 通过`获取类.newInstance()`方法，创建对象，但该方式调用的时无参构造函数 。

- 通过 `获取类.getConstructor`方法声明有参构造函数所需要的参数类型后，赋值后，创建对象。

  ```java
  package advanced.reflect;
  
  import java.lang.reflect.Constructor;
  import java.lang.reflect.Field;
  import java.lang.reflect.InvocationTargetException;
  import java.lang.reflect.Method;
  
  /**
   * Created by Calvin on 2019/5/8
   * 反射机制
   * 含义： 动态获取这个类的所有信息
   */
  public class Reflect {
  
      public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException, NoSuchFieldException {
  
          /** 1.获取类-三种方法: */
          // 1. 通过 Class.forName 方法中参数必须 包名+类名
          Class classOne = Class.forName("advanced.reflect.User");
          // 2. java 中每个类型都有 class 属性
          Class<User> classTwo = User.class;
          System.out.println(classTwo);
          // 3. java 语言中任何一个 java 对象都有 getClass 方法
          User user = new User(1L, "Calvin", 26);
          Class<? extends User> classTree = user.getClass();
  
          /** 2.创建对象 */
          // 创建此 Class 对象，表示创建一个新的实例化，调用了 User 的无参数构造方法.
          User user1 = (User) classOne.newInstance();
          // 实例化有参构造函数
          Constructor constructor = classOne.getConstructor(Long.class, String.class, Integer.class);
          User user2 = (User) constructor.newInstance(1L, "Calvin", 26);
          System.out.println("反射创建对象-【无参】构造函数：" + user1);
          System.out.println("反射创建对象-【有参】构造函数：" + user2);
      }
  
  }
  
  ```

### 3. 获取类的所有属性和所有方法

- 获取类的所有属性 `getDeclaredFields()`
- 获取类的所有方法 `getMethods();`
- 获取类中具体单个属性 `getDeclaredField(“属性名”)`;
- 通过属性：
  - 为该对象赋值`declaredField.set(对象，属性值)`
  - 私有方法，设置允许访问 `declaredField.setAccessible(Boolean.TRUE)`

```java
package advanced.reflect;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * Created by Calvin on 2019/5/8
 * 反射机制
 * 含义： 动态获取这个类的所有信息
 */
public class Reflect {

    public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException, NoSuchFieldException {
  
        // 创建此 Class 对象，表示创建一个新的实例化，调用了 User 的无参数构造方法.
        User user1 = (User) classOne.newInstance();
 
        // 获取到当前 Class 的所有属性
        Field[] declaredFields = classOne.getDeclaredFields();
        for (Field f : declaredFields) {
            System.out.println(f.getName());
        }

        // 获取当前 Class 的所有方法
        Method[] methods = classOne.getMethods();
        for (Method m : methods) {
            System.out.println(m.getName());
        }

        // 获取属性字段
        Field declaredField = classOne.getDeclaredField("age");
        // 设置允许访问：true
        declaredField.setAccessible(Boolean.TRUE);
        declaredField.set(user1, 30);
        System.out.println("使用反射-给私有属性赋值:" + user1.getAge());
    }
}
```



## 五、案例2: JDBC 加载驱动

```java
package advanced.reflect;

import java.sql.*;

public class RefectJdbcDriver {

    public static void main(String[] args) throws ClassNotFoundException, SQLException {

        // 获取加载驱动类
        Class<?> aClass = Class.forName("com.mysql.jdbc.Driver");

        // 通过驱动管理 DriverManager 获取数据库连接
        String mysqlUrl = "jdbc:mysql://localhost:3306/db_test";
        String username = "root";
        String password = "123456";
        Connection connection = DriverManager.getConnection(mysqlUrl, username, password);

        String addUserSql = "INSTER user (name, age) value (?, ?)";
        PreparedStatement preparedStatement = connection.prepareStatement(addUserSql);
        preparedStatement.setString(1,"Calvin");
        preparedStatement.setInt(2,26);
        preparedStatement.executeUpdate();


        String queryUserSql = "SELECT * FROM user";
        ResultSet resultSet = preparedStatement.executeQuery(queryUserSql);
        // 操作ResultSet结果集
        while (resultSet.next()) {
            // 第一种获取字段方式
            System.out.println(
                    resultSet.getString(1) + " " +
                    resultSet.getString(2) + " " + 
                    resultSet.getString(3)
            );
        }

        // 关闭数据库连接
        resultSet.close();
        preparedStatement.close();
        connection.close();
    }
}

```

## 六、常使用方法

| 方法名称              | 作用               |
| --------------------- | ------------------ |
| getDeclaredMethods [] | 获取该类的所有方法 |
| getReturnType()       | 获取该类的返回值   |
| getParameterTypes()   | 获取传入参数       |
| getDeclaredFields()   | 获取该类的所有字段 |
| setAccessible         | 允许访问私有成员   |

## 七、优缺点

### 优点：

- <font color=#42b983 size=4px><b>提高了程序的灵活性和扩展性，降低耦合性，提高自适应能力。</b></font>
- <font color=#42b983 size=4px><b>它允许程序创建和控制任何类的对象，无需提前硬编码目标类。</b></font>

### 缺点：

- <font color=red size=4px><b>性能效率相对较慢。</b></font>

  > 反射包括了一些动态类型，所以JVM无法对这些代码进行优化。因此，反射操作的效率要比那些非反射操作低得多。我们应该避免在经常被 执行的代码或对性能要求很高的程序中使用反射。

- <font color=red size=4px><b>存在安全问题。</b></font>

  > 使用反射技术要求程序必须在一个没有安全限制的环境中运行。如果一个程序必须在有安全限制的环境中运行，如Applet，那么这就是个问题了。

- <font color=red size=4px><b>内部暴露。</b></font>

  > 由于反射允许代码执行一些在正常情况下不被允许的操作（比如访问私有的属性和方法），所以使用反射可能会导致意料之外的副作用－－代码有功能上的错误，降低可移植性。反射代码破坏了抽象性，因此当平台发生改变的时候，代码的行为就有可能也随着变化。


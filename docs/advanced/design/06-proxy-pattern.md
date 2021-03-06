# 代理模式 （Proxy Pattern）

## 1. 什么是代理模式 ？

### 代理模式 （Proxy Pattern）:

- 为其他对象提供一种代理以控制对这个对象的访问。

- 这种类型的设计模式属于`结构型模式`。

## 2. 为什么使用代理模式？

- ### 安全性 :（中介隔离）

  > 在某些情况下，一个客户类不想或者不能直接引用一个委托对象，而代理类对象可以在客户类和委托对象之间起到中介的作用，其特征是代理类和委托类实现相同的接口。

- ### 增加中间层功能 （符合开闭原则）

  > 代理类除了是客户类和委托类的中介之外，我们还可以通过给代理类增加额外的功能来扩展委托类的功能，这样做我们只需要修改代理类而不需要再修改委托类，符合代码设计的开闭原则。代理类主要负责为委托类预处理消息、过滤消息、把消息转发给委托类，以及事后对返回结果的处理等。代理类本身并不真正实现服务，而是同过调用委托类的相关方法，来提供特定的服务。真正的业务功能还是由委托类来实现，但是可以在业务功能执行的前后加入一些公共的服务。例如我们想给项目加入缓存、日志这些功能，我们就可以使用代理类来完成，而没必要打开已经封装好的委托类。

## 3. 应用场景

> - SpringAOP
> - 日志收集
> - 权限控制
> - 过滤器
> - RPC远程调用

## 4.  原理

如下图结构所示：

<center>
    <img src="../../../docs/.vuepress/public/design/proxy_mode.png" style="zoom:150%;" /><br>
	<font size=4px><b>代理模式结构模型</b></font>
</center>

`代理模式`主要包含三个角色：

- #### **`抽象主题角色（Subject）`**:  接口或抽象类；

- #### `委托类角色（Proxied）`：真实主题角色，业务逻辑的具体执行者

- #### `代理类角色（Proxy）`：内部含有对真实对象RealSubject的引用，负责对真实主题角色的调用，并在真实主题角色处理前后做预处理和后处理。



## 5. 创建方式

### 1. 静态代理 

> 是由程序员创建或工具生成代理类的源码，再编译代理类。(自己手写代理类就是静态代理。)

- #### 实现接口方式

- #### 继承方式

### 2. 动态代理 

> 动态代理是在实现阶段不用关心代理类，而在运行阶段才指定哪一个对象。
>
> 动态代理类的源码是在程序运行期间由JVM根据反射等机制动态的生成 

- **`JDK 动态代理`** （**实现接口**）
- **`CGLIB 动态代理`** （**通过继承**）

## 6. 静态代理-案例1：下单操作

### 1. 抽象主题角色（Subject）

```java
package com.order.statics.service;

/**
 * description: 订单服务-抽象主题角色
 * date: 2020/9/14 22:54
 * author: Calvin
 * version: 1.0
 */
public interface OrderService {

    /**
     * 下单
     */
    void order();
}
```

### 2. 委托类角色（Proxied）

```java
package com.order.statics.service.impl;

import com.order.statics.service.OrderService;

/**
 * description: 委托类角色（Proxied）
 * date: 2020/9/14 22:55
 * author: Calvin
 * version: 1.0
 */
public class OrderServiceImpl implements OrderService {

    @Override
    public void order() {
        System.out.println("用户下单操作...");
    }
}

```

### 3. 代理类角色（Proxy）

- 通过实现接口方式

```java
package com.order.statics.proxy;

import com.order.statics.service.OrderService;

/**
 * description: 代理类角色, 使用了接口方式
 * date: 2020/9/14 22:57
 * author: Calvin
 * version: 1.0
 */
public class OrderProxy1 implements OrderService {

    /**
     * 代理对象 （目标对象）
     */
    private OrderService proxied;

    /**
     * 有参构造函数，设置赋值莫表对象
     * @param orderService
     */
    public OrderProxy1(OrderService orderService) {
        this.proxied=orderService;
    }

    @Override
    public void order() {
        System.out.println("静态代理-通过实现接口方式-日志收集开始...");
        proxied.order();
        System.out.println("静态代理-通过实现接口方式-日志收集结束...");
    }

}
```

- 通过继承方式

```java
package com.order.statics.proxy;

import com.order.statics.service.impl.OrderServiceImpl;

/**
 * description: 代理类角色，接口继承方式
 * date: 2020/9/14 23:13
 * author: Calvin
 * version: 1.0
 */
public class OrderProxy2 extends OrderServiceImpl {

    public void order() {
        System.out.println("静态代理-通过继承方式-日志收集开始...");
        super.order();
        System.out.println("静态代理-通过继承方式-日志收集结束...");
    }

}
```

### 4. 编写接口测试

```java
package com.order.statics.controller;

import com.order.statics.proxy.OrderProxy1;
import com.order.statics.proxy.OrderProxy2;
import com.order.statics.service.OrderService;
import com.order.statics.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * description: OrderController
 * date: 2020/9/14 23:07
 * author: Calvin
 * version: 1.0
 */
@RestController
@RequestMapping("order/statics")
public class OrderController {

    @GetMapping("")
    public String order(){
        // 静态代理：通过接口方式
        OrderService orderService1 = new OrderProxy1(new OrderServiceImpl());
        orderService1.order();
        // 静态代理：通过继承方式
        OrderService orderService2 = new OrderProxy2();
        orderService2.order();
        return "下单成功";
    }
}
```

### 5. 通过访问 

> GET http://localhost:8080/order/statics

### 6. 运行结果

```verilog
静态代理-通过实现接口方式-日志收集开始...
用户下单操作...
静态代理-通过实现接口方式-日志收集结束...
静态代理-通过继承方式-日志收集开始...
用户下单操作...
静态代理-通过继承方式-日志收集结束...
```

## 7. 动态代理之JDK-案例1：下单操作

### 1. 抽象主题角色（Subject）

```java
package com.order.dynamic.service;

/**
 * description: 订单服务-抽象主题角色
 * date: 2020/9/14 22:54
 * author: Calvin
 * version: 1.0
 */
public interface OrderService {

    /**
     * 下单
     */
    void order();
}
```

### 2. 委托类角色（Proxied）

```java
package com.order.dynamic.service.impl;

import com.order.dynamic.service.OrderService;

/**
 * description: 委托类角色（Proxied）
 * date: 2020/9/14 22:55
 * author: Calvin
 * version: 1.0
 */
public class OrderServiceImpl implements OrderService {

    @Override
    public void order() {
        System.out.println("下单操作.....");
    }

}
```

### 3. 实现InvocationHandler接口，对目标接口中声明的所有方法进行统一处理

- 调用Proxy的静态方法，创建代理类并生成相应的代理对象

```java
package com.order.dynamic.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;


/**
 * Created by Calvin on 2019/5/22
 * 实现 InvocationHandler 接口，对目标接口中声明的所有方法进行统一处理;
 * 调用Proxy的静态方法，创建代理类并生成相应的代理对象;
 */
public class JdkInvocationHandler implements InvocationHandler {

    /**
     * 目标代理对象
     **/
    private Object target;

    public JdkInvocationHandler(Object target) {
        this.target = target;
    }

    /**
     * 下单操作（重写 JDK 调用方法，实现代理业务）
     *
     * @param proxy  目标代理对象
     * @param method 目标方法
     * @param args   方法参数
     * @return 目标对象
     * @throws Throwable
     */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("动态代理-通过实现InvocationHandler-日志收集开始...");
        // 使用java 的反射技术执行
        Object o = method.invoke(target, args);
        System.out.println("动态代理-通过实现InvocationHandler-日志收集结束...");
        return o;
    }

    /**
     * 获取代理对象
     *
     * @param <T>
     * @return
     */
    public <T> T getProxy() {
        /**
         * 第一个参数：目标对象加载类，
         * 第二个参数: 目标对象实现的接口（被代理（房东、车主....））
         * 第三个参数：当前 JdkInvocationHandler
         */
        return (T) Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), this);
    }

}
```

### 4. 编写接口测试，通过处理器进行动态生成代理类。

```java
package com.order.dynamic.controller;

import com.order.dynamic.proxy.JdkInvocationHandler;
import com.order.dynamic.service.OrderService;
import com.order.dynamic.service.impl.OrderServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * description: OrderController
 * date: 2020/9/14 23:07
 * author: Calvin
 * version: 1.0
 */
@RestController(value = "order2")
@RequestMapping("order/dynamic")
public class OrderController {

    @GetMapping("jdk")
    public String order1(){
        // JDK调用处理器
        JdkInvocationHandler jdkInvocationHandler = new JdkInvocationHandler(new OrderServiceImpl());
        // 获取代理对象
        OrderService orderService = jdkInvocationHandler.getProxy();
        orderService.order();
        return "下单成功";
    }

}
```

### 5. 通过访问 

> GET http://localhost:8080/order/dynamic/jdk

### 6. 运行结果

```verilog
动态代理-通过实现InvocationHandler-日志收集开始...
下单操作.....
动态代理-通过实现InvocationHandler-日志收集结束...
```

### 7. 提醒注意

-  获取代理的生成的class文件：`System.getProperties().put("sun.misc.ProxyGenerator.saveGeneratedFiles", "true");`

<img src="../../../docs/.vuepress/public/design/proxy_tools.png" style="zoom:100%;" />

> 继承了Proxy类，实现了代理的接口，由于java不能多继承，这里已经继承了Proxy类了，不能再继承其他的类，所以JDK的动态代理不支持对实现类的代理，只支持接口的代理。

## 8. 动态代理之CGLIB-案例1：下单操作

### 1. 什么是 CGLIB ？

`CGLIB` 是一个强大的，高性能，高质量的代码生成类库。

- 它可以在运行期扩展JAVA类与实现JAVA接口。
- 其底层实现是通过ASM字节码处理框架来转换字节码并生成新的类。
- 大部分功能实际上是ASM所提供的，CGLIB 只是封装了ASM，简化了ASM操作，实现了运行期生成新的class。

### 2. CGLIB 底层实现原理

- 运行时动态的**生成一个被代理类的子类**（通过ASM字节码处理框架实现）；
- 子类重写了**被代理类中所有非final的方法**；
- 在子类中**采用方法拦截的技术** -> 拦截所有**父类方法的调用**，不需要被代理类对象实现接口;
- 从而CGLIB动态代理效率比Jdk动态代理反射技术效率要高；

### 3. CGLIB 优缺点

#### 优点：

- <font color=#42b983 size=4px>JDK动态代理要求被代理的类必须实现接口，而当需要代理的类不实现接口时，Cglib代理是一个很好的选择。</font>
- <font color=#42b983 size=4px>另一个优点是Cglib动态代理比使用java反射的JDK动态代理要快</font>

#### 缺点：

<font color=red size=4px>对于被代理类中的final方法，无法进行代理，因为子类中无法重写final函数</font>

### 3. 实现MethodInterceptor接口的intercept方法后，所有生成的代理方法都调用这个方法。

```java
package com.order.dynamic.intercept;

import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

/**
 * description: CGLIB 方法拦截器
 * date: 2020/9/15 11:21
 * author: Calvin
 * version: 1.0
 */
public class CglibMethodInterceptor implements MethodInterceptor {

    /**
     * 拦截
     * @param o 目标类的实例
     * @param method 目标方法实例（通过反射获取的目标方法实例）
     * @param args 目标方法的参数
     * @param methodProxy 代理类的实例
     * @return 被代理类
     * @throws Throwable
     */
    @Override
    public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        System.out.println("动态代理-通过实现MethodIntercetpor-日志收集开始...");
        Object object = methodProxy.invokeSuper(o, args);
        System.out.println("动态代理-通过实现MethodIntercetpor-日志收集结束...");
        return object;
    }
}
```

### 4. 编写接口测试，通过处理器进行动态生成代理类。

```java
package com.order.dynamic.controller;

import com.order.dynamic.handler.JdkInvocationHandler;
import com.order.dynamic.intercept.CglibMethodInterceptor;
import com.order.dynamic.service.OrderService;
import com.order.dynamic.service.impl.OrderServiceImpl;
import org.springframework.cglib.proxy.Enhancer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.cglib.core.DebuggingClassWriter.DEBUG_LOCATION_PROPERTY;

/**
 * description: OrderController
 * date: 2020/9/14 23:07
 * author: Calvin
 * version: 1.0
 */
@RestController(value = "order2")
@RequestMapping("order/dynamic")
public class OrderController {


    @GetMapping("cglib")
    public String order2(){
        System.setProperty(DEBUG_LOCATION_PROPERTY, "G:\\workspace\\github\\design-patterns\\5-proxy-desgin-patterns\\src\\main\\java\\com\\order\\dynamic\\proxy");
        // Cglib 方法拦截器
        CglibMethodInterceptor cglibMethodInterceptor = new CglibMethodInterceptor();
        Enhancer enhancer = new Enhancer();
        // 设置代理类的付类
        enhancer.setSuperclass(OrderServiceImpl.class);
        // 设置回调对象
        enhancer.setCallback(cglibMethodInterceptor);
        // 创建代理对象
        OrderServiceImpl orderServiceImpl = (OrderServiceImpl) enhancer.create();
        orderServiceImpl.order();
        return "下单成功";
    }
}
```

### 5. 通过访问 

> GET http://localhost:8080/order/dynamic/cglib

###  6. 运行结果

```verilog
动态代理-通过实现MethodIntercetpor-日志收集开始...
下单操作.....
动态代理-通过实现MethodIntercetpor-日志收集结束...
```

## 9. JDK动态代理与CGLIB动态代理区别

- ### JDK动态代理底层实现

  >  JDK的动态代理使用Java的反射技术生成动态代理类，**只能代理实现了接口的类， 没有实现接口的类不能实现动态代理。**

- ###  CGLIB动态代理底层实现

  > 运行时动态的生成一个被代理类的子类（通过ASM字节码处理框架实现），子类重写了被代理类中所有非final的方法，在子类中采用方法拦截的技术拦截所有父类方法的调用，不需要被代理类对象实现接口，从而CGLIB动态代理效率比Jdk动态代理反射技术效率要高。
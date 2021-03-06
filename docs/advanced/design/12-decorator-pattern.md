# 装饰者模式 （Decorator Pattern）

# 笔记十 装饰器模式（Decorator Pattern）

## 1. 什么是装饰器模式 ?

### 装饰器模式（Decorator Pattern）

- 允许向一个现有的对象`添加新的功能`，同时又`不改变其结构`。

- 这种类型的设计模式属于`结构型模式`，它是作为现有的类的一个包装。

### 生活版

> **例如：**
>
> 1. 孙悟空有 72 变，当他变成"庙宇"后，他的根本还是一只猴子，但是他又有了庙宇的功能。
> 2. 不论一幅画有没有画框都可以挂在墙上，但是通常都是有画框的，并且实际上是画框被挂在墙上。在挂在墙上之前，画可以被蒙上玻璃，装到框子里；这时画、玻璃和画框形成了一个物体。

## 2. 饰器模式有什么作用?

### 在不改变原有对象的基础上功能附加功能，装饰器模式相比生成子类更为灵活。

## 3. 核心使用规则

### 1. `抽象组件`：定义一个抽象接口，来规范准备附加功能的类。

### 2. `具体组件`：将要被附加功能的类，实现抽象构建角色接口。

### 3. `抽象装饰者`：持有对具体构件角色的引用并定义与抽象构建角色一致的接口。

### 4. `具体装饰`：实现抽象装饰者角色，负责对具体构件添加额外功能。

## 4. 应用场景

- ### 扩展一个类的功能。 

- ### 动态增加功能，动态撤销。

## 5. 案例1：网关添加功能

<img src="../../../docs/.vuepress/public/design/decorator_mode.png" alt="img" style="zoom:150%;" />

- **网关的基本功能**：获取（拦截）基本参数
- **网关添加功能**：
  - 日志收集
  - API 接口限流

### 1. 抽象组件

- **抽象组件**：定义一个抽象接口，来规范准备附加功能的类。
- 创建一个抽象组件  `GatewayComponent.java` 

```java
package com.gateway.abstracts;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description: 网关组件(抽象类)
 */
public abstract class GatewayComponent {

    /**
     * 网关功能
     */
    public abstract void function();
}

```

### 2. 具体组件

- **基本功能**：获取（拦截）基本参数。

```java
package com.gateway.component;


import com.gateway.component.abstracts.GatewayComponent;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description:  网关基本实现类 （被装饰者）
 *
 */
public class BaseComponent extends GatewayComponent {

    @Override
    public void function() {
        System.out.println(">>>>>> 第一步：网关参数拦截，获取参数信息 >>>>>>");
    }
}
```

- **附加功能**：日志采集

```java
package com.gateway.component;

import com.gateway.component.abstracts.AbstractDecorator;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description: 日志采集（具体装饰角色）
 */
public class LogComponent extends AbstractDecorator {

    @Override
    public void function() {
        // 调用装饰类service
        super.function();
        // 日志收集
        System.out.println(">>>>>> 第二步：日志的采集 >>>>>>");
    }
}
```

- **附加功能**：API 接口限流

```java
package com.gateway.component;

import com.gateway.component.abstracts.AbstractDecorator;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description: 限流組件 (具体装饰角色)
 */
public class LimitComponent extends AbstractDecorator {

    @Override
    public void function() {
        // 1.传递日志收集装饰类
        System.out.println(super.getClass().toString());
        super.function();
        System.out.println(">>>>>> 第三步：API接口限流 >>>>>>");
    }

}
```

### 3. 抽象装饰者

- 作用：持有对具体构建角色的引用，并定义与抽象构件角色一致的接口
- 设置网关组件

```java
package com.gateway.component.abstracts;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description:  抽象装饰者
 * 作用：持有对具体构建角色的引用，并定义与抽象构件角色一致的接口
 */
public abstract class AbstractDecorator extends GatewayComponent {

    protected GatewayComponent gatewayComponent;

    public AbstractDecorator(){}

    public AbstractDecorator(GatewayComponent gatewayComponent){
        this.gatewayComponent = gatewayComponent;
    }

    /**
     * 设置网关组件
     *
     * @param gatewayComponent 网关主键
     */
    public void setGatewayComponent(GatewayComponent gatewayComponent) {
        if (gatewayComponent != null) {
            this.gatewayComponent = gatewayComponent;
        }
    }

    @Override
    public void function() {
        gatewayComponent.function();
    }

}
```

### 4. 具体装饰

- 通过工厂设计具体装饰

```java
package com.gateway.component.factory;

import com.gateway.component.BaseComponent;
import com.gateway.component.LimitComponent;
import com.gateway.component.LogComponent;
import com.gateway.component.abstracts.GatewayComponent;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description: 网关工厂获取装饰类，并控制执行顺序
 */
public class GatewayFactory {

   public static GatewayComponent getGatewayComponent(){
       // 1. 实例基础功能
       BaseComponent baseComponent = new BaseComponent();
       // 2. 在附加基础的功能上添加- 新增日志收集
       LogComponent logDecorator = new LogComponent();
       logDecorator.setGatewayComponent(baseComponent);
       // 3. 在附加基础的功能上添加- 新增Api接口限流
       LimitComponent limitDecorator = new LimitComponent();
       limitDecorator.setGatewayComponent(logDecorator);
       // 4. 执行顺序：新增Api接口限流 -> 新增日志收集 -> 网关基础功能
       return limitDecorator;
   }
}
```

### 5. 编写测试接口

```java
package com.gateway.controller;

import com.gateway.component.abstracts.GatewayComponent;
import com.gateway.component.factory.GatewayFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Auther: Calvin
 * @Date: 2019/5/15
 * @Description:
 */
@RestController
@RequestMapping("gateway")
public class GatewayController {

    @GetMapping(value = "api")
    public String api(){
        GatewayComponent gatewayComponent = GatewayFactory.getGatewayComponent();
        gatewayComponent.function();
        return "success";
    }
}
```

## 6. 结果演示

> 代码链接：https://github.com/1016280226/design-patterns

<img src="../../../docs/.vuepress/public/design/decorator_show.gif" style="zoom:100%;" />

## 7. 优缺点

### 优点：

> - ####  可以不改变原有对象的情况下动态扩展功能，可以使扩展的多个功能按想要的顺序执行，以实现不同效果.

### 缺点：

> - ####  更多的类，使程序复杂 .


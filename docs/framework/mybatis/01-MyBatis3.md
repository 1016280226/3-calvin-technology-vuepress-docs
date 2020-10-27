# 第一章 MyBatis3 源码分析

## 前言

### 1. 为什么要使用 Mybatis 框架 ？

> **`ORM`** (object relation mapper) 也叫 **`对象关系映射`** . 

第一代：是通过手写SQL,操作JDBC,从而打到数据入库，写入到表中。编写麻烦复杂，容易出错，所以出现了  **`hibernate`**  、 **`jpa`** 、 **`mybatis`** 。

由于 **`hibernate`** 只做到对象转换表结构，做不到复杂sql，所以 **`mybatis`**  的横空出世 。

- ####  解决了复杂sql，通过xml形式在编写复杂sql语句。

- ####  解决对象映射和数据表的问题，通过注解形式，帮助我们动态编写sql，其中封装比较简单常用CRUD.

- ####  通过2个观点好处在于，比hibernate好在可以查询编写复杂sql动态拼接等功能。

- #### 提高我们专注于业务，提高效率，从而专注对象而减少对SQL编写。



## 一、SqlSessionFactoryBuilder-源码分析

### 1. MyBatis 快速搭建使用

- 在项目中添加一个 `pom.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.1.RELEASE</version>
    </parent>

    <groupId>com.mybatis</groupId>
    <artifactId>1-mybatis3-code-analysis</artifactId>
    <name>mybatis3源码分析</name>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <dependencies>
        <!-- mybatis核心包 -->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.3.0</version>
        </dependency>
        
        <!-- mysql驱动包 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.29</version>
        </dependency>
        
        <!-- junit测试包 -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.11</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

</project>
```

- 创建`User`实体类

```java
package com.mybatis3.domain;

/**
 * description: User
 * date: 2020/9/21 18:12
 * author: Calvin
 * version: 1.0
 */
public class User {

    /**
     * ID
     */
    private Long id;

    /**
     * 名称
     */
    private String name;

    /**
     * 年龄
     */
    private Integer age;

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public Long getId() {
        return id;
    }
    
}
```

- 创建 `UserMapper` 接口，映射数据表

```java
package com.mybatis3.mapper;


import com.mybatis3.domain.User;

/**
 * description: UserMapper
 * date: 2020/9/21 18:12
 * author: Calvin
 * version: 1.0
 */
public interface UserMapper {

    /**
     * 查询用户
     * @param id 用户ID
     * @return 用户
     */
    User getUser(Long id);
}

```

- 编写一个 `UserMapper.xml` 文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- 为这个mapper指定一个唯一的namespace，namespace的值习惯上设置成包名+sql映射文件名，这样就能够保证namespace的值是唯一的
例如namespace="com.mayikt.mapper.UserMapper"就是com.mayikt.mapper(包名)+userMapper(userMapper.xml文件去除后缀)
 -->
<mapper namespace="com.mayikt.mapper.UserMapper">
    <!-- 在select标签中编写查询的SQL语句， 设置select标签的id属性为getUser，id属性值必须是唯一的，不能够重复
    使用parameterType属性指明查询时使用的参数类型，resultType属性指明查询返回的结果集类型
    resultType="com.mayikt.entity.User"就表示将查询结果封装成一个User类的对象返回
    User类就是users表所对应的实体类
    -->

    <!-- ###根据id查询得到一个user对象 -->
    <select id="getUser" parameterType="java.lang.Long"
            resultType="com.mayikt.entity.UserEntity">
        select * from user where id=#{id}
    </select>

</mapper>
```

- 添加 `mybatis_config.xml` 配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    
    <!-- 环境配置 -->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <!-- 数据库连接相关配置 ,这里动态获取config.properties文件中的内容-->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/db_mybatis3"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>
    
    <!-- mapping文件路径配置 -->
    <mappers>
        <mapper resource="mappers/UserMapper.xml"/>
    </mappers>
    
</configuration>
```




## 二、Mapper 与接口绑定原理-源码分析



## 三、SQLSession一级缓存原理-源码分析


## 四、SqlSessionFactory二级缓存原理分析
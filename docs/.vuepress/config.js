const load = require("./routerLayout")

// 基础篇
const javaFiles = load("../base/java",null,"../base/java/extend")
const javaExtendFiles = load("../base/java/extend")
const groovyFiles = load("../base/groovy")
const linuxFiles = load("../base/linux")

// 进阶篇
const dataBaseFiles = load("../advanced/data/base")
const dataIdeaFiles = load("../advanced/data/idea")

// 高级篇
const concurrentFiles = load("../high/concurrent")
const jvmFiles = load("../high/performance/jvm")
const mysqlFiles = load("../high/performance/mysql")
const tomcatFiles = load("../high/performance/tomcat8")
const iterableFiles = load("../high/collection/iterable")
const mapFiles = load("../high/collection/map")

// 框架篇
const doubleFrameworkFiles = load("../framework/double")
const hibernateFrameworkFiles = load("../framework/hibernate")
const jpaFrameworkFiles = load("../framework/jpa")
const mybatisFrameworkFiles = load("../framework/mybatis")
const springFrameworkFiles = load("../framework/spring")
const springmvcFrameworkFiles = load("../framework/springmvc")
const springbootFrameworkFiles = load("../framework/springboot")

// 运维篇
const dockerFiles = load("../devops/docker")
const gitlabFiles = load("../devops/gitlab")
const sonarqubeFiles = load("../devops/sonarqube")
const jenkinsIntegrationFiles = load("../devops/jenkins/integration")
const jenkinsIntroduceFiles = load("../devops/jenkins/introduce")
const jenkinsPiplineFiles = load("../devops/jenkins/pipeline")
const k8sBaseFiles = load("../devops/kubernetes/base")
const k8sHelmFiles = load("../devops/kubernetes/helm")
const k8sTidbFiles = load("../devops/kubernetes/tidb")


// 面试篇
const backInterviewFiles = load("../interview/back")
// 书籍编
const technologyBookFiles = load("../book/technology")
const familyBookFiles = load("../book/family")
const managerBookFiles = load("../book/manager")
const workerBookFiles = load("../book/worker")
const soulBookFiles = load("../book/soul")
const historyBookFiles = load("../book/history")
const lifeBookFiles = load("../book/life")

module.exports = {

    // 插件
    plugins: [
        {
            '@vuepress/back-to-top': {}
        }
    ],

    // 头部
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/logo/small.png' }]
    ],

    // 网站标题及描述
    theme: 'reco',
    title: 'Calvin 技术文档',
    description: '终身学习，知行合一',

    // 主题配置
    themeConfig: {
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        preLinks: true,
        // 文档更新时间
        lastUpdated: '更新时间',
        // logo
        subSidebar: 'auto',
        logo: '/logo/small.png',
        author: 'Calvin',
        // 备案
        record: '暂无',
        recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
        // 项目开始时间，只填写年份
        startYear: '2020',
        nav: [
            { text: '指南', link: '/guide/', icon: 'reco-document' },
            { text: '面试宝典', link: '/interview/', icon: 'reco-faq' },
            { text: '书籍学习', link: '/book/soul/01-soul-break-idea.md', icon: 'reco-date' },
            // 下拉列表
            {
                text: '开发工具',
                items: [
                    {
                        text: 'Idea',
                        link: ''
                    },
                    {
                        text: 'VsCode',
                        link: ''
                    },
                    {
                        text: 'Navicat',
                        link: ''
                    },
                    {
                        text: 'Json',
                        link: ''
                    }
                ],
                icon: 'reco-github'
            },
            // {
            //     text: '前端-开发工具',
            //     items: [
            //         {
            //             text: '前端源码',
            //             link: 'https://gitee.com/elunez/eladmin-web'
            //         },
            //         {
            //             text: '后端源码',
            //             link: 'https://gitee.com/elunez/eladmin'
            //         }
            //     ],
            //     icon: 'reco-mayun'
            // },
            // { text: '学习书籍', link: '/version/V2.6/', icon: 'reco-date' },

        ],
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 3,
        // 侧边栏
        sidebar: {
            '/guide/': [
                {
                    title: "指南",
                    collapsable: false,
                    children: ["/guide/"]
                },
                {
                    title: "基础篇",
                    collapsable: false,
                    children: [
                        '/base/java/00-java-introduce',
                        '/base/groovy/00-groovy-introduce',
                        '/base/linux/00-linux-introduce'
                    ]
                },
                {
                    title: "进阶篇",
                    collapsable: false,
                    children: [
                        '/advanced/data/00-data-introduce',
                        '/advanced/design/00-design-introduce'
                    ]
                },
                {
                    title: "高级篇",
                    collapsable: false,
                    children: [
                        '/high/concurrent/00-concurrent-introduce',
                        '/high/performance/00-performance-introduce',
                        '/high/collection/00-collection-introduce'
                    ]
                },
                {
                    title: "框架篇",
                    collapsable: false,
                    children: [
                        '/framework/hibernate/00-hibernate-introduce.md',
                        '/framework/jpa/00-jpa-introduce.md',
                        '/framework/mybatis/00-mybatis3-introduce.md',
                        '/framework/spring/00-spring5-introduce.md',
                        '/framework/springmvc/00-springmvc-introduce.md',
                        '/framework/springboot/00-springboot2-introduce.md',
                        '/framework/double/00-double-introduce.md'
                    ]
                },
                {
                    title: "整合篇",
                    collapsable: false,
                    children: [
                    ]
                },
                {
                    title: "运维篇",
                    collapsable: false,
                    children: [
                        '/devops/docker/00-docker-introduce',
                        '/devops/kubernetes/base/00-kubernetes-introduce',
                        '/devops/gitlab/00-gitlab-introduce',
                        '/devops/sonarqube/00-sonarqube-introduce',
                        '/devops/jenkins/introduce/00-jenkins-introduce',
                        
                    ]
                },
                {
                    title: "面试篇",
                    collapsable: false,
                    children: [
                        '/interview/back/00-back-interview',
                        '/interview/web/00-web-interview'
                    ]
                },
                {
                    title: "思想篇",
                    collapsable: false,
                    children: [
                    ]
                },
                {
                    title: "书本篇",
                    collapsable: false,
                    children: [
                    ]
                }
            ],

            /**  基础篇 */
            '/base/java/': [
                {
                    title: "基础篇",
                    collapsable: false,
                    children: javaFiles
                },
                {
                    title: "扩展篇",
                    collapsable: false,
                    children: javaExtendFiles
                }
            ],
            '/base/groovy/': [
                {
                    collapsable: false,
                    children: groovyFiles
                }
            ],
            '/base/linux/': [
                {
                    collapsable: false,
                    children: linuxFiles
                }
            ],

            /** 高级篇  */
            '/advanced/data/': [
                {
                    title: "引言简介",
                    collapsable: false,
                    children: [
                        "/advanced/data/00-data-introduce"
                    ]
                },
                {
                    title: "第一章 方法论",
                    collapsable: false,
                    children: [
                        "/advanced/data/01-data-method"
                    ]
                },
                {
                    title: "第二章 基础",
                    collapsable: false,
                    children: dataBaseFiles
                },
                {
                    title: "第三章 算法思维",
                    collapsable: false,
                    children: dataIdeaFiles
                }
            ],
            '/advanced/design/': [
                {
                    title: "引言简介",
                    collapsable: false,
                    children: [
                        "/advanced/design/00-design-introduce"
                    ]
                },
                {
                    title: "第一章 创建型",
                    collapsable: false,
                    children: [
                        "/advanced/design/01-singleton-pattern",
                        "/advanced/design/02-factory-method-pattern",
                        "/advanced/design/03-factory-abstract-pattern",
                        "/advanced/design/04-builder-pattern",
                        "/advanced/design/05-prototype-pattern"
                    ]
                },
                {
                    title: "第二章 结构型",
                    collapsable: false,
                    children: [
                        '/advanced/design/06-proxy-pattern',
                        '/advanced/design/07-adapter-pattern',
                        '/advanced/design/08-bridge-pattern',
                        '/advanced/design/09-facade-pattern',
                        '/advanced/design/10-flyweight-pattern',
                        '/advanced/design/11-composite-pattern',
                        '/advanced/design/12-decorator-pattern'
                    ]
                },
                {
                    title: "第三章 行为型",
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        '/advanced/design/13-strategy-pattern',
                        '/advanced/design/14-command-pattern',
                        '/advanced/design/15-chain-pattern',
                        '/advanced/design/16-state-pattern',
                        '/advanced/design/17-observer-pattern',
                        '/advanced/design/18-mediator-pattern',
                        '/advanced/design/19-iterator-pattern',
                        '/advanced/design/20-visitor-pattern',
                        '/advanced/design/21-memento-pattern',
                        '/advanced/design/22-template-pattern',
                        '/advanced/design/23-interpreter-pattern'
                    ]
                }
            ],
            '/high/concurrent/': [
                {
                    collapsable: false,
                    children: concurrentFiles
                }
            ],
            '/high/performance/': [
                {  
                    title: '引言简介',
                    collapsable: false,
                    children: ['/high/performance/00-performance-introduce']
                },
                {
                    title: "JVM",
                    collapsable: false,
                    children: jvmFiles
                },
                {
                    title: "MySQL",
                    collapsable: false,
                    children: mysqlFiles
                },
                {
                    title: "Tomcat8",
                    collapsable: false,
                    children: tomcatFiles
                },
            ],
            '/high/collection/': [
                {  
                    title: '引言简介',
                    collapsable: false,
                    children: ['/high/collection/00-collection-introduce']
                },
                {
                    title: "第一章 Iterable",
                    collapsable: false,
                    children: iterableFiles
                },
                {
                    title: "第二章 Map",
                    collapsable: false,
                    children: mapFiles
                }
            ],

            /** 架构篇 */
            '/framework/double/': [
                {
                    collapsable: false,
                    children: doubleFrameworkFiles
                },
            ],
            '/framework/hibernate/': [
                {
                    collapsable: false,
                    children: hibernateFrameworkFiles
                },
            ],
            '/framework/jpa/': [
                {
                    collapsable: false,
                    children: jpaFrameworkFiles
                },
            ],
            '/framework/mybatis/': [
                {
                    collapsable: false,
                    children: mybatisFrameworkFiles
                },
            ],
            '/framework/spring/': [
                {
                    collapsable: false,
                    children: springFrameworkFiles
                },
            ],
            '/framework/springmvc/': [
                {
                    collapsable: false,
                    children: springmvcFrameworkFiles
                },
            ],
            '/framework/springboot/': [
                {
                    collapsable: false,
                    children: springbootFrameworkFiles
                },
            ],


            /** 运维篇 */
            '/devops/docker/': [
                {
                    collapsable: false,
                    children: dockerFiles
                },
            ],
            '/devops/kubernetes/': [
                {  
                    title: 'kubernetes 船舵篇',
                    collapsable: false,
                    children: k8sBaseFiles
                },
                {
                    title: "Helm 图表篇",
                    collapsable: false,
                    children: k8sHelmFiles
                },
                {
                    title: "TIDB 分布式数据库篇",
                    collapsable: false,
                    children: k8sTidbFiles
                }
            ],
            '/devops/gitlab/': [
                {
                    collapsable: false,
                    children: gitlabFiles
                },
            ],
            '/devops/sonarqube/': [
                {
                    collapsable: false,
                    children: sonarqubeFiles
                },
            ],
            '/devops/jenkins/': [
                {  
                    title: '基本篇',
                    collapsable: false,
                    children: jenkinsIntroduceFiles
                },
                {
                    title: "集成篇",
                    collapsable: false,
                    children: jenkinsIntegrationFiles
                },
                {
                    title: "流水线篇",
                    collapsable: false,
                    children: jenkinsPiplineFiles
                }
            ],

            /** 面试篇 */
            '/interview/back/': [
                {  
                    collapsable: false,
                    children: backInterviewFiles
                }
            ],

            '/book/': [
                {
                    title: "思想技术",
                    collapsable: false,
                    children: technologyBookFiles
                },
                {
                    title: "家庭培养",
                    collapsable: false,
                    children: familyBookFiles
                },
                {
                    title: "精神心灵",
                    collapsable: false,
                    children: soulBookFiles
                },
                {
                    title: "生活体验",
                    collapsable: false,
                    children: lifeBookFiles
                },
                {
                    title: "历史人文",
                    collapsable: false,
                    children: historyBookFiles
                },
                {
                    title: "管理提升",
                    collapsable: false,
                    children: managerBookFiles
                },
                {
                    title: "职场效能",
                    collapsable: false,
                    children: workerBookFiles
                }
            ]
        },
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: '1016280226/3-calvin-technology-docsify-docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'
    }
}

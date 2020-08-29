const config = {
    project: {
        name: {
            en: 'Vladimir',
            zh: '弗拉基米尔'
        },
        logo: require('@/assets/img/logo.png'),
        github: 'https://github.com/Hyperzsb/vladimir-theme',
        version: 'v1.1.0',
        description: {
            main: {
                en: 'A general, multifunctional and easy-to-use Vue.js based web theme to present your project and your code.',
                zh: '一个通用的、多功能的、易于使用的基于 Vue.js 的 web 主题，用于表示您的项目和代码。'
            },
            details: {
                en: 'The goal of this project is to simplify the presentation and promotion process of various projects, and to deliver your desired products faster and better.' +
                    'The original purpose of this project was to showcase Hyperzsb\'s personal projects and code, ' +
                    'of course, as an open source software, Vladimir welcomes all types of personal or commercial use under the MIT license.',
                zh: '该项目旨在简化各类项目的展示和宣传流程，更快、更好地发布您心仪的产品。这个项目的初衷是展示 Hyperzsb 的个人项目及代码，' +
                    '当然作为开源软件，弗拉基米尔欢迎各类遵循 MIT 许可的个人或商业使用。'
            },
            features: [{
                name: {
                    en: 'Joyful',
                    zh: '使用更简单'
                },
                details: {
                    en: 'Thanks to the powerful features of Vue.js and its plugins, ' +
                        'you can configure and publish your website in half an hour by modifying and uploading just one or two files.',
                    zh: '得益于 Vue.js 的及其组件强大特性，您可以通过修改、上传仅仅一两个文件便可以在半小时之内配置并发布您的网站。'
                }
            }, {
                name: {
                    en: 'Powerful',
                    zh: '功能更强大'
                },
                details: {
                    en: 'This template supports multiple project presentation plates, each of which supports Markdown rendering. ' +
                        'At the same time, experienced vue. js engineers can also develop custom plates.',
                    zh: '该模板支持多个项目展示板块，且各板块均支持 Markdown 渲染。同时，有经验的 Vue.js 工程师还可以开发自定义的板块。'
                }
            }, {
                name: {
                    en: 'Beautiful',
                    zh: '界面更美观'
                },
                details: {
                    en: 'After drawing on some of the best web design work, we present you with a more concise and flat technology scroll. ' +
                        'Responding and multiterminal adaptation let your ideas have no device boundary.',
                    zh: '在借鉴了若干卓越的网页设计作品后，给您呈现一幅更间约、更扁平的科技图卷。自适应和多端适配让您的想法没有设备的边界。'
                }
            }]
        },
        readMe: require('@/assets/markdown/documentation-en.md'),
    },
    header: {
        logo: true,
        name: true,
        lang: true,
        theme: true
    },
    footer: {
        logo: true,
        linkListLeft: {
            title: {
                en: 'Resources',
                zh: '相关资源'
            },
            links: [{
                name: {
                    en: 'Vue.js',
                    zh: 'Vue.js'
                },
                href: 'https://vuejs.org/'
            }, {
                name: {
                    en: 'BootstrapVue',
                    zh: 'BootstrapVue'
                },
                href: 'https://bootstrap-vue.org/'
            }, {
                name: {
                    en: 'markdown-it',
                    zh: 'markdown-it'
                },
                href: 'https://github.com/markdown-it/markdown-it/'
            }]
        },
        linkListRight: {
            title: {
                en: 'About Me',
                zh: '关于我'
            },
            links: [{
                name: {
                    en: 'My GitHub',
                    zh: '我的 GitHub'
                },
                href: 'https://github.com/Hyperzsb/'
            }, {
                name: {
                    en: 'My Blog',
                    zh: '我的博客'
                },
                href: 'https://blog.hyperzsb.tech/'
            }]
        },
        recordText: ''
    },
    components: {
        overview: {
            scrollToTop: true
        },
        demo: {
            self: true,
            scrollToTop: true,
            toc: true
        },
        documentation: {
            self: true,
            scrollToTop: true,
            toc: true
        },
        about: {
            self: true,
            scrollToTop: true,
            members: [{
                name: {
                    en: 'Hyperzsb',
                    zh: 'Hyperzsb'
                },
                description: {
                    en: 'That\'s right, it\'s me, and only me right now.',
                    zh: '没错，这就是我，而且目前只有我。'
                },
                headPortrait: null
            }, {
                name: {
                    en: 'More members...',
                    zh: '还可以有更多成员......'
                },
                description: {
                    en: 'Waiting for someone.',
                    zh: '等风来。'
                },
                headPortrait: null
            }]
        },
    },
    lang: [{
        abbr: 'en',
        fullName: 'English'
    }, {
        abbr: 'zh',
        fullName: '简体中文'
    }]
}

export {config};

const config = {
    project: {
        name: {
            en: 'Demo Project',
            zh: '样例项目'
        },
        logo: require('@/assets/img/logo.png'),
        github: 'https://github.com',
        version: 'v1.0.0',
        description: {
            main: {
                en: 'Main description of the demo project. It should be short. It had better be less than one hundred characters.',
                zh: '演示项目的主要描述。它应该简短。最好不要超过100个字。'
            },
            details: {
                en: 'Detailed description of the demo project. This section allows much longer text and maybe some pictures. ' +
                    'Characters here ought to be no less than five hundred.',
                zh: '演示项目的详细描述。这个部分允许更长的文本和一些图片。这里的字符应该不少于500个。'
            },
            features: [{
                name: {
                    en: 'Feature One',
                    zh: '特性一'
                },
                details: {
                    en: 'Details for Feature One. It should be somewhat longer, but not longer than two hundred characters.',
                    zh: '特性一的详细信息。它应该稍微长一点，但不超过200个字符。'
                }
            }, {
                name: {
                    en: 'Feature Two',
                    zh: '特性二'
                },
                details: {
                    en: 'Details for Feature Two. Maybe there are some pictures will be better.',
                    zh: '特性二的详细信息。也许有一些图片会更好。'
                }
            }, {
                name: {
                    en: 'Feature Three',
                    zh: '特性三'
                },
                details: {
                    en: 'Details for Feature Three. How can the cards layout as the same height?',
                    zh: '特性三的细节。怎样才能使卡片的布局达到同样的高度？'
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
                en: 'List Left',
                zh: '左列表'
            },
            links: [{
                name: {
                    en: 'Link One',
                    zh: '链接一'
                },
                href: '#'
            }, {
                name: {
                    en: 'Link Two',
                    zh: '链接二'
                },
                href: '#'
            }, {
                name: {
                    en: 'Link Three',
                    zh: '链接三'
                },
                href: '#'
            }, {
                name: {
                    en: 'Link Four',
                    zh: '链接四'
                },
                href: '#'
            }]
        },
        linkListRight: {
            title: {
                en: 'List Right',
                zh: '右列表'
            },
            links: [{
                name: {
                    en: 'Link One',
                    zh: '链接一'
                },
                href: '#'
            }, {
                name: {
                    en: 'Link Two',
                    zh: '链接二'
                },
                href: '#'
            }, {
                name: {
                    en: 'Link Three',
                    zh: '链接三'
                },
                href: '#'
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
                    en: 'Member One',
                    zh: '成员一'
                },
                description: {
                    en: 'Some description for member one.',
                    zh: '对成员一的一些描述。'
                },
                headPortrait: null
            }, {
                name: {
                    en: 'Member Two',
                    zh: '成员二'
                },
                description: {
                    en: 'Some description for member two.',
                    zh: '对成员二的一些描述。'
                },
                headPortrait: null
            }, {
                name: {
                    en: 'Member Three',
                    zh: '成员三'
                },
                description: {
                    en: 'Some description for member three.',
                    zh: '对成员三的一些描述。'
                },
                headPortrait: null
            }, {
                name: {
                    en: 'Member Four',
                    zh: '成员四'
                },
                description: {
                    en: 'Some description for member four.',
                    zh: '对成员四的一些描述。'
                },
                headPortrait: null
            }, {
                name: {
                    en: 'Member Five',
                    zh: '成员五'
                },
                description: {
                    en: 'Some description for member five.',
                    zh: '对成员五的一些描述。'
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
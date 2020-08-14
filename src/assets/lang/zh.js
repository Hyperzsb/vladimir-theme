import store from '@/store';

const messages = {
    components: {
        headerBar: {
            overview: '概览',
            demo: '快速入门',
            documentation: '文档',
            about: '关于'
        },
        footerBar: {
            linkListLeft: {
                title: '',
                links: []
            },
            linkListRight: {
                title: '',
                links: []
            },
            footnotes: [
                '页面设计和开发使用',
                '当前版本',
                '代码许可'
            ]
        },
        overview: {
            getStart: '快速入门',
            viewInGitHub: '在 GitHub 中浏览',
            whatIs: '什么是',
            whyIs: '为什么选择',
            getStartNow: '立即开始',
            documentation: '帮助文档'
        }
    },
    project: {
        name: store.state.config.project.name.zh,
        description: {
            main: store.state.config.project.description.main.zh,
            details: store.state.config.project.description.details.zh
        }
    }
}

messages.project.description.features = [];

let projectFeatures = store.state.config.project.description.features;

for (let i = 0; i < projectFeatures.length; i++)
    messages.project.description.features.push({
        name: projectFeatures[i].name.zh,
        details: projectFeatures[i].details.zh
    });

export {messages};

messages.components.footerBar.linkListLeft.title = store.state.config.footer.linkListLeft.title.zh;

for (let i = 0; i < store.state.config.footer.linkListLeft.links.length; i++)
    messages.components.footerBar.linkListLeft.links.push({
        name: store.state.config.footer.linkListLeft.links[i].name.zh
    });

messages.components.footerBar.linkListRight.title = store.state.config.footer.linkListRight.title.zh;

for (let i = 0; i < store.state.config.footer.linkListRight.links.length; i++)
    messages.components.footerBar.linkListRight.links.push({
        name: store.state.config.footer.linkListRight.links[i].name.zh
    });

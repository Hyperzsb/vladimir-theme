import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        ini: {
            project: {
                name: 'Demo Project',
                logo: require('@/assets/img/logo.png'),
                github: 'https://github.com',
                version: 'v1.0.0',
                readMe: require('@/assets/markdown/demo.md'),
            },
            header: {
                projectLogo: true,
                projectName: true,
                demoPage: true,
                aboutPage: true,
            },
            footer: {
                projectLogo: true,
                linkListLeft: {
                    title: 'List Left',
                    links: [{
                        name: 'Link One',
                        href: '#'
                    }, {
                        name: 'Link Two',
                        href: '#'
                    }, {
                        name: 'Link Three',
                        href: '#'
                    }, {
                        name: 'Link Four',
                        href: '#'
                    }]
                },
                linkListRight: {
                    title: 'List Right',
                    links: [{
                        name: 'Link One',
                        href: '#'
                    }, {
                        name: 'Link Two',
                        href: '#'
                    }, {
                        name: 'Link Three',
                        href: '#'
                    }]
                },
                recordText: ''
            },
            components: {
                scrollToTop: true
            }
        },
        navItem: -1
    },
    mutations: {
        changeNavItem(state, index) {
            state.navItem = index;
        }
    }
});

export default index;

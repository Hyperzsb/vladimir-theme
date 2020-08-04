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
                description: {
                    main: 'Main description of the demo project. It should be short. It had better be less than one hundred characters.',
                    details: 'Detailed description of the demo project. This section allows much longer text and maybe some pictures. ' +
                        'Characters here ought to be no less than three hundred.',
                    features: [{
                        name: 'Feature One',
                        details: 'Details for Feature One. It should be somewhat longer, but not longer than two hundred characters.'
                    }, {
                        name: 'Feature Two',
                        details: 'Details for Feature Two. Maybe there are some pictures will be better.'
                    }, {
                        name: 'Feature Three',
                        details: 'Details for Feature Three. How can the cards layout as the same height?'
                    }]
                },
                readMe: require('@/assets/markdown/demo.md'),
            },
            header: {
                logo: true,
                name: true
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
                demo: true,
                documentation: true,
                about: true,
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

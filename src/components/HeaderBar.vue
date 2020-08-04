<template>
    <b-navbar tag="header" toggleable="md" sticky
              class="custom-navbar" :class="navbarClass">
        <b-navbar-brand href="/" :active="true" tag="h1"
                        class="mb-1 custom-nav-brand" :class="navBrandClass">
            <img v-if="ini.header.logo" :src="ini.project.logo" :alt="ini.project.name"
                 class="custom-nav-logo">
            <b v-if="ini.header.name">{{ ini.project.name }}</b>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/overview" replace>
                    <b class="pb-1 pt-3 pt-md-1 mr-2 custom-button" :class="navItemClass(0)">
                        Overview
                    </b>
                </b-nav-item>
                <b-nav-item v-if="ini.components.demo" to="/demo" replace>
                    <b class="pb-1 pt-3 pt-md-1 mr-2 custom-button" :class="navItemClass(1)">
                        Demo
                    </b>
                </b-nav-item>
                <b-nav-item v-if="ini.components.documentation" to="/documentation" replace>
                    <b class="pb-1 pt-3 pt-md-1 mr-2 custom-button" :class="navItemClass(2)">
                        Documentation
                    </b>
                </b-nav-item>
                <b-nav-item v-if="ini.components.about" to="/about" replace>
                    <b class="pb-1 pt-3 pt-md-1 mr-2 custom-button" :class="navItemClass(3)">
                        About
                    </b>
                </b-nav-item>
                <b-nav-item :href="ini.project.github" target="_blank">
                    <b class="pb-1 pt-3 pt-md-1 mr-2 custom-button" :class="navItemClass(4)">
                        GitHub
                        <b-icon icon="box-arrow-up-right" class="ml-1"></b-icon>
                    </b>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: "HeaderBar",
    data() {
        return {
            isScrolled: false
        }
    },
    computed: {
        navbarClass: function () {
            if (this.isScrolled)
                return {
                    'shadow': true,
                    'default-bg-color-before': false,
                    'default-bg-color-after': true
                }
            else
                return {
                    'shadow': false,
                    'default-bg-color-before': true,
                    'default-bg-color-after': false
                }
        },
        navBrandClass: function () {
            return {
                'default-link-color': true
            }
        },
        ...mapState([
            'ini',
            'navItem'
        ])
    },
    methods: {
        navItemClass: function (index) {
            if (index === 4)
                return {
                    'custom-button-active': false,
                    'custom-button-inactive': true,
                    'default-button-color-active': false,
                    'default-button-color-inactive': true,
                }

            if (this.navItem === index)
                return {
                    'custom-button-active': true,
                    'custom-button-inactive': false,
                    'default-button-color-active': true,
                    'default-button-color-inactive': false,
                }
            else
                return {
                    'custom-button-active': false,
                    'custom-button-inactive': true,
                    'default-button-color-active': false,
                    'default-button-color-inactive': true,
                }
        },
        changeShadow() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.isScrolled = scrollTop > 10;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.changeShadow);
    },
    destroyed() {
        window.removeEventListener('scroll', this.changeShadow);
    }
}

</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";

.default-bg-color-before {
    background: rgba(#ffffff, .5);
}

.default-bg-color-after {
    background: rgba(map-get($default-theme-color, 'base-color'), .5);
}

.default-link-color {
    color: map-get($default-theme-color, 'link-color');
}

.default-link-color:hover {
    color: map-get($default-theme-color, 'link-color-light');
}

.default-button-color-active {
    color: map-get($default-theme-color, 'link-color-lighter');
}

.default-button-color-inactive {
    color: map-get($default-theme-color, 'link-color');
}

.default-button-color-inactive:hover {
    color: map-get($default-theme-color, 'link-color-light');
}

.default-button-color-inactive:hover::after {
    border-bottom-color: map-get($default-theme-color, 'link-color-light');
}

.custom-navbar {
    transition: 0.25s;
}

.custom-navbar::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
}

.custom-nav-logo {
    height: 1.8rem;
    margin-right: 1rem;
}

.custom-nav-brand {
    transition: 0.25s;
}

.custom-button {
    display: inline-block;
    background: none;
    border: 0;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
}

.custom-button::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
}

.custom-button-active {
    transition: color 0.25s;
}

.custom-button-active::after {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid;
}

.custom-button-inactive {
    transition: color 0.25s;
}

.custom-button-inactive::after {
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
}

.custom-button-inactive:hover::after {
    width: 100%;
    height: 100%;
    transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
}

</style>

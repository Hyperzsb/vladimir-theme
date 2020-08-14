<template>
    <b-navbar tag="header" toggleable="md" sticky
              class="custom-navbar" :class="navbarClass">
        <b-navbar-brand href="/" :active="true" tag="h1"
                        class="custom-nav-brand" :class="navBrandClass">
            <img v-if="config.header.logo" :src="config.project.logo" :title="$t('messages.project.name')"
                 class="custom-nav-logo">
            <b v-if="config.header.name">{{ $t('messages.project.name') }}</b>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/overview" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(0)">
                        {{ $t('messages.components.headerBar.overview') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.components.demo.self" to="/demo" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(1)">
                        {{ $t('messages.components.headerBar.demo') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.components.documentation.self" to="/documentation" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(2)">
                        {{ $t('messages.components.headerBar.documentation') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.components.about.self" to="/about" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(3)">
                        {{ $t('messages.components.headerBar.about') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.project.github" :href="config.project.github" target="_blank">
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(4)">
                        GitHub
                        <b-icon icon="box-arrow-up-right" class="ml-1"></b-icon>
                    </b>
                </b-nav-item>
                <b-nav-item-dropdown right no-caret class="pb-1 pt-1 mr-2">
                    <template v-slot:button-content>
                        <b-icon icon="globe2" class="custom-icon" :class="iconColorClass"></b-icon>
                    </template>
                    <b-dropdown-item v-for="(lang, index) in config.lang" :key="index"
                                     @click="changeLanguage(lang.abbr)">
                        {{ lang.fullName }}
                    </b-dropdown-item>
                </b-nav-item-dropdown>
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
        iconColorClass: function () {
            return {
                'default-icon-color': true
            }
        },
        ...mapState([
            'config',
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
        },
        changeLanguage(lang) {
            this.$i18n.locale = lang;
            this.$cookies.set('InitialLang', lang, 60 * 60);
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
    background: rgba($default-base-color, .5);
}

.default-link-color {
    color: $default-link-color;

    &:hover {
        color: $default-link-color-light;
    }

    &:active {
        color: $default-link-color-light;
    }
}

.default-button-color-active {
    color: $default-link-color-lighter;
}

.default-button-color-inactive {
    color: $default-link-color;

    &:hover {
        color: $default-link-color-light;
    }

    &:hover::after {
        border-bottom-color: $default-link-color-light;
    }
}

.default-icon-color {
    color: $default-link-color;

    &:hover {
        color: $default-link-color-light;
    }

    &:active {
        color: $default-link-color-light;
    }
}

.custom-navbar {
    transition: 0.25s;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backdrop-filter: blur(10px);
        z-index: -1;
    }
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
    transition: 0.25s;

    &:after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

.custom-button-active {
    transition: 0.25s;

    &:after {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid;
    }
}

.custom-button-inactive {
    transition: 0.25s;

    &:after {
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 2px solid transparent;
        transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
    }

    &:hover::after {
        width: 100%;
        height: 100%;
        transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
    }
}

.custom-icon {
    transition: 0.25s;
}

</style>

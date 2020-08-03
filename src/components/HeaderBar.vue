<template>
    <b-navbar tag="header" toggleable="md" sticky
              class="custom-navbar" :class="{ 'shadow' : this.isShadow }">
        <b-navbar-brand href="/" :active="true" tag="h1" class="mb-1">
            <b>{{ ini.project.name }}</b>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/overview" replace
                            :class="{ active: this.navItem === 0 }">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button"
                       :class="{ 'custom-button-active' : this.navItem === 0 ,
                                 'custom-button-inactive' : this.navItem !== 0 }">Overview</b>
                </b-nav-item>
                <b-nav-item v-if="this.ini.header.demoPage" to="/demo" replace
                            :class="{ active: this.navItem === 1 }">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button"
                       :class="{ 'custom-button-active' : this.navItem === 1 ,
                                 'custom-button-inactive' : this.navItem !== 1 }">Demo</b>
                </b-nav-item>
                <b-nav-item v-if="this.ini.header.aboutPage" to="/about" replace
                            :class="{ active: this.navItem === 2 }">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button"
                       :class="{ 'custom-button-active' : this.navItem === 2 ,
                                 'custom-button-inactive' : this.navItem !== 2 }">About</b>
                </b-nav-item>
                <b-nav-item :href="ini.project.github" target="_blank">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button custom-button-inactive">
                        View in GitHub
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
            isShadow: false
        }
    },
    computed: {
        ...mapState([
            'ini',
            'navItem'
        ])
    },
    methods: {
        changeShadow() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.isShadow = scrollTop > 10;
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

.custom-navbar {
    background: rgba(#fff, .5);
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
    color: #adb5bd;
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

.custom-button-inactive:hover {
    color: #6c757d;
}

.custom-button-inactive:hover::after {
    width: 100%;
    height: 100%;
}

.custom-button-inactive:hover::after {
    border-bottom-color: #6c757d;
    transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
}

</style>

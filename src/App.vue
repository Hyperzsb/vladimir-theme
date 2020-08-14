<template>
    <div class="main-container" :class="bgColorClass">
        <header-bar/>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-bar/>
    </div>
</template>

<script>

import {mapState} from 'vuex'

import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

export default {
    name: 'App',
    computed: {
        bgColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-bg-color': true
                };
            else
                return {
                    'dark-bg-color': true
                };
        },
        ...mapState([
            'config',
            'theme'
        ])
    },
    components: {
        HeaderBar,
        FooterBar
    }
}

</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.fade-enter-active {
    transition: opacity .3s;
}

.fade-enter {
    opacity: 0;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .3s;
}

.default-bg-color {
    background-color: #ffffff;
}

.dark-bg-color {
    background-color: $dark-base-color;
}

.main-container {
    transition: 0.25s;
}

</style>

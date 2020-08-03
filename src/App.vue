<template>
    <div>
        <header-bar/>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-bar/>
        <scroll-to-top v-if="ini.components.scrollToTop"/>
    </div>
</template>

<script>

import {mapState} from 'vuex'

import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";
import ScrollToTop from '@/components/ScrollToTop'

export default {
    name: 'App',
    computed: {
        ...mapState([
            'ini'
        ])
    },
    components: {
        HeaderBar,
        FooterBar,
        ScrollToTop
    }
}

</script>

<style lang="scss" scoped>

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

</style>

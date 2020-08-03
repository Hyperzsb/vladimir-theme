<template>
    <div>
        <header-bar/>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-bar/>
    </div>
</template>

<script>

import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

export default {
    name: 'App',
    components: {
        HeaderBar,
        FooterBar
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

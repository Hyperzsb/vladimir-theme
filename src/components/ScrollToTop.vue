<template>
    <transition name="fade" mode="out-in">
        <div v-if="isScrolled" class="scroll-to-top" :class="shadowColorClass" @click="scrollToTop()">
            <b-icon icon="arrow-up-circle-fill" class="custom-icon" :class="iconColorClass"></b-icon>
        </div>
    </transition>
</template>

<script>

export default {
    name: "ScrollToTop",
    data() {
        return {
            isScrolled: false
        }
    },
    computed: {
        iconColorClass: function () {
            return {
                'default-icon-color': true
            }
        },
        shadowColorClass: function () {
            return {
                'default-shadow-color': true
            }
        }
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        showItem() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.isScrolled = scrollTop > 150;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showItem);
    },
    destroyed() {
        window.removeEventListener('scroll', this.showItem);
    }
}

</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";

.default-icon-color {
    color: rgba($default-link-color, .7);
}

.default-shadow-color {
    box-shadow: 0 0 0.7rem $default-shadow-color;

    &:hover {
        box-shadow: 0 0 1.3rem $default-shadow-color;
    }

    &:active {
        box-shadow: 0 0 0.7rem $default-shadow-color;
    }
}

.fade-enter-active {
    transition: opacity .25s;
}

.fade-enter {
    opacity: 0;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .25s;
}

.scroll-to-top {
    height: 3rem;
    width: 3rem;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.25s;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        backdrop-filter: blur(2px);
        z-index: -1;
    }
}

.custom-icon {
    height: 3rem;
    width: 3rem;
}

</style>

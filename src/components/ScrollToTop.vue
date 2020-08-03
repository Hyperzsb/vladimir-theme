<template>
    <transition name="fade" mode="out-in">
        <div v-if="isScrolled" class="scroll-to-top" @click="scrollToTop()">
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

@mixin mobile {
    @media screen and (max-width: 992px) {
        @content;
    }
}

.default-icon-color {
    color: rgba(map-get($default-theme-color, 'link-color'), .7);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10vh;
    right: 5vw;
    height: 3rem;
    width: 3rem;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0.7rem #868e96;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        box-shadow: 0 0 1.3rem #868e96;
    }

    &:active {
        box-shadow: 0 0 0.7rem #868e96;
    }

    @include mobile {
        bottom: 5vh;
        right: 10vw;
    }
}

.custom-icon {
    height: 3rem;
    width: 3rem;
}

.custom-icon::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
}

</style>

<template>
    <div class="custom-toolbar">
        <scroll-to-top v-if="this.scrollToTop" class="mb-3"/>
        <div v-if="this.toc" v-b-toggle.toc-sidebar
             class="custom-toggle" :class="toggleColorClass">
            <b-icon icon="justify" class="rounded-circle p-2 custom-icon" :class="iconColorClass"></b-icon>
        </div>
    </div>
</template>

<script>

import ScrollToTop from "@/components/SideToolbar/ScrollToTop";

export default {
    name: "index",
    props: {
        scrollToTop: Boolean,
        toc: Boolean
    },
    computed: {
        iconColorClass: function () {
            return {
                'default-icon-color': true
            }
        },
        toggleColorClass: function () {
            return {
                'default-sidebar-toggle-color': true
            }
        }
    },
    components: {
        ScrollToTop
    }
}
</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.default-icon-color {
    color: $default-base-color;
    background-color: rgba($default-link-color, .7);
}

.default-sidebar-toggle-color {
    box-shadow: 0 0 0.7rem $default-shadow-color;

    &:hover {
        box-shadow: 0 0 1.3rem $default-shadow-color;
    }

    &:active {
        box-shadow: 0 0 0.7rem $default-shadow-color;
    }
}

.custom-toolbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10vh;
    right: 5vw;
    z-index: 1;

    @include mobile {
        bottom: 5vh;
        right: 10vw;
    }
}

.custom-toggle {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    text-align: center;
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

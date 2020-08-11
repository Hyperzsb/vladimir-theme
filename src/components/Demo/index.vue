<template>
    <b-container tag="section" fluid>
        <b-row class="pt-0 pt-md-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <markdown-renderer :src="require('@/assets/markdown/demo.md')"
                                   :toc="config.components.demo.toc"/>
            </b-col>
        </b-row>
        <div class="fixed-toolbar">
            <scroll-to-top v-if="config.components.demo.scrollToTop" class="mb-3"/>
            <div v-if="config.components.demo.toc"
                 class="sidebar-toggle" :class="sidebarToggleColorClass" v-b-toggle.toc-sidebar>
                <b-icon icon="justify" class="rounded-circle p-2 custom-icon" :class="iconColorClass"></b-icon>
            </div>
        </div>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

import ScrollToTop from "@/components/ScrollToTop";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default {
    name: "index",
    computed: {
        iconColorClass: function () {
            return {
                'default-icon-color': true
            }
        },
        sidebarToggleColorClass: function () {
            return {
                'default-sidebar-toggle-color': true
            }
        },
        ...mapState([
            'config'
        ])
    },
    methods: {
        ...mapMutations([
            'changeNavItem'
        ])
    },
    created() {
        //Change nav item activity
        this.changeNavItem(1);
    },
    components: {
        ScrollToTop,
        MarkdownRenderer
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

.sidebar-toggle {
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

<template>
    <b-container tag="section" fluid>
        <b-row class="pt-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <b-row>
                    <b-col cols="12" md="4" class="pt-3 pt-md-5">
                        <b class="d-block mb-3">Team Members</b>
                        <b-list-group>
                            <b-list-group-item v-for="(member, index) in config.components.about.members" :key="index">
                                <b-avatar button v-b-toggle="'member-'+index+'-description'" :src="member.headPortrait"
                                          class="mr-3"></b-avatar>
                                <span>{{ member.name }}</span>
                                <b-collapse :id="'member-'+index+'-description'" accordion="member-accordion"
                                            role="tabpanel">
                                    <b class="d-block mt-3">{{ member.description }}</b>
                                </b-collapse>
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col cols="12" md="8" class="pt-1 pl-md-5">
                        <markdown-renderer :src="require('@/assets/markdown/team.md')" :toc="true"/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <div class="fixed-toolbar" id="side-toolbar">
            <scroll-to-top v-if="config.components.about.scrollToTop" class="mb-3"/>
            <div class="sidebar-toggle" :class="sidebarToggleColorClass" v-b-toggle.toc-sidebar>
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
    data() {
        return {
            sidebar: false
        }
    },
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
        this.changeNavItem(3);
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

<template>
    <b-container tag="section" fluid class="custom-container" :class="containerColorClass">
        <b-row class="pt-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <b-row>
                    <b-col cols="12" md="4" class="pt-3 pt-md-5">
                        <b class="d-block mb-3" :class="mainTextColorClass">
                            {{ $t('messages.components.about.teamMembers') }}
                        </b>
                        <b-list-group>
                            <b-list-group-item v-for="(member, index) in config.components.about.members" :key="index"
                                               :class="listColorClass">
                                <b-avatar button v-b-toggle="'member-'+index+'-description'" :src="member.headPortrait"
                                          class="mr-3"></b-avatar>
                                <span :class="mainTextColorClass">
                                    {{ $t(`messages.components.about.members[${index}].name`) }}
                                </span>
                                <b-collapse :id="`member-${index}-description`" accordion="member-accordion"
                                            role="tabpanel">
                                    <b class="d-block mt-3" :class="subTextColorClass">
                                        {{ $t(`messages.components.about.members[${index}].description`) }}
                                    </b>
                                </b-collapse>
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col cols="12" md="8" class="pt-1 pl-md-5">
                        <markdown-renderer :src="require(`@/assets/markdown/team-${this.$i18n.locale}.md`)"
                                           :toc="true"/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <side-toolbar :scroll-to-top="config.components.about.scrollToTop"/>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import SideToolbar from '@/components/SideToolbar'
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default {
    name: "index",
    data() {
        return {
            sidebar: false
        }
    },
    computed: {
        containerColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-container-color': true
                };
            else
                return {
                    'dark-container-color': true
                };
        },
        mainTextColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-text-color-main': true
                };
            else
                return {
                    'dark-text-color-main': true
                }
        },
        subTextColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-text-color-sub': true
                };
            else
                return {
                    'dark-text-color-sub': true
                };
        },
        listColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-list-color': true
                };
            else
                return {
                    'dark-list-color': true
                }
        },
        ...mapState([
            'config',
            'theme'
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
        SideToolbar,
        MarkdownRenderer
    }
}

</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.default-container-color {
    background-color: #ffffff;
}

.dark-container-color {
    background-color: $dark-base-color;
}

.default-text-color-main {
    color: $default-text-color;
}

.dark-text-color-main {
    color: $dark-text-color;
}

.default-text-color-sub {
    color: $default-text-color-light;
}

.dark-text-color-sub {
    color: $dark-text-color-light;
}

.default-list-color {
    background-color: $default-base-color-dark;
}

.dark-list-color {
    background-color: $dark-base-color-dark;
}

.custom-container {
    transition: 0.25s;
}

</style>

<template>
    <b-container tag="section" fluid class="custom-container" :class="containerColorClass">
        <b-row class="pt-0 pt-md-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <markdown-renderer :src="require(`@/assets/markdown/documentation-${this.$i18n.locale}.md`)"
                                   :toc="config.components.documentation.toc"/>
            </b-col>
        </b-row>
        <side-toolbar :scroll-to-top="config.components.documentation.scrollToTop"
                      :toc="config.components.documentation.toc"/>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

import SideToolbar from '@/components/SideToolbar'
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default {
    name: "index",
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
        //Change nav item activity
        this.changeNavItem(2);
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

.custom-container {
    transition: 0.25s;
}

</style>

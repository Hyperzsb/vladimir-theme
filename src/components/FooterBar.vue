<template>
    <b-container tag="footer" fluid class="text-center custom-footer" :class="footerColorClass">
        <b-row class="pt-5 pb-1">
            <b-col cols="12" class="p-3">
                <b-row v-if="!ini.footer.projectLogo" class="mt-3 mb-5">
                    <b-col offset="2" cols="4" offset-md="3" md="3" class="pb-1 pt-1">
                        <div class="pb-1 font-weight-bolder font-size-101"
                             :class="mainTextColorClass">
                            {{ ini.footer.linkListLeft.title }}
                        </div>
                        <div v-for="(link, index) in ini.footer.linkListLeft.links" :key="index"
                             class="pt-1">
                            <b-link :href="link.href" class="custom-link" :class="linkColorClass">
                                {{ link.name }}
                            </b-link>
                        </div>
                    </b-col>
                    <b-col cols="4" md="3" class="pb-1 pt-1">
                        <div class="pb-1 font-weight-bolder font-size-101"
                             :class="mainTextColorClass">
                            {{ ini.footer.linkListRight.title }}
                        </div>
                        <div v-for="(link, index) in ini.footer.linkListRight.links" :key="index"
                             class="pt-1">
                            <b-link :href="link.href" class="custom-link" :class="linkColorClass">
                                {{ link.name }}
                            </b-link>
                        </div>
                    </b-col>
                </b-row>
                <b-row v-if="ini.footer.projectLogo" align-v="center" class="mt-3 mb-5">
                    <b-col cols="12" order-md="1" md="5" offset-md="2" order="2">
                        <b-row class="pt-3 pb-3 pl-4 pl-md-0 pr-4 pr-md-0">
                            <b-col cols="6">
                                <div class="pb-1 font-weight-bolder font-size-101"
                                     :class="mainTextColorClass">
                                    {{ ini.footer.linkListLeft.title }}
                                </div>
                                <div v-for="(link, index) in ini.footer.linkListLeft.links" :key="index"
                                     class="pt-1">
                                    <b-link :href="link.href" class="custom-link" :class="linkColorClass">
                                        {{ link.name }}
                                    </b-link>
                                </div>
                            </b-col>
                            <b-col cols="6">
                                <div class="pb-1 font-weight-bolder font-size-101"
                                     :class="mainTextColorClass">
                                    {{ ini.footer.linkListRight.title }}
                                </div>
                                <div v-for="(link, index) in ini.footer.linkListRight.links" :key="index"
                                     class="pt-1">
                                    <b-link :href="link.href" class="custom-link" :class="linkColorClass">
                                        {{ link.name }}
                                    </b-link>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" order="1" md="3" order-md="2" class="mb-5 mb-md-0">
                        <b-img center :src="ini.project.logo" :alt="ini.project.name" style="height: 10rem"></b-img>
                    </b-col>
                </b-row>
                <b-row class="pt-3">
                    <b-col cols="10" offset="1" :md="footnoteCols" :offset-md="footnoteOffset"
                           class="border-top-1 p-3">
                        <div class="pt-3 font-size-09" :class="subTextColorClass">
                            Page designed and built with&nbsp;
                            <b-link href="https://cn.vuejs.org/" class="custom-link" :class="linkColorClass">
                                Vue.js
                            </b-link>
                            <br/>
                            Currently <b>{{ ini.project.version }}</b> Code licensed&nbsp;
                            <b-link href="https://www.mit-license.org/" class="custom-link" :class="linkColorClass">
                                MIT
                            </b-link>
                            <div v-if="ini.footer.recordText" class="pt-3">
                                <b-link href="https://blog.hyperzsb.tech/www.beian.miit.gov.cn"
                                        class="custom-link" :class="linkColorClass">
                                    {{ ini.footer.recordText }}
                                </b-link>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: "FooterBar",
    computed: {
        footerColorClass: function () {
            return {
                'default-bg-color': true,
            }
        },
        linkColorClass: function () {
            return {
                'default-link-color': true
            }
        },
        mainTextColorClass: function () {
            return {
                'default-text-color-main': true
            }
        },
        subTextColorClass: function () {
            return {
                'default-text-color-sub': true
            }
        },
        footnoteCols: function () {
            if (this.ini.footer.projectLogo)
                return 8;
            else
                return 6;
        },
        footnoteOffset: function () {
            if (this.ini.footer.projectLogo)
                return 2;
            else
                return 3;
        },
        ...mapState([
            'ini'
        ])
    }
}

</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.default-bg-color {
    background: map-get($default-theme-color, 'base-color');
}

.default-link-color {
    color: map-get($default-theme-color, 'link-color');
}

.default-link-color:hover {
    color: map-get($default-theme-color, 'link-color-light');
}

.default-text-color-main {
    color: map-get($default-theme-color, 'text-color');
}

.default-text-color-sub {
    color: map-get($default-theme-color, 'text-color-light');
}

.font-size-101 {
    font-size: 1.1rem;
}

.font-size-09 {
    font-size: 0.9em;
}

.border-top-1 {
    border-top: map-get($default-theme-color, 'base-color-dark') 1px solid
}

.custom-footer {
    margin-top: 35px;
    box-shadow: 0 -15px 20px #dee2e6;
}

.custom-link {
    @extend .font-size-09;

    font-weight: bold;
    transition: 0.25s;
}

</style>

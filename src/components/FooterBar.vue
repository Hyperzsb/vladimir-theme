<template>
    <b-container tag="footer" fluid class="text-center bg-gray-200 border-top-3">
        <b-row class="pt-5 pb-3">
            <b-col cols="12" class="p-3">
                <b-row class="mt-3 mb-3">
                    <b-col offset="2" cols="4" offset-md="3" md="3" class="pb-1 pt-1">
                        <div class="pb-1 text-info font-weight-bolder font-size-101">
                            {{ ini.footer.linkListLeft.title }}
                        </div>
                        <div v-for="(link, index) in ini.footer.linkListLeft.links" :key="index"
                             class="pt-1">
                            <b-link :href="link.href" class="custom-link">
                                {{ link.name }}
                            </b-link>
                        </div>
                    </b-col>
                    <b-col cols="4" md="3" class="pb-1 pt-1">
                        <div class="pb-1 text-info font-weight-bolder font-size-101">
                            {{ ini.footer.linkListRight.title }}
                        </div>
                        <div v-for="(link, index) in ini.footer.linkListRight.links" :key="index"
                             class="pt-1">
                            <b-link :href="link.href" class="custom-link">
                                {{ link.name }}
                            </b-link>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="pt-3">
                    <b-col cols="10" offset="1" md="6" offset-sm="3" class="border-top-1 p-3">
                        <div class="pt-3 font-size-09 text-secondary">
                            Page designed and built with&nbsp;
                            <b-link href="https://cn.vuejs.org/" class="custom-link">
                                Vue.js
                            </b-link>
                            <br/>
                            Currently <b>{{ ini.project.version }}</b> Code licensed&nbsp;
                            <b-link href="https://www.mit-license.org/" class="custom-link">
                                MIT
                            </b-link>
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
        ...mapState([
            'ini'
        ])
    }
}

</script>

<style lang="scss" scoped>

.border-top-3 {
    border-top: #dee2e6 3px solid;
}

.border-top-1 {
    border-top: #ced4da 1px solid;
}

.bg-gray-200 {
    background-color: #e9ecef;
}

.font-size-101 {
    font-size: 1.1rem;
}

.font-size-09 {
    font-size: 0.9em;
}

.custom-link {
    @extend .font-size-09;

    font-weight: bold;
    color: #343a40;
    transition: 0.25s;

    &:hover {
        color: #007bff;
    }

    &:active {
        color: #007bff;
    }
}

</style>

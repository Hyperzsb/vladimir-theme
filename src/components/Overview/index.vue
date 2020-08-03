<template>
    <b-container tag="section" fluid>
        <b-row class="pb-4 pb-md-0">
            <b-col cols="12">
                <b-row align-v="center" class="jumbotron-logo-row">
                    <b-col cols="12" md="5" offset-md="2" order="2" order-md="1">
                        <h1 class="jumbotron-name" :class="mainTextColorClass">
                            {{ ini.project.name }}
                        </h1>
                        <h5 class="jumbotron-description" :class="subTextColorClass">
                            {{ ini.project.description.main }}
                        </h5>
                        <b-badge pill class="jumbotron-version">{{ ini.project.version }}</b-badge>
                    </b-col>
                    <b-col cols="12" md="3" order="1" order-md="2" class="pt-3 pt-md-0">
                        <b-img center :src="ini.project.logo" :alt="ini.project.name"></b-img>
                    </b-col>
                </b-row>
                <b-row align-v="center" class="jumbotron-button-row">
                    <b-col cols="10" offset="1" md="2" offset-md="4">
                        <b-button pill block size="lg" variant="outline-success">
                            Get Start
                        </b-button>
                    </b-col>
                    <b-col cols="10" offset="1" md="2" offset-md="0" class="mt-4 mt-md-0">
                        <b-button pill block size="lg" variant="outline-secondary">
                            View in GitHub
                            <b-icon icon="box-arrow-up-right" class="ml-1"></b-icon>
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr class="custom-hr"/>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
    name: "index",
    computed: {
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
        ...mapState([
            'ini'
        ])
    },
    methods: {
        ...mapMutations([
            'changeNavItem'
        ])
    },
    created() {
        this.changeNavItem(0);
    }
}

</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.default-text-color-main {
    color: map-get($default-theme-color, 'text-color');
}

.default-text-color-sub {
    color: map-get($default-theme-color, 'text-color-light');
}

.custom-hr {
    display: block;
    margin: 1rem auto;
    width: 80%;

    @include mobile {
        width: 96%;
    }
}

.jumbotron-logo-row {
    height: 70vh;
    text-align: left;

    @include mobile {
        height: auto;
        text-align: center;
    }
}

.jumbotron-name {
    display: block;
    margin: 0.5rem 0 1.5rem;
    padding: 1rem 0;
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(to right, #7928CA, #FF0080);
    -webkit-background-clip: text;
    color: transparent;

    @include mobile {
        margin: 0 0;
        font-size: 2.3rem;
    }
}

.jumbotron-description {
    display: block;
    margin: 0.5rem 0;
    padding: 0;
    font-size: 1.3rem;
    line-height: 2rem;

    @include mobile {
        font-size: 0.9rem;
        line-height: 1.5rem;
        padding: 0 1rem;
    }
}

.jumbotron-version {
    font-size: 1rem;
    margin: 0.5rem 0 1.5rem;

    @include mobile {
        font-size: 0.8rem;
    }
}

.jumbotron-button-row {
    height: 20vh;

    @include mobile {
        height: auto;
    }
}

</style>

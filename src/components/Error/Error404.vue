<template>
    <b-container tag="section" fluid class="custom-container" :class="containerColorClass">
        <b-row>
            <b-col cols="10" offset="1" md="8" offset-md="2" class="error-container">
                <h1 class="error-name">404<br>Not Found</h1>
                <b class="error-description" :class="descriptionColorClass">
                    There is no such page on the site.
                </b>
                <b class="error-description" :class="descriptionColorClass">
                    Please check your input URL, or navigate to:
                </b>
                <b-nav class="error-nav" align="center">
                    <b-nav-item to="/overview"
                                :link-classes="linkColorClass">
                        Overview
                    </b-nav-item>
                    <b-nav-item v-if="config.components.demo.self" to="/demo"
                                :link-classes="linkColorClass">
                        Demo
                    </b-nav-item>
                    <b-nav-item v-if="config.components.documentation.self" to="/documentation"
                                :link-classes="linkColorClass">
                        Documentation
                    </b-nav-item>
                    <b-nav-item v-if="config.components.about.self" to="/about"
                                :link-classes="linkColorClass">
                        About
                    </b-nav-item>
                </b-nav>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
    name: "Error404",
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
        descriptionColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-description-color': true
                };
            else
                return {
                    'dark-description-color': true
                };
        },
        linkColorClass: function () {
            if (this.theme === 'default')
                return {
                    'error-nav-link': true,
                    'default-link-color': true
                };
            else
                return {
                    'error-nav-link': true,
                    'dark-link-color': true
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
        this.changeNavItem(-1);
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

.default-description-color {
    color: $default-text-color;
}

.dark-description-color {
    color: $dark-text-color;
}

.default-link-color {
    color: $default-link-color;

    &:hover {
        color: $default-link-color-light;
    }

    &:active {
        color: $default-link-color-light;
    }
}

.dark-link-color {
    color: $dark-link-color;

    &:hover {
        color: $dark-link-color-light;
    }

    &:active {
        color: $dark-link-color-light;
    }
}

.custom-container {
    transition: 0.25s;
}

.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 90vh;
    text-align: center;
    padding-top: 3rem;
}

.error-name {
    font-size: 5rem;
    font-weight: bold;
    margin: 1rem 0;
    background: linear-gradient(to right, #7928CA, #FF0080);
    -webkit-background-clip: text;
    color: transparent;

    @include mobile {
        font-size: 3rem;
    }
}

.error-description {
    margin: 0.5rem 0;
}

.error-nav {
    margin: 0.5rem 0;
}

.error-nav-link {
    text-decoration-line: underline;
    transition: 0.25s;
}

</style>

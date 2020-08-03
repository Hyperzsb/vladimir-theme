<template>
    <div>
        <h1>Overview Page</h1>
    </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
    name: "index",
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

<style scoped>

</style>

<template>
    <div>
        <h1>Demo Page</h1>
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
        this.changeNavItem(1);
    }
}

</script>

<style scoped>

</style>

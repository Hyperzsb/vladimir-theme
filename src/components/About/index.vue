<template>
    <div>
        <h1>About Page</h1>
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
        this.changeNavItem(2);
    }
}

</script>

<style scoped>

</style>

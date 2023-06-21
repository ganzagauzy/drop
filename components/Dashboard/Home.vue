<template>
    <div>
        {{ message }}
        {{ name }}
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                message:"hiii there"
            }
        },
        computed: {
            name() {
               return this.$route.name
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
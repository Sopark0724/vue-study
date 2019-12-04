<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem'
import ListMixin from '../mixins/ListMixin.js'

export default {
    mixins : [ListMixin],
    components : {
        ListItem
    }
}
</script>

<style scoped>
</style>
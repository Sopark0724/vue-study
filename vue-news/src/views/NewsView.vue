<template>
    <div>
        <list-item></list-item>
    </div>
  
</template>

<script>

import ListItem from './ListView.vue'
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
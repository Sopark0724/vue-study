<template>
    <div>
        <section>
            <user-profile v-bind:info="askDetail">
                <div slot="username">{{askDetail.user}}</div>
                <template slot="time">{{askDetail.time_ago}}</template>
            </user-profile>
        </section>
        <section>

        <h2>{{askDetail.title}}</h2>
        </section>
        <section>
            <div v-html="askDetail.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
import {mapGetters} from 'vuex'

export default {
    computed : {
        ...mapGetters({askDetail : 'fetchedItem'})
    },
    components : {
        UserProfile
    },
    created() {
        const askId = this.$route.params.id;
        this.$store.dispatch('FETCH_ASK_DETAIL', askId);
    }
}
</script>

<style scoped>


.time {
    font-size: 0.7rem;
}
</style>
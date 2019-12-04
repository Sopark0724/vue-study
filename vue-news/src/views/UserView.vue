<template>
  <div>
    <user-profile v-bind:info="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <template slot="time">{{userInfo.created}}</template>
      <div slot="karma"> {{userInfo.karma}}</div>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
import bus from '../util/bus.js'

export default {
  components : {
    UserProfile
  },
  created() {
    bus.$emit('start:sprinner');
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName)
  },
  computed : {
    userInfo() {
      return this.$store.state.user;
    }
  },
}
</script>

<style>

</style>
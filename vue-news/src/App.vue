<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import bus from './util/bus.js'
import {store} from './store/index'

export default {
  components: {
    ToolBar,
    Spinner
  },
  store : store,
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    created() {
      console.log("App.vue store :: " , this.$store);
      bus.$on('start:spinner', this.startSpinner);
      bus.$on('end:spinner', this.endSpinner);
    },
    beforDestroy() {
      bus.$off('start:spinner');
      bus.$off('end:spinner');
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

a:hover {
  color: #42b883
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

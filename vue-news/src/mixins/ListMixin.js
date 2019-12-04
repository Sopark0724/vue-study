import bus from '../util/bus.js'

export default {
    mounded() {
        bus.$emit('end:spinner');
    },

    created() {
        console.log("MixedIn Store :: ",  this.$store);
    }
}
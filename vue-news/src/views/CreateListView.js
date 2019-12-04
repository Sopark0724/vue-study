import bus from '../util/bus'
import ListView from './ListView'

export default function createListView(name) {
    return {
        name: name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name);
                bus.$emit('end:spinner');
            }, 1500)

        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}
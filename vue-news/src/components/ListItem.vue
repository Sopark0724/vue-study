<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in list">
                <div class="points">
                    {{item.points || 0}}
                </div>
                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">
                                {{item.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`ask/${item.id}`">
                            {{item.title}}
                            </router-link>
                        </template>
                        
                    </p>
                    <small class="line-text">
                        
                        {{item.time_ago}}
                        by
                        <router-link v-if="item.user" v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
                        <a :href="item.url" v-else>{{item.domain}}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'
import { mapGetters } from 'vuex';
import bus from '../util/bus.js'

export default {
    props: ['options'],
    computed : {
        list() {
            console.log(this.$store)
            console.log(this.$store.state.list);
            return this.$store.state.list;
        }
    }
}
</script>

<style scoped>
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883
}

.news-list {
    margin: 0px
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.news-title {
    margin: 0px
}

</style>

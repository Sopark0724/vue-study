import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskDetail, fetchList } from '../api/index.js'

export default {
    // FETCH_NEWS(context) {
    //     context.commit('SET_NEWS', []);
    //     fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);

    //         })
    // },
    async FETCH_NEWS(context) {
        context.commit('SET_LIST', []);
        const response = await fetchNewsList();
        context.commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_JOB_LIST(context) {
        context.commit('SET_LIST', []);
        const response = await fetchJobsList();
        context.commit('SET_LIST', response.data)
        return response;
    },
    // 필요한 인자를 바로 빼서 사용할 수 있다. ({변수명})
    async FETCH_ASKS({ commit }) {
        commit('SET_LIST', []);
        const response = await fetchAskList();
        commit('SET_LIST', response.data);
        return response;
    },
    FETCH_USER({commit}, name) {
        commit('SET_USER', []);
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data)
        }).
        catch(error => {
            console.log(error)
        })
    },
    FETCH_ASK_DETAIL({commit}, askId) {
        commit('SET_ASK_DETAIL', []);
        fetchList(askId)
        .then(({data}) => {
            commit('SET_ASK_DETAIL', data);
        }).
        catch(error => {
            console.log(error);
            
        })
    },
    FETCH_LIST({commit}, pageName) {
        commit('SET_LIST', []);
        fetchList(pageName)
        .then(response => {
            commit('SET_LIST', response.data)
            return response;
        })
        .catch((error) => { 
            console.log(error);
        })
    }
}
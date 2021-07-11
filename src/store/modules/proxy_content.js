const state = {
    isShowProxyContent: 'proxy' 
}
const mutations = {
    SHOW_CONTENT: (state, key) => {
        if (key && key === 'proxy') {
            console.log(111);
        }
    }
}
const actions = {

}

export default {
    state,
    mutations,
    actions
}
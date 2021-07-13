import config from '@/config'
const state = {
    currentComponent: '' 
}
const mutations = {
    SHOW_CONTENT: (state, key) => {
        console.log('key',key);
        if (key && key === 'proxy') {
            Object.keys(config.SYNTAXOFMAP).forEach(item => {
                if (item === key) {
                    state.currentComponent = config.SYNTAXOFMAP[item]
                    console.log(state.currentComponent);
                }
            })
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
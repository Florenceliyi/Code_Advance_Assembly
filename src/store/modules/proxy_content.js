import config from '@/config'
const state = {
    currentComponent: '' 
}
const mutations = {
    SHOW_CONTENT: (state, key) => {
        console.log('key',key);
        if (key) {
            Object.keys(config.SYNTAXOFMAP).forEach(item => {
                if (item === key) {
                    state.currentComponent = config.SYNTAXOFMAP[item]
                    console.log('state.currentComponent',state.currentComponent);
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
import { createStore } from "vuex";

export const store = createStore({
    state:{
        number: 0,
        countNum: 1
    },
    mutations: {
        increment(state){
            state.number = state.number + state.countNum
        },
        decrement(state){
            state.number <= 0 ? state.number = 0 :state.number = state.number - state.countNum
            state.number <= 0 ? state.number = 0 : state.number = state.number
        },
        reset(state){
            state.number = 0
            state.countNum = 1
        },
        setValue(state,payload){
            state.countNum =  (payload * 1)

        }
    }
    
})
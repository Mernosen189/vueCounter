
const useCount = (num,store) => {

const increment = () => {
        // number.value = number.value + 1
        store.commit('increment')
    }

    const decrement = () => {
        store.commit('decrement')
    }

    const reset = () => {
        store.commit('reset')
    }

    const setValue = (num) => {
        store.commit('setValue',num)        

    }

    return {increment,decrement,reset,setValue}
}

export default useCount
const Turtle = {
    state: () => ({
        turtle: undefined
    }),
    mutations: { 
        setTurtle (state, payload) {
            state.turtle = payload.turtle;
        },
    }
}

export default Turtle;
const Turtle = {
    state: () => ({
        turtle: undefined
    }),
    mutations: { 
        setTurtle (state, payload) {
            state.turtle = payload;
        },
    }
}

export default Turtle;
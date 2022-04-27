const System = {
    state: () => ({
        axiom: [],
        ruleKey1: [],
        rule1: [],
        ruleKey2: [],
        rule2: [],
        ruleKey3: [],
        rule3: [],
        ruleKey4: [],
        rule4: [],
        ruleKey5: [],
        rule5: [],
        length: "50",
        auto: false,
        order: "0",
        angle: "20",
        penSize: "1",
        penSizeDecrease: "0",
        backgroundColor: "#ffffff",
        newBGColor: "#ffffff",
        penColor: "#000000",
        faultyStep: "0",
        probabilityFaultyStep: "50",
        faultyTurn: "0",
        probabilityFaultyTurn: "50",
        leaf: false,
        leafSize: "0",
        leafProbability: "70",
        leafColor: "#1ec81e",
        fruit: false,
        fruitSize: "0",
        fruitProbability: "70",
        fruitColor: "#e11919",
        flower: false,
        flowerSize: "0",
        flowerProbability: "70",
        flowerColor: "#f0dc19",
    }),
    mutations: { 
        changeSystem(state, payload) {
            state[payload.name] = payload.value;
        },
        loadSystem(state, payload) {
            for (let key in payload) {
                if (state.hasOwnProperty(key)) {
                    state[key] = payload[key];
                }
            }
        }
    },
    getters: {
        faults: state => {
            return {
                step: {
                    fault: state.faultyStep,
                    probability: state.probabilityFaultyStep
                },
                turn: {
                    fault: state.faultyTurn,
                    probability: state.probabilityFaultyTurn
                }
            }
        },
        structures: state => {
            return {
                leaf: {
                    checked: state.leaf,
                    size: state.leafSize,
                    probability: state.leafProbability,
                    color: state.leafColor
                },
                fruit: {
                    checked: state.fruit,
                    size: state.fruitSize,
                    probability: state.fruitProbability,
                    color: state.fruitColor
                },
                flower: {
                    checked: state.flower,
                    size: state.flowerSize,
                    probability: state.flowerProbability,
                    color: state.flowerColor
                }
            }
        },
        rules: state => {
            let result = {}
            if (state.ruleKey1?.[0]?.name) {
                if (result[state.ruleKey1?.[0]?.name]) {
                    result[state.ruleKey1?.[0]?.name].push(state.rule1.map(item => item.name))
                } else {
                    result[state.ruleKey1?.[0]?.name] = [state.rule1.map(item => item.name)]
                }
            }
            if (state.ruleKey2?.[0]?.name) {
                if (result[state.ruleKey2?.[0]?.name]) {
                    result[state.ruleKey2?.[0]?.name].push(state.rule2.map(item => item.name))
                } else {
                    result[state.ruleKey2?.[0]?.name] = [state.rule2.map(item => item.name)]
                }
            }
            if (state.ruleKey3?.[0]?.name) {
                if (result[state.ruleKey3?.[0]?.name]) {
                    result[state.ruleKey3?.[0]?.name].push(state.rule3.map(item => item.name))
                } else {
                    result[state.ruleKey3?.[0]?.name] = [state.rule3.map(item => item.name)]
                }
            }
            if (state.ruleKey4?.[0]?.name) {
                if (result[state.ruleKey4?.[0]?.name]) {
                    result[state.ruleKey4?.[0]?.name].push(state.rule4.map(item => item.name))
                } else {
                    result[state.ruleKey4?.[0]?.name] = [state.rule4.map(item => item.name)]
                }
            }
            if (state.ruleKey5?.[0]?.name) {
                if (result[state.ruleKey5?.[0]?.name]) {
                    result[state.ruleKey5?.[0]?.name].push(state.rule5.map(item => item.name))
                } else {
                    result[state.ruleKey5?.[0]?.name] = [state.rule5.map(item => item.name)]
                }
            }
            return result;
        },
        axiom: state => {
            return state.axiom.map(item => item.name)
        }
    }
}

export default System;
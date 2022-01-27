export default class LSystem {
  constructor() {}

  computeSystem(axiom, rules, iterations) {
    let result = axiom;
    for (let i = 0; i < iterations; i++) {
      result = this.rewrite(result, rules);
    }
    return result;
  }

  rewrite(word, rules) {
    let result = "";
    for (let char of word) {
      result += rules[char] ? rules[char][Math.floor(Math.random() * rules[char].length)] : char;
    }
    return result;
  }

}
<template>
  <div class="menu bg-light shadow">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="info bi bi-info-circle text-primary" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
    <label class="form-label-sm small">Alphabet</label>
    <div @drop="setCurrentlyOver('options')">
      <draggable v-model="options" :sort="false" :group="{ name: 'rules', pull: 'clone', put: false }" @start="onStart">
        <span v-for="element in options" :key="element.id" class="border rounded m-1"><div class="item text-center">{{element.name}}</div></span>
      </draggable>
    </div>
    <label for="axiom" class="form-label-sm small">Axiom</label>
    <div class="axiomContainer" @drop="setCurrentlyOver('axiom')" id="axiom">
      <draggable v-model="axiom" :group="{ name: 'rules', pull: true, put: onPutAxiom }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
        <span v-for="(element, index) in axiom" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
      </draggable>
    </div>
    <label for="rule" class="form-label-sm small">Rules</label>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey1"> 
        <draggable v-model="ruleKey1" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey1" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule1"> 
        <draggable v-model="rule1" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule1" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey2"> 
        <draggable v-model="ruleKey2" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey2" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule2"> 
        <draggable v-model="rule2" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule2" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey3"> 
        <draggable v-model="ruleKey3" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey3" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule3"> 
        <draggable v-model="rule3" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule3" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey4"> 
        <draggable v-model="ruleKey4" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey4" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule4"> 
        <draggable v-model="rule4" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule4" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey5"> 
        <draggable v-model="ruleKey5" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey5" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule5"> 
        <draggable v-model="rule5" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule5" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="row justify-content-evenly pt-3 pb-3">
      <button v-on:click="draw()" class="btn btn-outline-primary btn-sm col-3">Draw</button>
      <button v-on:click="reset()" class="btn btn-outline-secondary btn-sm col-3">Reset</button>
      <button v-on:click="clear()" class="btn btn-outline-danger btn-sm col-3">Clear</button>
    </div> 
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <a class="nav-link small" v-bind:class="{ 'active': activeTab === 'general' }" href="#basic" v-on:click="changeActiveTab('general')">General</a>
      </li>
      <li class="nav-item">
        <a class="nav-link small" v-bind:class="{ 'active': activeTab === 'structures' }" href="#structures" v-on:click="changeActiveTab('structures')">Structures</a>
      </li>
    </ul>
    <div v-if="activeTab === 'general'">
      <label for="order" class="form-label-sm small center">Order: <span class="smal text-primary">{{order}}</span></label>
      <div class="slider"> 
        <div class="min small">0</div>
        <input type="range" class="form-range" min="0" max="20" step="1" id="order" v-model="order">
        <div class="max small">&nbsp;20</div>
      </div>
      <label for="length" class="form-label-sm small center">Length: <span class="smal text-primary">{{length}}</span></label>
      <div class="slider"> 
        <div class="min small">0</div>
        <input type="range" class="form-range" min="0" max="300" step="1" id="length" v-model="length">
        <div class="max small">300</div>
      </div>
      <div class="left-half">
        <label for="faultyStep" class="form-label-sm small">Faulty step: <span class="smal text-primary">{{faultyStep}}%</span></label>
        <div class="slider"> 
          <div class="min small">0</div>
          <input type="range" class="form-range" min="0" max="50" step="1" id="faultyStep" v-model="faultyStep">
          <div class="max small">50</div>
        </div>
      </div>
      <div class="right-half">
        <label for="probabilityFaultyStep" class="form-label-sm small">Probability: <span class="smal text-primary">{{probabilityFaultyStep}}%</span></label>
        <div class="slider"> 
          <div class="min small">1</div>
          <input type="range" class="form-range" min="1" max="100" step="1" id="probabilityFaultyStep" v-model="probabilityFaultyStep">
          <div class="max small">100</div>
        </div>
      </div>
      <label for="angle" class="form-label-sm small center">Angle: <span class="smal text-primary">{{angle}}</span></label>
      <div class="slider"> 
        <div class="min small">0</div>
        <input type="range" class="form-range" min="0" max="180" step="1" id="angle" v-model="angle">
        <div class="max small">180</div>
      </div>
      <div class="left-half">
        <label for="faultyTurn" class="form-label-sm small">Faulty turn: <span class="smal text-primary">{{faultyTurn}}</span></label>
        <div class="slider"> 
          <div class="min small">0</div>
          <input type="range" class="form-range" min="0" max="50" step="1" id="faultyTurn" v-model="faultyTurn">
          <div class="max small">50</div>
        </div>
      </div>
      <div class="right-half">
        <label for="probabilityFaultyTurn" class="form-label-sm small">Probability: <span class="smal text-primary">{{probabilityFaultyTurn}}%</span></label>
        <div class="slider"> 
          <div class="min small">1</div>
          <input type="range" class="form-range" min="1" max="100" step="1" id="probabilityFaultyTurn" v-model="probabilityFaultyTurn">
          <div class="max small">100</div>
        </div>
      </div>
      <div class="left-half">
        <label for="penSize" class="form-label-sm small">Pen size: <span class="smal text-primary">{{penSize}}</span></label>
        <div class="slider"> 
          <div class="min small">1</div>
          <input type="range" class="form-range" min="1" max="15" step="1" id="penSize" v-model="penSize">
          <div class="max small">15</div>
        </div>
      </div>
      <div class="right-half">
        <label for="penSizeDecrease" class="form-label-sm small">Pen size decrease: <span class="smal text-primary">{{penSizeDecrease}}</span></label>
        <div class="slider"> 
          <div class="min small">0</div>
          <input type="range" class="form-range" min="0" max="5" step="1" id="penSizeDecrease" v-model="penSizeDecrease">
          <div class="max small">5</div>
        </div>
      </div>
      <div class="left-half pt-2">
        <label for="penColor" class="form-label-sm small">Pen color: </label>
        <input type="color" id="penColor" class="color" v-model="penColor">
      </div>
      <div class="right-half pt-2">
        <label for="backgroundColor" class="form-label-sm small">Background color: </label>
        <input type="color" id="backgroundColor" class="color" v-model="newBGColor" @blur="changeBackgroundColor">
      </div>
    </div>
    <div v-if="activeTab === 'structures'" class="structures">
      <div class="structure">
        <div class="form-check d-inline-block">
          <input class="form-check-input" type="checkbox" id="leaf" v-model="leaf">
          <label class="form-check-label" for="leaf">
            Leaf
          </label>
          <input type="color" id="leafColor" class="color" v-model="leafColor">
        </div>
        <div>
          <div class="left-half">
            <label for="leafSize" class="form-label-sm small">Leaf Size: <span class="smal text-primary">{{getSize(leafSize)}}</span></label>
            <div class="slider"> 
              <div class="min small">auto</div>
              <input type="range" class="form-range w-65" min="0" max="3" step="1" id="leafSize" v-model="leafSize">
              <div class="max small">big</div>
            </div>
          </div>
          <div class="right-half">
            <label for="leafProbability" class="form-label-sm small">Probability: <span class="smal text-primary">{{leafProbability}}%</span></label>
            <div class="slider"> 
              <div class="min small">1</div>
              <input type="range" class="form-range" min="1" max="100" step="1" id="leafProbability" v-model="leafProbability">
              <div class="max small">100</div>
            </div>
          </div>        
        </div>
      </div>
      <div class="structure">
        <div class="form-check d-inline-block">
          <input class="form-check-input" type="checkbox" id="fruit" v-model="fruit">
          <label class="form-check-label" for="fruit">
            Fruit
          </label>
          <input type="color" id="fruitColor" class="color" v-model="fruitColor">
        </div>
        <div>
          <div class="left-half">
            <label for="fruitSize" class="form-label-sm small">Fruit Size: <span class="smal text-primary">{{getSize(fruitSize)}}</span></label>
            <div class="slider"> 
              <div class="min small">auto</div>
              <input type="range" class="form-range w-65" min="0" max="3" step="1" id="fruitSize" v-model="fruitSize">
              <div class="max small">big</div>
            </div>
          </div>
          <div class="right-half">
            <label for="fruitProbability" class="form-label-sm small">Probability: <span class="smal text-primary">{{fruitProbability}}%</span></label>
            <div class="slider"> 
              <div class="min small">1</div>
              <input type="range" class="form-range" min="1" max="100" step="1" id="fruitProbability" v-model="fruitProbability">
              <div class="max small">100</div>
            </div>
          </div>        
        </div>
      </div>
      <div class="structure">
        <div class="form-check d-inline-block">
          <input class="form-check-input" type="checkbox" id="flower" v-model="flower">
          <label class="form-check-label" for="flower">
            Flower
          </label>
          <input type="color" id="flowerColor" class="color" v-model="flowerColor">
        </div>
        <div>
          <div class="left-half">
            <label for="flowerSize" class="form-label-sm small">Flower Size: <span class="smal text-primary">{{getSize(flowerSize)}}</span></label>
            <div class="slider"> 
              <div class="min small">auto</div>
              <input type="range" class="form-range w-65" min="0" max="3" step="1" id="flowerSize" v-model="flowerSize">
              <div class="max small">big</div>
            </div>
          </div>
          <div class="right-half">
            <label for="flowerProbability" class="form-label-sm small">Probability: <span class="smal text-primary">{{flowerProbability}}%</span></label>
            <div class="slider"> 
              <div class="min small">1</div>
              <input type="range" class="form-range" min="1" max="100" step="1" id="flowerProbability" v-model="flowerProbability">
              <div class="max small">100</div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LSystem from '../scripts/L-system';
import draggable from 'vuedraggable'

export default {
  name: 'Menu',
  components: {
    draggable
  },
  created() {
    this.$root.$on('getSystem', this.saveSystem)
    this.$root.$on('loadSystem', this.loadSystem)
  },
  data() {
    return {
      options: [{name: 'F', id: 'F'}, {name: 'f', id: 'f'}, {name: '+', id: 'l'}, {name: '-', id: 'r'}, {name: '[ ]', id: 'b'}, {name: 'P', id: 'P'}, {name: 'Q', id: 'Q'}, {name: 'R', id: 'R'}, {name: 'S', id: 'S'}, {name: 'T', id: 'T'}],
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
      angle: "20",
      length: "50",
      order: "0",
      penSize: "1",
      penSizeDecrease: "0",
      LSystem: new LSystem(),
      drop: "",
      drag: "",
      backgroundColor: "#ffffff",
      newBGColor: "#ffffff",
      penColor: "#000000",
      faultyTurn: "0",
      probabilityFaultyTurn: "50",
      faultyStep: "0",
      probabilityFaultyStep: "50",
      activeTab: "general",
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
      flowerColor: "#f0dc19"
    }
  },
  methods: {
    fd() {
      this.turtle.fd(this.distance);
    },
    lt() {
      this.turtle.lt(this.angle);
    },
    rt() {
      this.turtle.rt(this.angle);
    },
    reset() {
      this.turtle.reset();
    },
    clear() {
      this.canvas.clear();
      this.canvas.color(this.backgroundColor)
    },
    draw() {
      let result = this.LSystem.computeSystem(this.getAxiom(), this.getRules(), this.order);
      this.turtle.draw(
        result, 
        this.length, 
        this.angle, 
        this.penColor, 
        this.penSize, 
        this.penSizeDecrease,
        this.getFaults(),
        this.getStructures()
      );
    },
    getRules() {
      let result = {}
      if (this.ruleKey1?.[0]?.name) {
        if (result[this.ruleKey1?.[0]?.name]) {
          result[this.ruleKey1?.[0]?.name].push(this.rule1.map(item => item.name))
        } else {
          result[this.ruleKey1?.[0]?.name] = [this.rule1.map(item => item.name)]
        }
      }
      if (this.ruleKey2?.[0]?.name) {
        if (result[this.ruleKey2?.[0]?.name]) {
          result[this.ruleKey2?.[0]?.name].push(this.rule2.map(item => item.name))
        } else {
          result[this.ruleKey2?.[0]?.name] = [this.rule2.map(item => item.name)]
        }
      }
      if (this.ruleKey3?.[0]?.name) {
        if (result[this.ruleKey3?.[0]?.name]) {
          result[this.ruleKey3?.[0]?.name].push(this.rule3.map(item => item.name))
        } else {
          result[this.ruleKey3?.[0]?.name] = [this.rule3.map(item => item.name)]
        }
      }
      if (this.ruleKey4?.[0]?.name) {
        if (result[this.ruleKey4?.[0]?.name]) {
          result[this.ruleKey4?.[0]?.name].push(this.rule4.map(item => item.name))
        } else {
          result[this.ruleKey4?.[0]?.name] = [this.rule4.map(item => item.name)]
        }
      }
      if (this.ruleKey5?.[0]?.name) {
        if (result[this.ruleKey5?.[0]?.name]) {
          result[this.ruleKey5?.[0]?.name].push(this.rule5.map(item => item.name))
        } else {
          result[this.ruleKey5?.[0]?.name] = [this.rule5.map(item => item.name)]
        }
      }
      return result;
    },
    getAxiom() {
      return this.axiom.map(item => item.name)
    },
    getFaults() {
      return {
        step: {
          fault: this.faultyStep,
          probability: this.probabilityFaultyStep
        },
        turn: {
          fault: this.faultyTurn,
          probability: this.probabilityFaultyTurn
        }
      }
    },
    getStructures() {
      return {
        leaf: {
          checked: this.leaf,
          size: this.leafSize,
          probability: this.leafProbability,
          color: this.leafColor
        },
        fruit: {
          checked: this.fruit,
          size: this.fruitSize,
          probability: this.fruitProbability,
          color: this.fruitColor
        },
        flower: {
          checked: this.flower,
          size: this.flowerSize,
          probability: this.flowerProbability,
          color: this.flowerColor
        }
      }
    },
    getSize(size) {
      switch(size) {
        case "0": return "auto"
        case "1": return "small"
        case "2": return "medium"
        case "3": return "big"
      }
    },
    onEnd(event) {
      //delete both brackets
      if (this.drop === 'options') {
        this[event.to.parentElement.id].splice(event.newDraggableIndex, 1)
        let bracketIndex = null
        if (this.drag === "[") {
          let lb = 0
          for (let i = event.oldDraggableIndex; i < this[event.from.parentElement.id].length; i++) {
            if (this[event.from.parentElement.id][i].id === "lb") {
              lb++
            } else if (this[event.from.parentElement.id][i].id === "rb") {
              if (lb === 0) { 
                bracketIndex = i
                break;
              } else {
                lb--
              }
            }
          }
        } else if (this.drag === "]") {
          let rb = 0
          for (let i = event.oldDraggableIndex - 1; i > -1; i--) {
            if (this[event.from.parentElement.id][i].id === "rb") {
              rb++
            } else if (this[event.from.parentElement.id][i].id === "lb") {
              if (rb === 0) {
                bracketIndex = i
                break;
              } else {
                rb--
              }
            }
          }
        } 
        if (bracketIndex !== null) {
          this[event.from.parentElement.id].splice(bracketIndex, 1)
        }
      }
      this.drop = ""
    },
    setCurrentlyOver(currentlyOver) {
      this.drop = currentlyOver
    },
    onStart(event) {
      this.drag = event.item.innerText
    },
    onAdd(event) {
      //add left and right bracket
      if (this.drag === "[ ]") {
        this[event.to.parentElement.id].splice(event.newIndex, 1)
        this[event.to.parentElement.id].splice(event.newIndex, 0, {name: "[", id: "lb"})
        this[event.to.parentElement.id].splice(event.newIndex + 1, 0, {name: "]", id: "rb"})
      }
    },
    onPutRuleKey(to) {
      //allow add only 1 option
      if (to.el.children.length < 1) {
        //allow add only valid option
        if (this.drag === "F" || this.drag === "f" || this.drag === "P" || this.drag === "Q" || this.drag === "R" || this.drag === "S" || this.drag === "T") {
          return true
        }
      }
      return false;
    },
    onPutRule(to) {
      if (to.el.children.length >= 20) {
        return false
      }
      if (to.el.children.length >= 19 && this.drag === "[ ]") {
        return false
      }
      if (this.drag === "[" || this.drag === "]") {
        return false
      }
      return true
    },
    onPutAxiom(to) {
      if (to.el.children.length >= 22) {
        return false
      }
      if (to.el.children.length >= 21 && this.drag === "[ ]") {
        return false
      }
      if (this.drag === "[" || this.drag === "]") {
        return false
      }
      return true
    },
    onUpdate(event) {
      //prevent swaping brackets
      if ((this.drag === "[" || this.drag === "]") && this.drop !== "options") {
        let lb = 0
        let rb = 0
        for (let i = 0; i < this[event.to.parentElement.id].length; i++) {
          if (this[event.to.parentElement.id][i].id === "lb") {
            lb++
          } else if (this[event.to.parentElement.id][i].id === "rb") {
            rb++
          }
          if (rb > lb) {
            this[event.to.parentElement.id].splice(event.newIndex, 1)
            if (event.clone.innerText === "[") {
              this[event.to.parentElement.id].splice(event.oldIndex, 0, {name: "[", id: "lb"})
            } else {
              this[event.to.parentElement.id].splice(event.oldIndex, 0, {name: "]", id: "rb"})
            }
            break
          }
        }
      } 
    },
    changeBackgroundColor() {
      if (this.newBGColor !== this.backgroundColor) {
        this.canvas.color(this.newBGColor)
        this.backgroundColor = this.newBGColor
      }
    },
    changeActiveTab(value) {
      this.activeTab = value
    },
    saveSystem() {
      let system = {
        axiom: this.axiom,
        ruleKey1: this.ruleKey1,
        rule1: this.rule1,
        ruleKey2: this.ruleKey2,
        rule2: this.rule2,
        ruleKey3: this.ruleKey3,
        rule3: this.rule3,
        ruleKey4: this.ruleKey4,
        rule4: this.rule4,
        ruleKey5: this.ruleKey5,
        rule5: this.rule5,
        length: this.length,
        angle: this.angle,
        order: this.order,
        penSize: this.penSize,
        penSizeDecrease: this.penSizeDecrease,
        penColor: this.penColor,
        faultyTurn: this.faultyTurn,
        probabilityFaultyTurn: this.probabilityFaultyTurn,
        faultyStep: this.faultyStep,
        probabilityFaultyStep: this.probabilityFaultyStep,
        leaf: this.leaf,
        leafSize: this.leafSize,
        leafProbability: this.leafProbability,
        leafColor: this.leafColor,
        fruit: this.fruit,
        fruitSize: this.fruitSize,
        fruitProbability: this.fruitProbability,
        fruitColor: this.fruitColor,
        flower: this.flower,
        flowerSize: this.flowerSize,
        flowerProbability: this.flowerProbability,
        flowerColor: this.flowerColor
      }
      this.$root.$emit('saveSystem', system)
    },
    loadSystem(system) {
      for (let key in system) {
        if (this.$data.hasOwnProperty(key) && key !== "backgroundColor" && key !== "newBGColor") {
          this[key] = system[key]
        }
      }
    }
  },
  computed: {
    turtle() {
      return this.$store.state.turtle;
    },
    canvas() {
      return this.$store.state.canvas;
    }
  }
}
</script>

<style scoped>
.axiomContainer {
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
  min-height: calc(1.5em + 0.5rem + 2px);
  font-size: .875rem;
  background-color: #fff;
  padding: 0.25rem 0.5rem;
}

.ruleContainer {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
  font-size: .875rem;
  min-height: calc(1.5em + 0.5rem + 2px);
  background-color: #fff;
}

.ruleKey {
  float: left;
  display: inline-block;
  min-height: calc(1.5em + 0.5rem);
  width: 2.5em;
  border-right: 1px solid #ced4da;
  padding: 0.25rem 0.5rem;
}

.rule {
  float: right;
  min-height: calc(1.5em + 0.5rem);
  padding: 0.25rem 0.5rem;
  width: calc(100% - 2.5em);
}

.item {
  display: inline-block;
  width: 1em;
}

.item:hover {
  cursor: grab;
}

.menu {
  z-index: 0;
  position: relative;
  float: left;
  width: 404px;
  height: calc(100% - 50px - 1px);
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}

label.center {
  text-align: center;
  width: 100%;
}

.slider {
  text-align: center;
}

.slider .min {
  float: left;
}

.slider .max {
  float: right;
}

.slider input {
  width: 80%;
}

.info {
  float: right;
}

.info:hover {
  cursor: help;
}

.left-half {
  float: left;
  width: 45%;
  text-align: center;
}

.right-half {
  float: right;
  width: 50%;
  text-align: center;
}

.w-65 {
  width: 65% !important;
}

.color {
  display: inline-block;
  margin: 0 5px 0 5px;
  width: 30px;
  height: 20px;
}

.color:hover {
  cursor: pointer;
}

.structures {
  text-align: center;
}

.structure {
  height: 110px;;
}

.nav-tabs .nav-link.active {
  background-color: #f8f9fa;
  border-color: #dee2e6 #dee2e6 #f8f9fa;
}

</style>
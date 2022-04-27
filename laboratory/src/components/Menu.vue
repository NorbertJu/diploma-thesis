<template>
  <div class="menu bg-light shadow">
    <Manual/>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x text-secondary" viewBox="0 0 16 16"
        @mouseover="hoverX = 'axiom'" @mouseout="hoverX = ''" :class="{'text-danger': hoverX === 'axiom', 'd-none': !axiom.length}" @click="deleteSymbols('axiom')">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
    <label for="rule" class="form-label-sm small">Rules</label>
    <div class="ruleContainer mb-1">
      <div class="ruleKey" id="ruleKey1"> 
        <draggable v-model="ruleKey1" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey1" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule1"> 
        <draggable v-model="rule1" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule1" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x text-secondary" viewBox="0 0 16 16"
          @mouseover="hoverX = 'rule1'" @mouseout="hoverX = ''" :class="{'text-danger': hoverX === 'rule1', 'd-none': !rule1.length && !ruleKey1.length}" @click="deleteSymbols('rule1')">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
    </div>
    <div class="ruleContainer mb-1">
      <div class="ruleKey" id="ruleKey2"> 
        <draggable v-model="ruleKey2" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey2" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule2"> 
        <draggable v-model="rule2" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule2" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x text-secondary" viewBox="0 0 16 16"
          @mouseover="hoverX = 'rule2'" @mouseout="hoverX = ''" :class="{'text-danger': hoverX === 'rule2', 'd-none': !rule2.length && !ruleKey2.length}" @click="deleteSymbols('rule2')">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
    </div>
    <div class="ruleContainer mb-1">
      <div class="ruleKey" id="ruleKey3"> 
        <draggable v-model="ruleKey3" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey3" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule3"> 
        <draggable v-model="rule3" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule3" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x text-secondary" viewBox="0 0 16 16"
          @mouseover="hoverX = 'rule3'" @mouseout="hoverX = ''" :class="{'text-danger': hoverX === 'rule3', 'd-none': !rule3.length && !ruleKey3.length}" @click="deleteSymbols('rule3')">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
    </div>
    <div class="ruleContainer mb-1">
      <div class="ruleKey" id="ruleKey4"> 
        <draggable v-model="ruleKey4" :group="{ name: 'rules', pull: true, put: onPutRuleKey }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey4" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule4"> 
        <draggable v-model="rule4" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule4" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x text-secondary" viewBox="0 0 16 16"
          @mouseover="hoverX = 'rule4'" @mouseout="hoverX = ''" :class="{'text-danger': hoverX === 'rule4', 'd-none': !rule4.length && !ruleKey4.length}" @click="deleteSymbols('rule4')">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x text-secondary" viewBox="0 0 16 16"
          @mouseover="hoverX = 'rule5'" @mouseout="hoverX = ''" :class="{'text-danger': hoverX === 'rule5', 'd-none': !rule5.length && !ruleKey5.length}" @click="deleteSymbols('rule5')">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
    </div>
    <div class="row justify-content-evenly pt-3 pb-3">
      <button v-on:click="draw()" class="btn btn-outline-primary btn-sm col-3">Draw</button>
      <button v-on:click="reset()" class="btn btn-outline-secondary btn-sm col-3">Reset</button>
      <button v-on:click="clear()" class="btn btn-outline-danger btn-sm col-3">Clear</button>
    </div> 
    <ul class="nav nav-tabs mb-2">
      <li class="nav-item">
        <a class="nav-link small" v-bind:class="{ 'active': activeTab === 'general' }" href="#basic" v-on:click="changeActiveTab('general')">General</a>
      </li>
      <li class="nav-item">
        <a class="nav-link small" v-bind:class="{ 'active': activeTab === 'randomness' }" href="#structures" v-on:click="changeActiveTab('randomness')">Randomness</a>
      </li>
      <li class="nav-item">
        <a class="nav-link small" v-bind:class="{ 'active': activeTab === 'structures' }" href="#structures" v-on:click="changeActiveTab('structures')">Structures</a>
      </li>
    </ul>
    <General v-if="activeTab === 'general'"/>
    <Randomness v-if="activeTab === 'randomness'"/>
    <Structures v-if="activeTab === 'structures'"/>
  </div>
</template>

<script>
import LSystem from '../scripts/L-system';
import draggable from 'vuedraggable'
import { mapState } from 'vuex'

import Manual from './Manual'
import General from './MenuGeneral'
import Randomness from './MenuRandomness'
import Structures from './MenuStructures'

export default {
  name: 'Menu',
  components: {
    draggable,
    Manual,
    General,
    Randomness,
    Structures
  },
  data() {
    return {
      options: [{name: 'F', id: 'F'}, {name: 'f', id: 'f'}, {name: '+', id: 'l'}, {name: '-', id: 'r'}, {name: '[ ]', id: 'b'}, {name: 'P', id: 'P'}, {name: 'Q', id: 'Q'}, {name: 'R', id: 'R'}, {name: 'S', id: 'S'}, {name: 'T', id: 'T'}],
      LSystem: new LSystem(),
      drop: "",
      drag: "",
      activeTab: "general",
      hoverX: ""
    }
  },
  methods: {
    reset() {
      this.turtle.reset(this.system.penSize);
    },
    clear() {
      this.canvas.clear();
      this.canvas.color(this.system.backgroundColor)
    },
    draw() {
      this.turtle.draw(
        this.LSystem.computeSystem(this.$store.getters.axiom, this.$store.getters.rules, this.system.order), 
        this.system.auto || this.system.length, 
        this.system.angle, 
        this.system.penColor, 
        this.system.penSize, 
        this.system.penSizeDecrease,
        this.$store.getters.faults,
        this.$store.getters.structures
      );
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
    changeActiveTab(value) {
      this.activeTab = value
    },
    deleteSymbols(key) {
      switch(key) {
        case 'rule1': this.ruleKey1 = []; break;
        case 'rule2': this.ruleKey2 = []; break;
        case 'rule3': this.ruleKey3 = []; break;
        case 'rule4': this.ruleKey4 = []; break;
        case 'rule5': this.ruleKey5 = []; break;
      }
      this[key] = [];
    }
  },
  computed: {
    turtle() {
      return this.$store.state.Turtle.turtle;
    },
    canvas() {
      return this.$store.state.Turtle.turtle.canvas;
    },
    system() {
      return this.$store.state.System;
    },
    axiom: {
      get () {
        return this.$store.state.System.axiom
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'axiom',
          value: value
        })
      }
    },
    ruleKey1: {
      get () {
        return this.$store.state.System.ruleKey1
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'ruleKey1',
          value: value
        })
      }
    },
    rule1: {
      get () {
        return this.$store.state.System.rule1
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'rule1',
          value: value
        })
      }
    },
    ruleKey2: {
      get () {
        return this.$store.state.System.ruleKey2
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'ruleKey2',
          value: value
        })
      }
    },
    rule2: {
      get () {
        return this.$store.state.System.rule2
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'rule2',
          value: value
        })
      }
    },
    ruleKey3: {
      get () {
        return this.$store.state.System.ruleKey3
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'ruleKey3',
          value: value
        })
      }
    },
    rule3: {
      get () {
        return this.$store.state.System.rule3
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'rule3',
          value: value
        })
      }
    },
    ruleKey4: {
      get () {
        return this.$store.state.System.ruleKey4
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'ruleKey4',
          value: value
        })
      }
    },
    rule4: {
      get () {
        return this.$store.state.System.rule4
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'rule4',
          value: value
        })
      }
    },
    ruleKey5: {
      get () {
        return this.$store.state.System.ruleKey5
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'ruleKey5',
          value: value
        })
      }
    },
    rule5: {
      get () {
        return this.$store.state.System.rule5
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'rule5',
          value: value
        })
      }
    },
  }
}
</script>

<style>
.axiomContainer {
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
  min-height: calc(1.5em + 0.5rem + 2px);
  font-size: .875rem;
  background-color: #fff;
  padding: 0.25rem 0.25rem;
  position: relative;
}

.ruleContainer {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
  font-size: .875rem;
  min-height: calc(1.5em + 0.5rem + 2px);
  background-color: #fff;
  position: relative;
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
  padding: 0.25rem 0.25rem;
  width: calc(100% - 2.5em);
}

.rule span, .axiomContainer span {
  margin: 0 1px 0 1px;
}

.item {
  display: inline-block;
  width: 1em;
}

.item:hover {
  cursor: grab;
}

.menu {
  float: left;
  width: 444px;
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
  width: 85%;
}

.left-half .slider input, .right-half .slider input {
  width: 72%;
}

.info {
  float: right;
}

.info:hover {
  cursor: help;
}

.left-half {
  float: left;
  width: 47%;
  text-align: center;
}

.right-half {
  float: right;
  width: 47%;
  text-align: center;
}

.w-65 {
  width: 65% !important;
}

.color {
  display: inline-block;
  margin: 0 5px 0 5px;
  padding: 1px;
  width: 30px;
  height: 20px;
}

.color:hover {
  cursor: pointer;
}

.nav-tabs .nav-link.active {
  background-color: #f8f9fa;
  border-color: #dee2e6 #dee2e6 #f8f9fa;
}

.bi-x {
  position: absolute;
  right: 0;
  top: 0.4em;
}

.bi-x:hover {
  cursor: pointer;
}

</style>
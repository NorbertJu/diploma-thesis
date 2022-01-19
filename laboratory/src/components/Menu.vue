<template>
  <div class="menu bg-light shadow">
    <label class="form-label-sm small">Options</label>
    <div @drop="setCurrentlyOver('options')">
      <draggable v-model="options" :sort="false" :group="{ name: 'rules', pull: 'clone', put: false }" @start="onStart">
        <span v-for="element in options" :key="element.id" class="border rounded m-1"><div class="item text-center">{{element.name}}</div></span>
      </draggable>
    </div>
    <label for="axiom" class="form-label-sm small">Axiom</label>
    <div class="axiomContainer" @drop="setCurrentlyOver('axiom')" id="axiom">
      <draggable v-model="axiom" :group="{ name: 'rules', pull: true, put: onPut }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
        <span v-for="(element, index) in axiom" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
      </draggable>
    </div>
    <label for="rule" class="form-label-sm small">Rules</label>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey1"> 
        <draggable v-model="ruleKey1" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey1" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule1"> 
        <draggable v-model="rule1" :group="{ name: 'rules', pull: true, put: onPut }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule1" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey2"> 
        <draggable v-model="ruleKey2" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey2" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule2"> 
        <draggable v-model="rule2" :group="{ name: 'rules', pull: true, put: onPut }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule2" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <div class="ruleContainer">
      <div class="ruleKey" id="ruleKey3"> 
        <draggable v-model="ruleKey3" :group="{ name: 'rules', pull: true, put: onPutRule }" @end="onEnd" @start="onStart">
          <span v-for="(element, index) in ruleKey3" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
      <div class="rule" id="rule3"> 
        <draggable v-model="rule3" :group="{ name: 'rules', pull: true, put: onPut }" @end="onEnd" @add="onAdd" @update="onUpdate" @start="onStart">
          <span v-for="(element, index) in rule3" :key="index" class="border rounded mr-1" ><div class="item text-center">{{element.name}}</div></span>
        </draggable>
      </div>
    </div>
    <label for="length" class="form-label-sm small">Length: <span class="smal text-primary">{{length}}</span></label>
    <div class="slider"> 
      <div class="min small">0</div>
      <input type="range" class="form-range" min="0" max="100" step="1" id="length" v-model="length">
      <div class="max small">100</div>
    </div>
    <label for="angle" class="form-label-sm small">Angle: <span class="smal text-primary">{{angle}}</span></label>
    <div class="slider"> 
      <div class="min small">0</div>
      <input type="range" class="form-range" min="0" max="180" step="1" id="angle" v-model="angle">
      <div class="max small">180</div>
    </div>
    <label for="iterations" class="form-label-sm small">Iterations: <span class="smal text-primary">{{iterations}}</span></label>
    <div class="slider"> 
      <div class="min small">0</div>
      <input type="range" class="form-range" min="0" max="10" step="1" id="iterations" v-model="iterations">
      <div class="max small">&nbsp;10</div>
    </div>
    <div class="row justify-content-evenly mt-3">
      <button v-on:click="draw()" class="btn btn-outline-primary btn-sm col-3">Draw</button>
      <button v-on:click="reset()" class="btn btn-outline-secondary btn-sm col-3">Reset</button>
      <button v-on:click="clear()" class="btn btn-outline-danger btn-sm col-3">Clear</button>
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
  data() {
    return {
      options: [{name: 'F', id: 'F'}, {name: '+', id: 'l'}, {name: '-', id: 'r'}, {name: '[ ]', id: 'b'}],
      axiom: [],
      ruleKey1: [],
      rule1: [],
      ruleKey2: [],
      rule2: [],
      ruleKey3: [],
      rule3: [],
      angle: 90,
      length: 20,
      iterations: 1,
      LSystem: new LSystem(),
      drop: "",
      drag: "",
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
      this.turtle.canvas.clear();
    },
    draw() {
      let result = this.LSystem.computeSystem(this.getAxiom(), this.getRules(), this.iterations);
      this.turtle.draw(result, this.length, this.angle);
    },
    getRules() {
      let result = {}
      if (this.ruleKey1?.[0]?.name) {
        result[this.ruleKey1?.[0]?.name] = this.rule1.map(item => item.name)
      }
      if (this.ruleKey2?.[0]?.name) {
        result[this.ruleKey2?.[0]?.name] = this.rule2.map(item => item.name)
      }
      if (this.ruleKey3?.[0]?.name) {
        result[this.ruleKey3?.[0]?.name] = this.rule3.map(item => item.name)
      }
      return result;
    },
    getAxiom() {
      return this.axiom.map(item => item.name)
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
    onPutRule(to) {
      //allow add only 1 option
      if (to.el.children.length < 1) {
        //allow add only valid option
        if (this.drag === "F") {
          //allow add only yet undefined option
          let num = 0
          this.ruleKey1?.[0]?.name === this.drag ? num++ : null;
          this.ruleKey2?.[0]?.name === this.drag ? num++ : null;
          this.ruleKey3?.[0]?.name === this.drag ? num++ : null;
          if (num === 0) {
            return true
          }
        }
      }
      return false;
    },
    onPut() {
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
    }
  },
  computed: {
    turtle() {
      return this.$store.state.turtle;
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
  height: calc(1.5em + 0.5rem + 2px);
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

.menu {
  z-index: 0;
  position: relative;
  float: left;
  width: 300px;
  height: calc(100vh - 50px);
  padding: 10px;
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
</style>
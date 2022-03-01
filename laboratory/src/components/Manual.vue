<template>
  <div class="info">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="info bi bi-info-circle text-primary" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
    <div class="manual bg-white rounded shadow">
      <i>Drag&Drop symbols to build axiom and rules</i></br>
      </br>
      <b>Alphabet</b></br>
      <i>F</i> &rarr; move forward</br>
      <i>f</i> &rarr; move forward without drawing</br>
      <i>+</i> &rarr; turn left</br>
      <i>-</i> &rarr; turn right</br>
      <i>[ ]</i> &rarr; create branch</br>
      </br>
      <b>Axiom</b></br>
      <i>Initial sequence of symbols</i></br>
      </br>
      <b>Rules</b></br>
      <i>Rewrite rules specifying the substitution of symbols that generate new symbol sequences</i></br>
      </br>
      <b>Buttons</b></br>
      <i class="text-primary">Draw</i> &rarr; draw the defined system</br>
      <i class="text-secondary">Reset</i> &rarr; reset the position of the turtle</br>
      <i class="text-danger">Clear</i> &rarr; clear the whole canvas</br>
      </br>
      <b>Canvas</b></br>
      <i>Drag&Drop</i> &rarr; change the position of the turtle</br>
      <i>Drag&Scroll</i> &rarr; change the orientation of the turtle</br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Manual',
  methods: {
  }
}
</script>

<style>
.info {
  position: relative;
  overflow-x: visible;
  z-index: 10;
}

.info:hover .manual {
  opacity: 1;
  transition: opacity 0.5s;
}

.manual {
  position: absolute;
  top: 0;
  right: 20px;
  padding: 10px;
  max-width: 404px;
  width: max-content;
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
</style>
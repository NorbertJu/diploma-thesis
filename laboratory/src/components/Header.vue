<template>
  <header class="navbar navbar-expand-lg bg-light shadow-sm border-bottom" id="header">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">L-System Laboratory</span>
      <div class="buttons">
        <button class="btn btn-sm btn-outline-primary" v-on:click="saveImage()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          Save Image
        </button>
        <button class="btn btn-sm btn-outline-primary" v-on:click="saveSystem()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          Save System
        </button>
        <button class="btn btn-sm btn-outline-secondary" v-on:click="loadSystem()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
          </svg>
          Load System
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    saveImage() {
      let canvas = document.createElement('canvas');
      canvas.width = this.canvas.width();
      canvas.height = this.canvas.height();
      canvas.getContext('2d').drawImage(this.canvas.canvas, 0, 0, this.canvas.width(), this.canvas.height(), 0, 0, canvas.width, canvas.height);
      let a = document.createElement('a');
      a.setAttribute('download', 'image.png');
      a.setAttribute('href', canvas.toDataURL("image/png"));
      a.click();
    },
    saveSystem() {
      let a = document.createElement("a");
      let file = new Blob([JSON.stringify(this.system)], {type: 'application/json'});
      a.href = URL.createObjectURL(file);
      a.download = "system.json";
      a.click();
    },
    loadSystem() {
      let input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", ".json");
      input.onchange = (event) => {
        new Response(event.target.files[0]).json().then(system => {
          this.$store.commit('loadSystem', system)
        }, error => {
          console.log(error)
        })
      }
      input.click()
    }
  },
  computed: {
    canvas() {
      return this.$store.state.Turtle.turtle.canvas;
    },
    system() {
      return this.$store.state.System;
    }
  }
}
</script>

<style scoped>
#header {
  z-index: 1;
}

.buttons button {
  margin: 0 5px 0 5px;
}
</style>
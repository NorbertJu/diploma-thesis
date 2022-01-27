<template>
  <nav class="navbar navbar-expand-lg bg-light shadow-sm" id="header">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">L-System Laboratory</span>
      <div class="buttons">
        <button class="btn btn-sm btn-outline-primary" v-on:click="saveImage()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
          </svg>
          Save Image
        </button>
        <button class="btn btn-sm btn-outline-primary" v-on:click="getSystem()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
          </svg>
          Save System
        </button>
        <button class="btn btn-sm btn-outline-secondary" v-on:click="loadSystem()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
          </svg>
          Load System
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  created() {
    this.$root.$on('saveSystem', this.saveSystem)
  },
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
    getSystem() {
      this.$root.$emit('getSystem')
    },
    saveSystem(system) {
      let a = document.createElement("a");
      let file = new Blob([JSON.stringify(system)], {type: 'application/json'});
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
          this.$root.$emit('loadSystem', system)
        }, error => {
          console.log(error)
        })
      }
      input.click()
    }
  },
  computed: {
    canvas() {
      return this.$store.state.canvas;
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
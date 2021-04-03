<template>
  <div id="header">
    <header>
      <h1>L-System Lab</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  padding: 6px;
  width: calc(100% - 12px);
  height: 38px;
  background-color: rgb(223, 223, 223);
}

h1 {
  margin: 0;
  padding-left: 20px;
  position: relative;
  float: left;
}
</style>

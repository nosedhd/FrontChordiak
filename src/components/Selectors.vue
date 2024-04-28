<template>
  <div class="selectors-container">
    <div class="selectors">
      <select name="nota" id="nota">
        <option value="A">Nota Musical</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <select name="escala" id="escala">
        <option value="A">Escala</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <select name="idioma" id="idioma">
        <option value="A">Idioma</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selectors',
  data() {
    return {
      selected: 'A'
    }
  },
  methods: {
    // async fetchData() {
    //   // Aquí puedes usar 'await'
    // }
  },
  mounted() {
    // this.fetchData()
  }
}
</script>
<style>
.selectors-container {
  height: 4vw;
  /* background-color: bisque; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
}
.selectors {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.selectors select {
  width: 10vw;
  height: 2vw;
  /* background-color:; */
}
</style>

<template>
  <div class="progressionVisualizer-container">
    <h1>ProgressionsVisualizer</h1>
  </div>
</template>

<script>
export default {
  name: 'ProgressionsVisualizer',
  components: {
    // Selectors
  },
  data() {
    return {
      //   selected: 'A'
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
.progressionVisualizer-container {
  height: 40%;
  margin-top: 30px;
  background-color: red;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  overflow-x: auto; /* Agrega un scrollbar horizontal */
}

.progressionVisualizer-container::-webkit-scrollbar {
  width: 12px; /* Ancho del scrollbar */
}

.progressionVisualizer-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* Color de fondo del scrollbar */
}

.progressionVisualizer-container::-webkit-scrollbar-thumb {
  background: #888; /* Color del thumb del scrollbar */
}
</style>

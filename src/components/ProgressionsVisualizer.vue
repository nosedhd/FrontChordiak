<template>
  <div class="progressionVisualizer-container">
    <h1>Progressions Visualizer</h1>
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
  position: relative;
  height: 40%;
  margin-top: 30px;
  background-color: rgb(70, 13, 163);
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  overflow-x: auto; /* Agrega un scrollbar horizontal */
}
.progressionVisualizer-container h1 {
  width: 100%; /* Hace que el h1 tenga el ancho completo del contenedor */
  height: 100%; /* Hace que el h1 tenga la altura completa del contenedor */
  font-size: 100%; /* Ajusta el tamaño de la fuente al 100% de la altura del contenedor */
  margin: 0; /* Elimina márgenes para que el h1 se ajuste completamente */
  display: flex; /* Utiliza flexbox para centrar el texto */
  align-items: top; /* Centra el texto verticalmente */
  justify-content: center; /* Centra el texto horizontalmente */
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

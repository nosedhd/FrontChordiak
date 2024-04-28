<template>
  <!-- <div class="chord-hexagon-container">
</div> -->
  <button>
    <span>{{ number }}</span>
  </button>
</template>

<script>
export default {
  props: ['number'],
  name: 'ChordHexagon',
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

<style scoped>
.chord-hexagon-container {
}

button {
  color: aliceblue;
  width: 16%;
  height: 110px;
  background-image: url('../../public/hexagono.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  padding-block: 0px;
  padding-inline: 0px;

  background-color: transparent;
  border: none;
  cursor: pointer;
}
/* .chord-hexagon-container button > img {
  width: 100%;
  height: 100%;
} */
</style>

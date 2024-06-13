<template>
  <div class="scale-list-container">
    <h1>Tónica</h1>
    <p>{{ tonica.name }}</p>
    <ul>
      <li v-for="note in scaleNotes" :key="note.id">{{ note.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tonica', 'notes', 'scale'],
  name: 'ScaleList',
  components: {},
  data() {
    return {
      //   selected: 'A'
    }
  },
  watch: {
    scale: {
      handler(newScale) {
        this.updateScaleNotes(newScale)
      },
      immediate: true
    }
  },
  methods: {
    updateScaleNotes(newScale) {
      console.log(newScale)
      if (!newScale) {
        this.scaleNotes = []
        return
      }
      const scalePattern = newScale.split(',').map(Number)
      let currentNoteIndex = this.notes.findIndex((note) => note.name === this.tonica.name)
      console.log(scalePattern)
      this.scaleNotes = scalePattern.map((interval) => {
        currentNoteIndex = (currentNoteIndex + interval) % this.notes.length
        return this.notes[currentNoteIndex]
      })
    }
  },
  mounted() {
    console.log('ron', this.scale)
  }
}
</script>

<style>
.scale-list-container {
  width: 100%;
  height: 60%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
</style>

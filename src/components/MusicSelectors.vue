<template>
  <div class="selectors-container">
      <div class="selectors">
        <select name="nota" id="nota" v-model="tonica">
          <option disabled value="">Nota Musical</option>
          <option v-for="note in notes" :key="note.id" :value="note">
            {{ note.name }}
          </option>
        </select>
        <select name="escala" id="escala" v-model="scale" @change="getScaleNotes">
          <option disabled value="">Escala</option>
          <option v-for="escala in scales" :key="escala.value" :value="escala">
            {{ escala.name }}
          </option>
        </select>
        <select name="idioma" id="idioma" v-model="language">
          <option disabled value="">Selecciona un idioma</option>
          <option v-for="language in languages" :key="language.value" :value="language">
            {{ language.traduction }}
          </option>
        </select>
      </div>
  </div>
</template>

<script>
// import { useNotesStore } from '../stores/notes'
// const store = useNotesStore()
import axios from 'axios'
// import { useNotesStore } from '../stores/notes'

export default {
  name: 'MusicSelectors',
  data() {
    return {
      notes: [],
      tonica: ''
    }
  },
  methods: {
    
    async fetchData() {
      axios.get('http://127.0.0.1:8000/api/notas').then((response) => {
        this.notes = response.data
      })
    },
    handleScaleChange(event) {
      const selectedValue = event.target.value
      this.$store.commit('setSelectedScaleId', selectedValue)
    }
    // setSelectedScaleId(escala) {
    //   const store = useNotesStore()
    //   console.log('Valor de escala.id:', escala.id)
    //   store.setSelectedScaleId(escala.id)
    // }
  },
  mounted() {
    this.fetchData()
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

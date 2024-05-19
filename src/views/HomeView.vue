<template>
  <main style="width: 100%; height: 100%">
    <!-- Selectors Section -->
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
    <div class="body-container">
      <!-- SideBar Section -->
      <div class="sidebar-container">
        <!-- ScaleList Component -->
        <div class="scale-list-container">
          <h1>Tónica</h1>
          <!-- <p>{{ tonica.name }}</p> -->
          <ul>
            <li v-for="note in scaleNotes" :key="note.id">{{ note.name }}</li>
          </ul>
        </div>
        <ProgressionsVisualizer />
      </div>
      <Chordpad />
    </div>
  </main>
</template>

<script>
import Chordpad from '@/components/Chordpad.vue'
import SideBar from '@/components/SideBar.vue'
import ProgressionsVisualizer from '@/components/ProgressionsVisualizer.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    SideBar,
    Chordpad,
    ProgressionsVisualizer
  },
  data() {
    return {
      notes: [],
      scaleNotes: [],
      languages: [],
      scales: [],
      tonica: null,
      scale: null,
      language: ''
    }
  },
  methods: {
    async fetchData() {
      axios.get('http://127.0.0.1:8000/api/notas').then((response) => {
        this.notes = response.data
      })
      axios.get('http://127.0.0.1:8000/api/idiomas').then((response) => {
        this.languages = response.data
      })
      axios.get('http://127.0.0.1:8000/api/scales').then((response) => {
        this.scales = response.data
      })
    },
    getScaleNotes() {
      if (this.tonica && this.scale) {
        axios
          .get(`http://127.0.0.1:8000/api/getScaleNotes/${this.tonica.id}/${this.scale.intervals}`)
          .then((response) => {
            this.scaleNotes = response.data
          })
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>
.body-container {
  width: 100%;
  height: 90vh;
  display: flex;
}
.selectors-container {
  height: 4vw;
  display: flex;
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
}
.sidebar-container {
  height: calc(100% - 30px);
  width: 20%;
  display: flex;
  flex-direction: column;
  background-color: red;
  padding: 15px 20px;
}
</style>

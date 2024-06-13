<template>
  <main style="width: 100%; height: 100%">
    <!-- Selectors Section -->
    <div class="selectors-container">
      <div class="selectors">
        <select name="nota" id="nota" v-model="tonica" @change="getScaleNotes(); ; updateTonic($event.target.selectedIndex)">
          <option disabled value="">Nota Musical</option>
          <option v-for="note in notes" :key="note.id" :value="note">
            {{ note.name }}
          </option>
        </select>
        <select name="escala" id="escala" v-model="scale" @change = "getScaleNotes(); updateScale($event.target.selectedIndex)">
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
          <h1>Tónica {{ store.tonic }}</h1>
          <!-- <p>{{ tonica.name }}</p> -->
          <ul>
            <li v-for="note in scaleNotes" :key="note.id">{{ note.name }}</li>
          </ul>
        </div>
        <ProgressionsVisualizer />
      </div>
      <Chordpad :scale_="scale" />
    </div>
  </main>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
const {updateTonic, updateScale} = store;
</script>

<script>
// import { RouterLink } from 'vue-router';
// import { useScaleStore } from '@/stores/index.js'
// import { createPinia } from 'pinia'
// import { createApp } from 'vue'
// import App from '@/App.vue'
import Chordpad from '@/components/ChordPadComponent.vue'
import ProgressionsVisualizer from '@/components/ProgressionsVisualizer.vue'
import axios from 'axios'
// import { storeToRefs } from 'pinia'
// import { computed } from 'vue'
// import { mapGetters } from 'vuex'
// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)
// const store = useScaleStore()
// const { scaleState } = storeToRefs(store)
// const scaleStateComputed = computed(() => scaleState.value)
export default {
  name: 'HomeView',
  // props: {
  //   scale: Number
  // },
  components: {
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
  // computed: {
  //   ...mapGetters({
  //     scaleState: 'scaleState'
  //   })
  // },

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
    async getScaleNotes() {
      if (this.tonica && this.scale) {
        await axios.get(`http://127.0.0.1:8000/api/getScaleNotes/${this.tonica.id}/${this.scale.intervals}`)
          .then((response) => {
            this.scaleNotes = response.data
            
            // console.log('scaleState', this.scaleState)
          })
          .catch((error) => {
          console.error(error);
        });
      }
    }
  },
  mounted() {
    this.fetchData()
    // console.log('scaleState', scaleStateComputed)
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
  height: calc(100% - 20px);
  width: 20%;
  display: flex;
  flex-direction: column;
  background-color: rgb(14, 0, 37);
  padding: 15px 20px;
}
</style>

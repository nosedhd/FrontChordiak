// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { createPinia } from 'pinia'
// import App from '../App.vue'

export const useNotesStore = defineStore({
  id: 'main',
  state: () => ({
    scaleId: '',
  }),
  actions: {
    setSelectedScaleId(id) {
    this.scaleId = id;
    },
  },
});

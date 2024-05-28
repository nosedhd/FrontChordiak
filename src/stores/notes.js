// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { createPinia } from 'pinia'
// import App from '../App.vue'

export const useNotesStore = defineStore({
  id: 'main',
  state: () => ({
    escaleId: '',
  }),
  actions: {
    setSelectedEscaleId(id) {
    this.escaleId = id;
    },
  },
});

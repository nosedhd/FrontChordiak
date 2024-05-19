import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createPinia } from 'pinia'
// import App from '../App.vue'

export const useNotesStore = defineStore('notes', () => {
  state: () => ({
    tonica: 1,
    notes: [
      {
        name: 'Do',
        name_Eng: 'C',
        value: '1'
      },
      {
        name: 'Do #/Re b',
        name_Eng: 'D#/Reb',
        value: '2'
      },
      {
        name: 'Re',
        name_Eng: 'D',
        value: '3'
      },
      {
        name: 'Re #/Mi b',
        name_Eng: 'D#/Mib',
        value: '4'
      },
      {
        name: 'Mi',
        name_Eng: 'E',
        value: '5'
      },
      {
        name: 'Fa',
        name_Eng: 'F',
        value: '6'
      },
      {
        name: 'Fa #/Sol b',
        name_Eng: 'F#/Solb',
        value: '7'
      },
      {
        name: 'Sol',
        name_Eng: 'G',
        value: '8'
      },
      {
        name: 'Sol #/La b',
        name_Eng: 'G#/Lab',
        value: '9'
      },
      {
        name: 'La',
        name_Eng: 'A',
        value: '10'
      },
      {
        name: 'La #/Si b',
        name_Eng: 'A#/Sib',
        value: '11'
      },
      {
        name: 'Si',
        name_Eng: 'B',
        value: '12'
      }
    ],
    scales: [
      {
        name: 'Mayor',
        value: '1'
      },
      {
        name: 'Menor',
        value: '2'
      }
    ],
    languages: [
      { name: 'Español', value: '1' },
      { name: 'Ingles', value: '2' }
    ]
  })
})

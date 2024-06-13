import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state:() => ({
    tonic: 0,
    scale:0
  }),
  actions:{
    updateTonic(tonicId){
      this.tonic = tonicId;
    },
    updateScale(scaleId){
      this.scale = scaleId;
    }
  }
})  

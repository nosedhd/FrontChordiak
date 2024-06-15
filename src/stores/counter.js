import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useCounterStore = defineStore("counter", ()=>{
  const tonic = ref(0)
  const scale = ref("")
  const notesArray = ref([])

  function updateScale(scaleString){
    this.scale=scaleString
  }
  function updateTonic(tonicId){
    this.tonic=tonicId
  }
  function updateArray(array){
    this.notesArray=array
  }

  function getTonic(){
    tonic.value
  }
  function getScale(){
    scale.value
  }
  function getArray(){
    notesArray.value
  }
  
  return{tonic, scale, notesArray, getTonic, getScale, getArray, updateScale, updateTonic, updateArray}
})

// export const useCounterStore = defineStore('counter', {
//   state:() => ({
//     tonic: 0,
//     scale: 0
//   }),
//   getters:{
//     getTonic:(state)=>{
//       return state.tonic
//     },
//     getScale:(state)=>{
//       return state.scale
//     },

//   }
//   ,
//   actions:{
//     updateTonic(tonicId){
//       this.tonic = tonicId;
//     },
//     updateScale(scaleId){
//       this.scale = scaleId;
//     }
//   }
// })  

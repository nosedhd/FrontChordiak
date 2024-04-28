<template>
  <div class="sidebar-container">
    <ScaleList />
    <ProgressionsVisualizer />
  </div>
</template>

<script>
import ScaleList from '@/components/ScaleList.vue'
import ProgressionsVisualizer from '@/components/ProgressionsVisualizer.vue'

export default {
  name: 'SideBar',
  components: {
    ScaleList,
    ProgressionsVisualizer
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

<style>
.sidebar-container {
  height: calc(100% - 30px);
  width: 20%;
  display: flex;
  flex-direction: column;
  background-color: red;
  padding: 15px 20px;
}
</style>

<template>
  <div class="container">
      <Tabs @changeTab="changeTab" />
      <div class="tab-body" :class="{ativo: activeTab=='bubble' }">
        <BubbleSort />
      </div>
      <div class="tab-body" :class="{ativo: activeTab=='insertion' }">
        <InsertionSort />
      </div>
      <div class="tab-body" :class="{ativo: activeTab=='selection' }">
        <SelectionSort />
      </div>
      <div class="tab-body" :class="{ativo: activeTab=='quick' }">
        <QuickSort />
      </div>
      <div class="tab-body" :class="{ativo: activeTab=='merge' }">
        <MergeSort />
      </div>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import BubbleSort from './components/Sorting/Algorithms/BubbleSort.vue'
import InsertionSort from './components/Sorting/Algorithms/InsertionSort.vue'
import SelectionSort from './components/Sorting/Algorithms/SelectionSort.vue'
import QuickSort from './components/Sorting/Algorithms/QuickSort.vue'
import MergeSort from './components/Sorting/Algorithms/MergeSort.vue'

export default {
  name: 'App',
  components:{
    Tabs,
    BubbleSort,
    InsertionSort,
    SelectionSort,
    QuickSort,
    MergeSort,
  },
  data() {
    return {
      array: [],
      numArray: [],
      size: 40,
      activeTab: 'bubble',
    }
  },
  methods:{
    changeTab(tab){
      this.activeTab  = tab
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background: rgb(51,193,105);
  background: radial-gradient(circle, rgba(51,193,105,1) 40%, rgba(7,141,96,1) 78%);
}

.container{
  margin-top:150px
}
.tab-body{
  background-color: #141414;
  width:830px;
  margin: auto;
  border-radius: 5px;
  display: none;
}

.ativo{
  display: block;
}
</style>

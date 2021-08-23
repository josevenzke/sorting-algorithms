<template>
  <div class="container">
      <Tabs @changeTab="changeTab" />
      <div class="tab-body" v-if="activeTab=='bubble'">
        <BubbleSort />
      </div>
      <div class="tab-body" v-if="activeTab=='insertion'">
        <InsertionSort />
      </div>
      <div class="tab-body" v-if="activeTab=='selection'">
        <SelectionSort />
      </div>
      <div class="tab-body" v-if="activeTab=='quick'">
        <QuickSort />
      </div>
      <div class="tab-body" v-if="activeTab=='merge'">
        <MergeSort />
      </div>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import BubbleSort from './components/SortingAlgs/BubbleSort.vue'
import InsertionSort from './components/SortingAlgs/InsertionSort.vue'
import SelectionSort from './components/SortingAlgs/SelectionSort.vue'
import QuickSort from './components/SortingAlgs/QuickSort.vue'
import MergeSort from './components/SortingAlgs/MergeSort.vue'

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
  background-color: #7bab95;
}

.container{
  margin-top:150px
}
.tab-body{
  background-color: #141414;
  width:830px;
  margin: auto;
  border-radius: 5px;
}
</style>

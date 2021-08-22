<template>
  <div>
    <h1>Sorting Visualizer:</h1>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons-container{
  margin: 10px;
}

.buttons-container>button{
  margin-right: 5px;
}
.bar {
  width: 10px;
  display: inline-block;
  margin: 0 5px;
}

.container{
  padding: 30px;
  background-color: #fff0f3;
}
.tab-body{
  background-color: #ff8fa3;
  width:900px;
  margin: 0px 90px 0px 90px;
}
</style>

<template>
  <div>
    <h1>Sorting Visualizer:</h1>
    <div class="buttons-container">
      <button @click="bubbleSort()">Bubble Sort</button>
      <button @click="insertionSort()">Insertion Sort</button>
      <button @click="selectionSort()">Selection Sort</button>
      <button @click="fillArray()">Shuffle</button>
    </div>
    <div class="container">
      <Tabs />
      <BubbleSort />
    </div>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import BubbleSort from './components/SortingAlgs/BubbleSort.vue'

export default {
  name: 'App',
  components:{
    Tabs,
    BubbleSort
  },
  data() {
    return {
      array: [],
      numArray: [],
      size: 40,
    }
  },
  methods:{
    fillArray(){
      this.array = [];
      for (let i =0; i< this.size; i++) {
        this.array.push([this.getRndInteger(5, 400),'grey'])
        this.numArray.push(this.array[i][0])
      }
      console.log(this.numArray)
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    async bubbleSort(){
      let len = this.array.length
      let checked;
      do {
        checked = false;
        for(let i =0;i<len-1;i++){
          if(this.array[i][0] > this.array[i+1][0]){
            let tmp = this.array[i][0];
            
            this.array[i][0] = this.array[i+1][0];
            this.array[i+1][0] = tmp;
            this.array[i+1][1] = 'green';
            // sleep - to visualize / see the changes
            await this.sleep(25)
            this.array[i+1][1] = 'grey'
            checked = true
          }
        }
      } while(checked)
      this.paintArray('lightseagreen')
    },
    async insertionSort(){
      for(let i = 1; i < this.size; i++){
        let key = this.array[i][0];
        let j = i - 1;
          
        //Sort in the ascending order
        while(j >= 0 && this.array[j][0] > key){
          this.array[j+1][1] = 'green'
          this.array[j][1] = 'green'
          await this.sleep(10)
          this.array[j + 1][0] = this.array[j][0];
          this.array[j+1][1] = 'lightseagreen'
          this.array[j][1] = 'lightseagreen'
          j = j - 1;
        }

        this.array[j + 1][0] = key;
      }
    },
    async selectionSort(){
      for(var i = 0; i < this.size; i++){
        var min = i; 
        for(var j = i+1; j < this.size; j++){
          if(this.array[j][0] < this.array[min][0]){
          // update the smallest index
            min = j; 
          }
        }
        var tmp = this.array[i][0];
        this.array[i][1] = 'green'
        this.array[min][1] = 'red'
        await this.sleep(300)
        this.array[i][0] = this.array[min][0];
        this.array[min][0] = tmp;
        this.array[i][1] = 'red'
        this.array[min][1] = 'green'
        await this.sleep(300)
        this.array[i][1] = 'grey'
        this.array[min][1] = 'grey'
      }
      this.paintArray('lightseagreen')
    },
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    paintArray(color){
      for(var i = 0;i<this.size;i++){
          this.array[i][1] = color
      }
    }
  },
  created() {
    this.fillArray();
  }
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
.bar-container {
  margin: auto;
  background-color: #ff8fa3;
  border-radius: 0px 0px 15px 15px;
  padding: 20px;
  width: 900px;
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
</style>

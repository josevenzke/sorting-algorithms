<template>
  <div>
    <h1>Sorting Visualizer</h1>
<<<<<<< HEAD
    <div class="buttons-container">
      <button @click="bubbleSort()">Bubble Sort</button>
      <button @click="fillArray()">Shuffle</button>
      <button @click="mergeSort()">Merge Sort</button>
    </div>
=======
    <button @click="bubbleSort()">Bubble Sort</button>
    <button @click="insertionSort()">Insertion Sort</button>
    <button @click="selectionSort()">Selection Sort</button>
    <button @click="fillArray()">Shuffle</button>

>>>>>>> b9d190cbd2a55c088dc2f33043a4e8ff60276c7c
    <div class="container">
      <div class="bar" v-for="(number,index) in array" :key="index" :style="{height: number[0] + 'px',backgroundColor:number[1]}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      array: [],
      numArray: [],
      size: 40,
    }
  },
  components: {
  },
  methods:{
    fillArray(){
      // populate array with random numbers between 5 and 400
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
            
            this.array[i+1][1] = 'lightseagreen';

            checked = true
          }
        }
      } while(checked)
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
    },
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
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
.container {
  margin: auto;
  background-color: lightgoldenrodyellow;
  border-radius: 15px;
  padding: 20px;
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
</style>

<template>
  <div>
    <h1>Sorting Visualizer</h1>
    <button @click="bubbleSort()">Bubble Sort</button>
    <button @click="fillArray()">Shuffle</button>

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
      size: 30,
    }
  },
  components: {
  },
  methods:{
    fillArray(){
      // populate array with random numbers between 5 and 400
      this.array = [];
      for (let i =0; i< this.size; i++) {
        this.array.push([this.getRndInteger(5, 400),'lightseagreen'])
      }
      console.log(this.array)
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
            await this.sleep()
            
            this.array[i+1][1] = 'lightseagreen';

            checked = true
          }
        }
      } while(checked)
    },
    sleep() {
      return new Promise((resolve) => setTimeout(resolve, 50));
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
  margin: auto;;
}
.bar {
  width: 20px;
  display: inline-block;
  margin: 0 5px;
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading
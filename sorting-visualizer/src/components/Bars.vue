<template>
    <div class="bar-container">
        <div class="bar" v-for="(number,index) in array" :key="index" :style="{height: number[0] + 'px',backgroundColor:number[1]}"></div>
    </div>
</template>

<script>
export default {
    name:'Bars',
    props:['numArray'],
    data(){
        return{
            array: this.numArray
        }
    }
}
</script>

<style scoped>
.bar-container {
  margin: auto;
  background-color: #ff8fa3;
  border-radius: 0px 0px 15px 15px;
  padding: 20px;
  width: 900px;
}
.bar {
  width: 10px;
  display: inline-block;
  margin: 0 5px;
}
</style>
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
  padding: 10px;

}
.bar {
  width: 2px;
  display: inline-block;
  margin: 0 1px;
}
</style>
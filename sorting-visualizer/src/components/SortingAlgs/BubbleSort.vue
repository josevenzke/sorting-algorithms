<template>
    <Bars :numArray="array" :key="array" />
</template>

<script>
import Bars from '../Bars.vue'
export default {
    name:'BubbleSort',
    components:{
        Bars
    },
    data(){
        return{
            array: [],
        }
    },
    created() {
        this.fillArray();
    },
    methods:{
        fillArray(){
            this.array = [];
            for (let i =0; i< this.size; i++) {
                this.array.push([this.getRndInteger(5, 400),'grey'])
                this.numArray.push(this.array[i][0])
            }
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        },
    },
}
</script>
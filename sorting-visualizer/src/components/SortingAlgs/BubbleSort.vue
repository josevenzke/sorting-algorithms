<template>
    <div>
        <button @click="bubbleSort()">Sort</button>
        <Bars :numArray="array" :key="array" />
    </div>
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
            }
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
        sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        },
    },
}
</script>
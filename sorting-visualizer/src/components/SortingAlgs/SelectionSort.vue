<template>
    <div>
        <button @click="selectionSort()">Sort</button>
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Bars.vue'
import arrayMixin from '../../mixins/arrayMixin'

export default {
    name:'InsertionSort',
    components:{
        Bars
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            size: 40,
        }
    },
    mounted() {
        this.fillArray();
    },
    methods:{
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
                await this.sleep(150)
                this.array[i][0] = this.array[min][0];
                this.array[min][0] = tmp;
                this.array[i][1] = 'red'
                this.array[min][1] = 'green'
                await this.sleep(150)
                this.array[i][1] = 'grey'
                this.array[min][1] = 'grey'
                this.array[i][1] = 'lightseagreen'
            }
            this.paintArray('lightseagreen')
        },
    },
}
</script>
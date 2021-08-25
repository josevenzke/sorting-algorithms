<template>
    <div>
        <Buttons @sort="selectionSort()" @shuffle="shuffle(array)" @stop="stop()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import arrayMixin from '../../../mixins/arrayMixin'

export default {
    name:'InsertionSort',
    components:{
        Bars,
        Buttons
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            reload: false,
            showSort: true,
        }
    },
    mounted() {
        this.fillArray();
        this.shuffle(this.array)
    },
    methods:{
        async selectionSort(){
            this.showSort = false
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
                await this.sleep(50)
                this.array[i][0] = this.array[min][0];
                this.array[min][0] = tmp;
                this.array[i][1] = 'red'
                this.array[min][1] = 'green'
                await this.sleep(50)
                this.array[i][1] = 'grey'
                this.array[min][1] = 'grey'
                this.array[i][1] = 'lightseagreen'
                if(this.reload==true){
                    this.shuffle(this.array)
                    this.showSort = true
                    return
                }
            }
            this.paintArray('lightseagreen')
            this.showSort = true
        },
    },
}
</script>
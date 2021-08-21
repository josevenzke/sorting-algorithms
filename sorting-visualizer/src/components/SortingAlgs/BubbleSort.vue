<template>
    <div>
        <button @click="bubbleSort()">Sort</button>
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Bars.vue'
import arrayMixin from '../../mixins/arrayMixin'

export default {
    name:'BubbleSort',
    components:{
        Bars
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            size: 90,
        }
    },
    created() {
        this.fillArray();
    },
    methods:{
        async bubbleSort(){
            let len = this.array.length
            var last = this.size-1
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
                        await this.sleep(5)
                        this.array[i+1][1] = 'grey'
                        checked = true
                        
                    }
                }
                this.array[last][1] = 'lightseagreen'
                last = last-1
            } while(checked)
            this.paintArray('lightseagreen')
        },
    },
}
</script>
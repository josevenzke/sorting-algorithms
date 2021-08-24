<template>
    <div>
        <AlgButtons @sort="bubbleSort()" @shuffle="shuffle(array)" />
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Bars.vue'
import AlgButtons from '../AlgButtons.vue'
import arrayMixin from '../../mixins/arrayMixin'

export default {
    name:'BubbleSort',
    components:{
        Bars,
        AlgButtons
    },
    emits:['reset'],
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
        }
    },
    created() {
        this.fillArray();
        this.shuffle(this.array)
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
                        await this.sleep(1)
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
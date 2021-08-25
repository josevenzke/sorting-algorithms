<template>
    <div>
        <Buttons @sort="bubbleSort()" @shuffle="shuffle(array)" @stop="stop()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import arrayMixin from '../../../mixins/arrayMixin'

export default {
    name:'BubbleSort',
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
    created() {
        this.fillArray();
        this.shuffle(this.array)
    },
    methods:{
        async bubbleSort(){
            this.showSort = false
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
                        if(this.reload==true){
                            this.shuffle(this.array)
                            this.showSort = true
                            return
                        }
                    }
                }
                this.array[last][1] = 'lightseagreen'
                last = last-1

            } while(checked)
            this.paintArray('lightseagreen')
            this.showSort = true
        },
    },
}
</script>
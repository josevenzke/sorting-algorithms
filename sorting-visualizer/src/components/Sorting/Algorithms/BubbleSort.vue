<template>
    <div>
        <Buttons @sort="bubbleSort()" @shuffle="shuffle(array)" @stop="stop()" @info="showInfo()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
        <info-modal v-show="isModalVisible" @close="closeModal()">
            <h3>Bubble Sort:</h3>
            <p>Bubble sort is one of the fundamental forms of sorting in programming. Bubble sort algorithms move through a sequence of data (typically integers) and rearrange them into ascending or descending order one number at a time. To do this, the algorithm compares number X to the adjacent number Y. If X is higher than Y, the two are swapped and the algorithm starts over.</p>
        </info-modal>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import arrayMixin from '../../../mixins/arrayMixin'
import InfoModal from '../Visual/InfoModal.vue'

export default {
    name:'BubbleSort',
    components:{
        Bars,
        Buttons,
        InfoModal
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
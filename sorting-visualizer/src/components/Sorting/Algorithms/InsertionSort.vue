<template>
    <div>
        <Buttons @sort="insertionSort()" @shuffle="shuffle(array)" @stop="stop()" @info="showInfo()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
        <info-modal v-show="isModalVisible" @close="closeModal()">
            <h3>Insertion Sort:</h3>
            <p>Insertion sort is the sorting mechanism where the sorted array is built having one item at a time. The array elements are compared with each other sequentially and then arranged simultaneously in some particular order. The analogy can be understood from the style we arrange a deck of cards.</p>
        </info-modal>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import arrayMixin from '../../../mixins/arrayMixin'
import InfoModal from '../Visual/InfoModal.vue'

export default {
    name:'InsertionSort',
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
    mounted() {
        this.fillArray();
        this.shuffle(this.array)
    },
    methods:{
        async insertionSort(){
            this.showSort = false
            for(let i = 1; i < this.size; i++){
                let key = this.array[i][0];
                let j = i - 1;
            
                //Sort in the ascending order
                while(j >= 0 && this.array[j][0] > key){
                this.array[j+1][1] = 'green'
                this.array[j][1] = 'green'
                await this.sleep(1)
                this.array[j + 1][0] = this.array[j][0];
                this.array[j+1][1] = 'lightseagreen'
                this.array[j][1] = 'lightseagreen'
                j = j - 1;

                if(this.reload==true){
                    this.shuffle(this.array)
                    this.showSort = true
                    return
                }

                }
                this.array[j + 1][0] = key;
               
            }
            this.showSort = true
        },

    },
}
</script>
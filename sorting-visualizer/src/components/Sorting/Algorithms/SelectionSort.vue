<template>
    <div>
        <Buttons @sort="selectionSort()" @shuffle="shuffle(array)" @stop="stop()" @info="showInfo()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
        <info-modal v-show="isModalVisible" @close="closeModal()">
            <h3>Selection Sort:</h3>
            <p>Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.</p>
        </info-modal>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import InfoModal from '../Visual/InfoModal.vue'
import arrayMixin from '../../../mixins/arrayMixin'

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
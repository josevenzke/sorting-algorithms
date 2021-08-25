<template>
    <div>
        <Buttons @sort="quickSortWrap()" @shuffle="shuffle(array)" @stop="stop()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import arrayMixin from '../../../mixins/arrayMixin'

export default {
    name:'QuickSort',
    components:{
        Bars,
        Buttons
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            sortedArray: [],
            reload: false,
            showSort: true,
        }
    },
    created() {
        this.fillArray()
        for (let i = 0; i < this.size; i++) {
            this.sortedArray.push(this.array[i][0])
        }
        this.sortedArray = this.sortedArray.sort(function(a, b) {return a - b;})
        this.shuffle(this.array)
    },
    methods:{
        async quickSortWrap(){
            this.showSort = false
            await this.quickSort(this.array,0,this.array.length-1)
            this.paintArray('lightseagreen')
            this.showSort = true
        },
        async quickSort(arr,start,end) {
            if (start >= end) {
                return;
            }
            if(this.reload==true){
                    this.shuffle(this.array)
                    this.showSort = true
                    throw "exit";
            }
            // Returns pivotIndex
            let index = await this.partition(arr, start, end);
            
            // Recursively apply the same logic to the left and right subarrays
            await Promise.all([this.quickSort(arr, start, index - 1),this.quickSort(arr, index + 1, end)])
            for (let i = 0; i < this.size; i++) {
                if (arr[i][0]==this.sortedArray[i]){
                    arr[i][1] = 'lightseagreen'
                }
            }
        },
        async partition(arr, start, end){
            // Taking the last element as the pivot

            const pivotValue = arr[end][0];
            let pivotIndex = start; 
            for (let i = start; i < end; i++) {
                if (arr[i][0] < pivotValue) {
                // Swapping elements
                [arr[i][0], arr[pivotIndex][0]] = [arr[pivotIndex][0], arr[i][0]];
                // Moving to next element
                pivotIndex++;
                }
            }
            await this.sleep(700);

            // Putting the pivot value in the middle
            [arr[pivotIndex][0], arr[end][0]] = [arr[end][0], arr[pivotIndex][0]] 
            return pivotIndex;
        },
    },
}
</script>


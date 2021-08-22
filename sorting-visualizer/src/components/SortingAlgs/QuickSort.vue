<template>
    <div>
        <button @click="quickSortWrap(array,0,array.length-1)">Sort</button>
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Bars.vue'
import arrayMixin from '../../mixins/arrayMixin'

export default {
    name:'QuickSort',
    components:{
        Bars
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            size: 90,
            sortedArray: []
        }
    },
    created() {
        this.fillArray()
        for (let i = 0; i < this.size; i++) {
            this.sortedArray.push(this.array[i][0])
        }
        this.sortedArray = this.sortedArray.sort(function(a, b) {return a - b;})
    },
    methods:{
        async quickSortWrap(arr,start,end){
            await this.quickSort(arr,start,end)
            this.paintArray('lightseagreen')
        },
        async quickSort(arr,start,end) {
            if (start >= end) {
                return;
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
            await this.sleep(200);
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
            for (let i = start; i < end; i++) {
                arr[i][1] = 'green'
            }

            await this.sleep(200);
            for (let i = start; i < end; i++) {
                arr[i][1] = 'grey'
            }

            // Putting the pivot value in the middle
            [arr[pivotIndex][0], arr[end][0]] = [arr[end][0], arr[pivotIndex][0]] 
            return pivotIndex;
        },
    },
}
</script>


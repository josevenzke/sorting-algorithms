<template>
    <div>
        <button @click="quickSort(array)">Sort</button>
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
        }
    },
    created() {
        this.fillArray()
    },
    methods:{
        async quickSort() {
            // Creating an array that we'll use as a stack, using the push() and pop() functions
            var stack = [];
            
            // Adding the entire initial array as an "unsorted subarray"
            stack.push(0);
            stack.push(this.array.length - 1);
            
            // There isn't an explicit peek() function
            // The loop repeats as long as we have unsorted subarrays
            while(stack[stack.length - 1] >= 0){
                
                // Extracting the top unsorted subarray
                var end = stack.pop();
                var start = stack.pop();
                
                var pivotIndex = await this.partition(this.array, start, end);
                
                // If there are unsorted elements to the "left" of the pivot,
                // we add that subarray to the stack so we can sort it later
                if (pivotIndex - 1 > start){
                    stack.push(start);
                    stack.push(pivotIndex - 1);
                }
                
                // If there are unsorted elements to the "right" of the pivot,
                // we add that subarray to the stack so we can sort it later
                if (pivotIndex + 1 < end){
                    stack.push(pivotIndex + 1);
                    stack.push(end);
                    }
                await this.sleep(100)
                console.log('a')
                }
            this.paintArray('lightseagreen')
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
            
            // Putting the pivot value in the middle
            [arr[pivotIndex][0], arr[end][0]] = [arr[end][0], arr[pivotIndex][0]] 
            return pivotIndex;
        },
    },
}
</script>


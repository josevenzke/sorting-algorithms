<template>
    <div>
        <Buttons @sort="mergeSort(array)" @shuffle="shuffle(array)"  @stop="stop()" @info="showInfo()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
        <info-modal v-show="isModalVisible" @close="closeModal()">
            <h3>Merge Sort:</h3>
            <p>Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem. So Merge Sort first divides the array into equal halves and then combines them in a sorted manner.</p>
        </info-modal>
    </div>
</template>

<script>
import Bars from '../Visual/Bars.vue'
import Buttons from '../Visual/Buttons.vue'
import InfoModal from '../Visual/InfoModal.vue'
import arrayMixin from '../../../mixins/arrayMixin'

export default {
    name:'MergeSort',
    components:{
        Bars,
        Buttons,
        InfoModal
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            showSort: true,
        }
    },
    mounted() {
        this.fillArray()
        this.shuffle(this.array)
    },
    methods:{
        async mergeSort(arr) {
            const half = arr.length / 2;
            // the base case is array length <=1
            if (arr.length <= 1) {
                return arr;
            }
            const left = arr.splice(0, half); // the first half of the array
            const right = arr;
            await this.sleep(10)
            const x = await this.mergeSort(left)
            const y = await this.mergeSort(right)
            return await this.merge(x,y);

        },
        async merge(left, right) {
            let sortedArr = []; // the sorted elements will go here

            while (left.length && right.length) {
                // insert the smallest element to the sortedArr
                if (left[0][0] < right[0][0]) {
                sortedArr.push(left.shift());
                } else {
                sortedArr.push(right.shift());
                }
            }

            // use spread operator and create a new array, combining the three arrays
            return [...sortedArr, ...left, ...right];
        },
    },
}
</script>
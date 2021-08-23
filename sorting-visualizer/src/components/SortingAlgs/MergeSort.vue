<template>
    <div>
        <AlgButtons @sort="mergeSort(array)" @shuffle="fillArray()" />
        <Bars :numArray="array" :key="array"/>
    </div>
</template>

<script>
import Bars from '../Bars.vue'
import AlgButtons from '../AlgButtons.vue'
import arrayMixin from '../../mixins/arrayMixin'

export default {
    name:'MergeSort',
    components:{
        Bars,
        AlgButtons
    },
    mixins: [arrayMixin],
    data(){
        return{
            array: [],
            size: 90,
        }
    },
    mounted() {
        this.fillArray()
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
<template>
    <div>
        <Buttons @sort="bubbleSort()" @shuffle="shuffle(array)" @stop="stop()" @info="showInfo()" :show="showSort" :key="showSort" />
        <Bars :numArray="array" :key="array"/>
        <info-modal v-show="isModalVisible" @close="closeModal()">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum corrupti odit facilis doloribus dolore harum quas sapiente odio, obcaecati cumque incidunt architecto dolorum consequatur. Temporibus illum voluptates a numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, dignissimos excepturi aspernatur doloribus necessitatibus, fugiat, dolore nobis animi asperiores modi. Facere, perspiciatis inventore corporis quos ducimus mollitia nulla sapiente?</p>
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
            isModalVisible: false,
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
        showInfo(){
            this.isModalVisible = true;
        },
        closeModal(){
            this.isModalVisible = false;
        }
    },
}
</script>
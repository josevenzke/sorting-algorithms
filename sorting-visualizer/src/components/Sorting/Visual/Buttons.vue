<template>
    <div class="buttons-container">
        <button v-if="showRun" @click="sort()">Sort <i class="fas fa-play"></i></button>
        <button v-else @click="stop()">Stop <i class="fas fa-pause"></i></button>
        <div class="secondary-buttons">
            <button @click="shuffle()" :disabled="!showRun" ><i class="fas fa-sync-alt"></i></button>
            <button :disabled="!showRun" ><i class="fas fa-info"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Buttons',
    props:['show'],
    data(){
        return{
            showRun: this.show
        }
    },
    methods:{
        sort(){
            this.$emit('sort')
        },
        shuffle(){
            this.$emit('shuffle')
        },
        stop(){
            this.$emit('stop')
        }
    }
}
</script>

<style scoped>
.buttons-container{
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin:0px 40px 0px 40px
}

.buttons-container>button{
    height: 35px;
    margin-top: 20px;
    width: 100px;
    font-size: 15px;
    font-weight: 600;
    background-color: #058026;
    border: 0px;
    border-radius: 4px;
}
.buttons-container>button:hover{
    background-color: #05a12e;
    cursor: pointer;
    color:white;
}
.buttons-container>button>i{
    margin-left: 10px;
}
.secondary-buttons>button{
    height: 35px;
    margin-top: 20px;
    width: 40px;
    font-size: 15px;
    font-weight: 600;
    background-color: #058026;
    border: 0px;
    border-radius: 4px;
    margin-left: 10px;
}
.secondary-buttons>button:hover:enabled{
    background-color: #05a12e;
    cursor: pointer;
    color:white;
}
</style>
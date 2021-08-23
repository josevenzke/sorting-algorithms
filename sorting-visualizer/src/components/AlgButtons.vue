<template>
    <div class="buttons-container">
        <button @click="sort()">Sort <i class="fas fa-play"></i></button> 
        <button @click="shuffle()">Shuffle <i class="fas fa-sync-alt"></i></button>
    </div>
</template>

<script>
export default {
    name:'AlgButtons',
    methods:{
        sort(){
            this.$emit('sort')
        },
        shuffle(){
            this.$emit('shuffle')
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
button>i{
    margin-left: 10px;
}
</style>
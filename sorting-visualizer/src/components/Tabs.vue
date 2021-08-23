<template>
    <div class="tabs-container">
        <a class="nav-link" @click="activateTab('bubble')" :class="{active: isActive('bubble')}">Bubble Sort</a>

        <a class="nav-link" @click="activateTab('insertion')" :class="{active: isActive('insertion')}">Insertion Sort</a>

        <a class="nav-link" @click="activateTab('selection')" :class="{active: isActive('selection')}">Selection Sort</a>

        <a class="nav-link" @click="activateTab('quick')" :class="{active: isActive('quick')}">Quick Sort</a>

        <a class="nav-link" @click="activateTab('merge')" :class="{active: isActive('merge')}">Merge Sort</a>
    </div>
</template>

<script>
export default {
    name:'Tabs',
    emits:['changeTab'],
    data(){
        return{
            activeTab: 'bubble'
        }
    },
    methods:{
        activateTab(tab){
            this.activeTab = tab
            this.$emit('changeTab',tab)
        },
        isActive(tab){
            if (tab==this.activeTab){
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style scoped>
.tabs-container{
    height: 34px;
}

div>a:first-child{
    border-radius: 5px 0px 0px 0px;
}
div>a:last-child{
    border-radius: 0px 5px 0px 0px;
}
.nav-link{
    border: 0px !important;
    background-color: #555755 !important;
    color: white;
    padding: 15px;
    font-size: 15px;
    font-weight: 600;
}
.nav-link:hover{
    cursor: pointer;
    color: #058026 !important;
}
.active{
    background-color: #141414 !important;
    color: #058026 !important;
}

</style>
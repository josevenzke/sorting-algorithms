<template>
    <div class="tabs-container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" @click="activateTab('bubble')" :class="{active: isActive('bubble')}">Bubble Sort</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="activateTab('insertion')" :class="{active: isActive('insertion')}">Insertion Sort</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="activateTab('selection')" :class="{active: isActive('selection')}">Selection Sort</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="activateTab('quick')" :class="{active: isActive('quick')}">Quick Sort</a>
            </li>
        </ul>
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
    width: 900px;
    margin:auto;
}
.nav-link{
    border: 0px !important;
    background-color: #d0d1ff !important;
}
.nav-link:hover{
    cursor: pointer;
}
.active{
    background-color: #ff8fa3 !important;
    color: #001219 !important;
}

</style>
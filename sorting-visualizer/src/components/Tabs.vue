<template>
    <div class="tabs-container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Bubble Sort</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Insertion Sort</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Selection Sort</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Tabs',
}
</script>

<style scoped>
.tabs-container{
    width: 900px;
    margin:auto;
}
.active{
    background-color: #ff8fa3 !important;
    color: #001219 !important;
}
.nav-link{
    border: 0px !important;
}
</style>
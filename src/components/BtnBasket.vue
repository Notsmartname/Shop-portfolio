<template>
    <button class="btn">
        Basket
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.btn {
    padding: 5px 15px;
    background-color: rgb(60, 197, 55, .5);
    border: 1px solid rgb(44, 44, 44, .5);
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
    transition: .5s;
}


.btn:hover {
    transform: scale(1.1);
    color: rgb(109, 60, 32);
}
</style>
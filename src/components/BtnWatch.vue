<template>
    <button class="btn">
        Watch
    </button>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style lang="scss" scoped>
.btn {
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid black;
    transition: .5s;
}

.btn:hover {
    transform: scale(1.1);
}
</style>
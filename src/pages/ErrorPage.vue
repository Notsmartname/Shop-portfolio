<template>
    <div class="main">
        <img src="../assets/images/error.jpg" alt="ERROR">
        <button @click="$router.push('/')">На Главную Страницу</button>
    </div>
</template>

<script setup>

</script>


<style scoped lang="scss">
.main {
    margin: 150px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    & button {
        background-color: beige;
        padding: 12px;
        border-radius: 15px;
    }

}
</style>

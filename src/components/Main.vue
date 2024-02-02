<template>
    <main class="main">
        <div class="main__controll container">
            <select @change="changeSelect()" v-model="selectedOption">
                <option disabled value="">Сортировка:</option>
                <option v-for="option in options" :value="option.value">{{ option.name }}</option>
            </select>
        </div>
        <div class="main__list container" v-if="!productStore.loader" v-auto-animate>
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="loader container" v-else>

            <Loader />
        </div>
        <div class="container">

            <div class="wrapper" v-if="!productStore.loader">
                <div @click="previewPage()" class="wrapper-page">PrePage</div>
                <div v-auto-animate v-for="pageNumber of productStore.totalPages" :key="pageNumber" class="wrapper-page"
                    :class="{
                        'current-page': pageNumber - 1 == page
                    }" @click="changePage(pageNumber)">
                    {{ pageNumber }}
                </div>
                <div class="wrapper-page" @click="nextPage()">NextPage</div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '../store/products';
import ProductCard from './ProductCard.vue';
import { vAutoAnimate } from '@formkit/auto-animate';
import { storeToRefs } from 'pinia'

const productStore = useProductStore();
productStore.getProducts();

const selectedOption = ref("")

const changeSelect = () => {
    if (selectedOption.value == 'price') {
        return products.value.sort((a, b) => a.price - b.price);
    } else if (selectedOption.value == '-price') {
        return products.value.sort((a, b) => b.price - a.price);
    } else if (selectedOption.value == 'stock') {
        return products.value.sort((a, b) => a.stock - b.stock);
    } else if (selectedOption.value == '-stock') {
        return products.value.sort((a, b) => b.stock - a.stock);
    } else if (selectedOption.value == 'name') {
        products.value.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    }
};

const { page } = storeToRefs(productStore);

const nextPage = () => {
    page.value++;
    productStore.getProducts();
}

const previewPage = () => {
    page.value--;
    productStore.getProducts();
    selectedOption.value = '';
}

const changePage = (pageNumber) => {
    page.value = pageNumber - 1;
    productStore.getProducts();
    selectedOption.value = '';
}

const options = ref([
    { value: 'name', name: 'По названию' },
    { value: 'price', name: 'По цене (↑)' },
    { value: '-price', name: 'По цене (↓)' },
    { value: 'stock', name: 'По кол-ву (↑)' },
    { value: '-stock', name: 'По кол-ву (↓)' },
]);


const products = computed(() => productStore.products);

</script>



<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 50px;

    &-page {
        border: 1px solid rgb(84, 116, 134);
        padding: 10px;
        cursor: pointer;
        transition: .5s;
        color: rgb(83, 74, 56);
    }

    &-page:hover {
        transform: scale(1.05);
    }
}

.current-page {
    border: 2px solid teal;
}

.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
}

select {
    padding: 5px;
    border-radius: 5px;
    text-transform: uppercase;
    color: #000;
    font-family: "Montserrat";
    font-size: 12px;
    font-weight: 400;
}

.main {

    &__controll {
        display: flex;
        align-items: center;
        margin-top: 150px;
    }

    &__list {
        // display: flex;
        // flex-wrap: wrap;
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 20px;
        margin-top: 50px;
        // row-gap: 50px;
    }
}
</style>
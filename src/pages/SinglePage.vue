<template>
    <div class="main" v-if="product">
        <div class="product">

            <div class="product__swiper">
                <swiper v-auto-animate :navigation="true" class="mySwiper" :modules="modules">
                    <swiper-slide v-for="(urlImg, index) in product.images" :key="index">
                        <img :src="urlImg" :alt="product.title + 'Image' + index">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="product__about">
                <button class="btn" @click="$router.push('/')">Back</button>
                <h2>
                    {{ product.title }}
                </h2>
                <h4>
                    Категория: {{ product.category }} <b>Скидка {{ product.discountPercentage }}%</b>
                </h4>
                <p class="product__about-price">Цена: <span>{{ Math.ceil(product.price + (product.price / 100 *
                    product.discountPercentage)) }} $</span> {{ product.price }} $ </p>
                <p class="product__about-descr">
                    <b>Описание:</b> {{ product.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../store/products';
import { Swiper, SwiperSlide } from "swiper/vue";
import { vAutoAnimate } from '@formkit/auto-animate';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const modules = ref([Navigation]);

const productStore = useProductStore();
const route = useRoute();

productStore.getSingleProduct(route.params.id);

const product = computed(() => productStore.singleProduct);

</script>


<style lang="scss" scoped>
.main {
    padding: 0;
    margin-top: 50px;
    margin-bottom: 300px;
}

.btn {
    background-color: rgb(119, 154, 218);
    width: 100px;
    height: 20px;
    z-index: 1;
    right: 55px;
    border-radius: 5px;
}

.product {
    height: 100%;
    z-index: -100;
    padding: 25px;
    background: rgba(240, 235, 235, 0.4);
    user-select: none;
    display: flex;
    gap: 15px;



    &__swiper {
        position: relative;
        min-height: 650px;
        height: 100%;
        width: 650px;
        margin: 0;
        padding: 0;
    }

    &__about {
        display: flex;
        flex-direction: column;
        gap: 25px;

        &-descr {
            color: #000000;
            font-family: "Montserrat";
            font-size: 16px;
            font-weight: 400;
            padding: 2px;
        }

        & h2,
        h4 {
            display: flex;
            justify-content: space-between;
            align-items: center;

            text-transform: uppercase;
            color: #000;
            font-family: "Montserrat";
            font-size: 24px;
            font-weight: 700;
        }

        & h4 {
            font-size: 14px;

            & b {
                color: rgb(224, 74, 74);
            }
        }

        &-price {
            position: relative;
            width: 150px;
            text-transform: uppercase;
            color: #000;
            font-family: "Montserrat";
            font-size: 14px;
            font-weight: 400;

            & span {
                padding: 0px 5px;
                position: absolute;
                font-size: 12px;
                right: 0;
                top: -10px;
                color: red;
                background: #665d5d71;
                border-radius: 5px;
                text-decoration: line-through;
            }
        }
    }

}


.swiper {
    width: 100%;
    height: 100%;
    max-height: 550px;

}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    min-height: 550px;
    min-width: 550px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
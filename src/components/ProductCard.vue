<template>
    <div class="card" v-auto-animate>
        <div class="card__title">
            <span>{{ product.category }}</span>
            <div class="card__title-rating">
                Рейтинг: {{ product.rating }}
            </div>
        </div>
        <div class="card-img">
            <img :src="`${product.thumbnail}`" alt="CardImg">
            <span>-{{ product.discountPercentage }}%</span>
        </div>
        <div class="card__content">
            <div class="card__content-header">
                <h3 class="card__content-header-title">
                    {{ product.title }}
                </h3>
                <h5 class="card__content-header-stock">

                    Кол-во: {{ product.stock }} шт.

                </h5>
            </div>
            <div class="card__content-body">
                <h2 class="card__content-body-price"><span>{{ Math.ceil(product.price + (product.price / 100 *
                    product.discountPercentage)) }} y.e.</span> {{ product.price }} y.e.</h2>
                <div class="card__content-body-btns">
                    <BtnWatch @click="$router.push(`/single/${product.id}`)" />
                    <BtnBasket />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BtnBasket from '@/components/BtnBasket.vue'
import BtnWatch from '@/components/BtnWatch.vue'

import { useProductStore } from '../store/products';

const productStore = useProductStore();

const props = defineProps({
    product: {
        type: Object,
        required: true,
        default: () => { }
    }
})

</script>

<style lang="scss" scoped>
.card:hover {
    transform: scale(1.05);
}

.card {
    width: 306px;
    height: 443px;
    background: #FFF;
    padding: 19px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: .6s;
    border-radius: 5px;

    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        text-transform: uppercase;
        color: #000;
        font-family: "Montserrat";
        font-size: 12px;
        font-weight: 400;
    }

    &-descr {
        display: none;
        width: 100px;
        height: 100px;
    }


    &-img:hover {
        background-color: red;
    }

    &-img {

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
            max-width: 274px;
            max-height: 315px;
            width: 100%;
            height: 100%;
            transition: .5s;

        }

        & img:hover {
            transform: scale(1.01);
        }

        & span {
            position: absolute;
            top: 15px;
            right: 0;
            color: #ec8888;
            font-family: "Montserrat";
            font-size: 12px;
            font-weight: 700;
            background-color: red;
            padding: 2px;
        }

    }

    &__content {


        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-title {
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            &-stock {
                min-width: 100px;
                display: flex;
                align-items: center;
                justify-content: end;
            }

        }

        &-body {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 15px;

            &-btns {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            &-price {
                position: relative;

                & span {
                    padding: 0px 5px;
                    position: absolute;
                    font-size: 12px;
                    right: -10px;
                    top: -10px;
                    color: red;
                    background: #665d5d71;
                    border-radius: 5px;
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>
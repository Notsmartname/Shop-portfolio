import { defineStore } from "pinia";

import axios from "axios";
import { computed, ref } from "vue";
import router from "../route/router";

// https://dummyjson.com/products

export const useProductStore = defineStore('productStore', {

    state: () => {
        return {
            products: [],
            url: 'https://dummyjson.com/products',
            loader: false,
            page: 0,
            pageSize: 12,
            totalPages: 0,
            productId: null,
            singleProduct: null,
        }
    },

    actions: {
        async getProducts() {
            try {
                this.loader = true;
                const { data } = await axios.get(`${this.url}`, {
                    params: {
                        limit: this.pageSize,
                        skip: this.pageSize * this.page,
                    }
                });

                const dataForPage = await axios.get(`${this.url}`);
                this.products = data.products;
                this.totalPages = Math.ceil(dataForPage.data['total'] / this.pageSize);
                this.loader = false;

            } catch (error) {
                router.push({ name: 'Error' });
            }
        },

        async getSingleProduct(id) {
            try {
                this.loader = true;
                this.productId = id;
                const response = await axios.get(`${this.url}/${this.productId}`);

                this.singleProduct = response.data;

                this.loader = false;

            } catch (error) {
                router.push({ name: 'Error' });
            }
        },

    },

})


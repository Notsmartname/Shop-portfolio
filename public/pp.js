<template>
    <div>
        <ul>
            <li v-for="item in paginatedData" :key="item.id">{{ item.name }}</li>
    </ul>

    <div>
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div >
  </div >
</template >

    <script>
        export default {
            data() {
    return {
            data: [
        {id: 1, name: 'Item 1' },
        {id: 2, name: 'Item 2' },
        // ... другие элементы данных ...
        {id: 10, name: 'Item 10' },
        {id: 11, name: 'Item 11' },
        // ... еще больше элементов данных ...
        ],
        pageSize: 5, // количество элементов на странице
        currentPage: 1,
    };
  },
        computed: {
            totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
        paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.data.slice(start, end);
    },
  },
        methods: {
            nextPage() {
      if (this.currentPage < this.totalPages) {
            this.currentPage += 1;
      }
    },
        prevPage() {
      if (this.currentPage > 1) {
            this.currentPage -= 1;
      }
    },
  },
};
    </script>
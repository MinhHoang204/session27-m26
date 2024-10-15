<template>
    <div>
      <label for="records-per-page">Số bản ghi mỗi trang: </label>
      <select v-model="recordsPerPage" @change="updatePagination">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
  
      <div>
        <button @click="prevPage" :disabled="currentPage === 1">Trang trước</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Trang sau</button>
      </div>
  
      <p>Trang {{ currentPage }} trên {{ totalPages }}</p>
    </div>
</template>
  
<script>
  export default {
    props: ['totalPages', 'currentPage'],
    data() {
      return {
        recordsPerPage: 10,  // Default to 10 records per page
        options: [5, 10, 20, 50]  // Options for number of records per page
      };
    },
    methods: {
      updatePagination() {
        this.$emit('changeRecordsPerPage', this.recordsPerPage);  // Emit selected number of records per page
      },
      prevPage() {
        this.$emit('changePage', this.currentPage - 1);  // Go to previous page
      },
      nextPage() {
        this.$emit('changePage', this.currentPage + 1);  // Go to next page
      }
    }
  };
</script>
  
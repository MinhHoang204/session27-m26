<template>
    <div>
      <input v-model="searchQuery" placeholder="Tìm kiếm theo email" @input="searchEmployee" />
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        searchQuery: '', // The search keyword
      };
    },
    methods: {
      searchEmployee() {
        this.$emit('search', this.searchQuery);  // Emit the search query to parent
      }
    }
  };
</script>
  
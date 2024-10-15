<template>
  <div>
    <EmployeeSearch @search="searchEmployee" />
    <EmployeeRow v-for="(employee, index) in paginatedEmployees" 
      :key="employee.id" 
      :employee="employee" 
      :index="index"
    />
  
    <EmployeePagination 
      :totalPages="totalPages" 
      :currentPage="currentPage" 
      @changeRecordsPerPage="updateRecordsPerPage" 
      @changePage="changePage"
    />
  </div>
</template>

<script>
import EmployeeSearch from './components/EmployeeSearch.vue';
import EmployeeRow from './components/EmployeeRow.vue';
import EmployeePagination from './components/EmployeePagination.vue';
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
      filteredEmployees: [],
      currentPage: 1,
      totalPages: 1,
      recordsPerPage: 10
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      const url = `http://localhost:3000/employees?_page=${this.currentPage}&_limit=${this.recordsPerPage}`;
      axios.get(url)
        .then(response => {
          this.filteredEmployees = response.data;
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.recordsPerPage);  // Total pages calculation
        });
    },
    searchEmployee(searchQuery) {
      if (!searchQuery) {
        this.fetchEmployees();  // Fetch all employees if no search query
      } else {
        axios.get(`http://localhost:3000/employees?email_like=${searchQuery}`)
          .then(response => {
            this.filteredEmployees = response.data;
          });
      }
    },
    updateRecordsPerPage(newLimit) {
      this.recordsPerPage = newLimit;
      this.fetchEmployees();  // Fetch data with new limit
    },
    changePage(newPage) {
      this.currentPage = newPage;
      this.fetchEmployees();  // Fetch data for new page
    }
  }
};
</script>

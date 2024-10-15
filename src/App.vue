<template>
  <div>
    <button @click="showForm = true">Thêm mới nhân viên</button>
    <EmployeeForm v-if="showForm" :employees="employees" @submit="addEmployee" @close="showForm = false" />
    <EmployeeList></EmployeeList>
  </div>
</template>

<script>
import EmployeeForm from './components/baitap/EmployeeForm.vue';
import EmployeeList from './components/baitap/EmployeeList.vue';
export default {
  data() {
    return {
      employees: [],
      showForm: false
    };
  },
  methods: {
    addEmployee(employee) {
      this.$store.dispatch('addEmployee', employee);  // Calls API to add employee
      this.showForm = false;  // Close form
    }
  }
};
</script>

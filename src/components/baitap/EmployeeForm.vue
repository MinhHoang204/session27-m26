<template>
  <div v-if="showForm">
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Họ và tên:</label>
        <input v-model="employee.name" placeholder="Họ và tên" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      
      <div>
        <label>Email:</label>
        <input v-model="employee.email" placeholder="Email" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      
      <div>
        <label>Ngày sinh:</label>
        <input type="date" v-model="employee.dob" />
        <p v-if="errors.dob" class="error">{{ errors.dob }}</p>
      </div>
      
      <button type="submit">Cập nhật</button>
      <button @click="closeForm">Hủy</button>
    </form>
  </div>
</template>


<script>
export default {
  props: ['showForm', 'employeeData', 'employees'],
  data() {
    return {
      employee: { ...this.employeeData }, // Clone employee data for editing
      errors: {}
    };
  },
  methods: {
    validateForm() {
      const errors = {};
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const currentDate = new Date().toISOString().split("T")[0];

      if (!this.employee.name) {
        errors.name = "Họ và tên không được để trống.";
      }

      if (!this.employee.email) {
        errors.email = "Email không được để trống.";
      } else if (!emailPattern.test(this.employee.email)) {
        errors.email = "Email không đúng định dạng.";
      } else if (this.employees.some(emp => emp.email === this.employee.email && emp.id !== this.employee.id)) {
        errors.email = "Email đã tồn tại.";
      }

      if (this.employee.dob > currentDate) {
        errors.dob = "Ngày sinh không được lớn hơn ngày hiện tại.";
      }

      this.errors = errors;

      return Object.keys(errors).length === 0;
    },

    handleSubmit() {
      if (this.validateForm()) {
        this.$emit('updateEmployee', this.employee);
      }
    },
    
    closeForm() {
      this.$emit('close');
    }
  }
};
</script>

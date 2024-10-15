<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ employee.name }}</td>
    <td>{{ employee.dob }}</td>
    <td>{{ employee.email }}</td>
    <td>{{ employee.address }}</td>
    <td><span :class="employee.status === 'active' ? 'green' : 'red'">{{ employee.status }}</span></td>
    <td>
      <button @click="toggleBlock">{{ employee.status === 'active' ? 'Chặn' : 'Bỏ chặn' }}</button>
      <BlockModal :show="showBlockModal" :isBlocking="isBlocking" @confirm="blockEmployee" @cancel="closeModal" />
    </td>
  </tr>
</template>

<script>
import BlockModal from './BlockModal.vue';

export default {
  props: ['employee', 'index'],
  components: { BlockModal },
  data() {
    return {
      showBlockModal: false,
      isBlocking: true
    };
  },
  methods: {
    toggleBlock() {
      this.isBlocking = this.employee.status === 'active';
      this.showBlockModal = true;
    },
    blockEmployee() {
      this.employee.status = this.isBlocking ? 'inactive' : 'active';
      this.$emit('updateStatus', this.employee);  // Emit the event to parent
      this.showBlockModal = false;
    },
    closeModal() {
      this.showBlockModal = false;
    }
  }
};
</script>

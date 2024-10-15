<template>
    <div v-if="show">
      <div class="modal">
        <p>Bạn có chắc chắn muốn xóa nhân viên này?</p>
        <button @click="confirmDelete">Xác nhận</button>
        <button @click="cancelDelete">Hủy</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: ['show'],
    methods: {
      confirmDelete() {
        this.$emit('confirm');
      },
      cancelDelete() {
        this.$emit('cancel');
      }
    }
  };
  </script>
  
<style></style>
  
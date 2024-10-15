<template>
    <div v-if="show">
      <div class="modal">
        <p>Bạn có chắc chắn muốn {{ isBlocking ? 'chặn' : 'bỏ chặn' }} nhân viên này?</p>
        <button @click="confirm">Xác nhận</button>
        <button @click="cancel">Hủy</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: ['show', 'isBlocking'],
    methods: {
      confirm() {
        this.$emit('confirm');
      },
      cancel() {
        this.$emit('cancel');
      }
    }
  };
</script>
  
<style></style>
  
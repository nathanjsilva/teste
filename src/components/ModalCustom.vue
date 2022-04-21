<template>
  <div
    class="modal fade"
    id="modalAtualizar"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalAtualizar">Modal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary fechar-editar" data-bs-dismiss="modal" @click="close" >
              Fechar
            </button>
            <slot name="footer"> 
            </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalCustom",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>

.fechar-editar{
    background-color: rgb(221, 15, 15);
}
</style>
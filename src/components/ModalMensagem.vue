<template>
  <div class="modal fade" id="modalExcluir" tabindex="-1" aria-labelledby="modalExcluirlLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalExcluirlLabel">Cancelamento do pedido</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <strong>
            {{msg}}
          </strong>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary fechar" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" @click="callback">Excluir Pedido</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fechar{
    background-color: rgb(221, 15, 15);
}

.btn-primary {
    background-color: #222;
}
</style>
<script>
export default {
  name: "ModalMensagem",
  props: {
    callback: Function,
    msg: String,
  },
};
</script>

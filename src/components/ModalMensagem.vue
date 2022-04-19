<template>
  <div
    class="modal fade"
    id="excluir"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
     data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="callback"  data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalMensagem",
  props: {
    callback: Function,
    msg: String,
  },
};
</script>

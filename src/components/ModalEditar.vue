<template>
  <div class="modal fade" id="modalEditar" tabindex="-1" aria-labelledby="modalEditarLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditar">Atualizar Pedido</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input type="hidden" :id="id">
          <select v-model="novoStatus" class="form-select">
          <option selected disabled value="">---Selecione um status---</option>
          <option>Pagamento</option>
          <option>Realizando</option>
          <option>Finalizado</option>
        </select>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary fechar" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="callback">Salvar Pedido</button>
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
  name: "ModalCustom",
  props: {
    callback: Function,
    id: Number
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async updateBurguer(id) {
      console.log("entrei", id, this.novoStatus);
      const dataJson = JSON.stringify({status_pedido: this.novoStatus});
      const req = await fetch(
        `http://127.0.0.1:8000/api/atualizar/pedido/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type" : "application/json" },
          body: dataJson
        }
      );

      // eslint-disable-next-line
      const res = await req.json()
      console.log(res)
      this.getPedidos();
    },
  },
};
</script>

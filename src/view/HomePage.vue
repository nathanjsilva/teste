<template>
  <div class="container">
    <div class="header">
      <h2>Pedidos</h2>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalForm">
        Criar Pedido
      </button>
      <ModalForm />
    </div>
    <table class="table" v-if="todosPedidos">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome Cliente</th>
          <th scope="col">Documento Cliente</th>
          <th scope="col">Nome Sanduíche</th>
          <th scope="col">Quantidade Sanduíche</th>
          <th scope="col">Valor Sanduíche</th>
          <th scope="col">Status Pedido</th>
          <th scope="col">Valor Total</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in todosPedidos" :key="pedido.id">
          <td>{{ pedido.id }}</td>
          <td>{{ pedido.nome_cliente }}</td>
          <td>{{ pedido.documento_cliente }}</td>
          <td>{{ pedido.nome_sanduiche }}</td>
          <td>{{ pedido.qtd_sanduiche }}</td>
          <td>{{ pedido.valor_sanduiche }}</td>
          <td>{{ pedido.status_pedido }}</td>
          <td>{{ pedido.valor_total }}</td>
          <td class="botao">
            <button class="btn excluir" type="button" data-bs-toggle="modal" data-bs-target="#modalExcluir" @click="this.pedido_id = pedido.id">
              <strong>X</strong>
            </button>
            <button class="btn ver" type="button" data-bs-toggle="modal" data-bs-target="#modalAtualizar" @click="this.pedido = pedido">
              V
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
    <ModalMensagem 
      msg="Deseja realmente cancelar esse pedido?"
      :callback="deleteBurger"
    />

    <ModalCustom v-show="isModalVisible" @close="closeModal">
      <template v-slot:body>
        <select v-model="novoStatus"  class="form-select">
          <option selected disabled value="">---Selecione um status---</option>
          <option>Preparação</option>
          <option>Realizando</option>
          <option>Finalizado</option>
        </select>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-primary editar" @click="updateBurguer(pedido.id)" data-bs-dismiss="modal">
          Salvar
        </button>
      </template>
    </ModalCustom>
  </div>
</template>
<script>
import ModalMensagem from "../components/ModalMensagem.vue";
import ModalCustom from "../components/ModalCustom.vue";
import ModalForm from "../components/ModalForm.vue";

export default {
  name: "HomePage",
  components: {
    ModalMensagem,
    ModalCustom,
    ModalForm
  },
  mounted() {
    this.getPedidos();
  },
  data() {
    return {
      todosPedidos: null,
      pedido_id: null,
      nome: null,
      isModalVisible: false,
      pedido: null,
      novoStatus: null
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async getPedidos() {
      const req = await fetch("http://127.0.0.1:8000/api/pedidos");
      const data = await req.json();
      console.log(data);
      this.todosPedidos = data.data;
      console.log("pedidos", this.todosPedidos);
    },
    async deleteBurger() {
      const req = await fetch(
        `http://127.0.0.1:8000/api/deletar/pedido/${this.pedido_id}`,
        {
          method: "DELETE",
        }
      );

      // eslint-disable-next-line
      const res = await req.json();
      this.getPedidos();
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.excluir {
  font-weight: 900;
  color: red;
}

.ver {
  font-weight: 900;
  color: green;
}

.btn-primary {
  background-color: #222;
  border-bottom: 4px solid #111;
}
.botao {
  width: 10%;
}
.table {
  width: 100%;
}

.editar {
    background-color: #222;
}
</style>

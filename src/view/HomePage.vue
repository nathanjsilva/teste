<template>
  <div class="container">
    <div class="header">
      <h2>Pedidos</h2>
      <button type="button" class="btn enviarPedido" data-bs-toggle="modal" data-bs-target="#modalForm" data-toggle="tooltip" title="Fazer Pedido">
        <Food />
      </button>
      <button type="button" class="btn cardapio" data-bs-toggle="modal" data-toggle="tooltip" title="Cardápio" data-bs-target="#modalCardapio">
          <MenuIcon />
      </button>
      <ModalForm />
      <ModalCardapio />
    </div>
    <table class="table" v-if="todosPedidos">
      <thead>
        <tr>
          <th  class="text-center" scope="col">#</th>
          <th  class="text-center" scope="col">Nome Cliente</th>
          <th  class="text-center" scope="col">Documento</th>
          <th  class="text-center" scope="col">Nome</th>
          <th  class="text-center" scope="col">Quantidade</th>
          <th  class="text-center" scope="col">Valor Sanduíche</th>
          <th  class="text-center" scope="col">Status Pedido</th>
          <th  class="text-center" scope="col">Valor Total</th>
          <th  class="text-center" scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in todosPedidos" :key="pedido.id">
          <td class="text-center">{{ pedido.id }}</td>
          <td class="text-center">{{ pedido.nome_cliente }}</td>
          <td class="text-center">{{ pedido.documento_cliente }}</td>
          <td class="text-center">{{ pedido.nome_sanduiche }}</td>
          <td class="text-center">{{ pedido.qtd_sanduiche }}</td>
          <td class="text-center">{{ pedido.valor_sanduiche }}</td>
          <td class="text-center">{{ pedido.status_pedido }}</td>
          <td class="text-center">{{ pedido.valor_total }}</td>
          <td class="botao">
            <button class="btn excluir" type="button" data-bs-toggle="modal" data-bs-target="#modalExcluir" data-toggle="tooltip" title="Excluir Pedido" @click="this.pedido_id = pedido.id">
              <TrashCan />
            </button>
            <button class="btn ver" type="button" data-bs-toggle="modal" data-bs-target="#modalAtualizar" data-toggle="tooltip" title="Atualizar Pedido" @click="this.pedido = pedido">
              <Update />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="text-center">
        <span ><strong>Não há pedidos a serem exibidos.</strong></span>
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
          <option>A fazer</option>
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
import ModalCardapio from '../components/ModalCardapio.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import Food from 'vue-material-design-icons/Food.vue';
import TrashCan from 'vue-material-design-icons/TrashCan.vue';
import Update from 'vue-material-design-icons/Update.vue';

export default {
  name: "HomePage",
  components: {
    ModalMensagem,
    ModalCustom,
    ModalForm,
    ModalCardapio,
    MenuIcon,
    Food,
    TrashCan,
    Update
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
      this.todosPedidos = data.data;
    },

    async deleteBurger() {
      const req = await fetch(
        `http://127.0.0.1:8000/api/deletar/pedido/${this.pedido_id}`,
        {
          method: "DELETE",
        }
      );

      const status = req.status
      status == 200 ? this.$toast.success(`Pedido excluído com sucesso`, {position: 'top'}) :  this.$toast.error("Ocorreu um erro ao excluir o pedido")
      setTimeout(this.$toast.clear, 2000)
      location.reload();
    },
    
    async updateBurguer(id) {
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
      const status = req.status
      status == 200 ? this.$toast.success(`Pedido atualizado com sucesso`, {position: 'top'}) :  this.$toast.error("Ocorreu um erro ao atualizar o pedido")
      setTimeout(this.$toast.clear, 2000)
      location.reload()
    },
  },
};
</script>
<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .excluir {
    font-weight: 500;
    color: red;
  }

  .cardapio {
    background-color: rgb(221, 15, 15);
    color: rgb(255, 255, 255);

  }

  .enviarPedido {
    margin-left: 80%;
    background-color: #222;
    color: rgb(255, 251, 3);

  }

  .ver {
    font-weight: 500;
    color: green;
  }

  .btn-primary {
    background-color: #222;
    border-bottom: 4px solid #111;
  }
  .botao {
    width: 11%;
  }
  .table {
    width: 100%;
  }

  .editar {
      background-color: #222;
  }
</style>

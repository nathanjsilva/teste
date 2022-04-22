<template>
    <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="modalFormLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <form id="burger-form" method="POST" @submit="createBurger">
            <div class="modal-header">
                <h5 class="modal-title" id="modalFormLabel">
                Informações do Pedido
                </h5>
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="panel-body">
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nome Cliente:</label>
                        <input type="text" class="form-control" name="nome_cliente" id="nome_cliente" v-model="nome_cliente" required/>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Documento Cliente:</label>
                        <input type="text"  class="form-control" name="documento_cliente" id="documento_cliente" v-model="documento_cliente" required/>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nome Sanduíche</label>
                        <select v-model="nome_sanduiche" class="form-select" required>
                            <option selected disabled>Selecione</option>
                            <option>Hamburguer</option>
                            <option>X-Tudo</option>
                            <option>X-Bacon</option>
                            <option>X-Egg</option>
                            <option>X-Vegano</option>
                        </select>
                    </div>
                    <div class="mb-3"> 
                        <label for="recipient-name" class="col-form-label" >Quantidade Sanduíche:</label > 
                        <input type="text" class="form-control" name="qtd_sanduiche" id="recipient-name" v-model="qtd_sanduiche" required/>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary fechar" data-bs-dismiss="modal">
                    Fechar
                </button>
                <button type="submit" class="btn btn-primary" >Enviar Pedido</button>
            </div>
            </form>
        </div>
        </div>
    </div>
</template>
<style scoped>
    label { 
        float: left;
        margin-right: 20%;
    }

    .fechar {
        background-color: rgb(221, 15, 15);
    }

    .btn-primary {
        background-color: #222;
    }

</style>
<script>
export default {
    name: "ModalForm",
    data() {
        return {
        nome_cliente: null,
        documento_cliente: null,
        nome_sanduiche: null,
        qtd_sanduiche: null,
        valor_sanduiche: null ,
        isModalVisible: true
        };
    },
    methods: {
        closeModal() {
            this.isModalVisible = false;
        },
        async createBurger(e) {
            console.log("entrou");
            e.preventDefault();
            if(this.nome_sanduiche == 'Hamburguer') this.valor_sanduiche = '10.00'
            if(this.nome_sanduiche == 'X-Tudo')     this.valor_sanduiche = '25.00'
            if(this.nome_sanduiche == 'X-Bacon')    this.valor_sanduiche = '15.00'
            if(this.nome_sanduiche == 'X-Egg')      this.valor_sanduiche = '12.00'
            if(this.nome_sanduiche == 'X-Vegano')   this.valor_sanduiche = '30.00'
            const data = {
                nome_cliente: this.nome_cliente,
                documento_cliente: this.documento_cliente,
                nome_sanduiche: this.nome_sanduiche,
                qtd_sanduiche: this.qtd_sanduiche,
                valor_sanduiche: this.valor_sanduiche,
                status_pedido: "Pagamento",
            };
        
            const dataJson = JSON.stringify(data);

            const req = await fetch("http://127.0.0.1:8000/api/inserir/pedido", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJson,
            });

            const status = req.status
            status == 200 ? this.$toast.success(`Pedido realizado com sucesso`, {position: 'top'}) :  this.$toast.error("Ocorreu um erro ao realizar o pedido")
            setTimeout(this.$toast.clear, 2000)
            location.reload()
        },
    },
};
</script>

<template>
  <div class="modal fade" id="modalCardapio" tabindex="-1" aria-labelledby="modalExcluirlLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalExcluirlLabel">Cardápio</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div>
            <div class="text-center">
                <label for=""><strong>Hamburguer:</strong> R$10,00</label>
            </div> 
            <div class="text-center">
                <label for=""><strong>X-Bacon:</strong> R$15,00</label>
            </div> 
            <div class="text-center">
                <label for=""><strong>X-Egg:</strong> R$12,00</label>
            </div> 
            <div class="text-center">
                <label for=""><strong>X-Tudo:</strong> R$25,00</label>
            </div> 
            <div class="text-center">
                <label for=""><strong>X-Vegano:</strong> R$30,00</label>
            </div> 
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary fechar" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fechar{
    background-color: rgb(221, 15, 15);
}


</style>
<script>
export default {
  name: "ModalCardapio",
};
</script>
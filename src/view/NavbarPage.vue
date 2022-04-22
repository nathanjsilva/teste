<template>
    <div>
        <div id="nav">
          <strong for="">Black Burguer</strong>
          <router-link id="logo-url" to="/">
            <img id="logo" src="../../public/img/logo.png">
          </router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: "NavbarPage"
}
</script>

<style scoped>
  #nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
  }

  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo {
    width: 40px;
    height: 40px;
  }

  #nav strong {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  #nav strong:hover {
    color: #FFF;
  }
</style>
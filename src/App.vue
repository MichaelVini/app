<template>
  <div id="app">
    <section class="profile">
      <div class="info-profile">
        <img alt="Imagem de Perfil" src="./assets/profile.jpg" />
        <p>Nome: <b>Gustavo</b></p>
        <p>Email: <b>gustavo@gmail.com</b></p>
        <p>Link github: <b>github.com/Gustavo</b></p>
        <p>Localização: <b>São José dos Campos - SP</b></p>
      </div>
      <div class="content">
        <PilarCard title="Tecnologia" />
        <PilarCard title="Pessoas" />
        <PilarCard title="Produto" />
      </div>
    </section>
  </div>
</template>

<script>
import PilarCard from "./components/PilarCard.vue";

export default {
  name: "App",
  components: {
    PilarCard,
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style >
ul li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app h3 {
  text-align: center;
  font-weight: bold;
  margin-top: 25px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header input {
  margin-left: 10px;
}

.info-profile p {
  text-align: initial;
  margin-top: 20px;
}

.general {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.competencia {
  display: flex;
  flex-direction: column;
}

.profile img {
  width: 300px;
  margin-left: 20px;
  margin: 0 auto;
}

.profile {
  display: flex;
  flex-direction: column;
}

@media (min-width: 700px) {
  .profile {
    flex-direction: inherit;
    margin-left: 30px;
  }

  .content {
    display: flex;
    justify-content: center;
  }
}
</style>

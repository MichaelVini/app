<template>
  <div id="app">
    <section class="profile">
      <header></header>
      <div class="info-profile">
        <img alt="Imagem de Perfil" src="./assets/michael.jpeg" />
        <p>
          Nome: <b>{{ info.data.name }}</b>
        </p>
        <p>Email: <b>gustavo@gmail.com</b></p>
        <p>
          Localização: <b>{{ info.data.location }}</b>
        </p>
        <p>Link github: <b>github.com/Gustavo</b></p>
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
import axios from "axios";

export default {
  name: "App",
  components: {
    PilarCard,
  },
  data: function () {
    return {
      info: null,
      description: null,
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/MichaelVini")
      .then((response) => (this.info = response));
  },
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
  margin-left: 25px;
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
  border-radius: 50%;
}

.profile {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

footer {
  height: 40px;
  align-items: center;
  background-color: #0b5ed7;
  color: white;
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

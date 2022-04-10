<template>
  <section class="pilar">
    <details class="teste">
      <summary class="summary">{{ title }}</summary>
      <Item />
      <Item />
    </details>
    <div class="content" v-if="showPilar"></div>
  </section>
</template>
<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  props: {
    title: String,
  },
  data() {
    return {
      showPilar: false,
      data: null,
    };
  },
  methods: {
    showPilarInfo() {
      this.showPilar = !this.showPilar;
    },
  },
};
</script>
<style scoped>
.teste {
  padding: 20px 30px;
}

.summary {
  text-align: initial;
  font-size: 20px;
  margin: 20px;
}

@media (min-width: 700px) {
  .teste {
    padding: 0 30px;
  }

  .summary {
    margin-top: 0;
  }
}
</style>
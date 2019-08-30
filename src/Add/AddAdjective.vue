<template>
  <div>
      <h3>Lägg till ett nytt adjektiv</h3>
      <div>
          <label for="">Tyska:</label>
          <input type="text" v-model="german" placeholder="Tyska">
      </div>
      <div>
          <label for="">Svenska:</label>
          <input type="text" v-model="swedish" placeholder="Svenska">
      </div>

      <button @click="addAdjective">Add</button>
  </div>
</template>

<script>
export default {
    name: 'AddAdjective',
    data() {
        return {
            german: '',
            swedish: ''
        }
    },
    methods: {
        addAdjective() {
            const adjective = {
                id: this.$store.getters.getNextAdjectiveId,
                german: this.german,
                swedish: this.swedish
            };
            this.$store.dispatch('addAdjective', adjective);

            this.german = '';
            this.swedish = '';
        }
    }
}
</script>

<style>

</style>
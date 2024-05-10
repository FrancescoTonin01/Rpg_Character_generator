<template>
  <div id="app">
    <button v-on:click="toggle='character-viewer'; getCharacters()">View all Character</button>
    <button v-on:click="toggle='character-creator'">Create Character</button>
    <CharacterViewer v-show="toggle==='character-viewer'" :characters="characters" @delete-item="deleteCharacter"/>
    <CharacterCreator v-show="toggle==='character-creator'"/>
</div>
</template>

<script>
import CharacterViewer from './components/CharacterViewer.vue'
import CharacterCreator from './components/CharacterCreator.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    CharacterViewer,
    CharacterCreator
  },
  data:function () {
    return{
      toggle:"character-viewer",
      characters:Array
    }
  },
  methods:{
    getCharacters: function(){
      axios
          .get('http://localhost:3000/characters/')
          .then(response => (this.characters = response.data))
    },
    deleteCharacter(id, i) {
  axios
    .delete(`http://localhost:3000/characters/${id}`)
    .then(() => {
      // Dopo aver eliminato con successo il personaggio, emetti l'evento 'delete-item'
      // in modo che il componente CharacterViewer possa aggiornare la sua lista di personaggi.
      this.characters.splice(i, 1)
    })
    .catch(error => {
      console.error('Errore durante l\'eliminazione del personaggio:', error);
    });
}
},
  mounted: function(){
    this.getCharacters();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
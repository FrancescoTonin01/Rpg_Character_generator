<template>
  <div id="app">
    <div class="buttoncontainer">
    <button class="button-3" role="button" v-on:click="toggle='character-viewer'; getCharacters()">View all Character</button>
    <button class="button-3" v-on:click="toggle='character-creator'">Create Character</button>
  </div>
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
  height:100%;
  width: 100%;

}
.buttoncontainer{
  display: flex;
  justify-content: space-between;
  margin-right: 20%;
  margin-left: 20%;
}

.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

</style>
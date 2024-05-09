<template>
  <div class="character-viewer">
    <h1>Character Viewer</h1>
    <p v-for="character in characters" :key="character._id">{{character.name}} is a {{character.profession}}!
      <button @click="deleteCharacter(character._id)">Delete</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CharacterViewer',
  props:{
      characters:Array,
    },
    methods:{
      deleteCharacter(id){
         axios
            .delete(`http://localhost:3000/characters/${id}`,{});
          
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

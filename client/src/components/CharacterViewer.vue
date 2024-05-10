<template>
  <div class="character-viewer">
    <h1>Character Viewer</h1>
    <p v-for="(character, i) in characters" :key="character._id">{{character.name}} is a {{character.profession}}!
      <button @click="deleteCharacter(character._id, i)">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CharacterViewer',
  props:{
      characters:Array,
    },
    methods:{
      deleteCharacter(id, i){
            this.$emit('delete-item', id, i);
          
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
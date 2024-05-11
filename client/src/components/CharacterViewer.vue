<template>
  <div class="character-creator">
    <h1 class="title">Character Viewer</h1>
    <p class="list" v-for="(character, i) in characters" :key="character._id">{{character.name}} is a {{character.profession}}!
     <button class="deleteb" @click="deleteCharacter(character._id, i)">Delete</button>
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

.title{
  padding:1rem;
}
.list{
  font-weight: bold;
  font-size: medium;  
}
.deleteb{
  border: 0;
  background-color: red;

}
</style>
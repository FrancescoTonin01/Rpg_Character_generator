<template>
  <div class="character-creator">
    <h1 class="title">Character Viewer</h1>
    <div class="blk">
    <p class="list" v-for="(character, i) in characters" :key="character._id">{{character.name}} is a {{character.profession}}!
     <button class="deleteb" @click="deleteCharacter(character._id, i)">Delete</button>
    </p>
  </div>
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
  width: 100%;
  height: fit-content;
}
.blk{
  border-style: dashed;
  display: flex;
  flex-wrap:wrap;  
  justify-content: center;
}
.list{
  font-weight: bold;
  font-size: medium; 
}
.deleteb{
  border: 0;
  border-radius: 12%;
  font-weight: bold;
  background: radial-gradient(circle, rgba(123, 255, 0, 0.527) 0%, rgb(44, 148, 36) 100%);
  margin-left: 8rem;
  padding: 2%;
  padding-left: 5%;
  padding-right: 5%;

}
</style>
<template>
  <div class="bg">
    <div class="character-creator">
        <div class="toptext">Character Creator</div>
      <div class="charactername" for="character-name">Character Name:
      <input type="text" id="character-name" v-model="name" placeholder="Enter a name"></div>
      <div class="characterp" for="professions-list">Character Profession      </div>
      <div class="custom-select" >
        <select id="professions-list" v-model="profession">
        <option value="Mage">Mage</option>
        <option value="Thief">Thief</option>
        <option value="Warrior">Warrior</option>
      </select>
    </div>
      <p>{{ name }}</p>
      <p>{{profession }}</p>
      <button v-on:click="postCharacter">Create Character</button>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'CharacterCreator',
    data: function(){
        return{
            name:null,
            profession:null
        }
    },
    methods:{
      postCharacter: function(){
        axios
            .post('http://localhost:3000/characters',{
              name:this.name,
              profession:this.profession
            });
      }
    }
  }

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .bg{
    width: auto;
    height: fit-content;

  }
  .character-creator{
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(123, 255, 0, 0.527) 0%, rgb(44, 148, 36) 100%);
    width: 35rem;
    height:35rem;
    margin:0 auto;
    border-radius: 4rem;
  }
  .toptext{
    margin-top: 2rem;  
    font-size: 2rem;
    font-weight: bold;
    width: auto;
    padding-top: 1rem;
    height: fit-content;
    margin-bottom: 2rem;
  }
  .charactername{
    font-size: 120%;
  }
  .characterp{
    font-size: 120%;
  }


  </style>
  
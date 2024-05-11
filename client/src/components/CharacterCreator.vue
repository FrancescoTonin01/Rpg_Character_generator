<template>
  <div class="bg">
    <div class="character-creator">
        <div class="toptext">Character Creator</div>
      <div class="charactername" for="character-name">Character Name:
      <input class="form" type="text" id="character-name" v-model="name" placeholder="Enter a name"></div>
      <div class="characterp" for="professions-list">Character Profession      </div>
      <div class="custom-select"  >
        <select class="select" id="professions-list" v-model="profession">
        <option value="Mage">Mage</option>
        <option value="Thief">Thief</option>
        <option value="Warrior">Warrior</option>
      </select>
    </div>
    <div class="output">
    <p class="nameu" v-if="name !== null && profession !== null">{{ name }}  is a  {{profession }}</p>
    </div>
      <button class="button-3" v-on:click="postCharacter">Create Character</button>
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
  .button-3{
    margin-top: 1rem;
  }
  .bg{
    width: auto;
    height: fit-content;

  }
  .form{
    border-color: rgba(0, 0, 0, 0);
    border-radius: 10%;
    height: 1.5rem;
    width: 10rem;
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
    padding-top: 1rem;
    padding-bottom: 2%;
  }

  .custom-select {
  position: relative;
  font-family: Arial;
}

.select{
  /* Reset */
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: 20rem;
  padding: 1rem 4rem 1rem 1rem;
  background: var(--arrow-icon) no-repeat right 0.8em center / 1.4em,
    linear-gradient(to left, var(--arrow-bg) 3em, var(--select-bg) 3em);
  color: rgba(0, 0, 0, 0.753);
  font-weight: bold;

  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }
  /* Remove focus outline */
  &:focus {
    outline: none;
    }
  &:hover{
    background-color: #2c974b;
      }
    /* <option> colors */
  option {
    color: inherit;
    background-color: #2c974b;
  }
}
.nameu{
  font-size: large;
  font-weight: bolder;
}
.output{
  display:flex;
  justify-content: center;
}

  </style>
  
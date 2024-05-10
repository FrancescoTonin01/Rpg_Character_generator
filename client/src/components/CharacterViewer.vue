<template>
  <div>
    <div class="character-viewer" v-for="(character, i) in characters" :key="character._id">
      <div class="columns">
        <input type="text" class="column input" v-if="isSelected(character)" v-model="editedDescription">
        <p v-else class="column">
          <span class="tag is-primary">{{ i + 1 }}
</span> {{character.name}} is a {{character.profession}}!
        </p>
        <div class="column is-narrow">
          <span class="icon has-text-primary" @click="isSelected(character) ? unselect() : select(character)">
            <!-- if character is being edited then show close button else edit -->
            <i class="material-icons">{{isSelected(character) ? 'close' : 'edit'}}</i>
          </span>

          <span class="icon has-text-info" @click="isSelected(character) ? updatecharacter(character, i) : removecharacter(character, i)">
            <i class="material-icons">{{ isSelected(character) ? 'save' : 'delete' }}</i>
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CharacterViewer",
  data() {
    return {
      characters:Array,
      selected: {},
      i:0
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/characters/");
    this.characters = response.data;
  },
  methods: {
    async getcharacter() {
      const response = await axios.get("http://localhost:3000/characters/");
      this.characters = response.data;
    },
    async removecharacter(character, i) {
      await axios.delete("http://localhost:3000/characters/" + character._id);
      this.characters.splice(i, 1);
    },

    select(character) {
      this.selected = character;
      this.editedDescription = character.description;
    },

    isSelected(character) {
      return character._id === this.selected._id
    },

    unselect() {
      this.selected = {};
      this.editedDescription = "";
    },

    async updatecharacter(character, i) {
      const response = await axios.put("http://localhost:3000/characters/" + character._id, {
        description: this.editedDescription
      });
      this.characters[i] = response.data;
      alert(`${this.editedDescription} has been updated successfully`)
      this.unselect();
      location.reload();
    }
  },
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}

.width-100 {
  width: 100%;
}

.icon {
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon:hover {
  transform: scale(1.2);
}
</style>

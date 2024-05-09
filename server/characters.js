const express = require('express');
const router = express.Router();
const Character = require('./character');

router.get('/', async (req, res) => {
    try{
        const characters = await Character.find();
        res.json(characters);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});
router.post('/', async (req,res) =>{
    const character = new Character({
        name:req.body.name,
        profession:req.body.profession
    });
    try{
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        if (!deletedCharacter) {
            return res.status(404).json({ message: "Personaggio non trovato" });
        }
        res.status(200).json({ message: "Personaggio eliminato con successo" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
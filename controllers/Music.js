const data = require("./../models/data.json")
const controllerMusic = {

    find: (req,res) => {
        if(req.query.search){
            const query = req.query.search;
            const result = data.filter(song => song.title.toLowerCase().includes (query.toLowerCase()));
            if (result.length === 0){
                return res.status(404).json({ error: "No matching song found."});
            }
            res.status(200).json({result:filter})
        }else{
            res.status(200).json({result:data})
        }
    },

    create: (req,res) => {
        console.log(req.body)
        res.status(201).json({message:"music créer", data : req.body})
    },

    findByID: (req,res) => {
        const id = req.params.id
        if(isNaN(id)){
            return res.status(400).json({error : "don't use text for id"})
        }
        if(id > data.length){
            return res.status(200).json({result : data[id - 1]})
        }
        res.status(200).json({result:data[id-1]})
    },

    //créer la méthode pour envoyé une musique au hasard (random)
    random: (req,res) => {
        const id = req..id
        res.status(200).json({result:data[id-1]})
    }

}

module.exports = controllerMusic
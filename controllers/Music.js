const data = require("./../models/data.json")
const controllerMusic = {

    find: (req,res) => {
        res.status(200).json({result:data})
    },

    findByID: (req,res) => {
        const id = req.params.id
        res.status(200).json({result:data[id-1]})
    }

    //créer la méthode pour envoyé une musique au hasard (random)

}

module.exports = controllerMusic
const Map = require("../models/Map") 

async function get(req, res) {
    const map = new Map()
    
    await map.getAllLocations()
        .then(result => res.send(result))
        .catch(err => res.send(`Failed to load locations - ERROR: ${err}`))
}
 
async function post(req, res) {
    const data = req.body
    const map = new Map(data)
    
    await map.registerLocation()
        .then(() => res.send("Location registered successfully!"))
        .catch(err => res.send(`Failed to register location - ERROR: ${err}`))
}

module.exports = { get, post }
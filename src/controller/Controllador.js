import { connection } from '../database/connection.js'
import { soccer_boots } from '../model/soccer_boots.js'

export const getIndex = async (req, res) => {
    try {
    const cleats = await soccer_boots.findAll();
    console.log(cleats)
    res.render('index.ejs', {cleats})
    } catch(error) {
        res.send(error.message)
    }
};



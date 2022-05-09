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

export const getDetails = async (req, res) => {
    try {
        const soccer_boots_details  = await soccer_boots.findByPk(req.params.id)
        res.render('details.ejs', {soccer_boots_details})
    } catch(error) {
        res.send(error.message)
    }
}

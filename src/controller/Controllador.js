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

export const getDelete = async (req, res) => {
    try {
        await connection.query(`DELETE FROM soccer_boots WHERE id = ${req.params.id}`)
        res.redirect("/")
    } catch(error) {
        res.send(error.message)
    }
}

export const getCreate = async (req, res) => {
    res.render("create.ejs")
}

export const postCreate = async (req, res) => {
    const {model_name, brand_name, description, size, value, link_img} = req.body
    try {
        await connection.query(`INSERT INTO soccer_boots (model_name, brand_name, description, size, value, link_img) VALUES ('${model_name}', '${brand_name}', '${description}', '${size}', '${value}', '${link_img}')`)
    } catch(error) {
        res.send(error.message)
    }
}
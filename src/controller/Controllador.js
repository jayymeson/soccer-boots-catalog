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
    res.render("create.ejs", {toggle: false})
}


export const postCreate = async (req, res) => {
    const {model_name, brand_name, description, size, value, link_img} = req.body
    try {
        if(!model_name){
            res.send('The information cannot return empty.')
        } else if (!brand_name) {
            res.send('The information cannot return empty.')
        } else if (!description) {
            res.send('The information cannot return empty.')
        } else if (!size) {
            res.send('The information cannot return empty.')
        } else if (!value) {
            res.send('The information cannot return empty.')
        } else if (!link_img) {
            res.send('The information cannot return empty.')
        } else {
            await soccer_boots.create({model_name, brand_name, description, size, value, link_img})
            res.render('create.ejs', {toggle: true})
        }
    } catch(error) {
        res.send(error.message)
    }
}

export const getEdit = async (req, res) => {
    try {
        const soccer_boots_edit = await soccer_boots.findByPk(req.params.id)
        res.render('edit.ejs', {soccer_boots_edit})
    } catch(error) {
        res.send(error.message)
    }
}

export const postEdit = async (req, res) => {
    try {
        const {model_name, brand_name, description, size, value, link_img} = req.body
        await soccer_boots.update({
            model_name: model_name,
            brand_name: brand_name,
            description: description, 
            size: size,
            value: value,
            link_img: link_img,
        }, {
           where: {
               id: req.params.id
           } 
        })
        res.redirect('/');
    } catch (error) {
        res.send(error.message)
    } 
}
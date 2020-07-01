const fs = require('fs');
const path = require('path');

const actividadesController = {
    fitness: async(req,res) => {
        res.render('./actividades/fitness')
    },
    funcional: async(req,res) => {
        res.render('./actividades/funcional')
    },
    indoorcycle: async(req,res) => {
        res.render('./actividades/indoor-cycle')
    },
    yoga: async(req,res) => {
        res.render('./actividades/yoga')
    },
    taekwondo: async(req,res) => {
        res.render('./actividades/taekwondo')
    },
    boxtraining: async(req,res) => {
        res.render('./actividades/box-training')
    },
    natacion: async(req,res) => {
        res.render('./actividades/natacion')
    },
    acuatica: async(req,res) => {
        res.render('./actividades/acuatica')
    },
    piletalibre: async(req,res) => {
        res.render('./actividades/pileta-libre')
    }
}

module.exports = actividadesController;
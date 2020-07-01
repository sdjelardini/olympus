const fs = require("fs");
const path = require("path");
const sgMail = require("@sendgrid/mail");

const Controller = {
  home: async (req, res) => {
    res.render("index");
  },
  horarios: async (req, res) => {
    res.render("horarios");
  },
  actividades: async (req, res) => {
    res.render("actividades");
  },
  planes: async (req, res) => {
    res.render("planes");
  },
  asociarse: async (req, res) => {
    res.render("asociarse");
  },
  contacto: async (req, res) => {
    res.render("contacto");
  },
  enterateMas: async (req, res) => {
    res.render("enterateMas");
  },
  olympusEnCasa: async (req, res) => {
    res.render("olympusEnCasa");
  },
  sendMail: async (req, res) => {
    try {
      sgMail.setApiKey("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");
      const msg = {
        to: "olympuslifecenter@gmail.com",
        from: "sdjelardini@hotmail.com",
        // asunto: req.body.asunto,
        subject: "Contacto",
        text: `Nombre:${req.body.nombre} Email:(${req.body.email}) Asunto:${req.body.asunto} Mensaje: ${req.body.mensaje}`
      };
      const response = await sgMail.send(msg);
      if (response) {
        res.render("contacto", {
          mensaje: "El mensaje fue enviado con éxito!"
        });
        return;
      }
    } catch (error) {
      console.log(error.response.body.errors);
      res.render("contacto", { mensaje: "El mensaje no pudo ser enviado" });
      return;
    }
  },
  asociate: async (req, res) => {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const asociate = {
        to: "olympuslifecenter@gmail.com",
        from: "sdjelardini@hotmail.com",
        // asunto: req.body.asunto,
        subject: "Asociarse",
        text: `Nombre: ${req.body.nombre},
        Email: ${req.body.email},
        Dirección: ${req.body.direccion},
        Teléfono: ${req.body.telefono},
        Fecha de nacimiento: ${req.body.nacimiento}`
      };
      const response = await sgMail.send(asociate);
      if (response) {
        res.render("asociarse", {
          mensaje: "Te asociaste con éxito! Nos contactaremos con vos!"
        });
        return;
      }
    } catch (error) {
      console.log(error.response.body.errors);
      res.render("asociarse", { mensaje: "El mensaje no pudo ser enviado" });
      return;
    }
  }
};

module.exports = Controller;

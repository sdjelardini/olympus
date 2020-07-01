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
  sendMail: async (req, res) => {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "olympuslifecenter@gmail.com",
        from: "sdjelardini@hotmail.com",
        // from: req.body.email,
        // asunto: req.body.asunto,
        subject: "Contacto",
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
        html: "<strong>Hey Sofia, you have a new client.</strong>",
      };
      const response = await sgMail.send(msg);
      if (response) {
        res.render("contacto", {
          mensaje: "El mensaje fue enviado con éxito!",
        });
        return;
      }
    } catch (error) {
      console.log(error.response.body.errors);
      res.render("contacto", { mensaje: "El mensaje no pudo ser enviado" });
      return;
    }
  },
};

module.exports = Controller;

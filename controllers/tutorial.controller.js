const db = require("../models/index");
const Tutorial = db.tutorial;
const Op = db.Sequelize.Op;

exports.createTutorial = (req, res) => {
  //Validate Body request
  if (!req.body.title) {
    res.status(400).send({
      message: "Noi Dung khong duoc de trong ...!",
    });

    return;
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    puclished: req.body.puclished ? req.body.puclished : false,
  };

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Co loi say ra...",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Co loi say ra...",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Khong tim thay voi ID: ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Co loi say ra...",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cap Nhat Thanh Cong !!!",
        });
      } else {
        res.send({
          message: `Khong The Cap Nhat voi ID: ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Co loi say ra...",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Xoa Thanh Cong !!!",
        });
      } else {
        res.send({
          message: `Khong The Xoa voi ID: ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Co loi say ra...",
      });
    });
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `Da xoa ${nums} Tutorial trong database.`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Co loi say ra...",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({
    where: {
      published: true,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

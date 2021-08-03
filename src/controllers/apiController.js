const db = require("../../src/models/Members");
const { sequelize } = require("../models");
// const { QueryTypes, DATE } = require("sequelize");
// const path = require("path");
// const multer = require("multer");

module.exports = {
  async loadMember(req, res) {
    const { id } = req.params;
    try {
      const member = await db.Members.findOne({
        where: {
          id,
        },
      });

      res.json(member);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something went wrong" });
      throw err;
    }
  },
};

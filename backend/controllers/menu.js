import db from "../config/db.js";

export const getAllMenuItems = (req, res) => {
  db.query("SELECT * FROM menu", (err, result) => {
    if (err) console.log(err)
    res.send(result);
  });
};

export const getMenuItemById = (req, res) => {

  const q  = "SELECT * FROM menu WHERE id = ?";

  db.query(q, [req.params.id],(err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
};

export const updateMenuItem = (req, res) => {

  const q  = "SELECT * FROM menu WHERE id = ?";

  db.query(q, [req.params.id],(err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
};

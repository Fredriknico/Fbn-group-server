﻿const express = require('express');
const router = express.Router();
const db = require('../../database');

// Delete storage item
router.get('/:id', (req, res) => {
  let sql = `DELETE FROM storage WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Item deleted');
  });
});

module.exports = router;

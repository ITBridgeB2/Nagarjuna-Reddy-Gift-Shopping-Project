const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM demo WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length > 0) return res.status(200).json({ success: true });
    return res.status(401).json({ success: false });
  });
});

module.exports = router;

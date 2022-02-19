
const express = require('express');
const dao     = require('./dao.js');
const app  = express();
const port = process.env.PORT || 5000;



app.get('/api/exhibit', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const id = req.query.id;
    dao.getExibit(id, function (rows) {
        res.write(JSON.stringify(rows.rows));
        res.end();
      });
 });

 app.get('/api/challenges', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const id = req.query.id;
    dao.getChallenges(id, function (rows) {
        res.write(JSON.stringify(rows.rows));
        res.end();
      });
 });

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server listening to ${host}:${port}`);
});
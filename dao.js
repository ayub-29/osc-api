const { json } = require('express/lib/response');


const Pool = require('pg').Pool;
const req = "SELECT * FROM exhibits WHERE id = $1";
const req2 = "SELECT * FROM challenges WHERE exhibitId = $1 ORDER BY challengeId";

const pool = new Pool({
  connectionString: "postgres://xacngelgqpmnmn:3048b636a234849f84aec0723d997605bd3968fd27a2cea7e433e817dedc2b78@ec2-50-19-32-96.compute-1.amazonaws.com:5432/d7olp4shpivj49",
  ssl: {
    rejectUnauthorized: false
  },
    host: "ec2-50-19-32-96.compute-1.amazonaws.com",
    user: "xacngelgqpmnmn",
    port: 5432,
    password: "3048b636a234849f84aec0723d997605bd3968fd27a2cea7e433e817dedc2b78",
    database: "d7olp4shpivj49"
});

module.exports = {
    getExibit(id, success) {
        pool.connect((err, client, done) => {
            if (err) throw err;
            client.query(req, [id],(err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                success(res);
              }
            });
          });
    },

    getChallenges(id, success) {
        pool.connect((err, client, done) => {
            if (err) throw err;
            client.query(req2, [id],(err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                success(res);
              }
            });
          });
    }
  };


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'raise_demo'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * FROM listings', (err,rows) => {
    if(err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
  });

connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});

// CREATE TABLE listings ( id int NOT NULL AUTO_INCREMENT, suite varchar(255), listing_state varchar(50), date_available DATE, date_unavailable DATE, snapshot_date DATE, created_date DATE, last_modified DATE, asking_rate int, building_id int, PRIMARY KEY (id), FOREIGN KEY (building_id) REFERENCES buildings(id));

// CREATE TABLE buildings ( id int NOT NULL AUTO_INCREMENT, building_name varchar(50), snapshot_date DATE, created_date DATE, last_modified DATE, address_id int, PRIMARY KEY (id), FOREIGN KEY (address_id) REFERENCES addresses(id));

// CREATE TABLE addresses ( id int NOT NULL AUTO_INCREMENT, address_suffix varchar(50), street_number varchar(50), route varchar(50), city varchar(50), state varchar(50), country varchar(50), postal_code varchar(50), created_date DATE, last_modified DATE, PRIMARY KEY (id));

// INSERT INTO listings (suite, listing_state) VALUES ('Fremont St, SF', 4);
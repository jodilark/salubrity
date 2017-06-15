DELETE FROM users;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users
(
    id serial primary key
    , first_name varchar
    , last_name varchar
    , dob date
    , email varchar
    , phone int
    , address1 varchar 
    , address2 varchar
    , city varchar
    , state_id int
    , country_id int
    , zip_id varchar
    , weight int
    , height int
    , fitbit_id varchar
    , role_id varchar
    , family_id int
    , hide_from_public boolean
    , condition_date_id int
    , user_stats_id int
);

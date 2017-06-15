DROP TABLE IF EXISTS children CASCADE;
DROP TABLE IF EXISTS condition_date CASCADE;
DROP TABLE IF EXISTS country CASCADE;
DROP TABLE IF EXISTS family CASCADE;
DROP TABLE IF EXISTS fitBitObj CASCADE;
DROP TABLE IF EXISTS instrument CASCADE;
DROP TABLE IF EXISTS medical_history CASCADE;
DROP TABLE IF EXISTS notification_button_layout CASCADE;
DROP TABLE IF EXISTS notification_message CASCADE;
DROP TABLE IF EXISTS protocol CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS sample CASCADE;
DROP TABLE IF EXISTS siblings CASCADE;
DROP TABLE IF EXISTS state CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS test_default_columns CASCADE;
DROP TABLE IF EXISTS test_results CASCADE;
DROP TABLE IF EXISTS test_type CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_default_columns CASCADE;
DROP TABLE IF EXISTS user_stats CASCADE;


-- SCHEMA
-- User table
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
-- Test results table
	CREATE TABLE IF NOT EXISTS test_results
	(
		id serial primary key
		, test_type_id int
		, serial_number varchar
		, sample_id int
		, patient_id int
		, lot_number varchar
		, tags_id int
		, protocol_id int
		, operator_id int
		, instrument_id int
	);

-- Sample table
	CREATE TABLE IF NOT EXISTS sample
	(
		id serial primary key
		, sample_name varchar
		, sample_description varchar
	);

-- Instrument table
	CREATE TABLE IF NOT EXISTS instrument
	(
		id serial primary key
		, instrument_name varchar
		, instrument_description varchar
	);
-- Country table
	CREATE TABLE IF NOT EXISTS country
	(
		id serial primary key
		, country_name varchar
	);
-- State table
CREATE TABLE IF NOT EXISTS state (
  id serial primary key,
  code char(2) not null,
  name varchar(64) not null
);
INSERT INTO state (code,name) VALUES ('AL','Alabama');
INSERT INTO state (code,name) VALUES ('AK','Alaska');
INSERT INTO state (code,name) VALUES ('AS','American Samoa');
INSERT INTO state (code,name) VALUES ('AZ','Arizona');
INSERT INTO state (code,name) VALUES ('AR','Arkansas');
INSERT INTO state (code,name) VALUES ('CA','California');
INSERT INTO state (code,name) VALUES ('CO','Colorado');
INSERT INTO state (code,name) VALUES ('CT','Connecticut');
INSERT INTO state (code,name) VALUES ('DE','Delaware');
INSERT INTO state (code,name) VALUES ('DC','District of Columbia');
INSERT INTO state (code,name) VALUES ('FM','Federated States of Micronesia');
INSERT INTO state (code,name) VALUES ('FL','Florida');
INSERT INTO state (code,name) VALUES ('GA','Georgia');
INSERT INTO state (code,name) VALUES ('GU','Guam');
INSERT INTO state (code,name) VALUES ('HI','Hawaii');
INSERT INTO state (code,name) VALUES ('ID','Idaho');
INSERT INTO state (code,name) VALUES ('IL','Illinois');
INSERT INTO state (code,name) VALUES ('IN','Indiana');
INSERT INTO state (code,name) VALUES ('IA','Iowa');
INSERT INTO state (code,name) VALUES ('KS','Kansas');
INSERT INTO state (code,name) VALUES ('KY','Kentucky');
INSERT INTO state (code,name) VALUES ('LA','Louisiana');
INSERT INTO state (code,name) VALUES ('ME','Maine');
INSERT INTO state (code,name) VALUES ('MH','Marshall Islands');
INSERT INTO state (code,name) VALUES ('MD','Maryland');
INSERT INTO state (code,name) VALUES ('MA','Massachusetts');
INSERT INTO state (code,name) VALUES ('MI','Michigan');
INSERT INTO state (code,name) VALUES ('MN','Minnesota');
INSERT INTO state (code,name) VALUES ('MS','Mississippi');
INSERT INTO state (code,name) VALUES ('MO','Missouri');
INSERT INTO state (code,name) VALUES ('MT','Montana');
INSERT INTO state (code,name) VALUES ('NE','Nebraska');
INSERT INTO state (code,name) VALUES ('NV','Nevada');
INSERT INTO state (code,name) VALUES ('NH','New Hampshire');
INSERT INTO state (code,name) VALUES ('NJ','New Jersey');
INSERT INTO state (code,name) VALUES ('NM','New Mexico');
INSERT INTO state (code,name) VALUES ('NY','New York');
INSERT INTO state (code,name) VALUES ('NC','North Carolina');
INSERT INTO state (code,name) VALUES ('ND','North Dakota');
INSERT INTO state (code,name) VALUES ('MP','Northern Mariana Islands');
INSERT INTO state (code,name) VALUES ('OH','Ohio');
INSERT INTO state (code,name) VALUES ('OK','Oklahoma');
INSERT INTO state (code,name) VALUES ('OR','Oregon');
INSERT INTO state (code,name) VALUES ('PW','Palau');
INSERT INTO state (code,name) VALUES ('PA','Pennsylvania');
INSERT INTO state (code,name) VALUES ('PR','Puerto Rico');
INSERT INTO state (code,name) VALUES ('RI','Rhode Island');
INSERT INTO state (code,name) VALUES ('SC','South Carolina');
INSERT INTO state (code,name) VALUES ('SD','South Dakota');
INSERT INTO state (code,name) VALUES ('TN','Tennessee');
INSERT INTO state (code,name) VALUES ('TX','Texas');
INSERT INTO state (code,name) VALUES ('UT','Utah');
INSERT INTO state (code,name) VALUES ('VT','Vermont');
INSERT INTO state (code,name) VALUES ('VI','Virgin Islands');
INSERT INTO state (code,name) VALUES ('VA','Virginia');
INSERT INTO state (code,name) VALUES ('WA','Washington');
INSERT INTO state (code,name) VALUES ('WV','West Virginia');
INSERT INTO state (code,name) VALUES ('WI','Wisconsin');
INSERT INTO state (code,name) VALUES ('WY','Wyoming');

-- Notification message table
	CREATE TABLE IF NOT EXISTS notification_message
	(
		id serial primary key
		, notification_type varchar
		, needs_feedback boolean
		, message varchar
		, timeout int
		, notification_botton_layout_id int
	);

-- Notification button layout table
	CREATE TABLE IF NOT EXISTS notification_button_layout
	(
		id serial primary key
		, set_type varchar
		, description varchar(500)
	);
	INSERT INTO notification_button_layout
    (set_type, description)
	VALUES 
	(	'confirmation'
		,'a proceed button typically refered to as proceed, save or continue. a cancel button that will return the user to previous state.'
	),
	(
        'user input needed'
		,'a proceed button typically refered to as proceed, save or continue. a cancel button that will return the user to previous state. an ignore but ignore button.'
	),
	(
        'no input needed'
		,'no buttons'
	);


-- Roles table
	CREATE TABLE IF NOT EXISTS roles
	(
		id serial primary key
		, public varchar
		, patient varchar
		, operator varchar
		, admin varchar
	);

-- Family table
	CREATE TABLE IF NOT EXISTS family
	(
		id serial primary key
		, father_first_name varchar
		, father_last_name varchar
		, father_dob date
		, mother_first_name varchar
		, mother_last_name varchar
		, mother_maiden_name varchar
		, mother_dob date
		, siblings_id int
		, children_id int
	);

-- Siblings Table
	CREATE TABLE IF NOT EXISTS siblings
    (
        id serial primary key
        , gender varchar
        , first_name varchar
        , last_name varchar
        , dob date        
	);

-- Children Table
	CREATE TABLE IF NOT EXISTS children
    (
        id serial primary key
        , gender varchar
        , first_name varchar
        , last_name varchar
        , dob date        
	);
    
-- Medical history table
	CREATE TABLE IF NOT EXISTS medical_history
	(
		id serial primary key
		, condition varchar
	);

-- Condition date table
	CREATE TABLE IF NOT EXISTS condition_date
	(
		id serial primary key
		, medical_condition_id int
		, user_id int
		, condition_date date
	);

-- Stats table
	CREATE TABLE IF NOT EXISTS user_stats
	(
		id serial primary key
		, user_id int
		, avg_active_time time
		, avg_bp varchar
		, avg_hr varchar
		, current_weight int
		, avg_sleep varchar
	);


-- test type
	CREATE TABLE IF NOT EXISTS test_type
	(
		id serial primary key
		, name varchar
		, description varchar
	);

-- protocol
	CREATE TABLE IF NOT EXISTS protocol
	(
		id serial primary key
		, protocol_type varchar
	);

-- tags
	CREATE TABLE IF NOT EXISTS tags
	(
		id serial primary key
		, tag_name varchar
	);

-- testDefaultColumn table
	CREATE TABLE IF NOT EXISTS test_default_columns
	(
		id serial primary key
		, column1 varchar
		, column2 varchar
		, column3 varchar
		, column4 varchar
		, column5 varchar
		, column6 varchar
		, column7 varchar
		, column8 varchar
	);


-- userDefaultColumn table
	CREATE TABLE IF NOT EXISTS user_default_columns
	(
		id serial primary key
		, column1 varchar
		, column2 varchar
		, column3 varchar
		, column4 varchar
		, column5 varchar
		, column6 varchar
		, column7 varchar
		, column8 varchar
	);

-- fitbit table
	CREATE TABLE IF NOT EXISTS fitBitObj
	(
		id serial primary key
		, user_id varchar
	)
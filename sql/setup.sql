DROP TABLE IF EXISTS quotesmsg;
DROP TABLE IF EXISTS locationmesa;
DROP TABLE IF EXISTS episodename;
DROP TABLE IF EXISTS airdate;
DROP TABLE IF EXISTS episerialnumber;

CREATE TABLE quotesmsg (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    quote VARCHAR(512) NOT NULL
);

CREATE TABLE locationmesa (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    location_name VARCHAR(512) NOT NULL,
    kind_of VARCHAR(512) NOT NULL,
    dimension VARCHAR(512) NOT NULL
);

CREATE TABLE episodename (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    episode_name VARCHAR(512) NOT NULL
);


CREATE TABLE episerialnumber(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    serial_number VARCHAR(512) NOT NULL
);

CREATE TABLE airdate (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    air_date VARCHAR(512) NOT NULL
);

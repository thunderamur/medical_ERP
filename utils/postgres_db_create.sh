#!/usr/bin/env bash

sudo -u postgres psql -v ON_ERROR_STOP=1 --username postgres <<-EOSQL
    CREATE DATABASE medical_erp_db;
    CREATE USER medical_erp_user WITH PASSWORD 'wNO2-L18q-MiU7';
    ALTER ROLE medical_erp_user SET client_encoding TO 'utf8';
    ALTER ROLE medical_erp_user SET default_transaction_isolation TO 'read committed';
    ALTER ROLE medical_erp_user SET timezone TO 'UTC';
    GRANT ALL PRIVILEGES ON DATABASE medical_erp_db TO medical_erp_user;
    ALTER USER medical_erp_user CREATEDB;
EOSQL

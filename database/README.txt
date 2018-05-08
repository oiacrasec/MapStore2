==================================================================================
======= DB creation
==================================================================================

The system is configured to use a PostgreSQL DBMS.

You have to create the "geostore" DB.
Log in as user postgres.
Create the geostore DB:
   createdb geostore
Create users and schemas:
   psql geostore < 001_setup_db.sql

There will be created 2 schemas:
   geostore
   geostore-test

All configuration files are referring to geostore-test, in order not to perform destructive tests on production DBs.

The Spring based configuration will look for two prop files:
- geostore-datasource.properties      is required. It contains default data, so please do not change it.
- geostore-datasource-ovr.properties  is optional. It will overwrite default data with your own. You'll have to edit this file to perform customizations.

==================================================================================
======= DB configuration
==================================================================================

docs to create the database: https://github.com/geosolutions-it/geostore/tree/master/doc

Then, you have to change the file WEB-INF/classes/geostore-datasource-ovr.properties to point to your postgresql database.
This is an example content of the file to use postgresql:

geostoreDataSource.driverClassName=org.postgresql.Driver
geostoreDataSource.url=jdbc:postgresql://localhost:5432/geostore
geostoreDataSource.username=geostore
geostoreDataSource.password=geostore
geostoreVendorAdapter.databasePlatform=org.hibernate.dialect.PostgreSQLDialect
geostoreEntityManagerFactory.jpaPropertyMap[hibernate.hbm2ddl.auto]=validate
geostoreEntityManagerFactory.jpaPropertyMap[hibernate.default_schema]=geostore
geostoreVendorAdapter.generateDdl=true
geostoreVendorAdapter.showSql=false

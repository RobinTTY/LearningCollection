---
id: importingExportingData
title: Importing and Exporting data
---

```txt
mongoimport --uri "<AtlasClusterURI>       // import json
            --drop=<filename>.json
mongoexport --uri "<AtlasClusterURI>       // export json
            --collection=<collectionName>
            --out=<filename>.json
mongorestore --uri "<AtlasClusterURI>      // import bson
             --drop dump
mongodump --uri "<AtlasClusterURI>         // export bson

```

## Example

```txt
mongoimport --uri "mongodb+srv://<user>:<password>@cluster0.9mv1n.mongodb.net:27017,cluster0-shard-00-00.9mv1n.mongodb.net:27017,cluster0-shard-00-02.9mv1n.mongodb.net:27017/<dbName>?ssl=true&replicaSet=atlas-ojxaoh-shard-0&authSource=admin" --collection <collectionName> --drop --file C:/.../<exportedData>.json
```

**--drop:** Modifies the import process so that the target instance drops the collection before importing the data from the input.  
More options see: [MongoDB Docs](https://docs.mongodb.com/database-tools/mongoimport/)

## The URI string

- The connection string is a srv-string
- srv is used to establish a secure connection

```txt
mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/<database>
```

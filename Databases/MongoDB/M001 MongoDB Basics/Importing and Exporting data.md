# Importing and Exporting data

# Importing and exporting data

```
mongoimport --uri "<AtlasClusterURI>       // import json
            --drop=<filename>.json
mongoexport --uri "<AtlasClusterURI>       // export json
            --collection=<collectionName>
            --out=<filename>.json
mongorestore --uri "<AtlasClusterURI>      // import bson
             --drop dump
mongodump --uri "<AtlasClusterURI>         // export bson

```

## The URI string

- The connection string is a srv-string
- srv is used to establish a secure connection

```
mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/<database>
```
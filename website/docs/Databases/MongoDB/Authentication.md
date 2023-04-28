---
id: authentication
title: Authentication
sidebar_position: 2
---

1. Enable authorization in the config

   TODO

2. Add a user

   ```shell
   db.createUser(
   {
       user: 'admin',
       pwd: 'password',
       roles: [ { role: 'root', db: 'admin' } ]
   }
   );
   ```

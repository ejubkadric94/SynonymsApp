## Database
1. Install postgres db (version 9+) <br>
2. `sudo psql`
3. 
```
  CREATE DATABASE staklenavrata;
  CREATE USER staklenavrata_admin WITH ENCRYPTED PASSWORD 'CmqHykucgPaqa8jt';
  GRANT ALL PRIVILEGES ON DATABASE staklenavrata TO staklenavrata_admin;
```

## Run
1. `cd pathToStaklenaVrata/backend`
2. `yarn`
3. `PORT=3001 nodemon npm start`

## Debug
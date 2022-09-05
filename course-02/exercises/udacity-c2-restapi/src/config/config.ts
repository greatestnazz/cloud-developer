export const config = {
  "dev": {
    "username": process.env.dbusername,
    "password": process.env.password,
    "database": "postgres",
    "host": process.env.host,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": process.env.aws_media_bucket
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}

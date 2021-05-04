<p align="center"><img id="header-logo" src="https://static1.squarespace.com/static/5e97609b92c1f41a35bfa25b/t/5f3eac15a3886f571f924d69/1612303090863/?format=1500w" /></p>

<p align="center">
<a href="#"><img src="https://img.shields.io/badge/company-pangaea-blue" alt="Pangaea"></a>
<a href="#"><img src="https://img.shields.io/badge/project-pangaea-publisher-f39f37" alt="Project"></a>
<a href="#"><img src="https://img.shields.io/badge/status-done-4ac75e" alt="Status"></a>
<a href="#"><img src="https://img.shields.io/badge/licence-mit-f39f37" alt="License"></a>
</p>

## Pangaea Tasks

To build a HTTP notification system.

### Solution Overview

Application was built with Typescript-NodeJs and Express server and a MongoDB
database. Please see Postman Collection link below for available APIs and a
dead-drop link for environment varaibles.

### Environment setup

**Clone Repo**

```sh
 $ git clone https://github.com/anselmleo/pangaea-publisher.git
```

**Environment Variables (Link is valid for 24hrs only)** Location:
https://dead-drop.me/pickup/60915dc5d68ec Password: SN2y8YGLzo4MJTA

**Install packages**

```sh
 $ npm install
```

**Start app development**

```sh
$ npm run dev (Requires a mongodb setup and a connection string in the env file)
```

**Start app testing**

```sh
$ npm run testing (Easy and Recommended)
```

**Start app (staging)**

```sh
$ pm2 run staging-ecosystem.config.js (Not yet applicable)
```

**Start app (production)**

```sh
$ pm2 run prod-ecosystem.config.js (Not yet applicable)
```

**Postman Collection**
https://www.getpostman.com/collections/e8c094fa1bbde9361bbd

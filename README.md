# Project Friidrett <!-- omit in toc -->

A student project for the course Frontend Development at Gokstad Akademiet. The project is a web application for a fictitious athletics club. The application is built with React and Node.js, and uses a MySQL database.

Team members:

- Yardenna: https://github.com/yardokun
- Sandra: https://github.com/shuseklepp
- Yoann: https://github.com/Gynko

# Table of content <!-- omit in toc -->

- [1. Installation](#1-installation)
- [2. Design](#2-design)

# 1. Installation

1. Clone this repo

```bash
git clone https://github.com/Gynko/friidrett.git
```

2. Download Docker and install: https://www.docker.com/get-started
3. Download docker file: https://gokstadakademietas.sharepoint.com/:u:/r/sites/1.Frontend-utviklingH22-V24/Delte%20dokumenter/JavaScript%20rammeverk%20-%20React/Arbeidskrav%202%20filer/Dockerfile?csf=1&web=1&e=1lEgZe
4. Download the sql file: https://gokstadakademietas.sharepoint.com/:u:/r/sites/1.Frontend-utviklingH22-V24/Delte%20dokumenter/JavaScript%20rammeverk%20-%20React/Arbeidskrav%202%20filer/gokstad-all.sql?csf=1&web=1&e=ak9BHN
5. Build Docker file:

```bash
docker build -t ga-db-image .
```

6. Run Docker file:

```bash
docker run --name ga-mysql-8.0.33 -p 3306:3306 -v ga-vol:/var/lib/mysql -d ga-db-image
```

7. Download and install workbench for mac: https://dev.mysql.com/downloads/workbench/
8. Open Workbench and create new connection
   Connection name: GokstadDb
   Port: 3306
   Password: gokstad
9. Open the sql script that we downloaded
10. Run the script - the lightning icon
11. Installing the server and the database:

```bash
git clone https://github.com/yngvemag/ga-friidrett
```

And then start it

```bash
docker-compose up -d7.
```

12. Installing the client - Navigate to client folder and

```bash
npm install
```

13. Start the client

```bash
npm start
```

# 2. Design

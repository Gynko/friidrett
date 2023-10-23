# Installation

## Åpne terminal og naviger til mappen hvor 'Dockerfile' og 'gokstad-all.sql' ligger.
## Kjøre følgende kommandoer.
```bash
docker build -t ga-db-image
docker run --name ga-mysql-8.0.33 -p 3306:3306 -v ga-vol:/var/lib/mysql -d ga-db-image
```

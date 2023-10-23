# Project Friidrett <!-- omit in toc -->

# Table of content <!-- omit in toc -->
- [1. Installation](#1-installation)
  - [1.1. Åpne terminal og naviger til mappen hvor 'Dockerfile' og 'gokstad-all.sql' ligger.](#11-åpne-terminal-og-naviger-til-mappen-hvor-dockerfile-og-gokstad-allsql-ligger)
  - [1.2. Kjøre følgende kommandoer.](#12-kjøre-følgende-kommandoer)

# 1. Installation

## 1.1. Åpne terminal og naviger til mappen hvor 'Dockerfile' og 'gokstad-all.sql' ligger.
## 1.2. Kjøre følgende kommandoer.
```bash
docker build -t ga-db-image
docker run --name ga-mysql-8.0.33 -p 3306:3306 -v ga-vol:/var/lib/mysql -d ga-db-image
```

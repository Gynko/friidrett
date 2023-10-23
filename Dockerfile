FROM mysql:8.0.33

COPY gokstad-all.sql /docker-entrypoint-initdb.d/
ENV MYSQL_ROOT_PASSWORD gokstad

EXPOSE 3306


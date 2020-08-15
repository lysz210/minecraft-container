FROM openjdk

ARG minecraft_server

RUN curl $minecraft_server -o /server.jar

RUN mkdir /minecraft

COPY ./minecraft /usr/bin/minecraft

RUN chmod ug+x /usr/bin/minecraft

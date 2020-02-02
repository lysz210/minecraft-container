FROM openjdk

RUN curl https://launcher.mojang.com/v1/objects/bb2b6b1aefcd70dfd1892149ac3a215f6c636b07/server.jar -o /server.jar

RUN mkdir /minecraft

COPY ./minecraft /usr/bin/minecraft

RUN chmod ug+x /usr/bin/minecraft

ENTRYPOINT minecraft
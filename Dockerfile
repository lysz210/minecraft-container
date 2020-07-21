FROM arm32v7/openjdk

RUN curl https://launcher.mojang.com/v1/objects/a412fd69db1f81db3f511c1463fd304675244077/server.jar -o /server.jar

RUN mkdir /minecraft

COPY ./minecraft /usr/bin/minecraft

RUN chmod ug+x /usr/bin/minecraft

ENTRYPOINT minecraft
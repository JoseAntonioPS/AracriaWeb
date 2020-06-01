FROM openjdk:11

RUN mkdir /home/arac/
WORKDIR /home/arac/
COPY arac-0.0.1-SNAPSHOT.jar /home/arac/arac.jar
EXPOSE 8081

CMD [ "java", "-jar", "arac.jar" ]
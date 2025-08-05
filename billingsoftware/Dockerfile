# Build stage - using official Maven image with Java 21
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Run stage - using official Eclipse Temurin JDK 21 image
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
COPY .env .

# Spring Boot will read from .env file
ENTRYPOINT ["sh", "-c", "set -a && source .env && set +a && java -jar app.jar"]
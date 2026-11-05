# Node.js Docker Project

## Project Description
A simple Node.js web application deployed using Docker.

## Technologies Used
- Node.js
- Docker
- Amazon Linux 2023
- AWS EC2
- Git and GitHub

## Application Port
3000

## Docker Build
docker build -t nodejs-app:v1 .

## Docker Run
docker run -d -p 3000:3000 --name nodejs-container nodejs-app:v1

## Test Application
curl http://localhost:3000

## Project Objective
Learn Node.js application deployment using Docker containers.

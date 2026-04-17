# DevOps Learning Journey 

## Day 1
- Learned DevOps basics
- Installed Git, Docker, VS Code

## Day 2
- Learned Linux basics (WSL)
- File system and commands

## Day 3
- Learned Git and GitHub
- Pushed first project

## Day 4
- Learned Docker basics
- Ran containers (Ubuntu, Nginx)
- Port mapping and container management

## Day 5
- learned about Docker file
- created a simple Node.js app
- Built a custom Docker Image
- Ran container from my own image
- commands Used
	- docker build -t my-app
	- docker run my-app
  	- docker images
## Day 6 - Running Backend in Docker 

- Created a simple Node.js HTTP server
- Ran backend server on port 3000
- Dockerized the backend using Dockerfile
- Built Docker image for backend app
- Ran container with port mapping
- Accessed backend from browser (localhost:3000)
- Commands Used
	- docker build -t devops-app .
	- docker run -d -p 3000:3000 devops-app
	- docker ps
	- docker stop <container_id>

## Day 7 - Docker Compose 

- Learned what Docker Compose is
- Understood multi-container application concept
- Created docker-compose.yml file
- Ran backend app using Docker Compose
- Managed container lifecycle with a single command
### Commands Used
	- docker compose up
	- docker compose down
	- docker ps

## Day 8 CI/CD with GitHub Actions

- Learned CI/CD concepts (Continuous Integration & Deployment)
- Created first CI pipeline using GitHub Actions
- Understood workflow automation on code push
- Built Docker image automatically using pipeline
- Learned about GitHub security (PAT with workflow scope)

## Day 9 - CI/CD with Docker Integration

- Improved CI/CD pipeline using GitHub Actions
- Built Docker image automatically in pipeline
- Pushed Docker image to Docker Hub
- Used GitHub Secrets to store credentials securely
- Learned how CI/CD connects code with deployment

## Day 10 - Deployment using Docker Hub 🚀

- Learned how deployment works in real DevOps workflow
- Pulled Docker image from Docker Hub
- Ran container using pulled image
- Exposed application using port mapping
- Accessed deployed app via browser (localhost)
### Commands Used
	- docker pull <username>/devops-app
	- docker run -d -p 4000:3000 <username>/devops-app
	- docker ps
	- docker stop <container_id>

## Day 11 - Cloud Deployment (Render) 

- Deployed application using Render (free cloud platform)
- Connected GitHub repository to Render
- Used Dockerfile for deployment
- Got a public URL for the app
- Understood real-world deployment flow
### Concepts Learned
- Cloud deployment
- Hosting containers online
- Connecting GitHub with cloud platform

## Day 12 - Nginx Reverse Proxy

- Learned what Nginx is and how it works
- Understood reverse proxy architecture
- Configured Nginx to forward requests to backend
- Used Docker Compose to run multiple containers (app + nginx)
- Accessed app through Nginx (port 8080)
### Concepts Learned
- Reverse proxy
- Multi-container architecture
- Service communication in Docker

## Day 13 - Environment Variables 

- Learned how to use environment variables in Node.js
- Created `.env` file for configuration
- Used env variables inside Docker containers
- Improved app flexibility without changing code

## Day 14 - Production Optimization

- Used lightweight Node.js image (alpine)
- Improved Dockerfile for production
- Created `.dockerignore` to reduce image size
- Learned best practices for container builds

## Day 15 - Health Check & Logging 

- Added `/health` endpoint for monitoring
- Implemented basic request logging
- Added Docker healthcheck for container status
- Learned importance of monitoring in DevOps

## Day 17 - Monitoring & Debugging 📊

- Learned how to monitor Docker containers
- Used docker logs to debug issues
- Inspected container details
- Entered running container for troubleshooting
- Understood importance of logging and health checks
### Commands Used
	- docker ps
	- docker logs
	- docker logs -f
	- docker inspect
	- docker exec -it <container> bash

## Day 18 - Docker Volumes 

- Learned about data persistence in Docker
- Used volumes to store data outside containers
- Tested file persistence after container restart
- Understood importance of persistent storage
### Commands Used
	- docker volume ls
	- docker volume inspect
	- docker run -v
	- docker exec

## Day 19 - Docker Networking 

- Learned how Docker networking works
- Created custom Docker network
- Connected multiple containers in same network
- Used service names for communication
- Tested container-to-container communication
### Commands Used
	- docker network create
	- docker network ls
	- docker network inspect
	- docker run --network
	- docker exec

## Day 20 - Final DevOps Project 

- Built complete DevOps project using Docker & Nginx
- Implemented reverse proxy architecture
- Used environment variables for configuration
- Added Docker volumes for persistence
- Combined multiple services using Docker Compose

### Architecture
User → Nginx → Backend → Volume

### Features
- Health check endpoint
- Logging system
- Multi-container setup
- Production-ready structure
----

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

---

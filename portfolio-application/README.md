## Live site:
https://samuelfrost.github.io/portfolio/

## Quick start
### To get started using a command line interface
requires git
- Clone repository with
```
git clone https://github.com/SamuelFrost/portfolio.git
```
### To run without containerization
requires node, and npm (requires node 10 & npm 6 or higher)

- Navigate to the appropriate folder, assuming you just cloned the repository, use the following command to change directories
```
cd portfolio/portfolio-application/
```
- Install project dependencies with
```
npm install
```
- You may run the project on a local server with
```
npm run start
```
- Open a browser and navigate to the local url displayed in your console, it will likely default to http://localhost:8000

### To run with with Docker
Requires docker installed with a linux OS Kernel (for windows users, use [windows subsystem for linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install), mac and linux users should have no extra requirements beyond installing docker normally)

*note: wsl users should place their project folder inside their linux distribution filepath for the development live file change listeners (--watch option) to work properly. The filepath should be something like: \\\\wsl.localhost\Debian\home\user\projects

From the portfolio/ directory run
```
docker-compose build
docker-compose up
```
This will start a container with ports mapped 8000:8000 and 8001:8001. (8001 is left open for testing builds)

- Open a browser and navigate to the local url displayed in your console, it will likely default to http://localhost:8000


## Scripts 
(run from portfolio-application directory)

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `build:gh-pages` builds your app and outputs it in your `gh-pages` directory with some modifications to allow for subdomain hosting on github pages
- `gsp:gh-pages` Run from main branch to avoid git conflicts. Publishes `gh-pages` directory to github pages.
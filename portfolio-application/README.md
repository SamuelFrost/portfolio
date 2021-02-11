## Quick start
To get started using a command line interface:

- Ensure git, node, and npm are installed globally (requires node 10 & npm 6 or higher)
- Clone repository with
```
git clone https://github.com/SamuelFrost/portfolio.git
```
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


## Scripts 
(run from portfolio-application directory)

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `build:gh-pages` builds your app and outputs it in your `gh-pages` directory with some modifications to allow for subdomain hosting on github pages
- `gsp:gh-pages` Run from main branch to avoid git conflicts. Publishes `gh-pages` directory to github pages.
### Welcome to my portfolio

## What I'm making:  
While in the end the primary goal of this project is to just make my portfolio, I'm using it as an opportunity to learn the best practices of modern component oriented web development.  
Here are a few standards I'm setting for myself in the development process in order to make it both impressive and to push my skills to the next level.  

- Progressive Web Application (PWA)  
Follow a set of guidelines that allows for an extremely accessible application that provides the best experience possible, online or offline, and on any device, including a native app like experience for mobile.
https://web.dev/what-are-pwas/  
good example of a PWA:  
https://squoosh.app/  

- Works offline  
I intend to make my application cache everything it can and ultimately be downloadable, making all functions not directly reliant on getting new information from the web usable while offline.  
This is one of the bigger unknown variables for me, but from my understanding I'll be using service workers and maybe some other storage techniques.

- Scalable / production ready  
I probably won't have a 100 million viewers checking out my portfolio, but I intend to build it in a way that would make it possible without costing me a fortune and doesn't restrict me from hosting the content I want.
- Components I create here can be reused elsewhere  

- Utilizes third party and self developed APIs  
I'll probably throw something together with Ruby on Rails for my own API.  
As for third party ones, I'll just put something in there that could be reused in another one of my projects.  

- Perfect or high Lighthouse audit / Web vitals scores  
https://web.dev/measure/  
https://web.dev/vitals/  

- Localizable  
Switching languages should be light and fast and additoinal language capabilities shouldn't add to initial load time.  

- No bulky frameworks/libraries  
React Vue and Angular are popular and fulfilled their purpose, but the web has evolved past the need for them.  
You can now use Vanilla JS to make component driven applications without buying into a messy framework.  
https://developer.mozilla.org/en-US/docs/Web/Web_Components  
That said, the lit-element library provides the common tools any web component will need and a design pattern I can get behind, so I'll be using it.  
https://lit-element.polymer-project.org/

# Pokedex
- [About the project](#About-the-project)
- [How to run the solution?](#How-to-run-the-solution)
- [More info](#More-info)
## About the project
The project starts from the idea of creating a web page to consult the [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) and in this way learn and practice different skills. 
This project has been developed with the [React](https://es.reactjs.org/) library and [create-react-app](https://create-react-app.dev/).

Features that can be found in this frontend project are the following:
- APP with two views: 
  - a list view to display summary information about the Pokemons 
  - a detail view with complete and detailed information about the Pokemons that has been selected.
- Pagination for displaying large numbers of Pokemons & a scroller component to go to the top of the page
- List and grid mode
- Search bar to find the Pokemons.
- 💥 Not Found page (404) for those routes that do not exist.
- 🌑 Dark and 🌞Light mode (with CSS variables).
- 🚀 Deployed in Netlify for easy previewing of the project.

## How to run the solution

You can access a deployed version on netlify at the following link [pokedex.nieves.codes](https://pokedex.nieves.codes/)

or

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## More info
The following sections provide information on the software development process, including problems and solutions, future proposals and information on the pages consulted.

### Development process

The process could be summarized in the following points:
1. Read the proposed requirements.
2. Create a series of simple mockups of the contents of the webpage.
3. Start a project with create-react-app & refactor its structure.
4. Configure the route of the pages, structure the content & create components and containers(pages).
5. Create the necessary functions and services (calls to the api among others).
6. Stylize the style of the page (CSS).
7. Deploy (Netlify) & change domain.


### Issues and solutions

- Issues with data and API fetch. 
  - Solution: Read the documentation better and see what it returns.
- Issues with CORS & very large amount of requests
  - Solution: Apply pagination in the requests
- Issues with refactor code.
  - Solution: Use custom hooks, usestate, useffect and context.
- Issues with no-resizable grid.
  - Solution: [CSS tricks without media queries](https://youtu.be/El0OJ6h_2ZI)
- Issues with the deploy in Netlify.
  - Solution: Add in a folder called `public` a file called `_redirects` containing the main route
- Issues with the font style.
  - Solution: Add a [Custom font file](https://dev.to/ziqinyeow/how-to-add-custom-font-file-to-your-react-app-31kb) in the project.

### Future proposals
- Add testing.
- Add some animations in the web page.
- Upgrade the design of the page, probably try to imitate the old pokemon cards with CSS.
- Display more information to the user about API requests, why did it go wrong?
- Centralize pokemons with the context.
- Try to decouple some components.

### Info sources
- Documentation about PokeApi https://pokeapi.co/docs/v2
- Documentation of the package of react router dom https://reactrouter.com/en/main
- Color palette for light & dark mode https://mui.com/material-ui/customization/color/
- Routes with React: [BrowserRoutes](https://reactrouter.com/en/main/router-components/browser-router) vs [HashRoutes](https://reactrouter.com/en/main/router-components/hash-router)
- Netlify deploy https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/

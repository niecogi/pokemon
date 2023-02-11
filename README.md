# Pokedex
- [About the project](#About-the-project)
- [How to run the solution?](#How-to-run-the-solution?)
- [More info](#More-info)
## About the project
The project starts from the idea of creating a web page to consult the [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) and in this way learn and practice different skills. 
This project has been developed with the [React](https://es.reactjs.org/) library and [create-react-app](https://create-react-app.dev/).

Features that can be found in this frontend project are the following:
- APP with two views: 
  - a list view to display summary information about the Pokemons 
  - a detail view with complete and detailed information about the Pokemons that has been selected.
- Pagination for displaying large numbers of Pokemons
- List and grid mode
- Search bar to find the Pokemons
- 🌑 Dark and 🌞Light mode (with CSS variables)
- 🚀 Deployed in Netlify for easy previewing of the project

## How to run the solution?

You can access a deployed version on netlify at the following link [pokemon-test-front.netlify.app](https://pokemon-test-front.netlify.app/)

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
1. Read the proposed requirements
2. Create a series of simple mockups of the contents of the webpage
3. Start a project with create-react-app & refactor its structure
4. Configure the route of the pages, structure the content & create components and containers(pages)
5. Create the necessary functions and services (calls to the api among others)
6. Stylize the style of the page (CSS)
7. Deploy (Netlify)


### Issues and solutions

- Issues with data and API fetch. 
  - Solution: Read the documentation better and see what it returns.
- Issues with CORS & very large amount of requests
  - Solution: Apply pagination in the requests
- Issues with no-resizable grid.
  - Solution: [CSS tricks without media queries](https://youtu.be/El0OJ6h_2ZI) 


### Future proposals
- Add testing.
- Add some animations in the web page.
- Upgrade the design of the page, probably try to imitate the old pokemon cards with CSS
- Centralize pokemons with the context.
- Try to decouple some components.

### Info sources
- Documentation about PokeApi https://pokeapi.co/docs/v2
- Documentation of the package of react router dom https://reactrouter.com/en/main
- Color palette for light & dark mode https://mui.com/material-ui/customization/color/
- Netlify deploy https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/
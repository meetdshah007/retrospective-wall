# RetrospectiveWall [DEMO](https://retro-wall-assignment.netlify.app/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## To Run Project in Local
1. Clone the project into your local using git clone `git@github.com:meetdshah007/retrospective-wall.git`
2. go to agile-board-assignment folder and run `npm install`
3. After successful install start project with `ng serve`
4. Open `http://localhost:4200` in your browser

## Assignment Checkpoints:
1. On clicking the Add button, an
empty card is added in the respective section and the cursor will be focused on
the card. You can show a popup modal to add this card. 
2. Users can enter text and press enter to save.
3. The board should be cross-browser compatible and mobile-friendly. 
4. Extended Functionality editing the cards.
5. Best code practices:
    -  Angular Structure & ES6
    -  Production build with `--prod` flag
    -  Component approach & Modular architecture
    -  Bootstrap Addition to support responsive web
    -  3rd Party LIBRARY integration `ngx-bootstrap` to display modals.

## Folder Structure:
    -- pages
    ---- board (Main Page where agile board is configured)
    -- shared
    ---- components
    ------ card (Card Component)
    ------ card-form-modal (Card Modal popup)
    ------ section (Section Component)
    ---- services
    ------ focus (To find and highlight the component)
    -- testing
    ---- testing-mocks (Collection of mock helpers to ease the unit testing)
    
## Code Implementation
1. The entire code is scalable and follows the Component based approach. Section is wrapping the Card Components and responsible for handling their cards
2. Sections are handled from the Board pages and rendered dynamically like a JSON response based. So we can integrate this with API in no time.
3. Architecture is simple and divided into Following keywords: 'pages', 'components', 'services', 'models', 'testing'.
4. Entire SPA is following modular component based approach so we can always add more features like login/register, routing, multiple boards and many more interesting stuffs.

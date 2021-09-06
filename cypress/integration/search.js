
// El describe es una descripción general de los casos que se van a tener dentro
describe('Search elements', ()=>{

    // cada uno de los casos va ir con un it

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search for elements with multiple results', ()=>{

        // primero se va querer navegar al sitio
        // se pone la barra porque en cypress.js se puso una baseUrl

        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'dress');
        })

    })

    it('Search for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })

    })

})


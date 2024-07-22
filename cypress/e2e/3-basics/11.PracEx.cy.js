///<reference types='cypress' />
describe('practice examples', function () {
    it('amazon prime', function () {
        cy.visit('https://www.primevideo.com/')
        cy.get('[aria-label="Search Prime Video"]').click()
        cy.get('[id="pv-search-nav"]').type('tig')
        cy.get('.SDdJQi >a').each(function(el){
            //cy.log(el.text())
            if(el.text().includes("ek tha tiger")){
                cy.wrap(el).click()
                // cy.get('[data-testid="carousel-title"] > p').first().should('contain',"ek tha tiger")
            }
        })
        .then(()=>{
            cy.get('[data-testid="carousel-title"] > p').first().should('contain',"ek tha tiger")
        })
    })

    it('calculater', function () {
        cy.visit('https://www.desmos.com/scientific')
        cy.get('[aria-label="4"]').click()
        cy.get('[aria-label="Times"]').click()
        cy.get('[aria-label="6"]').click()

        let str=""
        cy.get('[class="dcg-mq-root-block"]').first().children().each((el)=>{
            str+=el.text()
        }).then(()=>{
            expect(str.slice(1)).to.eq('24')
        })

    })
})
///<reference types="cypress"/>
describe('cy.Task()', function () {
    it('task 1', function () {
        cy.task('print') //cy.task(task-name)
    })

    it('task 2', function () {
        cy.task('addition', { a: 4, b: 2 }).then((sum) => {
            cy.log(sum)
        })
    })
    it('task 3', function () {
        cy.task('mylog', 'hi how r u')
    })
})
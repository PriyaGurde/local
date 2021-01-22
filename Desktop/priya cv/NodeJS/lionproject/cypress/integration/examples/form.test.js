

describe('Form', function() {
    
  beforeEach(function() {
      cy.visit('http://localhost:3000')
      
        })
  
    it('FullNameTextBox', function() {
        cy.get('#button').click()

        cy.contains('Mandatory filed')
       //cy.screenshot('myscreenshort')
        })

    it('EmailTextValidation', function()
     {
      cy.get('#name').type('raja')
      cy.get('#email').type('priya@gmail')
      cy.get('#button').click()
      cy.contains('emailid should have @ and dot format')
      })

      it('AvailiblityTextBox ', function()
     {
      cy.get('#availability').type('two')
      cy.get('#name').type('raja')
      cy.get('#button').click()
      cy.contains('It should be Number in range')
      
      })
  
      it('SucessfullRegistretion ', function()
      {
        cy.get('#name').type('raja')
        cy.get('#email').type('priya@gmail.com')
        cy.get('#availability').type(4)
        cy.get('input[type="submit"]').click()
        
       // cy.get(input[type="submit"]).click
        // cy.on('window', ()=>true)
      cy.on('window:alert',(str)=>
      {
        expect(str).to.contains('saved the form')
        //cy.wait(2000)
      }) 
      
      })
  
  })
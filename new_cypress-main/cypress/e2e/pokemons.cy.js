describe('Тестирование авторизации QA Studio', function () {
    it('Проверка покупки аватара тренеру покемонов', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('nikitka58rus2013@yandex.ru');
         cy.get('#password').type('1q2w3e58ruS');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(1) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/29');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NIKITA SHAPOVALOV');
         cy.get('.pay-btn').should('be.enabled');
         cy.get('.pay-btn').click();
         cy.get('.payment__submit-button').should('be.disabled');
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').should('be.enabled');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__field-defolt-for-success').contains('Покупка прошла успешно');
         cy.get('.payment__adv').click();
        })
    })
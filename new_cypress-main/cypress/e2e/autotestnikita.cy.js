describe('Тестирование авторизации QA Studio', function () {
    it('Проверка авторизации при вводе валидных данных', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
        })

        it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('qwerty@qa.ru');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon');
           })

           it('Проверка авторизации при невалидном пароле', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('WhatIsLove');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon');
           })

           it('Проверка авторизации при невалидном логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('WhoIsThatGerman@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon');
        })

        it('Проверка авторизации, когда забыл о @', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon');
        })

        it('Проверка авторизации при внутреннем баге', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon');
        })
    })
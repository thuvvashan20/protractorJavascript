describe('tests on multiform', function () {

    var multiForm = require(protractor.basePath + '/pages/MultiForm.js');
    var data = require(protractor.basePath + '/pages/data.json');

    beforeAll(function () {
        multiForm.getHomePage(data.url);
        expect(browser.getTitle()).toEqual('Protractor practice website - Multiform')
    });

    it('should add a text in text box', function () {
        multiForm.profilePage(data.name, data.emailAdd);
        multiForm.getResults1().getText().then(function (value) {
            expect(value).toContain('{"name":"thuvva","email":"thuvvashan20@gmail.com"}')
        });
    });

    xit('should select the second check box', function () {
        multiForm.interestPage();
        multiForm.getResults1().getText().then(function (value) {
            expect(value).toContain('{"name":"devops","email":"gayasharan4@gmail.com","type":"ps"}')
        });
        multiForm.paymentPage();
    });

    xit('should submit the form', function () {
        multiForm.paymentPage();
    });
});
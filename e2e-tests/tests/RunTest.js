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

    it('should select the second check box', function () {
        multiForm.interestPage();
        multiForm.getResults1().getText().then(function (value) {
            expect(value).toContain('{"name":"thuvva","email":"thuvvashan20@gmail.com","type":"ps"}')
        });
    });

    it('should submit the form', function () {
        multiForm.paymentPage();
    });
});
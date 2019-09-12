var MultiForm = function () {

    var name = element(by.model('formData.name'));
    var email = element(by.model('formData.email'));
    var result1 = element(by.css('.ng-binding'));
    var button=element(by.css('.btn'));
    var checkBox=element.all(by.model('formData.type'));

    this.getHomePage = function (url) {
        browser.get(url);
    };
    this.setNameField = function () {
        return name;
    };
    this.setEmail = function () {
        return email;
    };
    this.getResults1 = function () {
        return result1;
    };
    this.clickNextButton=function () {
        return button;
    };
    this.clickCheckBox=function () {
        return checkBox;
    };
    this.profilePage = function (name, emailID) {

        this.setNameField().sendKeys(name);
        this.setEmail().sendKeys(emailID);
        this.clickNextButton().click();
    };
    this.interestPage=function () {
        this.clickCheckBox().get(1).click();
        this.clickNextButton().click();
    };
    this.paymentPage=function () {
        this.clickNextButton().click();
    }
};
module.exports = new MultiForm();
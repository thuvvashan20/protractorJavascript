var MultiForm = function () {

    var name = element(by.model('formData.name'));
    var email = element(by.model('formData.email'));
    var result1 = element(by.css('.ng-binding'));

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
    this.profilePage = function (name, emailID) {
        this.setNameField().sendKeys(name);
        this.setEmail().sendKeys(emailID);
    }
};
module.exports = new MultiForm();
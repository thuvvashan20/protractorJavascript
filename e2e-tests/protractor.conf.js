var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {

    onPrepare: function () {
        protractor.basePath = __dirname;
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
            , docTitle: 'e2e test results' // Title of report
        }).getJasmine2Reporter());

    },
    allScriptsTimeout: 11000,

    specs: [
        '/Users/thuvvareka/PhpstormProjects/protractortest/e2e-tests/tests/RunTest.js'
    ],

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};

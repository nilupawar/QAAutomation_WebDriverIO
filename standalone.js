const { remote } = require('webdriverio')
const sync = require('@wdio/sync').default

remote({
    runner: false,
    scripts:"/node_modules/.bin/chromedriver --port=4444 --url-base=/wd/hub --verbose",
    outputDir: __dirname,
    // services:["wdio-chromedriver-service"],
    capabilities: {
        browserName: 'chrome'
    }
}).then((browser) => sync(() => {
    browser.addCommand('getUrlAndTitle', function (customVar) {
        // `this` refers to the `browser` scope
        return {
            url: this.getUrl(),
            title: this.getTitle(),
            customVar: customVar
        }
    })

    browser.url('https://webdriver.io')
    var urlTitle = browser.getUrlAndTitle();
    console.log("URL : " + urlTitle.url.then(url => url) + " -- Title : " + urlTitle.title.then(title => title));
    //browser.debug()
    // browser.findElements('tagName','div')
    browser.deleteSession()
}))
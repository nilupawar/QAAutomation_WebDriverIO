const { remote } = require('webdriverio')
const sync = require('@wdio/sync').default

remote({
    runner: false,
    outputDir: __dirname,
    services:["chromedriver"],
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
    browser.findElements('tagName','div')
    browser.deleteSession()
}))
describe("this is first : ", function(){


    it("",function(){
        browser.url('https://webdriver.io')
        console.log(browser.capabilities.browserName)
        
       console.log('This is log from first test')     
       browser.deleteSession()
    })
})
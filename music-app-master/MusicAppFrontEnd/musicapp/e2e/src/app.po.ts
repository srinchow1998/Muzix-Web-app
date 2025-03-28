import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
  getRouterOutlet():ElementFinder{
    return element(by.tagName('router-outlet'));
  }
  navigateToFavorite(){
    return browser.get('/favourite');
  }
  navigateToLogin(){
    return browser.get('/login');
  }
  navigateToRegister(){
    return browser.get('/register');
  }
  navigateToRecommend(){
    return browser.get('/recommend');
  }
  navigateToHome(){
    return browser.get('/home');
  }
}

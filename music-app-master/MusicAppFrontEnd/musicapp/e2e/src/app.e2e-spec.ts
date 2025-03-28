import { AppPage } from './app.po';
import { browser, error, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toContain('Musicapp');
  });

  it('should load a page and verify the url',()=>{
    browser.get('/');
    expect<any>(browser.getCurrentUrl())
    .toContain(browser.baseUrl+'');
  });

  it('should contain <router-outlet>',()=>{
    page.navigateTo();
    expect(page.getRouterOutlet).toBeTruthy('<router-outlet>');
  });

  it('should display login page on clicking login',()=>{
    browser.get('/login');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'login');
  })
  it('should display register page on clicking register',()=>{
    browser.get('/register');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'register');
  })
  it('should display login page on clicking home',()=>{
    browser.get('/home');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'login');
  })
  it('should display login page on clicking favorites',()=>{
    browser.get('/favourite');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'login');
  })
  it('should display login page on clicking recommendation',()=>{
    browser.get('/recommend');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'login');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

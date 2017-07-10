import { MyshopAngularPage } from './app.po';

describe('myshop-angular App', () => {
  let page: MyshopAngularPage;

  beforeEach(() => {
    page = new MyshopAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { MyAuthProjectPage } from './app.po';

describe('my-auth-project App', () => {
  let page: MyAuthProjectPage;

  beforeEach(() => {
    page = new MyAuthProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

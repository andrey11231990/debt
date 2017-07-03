import { DebtPage } from './app.po';

describe('debt App', () => {
  let page: DebtPage;

  beforeEach(() => {
    page = new DebtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

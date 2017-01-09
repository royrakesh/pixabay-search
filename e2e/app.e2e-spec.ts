import { PixabySearchPage } from './app.po';

describe('pixaby-search App', function() {
  let page: PixabySearchPage;

  beforeEach(() => {
    page = new PixabySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

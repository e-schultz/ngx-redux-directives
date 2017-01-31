import { NgxReduxDirectivesPage } from './app.po';

describe('ngx-redux-directives App', function() {
  let page: NgxReduxDirectivesPage;

  beforeEach(() => {
    page = new NgxReduxDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

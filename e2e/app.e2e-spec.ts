import { EightPuzzlePage } from './app.po';

describe('eight-puzzle App', () => {
  let page: EightPuzzlePage;

  beforeEach(() => {
    page = new EightPuzzlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

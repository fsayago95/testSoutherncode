import Page from "./page";

class Home extends Page {
  get inputUsername() {
    return $("#search_form_input_homepage");
  }
  get searchButton() {
    return $("#search_button_homepage");
  }
  get backgroundColor() {
    return $('.site-wrapper.site-wrapper--home.js-site-wrapper').getCSSProperty("background-color");
  }
  get settings() {
    return $(".header__button--menu.js-side-menu-open");
  }
  get themes() {
    return $('[data-settings="1"]');
  }
  get terminalTheme() {
    return $$(".set-theme__color-3")[5];
  }
  get btnSaveAndExit() {
    return $(".btn.btn--primary.js-set-exit");
  }

  async searchPlayer(nameToSearch) {
    await this.inputUsername.setValue(nameToSearch);
    await this.searchButton.click();
  }

  verifingBackground(colour) {
    var colourHex = this.backgroundColor;
    expect(colourHex.parsed.hex).to.equal(colour);
  }

  changeTheme() {
    browser.waitUntil(() => this.settings.isClickable());
    this.settings.click();
    browser.waitUntil(() => this.themes.isClickable());
    this.themes.click();
    browser.waitUntil(() => this.terminalTheme.isClickable());
    this.terminalTheme.click();
    browser.waitUntil(() => this.btnSaveAndExit.isClickable());
    this.btnSaveAndExit.click();
  }
}

export default new Home();

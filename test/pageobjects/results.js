import Page from "./page";

class Results extends Page {
  get michaelJordanWiki() {
    return $$(".result__title.js-result-title")[1];
  }
  get imageOfMichael() {
    return $$(".image")[0];
  }

  async verifingPlayer() {
    await this.michaelJordanWiki.click();
    await expect(
      this.imageOfMichael.toHaveLink("/wiki/File:Michael_Jordan_in_2014.jpg")
    );
  }
}

export default new Results();

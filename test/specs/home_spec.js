import Home from "../pageobjects/Home";
import Results from "../pageobjects/results"
import automationConfig from "../config/automationConfig";

describe("Looking for Michael Jordan", () => {
  it('Michael is here', async () => {
      await Home.open(automationConfig.urls.duckduckgo);
      await Home.searchPlayer(automationConfig.randomNames.firstName)
      await Results.verifingPlayer()
  });
  it("Verifing the background color", () => {
     Home.open(automationConfig.urls.duckduckgo);
     Home.verifingBackground(automationConfig.colours.dark);
     Home.changeTheme();
     Home.verifingBackground(automationConfig.colours.terminal);
  });
});

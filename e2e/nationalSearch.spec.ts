import { test } from "@playwright/test";
import { Shared } from "./page-objects/shared";
import { ListCasesPage } from "./page-objects/listCasesPage";

test("can search for case", async ({ page }) => {
    const shared = new Shared(page);
    const listCasesPage = new ListCasesPage(page);

    await page.goto(
        "https://back-office-appeals-test.planninginspectorate.gov.uk/appeals-service/all-cases"
    );

    await shared.login();

    // Expect to be on all cases page 
    await listCasesPage.isLoaded(); 

    // perform search 
    await listCasesPage.nationalListSearch("12345678");
});

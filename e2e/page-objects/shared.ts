import { Page } from '@playwright/test';

export class Shared { 
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login () {
        //MS Authenitcation
        await this.page
            .locator("#i0116")
            .fill("caseteamofficer.test@planninginspectorate.gov.uk");
        await this.page.getByRole("button", { name: "Next" }).click();
        await this.page.locator("#i0118").fill("Bo8tPa3ty!");
        await this.page.getByRole("button", { name: /Sign in/ }).click();
    }
}
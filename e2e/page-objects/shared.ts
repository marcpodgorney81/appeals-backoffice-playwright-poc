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
            .fill(process.env.email || '');
        await this.page.getByRole("button", { name: "Next" }).click();
        await this.page.locator("#i0118").fill(process.env.password || '');
        await this.page.getByRole("button", { name: /Sign in/ }).click();
    }
}
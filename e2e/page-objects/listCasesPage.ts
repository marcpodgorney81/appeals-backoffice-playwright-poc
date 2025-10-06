
import { expect, Locator } from '@playwright/test';
import { Page } from '@playwright/test';

export class ListCasesPage { 

    readonly page: Page;
    readonly searchTerm: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchTerm = page.getByTestId('searchTerm');
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async isLoaded() {
         await expect(this.page).toHaveTitle(/All cases - Manage appeals/);
    }

    async fillInput (text: string) {
        await this.searchTerm.fill(text);
	}

	async nationalListSearch(text: string) {
		await this.fillInput(text);
		await this.searchButton.click();
	}
}

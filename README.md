# appeals-backoffice-playwright-poc
poc of using PlayWright framework and typescript to write appeals backoffice e2e tests 

For this example we have used a basic scenario from the `nationalListSearch.spec`, which involves following steps 

- login
- navigate to all cases page
- search for case

## Rationale 
- The code is far simpler and more elegant than with cypress - made possible by playwright's setup! 
- typescript is far nicer to work with than javascript - gives you instant feedback as to whether have used an incorrect type or property name e.g.!  

## Install and setup  

In order to install and setup the test suite you should follow these steps 

1. clone repo `git clone git@github.com:marcpodgorney81/solirious-demo.git` 
2. Install dependencies `npm install` 
3. Install playright extension for VS Code - https://playwright.dev/docs/getting-started-vscode - this will give you access to the testing toolbar as described in how to run tests

Playwright documentation - https://playwright.dev/docs/intro 

# 🧪 Cypress Automation Project

## 📋 Description

This project uses **Cypress** for end-to-end (E2E) test automation in web applications.

## 🚀 Technologies

- **Cypress**: End-to-end test automation framework for web applications.
- **Node.js**: JavaScript runtime environment.
- **Faker.js**: Data generator for automated tests.
- **Cypress-Xpath**: Adds Xpath selector support to Cypress.
- **Mochawesome**: HTML and JSON reporter to generate comprehensive test reports.

## 📁 Project Structure

```
├── cypress/
│   ├── data/           # Test data
│   ├── e2e/            # Test cases
│   ├── pages/          # Pages for page object model
│   └── support/        # Custom commands and configuration
├── node_modules/       # Project dependencies
├── cypress.config.js   # Cypress configuration
├── package.json        # Project dependencies and scripts
└── README.md           # This file 😄
```

## 🎯 Implemented Test Cases

1. **Login**: Verifies that the authentication process works correctly.
2. **Registration Form**: Tests the creation of a new account with data validation.

## 🛠 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sofisanabria/randomAutomation.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Tests

- **Run in interactive mode**:

```bash
npx cypress open
```

- **Run in headless mode**:

```bash
npx cypress run
```

## 🔧 Additional Configuration

If you need to customize the Cypress configuration, edit the `cypress.config.js` file.

```javascript
{
  "baseUrl": "https://automationexercise.com/",
}
```

## 📦 Available Scripts

- `npm test`: Runs all tests in headless mode.
- `npm run open`: Opens the Cypress interface for interactive testing.

## 🧪 Random Data Generation

This project uses **Faker.js** to generate mock data such as names, emails, and addresses. This allows testing with varied information to simulate multiple scenarios.

Usage example:

```javascript
const randomName = faker.name.firstName();
const randomEmail = faker.internet.email();
```

## 🧾 Test Reports with Mochawesome

This project uses **Mochawesome** to generate detailed HTML and JSON reports for your test results. After running the tests, reports can be found in the `results` directory.

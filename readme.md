# NeomTech_Abdulwahab_Alharbi

This project contains automation scripts for two web testing tasks using Playwright. 

## Tasks

### 1. Login Flow
* **Target:** [Practice Test Automation](https://practicetestautomation.com/practice-test-login/)
* **What it does:** Automates the login process, including positive tests and negative error handling for invalid credentials.

### 2. Practice Form
* **Target:** [DemoQA](https://demoqa.com/automation-practice-form/)
* **What it does:** Fills out a user registration form. It handles text inputs, radio buttons, checkboxes, and handles dynamic UI elements like ad banners.

## Setup
1. Clone this repository.
2. Open the terminal in the project folder.
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Tests
To run a test, use the following commands in your terminal:

**To run the Login test:**
```bash
npx playwright test tests/login.spec.js --headed
```

**To run the Practice Form test:**
```bash
npx playwright test tests/practiceForm.spec.js --headed
```

---
*Created by Abdulwahab Alharbi*
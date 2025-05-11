# Swag_Labs
---
# 🧪 Web Automation Assessment – SauceDemo

-->This project is an automated testing suite for [SauceDemo](https://www.saucedemo.com/),using **WebdriverIO** and **JavaScript (Node.js)**. The suite demonstrates login validation, product sorting, purchase flow, and price verification.

-->All test cases are written in modular and maintainable format, making it easy to run them separately or together, and each run generates an Allure report for result analysis.


## 🧷 Project Objective

-->To automate end-to-end test scenarios for the SauceDemo site by simulating real-world user journeys such as:
- User login
- Product sorting and filtering
- Cart management
- Checkout and payment validation


## 📁 Test Case Breakdown

### ✅ Test Case-01 | Locked_Out_User Login
- **User:** `locked_out_user`
- **Goal:** Validate that a proper error message appears upon failed login.
- **Expected Result:** Error message should explicitly state that the user is locked out.
- **Validation:** Assert that the correct error message is displayed.


### ✅ Test Case-02 | Standard_User_Purchase Flow
- **User:** `standard_user`
- **Scenario Overview:**
  1. Login
  2. Reset App State via hamburger menu
  3. Add **any three products** to cart
  4. Proceed to checkout
  5. Validate product names and computed total Prices
  6. Finish purchase
  7. Confirm order success message
  8. Reset App State again and log out


### ✅ Test Case-03 | Performance Glitch User with Filter
- **User:** `performance_glitch_user`
- **Scenario Overview:**
  1. Login and reset App State
  2. Apply filter: **Name (Z to A)**
  3. Add the **first displayed item** to the cart
  4. Proceed through checkout
  5. Validate selected product name and total amount
  6. Finalize purchase and confirm success
  7. Reset App State and log out


## 📦 Tech Stack

🚀 **MicrosoftEdge** - Browser_Name
🧪 **WebdriverIO** – Test_framework
🧠 **JavaScript (ES6)** – Scripting
🧰 **Mocha** – Test runner
📊 **Allure** – Report generation


## 🚀 How to Run
-->If all test cases run separately, then use the command **npm run wdio**
-->If all test cases run together, then use the command **npm run altogether**
-->If run generates an Allure report for result analysis, then use the command **npm run getReport**




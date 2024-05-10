#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance: number = 17500;
let pinCode: number = 12345;
console.log(`Your current balance is :${currentBalance}`);
let pin = await inquirer.prompt([
  {
    message: "Enter your pin code :",
    type: "number",
    name: "pinCode",
  },
]);

if (pin.pinCode === pinCode) {
  console.log("Correct pin code.");

  let setOperation = await inquirer.prompt([
    {
      message: "Please select option:",
      type: "list",
      name: "operation",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);

  if (setOperation.operation === "withdraw") {
    let amount = await inquirer.prompt([
      {
        message: "Enter the amount to withdraw:",
        type: "number",
        name: "amount",
      },
    ]);
    if (amount.amount <= currentBalance) {
      currentBalance -= amount.amount;
      console.log(`Now your current balance is : ${currentBalance}`);
    } else {
      console.log("Withdrawal amount exceeds current balance.");
    }
  } else if (setOperation.operation === "fast cash") {
    let fixAmountWithdraw = await inquirer.prompt([
      {
        message: "Select from the below given amounts:",
        type: "list",
        name: "fixAmount",
        choices: ["5000", "10000", "15000", "20000"],
      },
    ]);
    if (fixAmountWithdraw.fixAmount <= currentBalance) {
      currentBalance -= fixAmountWithdraw.fixAmount;
      console.log(`Now your current balance is : ${currentBalance}`);
    } else {
      console.log("Withdrawal amount exceeds balance current balance.");
    }
  } else {
    console.log(`Your current balance is:  ${currentBalance}`);
  }
} else {
  console.log("Incorrect pin code.");
}

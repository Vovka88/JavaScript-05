import transactions from "../data/transactions.js";
console.log(transactions);

const makeTransactionTableRow = (arg) => {
  const { id, amount, date, business, name, type, account } = arg;
  return `<tr>
            <td>${id}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td>${business}</td>
            <td>${type}</td>
            <td>${name}</td>
            <td>${account}</td>
            </tr>`;
};

const transactionTable = document.querySelector(".js-transaction-table");
const transactionTableRowMarkup = transactions
  .map(makeTransactionTableRow)
  .join("");

transactionTable.insertAdjacentHTML("beforeend", transactionTableRowMarkup);

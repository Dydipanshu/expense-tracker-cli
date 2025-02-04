import * as readlineSync from 'readline-sync';

export interface AddExpense {
  amount: number;
  category: string;
  description: string;
  date: Date;
}

export const Add = () => {
  const amount = readlineSync.questionFloat("Enter amount of the product: ");
  const category = readlineSync.question("Enter Category: ");
  const description = readlineSync.question("Enter Description: ");
  const dateInput = readlineSync.question("Enter expense date (DDMMYYYY or DD-MM-YYYY): ");

  const datePattern = /^(\d{2})(?:[-]?)(\d{2})(?:[-]?)(\d{4})$/;
  const match = dateInput.match(datePattern);

  if (!match) {
    console.error('Invalid date format entered. Please use DD-MM-YYYY or DDMMYYYY.');
    return;
  }

  const [_, day, month, year] = match.map(Number);

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    console.error('Invalid date entered.');
    return;
  }

  const expense: AddExpense = {
    amount,
    category,
    description,
    date,
  };

  console.log('\nExpense added:');
  console.log(`Amount: ${expense.amount}`);
  console.log(`Category: ${expense.category}`);
  console.log(`Description: ${expense.description}`);

  const formattedDate = `${String(expense.date.getDate()).padStart(2, '0')}-${String(expense.date.getMonth() + 1).padStart(2, '0')}-${expense.date.getFullYear()}`;
  console.log(`Date: ${formattedDate}`);
}

#!/usr/bin/env node
import * as readlineSync from 'readline-sync';
import { Add } from './Commands/add';

const commandList: { [key: number]: () => void } = {
  1: Add,
};

const showMenu = () => {
  console.log('Please choose a command to run:');
  console.log('1. Add Expense');
};

const main = () => {
  showMenu();
  const commandChoice = readlineSync.questionInt('Enter the number of the command you want to run: ');

  const command = commandList[commandChoice];
  if (command) {
    command();
  } else {
    console.log('Invalid command selected. Exiting...');
  }
};

main();

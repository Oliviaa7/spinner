const string = '|/-\\|/-\\|\n'
charsOfStr = string.split('');
let timer = 100;

for (let i = 0; i < charsOfStr.length; i++) {
  setTimeout(() => {process.stdout.write('\r' + charsOfStr[i])}, timer);
  timer = timer + 200;
};

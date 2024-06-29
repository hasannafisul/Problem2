const count_character = (str) => {
  str = str.replace(/\s+/g, "").toUpperCase();

  let charcount = {};
  let order = [];
  for (let char of str) {
    if (charcount[char]) {
      charcount[char]++;
    } else {
      charcount[char] = 1;
      order.push(char);
    }
  }
  for (let char of order) {
    console.log(`${char}-${charcount[char]}`);
  }
};

count_character("Amolya Sharma");

// 1. Write a function that simply return a repeat of string a given number times
const repeatString = (string, number) => {
  if (number <= 0) return '';
  if (number === 1) return string;
  return string + repeatString(string, number - 1);
};

// 2. Write a function that return a reverse of given string
const reverseString = (string) => {
  return string.split('').reverse().join('');
};

// 3. Write a function that determines whether or not be a leap year
const isLeapYear = (year) => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
};

// 4.Write a function calculate the sum of every number between 2 number
const caculateSum = (min, max) => {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

//5a. Write a function covert ^F to ^C
const convertTemp = (temp) => {
  return ((temp - 32) / 1.8).toFixed(1);
};

//5b. Write a function convert ^C to ^F
const convertTemp2 = (temp) => {
  return (temp * 1.8 + 32).toFixed(1);
};

//6. Write a fucntion that determines a string whether or not palindrome
const isPolindromeString = (string) => {
  // Replace all the space in string using regular expresion
  //(\s for all the space or new line or tabs in the string)
  const str = string.toLowerCase().replace(/\s/g, '');

  const reverseString = str.split('').reverse().join('');
  if (reverseString === str) return true;
  else return false;
};

//7.Write a ceasar cipher function...
const caesar = function (word, num) {
  let solved = '';
  num = ((num % 26) + 26) % 26;
  for (let i = 0; i < word.length; i++) {
    let ascii = word[i].charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      solved += String.fromCharCode(((ascii - 'A'.charCodeAt(0) + num) % 26) + 'A'.charCodeAt(0));
    } else if (ascii >= 97 && ascii <= 122) {
      solved += String.fromCharCode(((ascii - 'a'.charCodeAt(0) + num) % 26) + 'a'.charCodeAt(0));
    } else {
      solved += word[i];
    }
  }
  return solved;
};

//A. Create a CD constructor
class CD {
  constructor(id, name, singer, numOfSong, price) {
    this.id = id;
    this.name = name;
    this.singer = singer;
    this.numOfSong = numOfSong;
    this.price = price;
  }
}
class CDList {
  constructor(length) {
    this.list = Array.apply(null, Array(length));
  }
  add(item) {
    if (this.list[this.list.length - 1] !== undefined) return alert('Array fulled');
    if (this.list.some((ele) => ele?.id === item.id)) return alert(`Item has the id ${item.id} already exit in array`);
    const index = this.list.indexOf(undefined);
    if (index >= 0) {
      this.list[index] = item;
      alert(
        `Add successfully item ${item.id} name:${item.name} singer:${item.singer} CD-price:${item.price} number of songs:${item.numOfSong}`
      );
    } else {
      alert('Add failed');
    }
  }
  numOfCD() {
    return this.list.filter((item) => item !== undefined).length;
  }
  totalPrice() {
    let sum = 0;
    this.list.forEach((item) => {
      if (item !== undefined && item.price) {
        sum += item.price;
      }
    });
    return sum;
  }
  sortDesPrice() {
    return this.list.sort((a, b) => {
      if (a === undefined || b === undefined) {
        return 0;
      } else {
        return b.price - a.price;
      }
    });
  }
  sortIncName() {
    return this.list.sort((a, b) => {
      if (a === undefined || b === undefined) {
        return 0;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
  printList() {
    return this.list.filter((item) => item !== undefined);
  }
}
//Khoi tao 1 doi tuong CD
const cd = new CD(1, 'acb', 'sdad', 2, 20);

//Khoi tao 1 doi tuong mang gon n phan tu undefined
const arr = new CDList(20);

//Them vao mang
arr.add(cd);
const cd2 = new CD(2, 'ecd', 'sdad', 2, 30);
arr.add(cd2);
const cd3 = new CD(3, 'fba', 'sdad', 2, 25);
arr.add(cd3);
const cd4 = new CD(4, 'bba', 'sdad', 2, 25);
arr.add(cd4);

console.log('Sap xep mang giam dan theo gia tien cua CD');
arr.sortDesPrice();
console.log(arr);

console.log('Sap xep theo tang dan cua ten CD');
arr.sortIncName();
console.log(arr);

console.log('In toan bo mang ra');
const print = arr.printList();
console.log(print);

let myString = 'EEllllllllzzzzeeerrooo';

let result = myString.split('')
.filter((ele,index,self) => (self.indexOf(ele)===index))
    .join('');

console.log(result);
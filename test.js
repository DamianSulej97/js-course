var birthday = new Date(1974, 1, 13, 9, 31, 20);
var birthday2 = new Date(1974, 1, 13, 9, 31, 20);

console.log(birthday.getMonth());

console.log(birthday.getFullYear());

console.log(birthday.getDate());

console.log(birthday.getDay());

console.log(birthday.getHours());

console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}

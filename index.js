//1
const isGreater = (num1, num2) => {
  //write a condition that checks if num1 is greater than num 2 and if it is return true else return false
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}

//2
const isTeenager = (age) => {
  //write a condition that checks if age is greater or equal to 13 and less than or equal to 19 if it is then return true, else return false
  if (age >= 12 && age <= 19) {
    return true;
  } else {
    return false;
  }
}

//3
const favoriteSeason = (season) => {
  //write a function that checks 
  //if season is equal to "summer" if it is return "summer is your favorite season"
  //otherwise check if season is equal to "spring" if it is return "spring is your favorite season"
  //otherwise check if season is equal to "winter" if it is return "winter is your favorite season"
  //otherwise check if season is equal to "fall" if it is return "fall is your favorite season"
  //else return "input is not a season, try again"
  if (seasom === "summer") {
    return "summer is your favorite season";
  } else if (season === "spring") {
    return "spring is your favorite season";
  } else if (season === "winter") {
    return "winter is your favorite season";
  } else if (season === "fall") {
    return "fall is your favorite season";
  } else {
    return "input is not a season, try again";
  }
}
  

//4
  /* write a function determineGrade, that takes in one parameter, grade. That prints the grade of a person using the following conditions
    ->A if grade>85 and <= 100
    ->A-if grade>80 and <=85
    ->B if grade>70 and <=80
    ->C if grade>60 and <=70
    ->D if grade>50 and <=60
    ->E if grade>40 and <=50
    ->Failed if grade <= 35 should print 'candidate failed' 
    else 'invalid grade entered
  */
// write your function under this comment ***
const determineGrade = (grade) => {
  if (grade > 85 && grade <= 100) {
    return "A";
  } else if (grade > 80 && grade <= 85) {
    return "A-";
  } else if (grade > 70 && grade <= 80) {
    return "B";
  } else if (grade > 60 && grade <= 70) {
    return "C";
  } else if (grade > 50 && grade <= 60) {
    return "D";
  } else if (grade > 40 && grade <= 50) {
    return "E";
  } else if (grade <= 35) {
    return "candidate failed";
  } else {
    return "invalid grade entered";
  }
}
//uncomment the line below once you have written your function
console.log(determineGrade(70)); //should output C

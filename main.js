/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(num){
  let greaterThan5 = num > 5
  return greaterThan5
}


function isNewTopScore(score, oldTopScore){
  return score > oldTopScore
}

function isInDanger(grade){
let isGrade = grade >= 60 &&  grade <=71
return isGrade
}

function isCoasting(speed){
  let driveSpeed = speed >= 72 && speed <=83
  return driveSpeed
}

function isSucceeding(num1){
  let grade = num1 >= 84 && num1 <=92
  return grade
}

function isFailing(fail){
let currentGrade = fail < 60
return currentGrade 
}

function isAcing(pass){
  let currentGrade = pass > 92
  return currentGrade
}

function isStudent(me){
  let aPerson = me ===  'student'
  return aPerson
}

function isTeacher(Kyle){
  let aTeacher = Kyle === 'teacher'
  return aTeacher
}

function isAdmin(bossMan){
  let authority = bossMan === 'admin'
  return authority
}

function isElementary(schoolLevel, schoolGrade){
  let level = schoolLevel === 'elementary'
  return level 
}

function areDifferentPeople(Sam, Jenny){
let notSame = Sam !== Jenny
return Sam !== Jenny
}

function isMiddleSchoolTeacher(str, num) {
  return str === 'teacher' && num >=6 && num <=8
}

function notAnElementarySchoolAdministrator(str1, str2) {
  return str1 !== 'elementary' || str2 !== 'admin'
}





/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}

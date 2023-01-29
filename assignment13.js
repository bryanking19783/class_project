function Person(firstname, middlename, lastname, dob, sex, hle){

  this.firstname = firstname;
  this.middlename = middlename;
  this.lastname = lastname;
  this.dob = dob;
  this.sex = sex;
  this.hle = hle;


  this.fullname = function(){
   return this.firstname + " " + this.lastname;
  }


}

const person1 = new Person("Darwin", "Witosi", "Waterson", "1986-10-06", "male", "primary");
const person2 = new Person("Bryan", "Kuma", "Williams", "2011-04-30", "male", "secondary");



document.getElementById('text1').innerHTML = "Hello my name is "
+ person1.fullname() + ".<br>I was born in "+ person1.dob+ ".<br> I am "+person1.sex +
" and in "+ person1.hle +" school.";

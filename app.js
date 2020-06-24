//chapter 21-25


// task1
//  var firstname = prompt('enter first name');
//  var lastname = prompt('enter last name');

//  var fullname = firstname + lastname;
//  alert('welcome '+ fullname) 

// task2
// var mobile_model = prompt('enter your favourite mobile: ')
// var l = mobile_model.length
// alert("my favourite mobile is : "+ mobile_model+'\n'+'length of string is : '+ l)

//task3
// var string = 'Pakistani'
// var index = string.indexOf('n')
// alert('string: '+string+'\n'+"index of 'n' : "+index)

//task4
//  var string = 'hello world'
//  var lastindex = string.lastIndexOf('l')
//  alert('string: '+string+'\n'+"last index of 'l': "+lastindex)

//task5
// var string = 'Pakistani'
// var index_at = string.charAt(3)
// alert('string: '+string+'\n'+'character at index 3: '+index_at)

//task6
//   var firstname = window.prompt('enter first name');
//   var lastname = window.prompt('enter last name');
//   var fullname = firstname.concat(' ',lastname);
//   document.write('welcome '+ fullname) 

//task7
//  var str1 = 'hyderabad';
//  document.write("city : "+str1)
//  var str2 = str1.replace("hyder","Islam")
//  document.write("<br>After Replacement: "+str2)

//task8
// var msg = 'Ali and Sami are best friends. They play cricket and football together'
// document.write(msg)
// var replacement = msg.replace(/and/gi, "&")
// document.write('<br> after replacement: '+replacement)

//task9
// var string = '472'
// var number = parseInt(string)
// document.write('value: '+string+'<br> type: '+typeof(string)+' <br> value: '+number+'<br> type: '+typeof(number));

//task10 
// var input = window.prompt('user input')
// document.write('user input: '+input+'<br>upper case: '+input.toUpperCase())

//task11
// var input = window.prompt('user input')
 
// function titleCase(input){
//   str = input.toLowerCase().split(' '); 
//   for (var i = 0; i < str.length; i++) { 
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
//   } 
//   return str.join(' '); 
// }
//   document.write('user input: '+input+'<br>title case: '+titleCase(input))
 
//task12
// var num = 35.36
// var cnvrt =num.replace('.','')
// var str = cnvrt.toString()
// document.write('number: '+num+'<br> string: '+str)

//task13

// var input = prompt('enter your name');
// for(var i = 0;i<input.length;i++)
// {
//     if(input.slice(i)==='@'|| '.'||','||'!')
//     {
//         document.write('enter a valid name');
//         break;
//     }
//     else{
//         document.write(input);
//         break;
//     }
// }

//task14

// var arr = ["cake","apple pie","cookie","chips","Patties"]
// var input = prompt('welcome to ABC bakery.What do you want to order sir/mama?');

// var test = input.toLowerCase(); 
// var flag = true;

// for(var i = 0; i<arr.length; i++)
// {
  
//     if(arr[i]===test)
//     {

//         document.write(input +' is available at index '+i+' in our bakery');
//         flag = true
//         break;

//     }
//     else{
      
//        flag = false;
//        continue;
//     }

// }
// if(flag===false){
//     document.write('not available')
// }

//chapter 26-30

//task1
// var input = prompt('enter a positive integer');

// var number = input;
// var roff = Math.round(input);
// var fvalue = Math.floor(input);
// var cvalue = Math.ceil(input);

// document.write('number = '+number+'<br>'+'round off value = '+roff+'<br>'+'floor value = '+fvalue+'<br>'+'ceil value = '+cvalue);

//task2
// var input = prompt('enter a negative integer');

// var number = input;
// var roff = Math.round(input);
// var fvalue = Math.floor(input);
// var cvalue = Math.ceil(input);

// document.write('number = '+number+'<br>'+'round off value = '+roff+'<br>'+'floor value = '+fvalue+'<br>'+'ceil value = '+cvalue);

//task3

// var input = prompt('enter a negative number ');

// document.write('The absolute value of '+input+' is '+Math.abs(input));

//task4

// var value = Math.floor(Math.random() * 6) + 1  

// document.write('Random dice value: '+value);





































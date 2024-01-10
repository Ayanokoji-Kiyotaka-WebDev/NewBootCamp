// // 2


// [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]



// //  3 bc string country with the value "USA".  
// [ 'U', 'S', 'A' ]


// //  Bonus 


// //bc its  empty array

// [ undefined, undefined ]



// exerice 2 



const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];



             const people = users.map(user => 'hello'+ user.firstName)
             console.log(people);


             // 2

             const full = users.filter((ful)=>{
                users.role === 'Full Stack Resident'
             })
             console.log(full);


             // Exercise 3 : Star Wars

             const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

             const mainEpic = epic.reduce((x,y)=>{

                return x + ' ' + y
            
             
             })

             console.log(mainEpic);


             //  Exercise 4 : Employees #2


 

             const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
              


         

               const  newStudents = students.filter((student)=>{
                

                   return students.isPassed
               })

               console.log(newStudents);


               // bouns
               
               const passedStudents = students.filter(student => student.isPassed);

               passedStudents.forEach(student => {
                  console.log('Good job ' +student.name, 'you passed the course in '  + student.course );
              });
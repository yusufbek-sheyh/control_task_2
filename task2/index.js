var Users = {
    // 

    yusuf :  {
    name : "yusuf",
    userName: "nuriddinov",
    salary : 326 ,
    age : 15,
    },
    
    // 

    Akmal: {
    name: "Akmal",
    userName: "O'ktamov",
    salary: 800,
    age: 27,
    },

    // 

    Oybek: {
    name: "Oybek",
    userName: "Sattorov",
    salary:1500,
    age: 36,
    },

    // 
    
    Umid: {
    name: "Umid",
    userName: "Abdushukurov",
    salary: 400,
    age: 21,
    },

    // 

};
// var end


// function start

function sumSalary(Users) {
    
    var salary = 0;

    for (var user in Users) {
    salary += Users[user].salary;
    }

    return salary;
}
// fuctione nd

// fuctione start

    function averageAge(Users) {

            var age = 0;
            var length = 0;

            for (var user in Users) {
            length++;
            age = age + Users[user].age;
            }

            return age / length;
            
    }

    // fuctione nd



// concole 

console.log(sumSalary(Users));
console.log(averageAge(Users));

// concole end
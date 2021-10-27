//O guia estelar de JavaScript > 5 praticando e avançando > exercícios

//1

    let weight

//2

    console.log(typeof weight) //undefined

//3

    let name, age, stars, isSubscrubed,

        name = 'Pedro'
        age = 26
        stars = 5.4
        isSubscrubed = false

//4

    let student = {} //object

//4.1

    let student = {
        name: 'Pedro',
        age: 26,
        weight: 98,
        isSubscrubed: false
    }

//4.2

    console.log(`${student.name} tem ${student.age} anos e ${student.weight}Kg.` )

//5

    let students=[]

//6

    students = [
        student
    ]

    console.log(students)

//7

students = [
    student
]

console.log(students[0])

//8
    let student = {
        name: 'Pedro',
        age: 26,
        weight: 98,
        isSubscrubed: false
    }

    let student2 = {
        name:'João',
        age: 24,
        weight: 103,
        isSubscrubed:false
    }

    students = [
        student,
        student2
    ]
    console.log(students[1])
    //ou
    students[1] = student2
    console.log(students)
    

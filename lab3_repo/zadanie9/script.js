class Person {
    constructor(name,func,image,desc) {
      this.name = name;
      this.func = func;
      this.image= image;
        this.desc = desc;
    }
}

var opis0 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero voluptates soluta vero vitae quisquam corrupti dolorum nihil eius quasi eaque error eum dolor, natus atque itaque? Odio, atque ut. Officia recusandae exercitationem vero eum, qui cupiditate soluta? Recusandae ipsam soluta reiciendis temporibus, dolore ex odio aliquid autem excepturi a quasi quas consequatur? Ea doloribus est aperiam, dicta sed pariatur aliquid, laudantium doloremque quos, nihil et sequi rerum quam nisi. Adipisci consequatur dolore quia illum!";
var opis1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusamus odio suscipit placeat doloribus perspiciatis fuga maiores corrupti amet dignissimos magnam quis omnis, incidunt ducimus nemo distinctio, cumque recusandae assumenda!";
var opis2= "sit amet consectetur, adipisicing elit. Quae similique totam quibusdam natus ullam voluptates possimus fugiat expedita ipsa harum, velit in. Nesciunt dolores corporis facere atque. Quod quis beatae eveniet similique! Aliquid recusandae beatae magni voluptates, voluptate fuga!";
var opis3="orem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam, eligendi nisi expedita sequi suscipit laudantium eum tempora ullam beatae eaque placeat! Odio sit, adipisci molestias mollitia voluptas debitis eum maxime harum veniam, labore in? Dolor sunt ipsa non ratione eligendi. Sed deleniti sapiente molestias ad perspiciatis laudantium? Neque veniam ea rerum fuga modi saepe aperiam rem impedit. Necessitatibus omnis sapiente, laborum dolorem eaque, autem officia laboriosam recusandae, ipsa dolorum dolore accusantium placeat reiciendis in?";
var persons = [
    
    new Person("Mike Dike","Assistant","person0.png",opis0),
    new Person("Josh Jj","Manager","person1.png",opis1),
    new Person("Kole Bennet","Director","person2.png",opis2),
    new Person("Travis Cott","CEO","person3.png",opis3),
    new Person("Lolly El","COO","person4.png",opis1),

];

var curr=0
changePerson(curr);


document.getElementById("previous").addEventListener("click", previousPerson);
document.getElementById("next").addEventListener("click", nextPerson);
document.getElementById("random").addEventListener("click", randomPerson);

function changePerson()
{
    document.getElementById("name").innerText = persons[curr].name;
    document.getElementById("function").innerText = (String)(persons[curr].func).toUpperCase();
    document.getElementById("description").innerText = persons[curr].desc;
    document.getElementById("img").src = persons[curr].image;
}

function previousPerson() {
    if(curr!=0)
    {
        curr-=1;
        changePerson();

    }
}

function nextPerson()
{
    if(curr!=persons.length-1)
    {
        curr+=1;
        changePerson();

    }
}

function randomPerson()
{
    var random_number;
    do
    {
        random_number = Math.floor(Math.random() * persons.length);

    }while(random_number == curr)
    
    curr=random_number;
    changePerson();
}
import "./style.css"

// decleared DOM Elements 

const todoConatainer = document.querySelector(".container") as HTMLDivElement;
const myForm=document.querySelector("#form") as HTMLFormElement;
const todoTitleInput=document.querySelector(".titleInput") as HTMLInputElement;
const todoDesInput=document.querySelector(".desInput") as HTMLInputElement;


//todos interFace

interface Todo {
    title:string;
    description:string;
    isCompleted:boolean;
    id:number;
}

// todos array for to store data
const todos:Todo[]=[];

// form hadling to store todos data
myForm.onsubmit=(e:SubmitEvent)=>{
    e.preventDefault();
    const todo:Todo={
        title:todoTitleInput.value,
        description:todoDesInput.value,
        isCompleted:false,
        id:Math.floor(Math.random()*212)
        }

        // push data to todos Array
        todos.push(todo)
        
        // clear value of input boxes
        todoTitleInput.value="";
        todoDesInput.value="";

        // reander data on page
        renderTodo(todos)
}

const genrateDom=(title:string,description:string,isCompleted:boolean)=>{
    const div:HTMLDivElement=document.createElement("div");          
    div.setAttribute("class","work");

    const div2:HTMLDivElement=document.createElement("div");
    div2.setAttribute("class","content");

    const divTitle:HTMLHeadingElement=document.createElement("h3");
    divTitle.innerText=title
    div2.append(divTitle);

    const desP:HTMLParagraphElement=document.createElement("p");
    desP.innerText=description;
    div2.append(desP);

    div.append(div2)

    const div3:HTMLDivElement=document.createElement("div");
    div3.setAttribute("class","btns")

    const checkInput:HTMLInputElement=document.createElement("input");
    checkInput.type="checkbox";
    checkInput.checked=isCompleted===true?true:false
    div3.append(checkInput);

    const button:HTMLButtonElement= document.createElement("button");
    button.setAttribute("class","delBtn");
    button.innerText="-"

    div3.append(button)

    div.append(div3)

    todoConatainer.append(div)
}

const renderTodo=function(todos:Todo[]){
    // const div= <HTMLDivElement>document.querySelector(".work");
    // div.innerText=""
    todos.forEach((i)=>{
        genrateDom(i.title,i.description,i.isCompleted)
    })
}
const DivDisplay  = document.getElementById('container') as HTMLDivElement;

function add(){
    const TextBox = document.getElementById("inputext") as HTMLInputElement;
    const inputvalue: string = TextBox.value;
    if(inputvalue===""){
        alert('Not a valid todo');
    }
    else{

    }

}
















































// const div = document.querySelector("#container") as HTMLDivElement
// function add(){
//     const todoTextBox = document.getElementById("todo") as HTMLInputElement;
//     const value:string = todoTextBox.value;
//     if(value===""){
//         alert("please enter valid todo")
//     }else{
//         const todoDiv = document.createElement("div") as HTMLDivElement
//         const todoText = document.createElement("p") as HTMLParagraphElement
//         const deleteTodo = document.createElement("span") as HTMLSpanElement

//         todoText.innerText= value; 
//         deleteTodo.innerText= `X`;

//         todoText.style.display="inline"
//         todoText.style.marginRight="20px"

//         deleteTodo.style.cursor="pointer"

//         todoDiv.append(todoText,deleteTodo)

//         deleteTodo.addEventListener("click",event=>{
//             if (confirm("Have you completed this task?")) {
//                 const target = event.target as HTMLSpanElement
//                 target.parentElement?.remove();
//             }
//         })

//         todoText.addEventListener("click",event=>{
//             const target = event.target as HTMLParagraphElement
//             target.style.textDecoration='line-through'
//         })
//         div.append(todoDiv)
//         todoTextBox.value = ""
//     }
// }
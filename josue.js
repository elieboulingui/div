
function je(){
    const body = document.querySelector("body")
const div = document.querySelector("button")
console.log(body ,div)
    div.setAttribute("id","je");
    div.innerHTML= "je suis";
    div.style.height="300px";
    div.style.width="400px";
    div.style.color='red';
    div.style.backgroundColor='blue';
    document.body.appendChild(div);
    const btn = document.querySelector("#btn");
    const input = document.querySelector("input")
    body.innerHTML= '<p>' +input.value + '</p>';
}
function jes(){
    const btn = document.querySelector("#btn");
    const input = document.querySelector("input")
    const body = document.querySelector("body")
    body.innerHTML= '<p>' +input.value + '</p>';
}
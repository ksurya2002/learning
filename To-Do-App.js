let myform = document.getElementById("myform");
let myinput = document.getElementById("myinput");
let mysubmit = document.getElementById("mysubmit");


myform.addEventListener("submit",
    (data) => {
        data.preventDefault();
        createItem(myinput.value);


    });

function deleteItem(d) {
    d.parentElement.remove()
}

createItem = (v) => {

    let template = `<li>${v}<button onclick="deleteItem(this)">Delete</button></li>`;
    mylist.insertAdjacentHTML("beforeend", template);
    myinput.value = "";

    myinput.focus();
    mysubmit.disabled = true;
  

}


myinput.addEventListener("input", function button() {
    if (myinput.value.trim() === "") {
        mysubmit.disabled = true;
    }
    else if (myinput.value.trim() !== "") {
        mysubmit.disabled = false;
    }

});

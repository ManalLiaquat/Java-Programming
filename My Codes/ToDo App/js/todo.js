//To Do App
function add() {
    var input = document.getElementById("val");
    var incompleteList = document.getElementById("incompleteList");
    var li = document.createElement("LI");
    var btn = document.createElement("BUTTON");
    var btnText = document.createTextNode("Delete");
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    var completedList = document.getElementById("completedlist");

    if (input.value === "") {
        alert("You should enter something!")
    }
    else {
        var text = document.createTextNode(input.value);
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(btn);
        incompleteList.appendChild(li);
        input.value = "";

        checkbox.onclick = function () {
            li.removeChild(checkbox);
            completedList.appendChild(li);
            incompleteList.removeChild(li)
        }

        btn.appendChild(btnText);
        btn.onclick = function () {
            var li = this.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
        }

        //Start of styling btn
        btn.style.backgroundColor = "#b71c1c";
        btn.style.color = "white";
        btn.style.margin = "10px 10px 10px 20px"
        btn.onmouseover = function () {
            this.style.backgroundColor = "#7f0000"
        }
        btn.onmouseout = function () {
            this.style.backgroundColor = "#b71c1c"
        }
        //End of btn stying

    }

}

function deleteAll() {
    alert("Are you sure?");
    document.getElementById("incompleteList").innerHTML = "";
    document.getElementById("completedlist").innerHTML = "";
}
//End of todo app coding

//start of clock
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
//end of clock
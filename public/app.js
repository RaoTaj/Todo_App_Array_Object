function mustafaDelete(){
    var allText = document.getElementById('txt');
    allText.innerHTML = "";
    input.value = "";
}
function mustafaAdd(){
    var para = document.createElement('P');
    var input = document.getElementById("input");
    var Node = document.createTextNode(text);
    var text = input.value;
    para.appendChild(Node)
    input.value = " ";

    var button = document.createElement('button');
    var btntext = "Delete";
    var node = document.createTextNode(btntext);
    button.appendChild(node);

    button.setAttribute('onclick','del(this)');
    para.appendChild(button)
    
    var buttonEdit = document.createElement('button');
    var btntext = "Edit";
    var nodeEdit = document.createTextNode(btntext);
    buttonEdit.appendChild(nodeEdit);
    
    buttonEdit.setAttribute('onclick','edit(this)');
    para.appendChild(buttonEdit);
    
    var display = document.getElementById('txt')
    display.appendChild(para)
    console.log(para)

}

function edit(element){
    var UpdatedValue = prompt("Enter the value that you want to update : ", element.parentNode.firstChild.nodeValue)
    element.parentNode.firstChild.nodeValue = UpdatedValue;
}
function del(element){
   element.parentNode.remove();
}
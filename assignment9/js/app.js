var TodoArr = [];
function submit(){
    var DataText = document.getElementById("DataText");
    TodoArr.push(DataText.value);
    var ele = '<ul>'
    TodoArr.forEach((items,key) =>{
        ele += `<li><input type="text" class="itemText" id="${key}"  disabled value="${items}">  <button class="addBtn" id="editBtn" onclick="editFun(this)"><i class="fa fa-paint-brush" aria-hidden="true"></i> Edit </button> <button class="removeBtn" id="EditSubmitBTN" onclick="editSub(this)"><i class="fa fa-paper-plane" aria-hidden="true"></i> Submit</button> <button class="deleteItem" id="${key}" onclick="deleteFun(this)" ><i class="fa fa-trash" aria-hidden="true"></i> Delete </button> </li>`
    console.log(key);
    } );
    ele+= '</ul>';
    var listContainer = document.getElementById('listContainer').innerHTML = ele;
    DataText.value = "";
}
function allDelete(){
    var listContainer = document.getElementById("listContainer");
    listContainer.innerHTML="";
    TodoArr = [];

}
function deleteFun(e){
    var index = e.id;
    var checking = TodoArr.splice(index,-1);
    console.log(checking);
    e.parentNode.remove();
}
function editFun(e){
    var parent = e.parentNode;
    var firstChild = parent.firstChild;
    firstChild.removeAttribute("disabled");
    e.classList.remove("addBtn");
    e.classList.add("removeBtn");
    e.nextElementSibling.classList.add("addBtn");
    e.nextElementSibling.classList.remove("removeBtn");
}
function editSub(e){
    e.classList.add("removeBtn");
    e.classList.remove("addBtn");
    e.previousElementSibling.classList.add("addBtn");
    e.previousElementSibling.classList.remove("removeBtn");
    var parent = e.parentNode;
    var firstChild = parent.firstChild;
    firstChild.setAttribute("disabled","");
    let index =firstChild.id;
    var newValue = firstChild.value; 
    console.log(TodoArr.splice(index,1,newValue));
}
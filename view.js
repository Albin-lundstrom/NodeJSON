fetch("/jsonfile", { method:'GET' })
.then(res => res.json())
//.then(data => console.log(data))
.then(data => data.users.forEach((element) => {
    viewFunc(element)
}));
index = 0;
let showCard = false;
function createElemClass(elem_name, elem_text, parent_elem, elem_class, elem_class_name){
    let elem = document.createElement(elem_name);
    let elem_txt = document.createTextNode(elem_text);
    elem.appendChild(elem_txt);
    elem.setAttribute(elem_class, elem_class_name)
    parent_elem.appendChild(elem);
}function createElemClassId(elem_name, elem_text, parent_elem, elem_class_name, elem_id_name){
    let elem = document.createElement(elem_name);
    let elem_txt = document.createTextNode(elem_text);
    elem.appendChild(elem_txt);
    elem.setAttribute("class", elem_class_name)
    elem.setAttribute("id", elem_id_name)
    parent_elem.appendChild(elem);
}
viewBody = document.getElementById('view-body');


const viewFunc = (data) => {
    createElemClass('div', '', viewBody, 'class', 'view-div p-2 d-flex flex-column mb-3 card');
    viewDiv = document.getElementsByClassName('view-div');

    createElemClass('div', '', viewDiv[index], 'class', 'view-div-1 p-2');
    createElemClass('div', '', viewDiv[index], 'class', 'view-div-2 card-body p-2 d-flex flex-column');
    viewDiv1 = document.getElementsByClassName('view-div-1');
    viewDiv2 = document.getElementsByClassName('view-div-2');
    
    createElemClass('div', '', viewDiv1[index], 'class', 'view-img-div');
    createElemClass('div', '', viewDiv1[index], 'class', 'view-names-div d-flex flex-column');
    viewImg = document.getElementsByClassName('view-img-div');
    viewNames = document.getElementsByClassName('view-names-div');
    
    viewImage = document.createElement("img");
    viewImage.setAttribute("class", "view-icon card-img-top");
    viewImage.style.width = "10rem";
    viewImage.src = `../img/${data.img}`
    viewImg[index].appendChild(viewImage);
    createElemClass('div', `${data.username}`, viewNames[index], 'class', 'view-names-user card-title');
    createElemClass('div', `${data.first_name}`, viewNames[index], 'class', 'view-names-first p-2"');
    createElemClass('div', `${data.last_name}`, viewNames[index], 'class', 'view-names-last p-2"');
    
    createElemClass('div', '', viewDiv2[index], 'class', 'view-birthday p-2"');
    createElemClass('div', '', viewDiv2[index], 'class', 'view-work p-2"');
    viewBirth = document.getElementsByClassName('view-birthday');
    viewWork = document.getElementsByClassName('view-work');
    
    createElemClass('h5', `${data.birthday}`, viewBirth[index], 'class', 'view-birth-h5 p-2"');
    createElemClass('h5', `${data.work}`, viewWork[index], 'class', 'view-work-h5 p-2"');

    aBtn = document.createElement("a");
    aBtn.setAttribute("class", "a-btn btn btn-danger");
    aBtn.innerText = "Edit Content";
    aBtn.href = `/card${index}`;
    viewDiv2[index].appendChild(aBtn);

    index++
}


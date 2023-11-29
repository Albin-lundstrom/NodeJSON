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
const UrlTest = (str) => /^\d+$/.test(str);

fetch("/jsonfile", { method:'GET' })
.then(res => res.json())
.then(data => viewFunc(data));
let url = window.location.href;
url = url.slice(26);
    if(UrlTest(url) == true){
        url = Number(url);
        index = url;
    }
viewBody = document.getElementById('view-body');
const viewFunc = (data) => {
    data = data.users;
    createElemClass('div', '', viewBody, 'class', 'view-div');
    viewDiv = document.getElementsByClassName('view-div');

    createElemClass('div', '', viewDiv[0], 'class', 'view-div-1');
    createElemClass('div', '', viewDiv[0], 'class', 'view-div-2');
    viewDiv1 = document.getElementsByClassName('view-div-1');
    viewDiv2 = document.getElementsByClassName('view-div-2');
    
    createElemClass('div', '', viewDiv1[0], 'class', 'view-img-div');
    createElemClass('div', '', viewDiv1[0], 'class', 'view-names-div');
    viewImg = document.getElementsByClassName('view-img-div');
    viewNames = document.getElementsByClassName('view-names-div');
    
    viewImage = document.createElement("img");
    viewImage.setAttribute("class", "view-icon");
    viewImage.src = `../img/${data[index].img}`
    viewImg[0].appendChild(viewImage);
    createElemClass('div', `${data[index].username}`, viewNames[0], 'class', 'view-names-user');
    createElemClass('div', `${data[index].first_name}`, viewNames[0], 'class', 'view-names-first');
    createElemClass('div', `${data[index].last_name}`, viewNames[0], 'class', 'view-names-last');
    
    createElemClass('div', '', viewDiv2[0], 'class', 'view-birthday');
    createElemClass('div', '', viewDiv2[0], 'class', 'view-work');
    viewBirth = document.getElementsByClassName('view-birthday');
    viewWork = document.getElementsByClassName('view-work');
    
    createElemClass('h5', `${data[index].birthday}`, viewBirth[0], 'class', 'view-birth-h5');
    createElemClass('h5', `${data[index].work}`, viewWork[0], 'class', 'view-work-h5');
}

cardForm = document.getElementById('card-form');
cardForm.action = `/card${index}`
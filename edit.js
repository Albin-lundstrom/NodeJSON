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

index = 0;
editDiv = document.getElementsByClassName('editDiv');


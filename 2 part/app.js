let trash = document.querySelectorAll('.trash');
for (const item of trash) {
    dragElement(item);

}

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.style.top = (Math.random() * 300 + 300) + "px"
    element.style.left = (Math.random() * 500 + 500) + "px"
    element.onmousedown = dragMouseDown;



    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";

        if (parseInt(element.style.top.match(/\d+/)) > 70 && parseInt(element.style.top.match(/\d+/)) < 160 && parseInt(element.style.left.match(/\d+/)) > 50 && parseInt(element.style.left.match(/\d+/)) < 120) {
            document.querySelector('.bucket__open').classList.add('active');
            document.querySelector('.bucket__closed').classList.remove('active');

            element.style.opacity = "0";

        } else {
            element.style.opacity = "1";
        };


    }



    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        document.querySelector('.bucket__open').classList.remove('active');
        document.querySelector('.bucket__closed').classList.add('active');

    }


}
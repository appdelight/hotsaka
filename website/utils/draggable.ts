

export const dragElement = () => true;

//  /**
//  * @description this method is to add dragging feature in 
//  * compose-email dialog in communication page
//  * @author jagannath
//  * @date 02/09/2021
//  * @param elmnt HTMLElement - ex: document.getElementById("some-id")
//  */
// export const dragElement = (elmnt: HTMLElement) => 
// {
//     var pos1:number = 0, pos2:number = 0, pos3:number = 0, pos4:number = 0;
//     if (document.getElementById(elmnt.id + "-header")) {
//       /* if present, the header is where you move the DIV from:*/
//       document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
//     } else {
//       /* otherwise, move the DIV from anywhere inside the DIV:*/
//       elmnt.onmousedown = dragMouseDown;
//     }
  
//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }
  
//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       // set the element's new position:
//     //   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         if(elmnt.offsetLeft + elmnt.clientWidth >= window.innerWidth ) {
//             elmnt.style.left = (elmnt.offsetLeft - 2) + "px";
//         }
//         else if (elmnt.offsetLeft - pos1 < 0){
//             elmnt.style.left = '0px';
//         }else {
//             elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//         }
      
//     }
  
//     function closeDragElement() 
//     {
//       /* stop moving when mouse button is released:*/
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }



let displayField = document.querySelector(".displayField");
let btn = document.querySelector("button");
let ListBox = document.querySelector(".list-box ul");
let list =  document.querySelector(".list-box ul li ");
 btn.addEventListener("click",(e)=>
 {
  e.preventDefault();
  let valueD = displayField.value;
  if(valueD === "") {
        alert("The input box is Empty, please write something!");
    } else{
       let li = document.createElement("li");
       li.innerHTML = valueD;
       ListBox.appendChild(li);
       li.style.borderRadius="20px";
       li.style.paddingLeft="15px";
       
       li.style.hover="rgba(238, 235, 235, 0.106)";
       let span2 = document.createElement("span");
         span2.innerHTML = "Delete";
         li.append(span2);
         span2.addEventListener("click",()=>
         {
           li.remove();
         });
       li.addEventListener("mouseover",()=>
      {
        li.style.backgroundColor="rgba(238, 235, 235, 0.106)";    
      });
      li.addEventListener("mouseout",()=>
      {
         li.style.backgroundColor=""; 
      });
      document.querySelectorAll('.list-box ul li').forEach(item => {
         item.addEventListener('click', (eve) => {
            eve.preventDefault();
             item.classList.toggle('lineThrough');
         });
     });
     
    }
    displayField.value='';
 });

"use strict";


function store(link, key){
  fetch(link)
    .then(function (respose) {
      if (!respose) {
        return console.log("error");
      } else {
        return respose.json();
      }
    })
    .then(function (infor) {
      const jsstr = JSON.stringify(infor);// jason file convert to string 

      localStorage.setItem(key, jsstr);
    })
    .catch(function (error) {
      console.log(`error is ${error}`);
    });
}
let Yala =store('yala.json','Yala'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let get_yala = getiteam("Yala");
console.log(get_yala)
console.log(get_yala.sections[0].content[1])



let Yala_content=` <section class="class1">
                
                    
<h4 class="h4">  ${get_yala.sections[0].title}</h4>
<p class="para1">${get_yala.sections[0].content[0]}</p>

<p class="para1"> ${get_yala.sections[0].content[1]}</p>
<p class="para1">${get_yala.sections[0].content[2]}</p>

<p class="para1"> ${get_yala.sections[0].content[3]}
</p>





</section>
<section class="class1 ">

    <h4 class="h4"> ${get_yala.sections[1].title}</h4>
    <p class="para1">${get_yala.sections[1].content[0]}</p>
    <p class="para1"> ${get_yala.sections[1].content[1]}</p>

    </p>
    
</section>       



<section class="class1">
    <h4 class="h4">${get_yala.sections[2].title}</h4>
    <img class="img2" src="./images/yala ele.jpeg" alt="elephant">
    <p class="para1">${get_yala.sections[2].content[0]}</p>
    <p class="para1"> ${get_yala.sections[2].content[1]}</p>
    

    

</section>

<section class="class1">
    <h4 class="h4">${get_yala.sections[3].title}
    </h4>
    <img class="img2" src="./images/entance to yala.jpeg" alt="yala entrence">
    <p class="para1">${get_yala.sections[3].content[0]}</p>
    <p class="para1"> ${get_yala.sections[3].content[1]}</p>
    
  
   
<section class="class" id="class2">


    <h4 class="h4">${get_yala.sections[4].title}
    </h4>
    <img class="img2" id="cim2" src="./images/yala animal.jpeg" alt="yala animals">
    <p class="para1">${get_yala.sections[4].content}</p>
    

</section>`
let div_div7 =document.querySelector('.divyala');
div_div7.innerHTML +=  Yala_content;
 
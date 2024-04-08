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
let Willpattu =store('willpattu.json','Will'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let get_willpattu = getiteam("Will");
console.log(get_willpattu)

console.log(get_willpattu.sections[1].content)



let Willpattu_content =` 
<section class="sub-sec">
    <div class="row">
        <div class="col">
            <h4>  ${get_willpattu.sections[0].title}</h4>
            <p>
            ${get_willpattu.sections[0].content}
            </p>
            
           



        </div>
        
    </div>
    </section>
    <section class="sub-sec ">
        <div class="row1">
            <div class="col1">
                <h4>${get_willpattu.sections[1].title} </h4>
                <p> ${get_willpattu.sections[1].content}
                </p>
                
                
                </div>

        </div>
    </section>

        <section class="class1">
            
                <h4 class="h4">${get_willpattu.sections[2].title}</h4>
                <img class="img2" src="./images/h1.jpeg" alt="elephant">
                <p class="para1">${get_willpattu.sections[2].content}
                </p>
                
        </section>

                

            <section class="class1">
                <h4 class="h4">${get_willpattu.sections[3].title}
                </h4>
                <img class="img2" src="./images/h2.jpeg" alt="yala entrence">
                <p class="para1">${get_willpattu.sections[3].content}
                    </p>
                   
                    
            </section>
           
        
              


          
        `
        let div_div6 =document.querySelector('.divwillpattu');
div_div6.innerHTML +=  Willpattu_content;
 
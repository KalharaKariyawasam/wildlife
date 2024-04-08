
  



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
let index1=store('index1.json','index'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let index = getiteam("index");
console.log (index)

let index_content = `<div>
<h1> ${index.sections[0].title}</h1>

</div>


</nav>  


<p class="wild">${index.sections[0].content}</p>
<div class="center-container">
  <a href="${index.sections[0].button_link}">
  <button class="centered-button">${index.sections[0].button_text}</button>
  </a>
</div>




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>






</section>


<section class="sub-sec">
    
        
            <h4>${index.sections[1].title}</h4>
            <div class="leopard-col">
                <img src="${index.sections[1].image_src}" alt="jungle fowl">
                

            </div>
            <p>${index.sections[1].description}</p>

<ul>
<li>${index.sections[1].facts[0]}</li>
<li>${index.sections[1].facts[1]}</li>
<li>${index.sections[1].facts[2]}</li>
<li>${index.sections[1].facts[3]}</li>
<li>${index.sections[1].facts[4]}</li>
<li>${index.sections[1].facts[5]}</li>
</ul>

            
            <a href="${index.sections[1].button_link}">
                <button  class="homeb1">${index.sections[1].button_text}</button>
            </a>

        </div>
        

    </div>
    </section>
    <section class="sub-sec">
        
    
            <h4>${index.sections[2].title}</h4>
            <div class="leopard-col">
                <img src="${index.sections[2].image_src}" alt="PURPLE-FACED LANGUR">
               
            </div>

            <ol>
                <li>
                  <p>${index.sections[2].description}</p>
                </li>
                <li>
                  <p>${index.sections[2].facts[0]},${index.sections[2].facts[1]},${index.sections[2].facts[2]},${index.sections[2].facts[3]}</p>
                </li>
              </ol>
              
           

            <a href="${index.sections[2].button_link}">
                <button class="homeb1" >${index.sections[2].button_text} </button>
            </a>
        </div>
        

    </div>
    </section>

  <section class="sub-sec">
    
    
    
            <h4> ${index.sections[3].title}
            </h4>
            <div class="leopard-col">
                <img src="${index.sections[3].image_src}">
               
                
            </div>

            <ol>
                <li>
                  <p>${index.sections[3].description}</p>
                </li>
                <li>
                  <p>${index.sections[3].description2}</p>
                </li>
              </ol>
              
            
            <a href="${index.sections[3].button_link}">
                <button class="homeb1" >${index.sections[3].button_text} </button>
            </a>

            </div>


        
    </div>

</section>`;
let div_div =document.querySelector('.divfinal');
div_div.innerHTML +=  index_content;

  
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
let Wildlife =store('Wildlife.json','Wild'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let get_wild = getiteam("Wild");
console.log(get_wild)



let Wildlife_content =` <h1>  ${get_wild.department_of_wildlife_conservation.title} </h1>
       
       
        
        
</section>
<section>
    <h2 id="p3h2">${get_wild.department_of_wildlife_conservation.sections[0].title}</h2>
    <p id="p3p1">
    ${get_wild.department_of_wildlife_conservation.sections[0].content}
        

    </p>
</section>

<section class="protected areas">
    <h2 class="p3h2h2"> ${get_wild.department_of_wildlife_conservation.sections[1].title} </h2>
   
    <!---->
    <div >
      <img  id="protectedimg" src="${get_wild.department_of_wildlife_conservation.sections[1].image}">
      
     </div>
     <br>
    <div >
        <h2 class="p3h2h2">Functions</h2>
          
        <div id="li1">
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[0]} </li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[1]}</li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[2]}</li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[3]}</ul>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[4]}
            </li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[5]}</li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].functions[6]}</li>
            
            <!---->

        </div>
        
    </div>
    <div>
        <h2 id="p3h3">Strategies</h2>
        <div id="li1">
            <li>${get_wild.department_of_wildlife_conservation.sections[1].strategies[0]}</li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].strategies[1]}
            </li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].strategies[2]}</li>
            <li>${get_wild.department_of_wildlife_conservation.sections[1].strategies[3]}</li>
            
            <!---->



        </div>
       
    </div>
</section>









<div class="gallery">
    <div class="g-item">
      <img class="g-item img" src="${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[0].image}" alt="Image 1">
      <div class="caption">${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[0].caption}</div>
      <!---->
      
    </div>
    <div class="g-item">
    
      <img  class="g-item img"  src="${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[1].image}" alt="Image 2">
      <div class="caption">${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[1].caption} </div>
      <!---->
      
    </div>
    <div class="g-item">
    
        <img  class="g-item img"  src="${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[2].image}" alt="Image 2">
        <div class="caption">${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[2].caption}</div>
        <!---->
        
      </div>
      <div class="g-item">
    
        <img  class="g-item img"  src="${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[3].image}" alt="Image 2">
        <div class="caption">${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[3].caption} </div>
        <!---->
        
      </div>
      <div class="g-item">
    
        <img  class="g-item img"  src="${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[4].image}" alt="Image 2">
        <div class="caption">${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[4].caption}</div>
        <!---->
        
      </div>
      <div class="g-item">
    
        <img  class="g-item img"  src="${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[5].image}" alt="Image 2">
        <div class="caption">${get_wild.department_of_wildlife_conservation.sections[1].gallery_images[5].caption}</div>
        <!---->
      </div>
    <!-- Add more gallery items -->
  </div>
  <section>
    <iframe class="map2" class="f1" src="${get_wild.department_of_wildlife_conservation.sections[1].map}"></iframe>
  </section>`

  let div_div2 =document.querySelector('.divwild');
div_div2.innerHTML +=  Wildlife_content;

  
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
let Animal =store('Animals.json','Animal'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let get_animal = getiteam("Animal");
console.log(get_animal)
console.log(get_animal.national_parks[1].link)


    let animal_Content =`   <section class="class1">
    <h4 class="h4">${get_animal.animals[0].name}</h4>
    <img class="img2" src="${get_animal.animals[0].image}" alt="junglefowl">
    <p class="para1">${get_animal.animals[0].description[0]}</p>
    <p class="para1">${get_animal.animals[0].description[1]}</p>
    


</section>


<section class="class1">
    <h4 class="h4"> ${get_animal.animals[1].name}</h4>
    <img  class="img2" src="${get_animal.animals[1].image}" alt="leopard">
    


    <p class="para1">${get_animal.animals[1].description[0]}</p>
    <p class="para1">${get_animal.animals[1].description[1]}</p>
    
</div>
</section> 

</div>
<section class="class1">


    <h4 class="h4"> ${get_animal.animals[2].name}
    </h4>
    <img class="img2" src="${get_animal.animals[2].image}" alt="magpie">
    <p class="para1">${get_animal.animals[2].description[0]}</p>
    <p class="para1">${get_animal.animals[2].description[1]}</p>
   



</section>
<section class="class1">

    <h4 class="h4"> ${get_animal.animals[3].name}

    </h4>
    <img class="img2" src="${get_animal.animals[3].image}" alt="SRI LANKAN HILL MYNA ">
    <p class="para1">${get_animal.animals[3].description[0]}
        
        </p>
    <p class="para1">${get_animal.animals[3].description[1]}

    </p>
   

</section>
<section class="class1">

    <h4 class="h4"> ${get_animal.animals[4].name}</h4>
    <img class=" img2" src="${get_animal.animals[4].image}" alt="RED-BACKED FLAMEBACK">
    <p class="para1">${get_animal.animals[4].description[0]}
    </p>
    <p class="para1">${get_animal.animals[4].description[0]}
    </p>
   



</section>

<section class="class1">



    <h4 class="h4"> ${get_animal.animals[5].name}
    </h4>
    <img class="img2" src="${get_animal.animals[5].image}" alt="TRIMERESURUS TRIGONOCEPHALUS ">
    <p class="para1">${get_animal.animals[5].description[0]}

    </p>
    <p class="para1">${get_animal.animals[5].description[0]}</p>
   


</section>




<section class="class1">
    <h4 class="h4"> ${get_animal.animals[6].name}
    </h4>
    <img class="img2" src="${get_animal.animals[6].image}" alt="SRI LANKAN KRAIT ">
    <p class="para1">${get_animal.animals[6].description[0]}</p>
    <p class="para1">${get_animal.animals[6].description[1]}</p>
   


</section>

<br><br>

   <section class="class1">
        <h5 class="h4">${get_animal.national_parks[0].name}</h5>
        <img  class="img2" src="${get_animal.national_parks[0].image}">
        <p class="para1">${get_animal.national_parks[0].description}

        </p>
        <a href="${get_animal.national_parks[0].link}">
        <button class="b1">Read more</button>
        </a>
       
        </section>
        <br>
        <br>
        <section class="class1">
                
                    <h5 class="h4">${get_animal.national_parks[1].name}</h5>
                    <img class="img2" src="${get_animal.national_parks[1].image}">
                   
                    <p class="para1">${get_animal.national_parks[1].description}

                    </p>
                    <a href="${get_animal.national_parks[1].link}">
                    <button class="b1">Read more</button>
                    </a>
                    
                    
                    </section>`
                    let div_animals = document.querySelector('.divanimal');
                    div_animals .innerHTML += animal_Content;
                   
                
                  
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
let Leopard =store('leopard.json','Leopard'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let get_leopard = getiteam("Leopard");
console.log(get_leopard)
console.log(get_leopard.sections[2].reducing_methods.description)


    let leopard_Content =  ` <h3 id="p4div1">${get_leopard.sections[0].title}</h3>

      


    <section class="sub-sec">
       
            
                <h4>${get_leopard.sections[0].subsections[0].name}</h4>
                <div class="leopard-col">
                    <img src="${get_leopard.sections[0].subsections[0].image_src}" alt="leopard">
                    
                    


                </div>

                <p>${get_leopard.sections[0].subsections[0].description}</p>
                
               

            </div>
            

        </div>

       
                <h4> ${get_leopard.sections[0].subsections[1].name}</h4>
                <div class="leopard-col">
                    <img src="${get_leopard.sections[0].subsections[1].image_src}" alt="leopard">
                    
                  


                </div>
                <p>${get_leopard.sections[0].subsections[1].description}</p>
                
                

            </div>
            

        </div>

        
                <h4> ${get_leopard.sections[0].subsections[2].name}</h4>
                <div class="leopard-col">
                    <img src="${get_leopard.sections[0].subsections[2].image_src}">
                  

                    

                </div>

                <p>${get_leopard.sections[0].subsections[2].description}</p>
                
               

                </div>


            
        </div>

    </section>

    <section class="sub-sec1">

               
                

            </div>
            <div class="treats">
                <h5>${get_leopard.sections[1].title}</h5>
                <p>${get_leopard.sections[1].description}</p>
                <li>${get_leopard.sections[1].threats[0]}</li>
                <li>${get_leopard.sections[1].threats[1]}</li>
                <li>${get_leopard.sections[1].threats[2]}</li>
                <li>${get_leopard.sections[1].threats[3]}</li>
                <li>${get_leopard.sections[1].threats[4]}</li>
                <li>${get_leopard.sections[1].threats[5]}</li>
                
                


            </div>
            

        </div>

    </section>
    <br><br><br><br>
    <h5 class="h51">${get_leopard.sections[2].title}</h5>

    <section class="sub-sec">
        
       
               
                <h6 class="h52"> IMPACTS</h6>
                <div class="leopard-col">
                    <img src="./images/reduce.jpeg" alt="leopard skin">
                    
                    
                   
    
                </div>
    
                <p>${get_leopard.sections[2].impacts.description}
                </p>
                
                <p>
                    The leopard is an important animal in the wild, a keystone species that plays an important regulatory role in the eco-systems in which they naturally occur.

                </p>
                
                
                <p>
                    In Sri Lanka, it is an apex predator (at the apex of all food webs on land), plays an irreplaceable role, and its extirpation would create a void that cannot be filled by any other animal.
                </p>
               
                <p>
                    The leopard can be characterised by three qualities; intelligence, adaptability and resilience. Its intelligence and agility makes the leopard a behaviourally interesting animal, and its beauty makes it one of the most sought after wild animals in the world.
                </p>
               
                <p>
                    The leopard's tourism potential is not fully utilised and generally mismanaged by both the Government and private sectors. It is a special animal that needs focused conservation attention as well as knowledgeable field guides, trackers and naturalists.
                </p>
                <div class="leopard-col"> <img   src="./images/reduce1.jpeg" alt="leopard skin"></div>
               
                
                <h5 class="h52">Reducing methods</h5>
                <p>${get_leopard.sections[2].reducing_methods.description}</p>
                
                
               
                <a href="${get_leopard.sections[2].explore_more_link}">
                <button class="lepb1" >Explore more</button>
                </a>

            </div>
            
        </div>

    </section>`

    let div_leopard = document.querySelector('.divleopard');
    div_leopard .innerHTML += leopard_Content;
   

  
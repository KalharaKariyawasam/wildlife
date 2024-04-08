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
let Intro=store('Introduction.json','Intro'); //index1 stored by local storage using index key
function getiteam(name){
  let log =localStorage.getItem (name);//passing the key 
  let newlog = JSON.parse(log);// reamove the string and converting as an object
  return newlog;
}
let get_intro =getiteam("Intro");
console.log (get_intro)
console.log(get_intro.wildlife_introduction.title)
console.log("hello");
let Introduction_content = ` <h1 > ${get_intro.wildlife_introduction.title}</h1>
            
<div>
    

</div>
</section>
<section class="sinharaja">
<h2 id="inth2">1.${get_intro.wildlife_introduction.sections[0].title}</h2>


</section>
<div id="pints1">
<p>${get_intro.wildlife_introduction.sections[0].content}</p>



</div>
<div >
    <img id="sinimg" src="${get_intro.wildlife_introduction.sections[0].images[0]}"  alt="sinharajaya">
    <img id="sinimg" src="${get_intro.wildlife_introduction.sections[0].images[1]}" alt="sinharajaya" >
    <img id="sinimg"  src="${get_intro.wildlife_introduction.sections[0].images[2]}" alt="sinharajaaya">
    <img id="sinimg"  src="${get_intro.wildlife_introduction.sections[0].images[3]}" alt="sinharajaaya">
    
</div>
<div  >
<iframe class="map2" src="${get_intro.wildlife_introduction.sections[0].map}" ></iframe>
</div>


<section class="sinharaja">
    <h2 id="inth2">2.${get_intro.wildlife_introduction.sections[1].title}</h2>
    

</section>
<div id="pints1">
<p>${get_intro.wildlife_introduction.sections[1].content}

</p>

    </div>
    <div >
        <img id="sinimg" src="${get_intro.wildlife_introduction.sections[1].images[0]}"  alt="Horton Plains">
        <img id="sinimg" src="${get_intro.wildlife_introduction.sections[1].images[1]}" alt="Horton Plains" >
        <img id="sinimg"  src="${get_intro.wildlife_introduction.sections[1].images[2]}" alt="Horton Plains">
        <img id="sinimg"  src="${get_intro.wildlife_introduction.sections[1].images[3]}" alt="Horton plains">
           
    </div>
    <div >
    <iframe class="map2"  src="${get_intro.wildlife_introduction.sections[1].map}"></iframe>
    </div>

    <section class="sinharaja">
        <h2 id="inth2">3.${get_intro.wildlife_introduction.sections[2].title}</h2>
        

    </section>
    <div id="pints1">
   <p>${get_intro.wildlife_introduction.sections[2].content}

   </p>
   
        </div>
        <div >
            <img id="sinimg" src="${get_intro.wildlife_introduction.sections[2].images[0]}"  alt="wasgamuwa">
            <img id="sinimg" src="${get_intro.wildlife_introduction.sections[2].images[1]}" alt="wasgamuwa" >
            <img id="sinimg"  src="${get_intro.wildlife_introduction.sections[2].images[2]}" alt="wasgamuwa">
            <img id="sinimg"  src="${get_intro.wildlife_introduction.sections[2].images[3]}" alt="wasgamuwa">
            
        </div>
        <div>
            <iframe class="map2" src="${get_intro.wildlife_introduction.sections[2].map}" ></iframe>
        </div>`
        let div_div1 =document.querySelector('.divintro');
        div_div1.innerHTML +=  Introduction_content;
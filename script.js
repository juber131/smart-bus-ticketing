
const items = document.querySelectorAll(".ticket");
let price1=550;
const maxseatallowed =4;
let count = 0;
for( let i=0;i<items.length; i=i+1){
    let busSeat =items[i];
    busSeat.addEventListener("click", function(e){


        if(count< maxseatallowed){
            busSeat.classList.add('booked');
           
        }else{
            alert("you have booked 4 seat. no more booking allowed.")
        }




       count=count+1;
        busSeat.classList.add('bg-green-500');
       
// totalseat
        const totalsit =document.getElementById("Total-seat").innerText;
       
        const updatedvalue = parseInt(totalsit)-1
        totalsit.innerText=updatedvalue;

// totalprice
        let totalprice =document.getElementById("all-price").innerText;
        let convertedprice =parseInt(totalprice);
        let alltotal=price1+convertedprice;
        document.getElementById("all-price").innerText=alltotal;

        let totalprice1 =document.getElementById("total").innerText;
        let convertedprice1 =parseInt(totalprice1);
        let alltotal1=price1+convertedprice1;
        document.getElementById("total").innerText=alltotal1;

        // appendChild
    const placename =e.target.innerText;
    const element = document.getElementById("place");
    const p =document.createElement('p')
    p.innerText=placename;
    element.appendChild(p)
   
    const element1 = document.getElementById("place1");
    const p1 =document.createElement('p')
    p1.innerText="Economy";
    element1.appendChild(p1)

    const element2 = document.getElementById("place2");
    const p2 =document.createElement('p')
    p2.innerText=550;
    element2.appendChild(p2)

//   total number
        const seatnumber =document.getElementById("number").innerText
        
        setinnertext('number',count)
        setinnertext('Total-seat', updatedvalue);
    

    })

}



function setinnertext(id,value){
    document.getElementById(id).innerText=value;
}
function scrolledmainsection(){
    const showelement= document.getElementById('main-section');
    showelement.scrollIntoView({behavior:'smooth'});
    
}
// // // const nextbtn =document.getElementById("next-step");
// // // nextbtn.addEventListener("click",function(){
// // //     hideElementById('header-section');
// // //     showElementById('hidden-area');
    
// //  })
 function nextbtn(){ 
    showElementById('hidden-all')
    hideElementById('header-section') 
    
    hideElementById('main-section') 

    hideElementById('') 

    
    showElementById('hidden-all')
   
 }
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


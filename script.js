
const items = document.querySelectorAll(".ticket");
let price1=550;

let count = 0;
let clicks=0;
for( let i=0;i<items.length; i=i+1){
    let busSeat =items[i];
    busSeat.addEventListener("click", function(e){
      

       count=count+1;
        busSeat.classList.add('bg-green-500');
        
// totalsit
        const totalsit =document.getElementById("Total-seat").innerText;
       
        const updatedvalue = parseInt(totalsit)-1
        totalsit.innerText=updatedvalue;

// totalprice
        let totalprice =document.getElementById("all-price").innerText;
        let convertedprice =parseInt(totalprice);
        let alltotal=price1+convertedprice;
        document.getElementById("all-price").innerText=alltotal;

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

let	tip= 15, bill= 0, ppl= 1;

//eventlistener on bill input
const inputbill = document.querySelector('#input__bill');
inputbill.addEventListener('input',(input)=>{
	bill=input.target.value
  	calculateTip(bill,tip,ppl);
});


  //event listeners on tip buttons

var btns = document.getElementsByClassName("btn__select");
  let j = btns.length;

for (var i = 0; i < j ; i++) {

  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  let z = this.value;
  tip= z;
  calculateTip(bill,tip,ppl);	
  });
}


//event listener on custom tip
const customTip= document.querySelector('#btn__custom');
customTip.addEventListener('input',(custom)=>{
	tip= custom.target.value;
		calculateTip(bill,tip,ppl);

})



//event listener on number of people
const inputppl = document.querySelector('#input__people');
	inputppl.addEventListener('input',(persons)=>{
		ppl = persons.target.value;
		if(ppl=="")
			 ppl=1;
		calculateTip(bill,tip,ppl);
	 });

var tipPerHead = document.getElementById('tip__per__person');

var billPerHead = document.getElementById("bill__per__person");

function calculateTip(b,t,p){
	const errorEl= document.getElementById('error-msg');
	const errorIn = document.getElementById('input__people');
if(p==0){
	errorEl.parentElement.classList.add('error');
	errorIn.classList.add('errorinput');
	b=0; p=1;
}
else{
	errorEl.parentElement.classList.remove('error');
	errorIn.classList.remove('errorinput');

}

let billPerPerson = b/p;
t=t/100;
let totalTip= (b*t)/p;
let totalBill= +totalTip + +billPerPerson;

  tipPerHead.innerHTML= totalTip.toFixed(2);
  billPerHead.innerHTML= totalBill.toFixed(2);

}


function restart(){
	bill=0, tip=15,ppl=1;
	tipPerHead.innerHTML = "0.00";
	billPerHead.innerHTML = "0.00";
	inputbill.value = "";
	inputppl.value = "";
	customTip.value = "";
	let activeBtn =  document.getElementsByClassName("active");
    activeBtn[0].className = activeBtn[0].className.replace(" active", "");
	btns[2].className += " active";
}


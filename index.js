function openFaq(faq){
    faq.classList.toggle("faq-card-active");
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

var element = document.getElementById("manubar");
function toggleManu(){
    element.classList.toggle("manu-active");
}

function closeManu(){
    element.classList.remove("manu-active");
}
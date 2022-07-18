console.log('hello world , this is frontendmentor')
var rate = 0
function setRate(value) {
    rate = value ;
    element = document.getElementById(value);
    element.classList.toggle('bg-[#fb7413]')
    element.classList.remove('rate')
    if (element.classList.contains('bg-[#fb7413]')) {
        other = document.getElementsByClassName('rate')
        for (let i = 0; i < other.length; i++) {
            if (other[i].classList.contains('bg-[#fb7413]')) {
               other[i].classList.remove('bg-[#fb7413]') 
            }
            
}}}
function changeTheme(){
    if (rate < 1 || rate > 6) {
     alert('please choose a rating before submiting the form')   
    }
    else{
        box.classList.add('items-center')
        box.innerHTML = ""
        box.innerHTML = `
        <img src="./images/illustration-thank-you.svg" alt="" class="py-3">
<div class=" w-44 h-5 bg-gray-600 rounded-full flex justify-center items-center my-2 text-[#fb7413] text-xs font-semibold" style="font-family: 'Baloo Bhaina 2', cursive;">
You selected ${rate} out of 5
</div>
<h1 class="heading text-white font-semibold text-3xl" >  Thank you!</h1>
<p class="text-sm text-[#7c8798] leading-5 tracking-wide"> We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!</p>
</div>
        `
    }
}
const nav= document.querySelector('#nav-links');
nav.addEventListener('click',function(e){
    const clicked = e.target.closest('.dropdownBtn')
    if(!clicked && e.target.closest('.dropdown') != null) {
        return
    }
    let currentDropdown;
    if(clicked){
        currentDropdown = e.target.closest('.dropdown')
        currentDropdown.classList.toggle('active')
        if(currentDropdown.classList.contains('active'))
        {
            currentDropdown.firstElementChild.setAttribute(
            "aria-expanded",
            'true')
       }
        else{
            currentDropdown.firstElementChild.setAttribute(
            "aria-expanded",
            false)
        }
    }
    removeAllDropdown(e.target)
})
function removeAllDropdown(e){
    document.querySelectorAll(".dropdown.active").forEach(dropdown=>{
        if(dropdown === e.closest('.dropdown')) return
        dropdown.firstElementChild.setAttribute(
            "aria-expanded",
            false);
        dropdown.classList.remove("active")
    })
}
document.addEventListener('click',
function(e){
    removeAllDropdown(e.target)
})

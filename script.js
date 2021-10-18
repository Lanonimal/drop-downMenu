const toggleDropDown = document.querySelector(".toggleDropDown")
const dropDownList = document.querySelector(".dropDownList")

function toggle() {
    if(dropDownList.classList.contains("active")) {
        dropDownList.classList.remove("active")
    }
    else{
        dropDownList.classList.add("active")
    }
}

toggleDropDown.addEventListener("click", toggle)

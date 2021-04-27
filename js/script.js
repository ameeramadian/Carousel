
const listItems = document.querySelectorAll(".list-group-item");
const themeDiv = document.querySelector(".theme")
const firstLayoutBtn = document.querySelector(".btnFirstLayout");
const secondLayoutBtn = document.querySelector(".btnSecondLayout");

function clearListItemSelection(element){
    element.classList.remove("list-group-item--selected")
}

function applyListItemSelection(element){
    element.classList.add("list-group-item--selected")
}

$('#newsCarousel').on('slide.bs.carousel', function (e) {
    clearListItemSelection(listItems[e.from]);
    applyListItemSelection(listItems[e.to])

});

function setLayoutButtonActive(activeLayout){
    switch (activeLayout) {
         case 2 : { 
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.add("active");
            break;
         }
         default: {
            firstLayoutBtn.classList.add("active");
            secondLayoutBtn.classList.remove("active");
            break;
         }
    }
}

function clearThemeClass(){
        let themeClass = themeDiv.className.match(/(^|\s)theme-\S+/g) || []
        themeDiv.className = themeDiv.className.replace(themeClass, "")
}

function addThemeClass(theme){
    themeDiv.classList.add(`theme--${theme}`)
}

function addStyleClasses(activeLayout){
    clearThemeClass(themeDiv)
    switch (activeLayout) {
        case 2 : { 
            addThemeClass("dark");        
           break;
        }
        default: {
            addThemeClass("light");
           break;
        }
   }
}

setLayoutButtonActive(1);

firstLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(1);
    addStyleClasses(1);
 });

secondLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(2);
    addStyleClasses(2);
 });
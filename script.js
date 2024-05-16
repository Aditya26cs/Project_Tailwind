const line3 = document.getElementById("line3")




function handlemenu(){
      line3.classList.toggle("hidden")
}

const dtElements = document.querySelectorAll('dt');

dtElements.forEach(element => {
      element.addEventListener("click" , () => {
            const ddID = element.getAttribute('aria-controls');
            const ddElement = document.getElementById(ddID);
            const ddArrowIcon = element.querySelectorAll('i')[0];

            ddElement.classList.toggle('hidden');
            ddArrowIcon.classList.toggle('-rotate-180');
      })
})
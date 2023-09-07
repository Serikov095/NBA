const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".players");

searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
     item.querySelector("p").textContent.toLocaleLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
    
})

const items = document.querySelectorAll('.players');
items.forEach(item =>{
    item.addEventListener ('mouseover',()=>{
        //Сперва удаляем класс
        removeFocus();
        item.classList.add('newclass');
        
    })
//2 Потом опять добавляем дл того чтобы при увеличении на другую картинку первая возвращала свой размер
    removeFocus = () =>{
        items.forEach(item=>{
            item.classList.remove('newclass');
        })
    }
})

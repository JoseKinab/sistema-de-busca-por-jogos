
const filter = document.querySelector("input");
const cards = document.querySelectorAll(".container  .boxIten");
const scrollbody = document.querySelector("body");
const divInfo = document.getElementById("infoNotGame");

filter.addEventListener("input", filtercards)

function filtercards(params) {
    if (filter.value != "") {
        for(let card of cards){
            let title = card.querySelector("h2")
            title = title.textContent.toLowerCase()
            let filtertxt = filter.value.toLowerCase()

            if (!title.includes(filtertxt)) {
                card.style.display = "none";
                voltarAotopo.style.display = "none";
            }else {
                card.style.display = "block";
                scrollUp();
            }
        }
    }else {
        for(let card of cards)
        card.style.display = "block";
        voltarAotopo.style.display = "block";
    }
    if (document.querySelectorAll(".container  .boxIten[style='display: block;']").length == 0) {
        divInfo.style.display = "block";
        divInfo.textContent = "Nenhum jogo encontrado com o nome, \"" + filter.value + "\"";
    } else {
        divInfo.style.display = "none";
    }
    
}

const button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function (e) {
          if (button[i].innerHTML === `<i class="fa-regular fa-heart"></i>`) {
           button[i].innerHTML = `<i class="fa-solid fa-heart" style="color: #d33c69;"></i>`;
            
          }else{
           button[i].innerHTML = `<i class="fa-regular fa-heart"></i>`;
          }
        })
    }

    function scrollUp(e) {
        window.scrollTo(0, 0);
    }
    
    const voltarAotopo = document.getElementById("voltar-ao-topo");
    voltarAotopo.addEventListener("click", function (params) {
        window.scrollTo(0, 0);
    })

    let body = document.body;
    let moon = document.querySelector(".moon");
    let darkModediv = document.querySelector(".DarkMode")
    let boxPesquisa = document.querySelector(".boxPesquisa");
    let input = document.getElementById("pesquisar");
    let btn = document.querySelectorAll("button");
    
    moon.addEventListener("click", function(params) {
        darkModediv.classList.toggle("shine")
        body.classList.toggle("body-darkness")
        boxPesquisa.classList.toggle("boxpesquisa-darkness")
        input.classList.toggle("input-darkness")
        
        for(let todosbtn of btn){
            todosbtn.classList.toggle("button-darkness")
        }
        
    })
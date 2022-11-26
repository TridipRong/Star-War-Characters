// url = "https://swapi.dev/api/people/?search=${q}";

let id;

async function getData() {
    let q = document.getElementById("input").value;

    let url = `https://swapi.dev/api/people/?search=${q}`;

    let res = await fetch(url);

    let data = await res.json();
    // console.log(data.results)
    appendtodiv(data.results);
}

function appendtodiv(result) {
    let div = document.getElementById("boom");
    div.innerHTML = null;
    let q = document.getElementById("input").value;
    if (q == "") {
        div.innerHTML = null;
    }
    else {
        result.forEach(function (el) {
            let Character = document.createElement("p");
            Character.innerText = el.name;
            Character.addEventListener("click", function () {
                callthefun(el);
            })
            let d = document.createElement("div");
            d.id = "movies"
            d.append(Character);
           

            div.append(d);
        })
    }
}

async function debouncefun(func, delay) {
    if (id) {
        clearTimeout(id);
    }

    id = setTimeout(function () {
        func();
    }, delay)
}

let pora = document.querySelector("#moviesone");
function callthefun(ele) {
    console.log(ele)
    pora.innerHTML = null;
    let boo = document.createElement("div");

    let pop = document.createElement("h2")
    pop.innerText = "Personal Details"
    let ten = document.createElement("h3");
    ten.innerText = `Name: ${ele.name}`;

    let tenone = document.createElement("h3");
    tenone.innerText = `Height:${ele.height}`;

    let tentwo = document.createElement("h3");
    tentwo.innerText = `Gender: ${ele.gender}`;
    let lop = document.createElement("h3");
    lop.innerText = `Year Of Birth: ${ele.birth_year}`

    boo.append(pop, ten, tenone, tentwo, lop);

    pora.append(boo);
}

window.addEventListener("load", debouncefun(playSong, 500));
function playSong() {
    song.play();
}
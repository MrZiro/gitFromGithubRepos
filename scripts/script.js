let thInp = document.getElementById("myInput");
let thBtn = document.getElementById("myBtn");
let shDt = document.getElementById("shDt");
let bigbtn = document.getElementById("biBtn");
let iimg = document.getElementById("myi");


bigbtn.onclick = () => {
    let currentTheme = document.body.getAttribute("data-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";
    iimg.classList = newTheme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    document.body.setAttribute("data-theme", newTheme);
}






thBtn.onclick = () => getRepos();

function getRepos(){
    if (thInp.value == "") {
        shDt.innerHTML = "<span>Please Write Github Username</span>"
    } else {
        fetch(`https://api.github.com/users/${thInp.value}/repos`)
        .then((res) => res.json())
        .then((data)=>{
            shDt.innerHTML = '';
            
            data.forEach(element => {
                let mnDiv = document.createElement("div");
                mnDiv.textContent = element.name;
                let Divv = document.createElement("div");
                let theUrl = document.createElement('a');
                let theUrlText = document.createTextNode("Visit");
                theUrl.appendChild(theUrlText);
                theUrl.href = `https://github.com/${thInp.value}/${element.name}`
                theUrl.setAttribute('target', '_blank');
                
                Divv.appendChild(theUrl);
                
                let srSpan = document.createElement("span");
                let spnTxt = document.createTextNode(`Start ${element.stargazers_count}`)
                srSpan.appendChild(spnTxt);
                Divv.appendChild(srSpan);
                mnDiv.appendChild(Divv);
                mnDiv.className = 'rp-box';
                shDt.appendChild(mnDiv);

            });
            
        });
    }
}
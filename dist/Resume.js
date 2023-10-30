// Icones
const sunIcone = document.querySelector(".sun");
const moonicon = document.querySelector(".moon");

// Theam var

const userTheam = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icone Toggeling
const iconeToggel = () => {
    moonicon.classList.toggle("display-none");
    sunIcone.classList.toggle("display-none");
};

// Initial Theme Check

const themeCheck = () => {
    if (userTheam === "dark" || !userTheam && systemTheme) {
        document.documentElement.classList.add("dark");
        moonicon.classList.add("display-none");
        return;
    }
    sunIcone.classList.add("display-none");
};

// manual Theme Switch
const themeSwitch = () =>{
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconeToggel();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconeToggel();
};

// call theme switch on clicking button

sunIcone.addEventListener("click", () => {
    themeSwitch();
})

moonicon.addEventListener("click", () => {
    themeSwitch();
})

//invoke theme check on intial load
themeCheck();

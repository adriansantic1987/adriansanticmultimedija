document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    

    function updateTheme() {
        if (body.classList.contains("dark-mode")) {
            navbar.classList.remove("light-mode");
            navbar.classList.add("dark-mode");
            themeToggle.checked = true;
        } else {
            navbar.classList.remove("dark-mode");
            navbar.classList.add("light-mode");
            themeToggle.checked = false;
        }
    }

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        updateTheme();
    }

    themeToggle.addEventListener("change", function () {
        body.classList.toggle("dark-mode");
        updateTheme();
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    const image = document.querySelector(".heroSlika");
    const logoa = document.querySelector(".logo");
    function updateImage() {
        if (body.classList.contains("dark-mode")) {
            image.src = "crnaslika.png";
        } else {
            image.src = "novaslika.png";
        }
    }
    updateImage();
    themeToggle.addEventListener("change", updateImage);


        
        function resetThemeToLight() {
            localStorage.setItem("theme", "light");
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            body.setAttribute("data-bs-theme", "light");
    
            if (themeToggle) {
                themeToggle.checked = false;
                image.src = "novaslika.png";
            }
    
            if (navbar) {
                navbar.classList.remove("dark-mode");
                navbar.classList.add("light-mode");
            }
        }
    
        resetThemeToLight();
        themeToggle.addEventListener("change", function () {
            if (themeToggle.checked) {
                body.classList.add("dark-mode");
                body.classList.remove("light-mode");
                body.setAttribute("data-bs-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                resetThemeToLight();
            }
        });

    const logo = document.querySelector(".logo img");
    function updatelogoImage() {
        if (body.classList.contains("dark-mode")) {
            logo.src = "peglaband.png";
        } else {
            logo.src = "logocrni.png";
        }
    }
    updatelogoImage();
    themeToggle.addEventListener("change", updatelogoImage);

    const toggleTheme = () => {
        const currentTheme = body.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (localStorage.getItem("theme")) {
        body.setAttribute("data-bs-theme", localStorage.getItem("theme"));
    }
    document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;


    localStorage.setItem("theme", "light");
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
});


});

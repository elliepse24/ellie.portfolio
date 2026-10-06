/* ================================
   ID CARD FLIP ANIMATION
================================ */

const idCard =
    document.getElementById("idCard");

const contactLink =
    document.querySelector(
        'a[href="#contact"]'
    );


/* Clicking the ID card */

idCard?.addEventListener("click", () => {

    idCard.classList.toggle("flipped");

});


/* Clicking CONTACT in navigation */

contactLink?.addEventListener("click", (event) => {

    event.preventDefault();

    idCard?.classList.add("flipped");

    document
        .getElementById("home")
        ?.scrollIntoView({
            behavior: "smooth"
        });

});


/* ================================
   COURSE REQUIREMENTS
================================ */

const dropdown =
    document.querySelector(".dropdown");

const requirementsToggle =
    document.getElementById("requirementsToggle");

const folders =
    document.getElementById("folderContainer");

const display =
    document.getElementById("requirementDisplay");

const backButton =
    document.querySelector(".back-to-folders");

let activeRequirement = null;


/* ================================
   COURSE REQUIREMENTS BUTTON
================================ */

requirementsToggle?.addEventListener("click", (event) => {

    event.preventDefault();

    /*
     * If a requirement is currently open,
     * clicking COURSE REQUIREMENTS again
     * returns to the three folders.
     */

    if (activeRequirement) {

        resetRequirements();

        dropdown.classList.remove("open");

        return;
    }


    /*
     * Otherwise open/close dropdown.
     */

    dropdown.classList.toggle("open");

});


/* ================================
   DROPDOWN LINKS
================================ */

document
    .querySelectorAll(".dropdown-menu a[data-section]")
    .forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const requirement =
                link.dataset.section;

            showRequirement(requirement);

            dropdown.classList.remove("open");

            document
                .getElementById("requirements")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


/* ================================
   CLICK FOLDER
================================ */

function toggleRequirement(requirement) {

    /*
     * Clicking the same folder again
     * returns to the three folders.
     */

    if (activeRequirement === requirement) {

        resetRequirements();

        return;
    }

    showRequirement(requirement);

}


/* ================================
   SHOW COURSE REQUIREMENT
================================ */

function showRequirement(requirement) {

    const selected =
        document.getElementById(requirement);

    if (!selected) return;


    /*
     * Hide all requirement contents.
     */

    document
        .querySelectorAll(".requirement-content")
        .forEach(content => {

            content.classList.remove("active");

        });


    /*
     * Hide the three folders.
     */

    folders.style.display = "none";


    /*
     * Show selected content.
     */

    display.style.display = "block";

    selected.classList.add("active");

    activeRequirement = requirement;


    /*
     * Show BACK button.
     */

    if (backButton) {

        backButton.style.display = "flex";

    }

}


/* ================================
   RESET REQUIREMENTS
================================ */

function resetRequirements() {

    /*
     * Hide requirement content.
     */

    document
        .querySelectorAll(".requirement-content")
        .forEach(content => {

            content.classList.remove("active");

        });


    /*
     * Show folders again.
     */

    folders.style.display = "grid";


    /*
     * Hide content container.
     */

    display.style.display = "none";


    /*
     * Hide BACK button.
     */

    if (backButton) {

        backButton.style.display = "none";

    }


    /*
     * Reset active requirement.
     */

    activeRequirement = null;

}


/* ================================
   BACK TO FOLDERS
================================ */

backButton?.addEventListener("click", () => {

    resetRequirements();

});


/* ================================
   DROPDOWN CLOSING
================================ */

document.addEventListener("click", event => {

    if (
        dropdown &&
        !dropdown.contains(event.target)
    ) {

        dropdown.classList.remove("open");

    }

});

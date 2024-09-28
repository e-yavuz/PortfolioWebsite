/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
/* ============================== End of Aside ============================ */

/* ============================== Dynamic Padding ============================ */
function setDynamicPadding() {
    const firstDiv = document.querySelector(".header");
    const secondDiv = document.querySelector(".main-content");
    const firstDivHeight = firstDiv.offsetHeight;
    secondDiv.style.paddingTop = `${firstDivHeight}px`;
    console.log(`${firstDiv.offsetHeight}px`);
}
window.addEventListener("load", setDynamicPadding);
window.addEventListener("resize", setDynamicPadding);
/* ============================== End of Dynamic Padding ============================ */

/* ============================== "Read More" Project Button ============================ */
document.addEventListener('DOMContentLoaded', function() {
    const info = document.querySelectorAll('.project .project-item .project-item-inner .project-info');

    info.forEach(container => {
        const text_container = container.querySelector('.project-text-container');
        const text = container.querySelector('.project-text-container .project-text');
        const ellipsis = container.querySelector('.ellipsis');
        const readMoreBtn = container.querySelector('.read-more-btn');

        if (text.scrollHeight > text_container.clientHeight) {
            readMoreBtn.style.display = 'flex'; // Show the button if text overflows
            ellipsis.style.display = 'flex'; // Show the ellipsis if text
        }

        readMoreBtn.addEventListener('click', function() {
            text_container.classList.toggle('expanded');
            if (text_container.classList.contains('expanded')) {
                readMoreBtn.textContent = 'Read Less';
                ellipsis.style.display = 'none'; // Hides ellipsis if text is expanded
            } else {
                readMoreBtn.textContent = 'Read More';
                ellipsis.style.display = 'flex'; // Re-shows ellipsis if text is collapsed
            }
        });
    });
});
/* ============================== End of "Read More" Project Button ============================ */

/* ============================== "Read More" Experience Button ============================ */
document.addEventListener('DOMContentLoaded', function() {
    const info = document.querySelectorAll('.experience .experience-content .timeline .timeline-info');

    info.forEach(container => {
        const text_container = container.querySelector('.timeline-text-container');
        const text = container.querySelector('.timeline-text-container .timeline-text');
        const ellipsis = container.querySelector('.ellipsis');
        const readMoreBtn = container.querySelector('.read-more-btn');

        if (text.scrollHeight > text_container.clientHeight) {
            readMoreBtn.style.display = 'flex'; // Show the button if text overflows
            ellipsis.style.display = 'flex'; // Show the ellipsis if text
        }

        readMoreBtn.addEventListener('click', function() {
            text_container.classList.toggle('expanded');
            if (text_container.classList.contains('expanded')) {
                readMoreBtn.textContent = 'Read Less';
                ellipsis.style.display = 'none'; // Hides ellipsis if text is expanded
            } else {
                readMoreBtn.textContent = 'Read More';
                ellipsis.style.display = 'flex'; // Re-shows ellipsis if text is collapsed
            }
        });
    });
});
/* ============================== End of "Read More" Experience Button ============================ */
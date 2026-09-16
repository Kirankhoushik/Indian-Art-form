```javascript
/*
    INDIAN ART INTERACTIVE TIMELINE

    All artifact information is stored in this object.
    To add another artifact, simply add another entry.
*/

const artifacts = {

    "dancing-girl": {

        period: "INDUS VALLEY CIVILIZATION",

        title: "Dancing Girl",

        date: "c. 2500 BCE",

        material: "Bronze",

        location: "Mohenjo-daro",

        technique: "Lost-wax casting",

        image:
            "images/dancing-girl.jpg",

        description:
            "The Dancing Girl is one of the most recognizable artifacts of the Indus Valley Civilization. The small bronze figure demonstrates the sophisticated metalworking abilities of the civilization.",

        context:
            "Mohenjo-daro was one of the major urban settlements of the Indus Valley Civilization. The figure was discovered during archaeological excavations and dates to approximately 2500 BCE.",

        significance:
            "The sculpture is important because it demonstrates advanced bronze casting techniques and provides insight into the artistic traditions of one of South Asia's earliest urban civilizations."
    },


    "lion-capital": {

        period: "MAURYAN PERIOD",

        title: "Lion Capital of Ashoka",

        date: "c. 250 BCE",

        material: "Polished sandstone",

        location: "Sarnath, Uttar Pradesh",

        technique: "Stone carving and polishing",

        image:
            "images/lion-capital.jpg",

        description:
            "The Lion Capital consists of four Asiatic lions standing back-to-back above a circular abacus. It was created during the reign of Emperor Ashoka.",

        context:
            "Ashoka supported the spread of Buddhism across the Indian subcontinent. The capital originally stood on top of a pillar at Sarnath, an important Buddhist site.",

        significance:
            "The Lion Capital is one of the most important surviving examples of Mauryan imperial art. Its lion motif was later adopted as India's State Emblem."
    },


    "sarnath-buddha": {

        period: "GUPTA PERIOD",

        title: "Sarnath Buddha",

        date: "5th Century CE",

        material: "Chunar sandstone",

        location: "Sarnath, Uttar Pradesh",

        technique: "Stone sculpture",

        image:
            "images/sarnath-buddha.jpg",

        description:
            "The Sarnath Buddha represents the refined sculptural style associated with the Gupta period. The figure depicts the Buddha in a calm and meditative state.",

        context:
            "The Gupta period is often associated with significant developments in Indian sculpture, architecture and religious art. Sarnath was an important Buddhist center.",

        significance:
            "The sculpture is admired for its idealized proportions, peaceful expression and refined treatment of the human form."
    },


    "nataraja": {

        period: "CHOLA PERIOD",

        title: "Shiva Nataraja",

        date: "11th Century CE",

        material: "Bronze",

        location: "Tamil Nadu",

        technique: "Lost-wax casting",

        image:
            "images/nataraja.jpg",

        description:
            "The Nataraja represents Shiva as the cosmic dancer. The dynamic figure is surrounded by a ring of flames.",

        context:
            "The Chola dynasty supported temple building, sculpture and bronze casting in southern India. Chola bronze sculptures were often associated with temple rituals and processions.",

        significance:
            "The Nataraja became one of the most recognizable representations of Indian religious art. The dance symbolizes cosmic processes such as creation, preservation and destruction."
    },


    "mughal": {

        period: "MUGHAL PERIOD",

        title: "Mughal Miniature Painting",

        date: "16th–17th Century",

        material: "Paper and natural pigments",

        location: "Mughal India",

        technique: "Miniature painting",

        image:
            "images/mughal.jpg",

        description:
            "Mughal miniature paintings are known for their detailed figures, architecture, landscapes and court scenes.",

        context:
            "Mughal painting developed through interactions between Persian artistic traditions and Indian artistic practices. Mughal emperors supported workshops of highly skilled artists.",

        significance:
            "These paintings provide valuable visual records of court life, clothing, architecture, animals and cultural practices of the Mughal period."
    },


    "raja-ravi-varma": {

        period: "COLONIAL PERIOD",

        title: "Raja Ravi Varma",

        date: "19th Century",

        material: "Oil on canvas",

        location: "India",

        technique: "European academic painting",

        image:
            "images/raja-ravi-varma.jpg",

        description:
            "Raja Ravi Varma combined European academic painting techniques with Indian subjects, mythology and cultural themes.",

        context:
            "During the colonial period, European academic art techniques became increasingly influential in India. Ravi Varma incorporated these techniques while depicting Indian mythological and social subjects.",

        significance:
            "His paintings played an important role in popularizing visual representations of Indian mythological characters and contributed to the development of modern Indian painting."
    },


    "husain": {

        period: "MODERN INDIA",

        title: "M. F. Husain",

        date: "20th Century",

        material: "Paint and canvas",

        location: "India",

        technique: "Modernist painting",

        image: null,

        description:
            "Maqbool Fida Husain was one of the most prominent figures in modern Indian art. His work frequently used simplified forms, strong lines and expressive compositions.",

        context:
            "Indian modernism developed rapidly after independence, with artists experimenting with new forms and ideas while engaging with Indian cultural themes.",

        significance:
            "Husain contributed significantly to the development and international visibility of modern Indian painting."
    }

};


/*
    OPEN ARTIFACT
*/

function openArtifact(id) {

    const artifact = artifacts[id];

    if (!artifact) {
        return;
    }


    document.getElementById("modal-period").textContent =
        artifact.period;

    document.getElementById("modal-title").textContent =
        artifact.title;

    document.getElementById("modal-date").textContent =
        artifact.date;

    document.getElementById("modal-material").textContent =
        artifact.material;

    document.getElementById("modal-location").textContent =
        artifact.location;

    document.getElementById("modal-technique").textContent =
        artifact.technique;

    document.getElementById("modal-description").textContent =
        artifact.description;

    document.getElementById("modal-context").textContent =
        artifact.context;

    document.getElementById("modal-significance").textContent =
        artifact.significance;


    /*
        Insert image into modal
    */

    const imageContainer =
        document.getElementById("modal-image");


    if (artifact.image) {

        imageContainer.innerHTML = `
            <img
                src="${artifact.image}"
                alt="${artifact.title}"
            >
        `;

    } else {

        imageContainer.innerHTML = `
            <div class="modern-placeholder">
                M.F. HUSAIN
            </div>
        `;

    }


    /*
        Show modal
    */

    const modal =
        document.getElementById("artifact-modal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/*
    CLOSE ARTIFACT
*/

function closeArtifact() {

    const modal =
        document.getElementById("artifact-modal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/*
    CLOSE MODAL WHEN CLICKING OUTSIDE
*/

document
    .getElementById("artifact-modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeArtifact();

        }

    });


/*
    CLOSE WITH ESCAPE KEY
*/

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeArtifact();

    }

});


/*
    SCROLL TO TIMELINE
*/

function scrollToTimeline() {

    document
        .getElementById("timeline-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}
```

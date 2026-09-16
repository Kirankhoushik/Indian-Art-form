const artifacts = {
    "dancing-girl": {
        period: "INDUS VALLEY CIVILIZATION",
        title: "Dancing Girl",
        date: "c. 2500 BCE",
        material: "Bronze",
        location: "Mohenjo-daro",
        technique: "Lost-wax casting",
        image: "01.jpg",
        description: "The Dancing Girl is one of the most recognizable artifacts of the Indus Valley Civilization. The small bronze figure demonstrates the sophisticated metalworking abilities of the civilization.",
        context: "Mohenjo-daro was one of the major urban settlements of the Indus Valley Civilization. The figure was discovered during archaeological excavations and dates to approximately 2500 BCE.",
        significance: "The sculpture is important because it demonstrates advanced bronze casting techniques and provides insight into the artistic traditions of one of South Asia's earliest urban civilizations."
    },
    "lion-capital": {
        period: "MAURYAN PERIOD",
        title: "Lion Capital of Ashoka",
        date: "c. 250 BCE",
        material: "Polished sandstone",
        location: "Sarnath, Uttar Pradesh",
        technique: "Stone carving and polishing",
        image: "02.webp",
        description: "The Lion Capital consists of four Asiatic lions standing back-to-back above a circular abacus. It was created during the reign of Emperor Ashoka.",
        context: "Ashoka supported the spread of Buddhism across the Indian subcontinent. The capital originally stood on top of a pillar at Sarnath, an important Buddhist site.",
        significance: "The Lion Capital is one of the most important surviving examples of Mauryan imperial art. Its lion motif was later adopted as India's State Emblem."
    },
    "sarnath-buddha": {
        period: "GUPTA PERIOD",
        title: "Sarnath Buddha",
        date: "5th Century CE",
        material: "Chunar sandstone",
        location: "Sarnath, Uttar Pradesh",
        technique: "Stone sculpture",
        image: "03.jpg",
        description: "The Sarnath Buddha represents the refined sculptural style associated with the Gupta period. The figure depicts the Buddha in a calm and meditative state.",
        context: "The Gupta period is often associated with significant developments in Indian sculpture, architecture and religious art. Sarnath was an important Buddhist center.",
        significance: "The sculpture is admired for its idealized proportions, peaceful expression and refined treatment of the human form."
    },
    nataraja: {
        period: "CHOLA PERIOD",
        title: "Shiva Nataraja",
        date: "11th Century CE",
        material: "Bronze",
        location: "Tamil Nadu",
        technique: "Lost-wax casting",
        image: "04.jpg",
        description: "The Nataraja represents Shiva as the cosmic dancer. The dynamic figure is surrounded by a ring of flames.",
        context: "The Chola dynasty supported temple building, sculpture and bronze casting in southern India. Chola bronze sculptures were often associated with temple rituals and processions.",
        significance: "The Nataraja became one of the most recognizable representations of Indian religious art. The dance symbolizes cosmic processes such as creation, preservation and destruction."
    },
    mughal: {
        period: "MUGHAL PERIOD",
        title: "Mughal Miniature Painting",
        date: "16th–17th Century",
        material: "Paper and natural pigments",
        location: "Mughal India",
        technique: "Miniature painting",
        image: "05.jpg",
        description: "Mughal miniature paintings are known for their detailed figures, architecture, landscapes and court scenes.",
        context: "Mughal painting developed through interactions between Persian artistic traditions and Indian artistic practices. Mughal emperors supported workshops of highly skilled artists.",
        significance: "These paintings provide valuable visual records of court life, clothing, architecture, animals and cultural practices of the Mughal period."
    },
    "raja-ravi-varma": {
        period: "COLONIAL PERIOD",
        title: "Raja Ravi Varma",
        date: "19th Century",
        material: "Oil on canvas",
        location: "India",
        technique: "European academic painting",
        image: "06.jpg",
        description: "Raja Ravi Varma combined European academic painting techniques with Indian subjects, mythology and cultural themes.",
        context: "During the colonial period, European academic art techniques became increasingly influential in India. Ravi Varma incorporated these techniques while depicting Indian mythological and social subjects.",
        significance: "His paintings played an important role in popularizing visual representations of Indian mythological characters and contributed to the development of modern Indian painting."
    },
    husain: {
        period: "MODERN INDIA",
        title: "M. F. Husain",
        date: "20th Century",
        material: "Paint and canvas",
        location: "India",
        technique: "Modernist painting",
        image: "07.jpeg",
        description: "Maqbool Fida Husain was one of the most prominent figures in modern Indian art. His work frequently used simplified forms, strong lines and expressive compositions.",
        context: "Indian modernism developed rapidly after independence, with artists experimenting with new forms and ideas while engaging with Indian cultural themes.",
        significance: "Husain contributed significantly to the development and international visibility of modern Indian painting."
    }
};

const modal = document.getElementById("artifact-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = modal.querySelector(".close-btn");
let previousFocusedElement = null;
let closeTimeoutId = null;

const modalFields = {
    period: document.getElementById("modal-period"),
    title: document.getElementById("modal-title"),
    date: document.getElementById("modal-date"),
    material: document.getElementById("modal-material"),
    location: document.getElementById("modal-location"),
    technique: document.getElementById("modal-technique"),
    description: document.getElementById("modal-description"),
    context: document.getElementById("modal-context"),
    significance: document.getElementById("modal-significance")
};

function smoothScrollTo(id) {
    const target = document.getElementById(id);
    if (!target) {
        return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openArtifact(id, trigger) {
    const artifact = artifacts[id];
    if (!artifact) {
        return;
    }

    previousFocusedElement = trigger || document.activeElement;
    if (closeTimeoutId) {
        window.clearTimeout(closeTimeoutId);
        closeTimeoutId = null;
    }

    modalFields.period.textContent = artifact.period;
    modalFields.title.textContent = artifact.title;
    modalFields.date.textContent = artifact.date;
    modalFields.material.textContent = artifact.material;
    modalFields.location.textContent = artifact.location;
    modalFields.technique.textContent = artifact.technique;
    modalFields.description.textContent = artifact.description;
    modalFields.context.textContent = artifact.context;
    modalFields.significance.textContent = artifact.significance;

    modalImage.innerHTML = artifact.image
        ? `<img src="${artifact.image}" alt="${artifact.title}" decoding="async">`
        : "";

    modal.hidden = false;
    requestAnimationFrame(() => {
        modal.classList.add("is-open");
    });
    document.body.classList.add("modal-open");
    closeButton.focus();
}

function closeArtifact() {
    if (modal.hidden) {
        return;
    }

    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    closeTimeoutId = window.setTimeout(() => {
        modal.hidden = true;
        closeTimeoutId = null;
        if (previousFocusedElement && typeof previousFocusedElement.focus === "function") {
            previousFocusedElement.focus();
        }
    }, 250);
}

function getModalFocusableElements() {
    return modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
}

document.querySelectorAll("[data-artifact-id]").forEach((card) => {
    card.addEventListener("click", () => {
        openArtifact(card.dataset.artifactId, card);
    });
});

document.querySelectorAll("[data-scroll-target]").forEach((control) => {
    control.addEventListener("click", (event) => {
        event.preventDefault();
        smoothScrollTo(control.dataset.scrollTarget);
    });
});

closeButton.addEventListener("click", closeArtifact);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeArtifact();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        closeArtifact();
        return;
    }

    if (event.key !== "Tab" || modal.hidden) {
        return;
    }

    const focusable = getModalFocusableElements();
    if (!focusable.length) {
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});

window.openArtifact = openArtifact;
window.closeArtifact = closeArtifact;
window.scrollToTimeline = () => smoothScrollTo("timeline");

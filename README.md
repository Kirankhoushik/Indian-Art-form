# India Through Art

A professional static website that presents an interactive timeline of Indian art history, from the Indus Valley Civilization to modern India. Users can browse timeline cards and open rich modal details for each artifact.

## Features

- Semantic, accessible page structure with clear landmarks
- Responsive top navigation with smooth scrolling
- Interactive timeline with seven curated artifact cards
- Detail modal with keyboard support (Escape, focus handling, click-outside close)
- Improved metadata for SEO and social sharing
- Sources/Credits section for transparency and research direction

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Run Locally

No build step is required.

1. Clone/download this repository.
2. Open `index.html` directly in a browser, **or** run a lightweight static server.

Example using Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Folder Structure

```text
.
├── index.html      # semantic layout and content
├── style.css       # design system, responsive layout, states
├── script.js       # timeline data + interaction logic
├── 01.jpg          # timeline image 1
├── 02.webp         # timeline image 2
├── 03.jpg
├── 04.jpg
├── 05.jpg
├── 06.jpg
├── 07.jpeg
└── README.md
```

## Future Improvements

- Add image compression variants (`srcset`) for improved performance
- Add automated accessibility and lint checks in CI
- Expand timeline with more regions, schools, and media traditions
- Add multilingual content (for example, English + Indian language options)

## Credits and License Note

- Artifact context references: public museum and heritage resources (e.g., ASI, National Museum, Wikimedia context pages)
- Images included in this repository are used for project presentation and educational purposes
- Add a dedicated LICENSE file if you plan to publish or reuse this project broadly

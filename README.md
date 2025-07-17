# PSC Impact Stories

This is a web project designed to showcase the powerful impact stories from researchers and projects supported by the Pittsburgh Supercomputing Center (PSC). It includes a clean Bootstrap interface, a dynamic story viewer with filterable cards, and a submission form to share new stories.

## Setup Instructions

1. **Clone the repository**  

2. **Open in your code editor**  
You can open the folder directly in VS Code or another preferred editor.

3. **Run the project locally**  
Since this is a static site with a small dynamic component (form submission), you can run it using a local development server:
- With VS Code Live Server extension  
  Right-click `index.html` and select `Open with Live Server`.


4. **Backend for Form Submission**  
If you want to handle form submissions to a local server:
- Install Node.js (https://nodejs.org)
- Create a simple `server.js` file using Express (not included here)
- Run `node server.js`

---

## Design & Technical Choices

### Design

- **Bootstrap 5** was used to provide a responsive, mobile-friendly layout.
- A visually engaging **intro section** features a background image and strong typography to welcome users.
- The **story viewer** uses cards to display title, description, researcher, and tags with hover effects for interactivity.
- A clean, dark **footer** reinforces branding and provides helpful links.

### Technical

- Stories are stored in a local `data.json` file and dynamically rendered using JavaScript.
- Filtering is handled client-side via a dropdown menu, enabling users to easily explore specific themes (e.g., AI, Climate).
- A submission form is included with built-in Bootstrap validation and designed for optional backend extension using Node.js or Flask.
- Custom CSS overrides Bootstrap defaults (e.g., button colors, hover effects) to match PSC branding.

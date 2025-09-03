# Nick Agee - Personal Website

A modern, responsive personal website built with React and Vite. This website serves as a portfolio and contact platform, featuring a clean design and smooth user experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Tech Stack**: Built with React 18, Vite, and modern CSS
- **Fast Loading**: Optimized with Vite for lightning-fast development and build times
- **Smooth Navigation**: Smooth scrolling navigation between sections
- **Contact Form**: Interactive contact form for easy communication
- **Project Showcase**: Dedicated section to display projects and skills

## 🛠 Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: Modern CSS with CSS Variables
- **Development**: ESLint, Prettier

## 📁 Project Structure

```
nickagee-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero/landing section
│   │   ├── About.jsx     # About section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx    # Site footer
│   ├── styles/           # CSS stylesheets
│   │   ├── index.css     # Global styles and CSS variables
│   │   └── App.css       # Component-specific styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html             # HTML template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nickagee13/nickagee-website.git
   cd nickagee-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Colors and Themes

The website uses CSS custom properties (variables) for easy theming. You can modify the color scheme by updating the variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  /* ... more variables */
}
```

### Content Updates

- **Personal Information**: Update contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`
- **Projects**: Modify the projects array in `src/components/Projects.jsx`
- **Skills**: Update the skills array in `src/components/About.jsx`
- **Bio**: Edit the about section content in `src/components/About.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to GitHub Pages

1. Install the GitHub Pages deployment package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [@nickagee13](https://github.com/nickagee13)

---

Built with ❤️ using React and Vite
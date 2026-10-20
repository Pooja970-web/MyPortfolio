import project from '../assets/project.png';
import aiImage from '../assets/ai_image_preview.svg';

const mywork_data = [
  {
    w_img: project,
    w_name: "NewsMag 🌍 World News Web App",

    w_desc: [
      "Built using React and NewsData.io API",
      "Implemented category-based news filtering",
      "Handled loading and error states",
      "Responsive UI using CSS and Bootstrap"
    ],

    tech: "React, JavaScript (ES6), Bootstrap, NewsData.io API",
    github: "https://github.com/Pooja970-web/NEWSMAG"
  },
  {
    w_img: aiImage,
    w_name: "AI Image Generator 🎨 Text-to-Image Web App",

    w_desc: [
      "Generates images from text prompts in real time using the Pollinations AI API",
      "Prompt suggestion chips, animated progress bar, and image download",
      "Image history that saves and restores the last 8 generated images",
      "Responsive dark neon UI built with React and Vite"
    ],

    tech: "React, Vite, JavaScript (ES6), CSS3, Pollinations AI API",
    github: "https://github.com/Pooja970-web/ai-imageiGenerator"
  }
];

export default mywork_data;

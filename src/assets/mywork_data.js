import project from '../assets/project.png';
import examAllocator from '../assets/exam_allocator.png';

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
    w_img: examAllocator,
    w_name: "Exam Seat & Invigilation Allocator 📝 Constraint-Based Scheduler",

    w_desc: [
      "Auto-generates exam seating plans and invigilator duty rosters as downloadable PDFs",
      "Seating avoids placing same-subject students at adjacent left/front seats, using a greedy heuristic with randomized restarts",
      "Invigilation allocation with no double-booking, max-duties cap and fair load balancing",
      "Reports constraint violations and own-subject invigilation counts"
    ],

    tech: "Node.js, Express, PDFKit, JavaScript (ES6)",
    github: "https://github.com/Pooja970-web/-Exam-seat-invigilation-allocator-",
    demo: "https://exam-seat-allocator.onrender.com"
  }
];

export default mywork_data;

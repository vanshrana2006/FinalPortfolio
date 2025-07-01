AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Campus Representative Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Wayspire",
    time: "(Oct 2024 - Nov 2024)",
    desp: "<li>Planned and organized campus projects as part of project management efforts.</li> <li>Interacted with students and leads to resolve queries and ensure high satisfaction.</li> <li>Promoted Wayspire initiatives through campus-based marketing and outreach.</li> <li>Assisted in onboarding and peer training as part of HR efforts.</li> <li>Contributed to lead generation and conversions to support sales targets.</li> <li>Provided basic support in administration, budgeting, and reporting tasks.</li>",
  },
  {
    title: "Campus Ambassador",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Internsup",
    time: "(Oct 2024 - Oct 2024)",
    desp: "<li>Represented Internsup as a Campus Ambassador to promote their brand and offerings.</li> <li>Completed Brand Ambassador Training to understand outreach strategies and brand positioning.</li> <li>Engaged peers and student communities through digital and campus-based outreach efforts.</li>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Feynn Labs",
    time: "(Upcoming)",
    desp: "<li>Working on real-world machine learning problems with Feynn Labs’ technical team.</li> <li>Assisting in model development, training, and deployment using Python and popular ML frameworks.</li> <li>Collaborating with researchers and engineers to build scalable AI-driven solutions.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Codeless AI Hackathon with JOGET",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Built AI solutions using no-code tools at a hackathon by Chitkara University and JOGET.",
  },
  {
    title: "HTML 5",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Earned a certification in HTML 5 from Marwadi University in Aug 2024.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    subtitle: "Credential ID: 2QC9-XMSn",
    image: "assets/images/experience-page/uplift.png",
    desp: "Earned the Azure Fundamentals certification from Microsoft in June 2025. Gained foundational skills in cloud concepts and Azure AI Studio.",
    href: "https://www.credly.com/earner/earned/share/ce978944-e16d-4b1e-88fc-f33cbc7f0eac/",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    subtitle: "Issued: Dec 2024",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Earned the Azure AI Fundamentals certification from Microsoft, demonstrating knowledge in Azure Cognitive Services and AI capabilities on Microsoft Azure.",
    href: "hhttps://www.credly.com/earner/earned/share/55f46503-3c05-4ae7-a4e9-65a67c8307c3",
  },
  {
    title: "Data Analysis with Spreadsheets and SQL",
    subtitle: "Issued: Jun 2025",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "Completed Meta's certification on data analysis using spreadsheets and SQL, gaining foundational skills in data handling, transformation, and SQL querying.",
    href: "https://www.coursera.org/account/accomplishments/verify/G6549OBEY7UL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Introduction to Data Analytics",
    subtitle: "Issued: Jan 2025",
    image: "assets/images/experience-page/elevate.png",
    desp: "Completed Meta's Introduction to Data Analytics course, covering key concepts in data gathering, cleaning, analysis, and visualization using industry tools.",
    href: "https://www.coursera.org/account/accomplishments/verify/ZJHDU3CH461G",
  },
  {
    title: "Python Data Analytics",
    subtitle: "Issued: Jan 2025",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "Completed Meta's Python Data Analytics course focused on using Python for data analysis, including data wrangling, visualization, and statistical techniques.",
    href: "https://www.coursera.org/account/accomplishments/verify/72EWA1T6RBDO",
  },
  {
    title: "Statistics Foundations",
    subtitle: "Issued: Jan 2025",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Completed Meta’s Statistics Foundations course, covering descriptive statistics, probability, distributions, and the role of statistics in data analysis.",
    href: "https://www.coursera.org/account/accomplishments/verify/5VO61522F0V5",
  },
  {
    title: "SQL (Advanced)",
    subtitle: "Issued: Oct 2024",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "Earned the Advanced SQL certificate from HackerRank, demonstrating proficiency in complex queries, joins, aggregations, and optimization techniques.",
    href: "https://www.hackerrank.com/certificates/3995c8adde8c",
  },
  {
    title: "Software Developer",
    subtitle: "Issued: Oct 2024",
    image: "assets/images/experience-page/atlas.png",
    desp: "Achieved HackerRank's Software Developer certification by demonstrating problem-solving, algorithmic thinking, and coding proficiency.",
    href: "https://www.hackerrank.com/certificates/12e4ef5273ad",
  },
  {
    title: "Technical Communication",
    subtitle: "Issued: Jan 2025",
    image: "assets/images/experience-page/neo.png",
    desp: "Completed the Technical Communication course by the University of Colorado Boulder, focusing on clear and effective writing for technical and scientific contexts.",
    href: "https://www.coursera.org/account/accomplishments/specialization/QRP6AY0E0VOR",
  },
  {
    title: "Speaking to a Technical Group",
    subtitle: "Issued: Dec 2024",
    image: "assets/images/experience-page/mission.png",
    desp: "Completed a course by the University of Colorado Boulder on effectively presenting technical information to specialized and non-specialized audiences.",
    href: "https://www.coursera.org/account/accomplishments/verify/7L1BH0F4MTKN",
  },
  {
    title: "Communication as a Technical Leader",
    subtitle: "Issued: Nov 2024",
    image: "assets/images/experience-page/hack3.png",
    desp: "Completed a course on developing leadership communication skills for technical environments, focusing on clarity, influence, and team coordination.",
    href: "https://www.coursera.org/account/accomplishments/verify/6DQ5G6NCZVIZ",
  },
  {
    title: "Introduction to Generative AI Studio",
    subtitle: "Issued: Oct 2024",
    image: "assets/images/experience-page/jithack.png",
    desp: "Completed Simplilearn’s course on Generative AI Studio, gaining insights into building and deploying generative AI models using intuitive platforms.",
    href: "https://simpli-web.app.link/e/04htNF6kBUb",
  },
  {
    title: "Introduction to Artificial Intelligence",
    subtitle: "Issued: Oct 2024",
    image: "assets/images/experience-page/recess.png",
    desp: "Completed Simplilearn’s introductory course on Artificial Intelligence, exploring key concepts in AI and its real-world applications.",
    href: "https://simpli-web.app.link/e/KqnCMJ3kBUb",
  },
  {
    title: "Introduction to Responsible AI",
    subtitle: "Issued: Oct 2024",
    image: "assets/images/experience-page/citro.png",
    desp: "Completed a foundational course on Responsible AI by Simplilearn, focused on fairness, transparency, and ethical implications in AI systems.",
    href: "https://simpli-web.app.link/e/fPg81galBUb",
  },
  {
    title: "Machine Learning Using Python",
    subtitle: "Issued: Oct 2024",
    image: "assets/images/experience-page/nhacks.png",
    desp: "Completed a practical course on Machine Learning using Python, covering supervised and unsupervised algorithms, model evaluation, and implementation.",
    href: "https://simpli-web.app.link/e/faZdLD9kBUb",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

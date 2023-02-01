// eslint-disable-next-line no-unused-vars
const projectList = [
  {
    title: 'Tonic',
    subtitle: 'Canopy',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectType: 'Back End Dev',
    date: 2015,
    image: './assets/images/nature-bg.png',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Facebook',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectType: 'Full Stack Dev',
    date: 2015,
    image: './assets/images/professional-printing.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  },
  {
    title: 'Facebook 360',
    subtitle: 'Facebook',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    projectType: 'Full Stack Dev',
    date: 2015,
    image: './assets/images/project-1.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  },
  {
    title: 'Uber Navigation',
    subtitle: 'Uber',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectType: 'Lead Developer',
    date: 2018,
    image: './assets/images/project-2.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  },
];

const workSectionContainer = document.querySelector('#work-section .container');
console.log(workSectionContainer);
// eslint-disable-next-line no-unused-vars
const projectLists = [
  {
    title: 'Tonic',
    subtitle: 'Canopy',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectType: 'Back End Dev',
    date: 2015,
    image: 'nature-bg.png',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Facebook',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectType: 'Full Stack Dev',
    date: 2015,
    image: 'professional-printing.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  },
  {
    title: 'Facebook 360',
    subtitle: 'Facebook',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    projectType: 'Full Stack Dev',
    date: 2015,
    image: 'project-1.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  },
  {
    title: 'Uber Navigation',
    subtitle: 'Uber',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectType: 'Lead Developer',
    date: 2018,
    image: 'project-2.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  },
];
const listAllProject = () => {
  let projectHtml = '';
  projectLists.forEach((project) => {
    let technologiesHtml = '';
    if (project.technologies.length) {
      project.technologies.forEach((technology) => {
        technologiesHtml += `<li>${technology}</li>`;
      });
    }
    projectHtml += `<div class="card-work">
      <div class="image-container">
        <img
          src="./assets/images/${project.image}"
          width="100%"
          alt="${project.image}"
        />
      </div>
      <div class="card-content">
        <h2 class="project-title">${project.title}</h2>
        <div class="project-additional-info">
          <h5>${project.subtitle}</h5>
          <div class="dot"></div>
          <p>${project.projectType}</p>
          <div class="dot"></div>
          <p><time datetime="${project.date}">${project.date}</time></p>
        </div>
        <p class="project-description">
          ${project.description}
        </p>
        <ul class="project-tags">
          ${technologiesHtml}
        </ul>
        <a type="button" href="#" class="project-btn"> See Project </a>
      </div>
    </div>`;
  });
  workSectionContainer.innerHTML += projectHtml;
};
listAllProject();

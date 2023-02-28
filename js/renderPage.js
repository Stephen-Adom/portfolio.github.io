// eslint-disable-next-line no-undef
const sidebar = document.querySelector('.mobile-navigation');
const pageHeader = document.querySelector('#page-header');
const main = document.querySelector('#main');

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
    liveVersion: '#',
    sourceLink: '#',
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
    liveVersion: '#',
    sourceLink: '#',
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
    liveVersion: '#',
    sourceLink: '#',
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
    liveVersion: '#',
    sourceLink: '#',
  },
];

const renderHeader = () => {
  const html = `
  <div id="navbar" role="navigation">
  <div class="container">
    <a href="#" class="page_logo">Stephen</a>
    <nav class="navbar-nav">
      <a type="button" class="nav-toggle-btn">
        <img
          src="./assets/images/icons/Union@2x.png"
          width="3rem"
          alt="menu-bar"
        />
      </a>

      <ul class="nav-links">
        <li class="nav-link">
          <a href="#work-section">Portfolio</a>
        </li>
        <li class="nav-link">
          <a href="#about-section">About</a>
        </li>
        <li class="nav-link">
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
  `;

  pageHeader.innerHTML += html;
};

const renderSidebar = () => {
  const html = `
  <div class="sidebar-header">
  <button type="button" class="open-nav">
    <img
      src="./assets/images/icons/close.png"
      width="100%"
      alt="close btn"
    />
  </button>
</div>

<ul class="sidebar-menu">
  <li>
    <a href="#work-section">Porftolio</a>
  </li>
  <li>
    <a href="#about-section">About</a>
  </li>
  <li>
    <a href="#contact-section">Contact</a>
  </li>
</ul>
  `;

  sidebar.innerHTML += html;
};

const renderMain = () => {
  const html = `
  <section id="headline">
  <div class="container">
    <hgroup>
      <h1 class="headline-title">I’m Stephen Addae</h1>
      <h1 class="headline-title">Glad to see you!</h1>
    </hgroup>
    <p>
      I’m a software developer! I can help you build a product , feature
      or website Look through some of my work and experience! If you like
      what you see and have a project you need coded, don’t hestiate to
      contact me.
    </p>
    <a href="#" class="headline-connect-link"> LET’S CONNECT </a>

    <ul class="social-links">
      <li>
        <a href="#">
          <img src="./assets/images/icons/twitter.png" alt="twitter" />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/images/icons/linkedin.png" alt="linkedin" />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/images/icons/medium.png" alt="medium" />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/images/icons/github.png" alt="github" />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/images/icons/v.png" alt="v" />
        </a>
      </li>
    </ul>
  </div>
</section>

<section id="work-section" class="info-section">
  <div class="container"></div>
</section>

<section id="about-section" class="info-section">
  <div class="container">
    <article class="about">
      <h1 class="about-title">
        About <br />
        Myself
      </h1>

      <p class="about-description">
        Hello I’m a software developer! I can help you build a product ,
        feature or website Look through some of my work and experience! If
        you like what you see and have a project you need coded, don’t
        hestiate to contact me.
      </p>

      <a href="#" class="headline-connect-link"> LET’S CONNECT </a>

      <ul class="social-links">
        <li>
          <a href="#">
            <img src="./assets/images/icons/github.png" alt="github" />
          </a>
        </li>

        <li>
          <a href="#">
            <img
              src="./assets/images/icons/linkedin.png"
              alt="linkedin"
            />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./assets/images/icons/v.png" alt="v" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./assets/images/icons/twitter.png" alt="twitter" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./assets/images/icons/medium.png" alt="medium" />
          </a>
        </li>
      </ul>

      <a type="button" href="#" class="project-btn"> Get my resume </a>
    </article>

    <ul class="skill-list">
      <li class="accordion">
        <div class="accordion-header">
          <h5>Languages</h5>

          <button type="button">
            <img
              src="./assets/images/icons/chevron-down.png"
              width="100%"
              alt="arrow-down"
            />
          </button>
        </div>

        <ul class="accordion-content">
          <li class="skill-item">
            <div class="skill-item-logo">
              <img
                src="./assets/images/javascript.png"
                alt="javascript"
              />
            </div>

            <h6>Javascript</h6>
          </li>

          <li class="skill-item">
            <div class="skill-item-logo">
              <img src="./assets/images/html.png" alt="javascript" />
            </div>

            <h6>HTML</h6>
          </li>

          <li class="skill-item">
            <div class="skill-item-logo">
              <img src="./assets/images/css.png" alt="javascript" />
            </div>

            <h6>CSS</h6>
          </li>
        </ul>
      </li>

      <li class="accordion">
        <div class="accordion-header">
          <h5>Frameworks</h5>

          <button type="button">
            <img
              src="./assets/images/icons/chevron-right.png"
              width="100%"
              alt="arrow-right"
            />
          </button>
        </div>
      </li>

      <li class="accordion">
        <div class="accordion-header">
          <h5>Skills</h5>

          <button type="button">
            <img
              src="./assets/images/icons/chevron-right.png"
              width="100%"
              alt="arrow-right"
            />
          </button>
        </div>
      </li>
    </ul>
  </div>
</section>

<section id="contact-section" class="info-section">
  <div class="container">
    <h1 class="contact-section-title">Contact me</h1>

    <p class="contact-description">
      If you have an application you are interested in developing, a
      feature that you need built or a project that needs coding. I’d love
      to help with it
    </p>
    <form action="https://formspree.io/f/xgebvywo" method="POST">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your name"
          required
          maxlength="30"
          name="name"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Enter email address"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          name="email"
        />
      </div>
      <div class="form-group">
        <textarea
          placeholder="Write your message here"
          class="form-control"
          maxlength="500"
          rows="5"
          name="message"
          required
        ></textarea>
      </div>

      <div class="error-message"></div>

      <div class="form-group">
        <button type="submit" class="project-btn submit-btn">
          Get In Touch
        </button>
      </div>
      
    </form>
  </div>
</section>
  `;
  main.innerHTML += html;
};

const initializePage = () => new Promise((resolve) => {
  renderHeader();
  renderSidebar();
  renderMain();
  resolve();
});

const displayModal = (project) => {
  const modalWrapper = document.querySelector('.modal-wrapper');

  let technologiesHtml = '';
  if (project.technologies.length) {
    project.technologies.forEach((technology) => {
      technologiesHtml += `<li>${technology}</li>`;
    });
  }

  modalWrapper.innerHTML = `
  <div class="modal-card">
  <div class="modal-header">
    <h1 class="modal-title">${project.title}</h1>

    <button title="close button" type="button" class="modal-close-btn">
      <img src="assets/images/icons/close.png" alt="close" width="100%" />
    </button>
  </div>
  <div class="project-additional-info modal-additional-info">
    <h5>${project.subtitle}</h5>
    <div class="dot"></div>
    <p>${project.projectType}</p>
    <div class="dot"></div>
    <p><time datetime="${project.date}">${project.date}</time></p>
  </div>

  <div class="project-image-container" style="background-image: url('./assets/images/${project.image}');"></div>

  <div class="modal-content">
    <p class="project-description">
    ${project.description}
    </p>

    <div class="project-information-2">
      <ul class="project-tags">
        ${technologiesHtml}
      </ul>

      <div class="divider"></div>

      <div class="modal-actions">
        <a type="button" href="${project.liveVersion}" class="project-btn">
          See live
          <img
            src="assets/images/icons/see_live.svg"
            width="21px"
            alt="see live" />
        </a>
        <a type="button" href="${project.sourceLink}" class="project-btn">
          See Source
          <img
            src="assets/images/icons/github_in_button.svg"
            width="21px"
            alt="github" />
        </a>
      </div>
    </div>
  </div>
</div>`;

  modalWrapper.classList.remove('close');
  document.body.classList.add('hidescrollbar');

  modalWrapper.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('modal-close-btn')) {
      modalWrapper.classList.add('close');
      modalWrapper.innerHTML = '';
      document.body.classList.remove('hidescrollbar');
    }
  });
};

const addClickEventToWorkSection = (workSectionContainer) => {
  workSectionContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const index = e.target.getAttribute('data-index');
      const project = projectLists[Number(index)];
      displayModal(project);
    }
  });
};

const renderProjectList = () => {
  const workSectionContainer = document.querySelector(
    '#work-section .container',
  );

  let projectHtml = '';
  projectLists.forEach((project, index) => {
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
        <a type="button" href="javascript:;" data-index="${index}" class="project-btn"> See Project </a>
      </div>
    </div>`;
  });
  workSectionContainer.innerHTML += projectHtml;

  addClickEventToWorkSection(workSectionContainer);
};

document.addEventListener('DOMContentLoaded', () => {
  initializePage().then(() => {
    renderProjectList();
  });
});

export default initializePage;

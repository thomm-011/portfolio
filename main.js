'use strict';
// Keep every project visible if JavaScript is unavailable.
const toolbar = document.querySelector('.project-toolbar');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const count = document.getElementById('project-count');
const secondaryGroup = document.querySelector('.secondary-projects');
if (toolbar && count && projects.length) {
  toolbar.hidden = false;
  for (const button of filterButtons) {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      for (const option of filterButtons) {
        option.setAttribute('aria-pressed', String(option === button));
      }
      let visible = 0;
      for (const project of projects) {
        project.hidden = filter !== 'all' && project.dataset.category !== filter;
        if (!project.hidden) visible += 1;
      }
      if (secondaryGroup) {
        secondaryGroup.hidden = ![...secondaryGroup.children].some(project => !project.hidden);
      }
      count.textContent = `${visible} ${visible === 1 ? 'projeto' : 'projetos'}`;
    });
  }
}

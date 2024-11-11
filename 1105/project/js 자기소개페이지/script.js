const body = document.body;

// 배경색을 은은한 노란색으로 설정
body.style.backgroundColor = 'rgba(255, 255, 204, 0.8)'; // 약간 투명한 노란색

const card = document.createElement('div');
card.className = 'card';
card.style.width = '300px';
card.style.margin = '20px auto';
card.style.padding = '20px';
card.style.border = '1px solid #ccc';
card.style.borderRadius = '10px';
card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

const img = document.createElement('img');
img.src = 'spongebob.png';
img.alt = 'Profile Image';
img.style.width = '100%';
img.style.borderRadius = '10px';
card.appendChild(img);

const nameHeading = document.createElement('h5');
nameHeading.textContent = '이름: 이근석';
nameHeading.style.textAlign = 'center';
nameHeading.style.color = '#9757ff';
card.appendChild(nameHeading);

const introParagraph = document.createElement('p');
introParagraph.textContent = '안녕하세요! 저는 웹 개발자입니다. 다양한 기술을 배우고 프로젝트를 진행하는 것을 좋아합니다.';
card.appendChild(introParagraph);

const contactButton = document.createElement('a');
contactButton.href = '#';
contactButton.textContent = '연락하기';
contactButton.className = 'btn';
contactButton.style.display = 'block';
contactButton.style.marginTop = '10px';
contactButton.style.textAlign = 'center';
contactButton.style.backgroundColor = '#007bff';
contactButton.style.color = 'white';
contactButton.style.padding = '10px';
contactButton.style.borderRadius = '5px';
card.appendChild(contactButton);

body.appendChild(card);

const section = document.createElement('div');
section.style.marginTop = '20px';
section.style.padding = '20px';
section.style.border = '2px solid #57ff70';
section.style.borderRadius = '10px';
section.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

const introTitle = document.createElement('h2');
introTitle.textContent = '자기 소개';
section.appendChild(introTitle);

const introText = document.createElement('p');
introText.textContent = '저는 HTML, CSS, JavaScript를 사용하여 웹 애플리케이션을 개발하고 있습니다. 새로운 기술을 배우는 것을 즐기며, 팀 프로젝트에서 협업하는 것을 좋아합니다.';
section.appendChild(introText);

const skillsTitle = document.createElement('h3');
skillsTitle.textContent = '주요 기술';
section.appendChild(skillsTitle);

const skillsList = document.createElement('ul');
const skills = ['HTML, CSS, JavaScript', 'React, Vue.js', 'Node.js, Express'];
skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});
section.appendChild(skillsList);

const projectsTitle = document.createElement('h3');
projectsTitle.textContent = '프로젝트';
section.appendChild(projectsTitle);

const projectsList = document.createElement('ul');
const projects = ['프로젝트 1', '프로젝트 2', '프로젝트 3'];
projects.forEach(project => {
    const listItem = document.createElement('li');
    const projectLink = document.createElement('a');
    projectLink.href = '#';
    projectLink.textContent = project;
    projectLink.style.color = '#007bff';
    listItem.appendChild(projectLink);
    projectsList.appendChild(listItem);
});
section.appendChild(projectsList);

body.appendChild(section);

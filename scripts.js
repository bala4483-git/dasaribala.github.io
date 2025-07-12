fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects-container');
    data.forEach(proj => {
      const div = document.createElement('div');
      div.className = "project";
      div.innerHTML = `
        <h3>${proj.title}</h3>
        <p><strong>Role:</strong> ${proj.role}</p>
        ${proj.description.map(line => `<p>${line}</p>`).join("")}
        <p><strong>Tools Used:</strong> ${proj.tools.join(", ")}</p>
        <p><strong>Impact:</strong> ${proj.impact}</p>
      `;
      container.appendChild(div);
    });
  });

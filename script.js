async function loadShowcase() {
  const response = await fetch("links.json");
  const projects = await response.json();

  const showcase = document.getElementById("showcase");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${project.image || 'https://via.placeholder.com/400x200?text=No+Image'}" alt="${project.title}">
      <div class="card-content">
        <h2>${project.title}</h2>
        <a href="${project.url}" target="_blank">Visit Site →</a>
      </div>
    `;

    showcase.appendChild(card);
  });
}

loadShowcase();

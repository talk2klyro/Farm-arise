const branchesContainer = document.getElementById('branches');

fetch('tree.json')
  .then(res => res.json())
  .then(data => {
    data.branches.forEach(branch => {
      const branchDiv = document.createElement('div');
      branchDiv.classList.add('branch');

      const branchName = document.createElement('div');
      branchName.classList.add('branch-name');
      branchName.textContent = branch.name;
      branchDiv.appendChild(branchName);

      // Render leaves (internal content)
      branch.leaves.forEach(leaf => {
        const btn = document.createElement('button');
        btn.innerHTML = `<img src="${leaf.img}" alt="${leaf.name}"><span>${leaf.name}</span>`;
        btn.onclick = () => location.href = leaf.url;
        branchDiv.appendChild(btn);
      });

      // Render fruits (ads/promotions)
      branch.fruits.forEach(fruit => {
        const btn = document.createElement('button');
        btn.classList.add('fruit');
        btn.innerHTML = `<img src="${fruit.img}" alt="${fruit.name}"><span>${fruit.name}</span>`;
        btn.onclick = () => window.open(fruit.url, '_blank');
        branchDiv.appendChild(btn);
      });

      branchesContainer.appendChild(branchDiv);
    });
  })
  .catch(err => console.error('Error loading tree.json:', err));￼Enter

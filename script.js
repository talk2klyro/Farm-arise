// Inline JSON for testing (bypasses fetch issues)
const treeData = {
  "stem": "Main Showcase",
  "branches": [
    {
      "name": "Electronics",
      "leaves": [
        {"name": "Laptop", "url": "/laptop.html", "img": "images/laptop.png"},
        {"name": "Camera", "url": "/camera.html", "img": "images/camera.png"}
      ],
      "fruits": [
        {"name": "Laptop Promo", "url": "https://ads.com/laptop", "img": "images/laptop-promo.png"}
      ]
    },
    {
      "name": "Clothing",
      "leaves": [
        {"name": "T-Shirt", "url": "/tshirt.html", "img": "images/tshirt.png"},
        {"name": "Jacket", "url": "/jacket.html", "img": "images/jacket.png"}
      ],
      "fruits": [
        {"name": "Summer Sale", "url": "https://ads.com/summer", "img": "images/summer-sale.png"}
      ]
    }
  ]
};

const branchesContainer = document.getElementById('branches');

// Clear loading message if exists
branchesContainer.innerHTML = '';

// Render the tree
treeData.branches.forEach(branch => {
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

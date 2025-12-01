fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");
    const modal = document.getElementById("productModal");
    const modalMainImg = document.getElementById("modal-main-img");
    const modalThumbs = document.getElementById("modal-thumbs");
    const modalName = document.getElementById("modal-name");
    const modalPrice = document.getElementById("modal-price");
    const modalDesc = document.getElementById("modal-desc");
    const closeBtn = document.querySelector(".close");

    products.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("product-card");

      div.innerHTML = `
        <img src="${p.images[0]}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p><strong>${p.price} lei</strong> ${p.old_price ? `<span style="text-decoration: line-through; color:gray;">${p.old_price} lei</span>` : ""}</p>
      `;

      container.appendChild(div);

      // click pe produs → deschide modal
      div.onclick = () => {
        modal.style.display = "block";
        modalMainImg.src = p.images[0];
        modalName.textContent = p.name;
        modalPrice.innerHTML = `<strong>${p.price} lei</strong>` + (p.old_price ? `<span style="margin-left:10px;color:gray;text-decoration: line-through;">${p.old_price} lei</span>` : "");
        modalDesc.textContent = p.description;

        // thumbnails
        modalThumbs.innerHTML = "";
        p.images.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.onclick = () => modalMainImg.src = src;
          modalThumbs.appendChild(img);
        });
      };
    });

    // închidere modal
    closeBtn.onclick = () => modal.style.display = "none";

    // click în afara modalului
    window.onclick = (e) => {
      if (e.target == modal) modal.style.display = "none";
    };
  });

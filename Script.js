function showCategory(category) {
    const images = document.querySelectorAll('.image-container img');
    images.forEach((image) => {
      if (image.dataset.category === category) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });

    const navbarItems = document.querySelectorAll('.navbar li');
    navbarItems.forEach((item) => {
      if (item.innerText.toLowerCase() === category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
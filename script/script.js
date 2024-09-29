
  const placeholderText = "Search Product Name....";
  let currentIndex = 0;

  function typePlaceholder() {
    const input = document.getElementById('searchInput');
    input.setAttribute('placeholder', placeholderText.substring(0, currentIndex));

    currentIndex++;
    if (currentIndex > placeholderText.length) {
      currentIndex = 0;
    }

    setTimeout(typePlaceholder, 200); // Adjust the typing speed here
  }

  // Start the typing effect on page load
  window.onload = function() {
    typePlaceholder();
  };


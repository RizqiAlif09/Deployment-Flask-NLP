     const scrollContainer = document.getElementById("scrollContainer");
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        scrollContainer.classList.add("active");
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = "grabbing";
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDown = false;
        scrollContainer.classList.remove("active");
        scrollContainer.style.cursor = "grab";
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDown = false;
        scrollContainer.classList.remove("active");
        scrollContainer.style.cursor = "grab";
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // adjust scroll speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollable.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollable.classList.add('active');
      startX = e.pageX - scrollable.offsetLeft;
      scrollLeft = scrollable.scrollLeft;
    });

    scrollable.addEventListener('mouseleave', () => {
      isDown = false;
      scrollable.classList.remove('active');
    });

    scrollable.addEventListener('mouseup', () => {
      isDown = false;
      scrollable.classList.remove('active');
    });

    scrollable.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollable.offsetLeft;
      const walk = (x - startX) * 3; // The scroll speed can be adjusted here
      scrollable.scrollLeft = scrollLeft - walk;
    });
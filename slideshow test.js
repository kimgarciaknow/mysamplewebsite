<body>

    <div class="slideshow-container">
        <!-- Slides -->
        <img src="https://via.placeholder.com/800x500/ff7f7f/333333?text=Image+1" alt="Image 1" class="slides fade">
        <img src="https://via.placeholder.com/800x500/7fbfff/333333?text=Image+2" alt="Image 2" class="slides fade">
        <img src="https://via.placeholder.com/800x500/ffbb7f/333333?text=Image+3" alt="Image 3" class="slides fade">

        <!-- Navigation arrows -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>

    <div class="dot-container">
        <!-- Dot navigation (optional) -->
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>

    <script>
        let slideIndex = 0;

        // Function to show the current slide
        function showSlides() {
            let slides = document.querySelectorAll('.slides');
            let dots = document.querySelectorAll('.dot');

            // Loop through slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  // Hide all slides
            }

            // Reset dot styles
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            // Show the current slide and activate the corresponding dot
            slides[slideIndex].style.display = "block";
            dots[slideIndex].className += " active";
        }

        // Next/previous slide
        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex >= document.querySelectorAll('.slides').length) {
                slideIndex = 0; // Loop back to the first slide
            }
            if (slideIndex < 0) {
                slideIndex = document.querySelectorAll('.slides').length - 1; // Loop back to the last slide
            }
            showSlides();
        }

        // Automatic slideshow
        setInterval(function() {
            plusSlides(1);
        }, 3000);  // Change image every 3 seconds

        // Initialize the slideshow
        showSlides();

        // Swipe functionality for touch devices
        let touchStartX = 0;
        let touchEndX = 0;

        document.querySelector('.slideshow-container').addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.querySelector('.slideshow-container').addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                plusSlides(1);  // Swipe left to go to the next slide
            }
            if (touchEndX - touchStartX > 50) {
                plusSlides(-1);  // Swipe right to go to the previous slide
            }
        });
    </script>

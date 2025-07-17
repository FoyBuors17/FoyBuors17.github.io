const reviews = [
  {
    name: "Jack Robertson",
    avatar: "images/JackRobertson.png",
    stars: 5,
    date: "06-24-2025",
    text: "My wife and I are extremely pleased with the services provided by this company and especially those of Katie. She is very efficient, going the extra mile and making suggestions that she could help with. To top it off, she has a enormously friendly personality and it is a joy to have her in our home."
  },
  {
    name: "Julie Norden",
    avatar: "images/JulieNorden.png",
    stars: 5,
    date: "06-15-2025",
    text: "If you live in the Fraser Valley - Tidy Fox is an excellent cleaning service. Friendy, efficient and thorough I would highly recommend. Also the online booking tool makes it simple to book, and reschedule appointments if needed. Thank you for keeping my mother's condo clean!"
  },
  {
    name: "Briana Lachance",
    avatar: "images/BrianaLachance.png",
    stars: 5,
    date: "04-24-2025",
    text: "I have used Tidy Fox on two separate occasions and will be continuing to use them on a regular basis. I love being able to customize my cleaning needs on a website without having to talk to someone on the phone! The teams are always extremely throughout and leave my house clean and fresh!"
  },
  {
    name: "Kylie Greidanus",
    avatar: "images/KylieGreidanus.png",
    stars: 5,
    date: "07-17-2025",
    text: "Tidy Fox cleaners are great! The house is super clean and it was done quickly and efficiently and staff is super friendly. Will definitely book again. Thank you!"
  },
  

  {
    name: "Francesca Tan",
    avatar: "images/FrancescaTan.png",
    stars: 5,
    date: "07-03-2025",
    text: "Katie and Adara went above and beyond! I’ve always been satisfied with the Tidy Fox staff and found that the duo today were especially meticulous and cleaned areas that I hadn’t considered. Both Katie and Adara are very warm and friendly individuals!<br><br>Thank you Katie and Adara!"
  },
 
  
  {
    name: "Tania Smart",
    avatar: "images/TaniaSmart.png",
    stars: 5,
    date: "04-08-2023",
    text: "Super impressed with our experience, felt great value for money and would definitely book again!<br><br><strong>Positive</strong><br>Punctuality, Quality, Professionalism, Value<br><br><strong>Services</strong><br>General housekeeping"
  },  
  {
    name: "Natassia Hole",
    avatar: "images/NatassiaHole.png",
    stars: 5,
    date: "11-01-2024",
    text: "Lesia and Molly were amazing! So friendly and efficient and they were very kind to my dogs as well. My house feels cleaner than it has in a long time. So very satisfied - I will definitely use them again!!"
  },
  {
    name: "Carey Zacharias",
    avatar: "images/CareyZacharias.png",
    stars: 5,
    date: "a year ago",
    text: "Tidy Fox has done a great job keeping my home clean over the past year. The owners are lovely and easy to deal with, and committed to customer satisfaction.<br><br><strong>Positive</strong><br>Responsiveness, Punctuality, Quality, Professionalism, Value"
  },
  {
    name: "Mary MacKenzie",
    avatar: "images/MaryMackenzie.png",
    stars: 5,
    date: "07-05-2025",
    text: "I am very pleased with the friendliness, efficiency and high quality of Tidy Fox. They do an excellent job!"
  },
 
  // Add more review objects here
];

function renderStars(starCount) {
  return '★'.repeat(starCount);
}

document.addEventListener('DOMContentLoaded', function() {
  const reviewsRow = document.getElementById('reviews-row');
  
  // Function to randomly select 3 reviews for mobile
  function getRandomReviews(reviewsArray, count) {
    const shuffled = [...reviewsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Function to check if we're in mobile view
  function isMobile() {
    return window.innerWidth <= 480;
  }
  
  // Function to render reviews based on screen size
  function renderReviews() {
    const reviewsToShow = isMobile() ? getRandomReviews(reviews, 3) : getRandomReviews(reviews, 6);
    
    reviewsRow.innerHTML = reviewsToShow.map(review => `
      <div class="review-card">
        <div class="review-card-header">
          <img src="${review.avatar}" alt="${review.name}" class="review-avatar" />
          <div class="review-header-text">
            <span class="review-name">${review.name}</span>
            <span class="review-date">${review.date}</span>
          </div>
          <img src="images/google-logo.png" class="google-logo" alt="Google Logo">
        </div>
        <div class="review-stars">${renderStars(review.stars)}</div>
        <p class="review-text">${review.text}</p>
      </div>
    `).join('');
  }
  
  // Initial render
  renderReviews();

  // Function to get responsive gutter size
  function getResponsiveGutter() {
    const width = window.innerWidth;
    if (width <= 600) {
      return 16; // Mobile: smaller gutter
    } else if (width <= 900) {
      return 24; // Tablet: medium gutter
    } else {
      return 64; // Desktop: larger gutter
    }
  }

  // Initialize Masonry with responsive gutter
  let masonryInstance = new Masonry(reviewsRow, {
    itemSelector: '.review-card',
    columnWidth: '.review-card',
    percentPosition: true,
    gutter: getResponsiveGutter()
  });

  // Track current mobile state to detect changes
  let wasMobile = isMobile();

  // Update on window resize
  window.addEventListener('resize', function() {
    const isCurrentlyMobile = isMobile();
    
    // If mobile state changed, re-render reviews
    if (wasMobile !== isCurrentlyMobile) {
      renderReviews();
      wasMobile = isCurrentlyMobile;
    }
    
    // Always update Masonry layout
    masonryInstance.destroy();
    masonryInstance = new Masonry(reviewsRow, {
      itemSelector: '.review-card',
      columnWidth: '.review-card',
      percentPosition: true,
      gutter: getResponsiveGutter()
    });
  });

  // Counter animation function
  function onIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const dataNumber = target.getAttribute('data-number');
        const endValue = parseFloat(dataNumber);
        
        // Handle decimal places
        const decimalPlaces = dataNumber.includes('.') ? dataNumber.split('.')[1].length : 0;
        const formatter = new Intl.NumberFormat('en-US', {
          maximumFractionDigits: decimalPlaces,
          minimumFractionDigits: decimalPlaces
        });
        
        const duration = 2000; // 2 seconds
        let startTimestamp = null;
        
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentValue = progress * endValue;
          target.textContent = formatter.format(currentValue);
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
        observer.unobserve(target); // Stop observing after animation starts
      }
    });
  }

  // Create the observer
  const observerInstance = new IntersectionObserver(onIntersection, {
    root: null,   // default is the viewport
    rootMargin: '-20% 0% -20% 0%',
    threshold: 0 // percentage of target's visible area. Triggers "onIntersection"
  });

  // Start observing all stat numbers
  document.querySelectorAll('.statistics–single__data–number').forEach(element => {
    observerInstance.observe(element);
  });
});
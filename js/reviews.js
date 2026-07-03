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
  {
    name: "Farida Kothari",
    avatar: "images/FaridaKothari.png",
    stars: 5,
    date: "10-05-2025",
    text: "I had an excellent experience with Tidy Fox for the cleaning of our new home! Grace and Kendra came on short notice and did an amazing job. They were punctual and thorough. The management was also very responsive and prompt with their communication, which I appreciated tremendously.<br><br>It was SO easy to work with this team. I was impressed from beginning to end with their professionalism and quality. I would highly recommend Tidy Fox to anyone looking for a reliable, quality service!"
  },
 
  {
    name: "Karlie Erickson",
    avatar: "images/KarlieErickson.png",
    stars: 5,
    date: "10-08-2025",
    text: "I have been using Tidy Fox for almost 2 years. It started with me hiring them for a one time clean. But I was so impressed afterwards with how great my place looked and felt. I have had Tidy Fox out once a month ever since. The staff are all friendly, efficient and thorough while cleaning my home.<br><br>This last cleaning I added on some of the additional services to do on-top of the regular checklist. And I’m so happy I did because the inside of my fridge looked clean enough to be brand new inside. Highly Recommend"
  },

  {
    name: "Peter Dunne",
    avatar: "images/PeterDunne.png",
    stars: 5,
    date: "10-30-2025",
    text: "I am a senior and three years ago suffered minor agility issues so was finding it hard to keep up to date with my cleaning and minor household chores. I needed help and Tidy Fox came to the rescue.<br><br>Being happy with the service provided, I continued with them after my recuperation period.<br><br>They are easy to deal with, polite, friendly staff that do a good job. and at a price that should fit to most peoples budget, especially as you can vary what is done to make it fit your needs.<br><br>I can recommend their services.<br><br>Now I am moving away I will be fortunate to find a service anywhere near as good. I thank them for the excellent service provided over the years."
  },

  {
    name: "Jonathon McIntyre",
    avatar: "images/JonathonMcIntyre.png",
    stars: 5,
    date: "05-17-2026",
    text: "We have been very happy with the Tidy Fox team. From the office staff to the cleaners, each interaction has been pleasant and professional. The cleaning itself has been what we would expect from a professional service. Tidy Fox has relieved extra burden for my mom and my wife."
  },

  {
    name: "Nrdyck",
    avatar: "images/NRDyck.png",
    stars: 5,
    date: "11-14-2025",
    text: "We always come home to a beautiful clean house and our dogs love them. Highly recommend."
  },

  {
    name: "Dan Jack",
    avatar: "images/DanJack.png",
    stars: 5,
    date: "06-01-2026",
    text: "Tidy Fox does a great job every time. They're always communicative, and the few times I've come home during the clean, they've been so friendly. Claire and Kindra are amazing cleaners. They work fast, but are thorough with great attention to detail. We've been using Tidy Fox for about 6 months now and I'd recommend them to anyone."
  },

  {
    name: "Roger Andres",
    avatar: "images/RogerAndres.png",
    stars: 5,
    date: "05-28-2026",
    text: "I had a unique residential cleaning need and time was of the essence. I had tried calling other companies and no one could fit us in Short notice. Tidy Fox Cleaning Service made it happen and they came when they said and did a great job! The day was saved!"
  },

  {
    name: "Christian Odonnell",
    avatar: "images/ChristianOdonnell.png",
    stars: 5,
    date: "06-29-2026",
    text: "Had Claire and Kindra over at our place to clean and they were fantastic.  There was clear communication about what was a priority and what could wait till later.  The place looks fantastic now and also quite organized.  The biggest thing was they were able to get the general dust and grime that builds up over time.  All in all they were great and I would recommend them to anyone."
  },

  {
    name: "Joshua Webb",
    avatar: "images/JoshuaWebb.png",
    stars: 5,
    date: "06-10-2026",
    text: "We’ve used Tidy Fox twice now, and they have absolutely knocked it out of the park both times. There is nothing better than coming home after a long day to a house that looks spotless and smells incredibly fresh and clean. Their attention to detail is fantastic, and the consistency is impressive. We will definitely be continuing to use their services—highly recommend the Tidy Fox team!"
  },

  {
    name: "Kourtney Hemeon",
    avatar: "images/KourtneyHemeon.png",
    stars: 5,
    date: "04-18-2026",
    text: "Claire and Kindra were amazing for our first clean today! As a nurse I have little to no time to clean on days off, and have been stressed with how many chores were piling up. It’s such a relief to have a clean and organized home again! There were lots of things I didn’t even think of that they took care of, and it’s very appreciated to have such lovely people doing the work! I highly recommend Tidy Fox for home cleaning services :)"
  },

  {
    name: "Michelle Potter",
    avatar: "images/MichellePotter.png",
    stars: 5,
    date: "03-28-2026",
    text: "I am in the process of moving and needed help cleaning a few things before I left. Tidy Fox cleaning arrived on time, knew exactly what needed to be done and got to work immediately.  They were both kind, efficient, and did an amazing job!  I would without a doubt recommend Tidy Fox cleaning services to help with your cleaning needs.  Thank you"
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
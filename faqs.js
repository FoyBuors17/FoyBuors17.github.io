const faqs = [
  {
    section: "general",
    question: "What cleaning services do you offer?",
    answer: "We offer comprehensive residential cleaning services including regular house cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleanup. Our standard service covers all rooms including kitchens, bathrooms, bedrooms, and common areas with detailed attention to every surface."
  },
  {
    section: "general",
    question: "What areas do you serve?",
    answer: "We proudly serve the Fraser Valley area including Abbotsford, Chilliwack, Mission, Langley, Surrey, and surrounding communities. If you're unsure whether we service your area, please contact us and we'll be happy to confirm."
  },
  {
    section: "general",
    question: "Are you licensed and insured?",
    answer: "Yes, Tidy Fox Cleaning Services is fully licensed and insured. All our team members are background-checked and covered by comprehensive liability insurance for your peace of mind."
  },
  {
    section: "general",
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes, we bring all necessary cleaning supplies and equipment. We use eco-friendly, non-toxic products that are safe for your family and pets. If you have specific product preferences or allergies, please let us know and we'll accommodate your needs."
  },
  {
    section: "services",
    question: "What's included in your regular cleaning service?",
    answer: "Our regular cleaning service includes dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms (toilets, sinks, showers/tubs, mirrors), kitchen cleaning (appliances, countertops, sink), making beds, emptying trash, and general tidying. See our detailed checklist for a complete breakdown."
  },
  {
    section: "services",
    question: "What's the difference between regular and deep cleaning?",
    answer: "Regular cleaning maintains your home's cleanliness with standard tasks. Deep cleaning is more thorough and includes cleaning inside appliances, baseboards, light fixtures, ceiling fans, inside cabinets, and other detailed tasks that aren't part of regular maintenance."
  },
  {
    section: "services",
    question: "Do you offer move-in/move-out cleaning?",
    answer: "Yes! Our move-in/move-out cleaning service is perfect for transitioning between homes. This comprehensive service includes cleaning inside all cabinets, appliances, closets, and every surface to ensure the property is spotless for new occupants."
  },
  {
    section: "services",
    question: "Can you clean while I'm not home?",
    answer: "Absolutely! Many of our clients provide us with access to their homes so we can clean while they're at work or away. We're fully insured and bonded, and our team is trained to respect your home and belongings."
  },
  {
    section: "billing",
    question: "How do you determine pricing?",
    answer: "Our pricing is based on the size of your home, the type of cleaning service requested, and the frequency of service. We offer competitive rates with discounts for regular recurring services. Contact us for a free, no-obligation quote."
  },
  {
    section: "billing",
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, and all major credit cards. For recurring services, we can set up automatic billing for your convenience. Payment is due upon completion of service."
  },
  {
    section: "billing",
    question: "Do you offer discounts for regular service?",
    answer: "Yes! We offer discounts for clients who book weekly, bi-weekly, or monthly recurring services. The more frequently you book, the more you save. Contact us to learn about our current promotional offers."
  },
  {
    section: "billing",
    question: "What if I need to cancel or reschedule?",
    answer: "We understand that plans change. Please give us at least 24 hours notice to cancel or reschedule your appointment to avoid any fees. You can easily reschedule through our online booking system or by calling our office."
  },
  {
    section: "booking",
    question: "How far in advance do I need to book?",
    answer: "We recommend booking at least 48-72 hours in advance, especially during busy seasons. However, we often have same-day or next-day availability, so don't hesitate to contact us for last-minute cleaning needs."
  },
  {
    section: "booking",
    question: "Can I book online?",
    answer: "Yes! Our convenient online booking system allows you to schedule your cleaning service 24/7, select your preferred date and time, and even specify special requests. You can also manage your recurring appointments online."
  },
  {
    section: "booking",
    question: "How long will the cleaning take?",
    answer: "Cleaning time depends on the size of your home and the service type. A typical 3-bedroom home takes 2-3 hours for regular cleaning and 4-6 hours for deep cleaning. We'll provide an estimated timeframe when you book."
  },
  {
    section: "booking",
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority! If you're not completely happy with our service, please contact us within 24 hours and we'll return to address any concerns at no additional charge. We stand behind our work 100%."
  }
];

// Section names for the table of contents
const sectionNames = {
  general: "General",
  services: "Services", 
  billing: "Billing",
  booking: "Office Request"
};

let currentOpenFAQ = null;

// Function to create the table of contents
function createTableOfContents() {
  const tocContainer = document.getElementById('faq-toc');
  const sections = Object.keys(sectionNames);
  
  tocContainer.innerHTML = sections.map(section => `
    <li class="faq-toc-item" data-section="${section}">
      <a href="#faq-${section}">${sectionNames[section]}</a>
    </li>
  `).join('');
}

// Function to render FAQ sections
function renderFAQs() {
  const faqContainer = document.getElementById('faq-content');
  const sections = Object.keys(sectionNames);
  
  faqContainer.innerHTML = sections.map(section => {
    const sectionFAQs = faqs.filter(faq => faq.section === section);
    
    return `
      <div class="faq-section" id="faq-${section}">
        <h2 class="faq-section-title">${sectionNames[section]}</h2>
        <div class="faq-items">
          ${sectionFAQs.map((faq, index) => `
            <div class="faq-item" data-section="${section}" data-index="${index}">
              <div class="faq-question" onclick="toggleFAQ('${section}', ${index})">
                <span class="faq-question-text">${faq.question}</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Function to toggle FAQ answers
function toggleFAQ(section, index) {
  const faqItem = document.querySelector(`[data-section="${section}"][data-index="${index}"]`);
  const answer = faqItem.querySelector('.faq-answer');
  const toggle = faqItem.querySelector('.faq-toggle');
  
  // Close currently open FAQ if different from clicked one
  if (currentOpenFAQ && currentOpenFAQ !== faqItem) {
    const currentAnswer = currentOpenFAQ.querySelector('.faq-answer');
    const currentToggle = currentOpenFAQ.querySelector('.faq-toggle');
    currentAnswer.classList.remove('active');
    currentToggle.textContent = '+';
    currentOpenFAQ.classList.remove('active');
  }
  
  // Toggle clicked FAQ
  if (answer.classList.contains('active')) {
    answer.classList.remove('active');
    toggle.textContent = '+';
    faqItem.classList.remove('active');
    currentOpenFAQ = null;
  } else {
    answer.classList.add('active');
    toggle.textContent = '−';
    faqItem.classList.add('active');
    currentOpenFAQ = faqItem;
  }
}

// No highlighting functionality - just simple navigation

// Function to scroll to section with header offset
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.navbar').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight - 20; // 20px extra padding
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// Initialize FAQ system
document.addEventListener('DOMContentLoaded', function() {
  createTableOfContents();
  renderFAQs();
  
  // Add click event listeners to table of contents - simple navigation only
  document.querySelectorAll('.faq-toc-item a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      scrollToSection(sectionId);
    });
  });
}); 
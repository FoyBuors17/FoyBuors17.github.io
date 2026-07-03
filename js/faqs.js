const faqs = [
  // General
  {
    section: "general",
    question: "Can I book online?",
    answer: "Absolutely! Our online booking system is available 24/7, allowing you to receive an instant quote, choose the cleaning service that's right for you, select your preferred date and time, and securely book your appointment in just a few minutes.<br><br>You can also customize your cleaning, add extras, set up recurring service, and manage your appointments online whenever it's convenient for you.<br><br>If you have questions or would rather speak with someone first, we're always happy to help by phone at <a href='tel:778-345-4369'>778-345-4369</a> or by email at <a href='mailto:tidyfox@hotmail.com'>tidyfox@hotmail.com</a>."
  },
  {
    section: "general",
    question: "Can I choose my appointment time?",
    answer: "Yes! When booking online, you'll be able to choose from our available appointment times. Each appointment has a 1-hour arrival window, so if you book 8:00–9:00 AM, your cleaning team will arrive anytime between 8:00 AM and 9:00 AM.<br><br>Please note that this is your arrival window, not the length of your cleaning. The amount of time our team spends in your home will depend on the cleaning service you select and the size and needs of your home.<br><br>While we make every effort to arrive within your scheduled window, unexpected traffic or a previous appointment requiring additional attention may occasionally cause a slight delay. If we're running more than 30 minutes behind schedule, we'll contact you as soon as possible with an updated arrival time."
  },
  {
    section: "general",
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes! Our cleaning teams arrive fully equipped with professional-grade cleaning products, equipment, and microfiber cloths, so you don't have to provide a thing.<br><br>Our everyday cleaning products include environmentally responsible probiotic cleaners that are safe for your family, pets, and the environment while providing excellent cleaning results. When a home requires extra attention, we also have professional-strength specialty products available to safely tackle tougher grease, soap scum, hard water deposits, and other stubborn buildup.<br><br>If you have a specific product you'd like us to use due to allergies, sensitivities, or personal preference, we're happy to accommodate whenever possible. Simply let us know during the booking process or when our team arrives."
  },
  /*{
    section: "general",
    question: "Do we need to have everything out of the house for a Move In/Move Out clean?",
    answer: "The short answer is Yes. We will clean everything in the house but we will need to have access to the house to do so. We will not be able to clean the inside of the fridge, oven, dishwasher, laundry machines, windows, blinds, walls, or inside cabinets and closets if the house is not empty.<br><br>If you are not able to have everything out of the house, we can work around it as long as certain parts of the house are empty and ready to be cleaned. We would need the house to be emptied as we are cleaning so that when we are done one area we can move on to the next."
  },*/
  {
    section: "general",
    question: "Do you use Environmentally Safe CleaningProducts?",
    answer: "Yes! Our everyday cleaning products include environmentally responsible probiotic cleaners that are safe for your family, pets, and the environment. These innovative products continue working for days after your cleaning by using beneficial bacteria to naturally break down dirt and organic matter, helping keep surfaces cleaner for longer.<br><br>We primarily use Biom Probiotic Cleaning Products by Choice Probiotics, imported from Belgium, as our all-purpose cleaning solution. They provide an effective alternative to harsh chemicals while delivering excellent everyday cleaning results.<br><br>For tougher jobs, such as heavy grease, stubborn soap scum, or hard water buildup, our cleaning teams also carry professional-strength specialty products to safely restore surfaces when needed. We always strive to use the gentlest product that will achieve the best results."
  },
  {
    section: "general",
    question: "How far in advance should i book?",
    answer: "We recommend booking as early as possible to secure your preferred date and time, especially for recurring cleanings, move-in/move-out cleans, and busy times of the year.<br><br>That said, our online booking system displays our live availability, so you can often book a cleaning with as little as 24 hours' notice. If you're looking for a last-minute appointment, check our online calendar or give us a call—we'll always do our best to fit you in whenever possible.<br><br>If you don't see a time that works for you, please contact us at <a href='tel:778-345-4369'>778-345-4369</a> or <a href='mailto:tidyfox@hotmail.com'>tidyfox@hotmail.com</a>. We may be able to accommodate your request or add you to our cancellation list."
  },
  {
    section: "general",
    question: "Are you pet friendly?",
    answer: "Yes! We love pets and understand they're an important part of the family. Our cleaning teams are comfortable working around friendly dogs, cats, and other household pets, and we're always happy to give them a little attention while we're in your home.<br><br>We use pet-safe everyday cleaning products and take care to ensure your home is cleaned safely and responsibly. If your pet has any special needs, is nervous around new people, or there are any instructions you'd like us to follow, simply let us know before your appointment and we'll be happy to accommodate whenever possible."
  },
  {
    section: "general",
    question: "Do I have to sign a contract?",
    answer: "No. We believe our clients should stay with us because they love our service—not because they're locked into a contract.<br><br>Whether you book a one-time cleaning or recurring service, you're free to cancel or make changes at any time. We simply ask for at least 24 hours' notice if you need to cancel or reschedule an appointment.<br><br>Our goal is to earn your trust with every visit, and we're confident that once you experience the Tidy Fox difference, you'll want us back again."
  },
  {
    section: "general",
    question: "I'm nervous/embarassed. I don't want someone to see my home.",
    answer: "Absolutely—and you're not alone. Many first-time clients tell us they feel embarrassed or worried about having someone see their home. Please don't be. Our team is here to help, not to judge.<br><br>As professional cleaners, we've seen homes in every condition imaginable. Whether you've been busy with work, raising a family, dealing with health challenges, or simply haven't had the time to keep up, our only goal is to make your life a little easier.<br><br>We take pride in creating a comfortable, judgment-free experience from the moment we arrive. Most clients tell us that any nervousness disappears within the first few minutes, and they wish they had called us sooner."
  },
  {
    section: "general",
    question: "How many cleaners will come?",
    answer: "We typically send a team of <strong>2 professional cleaners</strong> to every appointment. Working as a team allows us to complete your cleaning more efficiently while maintaining the high-quality standards Tidy Fox is known for.<br><br>For larger homes, Move-In/Move-Out Cleans, or larger Premium Custom Cleans, we may send additional team members to complete the work in a single visit. More cleaners doesn't mean you're paying more—it simply allows us to complete the same amount of work in less time.<br><br>For example, if you book 2 cleaners for 3 hours (6 labour hours), we may occasionally send 3 cleaners for 2 hours instead. The total amount of cleaning time remains the same, but your home is finished sooner so you can get back to enjoying your day."
  },
  {
    section: "general",
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority! If you're not completely happy with our service, please contact us within 24 hours and we'll return to address any concerns at no additional charge. We stand behind our work 100%."
  },
  {
    section: "general",
    question: "Is there anything the cleaners won't do?",
    answer: "For the safety of our team and the protection of your home, there are a few things we aren't able to do.<br><br><strong>Heavy Lifting</strong> - For safety reasons, we do not move furniture or appliances weighing more than approximately 20 lbs. If you would like these areas cleaned, we're happy to do so if the items have been moved before we arrive.<br><br><strong>Working at Heights</strong> - Our cleaners use step stools only. We are unable to clean areas that require larger ladders, including high exterior windows, vaulted ceilings, or hard-to-reach light fixtures.<br><br><strong>Outdoor Areas</strong> - Our services are limited to the interior of your home. We do not clean patios, decks, exterior windows, garages (unless booked as an add-on), or outdoor living spaces.<br><br><strong>Biohazards & Pet Waste</strong> - For health and safety reasons, we do not clean blood, bodily fluids, pet accidents, litter boxes, or other biohazardous materials.<br><br><strong>Heavy Mold</strong> - We can clean small amounts of common bathroom mildew, but we are unable to clean areas with significant mold growth due to potential health risks.<br><br><strong>Carpet & Upholstery Cleaning</strong> - We do not provide carpet shampooing, steam cleaning, or upholstery cleaning services."
  },
  {
    section: "general",
    question: "Why choose Tidy Fox Cleaning Service?",
    answer: "At Tidy Fox Cleaning Services, we believe that hiring a cleaning company should be simple, reliable, and stress-free. From instant online quotes and easy booking to our professionally trained cleaning teams, everything we do is designed to make your life easier.<br><br>We specialize in residential cleaning and offer services tailored to your needs, including Premium Custom Cleans, Regular Cleans, Move-In/Move-Out Cleans, and Airbnb & Rental Turnovers. Whether you're looking for complete flexibility or a consistent maintenance plan, we have a service that's right for you.<br><br>With a 5-star Google rating, over 90 Google reviews, and the trust of more than 420 homeowners throughout Abbotsford, Mission, Chilliwack, Langley, and Aldergrove, we're proud to have built our reputation on quality, reliability, and exceptional customer service.<br><br>Our mission is simple: <strong>We create time for you to enjoy life.</strong>"
  },
  {
    section: "general",
    question: "Do I need to be home during the cleaning?",
    answer: "No! Many of our clients prefer to have their home cleaned while they're at work, running errands, or simply enjoying their day.<br><br>We're happy to work with whatever access method is most convenient for you, whether that's a key, door code, lockbox, concierge, or another arrangement. Your home will always be secured when we leave, and we'll follow any instructions you provide.<br><br>Our professional cleaning teams are fully insured, carefully selected, and treat every home with the same care and respect they would their own. Many of our clients love coming home to a freshly cleaned house without having to interrupt their day."
  },
  {
    section: "general",
    question: "Do I need to tidy up before the cleaners arrive?",
    answer: "Not at all! We understand that life gets busy, and we're here to make it easier—not create more work for you.<br><br>For our <strong>Regular Clean</strong>, we simply ask that everyday clutter be picked up where possible so our cleaning team can focus on the detailed cleaning included in your checklist. We allow a few minutes in each main area for light tidying, but excessive clutter may reduce the amount of time available for cleaning.<br><br>If your home needs more organizing or you'd like help with everyday tasks such as washing dishes, folding laundry, tidying rooms, or other household chores, our <strong>Premium Custom Clean</strong> is the perfect option. Since you choose the priorities for each visit, our team can spend as much or as little time on these tasks as you'd like within your booked cleaning time."
  },
  {
    section: "general",
    question: "How do I prepare for my first cleaning?",
    answer: "Preparing for your first cleaning is easy! There's no need to deep clean before we arrive—that's what we're here for. Simply ensure our team has access to your home and any areas you'd like cleaned.<br><br>If you have any special instructions or priorities, please let us know during the booking process or when our cleaning team arrives. We're always happy to tailor your cleaning to your needs whenever possible.<br><br>If you've booked a <strong>Regular Clean</strong>, we recommend picking up any excessive clutter so our team can focus on the detailed cleaning included in your checklist. If you'd like help with organizing, dishes, laundry, or other everyday household tasks, our <strong>Premium Custom Clean</strong> is the perfect choice, allowing you to decide how your cleaning time is spent."
  },
  {
    section: "general",
    question: "Do you guarantee your work?",
    answer: "Yes! We stand behind the quality of every cleaning we provide. If you feel we've missed something that's included in your booked service, simply let us know within <strong>24 hours</strong>, and we'll gladly return to make it right at no additional charge.<br><br>Our goal is to exceed your expectations on every visit. We value your feedback and use it to continually improve our service, ensuring every client receives the high-quality cleaning experience Tidy Fox is known for."
  },

  // Services
  {
    section: "services",
    question: "Which cleaning service is right for me?",
    answer: "Choosing the right cleaning service is easy! At Tidy Fox Cleaning Services, we've designed each service to fit different needs and lifestyles.<br><br><strong>Premium Custom Clean</strong> is perfect if you want complete flexibility. You choose the amount of cleaning time, and our team focuses on your priorities. Whether it's inside the fridge, folding laundry, washing dishes, or giving extra attention to specific areas, your cleaning is completely customized to you.<br><br><strong>Regular Clean</strong> is ideal for homeowners who want a consistent checklist completed every visit. It's our best value for ongoing home maintenance and includes discounted pricing for weekly, bi-weekly, and monthly recurring service.<br><br><strong>Move-In/Move-Out Clean</strong> is designed for homes that need a detailed top-to-bottom cleaning before moving in or after moving out, with additional premium add-ons available for homes that need extra attention.<br><br><strong>Airbnb & Rental Turnover Clean</strong> is tailored for short-term rental properties, helping ensure your home is guest-ready between every stay with optional laundry, restocking, and deep reset services.<br><br>If you're still unsure which service is best for your home, we're always happy to help. Give us a call at <a href='tel:778-345-4369'>778-345-4369</a>, and we'll help you choose the option that's right for you."
  },
  {
    section: "services",
    question: "What is the difference between Premium Custom Cleaning and Regular Cleaning?",
    answer: "Both services provide the same professional cleaning quality—they're simply designed for different needs.<br><br><strong>Premium Custom Clean</strong> gives you complete flexibility. You choose how much cleaning time you'd like, and our team focuses on your priorities. Every visit can be different, and everyday tasks such as dishes, laundry, organizing, or detailed cleaning like the inside of the fridge or oven can all be included within your booked time.<br><br><strong>Regular Clean</strong> follows a consistent cleaning checklist every visit, making it the perfect choice for maintaining a clean home. Because the service is standardized, we can offer discounted pricing for weekly, bi-weekly, and monthly recurring cleanings. Additional services, such as inside the fridge, oven, windows, or blinds, are available as optional add-ons.<br><br>If you want complete flexibility and control over each visit, choose our <strong>Premium Custom Clean</strong>. If you prefer a consistent maintenance cleaning with recurring discounts, our <strong>Regular Clean</strong> is the perfect fit."
  },
  {
    section: "services",
    question: "Why do so many clients choose the Premium Custom Clean?",
    answer: "Many homeowners love the <strong>Premium Custom Clean</strong> because it gives them complete control over every visit. Instead of following a fixed checklist, our cleaning team focuses on the tasks that matter most to you.<br><br>Need extra time in the kitchen one visit? Want the inside of the fridge cleaned before guests arrive? Need help with dishes, laundry, or organizing? Your priorities can change from visit to visit, and we'll tailor the cleaning to fit your needs.<br><br>It's the perfect choice for busy families, homeowners with changing priorities, or anyone who wants a truly personalized cleaning experience without worrying about separate charges for common household tasks."
  },
  {
    section: "services",
    question: "Can I change my priorities every visit with Premium Custom Cleaning?",
    answer: "Absolutely! That's one of the biggest advantages of our <strong>Premium Custom Clean</strong>. Every visit can be completely different based on your needs and priorities.<br><br>One week you may want us to focus on bathrooms and floors, while the next you may prefer extra attention on the kitchen, inside the fridge, laundry, or other household tasks. Simply let us know what's most important to you, and our cleaning team will make the most of your booked cleaning time.<br><br>Your home, your priorities, your schedule—it's cleaning designed around you."
  },
  {
    section: "services",
    question: "Can I include things like the fridge or oven in my Premium Custom Clean?",
    answer: "Yes! One of the biggest advantages of our <strong>Premium Custom Clean</strong> is that there are no separate add-on charges for common household tasks. If you'd like the inside of the fridge, oven, microwave, interior windows, laundry, dishes, or other everyday tasks completed, simply include them in your priority list.<br><br>Our cleaning team will focus on the tasks that are most important to you and make the best use of your booked cleaning time. The more time you book, the more we'll be able to accomplish.<br><br>It's all about flexibility—you decide what's important, and we'll tailor every visit to fit your needs."
  },
  {
    section: "services",
    question: "What's included in a Regular Clean?",
    answer: "Our <strong>Regular Clean</strong> is designed to keep your home consistently clean and well maintained by following the same professional checklist during every visit. Typical tasks include dusting, vacuuming, mopping, kitchen cleaning, bathroom cleaning, bed making, and general cleaning throughout your home.<br><br>When booking, you'll simply tell us the number of bedrooms, bathrooms, kitchens, and the size of your home. This allows us to provide an instant online quote while ensuring enough time is scheduled to properly clean your home.<br><br>Additional services, such as the inside of the fridge, oven, windows, blinds, and other detailed tasks, are available as optional add-ons. For a complete breakdown of everything included, please visit our <strong>Services</strong> page to view the full Regular Clean Checklist."
  },
  {
    section: "services",
    question: "Why aren't bedrooms included in the base price?",
    answer: "Our base Regular Clean includes the common living areas of your home, one bathroom, one kitchen, and homes up to 1,500 square feet. Bedrooms are priced separately because every additional bedroom increases the amount of time required to clean your home.<br><br>Whether a bedroom is used as a primary bedroom, guest room, nursery, or home office, it still requires dusting, vacuuming, bed making (if applicable), and other detailed cleaning. Pricing by the number of bedrooms allows us to provide a fair and accurate quote based on the size and cleaning needs of your home.<br><br>If there are rooms you don't need cleaned, simply leave them out of your booking. You're only paying for the areas you'd like professionally cleaned."
  },
  {
    section: "services",
    question: "Can I add extras to my Regular Clean?",
    answer: "Absolutely! Our <strong>Regular Clean</strong> can be customized with a variety of optional add-ons to suit your home's needs. Popular extras include cleaning the inside of the fridge, oven, dishwasher, laundry machines, interior windows, blinds, wall spot cleaning, and more.<br><br>Simply select the extras you'd like during the online booking process, and we'll include them in your quote and schedule enough time to complete them properly.<br><br>If you find yourself wanting different extras each visit, or you'd prefer not to pay separately for individual add-ons, our <strong>Premium Custom Clean</strong> may be the better choice. It allows you to change your priorities every visit, with common household tasks included within your booked cleaning time."
  },
  {
    section: "services",
    question: "What's included in a Move-In/Move-Out Clean?",
    answer: "Our <strong>Move-In/Move-Out Clean</strong> is a comprehensive top-to-bottom cleaning designed to prepare a home for new occupants or leave it looking its best after you've moved out.<br><br>In addition to everything included in our <strong>Regular Clean</strong>, every Move-In/Move-Out Clean also includes cleaning the inside of the refrigerator, oven, dishwasher, and laundry machines as part of the standard service.<br><br>For homes that require additional attention, we also offer premium add-ons such as heavy grease kitchen restoration, full interior windows, blind cleaning, wall washing, baseboard and trim detailing, garage sweep and clean, and post-renovation cleaning.<br><br>For a complete breakdown of everything that's included, please visit our <strong>Services</strong> page to view the full Move-In/Move-Out Cleaning Checklist."
  },
  {
    section: "services",
    question: "Do I need to empty the home before a Move-Out Clean?",
    answer: "Yes. For the best possible results, we recommend that the home be completely empty before your Move-In/Move-Out Clean begins. This allows our cleaning team full access to floors, baseboards, closets, cabinets, and other areas that would otherwise be blocked by furniture or personal belongings.<br><br>If a few items remain in the home, we'll certainly clean around them whenever possible. However, we cannot guarantee the same level of detail in areas that are inaccessible.<br><br>If you're unsure whether your home is ready for cleaning, please contact us before your appointment. We're always happy to answer your questions and help you schedule your cleaning at the right time."
  },
  {
    section: "services",
    question: "What premium add-ons are available for Move-Out Cleans?",
    answer: "Our <strong>Move-In/Move-Out Clean</strong> is already a comprehensive top-to-bottom cleaning, but some homes require additional restoration or detailing beyond our standard service.<br><br>Optional premium services include <strong>Heavy Grease Kitchen Restoration, Full Interior Window Package, Full Blind Deep Clean, Full Wall Wash, Baseboard & Trim Detail Package, Garage Sweep & Clean,</strong> and <strong>Post Renovation Clean</strong>.<br><br>These services are designed for homes that need extra attention and can be added during the online booking process to customize your cleaning based on the condition of your home."
  },
  {
    section: "services",
    question: "Do you clean Airbnb and vacation rental properties?",
    answer: "Yes! We specialize in cleaning Airbnb, vacation rental, and short-term rental properties. Our <strong>Airbnb Turnover Clean</strong> is designed to get your property guest-ready between stays, helping you maintain the high standards your guests expect.<br><br>Each turnover includes cleaning and resetting the home, with optional services such as laundry, restocking of paper products, and deep reset cleaning available when needed. Whether you manage one property or multiple rentals, we'll help ensure your guests arrive to a clean, welcoming space every time."
  },
  {
    section: "services",
    question: "Can you handle guest turnovers and same-day cleans?",
    answer: "Yes! We understand that timing is critical for short-term rental properties. Whenever possible, we'll work with your guest check-out and check-in schedule to have your property cleaned, reset, and ready for your next guests.<br><br>While same-day turnovers are often possible, they are subject to our scheduling availability. We recommend booking recurring turnovers whenever possible to help ensure your preferred dates and times are reserved.<br><br>If you have a last-minute booking or an unexpected scheduling change, give us a call. We'll always do our best to accommodate your request."
  },
  {
    section: "services",
    question: "Do you offer laundry and restocking?",
    answer: "Yes! Every <strong>Airbnb & Rental Turnover</strong> includes restocking of owner-supplied guest amenities at no additional charge. This includes items such as toilet paper, paper towels, soap, coffee supplies, and other essentials that you provide.<br><br>We also offer an optional <strong>Wash & Dry Linens</strong> service for hosts who would like us to wash, dry, and prepare linens and towels between guest stays. This service can be added during the online booking process whenever it's needed."
  },
  {
    section: "services",
    question: "Can I customize my Airbnb turnover checklist?",
    answer: "Yes! Our <strong>Airbnb & Rental Turnover</strong> follows a guest-ready checklist designed for short-term rentals, but we can customize the turnover based on your property’s specific needs.<br><br>If you have special instructions, preferred staging details, supply locations, linen instructions, or specific areas you’d like checked each visit, simply let us know and we’ll do our best to follow your process.<br><br>For larger changes or extra tasks beyond the standard turnover, optional services such as <strong>Wash & Dry Linens</strong>, <strong>Interior Window Package</strong>, and <strong>Deep Reset</strong> can be added when needed."
  },
  {
    section: "services",
    question: "How long will the cleaning take?",
    answer: "The length of your cleaning depends on the size of your home, the service you've selected, and any optional services you've added. During the online booking process, we'll calculate the appropriate amount of time needed based on the details you provide.<br><br>Most appointments are completed by a team of two professional cleaners, allowing us to clean your home efficiently while maintaining the high standards Tidy Fox is known for.<br><br>We'll always schedule enough time to complete the services you've booked, so you can relax knowing your home is receiving the attention it deserves."
  },

  // Billing
  {
    section: "billing",
    question: "How do you determine pricing?",
    answer: "Our pricing is based on the cleaning service you choose and the details of your home. Depending on the service, we'll ask for information such as the number of bedrooms, bathrooms, kitchens, square footage, or the amount of cleaning time you'd like to book.<br><br>This allows us to instantly calculate a fair and accurate price while ensuring we schedule enough time for our professional cleaning team to complete the job properly.<br><br>There are no hidden fees or surprise charges. Any optional services or add-ons are clearly displayed during the online booking process, so you'll always know exactly what to expect before confirming your appointment."
  },
  {
    section: "billing",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, cash, and e-transfer.<br><br>To make payment quick and hassle-free, we require a credit card on file for all bookings. The day before your cleaning, our system places a temporary pre-authorization hold to verify the payment method. Your card is <strong>not charged</strong> until your cleaning has been completed.<br><br>If you prefer to pay by cash or e-transfer, simply let us know. Once payment has been received, we'll release the pre-authorization hold on your credit card. Most of our clients choose to pay by credit card because it's convenient—you can simply set it up once and never have to think about it again."
  },
  {
    section: "billing",
    question: "Do you offer discounts for regular service?",
    answer: "Yes! We offer discounted pricing on our <strong>Regular Clean</strong> when you schedule recurring service. Weekly, bi-weekly, and monthly cleanings all receive reduced rates, making it the most economical option for maintaining a consistently clean home.<br><br>Our <strong>Premium Custom Clean</strong> is priced the same regardless of frequency because every visit is fully customized to your priorities. Instead of paying separately for common add-ons such as inside the fridge, oven, laundry, or other household tasks, you simply choose how you'd like your booked cleaning time to be used.<br><br>If you're looking for the best value for ongoing home maintenance, our <strong>Regular Clean</strong> is an excellent choice. If you prefer complete flexibility and the freedom to change your priorities every visit, our <strong>Premium Custom Clean</strong> offers the greatest convenience."
  },
  {
    section: "billing",
    question: "What if I need to cancel or reschedule?",
    answer: "We understand that plans change! If you need to cancel or reschedule your appointment, we simply ask for at least <strong>24 hours' notice</strong> whenever possible.<br><br>You can contact our office by phone, email, or reply to any of your appointment reminders, and we'll be happy to help find a new time that works for you. If you've booked online, you can also manage your appointment through your online account.<br><br>Providing advance notice helps us offer your appointment time to another client and keeps our schedule running smoothly for everyone."
  },
  {
    section: "billing",
    question: "Why doesn't Premium Custom Cleaning receive recurring discounts?",
    answer: "Our <strong>Premium Custom Clean</strong> is designed to provide complete flexibility, allowing you to customize every visit based on your changing priorities. Unlike our Regular Clean, there are no separate charges for common household tasks such as inside the fridge, oven, laundry, interior windows, dishes, or organizing—as long as it fits within your booked cleaning time.<br><br>Because every Premium Custom Clean is unique, the time and focus of each visit can vary significantly. Our <strong>Regular Clean</strong>, on the other hand, follows a consistent checklist every visit, allowing us to accurately schedule the service and offer discounted pricing for weekly, bi-weekly, and monthly recurring cleanings.<br><br>Both services provide the same high-quality professional cleaning—the difference is whether you value complete flexibility or a consistent maintenance plan with recurring discounts."
  },
  {
    section: "billing",
    question: "When is my credit card charged?",
    answer: "We place a temporary pre-authorization hold on your credit card the day before your scheduled cleaning to verify your payment method. Your card is <strong>not charged</strong> at that time.<br><br>Once your cleaning has been completed, we'll review the appointment, make any necessary adjustments, and then process the final payment. This ensures you're only charged for the services you actually receive.<br><br>If you choose to pay by cash or e-transfer instead, simply let us know. Once payment has been received, we'll release the pre-authorization hold on your credit card."
  },
  {
    section: "billing",
    question: "Will I receive an instant quote before booking?",
    answer: "Yes! Our online booking system provides an instant, no-obligation quote before you confirm your appointment. Simply choose the cleaning service that's right for you, answer a few questions about your home, and your price will be calculated automatically.<br><br>There are no hidden fees or surprises. Any optional services you select are added to your quote in real time, so you'll always know the total cost before completing your booking.<br><br>If you have any questions or your cleaning needs are unique, we're always happy to help. Just give us a call, and we'll be happy to assist."
  },

  // Office requests
  {
    section: "other services",
    question: "Do you clean offices or commercial buildings?",
    answer: "Yes, we do provide commercial cleaning services for select clients. However, our primary focus is residential cleaning, including homes, condos, townhomes, move-in/move-out cleanings, and Airbnb & rental turnovers.<br><br>By specializing in residential cleaning, we're able to provide a higher level of consistency, attention to detail, and customer service for homeowners throughout the Fraser Valley.<br><br>If you're looking for commercial cleaning services, we'd be happy to discuss your needs and let you know if your property is a good fit for our team."
  },
];

// Section names for the table of contents
const sectionNames = {
  general: "General",
  services: "Services", 
  billing: "Billing",
  "other services": "Other Services"
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

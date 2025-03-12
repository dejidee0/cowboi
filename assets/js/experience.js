AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "WEB3 PRODUCT MANAGEMENT TUTOR",
    cardImage: "assets/images/experience-page/enovolab.png",
    place: "ENOVERLAB ",
    time: "(JAN, 2025 - present)",
    desp: "<ol> <li>Develop and deliver curriculum for aspiring product managers on the fundamentals of Web3 product management, covering topics such as blockchain technology, decentralized applications, tokenomics, and Web3 user experience.</li> <li>Mentor and guide students through practical exercises, case studies, and projects, helping them develop essential skills in user research, product strategy, and agile development within the Web3 context.</li> <li>Share industry best practices and insights on navigating the evolving landscape of Web3 product development, drawing on expertise in DeFi, NFTs, and DAOs.</li> <li>Contribute to the growth and development of Enoverlab’s Web3 product management program, the largest PM school in Africa.</li> </ol>",
  },

  {
    title: "HEAD OF PRODUCT",
    cardImage: "assets/images/subcribo.jpg",
    place: "SUBSCRIBO",
    time: "(Jan 2024 - Sept 2024)",
    desp: "<ol> <li>Led product strategy and development for a one-stop-shop subscription bill payment platform utilizing Web3 payment methods.</li> <li>Oversaw the product lifecycle from ideation to launch, gaining valuable experience in navigating the challenges of a startup environment.</li> <li>Defined the product vision, strategy, and roadmap, aligning the product with the emerging Web3 payment landscape.</li> <li>Authored comprehensive Product Requirements Documents (PRDs), translating business objectives into clear technical specifications.</li> <li>Monitored key performance indicators (KPIs) to assess product performance and identify areas for improvement.</li>  </ol>",
  },

  {
    title: "OUTREACH MANAGER - AFRICA",
    cardImage: "assets/images/experience-page/ledger.png",
    place: "Ledger.com",
    time: "(Aug 2023 - Present)",
    desp: "<ol> <li>Led market analysis and user research to identify key opportunities for product adoption and growth in the African market, resulting in a 35% increase in user acquisition.</li> <li>Gathered and analyzed user feedback and market data to inform product development and localization strategies for the African market.</li> <li>Engaged and recruited ambassadors from identified crypto communities.</li> <li>Assisted with retailers, influencers, affiliates, NFT, crypto, and non-crypto partners.</li> <li>Provided insights to the International Development team and fostered internal comprehension of the African market.</li></ol>",
  },
  {
    title: "AFRICA BUSINESS DEVELOPMENT MANAGER P2P - OTC",
    cardImage: "assets/images/project-page/bitget.png",
    place: "Bitget Exchange",
    time: "(Nov 2022 - July 2023)",
    desp: "<ol> <li>Identified and launched P2P markets in Ghana, Uganda, Kenya, South Africa, and Liberia, resulting in a 25% increase in the P2P user base within the first three months.</li> <li>Conceptualized and executed community-building initiatives, including offline events, increasing active users by 3000 in one month.</li> <li>Expanded Bitget P2P’s reach by opening six new markets.</li> <li>Increased Bitget’s P2P daily volume by an average of 100,000 USDT through strategic market penetration and user engagement efforts.</li> <li>Sourced and onboarded P2P and OTC merchants across the African market.</li> </ol>",
  },

  {
    title: "AFRICAN MANAGER (BUSINESS DEVELOPMENT)",
    cardImage: "assets/images/project-page/newscrypto.jpg",
    place: "NewsCrypto.io (NWC)",
    time: "(Feb 2021 - Sept 2022)",
    desp: "<ol> <li>Managed and grew the online community, fostering engagement and gathering user feedback to inform product development and marketing strategies.</li> <li>Researched emerging trends and recommended new company offerings to satisfy customers’ needs.</li> <li>Analyzed user needs and market trends to identify opportunities for product improvement and expansion, leading to increased users.</li> <li>Organized physical and virtual meetups across Africa.</li> <li>Ideated and executed various community campaigns.</li> <li>Identified and engaged with influencers and ambassadors.</li> <li>Organized and managed a 30-day reality TV show.</li> </ol>",
  },
  {
    title: "AFRICAN REP",
    cardImage: "assets/images/project-page/nmkr.png",
    place: "NMKR.IO",
    time: "(June 2022 - Adhoc)",
    desp: "<ol> <li>Developed business strategies for the African market.</li> <li>Served as the face and brand owner of NMKR in Africa.</li> <li>Delivered a keynote speech at the Africa Football Business Summit in Nairobi, focusing on Blockchain solutions for players, clubs, and leagues using NMKR tools.</li> </ol>",
  },

  {
    title: "COMMUNITY MANAGER / BUSINESS DEVELOPMENT",
    cardImage: "assets/images/experience-page/dxsale.png",
    place: "DxSale.Network ($SALE)",
    time: "(Oct 2021 - June 2022)",
    desp: "<ol> <li>Managed Telegram community chat and responded to comments and developers' questions.</li> <li>Assisted new token launches with challenges before and during the process.</li> <li>Conducted AMAs with new project founders before launching.</li> <li>Involved in new listings and activities related to $SALE Token.</li> <li>Drove business development and brand awareness initiatives.</li> </ol>",
  },
  // {
  //   title: "HEAD OF BUSINESS DEVELOPMENT - AFRICA",
  //   cardImage: "assets/images/experience-page/tuktuk.jpg",
  //   place: "TUkTUk",
  //   time: "(Nov 2022 - July 2023)",
  //   desp: "<ol> <li>Drove product research initiatives to understand future impacts on product offerings and production.</li> <li>Endorsed demand creation strategies and new product service offerings to improve revenue streams and meet market demands.</li> <li>Established business development strategies to ensure alignment with overall organizational strategy.</li> <li>Formalized new business agreements with identified partners, suppliers, and vendors.</li> <li>Formulated targets and KPIs aligned with business development strategies.</li> <li>Conducted research reports on potential revenue streams and business threats.</li> </ol>",
  // },
  {
    title: "AFRICAN MANAGER - HEAD OF MARKETING",
    cardImage: "assets/images/experience-page/paratica.jpg",
    place: "Paratica",
    time: "(Feb 2019 - Oct 2020)",
    desp: "<ol> <li>Analyzed consumer behavior and determined customer personas.</li> <li>Identified opportunities to reach new market segments and expand market share.</li> <li>Developed strategies for Digital, Advertising, Communications, and Creative marketing teams.</li> <li>Prepared and managed monthly, quarterly, and annual marketing budgets.</li> <li>Set, monitored, and reported on team goals.</li> <li>Designed branding, positioning, and pricing strategies.</li> <li>Ensured a strong and consistent brand message across all marketing channels and efforts, including events, email campaigns, web pages, and promotional materials.</li> </ol>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "IBOM BLOCKCHAIN SUBMIT",
    subtitle: "IBS2024",
    image: "assets/images/experience-page/cboi.jpg",
    desp: "A quick throwback to Ibom Blockchain Summit where I talked about Blockchain been the future of secured payment. Blockchain stands as a game-changer in digital payments and financial services, offering enhanced security, transparency, and efficiency. While its potential benefits are clear, challenges such as scalability and regulatory frameworks must be addressed for widespread adoption",
    href: "https://www.linkedin.com/posts/cowboigp_ibs2024-activity-7175835632361979905-Yofi/",
  },
  {
    title: "LEDGER",
    subtitle: "BITCOIN EVENT",
    image: "assets/images/experience-page/newcb.jpg",
    desp: "The Blockchain Africa conference Bitcoin Events  was an amazing experience representing Ledger ! The conference was fantastic with great opportunities to connect with industry leaders, influencers, and like-minded professionals.",
    href: "https://www.linkedin.com/posts/cowboigp_the-blockchain-africa-conference-bitcoin-activity-7266743349645099008-mkRJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyXHBgBuM2FWApin3kDg0yN9F_B2sKvr2U",
  },
  {
    title: "CONVEXITY",
    subtitle: "MASTER CLASS WITH CONVEXITY",
    image: "assets/images/experience-page/CBM.jpg",
    desp: "i was received at the Convexity hub and i was gracious to render a quick Masterclass to the team.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7104915360583208960/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyXHBgBuM2FWApin3kDg0yN9F_B2sKvr2U",
  },
  {
    title: "SIBAN EXECUTIVE",
    subtitle: "DIGITAL ASSET SUBMIT 2023 BY SIBAN",
    image: "assets/images/experience-page/cbe.jpg",
    desp: " I moderated a Fireside Chat with SiBAN Executives at the Digital Asset Summit in Abuja, Nigeria.In this engaging Fireside Chat, we delved into a critical aspect of the blockchain and cryptocurrency industry—self-regulation. The growth of this industry was not only about innovation and technology; it also hinged on establishing trust, transparency, and accountability.",
    href: "https://www.linkedin.com/posts/cowboigp_today-i-would-be-moderating-a-fireside-chat-activity-7105429599878078464-spcv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyXHBgBuM2FWApin3kDg0yN9F_B2sKvr2U",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
         
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

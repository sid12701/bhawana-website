
import { StaticImageData } from "next/image";
export type HeroSlide = {
    id: string
    title: string
    description: string
    ctas?: { label: string; href: string; variant?: "default" | "outline" }[]
  }
  
  export const hero = {
    slides: [
      {
        id: "s1",
        title: "Fast, Transparent, Reliable Loans",
        description: "Personalized finance solutions tailored to your needs.",
        ctas: [{ label: "Explore Personal Loans", href: "/personal-loan" }],
      },
      {
        id: "s2",
        title: "Salary Advance Made Simple",
        description: "Get quick access to your salary when you need it most.",
        ctas: [{ label: "Learn More", href: "/salary-advance" }],
      },
      {
        id: "s3",
        title: "Customer-First Policies",
        description: "We operate with fairness and transparency. Read our codes and policies.",
        ctas: [{ label: "View Policies", href: "/#" }],
      },
    ] as HeroSlide[],
  }
  
  export const about = {
    paragraphs: [
      "Bhawana Capital Private Limited is a Registered NBFC dedicated to delivering fair, transparent, and responsible lending solutions.",
      "We comply with all RBI regulations and maintain strict governance standards to safeguard customer interests.",
    ],
  }
  
  export type ProductCard = {
    name: string
    href: string
  }
  
  export const products: ProductCard[] = [
    { name: "Personal Loan", href: "/personal-loan" },
    { name: "Salary Advance", href: "/salary-advance" },
  ]
  
  export type Director = {
    id: string
    name: string
    role: string
    shortBio: string
    fullBio: string
    image: string
  }
  
  export const directors: Director[] = [
    {
      id: "d1",
      name: "Kornel Kabele",
      role: "Director",
      shortBio: "Finance veteran with 20+ years of experience.",
      fullBio: "Kornel Kabele is the Chief Technology Officer (CTO) of an international fintech company providing digital financial services. He joined the Group in 2017 as Head of Java Development and has been leading its Software Engineering and QA since 2018. Mr. Kabele has over 17 years of experience in the banking industry, with extensive expertise in software development and project management.Prior to his current role, Mr. Kabele worked at First Data Corporation from 2007 to 2017 in a variety of positions, including leading the Euro conversion program, the Project Management Office, Software Development Life Cycle, and Business Intelligence. From 2005 to 2007, he was a Project Manager at Slovenska Sporitelna, a member of the Erste Bank Group. His earlier career included co-founding a web-application development company and various software development roles in Australia and Slovakia. Directly and indirectly, as of 31 December 2024, Kornel Kabele held 58,631 shares and options in the Group.",
      image: "/images/kornel-kabele.jpg"
    },
    {
      id: "d2",
      name: "Manoj Aggarwal",
      role: "Director",
      shortBio: "Seasoned leader in lending and compliance.",
      fullBio: "Mr. Aggarwal is qualified Chartered Accountant and founder of iAcuire Consulting LLP, a boutique investment bank. Graduated in Commerce from HansRaj College, Delhi University has more than 29 years of extensive experience of working with IT & ITES, Fintech & new technology and internet-based industries.As a veteran Deal Maker, Mr. Aggarwal successful closed many large deals in targeted sectors. He has successfully advised a number of clients on fundraising deals and led buy and sell side M&A representations. He is working with some of the largest fintech companies in India to help them acquire strategic assets.",
      image:"/images/Manoj_Aggarwal.jpg"
    },
    {
      id: "d3",
      name: "Antti Kumpulainen",
      role: "Director and Chairman of the board",
      shortBio: "Director and Chairman of the board",
      fullBio: "With nearly 25 years in European banking and fintech, Antti Kumpulainen has risen from senior risk-management posts in Helsinki to become CEO of a leading pan-European financial-services group. He combines analytical rigour with a passion for digitalisation and automation, consistently steering organisations toward profitable growth.Previously the chief executive of a regulated digital bank and, earlier, Country Manager, Commercial Leader and Chief Risk Officer, Antti has hands-on expertise in expanding businesses across multiple markets. Personally invested in the company’s future, he held 116,949 shares and options as of 31 December 2024, underscoring his commitment to long-term value creation.",
      image:"/images/Antti-Kumpulainen.jpg"
    }
  ]

  
  
  export type BlogPost = {
    id: string
    title: string
    excerpt: string
    href: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "b1",
      title: "Why Taking a Personal Loan Is Beneficial",
      excerpt:
        "Personal loans can be a helpful option for salaried individuals when unavoidable, unpredictable expenses arise. They are typically unsecured—no collateral required—and offered by many banks and financial institutions, making them accessible for planned or urgent needs.",
      href: "/why-taking-a-personal-loan-is-beneficial",
    },
    {
      id: "b2",
      title: "How do I unite my daily work and small side business?",
      excerpt:
        "An additional income stream can boost monthly flexibility, help you build new skills, and improve personal routines. The challenge is balance—without clear boundaries, one job can bleed into the other and increase burnout risk.",
      href: "/how-to-unite-daily-work-and-side-business",
    },
    {
      id: "b3",
      title: "What are the early indicators that my financial situation is worsening?",
      excerpt:
        "We all manage money differently, but comfort isn’t always the best strategy. Watching for telltale warning signs—and acting early—can improve both financial health and overall well-being.",
      href: "/early-indicators-that-my-financial-situation-is-worsening",
    },
  ]
    
  export const legal = {
    grievancePdf: "/grievance-redressal-policy",
    fpcPdf: "/fair-practice-code",
    termsHref: "/terms-conditions",
    email: "info@bhawanafinance.com",
    phone: "+91-124-6687879",
    cin: "U65100DL1995PTC071089",
    rbiRegNo: " B-14.02856.",
    registeredOffice: "Registered Office: Unit No. 111, Aggarwal City Square, Plot No. 10, District Centre Manglam Place, Sector-3, Rohini, New Delhi-110085, Delhi, Delhi, India - 110085",
    corporateOffice: "Corporate Office: The Executive Centre Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India",
  }
  
  export const navigation = {
    main: [
      { label: "Home", href: "/" },
      {
        label: "Our Loan Products",
        href: "#",
        children: [
          { label: "Personal Loan", href: "/personal-loan" },
          { label: "Salary Advance", href: "/salary-advance" },
        ],
      },
      {
        label: "Policies & Codes",
        href: "#",
        children: [
          { label: "Fair Practice Code", href: "/fair-practice-code" },
          { label: "Grievance Redressal", href: "/grievance-redressal-policy" },
          { label: "Terms & Conditions", href: "/terms-conditions" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Interest Rate Policy", href: "/interest-rate-policy" },
          { label: "KYC and AML Policy", href: "/kyc-aml-policy" },
          { label: "Return Policy", href: "/return-policy" },
          { label: "Shipping Policy", href: "/shipping-policy" },
          { label: "Refund/Cancellation Policy", href: "/refund-cancellation-policy" },
        ],
      },
      { label: "DSA and LSP", href: "#",
        children:[
          {label: "Loanfront", href:"/loanfront"},
          {label: "Karmalife", href:"/karmalife"},
          {label: "Terminated Vendors", href:"/terminated-vendors"}
        ]
       },
      { label: "Blog", href: "/blog",},
      { label: "Contact", href: "#contact" },
    ],
  }
  

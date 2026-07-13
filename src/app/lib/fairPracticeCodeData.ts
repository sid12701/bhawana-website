export type FairPracticeCodeSection = {
  id: string
  title: string
  icon: "fileText" | "shield" | "users" | "scale" | "checkCircle"
  content?: string[]
  intro?: string
  list?: string[]
  commitments?: {
    main: string
    sub?: string[]
  }[]
  nestedListLead?: string
  nestedList?: string[]
  note?: string
}

export type FairPracticeCodeDocument = {
  code: "en" | "hi"
  label: string
  summary: string
  description: string
  languageTag: string
  downloadHref?: string
  downloadLabel?: string
  sections: FairPracticeCodeSection[]
}

export const fairPracticeCodeDocuments: FairPracticeCodeDocument[] = [
  {
    code: "en",
    label: "English",
    summary: "Current website version",
    description:
      "The Board-approved Fair Practice Code in English covering transparency, ethical lending, and customer protection.",
    languageTag: "en",
    downloadHref: "/policies/fair-practice-code.pdf",
    downloadLabel: "Download Fair Practice Code (PDF)",
    sections: [
      {
        id: "1",
        title: "1. INTRODUCTION",
        icon: "fileText",
        content: [
          "Bhawana Capital Private Limited (formerly Bhawana Securities and Financial Services Limited) (“the Company”) is a Non-Deposit Taking Non-Banking Finance Company registered with Reserve Bank of India (“RBI”). The Company is presently in the business of providing short term loans and advances.",
          "The Company has put in place the Fair Practices Code (“FPC” or “Code”) in conformity with the Guidelines on Fair Practices Code for NBFCs as contained in the Master Direction – Reserve Bank of India (Non-Banking Financial Company – Scale Based Regulation) Directions, 2023, as amended, from time to time, and has been duly approved by the Board of Directors. The FPC sets out the principles for fair practices, transparency & adequate disclosures while dealing with its customers.",
          "The commitments outlined in this FPC adopted by the Company are applicable under normal operating environment; however, under situations beyond the control of the Company, it may not be possible for us to fulfil the commitments made thereunder.",
          "This FPC applies to the all categories of product and services offered by the Company.",
        ],
      },
      {
        id: "2",
        title: "2. OBJECTIVE OF CODE",
        icon: "shield",
        intro: "The objectives of this FPC are following:",
        list: [
          "To promote good practices and ensure good practices in dealing with customers;",
          "To promote a fair relationship between the customer and Company;",
          "To ensure compliance with legal norms in matters relating to recovery of advances;",
          "To strengthen mechanisms for redressal of customer grievances;",
        ],
      },
      {
        id: "3",
        title: "3. KEY COMMITMENTS",
        icon: "users",
        intro: "The Company's key commitments to customers:",
        commitments: [
          {
            main: "Act fairly and reasonably in all their dealings with customers by:",
            sub: [
              "Meeting the commitments and standards specified in the Code, for the products and services which the Company offers and in the procedures and practices its staff follows;",
              "Making sure that Company's products and services meet relevant laws and regulations applicable to it;",
              "Company's dealings with customers will rest on ethical principles of integrity and transparency",
            ],
          },
          {
            main: "Help customers understand how company's product work by explaining their financial implications.",
          },
          {
            main: "Deal quickly and sympathetically with things that go wrong by:",
            sub: [
              "Correcting mistakes swiftly;",
              "Handling customer's complaints at top most priority;",
              "Providing guidance to customers on how to escalate their complaint further if they remain unsatisfied with the resolution.",
            ],
          },
          {
            main: "Publicize the Code, put it on Company's website and have copies available for customer on request.",
          },
        ],
      },
      {
        id: "4",
        title: "4. APPLICATIONS FOR LOAN & THEIR PROCESSING",
        icon: "fileText",
        list: [
          "The Company offers, various financial products including instant personal loans through a 100% digital process.",
          "The Company shall convey all communications to the borrower in the in the English language. The company may also provide the borrower an option to choose a language as understood by the borrower. The borrower may intimate the company about its preferred language at the time of the loan application.",
          "Loan application forms of the Company shall shall provide all necessary information to the borrowers required in relation to the services offered by the company so that the borrower can make a meaningful comparison with the terms and conditions offered by other NBFCs and can make an informed decision.",
          "The loan application form shall indicate the documents required to be submitted / uploaded with the application form.",
          "The Company shall give an acknowledgment of receipt for all loan applications digitally, with no discrimination based on caste, creed, or religion. The Company shall endeavor to provide the timeframe within which loan applications shall be processed.",
          "Loan application complete in all respects shall be processed within a reasonable time frame. In case the proposal is not approved by the Company, the borrower is intimated accordingly about the rejection of the loan.",
        ],
      },
      {
        id: "5",
        title: "5. LOAN APPRAISAL AND TERMS & CONDITIONS",
        icon: "scale",
        list: [
          "The Company will ensure that there is proper assessment of loan application made by borrowers. The assessment would be in line with Company’s credit policies and procedures.",
          "The Company shall convey in writing to the borrower in the English language or a language as understood by the borrower, the amount of loan sanctioned along with the terms and conditions including annualised rate of interest, Annual Percentage Rate and method of application thereof and keeps the acceptance of these terms and conditions by the borrower on its record.",
          "The Company shall mention the penal charges for late repayment in the loan agreement. The Company shall make available information related to interest rates and other charges (late payment or otherwise) on the website also.",
          "The Company’s digital platform and risk assessment model requires digital acceptance of all terms and conditions of the loan. It includes Digital signing or Aadhar based OTP authentication (if applicable) or Clickwrap or clickthrough acceptance on loan agreement &/or terms & conditions.",
          "The terms and conditions of the respective financial product of the Company shall be applicable for all borrowers without discrimination.",
        ],
      },
      {
        id: "6",
        title: "6. DISBURSEMENT OF LOANS INCLUDING CHANGES IN TERMS AND CONDITIONS",
        icon: "checkCircle",
        list: [
          "The Company gives notice in the English language or a language as understood by the borrower of any change in the terms and conditions including the disbursement schedule, interest rates, service charges, prepayment charges, etc. The changes shall only be made if the loan agreement executed between the company and the borrower permits such changes. Further, the said changes shall be effective only prospectively.",
          "Decision to recall / accelerate payment or performance under the agreement should be in consonance with the loan agreement.",
          "The borrower shall enter into an agreement with the Company by providing consent via click wrap / Digital signature / Electronic signature etc, to all standard and specific terms and conditions before seeking disbursement.",
          "The Company shall release all securities on repayment of all dues or on realization of the outstanding amount of the loan subject to any legitimate right or lien for any other claim they may have against the borrower. If such right of set-off is to be exercised, the borrower shall be given notice about the same with full particulars about the remaining claims and the conditions under which the Company is entitled to retain the securities until the relevant claim is settled/paid",
        ],
      },
      {
        id: "7",
        title: "7. GENERAL",
        icon: "users",
        list: [
          "The Company will refrain from interference in the affairs of the borrower except for the purposes provided in the terms and conditions of the loan agreement or as consented by customer on the terms and conditions as part of onboarding & disbursement process on mobile applications (unless new information, not earlier disclosed by the borrower, has come to the notice of the Company).",
          "In case of receipt of request from the borrower for transfer of borrowal account, the consent or otherwise i.e. objection of the Company, if any, will be conveyed within 21 days from the date of receipt of request. Such transfer shall be as per transparent contractual terms in consonance with law.",
          "In the matter of loan recovery, the company shall not resort to undue harassment, such as persistently bothering the borrowers at odd hours or using muscle power for loan recovery, etc. The company shall ensure that its employees/staff are adequately trained to deal with customers in an appropriate manner.",
          "The Company shall charge interest rate, processing fees or other charges in accordance with the Company’s loan policy only.",
          "There shall be no discrimination in extending loans and other financial product to the physically / visually challenged applicants on ground of disability subject to the eligibility criteria as per Company’s credit policy.",
        ],
      },
      {
        id: "8",
        title: "8. GRIEVANCE REDRESSAL MECHANISM",
        icon: "shield",
        list: [
          "The Company shall lay down the appropriate Grievance Redressal Mechanism within the organization. Such a mechanism should ensure that all disputes arising out of the decisions of Company’s institutions' functionaries are heard and disposed off at least at the next higher level.",
          "The Board of Directors should also provide for periodical review of the compliance of the Fair Practices Code and the functioning of the Grievances Redressal Mechanism at various levels of management. A consolidated report of such reviews may be submitted to the Board at regular intervals, as may be prescribed by it.",
          "The Company shall also guide customer who wish to lodge a complaint and also provide guidance on what to do in case the Customer is unhappy with the outcome.",
        ],
        nestedListLead: "The following information / public notice shall be displayed prominently and also on website, for the benefit of the customers, at all branches/ places of the Company, where business is transacted:",
        nestedList: [
          "the name and contact details (Telephone / Mobile nos. as also email address) of the Grievance Redressal Officer and Nodal Officer, who can be approached for resolution of complaints against the Company.",
          "if the complaint / dispute is not redressed within a period of 30 days, or the customer is not satisfied with the resolution, the customer may lodge a complaint with the RBI Ombudsman under the Reserve Bank – Integrated Ombudsman Scheme, 2021, through the RBI Complaint Management System (CMS) portal at https://cms.rbi.org.in, the toll-free number 14448, or the Centralised Receipt and Processing Centre, Reserve Bank of India, Chandigarh.",
        ],
        note: "The public notice will serve the purpose of highlighting to the customers, the Grievance Redressal Mechanism followed by the Company, together with details of the Grievance Redressal Officer and Nodal Officer and of the RBI Ombudsman under the Reserve Bank – Integrated Ombudsman Scheme, 2021.",
      },
      {
        id: "9",
        title: "9. INTEREST RATE MODEL AND OTHER CHARGES",
        icon: "scale",
        list: [
          "Interest rate model and other charges shall be adopted taking into account relevant factors such as cost of equity, cost of borrowed funds, margin, credit risk, opex cost, industry trend, risk associates with the approval of the Board.",
          "The rate of interest and the approach for gradation of risk and rationale for different rate of interest to different categories of borrowers shall be disclosed to the borrower or customer in the application and/or website and communicated explicitly in the loan sanction letter / communication.",
          "The Company would intimate the rate of interest to be charged from the borrower at the time of application/sanctioning of the loan.",
          "The Company shall make available information related to interest rates and other charges (including late payment or otherwise) and the approach of risk on its website also.",
          "The rate of interest should be annualised rate so as to make borrower aware of the exact rates that would be charged to the account.",
          "The Company would ensure that it will not unduly charge excessive interest rates to its borrowers. The interest rate for its customers/borrowers would be arrived at taking into account broad parameters such as the risk profile of the customers/borrowers, interest rate trends prevailing in the money market, cost of borrowings, primary and collateral security offered by customers/borrowers, structure of the deal, interest rate charged by competitors, and the historical credit track record of the customers/borrowers",
        ],
      },
      {
        id: "10",
        title: "10. REVIEW",
        icon: "fileText",
        content: [
          "The Board of Director reserves the right to review the Fair Practice Code from time to time and to carry out necessary changes, accordingly as and when required.",
          "The Company will abide by all guidelines, directive, instructions and advices of Reserve Bank of India as will be in force from time to time. The content in this document shall be read in conjunction with these guidelines, directives, instructions and advices. The Company will apply better practice so long as such practice does not conflict with or violate Reserve Bank of India regulations.",
        ],
      },
    ],
  },
  {
    code: "hi",
    label: "Hindi",
    summary: "Uploaded Hindi version",
    description:
      "Hindi version of the Fair Practice Code provided in the attached document and available here for on-page reading.",
    languageTag: "hi",
    downloadHref: "/policies/fair-practice-code-hindi.pdf",
    downloadLabel: "Download Fair Practice Code (Hindi PDF)",
    sections: [
      {
        id: "1",
        title: "1. परिचय",
        icon: "fileText",
        content: [
          "भवाना कैपिटल प्राइवेट लिमिटेड (पूर्व में भवाना सिक्योरिटीज़ एंड फाइनेंशियल सर्विसेज़ लिमिटेड) (“कंपनी”) भारतीय रिज़र्व बैंक (“RBI”) के साथ पंजीकृत एक गैर-जमा स्वीकार करने वाली गैर-बैंकिंग वित्तीय कंपनी है। कंपनी वर्तमान में अल्पावधि ऋण एवं अग्रिम प्रदान करने के व्यवसाय में संलग्न है।",
          "कंपनी ने RBI की मास्टर डायरेक्शन – Reserve Bank of India (Non-Banking Financial Company – Scale Based Regulation) Directions, 2023 तथा उसमें समय-समय पर किए गए संशोधनों के अनुरूप यह निष्पक्ष आचरण संहिता (“संहिता”) तैयार की है, जिसे निदेशक मंडल द्वारा विधिवत अनुमोदित किया गया है। यह संहिता ग्राहकों के साथ व्यवहार में निष्पक्षता, पारदर्शिता एवं आवश्यक प्रकटीकरण सुनिश्चित करती है।",
          "इस संहिता में उल्लिखित प्रतिबद्धताएं सामान्य परिस्थितियों में लागू होंगी। हालांकि, कंपनी के नियंत्रण से बाहर की परिस्थितियों में सभी प्रतिबद्धताओं का पालन करना संभव न भी हो सके। यह संहिता कंपनी द्वारा प्रदान किए जाने वाले सभी उत्पादों एवं सेवाओं पर लागू होती है।",
        ],
      },
      {
        id: "2",
        title: "2. संहिता का उद्देश्य",
        icon: "shield",
        list: [
          "ग्राहकों से व्यवहार में उचित और नैतिक प्रथाओं को बढ़ावा देना।",
          "ग्राहक एवं कंपनी के बीच निष्पक्ष संबंध स्थापित करना।",
          "ऋण वसूली से संबंधित कानूनी प्रावधानों का अनुपालन सुनिश्चित करना।",
          "ग्राहक शिकायत निवारण तंत्र को मजबूत करना।",
        ],
      },
      {
        id: "3",
        title: "3. प्रमुख प्रतिबद्धताएं",
        icon: "users",
        list: [
          "ग्राहकों के साथ सभी व्यवहार में निष्पक्षता और पारदर्शिता।",
          "कंपनी के उत्पादों और सेवाओं को स्पष्ट रूप से समझाना और उनके वित्तीय प्रभावों को बताना।",
          "शिकायतों का शीघ्र एवं संवेदनशील निवारण।",
          "संहिता को सार्वजनिक रूप से उपलब्ध कराना और वेबसाइट पर प्रदर्शित करना।",
        ],
      },
      {
        id: "4",
        title: "4. ऋण आवेदन एवं प्रसंस्करण",
        icon: "fileText",
        list: [
          "कंपनी 100% डिजिटल प्रक्रिया के माध्यम से तत्काल व्यक्तिगत ऋण सहित विभिन्न वित्तीय उत्पाद उपलब्ध कराती है।",
          "सभी संचार सामान्यतः अंग्रेज़ी भाषा में किए जाएंगे; तथापि, ग्राहक अपनी सुविधा अनुसार किसी अन्य भाषा का विकल्प चुन सकते हैं।",
          "ऋण आवेदन प्रपत्र में उत्पादों और सेवाओं से संबंधित सभी आवश्यक जानकारी उपलब्ध होगी, ताकि ग्राहक तुलना कर सकें और सूचित निर्णय ले सकें।",
          "आवेदन प्रपत्र में जमा किए जाने वाले दस्तावेजों की सूची भी दी जाएगी।",
          "कंपनी सभी आवेदन डिजिटल रूप से स्वीकार करेगी और उनके प्रसंस्करण के अपेक्षित समय की जानकारी प्रदान करेगी।",
          "यदि किसी कारणवश आवेदन अस्वीकृत होता है, तो ग्राहक को इसकी सूचना प्रदान की जाएगी।",
        ],
      },
      {
        id: "5",
        title: "5. ऋण मूल्यांकन एवं शर्तें",
        icon: "scale",
        list: [
          "कंपनी ऋण आवेदनों का मूल्यांकन अपनी आंतरिक क्रेडिट नीतियों एवं प्रक्रियाओं के अनुसार करेगी।",
          "स्वीकृत ऋण राशि, शर्तें, वार्षिक ब्याज दर, वार्षिक प्रतिशत दर (APR) एवं अन्य शुल्कों की जानकारी ग्राहक को लिखित रूप में (स्वीकृति पत्र/मेल के माध्यम से), अंग्रेज़ी अथवा ग्राहक द्वारा समझी जाने वाली भाषा में प्रदान की जाएगी, तथा ग्राहक की स्वीकृति कंपनी के अभिलेखों में सुरक्षित रखी जाएगी।",
          "विलंब से भुगतान पर लागू दंडात्मक शुल्क (penal charges) ऋण समझौते, प्रमुख तथ्य विवरण (KFS) एवं अन्य संबंधित दस्तावेजों में स्पष्ट रूप से अंकित किए जाएंगे। कंपनी अपनी वेबसाइट पर भी ब्याज दरों एवं अन्य शुल्कों का विवरण उपलब्ध कराएगी।",
          "सभी शर्तों की डिजिटल स्वीकृति आवश्यक होगी – जैसे डिजिटल हस्ताक्षर, आधार आधारित OTP प्रमाणीकरण, क्लिक-रैप अथवा क्लिक-थ्रू स्वीकृति।",
        ],
      },
      {
        id: "6",
        title: "6. ऋण वितरण एवं शर्तों में परिवर्तन",
        icon: "checkCircle",
        list: [
          "किसी भी परिवर्तन – जैसे ब्याज दर, सेवा शुल्क, पुनर्भुगतान अनुसूची अथवा पूर्व-भुगतान शुल्क – की सूचना ग्राहक को दी जाएगी। ऐसे परिवर्तन केवल तभी किए जाएंगे जब ऋण समझौता इसकी अनुमति देता हो, और वे केवल भविष्य के लिए (prospectively) प्रभावी होंगे।",
          "ऋण की वापसी अथवा त्वरित पुनर्भुगतान की मांग ऋण समझौते के अनुरूप ही की जाएगी।",
          "सभी बकाया राशि के भुगतान पर कंपनी ग्राहक की सभी प्रतिभूतियां मुक्त कर देगी, बशर्ते कंपनी के पास कोई वैध ग्रहणाधिकार (lien) या दावा शेष न हो। ऐसी स्थिति में ग्राहक को शेष दावों का पूर्ण विवरण सहित सूचना दी जाएगी।",
        ],
      },
      {
        id: "7",
        title: "7. सामान्य प्रावधान",
        icon: "users",
        list: [
          "कंपनी ऋण समझौते की शर्तों में निर्दिष्ट उद्देश्यों के अतिरिक्त ग्राहक के मामलों में हस्तक्षेप नहीं करेगी।",
          "ऋण खाते के हस्तांतरण संबंधी अनुरोध प्राप्त होने पर कंपनी अपनी सहमति अथवा आपत्ति 21 दिनों के भीतर सूचित करेगी।",
          "वसूली के दौरान कंपनी अनुचित उत्पीड़न, असामयिक समय पर संपर्क अथवा बल-प्रयोग का सहारा नहीं लेगी। कर्मचारियों एवं वसूली एजेंटों को ग्राहकों के साथ उचित व्यवहार हेतु प्रशिक्षित किया जाएगा।",
          "शारीरिक अथवा दृष्टिबाधित आवेदकों के साथ, पात्रता मानदंडों के अधीन, कोई भेदभाव नहीं किया जाएगा।",
        ],
      },
      {
        id: "8",
        title: "8. शिकायत निवारण तंत्र",
        icon: "shield",
        list: [
          "कंपनी संगठन के भीतर एक सुव्यवस्थित शिकायत निवारण प्रणाली संचालित करेगी, जिससे यह सुनिश्चित हो कि सभी विवादों की सुनवाई कम से कम अगले उच्च स्तर पर हो।",
          "निदेशक मंडल समय-समय पर इस संहिता के अनुपालन एवं शिकायत निवारण तंत्र की कार्यप्रणाली की समीक्षा करेगा।",
          "शिकायत निवारण अधिकारी एवं नोडल अधिकारी का नाम, दूरभाष/मोबाइल नंबर एवं ई-मेल पता कंपनी के कार्यालयों तथा वेबसाइट पर प्रमुखता से प्रदर्शित किया जाएगा।",
          "यदि शिकायत का निवारण 30 दिनों के भीतर नहीं होता है, अथवा ग्राहक प्राप्त समाधान से संतुष्ट नहीं है, तो ग्राहक भारतीय रिज़र्व बैंक – एकीकृत लोकपाल योजना (RB-IOS), 2021 के अंतर्गत RBI लोकपाल के समक्ष शिकायत दर्ज कर सकता है। शिकायत निम्न माध्यमों से दर्ज की जा सकती है: RBI शिकायत प्रबंधन प्रणाली (CMS) पोर्टल – https://cms.rbi.org.in; टोल-फ्री नंबर – 14448; अथवा केंद्रीकृत प्राप्ति एवं प्रसंस्करण केंद्र, भारतीय रिज़र्व बैंक, चंडीगढ़ – 160017।",
        ],
      },
      {
        id: "9",
        title: "9. ब्याज दर मॉडल एवं अन्य शुल्क",
        icon: "scale",
        list: [
          "ब्याज दर एवं अन्य शुल्क निधियों की लागत, मार्जिन, क्रेडिट जोखिम, परिचालन लागत, उद्योग की प्रवृत्ति एवं संबंधित जोखिमों जैसे प्रासंगिक कारकों को ध्यान में रखते हुए, निदेशक मंडल के अनुमोदन से निर्धारित किए जाएंगे।",
          "ब्याज दर, जोखिम-श्रेणीकरण (gradation of risk) का दृष्टिकोण तथा विभिन्न श्रेणियों के ग्राहकों से भिन्न ब्याज दर लेने का औचित्य ग्राहक को आवेदन के समय एवं स्वीकृति पत्र में स्पष्ट रूप से बताया जाएगा तथा वेबसाइट पर उपलब्ध कराया जाएगा।",
          "ब्याज दर वार्षिक आधार पर (annualised) व्यक्त की जाएगी, ताकि ग्राहक को लागू वास्तविक दर की स्पष्ट जानकारी हो।",
          "कंपनी अनुचित रूप से अत्यधिक ब्याज दर अथवा शुल्क नहीं लगाएगी।",
        ],
      },
      {
        id: "10",
        title: "10. समीक्षा",
        icon: "fileText",
        content: [
          "निदेशक मंडल समय-समय पर इस संहिता की समीक्षा करने तथा आवश्यक संशोधन करने का अधिकार सुरक्षित रखता है। कंपनी भारतीय रिज़र्व बैंक द्वारा समय-समय पर जारी सभी दिशा-निर्देशों, निर्देशों एवं परामर्शों का पालन करेगी। किसी भी असंगति की स्थिति में RBI का नियामक ढांचा प्रभावी होगा।",
        ],
      },
    ],
  },
]

export function getFairPracticeCodeDocument(code: "en" | "hi") {
  return fairPracticeCodeDocuments.find((document) => document.code === code)
}

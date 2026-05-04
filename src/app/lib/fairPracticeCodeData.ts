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
    sections: [
      {
        id: "1",
        title: "1. Introduction (Fair Practice Code)",
        icon: "fileText",
        content: [
          'Bhawana Capital Private Limited (formerly Bhawana Securities and Financial Services Limited) ("the Company") is a Non-Deposit Taking Non-Banking Finance Company registered with Reserve Bank of India ("RBI"). The Company is presently in the business of providing short term loans and advances.',
          'The Company has put in place the Fair Practices Code ("FPC" or "Code") in conformity with the Guidelines on Fair Practices Code for NBFCs as contained in Chapter V of Master Direction - Non-Banking Financial Company - Non-Systemically Important Non-Deposit Taking Company (Reserve Bank) Directions, 2016 and has been duly approved by the Board of Directors. The FPC sets out the principles for fair practices, transparency and adequate disclosures while dealing with its customers.',
          "The commitments outlined in this FPC adopted by the Company are applicable under normal operating environment; however, under situations beyond the control of the Company, it may not be possible for us to fulfil the commitments made thereunder.",
          "This FPC applies to all categories of products and services offered by the Company.",
        ],
      },
      {
        id: "2",
        title: "2. Objective of Code",
        icon: "shield",
        intro: "The objectives of this FPC are as follows:",
        list: [
          "To promote good practices in dealing with customers.",
          "To promote a fair relationship between the customer and the Company.",
          "To ensure compliance with legal norms in matters relating to recovery of advances.",
          "To strengthen mechanisms for redressal of customer grievances.",
        ],
      },
      {
        id: "3",
        title: "3. Key Commitments",
        icon: "users",
        intro: "The Company's key commitments to customers are:",
        commitments: [
          {
            main: "Act fairly and reasonably in all dealings with customers by:",
            sub: [
              "Meeting the commitments and standards specified in the Code for the products and services the Company offers and in the procedures and practices its staff follows.",
              "Making sure that the Company's products and services meet relevant laws and regulations applicable to it.",
              "Ensuring the Company's dealings with customers rest on ethical principles of integrity and transparency.",
            ],
          },
          {
            main: "Help customers understand how the Company's products work by explaining their financial implications.",
          },
          {
            main: "Deal quickly and sympathetically with things that go wrong by:",
            sub: [
              "Correcting mistakes.",
              "Handling customer complaints.",
              "Telling customers how to take their complaint forward if they are still not satisfied.",
            ],
          },
          {
            main: "Publicize the Code, place it on the Company's website, and make copies available to customers on request.",
          },
        ],
      },
      {
        id: "4",
        title: "4. Applications for Loan and Their Processing",
        icon: "fileText",
        list: [
          "The Company offers various financial products, including instant personal loans through a 100% digital process.",
          "The Company shall convey all communications to the borrower in the English language. The Company may also provide the borrower an option to choose a language as understood by the borrower. The borrower may intimate the Company about the preferred language at the time of the loan application.",
          "Loan application forms of the Company shall provide all necessary information to borrowers in relation to the services offered by the Company so that the borrower can make a meaningful comparison with the terms and conditions offered by other NBFCs and can make an informed decision.",
          "The loan application form shall indicate the documents required to be submitted or uploaded with the application form.",
          "The Company shall give an acknowledgment of receipt for all loan applications digitally, with no discrimination based on caste, creed, or religion. The Company shall endeavor to provide the timeframe within which loan applications shall be processed.",
          "Loan applications complete in all respects shall be processed within a reasonable time frame. In case the proposal is not approved by the Company, the borrower is intimated accordingly about the rejection of the loan.",
        ],
      },
      {
        id: "5",
        title: "5. Loan Appraisal and Terms and Conditions",
        icon: "scale",
        list: [
          "The Company will ensure that there is proper assessment of loan applications made by borrowers. The assessment would be in line with the Company's credit policies and procedures.",
          "The Company shall convey in writing to the borrower in the vernacular language or a language as understood by the borrower, by means of sanction letter and or sanction mail or otherwise, the amount of loan sanctioned along with the terms and conditions including annualized rate of interest and method of application thereof, and keep the acceptance of these terms and conditions by the borrower on its record.",
          'The Company shall mention the penal interest charged for late repayment in bold in any of the documents, namely loan agreement, transaction documents, sanction letter and or mail communication sent for this purpose, mobile application, and charges section on the Company and products websites. The Company shall make available information related to interest rates and other charges on the website also.',
          "The Company's digital platform and risk assessment model requires digital acceptance of all terms and conditions of the loan. It includes digital signing or Aadhaar-based OTP authentication, if applicable, or clickwrap or clickthrough acceptance on the loan agreement and or terms and conditions.",
          "The terms and conditions of the respective financial products of the Company shall be applicable for all borrowers without discrimination.",
        ],
      },
      {
        id: "6",
        title: "6. Disbursement of Loans Including Changes in Terms and Conditions",
        icon: "checkCircle",
        list: [
          "The Company gives notice in the English language or a language as understood by the borrower of any change in the terms and conditions including the disbursement schedule, interest rates, service charges, prepayment charges, and similar matters. The changes shall only be made if the loan agreement executed between the Company and the borrower permits such changes. Further, the said changes shall be effective only prospectively.",
          "Decision to recall or accelerate payment or performance under the agreement should be in consonance with the loan agreement.",
          "The borrower shall enter into an agreement with the Company by providing consent via click wrap, digital signature, electronic signature, and similar modes to all standard and specific terms and conditions before seeking disbursement.",
          "The Company shall release all securities on repayment of all dues or on realization of the outstanding amount of the loan subject to any legitimate right or lien for any other claim the Company may have against the borrower. If such right of set-off is to be exercised, the borrower shall be given notice about the same with full particulars about the remaining claims and the conditions under which the Company is entitled to retain the securities until the relevant claim is settled or paid.",
        ],
      },
      {
        id: "7",
        title: "7. General",
        icon: "users",
        list: [
          "The Company will refrain from interference in the affairs of the borrower except for the purposes provided in the terms and conditions of the loan agreement or as consented by the customer on the terms and conditions as part of the onboarding and disbursement process on mobile applications, unless new information not earlier disclosed by the borrower has come to the notice of the Company.",
          "In case of receipt of a request from the borrower for transfer of the borrowal account, the consent or otherwise, namely objection of the Company if any, will be conveyed within 21 days from the date of receipt of the request. Such transfer shall be as per transparent contractual terms in consonance with law.",
          "In the matter of recovery of loans, the Company will not resort to undue harassment such as persistently bothering borrowers at odd hours or use of muscle power for recovery of loans. To avoid rude behavior from the staff of the Company, the Company shall ensure trainings are provided on code of conduct to deal with customers in an appropriate manner.",
          "The Company shall charge interest rate, processing fees, or other charges only in accordance with the Company's loan policy.",
          "There shall be no discrimination in extending loans and other financial products to physically or visually challenged applicants on the ground of disability, subject to the eligibility criteria as per the Company's credit policy.",
        ],
      },
      {
        id: "8",
        title: "8. Grievance Redressal Mechanism",
        icon: "shield",
        list: [
          "The Company shall lay down an appropriate grievance redressal mechanism within the organization. Such a mechanism should ensure that all disputes arising out of the decisions of the Company's functionaries are heard and disposed of at least at the next higher level.",
          "The Board of Directors should also provide for periodical review of the compliance of the Fair Practices Code and the functioning of the grievance redressal mechanism at various levels of management. A consolidated report of such reviews may be submitted to the Board at regular intervals, as may be prescribed by it.",
          "The Company shall also guide customers who wish to lodge a complaint and provide guidance on what to do in case the customer is unhappy with the outcome.",
        ],
        nestedListLead:
          "The following information or public notice shall be displayed prominently and also on the website for the benefit of customers at all branches and places of business:",
        nestedList: [
          "The name and contact details, including telephone or mobile numbers and email address, of the Grievance Redressal Officer and Nodal Officer who can be approached for resolution of complaints against the Company.",
          "If the complaint or dispute is not redressed within a period of one month, the customer may appeal to the General Manager of DoS of RBI, New Delhi.",
        ],
        note:
          "The public notice will serve the purpose of highlighting to customers the grievance redressal mechanism followed by the Company, together with details of the Grievance Redressal Officer and Nodal Officer and of the DoS office of the RBI.",
      },
      {
        id: "9",
        title: "9. Interest Rate Model and Other Charges",
        icon: "scale",
        list: [
          "Interest rate model and other charges for each finance product category shall be adopted taking into account relevant factors such as cost of equity, cost of borrowed funds, margin, credit risk, operating cost, industry trend, and associated risks with the approval of the Board.",
          "The rate of interest and the approach for gradation of risk and rationale for different rate of interest to different categories of borrowers shall be disclosed to the borrower or customer in the application and or website and communicated explicitly in the loan sanction letter or communication.",
          "The Company would intimate the rate of interest to be charged from the borrower at the time of application or sanctioning of the loan.",
          "The Company shall make available information related to interest rates and other charges, including late payment or otherwise, and the approach of risk on its website also.",
          "The rate of interest should be annualized so as to make the borrower aware of the exact rates that would be charged to the account.",
          "The Company would ensure that it will not unduly charge excessive interest rates to its borrowers. The interest rate for customers or borrowers would be arrived at taking into account broad parameters such as the risk profile of customers or borrowers, interest rate trends prevailing in the money market, cost of borrowings, primary and collateral security offered by customers or borrowers, structure of the deal, interest rate charged by competitors, and the historical credit track record of customers or borrowers.",
        ],
      },
      {
        id: "10",
        title: "10. Review",
        icon: "fileText",
        content: [
          "The Board of Directors reserves the right to review the Fair Practice Code from time to time and carry out necessary changes accordingly as and when required.",
          "The Company will abide by all guidelines, directives, instructions, and advice of the Reserve Bank of India as will be in force from time to time. The content in this document shall be read in conjunction with these guidelines, directives, instructions, and advice. The Company will apply better practices so long as such practice does not conflict with or violate Reserve Bank of India regulations.",
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
    sections: [
      {
        id: "1",
        title: "1. परिचय",
        icon: "fileText",
        content: [
          'भवाना कैपिटल प्राइवेट लिमिटेड (पूर्व में भवाना सिक्योरिटीज़ एंड फाइनेंशियल सर्विसेज़ लिमिटेड) ("कंपनी") भारतीय रिज़र्व बैंक (RBI) के साथ पंजीकृत एक गैर-जमा स्वीकार करने वाली गैर-बैंकिंग वित्तीय कंपनी है। कंपनी वर्तमान में अल्पावधि ऋण एवं अग्रिम प्रदान करने के व्यवसाय में संलग्न है।',
          'कंपनी ने RBI की "मास्टर डायरेक्शन - Reserve Bank of India (Non-Banking Financial Company - Scale Based Regulation) Directions, 2023" तथा उसमें समय-समय पर किए गए संशोधनों के अनुरूप निष्पक्ष आचरण संहिता ("संहिता") तैयार की है, जिसे निदेशक मंडल द्वारा विधिवत अनुमोदित किया गया है। यह संहिता ग्राहकों के साथ व्यवहार में निष्पक्षता, पारदर्शिता एवं आवश्यक प्रकटीकरण सुनिश्चित करती है।',
          "इस संहिता में उल्लिखित प्रतिबद्धताएं सामान्य परिस्थितियों में लागू होंगी। हालांकि, कंपनी के नियंत्रण से बाहर की परिस्थितियों में सभी प्रतिबद्धताओं का पालन करना संभव न भी हो सके।",
          "यह संहिता कंपनी द्वारा प्रदान किए जाने वाले सभी उत्पादों एवं सेवाओं पर लागू होती है।",
        ],
      },
      {
        id: "2",
        title: "2. संहिता का उद्देश्य",
        icon: "shield",
        intro: "संहिता के मुख्य उद्देश्य निम्नलिखित हैं:",
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
        intro: "कंपनी ग्राहकों के प्रति निम्नलिखित प्रमुख प्रतिबद्धताएं करती है:",
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
          "ऋण आवेदन प्रपत्र में उत्पादों और सेवाओं से संबंधित सभी आवश्यक जानकारी उपलब्ध होगी ताकि ग्राहक तुलना कर सकें और सूचित निर्णय ले सकें।",
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
          "स्वीकृत ऋण राशि, शर्तें, ब्याज दर, वार्षिक प्रतिशत दर (APR) आदि की जानकारी ग्राहक को लिखित रूप में, अंग्रेज़ी या ग्राहक द्वारा चुनी गई भाषा में, प्रदान की जाएगी तथा ग्राहक की स्वीकृति कंपनी के अभिलेखों में सुरक्षित रखी जाएगी।",
          "देर से भुगतान पर लागू दंड शुल्क ऋण समझौते में स्पष्ट रूप से अंकित होंगे। कंपनी अपनी वेबसाइट पर भी ब्याज दरों एवं अन्य शुल्कों का विवरण उपलब्ध कराएगी।",
          "सभी शर्तों की डिजिटल स्वीकृति आवश्यक होगी, जैसे डिजिटल हस्ताक्षर, आधार OTP, क्लिक-रैप या क्लिक-थ्रू स्वीकृति आदि।",
        ],
      },
      {
        id: "6",
        title: "6. ऋण वितरण एवं शर्तों में परिवर्तन",
        icon: "checkCircle",
        list: [
          "किसी भी परिवर्तन, जैसे ब्याज दर, सेवा शुल्क, पुनर्भुगतान अनुसूची आदि, की सूचना ग्राहक को पूर्व में दी जाएगी और परिवर्तन केवल तब किए जाएंगे जब ऋण समझौता इसकी अनुमति देता हो।",
          "ऋण समझौते के अनुसार भुगतान में चूक होने पर ही कंपनी ऋण की वापसी या त्वरित पुनर्भुगतान की मांग कर सकती है।",
          "सभी देनदारियों के निपटान के बाद कंपनी ग्राहक की गिरवी या सुरक्षा मुक्त कर देगी, जब तक कंपनी के पास वैध लियन या दावा न हो।",
        ],
      },
      {
        id: "7",
        title: "7. सामान्य प्रावधान",
        icon: "users",
        list: [
          "कंपनी ग्राहक के मामलों में अनावश्यक हस्तक्षेप नहीं करेगी।",
          "ऋण खाते के हस्तांतरण संबंधी अनुरोधों पर 21 दिनों के भीतर निर्णय प्रदान किया जाएगा।",
          "ग्राहक से वसूली के दौरान कंपनी किसी भी प्रकार की अनुचित, अपमानजनक या जबरदस्ती वाली गतिविधि नहीं करेगी।",
        ],
      },
      {
        id: "8",
        title: "8. शिकायत निवारण तंत्र",
        icon: "shield",
        list: [
          "कंपनी एक सुव्यवस्थित शिकायत निवारण प्रणाली संचालित करेगी।",
          "निदेशक मंडल समय-समय पर संहिता और शिकायत निवारण तंत्र की समीक्षा करेगा।",
          "ग्राहकों के लिए शिकायत निवारण अधिकारी एवं नोडल अधिकारी का विवरण कंपनी की शाखाओं व वेबसाइट पर प्रदर्शित किया जाएगा।",
          "एक माह के भीतर शिकायत का निवारण न होने पर ग्राहक RBI, नई दिल्ली के DoS महाप्रबंधक से संपर्क कर सकते हैं।",
        ],
      },
      {
        id: "9",
        title: "9. ब्याज दर मॉडल एवं अन्य शुल्क",
        icon: "scale",
        list: [
          "कंपनी ब्याज दरें लागत, जोखिम, बाज़ार रुझान एवं अन्य प्रासंगिक कारकों के आधार पर निर्धारित करेगी।",
          "ब्याज दर, शुल्क एवं जोखिम-आधारित वर्गीकरण स्पष्ट रूप से ग्राहक को बताया जाएगा।",
          "ब्याज दर वार्षिक रूप में व्यक्त की जाएगी।",
          "कंपनी अत्यधिक ब्याज दरें या अनुचित शुल्क नहीं लगाएगी।",
        ],
      },
      {
        id: "10",
        title: "10. समीक्षा",
        icon: "fileText",
        content: [
          "निदेशक मंडल आवश्यकतानुसार इस संहिता की समीक्षा एवं संशोधन कर सकता है।",
          "कंपनी RBI के सभी निर्देशों एवं परामर्शों का पालन करेगी।",
        ],
      },
    ],
  },
]

export function getFairPracticeCodeDocument(code: "en" | "hi") {
  return fairPracticeCodeDocuments.find((document) => document.code === code)
}

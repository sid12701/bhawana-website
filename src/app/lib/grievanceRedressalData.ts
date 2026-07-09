export type GrievanceBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "link"; text: string; href: string }

export type GrievanceSection = {
  id: string
  title: string
  blocks: GrievanceBlock[]
}

export const grievanceRedressalSections: GrievanceSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {"type": "paragraph", "text": "Bhawana Capital Private Limited (formerly Bhawana Securities and Financial Services Limited) (the ‘Company’ or ‘Bhawana’) aims to impart good customer services and enhance level of customer satisfaction. The Company believes that the customer satisfaction is the key to business growth as well as ensuring a long-lasting relationship with the customer."},
      {"type": "paragraph", "text": "This Grievance Redressal Mechanism aims at ensuring prompt redressal of customer complaints and grievances. It also deals with the issues relating to services provided by the outsourced agency/agencies."},
      {"type": "paragraph", "text": "Bhawana’s Grievance Redressal Mechanism is formulated in line with the Reserve Bank of India’s guidelines on Fair Practices Code. Mechanism outlines the framework for addressing customer grievances."},
      {"type": "paragraph", "text": "The Grievance Redressal Mechanism follows the under noted principles:"},
      {"type": "list", "items": ["Customers shall be treated fairly at all times.", "All complaints, requests, queries received from customers are responded with courtesy and resolved in timely manner.", "Customers shall be informed of avenues to escalate their complaints/grievances within the organization and their rights to alternative remedy, if they are not fully satisfied with the response of the company to their complaints.", "All complaints to be dealt efficiently, expeditiously and fairly as otherwise they can damage our reputation and business.", "Our employees would work in good faith and without prejudice to the interest of the customers.", "To comply with regulatory requirement guidelines as required for this function."]},
      {"type": "paragraph", "text": "In relation to grievance redressal procedures, we have a dedicated e-mail IDs displayed on our website to lodge any grievance by any customer if he/she wants to do so."},
    ],
  },
  {
    id: "grounds",
    title: "Grounds for filing a complaint",
    blocks: [
      {"type": "paragraph", "text": "Customers can raise/register complaint(s) in writing, containing the nature of grievance/ deficiency, inter alia, with regard to"},
      {"type": "list", "items": ["Non-observance of directions issued by RBI to NBFCs,", "Non-adherence to any of the provisions of RBI guidelines on Fair Practices Code, issued from time to time."]},
      {"type": "paragraph", "text": "Complaint is not an enquiry, feedback or a request for data modification or inquiry about loan products/ schemes, interest rates or other requests/feedbacks which can be promptly clarified by Customer care."},
      {"type": "paragraph", "text": "Grievances received via calls shall be considered complaints only when customers make the written representation to the company as mentioned in point 3.2 below."},
      {"type": "paragraph", "text": "Anonymous / incomplete complaints will not be addressed in terms of this Grievance Redressal Mechanism."},
    ],
  },
  {
    id: "how-to-raise",
    title: "How to raise complaints?",
    blocks: [
      {"type": "subheading", "text": "3.1 Channels of raising a complaint"},
      {"type": "paragraph", "text": "The customer has a right to lodge/register his complaint if he/she is not satisfied with the services provided by the company or has a genuine ground for such complaint as indicated in para 2 above There are following four ways to lodge a complaint:"},
      {"type": "table", "headers": ["Sl. No.", "Method of lodging a complaint", "Information of contact"], "rows": [["1.", "Email", "info@bhawanafinance.com"], ["2.", "Postal (through writing letter)", "Customer Care Department Bhawana Capital Private Limited Corporate Office: Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India"], ["3.", "Complaint in Person", "Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India"], ["4.", "Call us", "0124-6687879 (Between 10:00 A.M. to 5:00 P.M. every day except National & Public Holidays)"]]},
      {"type": "subheading", "text": "3.2 Content / information in Complaints"},
      {"type": "paragraph", "text": "While raising a complaint by customer, following information must be provided by the customer/complainant in writing (e-mail etc.):"},
      {"type": "list", "items": ["Customer’s full name", "Registered mobile number of the Customer in working condition", "Loan ID allotted by the Company regarding the complaint", "Specific details of the complaint/issue & supporting documents", "Registered E-mail address"]},
    ],
  },
  {
    id: "mechanism",
    title: "Mechanism to handle customer complaints/ grievances",
    blocks: [
      {"type": "subheading", "text": "Complaint lodge / registration"},
      {"type": "paragraph", "text": "A customer can lodge a complaint through four channels as mentioned in clause 3.1 & 3.2 of this Mechanism which shall be handled as per following:"},
      {"type": "paragraph", "text": "Whenever a complaint mail is received, sender receives a response back within three working days acknowledging his/her complaint."},
      {"type": "paragraph", "text": "Further whenever any complaint is received in the form of a hardcopy i.e. through any letter etc., the same is recorded in a register and /or online tracker. In all such cases, our representative calls/contact customer at the earliest to find out the exact nature of his/her complaint"},
      {"type": "paragraph", "text": "In case customer raises Complaint in person at the corporate office of the Company, we have a complaint book which is available at the address given for registered office. A customer can obtain it from there and record his/her grievances therein."},
      {"type": "paragraph", "text": "In case of follow-up of the complaint via telephonic channel, Bhawana has exclusive help line no. where a customer can discuss his / her complaint and he/she may further escalate concern as per matrix given in Annexure- Escalation Grid."},
      {"type": "paragraph", "text": "Customer Care Department should always inform the customer about the following:"},
      {"type": "list", "items": ["Information pertaining to all issues/concerns raised by the customer;", "Explanation of final solution provided;", "Expected timelines towards closure (where immediate solution cannot be provided);", "Maintain contact at defined intervals/milestones to communicate progress on his concern and share reasons for delay/time taken", "Request for more supporting documents/information (where applicable) in a clear manner along with the reason for such requirement"]},
      {"type": "subheading", "text": "Resolution of Grievances"},
      {"type": "paragraph", "text": "Grievances related to attitudinal aspects: Such complaints should be handled courteously, sympathetically and above all swiftly. Misbehavior/ rude behavior with customers be treated at Zero tolerance level and immediate action is to be taken. The Company, under no circumstances, tolerates misbehavior of any degree by representative (payroll staff / outsourced/ Company’s third-party agency)"},
      {"type": "paragraph", "text": "Grievances relating to transactions /operations: The Company would be responsible for ensuring rectification of entry / transaction if it comes under the Company’s purview. If Company investigates & finds out that issues are due to any third party beyond Company’s control/operations, customer care executive to guide the customer & provide him/her with avenues to escalate the issue."},
    ],
  },
  {
    id: "treatment",
    title: "5. Treatment of Complaints/Grievances/Enquiries etc.",
    blocks: [
      {"type": "paragraph", "text": "All the complaints / enquiries which can be resolved immediately when raised, the response would be provided on the same call and closed."},
      {"type": "paragraph", "text": "For the complaints which must be verified and may need further investigation/support from other departments and hence cannot be resolved immediately, customer should be informed about the expected timelines for the closure. For these complaints, tickets would be raised and assigned to the concerned departments on priority for the further investigation and would try to provide resolution within 30 days only."},
      {"type": "paragraph", "text": "After due investigation, the concerned department shall immediately forward their comments to the customer care executives and thereafter Customer Care Team shall provide resolution to the customer."},
      {"type": "paragraph", "text": "The Customer Care Team shall make reasonable attempt(s) to reach the customer for providing resolution against his/her complaint."},
      {"type": "paragraph", "text": "After the resolution is provided to the customer, the concerned department updates the status of these complaints as closed in our system. These complaints reflect in closed complaints bucket which can be re-examined at any point of time as and when required."},
      {"type": "paragraph", "text": "If any complaint needs additional time beyond 30 days, the Company shall inform the customer the reasons of delay in resolution within the timelines specified above and provide expected timelines for resolution of the complaint."},
      {"type": "note", "text": "Note: The above time frame can change depending upon the nature and complexity of complaint."},
      {"type": "paragraph", "text": "In case customer has not received any reply from the Company in 30 days or customer remains dissatisfied with the redressal provided by the Company, he/she can also lodge a complaint with the RBI Ombudsman under the Reserve Bank – Integrated Ombudsman Scheme (RB-IOS), 2021, through the RBI Complaint Management System (CMS) portal at https://cms.rbi.org.in, the toll-free number 14448, or the Centralised Receipt and Processing Centre, Reserve Bank of India, Chandigarh 160017. (Refer ANNEXURE-Escalation Grid)."},
    ],
  },
  {
    id: "time-frame",
    title: "6. Time frame",
    blocks: [
      {"type": "paragraph", "text": "Complaints are to be seen in the right perspective because these indirectly lead to continuous improvement in the working of the Company. Complaints received would be analyzed from all possible angles. The Company will endeavor to send an acknowledgement within three working days of receipt."},
      {"type": "paragraph", "text": "Complaint should be resolved maximum within 30 working days from the date of receipt."},
      {"type": "paragraph", "text": "Some complaints might be complex in nature and might need additional time beyond 30 days, in such cases the Company shall inform the customer in the interim the reasons of delay in resolution within the timelines specified above and provide expected timelines for resolution of the complaint. However, every effort would be made to resolve the complaint within the time frame given."},
      {"type": "paragraph", "text": "Time matrix for dealing complaint redress process with escalation matrix for various natures of complaints has been given in Annexure-Escalation Grid. Departments/officials dealing with the customer complaints are required to strictly adhere to the same"},
    ],
  },
  {
    id: "review",
    title: "7. Review Mechanism",
    blocks: [
      {"type": "subheading", "text": "7.1 Periodical review by Complaint Committee Complaints"},
      {"type": "paragraph", "text": "Complaint Review Committee set-up by the Company, review the complaints on quarterly basis. They shall review the process and suggest changes, if any, required for making the Grievance Redressal Mechanism more effective and robust."},
      {"type": "subheading", "text": "7.2 Reporting to the Board of Directors"},
      {"type": "paragraph", "text": "A consolidated report on Grievances made by Complaint Review Committee shall be submitted with to the Board on half-yearly basis. Board shall review and take note of the same."},
      {"type": "subheading", "text": "7.3 Statutory Reporting"},
      {"type": "paragraph", "text": "All complaints are required to be reported to the concerned authorities in the prescribed format as per the applicable laws/ guidelines/ directives, including modification(s) thereof, from time to time."},
    ],
  },
  {
    id: "annexure",
    title: "ANNEXURE-Escalation Grid",
    blocks: [
      {"type": "paragraph", "text": "FIRST LEVEL"},
      {"type": "paragraph", "text": "Customer Care Department"},
      {"type": "paragraph", "text": "Bhawana Capital Private Limited"},
      {"type": "paragraph", "text": "Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India"},
      {"type": "paragraph", "text": "Phone: 0124-6687879 E-mail: info@bhawanafinance.com"},
      {"type": "paragraph", "text": "SECOND LEVEL"},
      {"type": "paragraph", "text": "Mr. Manoj Aggarwal, Grievance Redressal Officer"},
      {"type": "paragraph", "text": "Bhawana Capital Private Limited"},
      {"type": "paragraph", "text": "Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India"},
      {"type": "paragraph", "text": "Phone: 0124-6687879 E-mail: manoj@bhawanafinance.com"},
      {"type": "paragraph", "text": "THIRD LEVEL"},
      {"type": "paragraph", "text": "If the complaint is not redressed satisfactorily within 30 working days across all escalation as mentioned aforesaid, customer may directly write to Reserve Bank of India, as detailed below:"},
      {"type": "paragraph", "text": "RBI Ombudsman"},
      {"type": "paragraph", "text": "under the Reserve Bank – Integrated Ombudsman Scheme (RB-IOS), 2021"},
      {"type": "paragraph", "text": "Complaint Management System (CMS): https://cms.rbi.org.in"},
      {"type": "paragraph", "text": "Centralised Receipt and Processing Centre, Reserve Bank of India, Chandigarh 160017"},
      {"type": "paragraph", "text": "Toll-free: 14448"},
    ],
  },
  {
    id: "cms",
    title: "Complaint Management System",
    blocks: [
      {"type": "paragraph", "text": "RBI had launched its Complaint Management System (“CMS”) on June 24, 2019. It is a software application to facilitate RBI’s grievance redressal processes. Members of public can access the CMS portal at RBI’s website to lodge their complaints against any of the entities regulated by RBI."},
      {"type": "paragraph", "text": "Keeping the convenience of the customers in mind, CMS has been designed to enable on-line filing of complaints. It provides features such as acknowledgement through SMS/Email notification(s), status tracking through unique registration number, receipt of closure advises and filing of Appeals, where applicable. It also solicits voluntary feedback on the customer’s experience. CMS Portal link and Self-guide video link is given in the Annexure- Escalation Grid."},
      {"type": "paragraph", "text": "RBI CMS Portal Link:"},
      {"type": "link", "text": "https://cms.rbi.org.in/cms/IndexPage.aspx?aspxerrorpath=/cms/cms/indexpage.aspx", "href": "https://cms.rbi.org.in/cms/IndexPage.aspx?aspxerrorpath=/cms/cms/indexpage.aspx"},
      {"type": "paragraph", "text": "Self-Guide Video link:"},
      {"type": "link", "text": "https://cms.rbi.org.in/cms/VideoGallery/en-US/How_to_File_a_Complaint/index.html", "href": "https://cms.rbi.org.in/cms/VideoGallery/en-US/How_to_File_a_Complaint/index.html"},
    ],
  },
]

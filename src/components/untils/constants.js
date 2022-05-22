export const industryTypes = [
  {
    value: "Accommodation and Food Services",
    label: "Accommodation and Food Services",
  },
  {
    value: "Agriculture, Forestry, Fishing and Hunting",
    label: "Agriculture, Forestry, Fishing and Hunting",
  },
  {
    value: "Arts, Entertainment, and Recreation",
    label: "Arts, Entertainment, and Recreation",
  },
  {
    value: "Construction",
    label: "Construction",
  },
  {
    value: "Ag",
    label: "Ag",
  },
  {
    value: "Landscaping",
    label: "Landscaping",
  },
  {
    value: "Equipment Rental",
    label: "Equipment Rental",
  },
  {
    value: "Oil and Gas",
    label: "Oil and Gas",
  },
  {
    value: "Mining and Quarrying",
    label: "Mining and Quarrying",
  },
  {
    value: "Material Handling",
    label: "Material Handling",
  },
  {
    value: "Educational Services",
    label: "Educational Services",
  },
  {
    value: "Finance and Insurance",
    label: "Finance and Insurance",
  },
  {
    value: "Physician",
    label: "Physician",
  },
  {
    value: "Dentist, Orthodontist",
    label: "Dentist, Orthodontist",
  },
  {
    value: "Vet",
    label: "Vet",
  },
  {
    value: "Optometrist",
    label: "Optometrist",
  },
  {
    value: "Podiatrist",
    label: "Podiatrist",
  },
  {
    value: "Other: General",
    label: "Other: General",
  },
  {
    value: "Hospital",
    label: "Hospital",
  },
  {
    value: "Medical Laboratory",
    label: "Medical Laboratory",
  },
  {
    value: "Information",
    label: "Information",
  },
  {
    value: "Management of Companies and Enterprises",
    label: "Management of Companies and Enterprises",
  },
  {
    value: "Manufacturing",
    label: "Manufacturing",
  },
  {
    value: "Mining",
    label: "Mining",
  },
  {
    value: "Other Services (except Public Administration)",
    label: "Other Services (except Public Administration)",
  },
  {
    value: "Professional, Scientific, and Technical Services",
    label: "Professional, Scientific, and Technical Services",
  },
  {
    value: "Public Administration",
    label: "Public Administration",
  },
  {
    value: "Real Estate Rental and Leasing",
    label: "Real Estate Rental and Leasing",
  },
  {
    value: "Retail Trade",
    label: "Retail Trade",
  },
  {
    value: "Local Haul",
    label: "Local Haul",
  },
  {
    value: "Warehousing",
    label: "Warehousing",
  },
  {
    value: "Refuse Haul",
    label: "Refuse Haul",
  },
  {
    value: "Long Haul",
    label: "Long Haul",
  },
  {
    value: "Delivery",
    label: "Delivery",
  },
  {
    value: "Moving",
    label: "Moving",
  },
  {
    value: "Utilities",
    label: "Utilities",
  },
  {
    value: "Administrative and Support and Waste Management and Remediation Services",
    label: "Administrative and Support and Waste Management and Remediation Services",
  },
  {
    value: "Wholesale Trade",
    label: "Wholesale Trade",
  },
];

export const termsAndConditions =
  "By signing above and submitting this Application, each individually and as the duly authorized representative of the business-applicant (i) that all information provided in this Application is true, correct and complete, (ii) that the property leased or any credit extended by Dealer Credit Resources, Inc ('DCR') will be used solely for business and commercial purposes and (iii) that DCR is authorized to email information about financing, promotions, and other offers to the email address listed above. The business-applicant and each owner, officer or guarantor listed above further authorize DCR or its successors, assigns or one or more alternate third-party funding providers to investigate its organizational and personal credit histories, including, but not limited to, obtaining a credit report from a credit reporting agency, from time to time and for any lawful purposes. Upon the request of an individual owner, officer or guarantor, DCR will advise the individual if DCR obtained a credit report and DCR will give the individual the credit bureau’s name and address. The business applicant and each owner, officer or guarantor listed above direct any creditor or financial institution having any information relating to the business or individual to release such information to DCR in connection with this Application. Please see our Privacy Policy, which is available at https://www.dealercreditresources.com/privacy/ for a description of how DCR may use and disclose information we collect, as well as certain rights you may have with respect to your information that we collect. By signing this Application, the business-applicant and each owner, officer or guarantor listed above direct DCR to disclose or otherwise transmit any and all information and documents that DCR may obtain, including, without limitation, business or personal credit reports, this Application and (ifapplicable) any “personal information” under, and as defined in, the California Consumer Privacy Act or under similar applicable laws (howsoever personal information or data may be defined thereunder), to other persons that are involved in or participate with DCR in providing commercial funding and the services relatedthereto (including, but not limited to, one or more alternate third-party funding providers, DCR’s funding sources, and its and their third-party service providers), in each case for the purposes of facilitating funding for the business-applicant, the on-going facilitation of any funded transaction and for any other purposes set forth in the Privacy Policy. Applicant may opt out of having their credit reports reviewed in consideration for account review, at any time, by contacting DCR at Service@dcrportal.com.";

export const amountConfig = {
  type: "amount-field",
  config: {
    fieldName: "amountRequested",
    fieldLabel: "Amount Requested",
    variant: "standard",
    fullWidth: false,
    required: true,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    errorMessage: "Minimum Amount $500",
  },
  id: "23a41330-d364-4ee8-b6d3-c48f3c7ce978",
};

export const applyingSelect = {
  type: "select-field",
  config: {
    fieldName: "applyingSelect",
    fieldLabel: "What are you applying for?",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
    fieldOptions: [
      {
        optionLabel: "Both",
        optionValue: "both",
      },
      {
        optionLabel: "Credit Line",
        optionValue: "creditLine",
      },
      {
        optionLabel: "Equipment Financing",
        optionValue: "equipmentFinancing",
      }
    ],
  },
  id: "406dnf1b-9175-43b8-9907-c3a72380095e",
};

export const creditLineAmountRequested = {
  type: "amount-field",
  config: {
    fieldName: "creditLineAmountRequested",
    fieldLabel: "Credit Line",
    variant: "standard",
    fullWidth: false,
    required: true,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    dependency: true,
    errorMessage: "Minimum Amount $500",
  },
  id: "23a41330-d364-4ee8-b6d3-c48f3c7ce978",
};

export const equipmentFinancing = {
  type: "amount-field",
  config: {
    fieldName: "equipmentFinancing",
    fieldLabel: "Equipment Financing",
    variant: "standard",
    fullWidth: false,
    required: true,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    dependency: true,
    errorMessage: "Minimum Amount $500",
  },
  id: "23a41330-d364-4ee8-v6d3-c48f3c1ce978",
};

export const phoneConfig = {
  type: "phone-field",
  config: {
    fieldName: "ownerPhone",
    fieldLabel: "Phone",
    fullWidth: true,
    required: true,
    disabled: false,
    errorMessage: "Invalid phone number",
  },
  id: "e534aa45-2d21-4615-bd58-179774399e87",
};

export const emailConfig = {
  type: "email-field",
  config: {
    fieldName: "ownerEmail",
    fieldLabel: "Email",
    fullWidth: true,
    required: true,
    disabled: false,
    errorMessage: "Invalid email",
  },
  id: "c14840f3-a1db-4e88-ba56-92674a4d262b",
};

export const driversLicenseNum = {
  type: "text-field",
  config: {
    fieldName: "driversLicenseNum",
    fieldLabel: "Driver's License Number",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
  },
  id: "8cccf25f-3985-494c-9b6e-b797266a7ceb",
};

export const documentDownload = {
  type: "image-field",
  config: {
    fieldName: "image-field",
    fieldLabel: "Download file",
    required: false,
  },
  id: "d498fd92-cfe5-403f-832a-b8a729e87dca",
};

export const grossMonthlyIncome = {
  type: "amount-field",
  config: {
    fieldName: "grossMonthlyIncome",
    fieldLabel: "Gross Monthly Income",
    variant: "standard",
    fullWidth: false,
    required: false,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    errorMessage: "Minimum $500",
  },
  id: "23a41330-d664-4ee8-r6d3-c48f3c7ce978",
};

export const homePhone = {
  type: "phone-field",
  config: {
    fieldName: "homePhone",
    fieldLabel: "Phone",
    fullWidth: true,
    required: true,
    disabled: false,
    errorMessage: "Invalid phone number",
  },
  id: "55203922-5a9d-42a9-916e-f8cc12dc4b56",
};

export const cellHomePhone = {
  type: "phone-field",
  config: {
    fieldName: "cellHomePhone",
    fieldLabel: "Cell Phone Home",
    fullWidth: true,
    required: true,
    disabled: false,
    errorMessage: "Invalid phone number",
  },
  id: "552rb922-5a9d-42a9-916e-f8cc12dc4b56",
};

export const homeType = {
  type: "select-field",
  config: {
    fieldName: "homeType",
    fieldLabel: "Home Type",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
    fieldOptions: [
      {
        optionLabel: "Rent",
        optionValue: "Rent",
      },
      {
        optionLabel: "Own",
        optionValue: "Own",
      },
    ],
  },
  id: "406dbf8b-9175-43b8-9907-c3a72380095e",
};

export const timeAtAddressYears = {
  type: "text-field",
  config: {
    fieldName: "timeAtAddressYears",
    fieldLabel: "Time At Address (Years)",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
  },
  id: "8cccf25f-3941-494c-9b6e-b797266a7ceb",
};

export const timeAtAddressMonths = {
  type: "text-field",
  config: {
    fieldName: "timeAtAddressMonths",
    fieldLabel: "Time At Address (Months)",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
  },
  id: "8cccf25f-3985-474c-9b6e-b797269g7ceb",
};

export const homeEmail = {
  type: "email-field",
  config: {
    fieldName: "emailOwner",
    fieldLabel: "Email",
    fullWidth: true,
    required: true,
    disabled: false,
    errorMessage: "Invalid email",
  },
  id: "fbc476a7-e216-40fa-9176-f5b0487c2800",
};

export const ownerSelect = {
  type: "select-field",
  config: {
    fieldName: "isOwner",
    fieldLabel: " Are you  an Owner or Officer?",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
    fieldOptions: [
      {
        optionLabel: "Yes",
        optionValue: "Yes",
      },
      {
        optionLabel: "No",
        optionValue: "No",
      },
    ],
  },
  id: "1638b495-e059-479f-824d-49b6e8a9cb1c",
};

export const ssnExempt = {
  type: "radio-field",
  config: {
    variants: [
      {
        value: "Yes",
        label: "Yes",
      },
      {
        value: "No",
        label: "No",
      },
    ],
    fieldName: "ssnExempt",
    fieldLabel: "Radio Question",
    required: false,
  },
  id: "0689b42e-06d0-4e3d-92d0-546ed9611e6d",
};

export const uploadDocuments = {
  type: "image-field",
  config: {
    fieldName: "image-field",
    fieldLabel: "Download file",
    required: false,
  },
  id: "d498fd92-cfe5-603f-812a-b8a729e87dca",
};

export const documentType = {
  type: "text-field",
  config: {
    fieldName: "documentType",
    fieldLabel: "Type here your document type",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
  },
  id: "8sscf75f-3985-494c-9b6e-b797266a7ceb",
};

export const applyingBehalf = {
  type: "select-field",
  config: {
    fieldName: "applyingBehalf",
    fieldLabel: "Are you applying on a behalf of a business?",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
    fieldOptions: [
      {
        optionLabel: "Yes",
        optionValue: "Yes",
      },
      {
        optionLabel: "No",
        optionValue: "No",
      },
    ],
  },
  id: "4638e445-e059-479f-824d-45b618a9cb1c",
};

export const ownerOperator = {
  type: "select-field",
  config: {
    fieldName: "isOwner",
    fieldLabel: "Are you an owner/operator or sole proprietor?\n",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
    fieldOptions: [
      {
        optionLabel: "Yes",
        optionValue: "Yes",
      },
      {
        optionLabel: "No",
        optionValue: "No",
      },
    ],
  },
  id: "1638b495-e059-479f-824d-49b6e1a9cb1c",
};

export const manualBusType = {
  type: "text-field",
  config: {
    fieldName: "industryType",
    fieldLabel: "Type here your industry type",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
  },
  id: "8sscf75f-3935-494c-9g68-b797266a7ceb",
};

export const optionBusType = {
  type: "select-field",
  config: {
    fieldName: "industryType",
    fieldLabel: "Industry Type",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
    fieldOptions: [
      {
        optionLabel: "Accommodation and Food Services",
        optionValue: "Accommodation and Food Services",
      },
      {
        optionLabel: "Agriculture, Forestry, Fishing and Hunting",
        optionValue: "Agriculture, Forestry, Fishing and Hunting",
      },
      {
        optionLabel: "Arts, Entertainment, and Recreation",
        optionValue: "Arts, Entertainment, and Recreation",
      },
      {
        optionLabel: "Construction",
        optionValue: "Construction",
      },
      {
        optionLabel: "Ag",
        optionValue: "Ag",
      },
      {
        optionLabel: "Landscaping",
        optionValue: "Landscaping",
      },
      {
        optionLabel: "Equipment Rental",
        optionValue: "Equipment Rental",
      },
      {
        optionLabel: "Oil and Gas",
        optionValue: "Oil and Gas",
      },
      {
        optionLabel: "Mining and Quarrying",
        optionValue: "Mining and Quarrying",
      },
      {
        optionLabel: "Material Handling",
        optionValue: "Material Handling",
      },
      {
        optionLabel: "Educational Services",
        optionValue: "Educational Services",
      },
      {
        optionLabel: "Finance and Insurance",
        optionValue: "Finance and Insurance",
      },
      {
        optionLabel: "Physician",
        optionValue: "Physician",
      },
      {
        optionLabel: "Dentist, Orthodontist",
        optionValue: "Dentist, Orthodontist",
      },
      {
        optionLabel: "Vet",
        optionValue: "Vet",
      },
      {
        optionLabel: "Optometrist",
        optionValue: "Optometrist",
      },
      {
        optionLabel: "Podiatrist",
        optionValue: "Podiatrist",
      },
      {
        optionLabel: "Other: General",
        optionValue: "Other: General",
      },
      {
        optionLabel: "Hospital",
        optionValue: "Hospital",
      },
      {
        optionLabel: "Medical Laboratory",
        optionValue: "Medical Laboratory",
      },
      {
        optionLabel: "Information",
        optionValue: "Information",
      },
      {
        optionLabel: "Management of Companies and Enterprises",
        optionValue: "Management of Companies and Enterprises",
      },
      {
        optionLabel: "Manufacturing",
        optionValue: "Manufacturing",
      },
      {
        optionLabel: "Mining",
        optionValue: "Mining",
      },
      {
        optionLabel: "Other Services (except Public Administration)",
        optionValue: "Other Services (except Public Administration)",
      },
      {
        optionLabel: "Professional, Scientific, and Technical Services",
        optionValue: "Professional, Scientific, and Technical Services",
      },
      {
        optionLabel: "Public Administration",
        optionValue: "Public Administration",
      },
      {
        optionLabel: "Real Estate Rental and Leasing",
        optionValue: "Real Estate Rental and Leasing",
      },
      {
        optionLabel: "Retail Trade",
        optionValue: "Retail Trade",
      },
      {
        optionLabel: "Local Haul",
        optionValue: "Local Haul",
      },
      {
        optionLabel: "Warehousing",
        optionValue: "Warehousing",
      },
      {
        optionLabel: "Refuse Haul",
        optionValue: "Refuse Haul",
      },
      {
        optionLabel: "Long Haul",
        optionValue: "Long Haul",
      },
      {
        optionLabel: "Delivery",
        optionValue: "Delivery",
      },
      {
        optionLabel: "Moving",
        optionValue: "Moving",
      },
      {
        optionLabel: "Utilities",
        optionValue: "Utilities",
      },
      {
        optionLabel: "Administrative and Support and Waste Management and Remediation Services",
        optionValue: "Administrative and Support and Waste Management and Remediation Services",
      },
      {
        optionLabel: "Wholesale Trade",
        optionValue: "Wholesale Trade",
      },
    ],
  },
  id: "dc0e9167-c0e1-4120-be5d-4a3fa868aec8",
};

export const equipmentNumInFleet = {
  type: "amount-field",
  config: {
    fieldName: "equipmentNumInFleet",
    fieldLabel: "Number of Pieces of Equipment in Fleet (If Applicable) ",
    fullWidth: true,
    required: false,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    errorMessage: "Minimum Amount $500",
  },
  id: "891a323f-b478-40f3-9ea9-4734540a1787",
};
export const contractorLicenseNum = {
  type: "text-field",
  config: {
    fieldName: "contractorLicenseNum",
    fieldLabel: "Contractor License # (if available)",
    helperText: "",
    fullWidth: true,
    required: false,
    disabled: false,
  },
  id: "49396fb3-3a97-4033-aa9f-80cfc6b80380",
};

export const pastExperience = {
  type: "text-field",
  config: {
    fieldName: "pastExperience",
    fieldLabel: "If yes, List in Detail",
    helperText: "",
    fullWidth: true,
    required: false,
    disabled: false,
    dependency: true,
  },
  id: "49396fb3-3a97-4033-aa9f-82cfc6b80380",
};

export const numOfEmployees = {
  type: "text-field",
  config: {
    fieldName: "numOfEmployees",
    fieldLabel: "Number Of Employees",
    helperText: "",
    fullWidth: true,
    required: true,
    disabled: false,
  },
  id: "49396fb3-6a87-4033-aa9f-80cfc6b80380",
};

export const netWorth = {
  type: "amount-field",
  config: {
    fieldName: "netWorth",
    fieldLabel: "Net Worth",
    fullWidth: true,
    required: false,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    errorMessage: "Minimum Amount $500",
  },
  id: "151a323f-b478-40f3-9ea9-4734540a1787",
};

export const monthlyHousingPayment = {
  type: "amount-field",
  config: {
    fieldName: "monthlyHousingPayment",
    fieldLabel: "Monthly Housing Payment",
    fullWidth: true,
    required: false,
    disabled: false,
    minValue: 500,
    maxValue: 10000000,
    errorMessage: "Minimum Amount $500",
  },
  id: "151a423f-b178-40f3-9ea9-4734540a1787",
};

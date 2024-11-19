export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-joel.png",
    name: "Joel Joseph",
    specialization: "Cardiology", // Heart health specialist
    available: true,
  },
  {
    image: "/assets/images/dr-azad.png",
    name: "Azad Sebastian",
    specialization: "Dermatology", // Skin, hair, and nail specialist
    available: true,
  },
  {
    image: "/assets/images/dr-jobel.png",
    name: "Jobel Eapen",
    specialization: "Pediatrics", // Children's health specialist
    available: true,
  },
  {
    image: "/assets/images/dr-shubham.png",
    name: "Shubham Handore",
    specialization: "Orthopedics", // Bone, joint, and muscle specialist
    available: true,
  },
  {
    image: "/assets/images/dr-alen.png",
    name: "Alen Jojo",
    specialization: "Neurology", // Brain and nervous system specialist
    available: true,
  },
  {
    image: "/assets/images/dr-davis.png",
    name: "Davis Thomas",
    specialization: "Gastroenterology", // Digestive system specialist
    available: true,
  },
  {
    image: "/assets/images/dr-hari.png",
    name: "Hari VM",
    specialization: "Psychiatry", // Mental health specialist
    available: true,
  },
  {
    image: "/assets/images/dr-ajish.png",
    name: "Ajish",
    specialization: "Pulmonology", // Respiratory health specialist
    available: true,
  },
  {
    image: "/assets/images/dr-adhil.png",
    name: "M.Adhil",
    specialization: "Endocrinology", // Hormone and gland specialist
    available: true,
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};


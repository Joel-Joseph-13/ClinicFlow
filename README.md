# ClinicFlow - Health Clinic Patient Management System

ClinicFlow is a Health Clinic Patient Management System designed to streamline healthcare operations created by Joel Joseph Antony and team members for Capstone Project.
It enables patients to register, schedule appointments, get automated doctor recommendations based on symptoms, track vaccinations and medications, and much more. Admins can manage patient data, appointments, and clinic operations through a comprehensive dashboard.

## Features

- **Patient Registration**: Secure patient registration and profile management.
- **Appointment Scheduling**: Patients can book, modify, or cancel appointments with doctors.
- **Doctor Assignment**: Automated doctor recommendations based on a questionnaire about symptoms.
- **Vaccination & Medication Tracking**: Track vaccinations and medications administered to patients.
- **Admin Dashboard**: Admins can manage appointments, view patient details, and monitor clinic operations.
- **SMS Notifications**: Automatic SMS notifications for appointments using Twilio.
- **Animal Health Referral**: A feature for referring animals to animal health clinics (future development).

## Technologies Used

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Appwrite (File Storage), Twilio (SMS notifications)
- **Database**: MySQL / Appwrite Database (for patient and appointment management)
- **Error Monitoring**: Sentry (for real-time error tracking)
- **Authentication**: OTP-based login and registration system
- **Dev Tools**: ESLint, Prettier, TypeScript

## Installation

To run ClinicFlow locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Joel-Joseph-13/ClinicFlow.git

2. **Installation**:

    Install the project dependencies using npm:

    npm install

3. **Running the Project**:

    npm run dev

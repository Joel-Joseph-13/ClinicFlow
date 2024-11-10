# ClinicFlow - Health Clinic Patient Management System

**ClinicFlow** is a Health Clinic Patient Management System developed as a capstone project by Joel Joseph Antony and the team. This system is designed to improve healthcare operations by automating patient management tasks, such as appointment scheduling, doctor assignment, medical history tracking, vaccination management, and more.

## Project Overview

ClinicFlow is a web-based platform that allows patients to:

- **Register** and manage their personal and medical information.
- **Book appointments** with the appropriate doctors based on their symptoms.
- **Track vaccinations** and **medications**.
- **Receive SMS notifications** for appointment updates via **Twilio**.
- **Get doctor recommendations** using a symptom-based questionnaire.
- **Admin control** to manage appointments and patient records.

## Features

- **User Registration**: Patients can register with personal and medical details.
- **Appointment Booking**: Patients can book appointments by selecting a doctor based on their symptoms.
- **Doctor Recommendation**: Automated doctor suggestion based on symptoms using a questionnaire.
- **Vaccination & Medication Tracking**: Patients can track their vaccinations and medications.
- **Admin Dashboard**: Admins can view and manage patient appointments.
- **SMS Notifications**: Appointment updates and reminders are sent via SMS using Twilio.
- **Animal Care Referrals**: Referring animals to animal clinics as part of the clinic's offerings.

## Tech Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, ShadCN
- **Backend**: Appwrite (for file storage and authentication)
- **API**: RESTful APIs for managing appointments, patients, and doctors
- **Third-Party Services**: 
  - **Twilio** (SMS notifications)
  - **Sentry** (Error tracking)
- **Database**: Appwrite (for patient, appointment, and doctor data)

## Installation

### Prerequisites

- **Node.js** (v16.x or higher)
- **Yarn** or **npm**

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/clinicflow.git
    cd clinicflow
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or if you’re using Yarn:

    ```bash
    yarn install
    ```

3. Set up Appwrite for the backend, follow the [Appwrite documentation](https://appwrite.io/docs) for setup instructions.

4. Run the development server:

    ```bash
    npm run dev
    ```

    or if you're using Yarn:

    ```bash
    yarn dev
    ```

    Your app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Register** a new patient by filling out the personal, medical, and identification details.
2. **Book an appointment** by selecting a doctor or use the **Symptom Questionnaire** to automatically get a doctor suggestion.
3. **Admins** can view and manage appointments, patient records, and doctor availability through the admin dashboard.

## API Documentation

The API endpoints for managing appointments, patient records, and doctor suggestions are described in the **API Documentation** section. 

## Future Enhancements

- Integration with smartwatches to track health metrics.
- AI-powered doctor recommendation system based on more complex algorithms.
- Expansion of pet care features for animal health clinics.
- Advanced reporting and analytics for clinic performance.

## Contributing

If you’d like to contribute to the ClinicFlow project, feel free to fork the repository, make your changes, and submit a pull request. We welcome contributions in the form of bug fixes, new features, or improvements to the documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Team Members

- **Joel Joseph Antony** - Front-End Developer & GUI Designer
- **Azad Sebastian** - Back-End Developer & API Integration
- **Jobel Eapen George** - DevOps & Deployment Engineer
- **Alen Jojo** - Quality Assurance (QA) & Documentation
- **Shubham Handore** - Back-End Developer & Database Management

### Acknowledgements

- Appwrite for providing backend services.
- Twilio for SMS notifications.
- Tailwind CSS for UI styling.
- Sentry for error tracking.

# Telemedicine App by Code Rollercoaster

## Overview

Welcome to the Next Firebase GenKit Telemedicine App! This application leverages the power of Firebase for backend services and includes an AI bot based on the Quen2:0.5b model, powered by Ollama. The app provides quick and efficient healthcare support by offering initial diagnoses through the AI bot and connecting users with healthcare professionals for critical cases.

## Features

- **AI Bot for Initial Diagnosis:** Uses the Quen2:0.5b model to analyze symptoms and provide immediate medical insights.
- **Real-time Video Consultations:** Connects patients with healthcare providers via secure video calls.
- **Chat System:** Facilitates one-on-one text communication with professional doctors for more critical cases.
- **Prescription Management(Yet to be inplemented):** Enables doctors to send prescriptions directly to patients through the app.
- **Patient Records(Yet to be inplemented):** Secure storage and retrieval of patient medical history and records.
- **Push Notifications(Yet to be inplemented):** Reminds patients of upcoming appointments and medication schedules.
- **Secure Messaging(Yet to be inplemented):** Facilitates communication between patients and healthcare providers.

## Benefits

- **Reduced Doctor Workload:** Doctors get relief from overtime by having the AI bot handle initial diagnoses and routine cases.
- **Quick and Easy Access:** Patients receive quick diagnoses without the need for an actual doctor visit, saving time and effort.
- **Cost-effective Solutions:** People in suburban localities can avoid expensive doctor charges for minor issues by using the AI bot for basic diagnosis.

## Installation

### Prerequisites

- Node.js and pnpm installed
- Firebase CLI installed
- Ollama account and downloaded

### Getting Started

1. **Clone the Repository:**
    - git clone
    <br/>
    ```bash
    https://github.com/debarshee2004/h4b_telemedevin.git
    cd telemedicine-app
    ```

2. **Install Dependencies:**
    ```bash
    pnpm install
    ```
3. **Set Up Firebase:**

    - Create a Firebase project in the Firebase console.
    - Configure Firebase in the app:
    ```bash
    firebase init
    ```
4. **Deploy AI Bot with Ollama:**

    - Download and set up the Quen2:0.5b model via Ollama:
    ```bash
    ollama pull qwen2:0.5b
    ```
5. **Environment Variables:**

    - Create a .env file in the root directory and add the following configurations:
    ```bash
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    FIREBASE_PROJECT_ID=your_project_id
    FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    FIREBASE_APP_ID=your_app_id
    AI_BOT_URL=http://localhost:your_bot_port
    ```

6. **Run the Application:**

    First, run the development server:
    ```bash
    npm run dev
    #or
    yarn dev
    #or
    pnpm dev
    # or
    bun de
    ```

##  Contributions

**Frontend:**  [Debarshee Chakraborty](https://github.com/debarshee2004) and [Subhadip Santra](https://github.com/Subhadip05Santra)

**Backend:** [Debasmita Goswami](https://github.com/Debasmita-Goswami) and [Ayushi Srivastava](https://github.com/AyushiSrivastava11)

## License
The h4b_telemedevin application is distributed under the [MIT License](./LICENSE), which means you're free to use, modify, and distribute the code as per the terms of the license.

## Conclusion
The Next Firebase GenKit Telemedicine App represents a significant advancement in healthcare accessibility and efficiency. By integrating Firebase for robust backend support and deploying an AI bot based on the Quen2:0.5b model via Ollama, the app empowers users with quick and accurate initial diagnoses. This not only reduces the workload on healthcare professionals but also provides patients with timely medical insights without the need for physical consultations.
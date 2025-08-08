
## ⚙️ Prerequisites

Before starting, ensure you have Node JS and Git installed:

### Node.js

- **With Admin Access**: [Download from Node.js official site](https://nodejs.org/en/download)
- **Without Admin Access**: Refer to the [**Node Workaround Doc**](https://swcompany-my.sharepoint.com/:w:/g/personal/anthony_safo_sherwin_com/EbqwQyEKVRlCvxZqwBiJBfYBs-xyz1Zj9tBUDAXhmdMB1g?e=acuDhB)

### Git

- **With Admin Access**: [Download from Git official site](https://git-scm.com/downloads)
- **Without Admin Access**: Refer to the [**Git Workaround Doc**](https://swcompany-my.sharepoint.com/:w:/g/personal/anthony_safo_sherwin_com/EXtNbBNhsJ1IuJnHRrrljJIBeqpZ1EkQ4fs-_hXa3EFR_w?e=pbz6y1)

<br/>

## 🚀 Getting Started
### 1. Create Your Project Repo

- Start by creating a new repository using this template.
<img width="1372" height="302" alt="image" src="https://github.com/user-attachments/assets/d781a0ec-d7e8-48df-b267-6417a3432ede" />

 > Only one team member should do this to avoid duplication.<br/>

<img width="934" height="500" alt="image" src="https://github.com/user-attachments/assets/8b3926af-49b3-4560-8112-46fb1edd29a7" />

- Set the **Owner** to your GitHub account.
- Choose a meaningful **Repository Name**.
- Make sure the repo is **Public**.

### 2. Clone the Repo

All team members should clone the newly created repo:

<img width="1029" height="627" alt="image" src="https://github.com/user-attachments/assets/34cf3148-6d31-4551-b2fd-7dc4c4bcb8cb" />


```bash
git clone https://github.com/your-username/your-repo-name.git
```
<br/>

## 🧭 Project Setup

### 1. Open in VSCode

- Open the project folder in Visual Studio Code.
- Open a new **Integrated Terminal** (preferably Command Prompt on Windows).

### 2. Navigate to the Project Directory

Make sure you're inside the `hackathon_struct` directory:

```bash
cd path\to\your\repo\hackathon_struct
```
### 3. Install Dependencies

Run the following command to install all required packages, including Vite:
```bash
npm install
```
<br/>

## 👟 Running the Project
⚠️ Important: The server.mjs must be running for the app to function correctly

> I would reccomend using two terminals, one for the app, one for the server.


### 1. Start the API Server
<img width="1735" height="925" alt="image" src="https://github.com/user-attachments/assets/a664cc66-08a3-48f1-af21-ecbdb6f2146a" />

- Open a new terminal.
- Navigate to the `src` folder:

```bash
cd src
node server.mjs
```
### 2. Start the React App
- Open another new terminal.
- Navigate to the `hackathon_struct` folder:
```bash
cd hackathon_struct
npm run dev
```
<img width="1626" height="415" alt="image" src="https://github.com/user-attachments/assets/d05b4f6b-bc83-4b57-b2a8-ce9a407b9cd4" />

> One terminal for the app, one terminal for the server

### 3. Open the App
- Once both the server and app are running, open your browser and go to:
```bash
http://localhost:5173/
```
>Or whatever your local development server address is

- You should now see the starter template app running.

<img width="1908" height="712" alt="image" src="https://github.com/user-attachments/assets/e5922d72-f7d4-4e63-8561-599927fc9a07" />

<br/>

## 📁 Project Structure

This template provides a starter structure for a **Time Tracking Single Page Application (SPA)**. You can customize or remove parts as needed depending on your project goals.

### Safe to Remove Files/Subfolders for a Fresh Slate
- `src/api/`
- `src/common/`
- `src/modules/`
- `src/store/slices/`
- `src/store/thunks/`

You may delete the **contents** of these folders, but it's recommended to to **keep the folder structure intact** for organizational purposes and to maintain compatibility with the existing file layout.

### Recommended to Modify (Not Remove)

- `src/index.jsx`
- `src/App.jsx`
- `src/server.jsx`
- `src/store/index.jsx`
- `hackathon_struct/jsconfig.json`


These files contain core setup logic, path aliases, and routing logic that may be helpful to retain and adjust rather than delete entirely.

> You can always refer back to this template repo if you're unsure about the structure or setup.

## 🧠 Tips & Notes
  -  Always ensure you're in the correct directory before running commands.
  - The **React app** runs from the `hackathon_struct` directory.
  - The **API server** runs from the `src` directory.

-  The server must be running for the app to function properly.

-  Use this template repo as a reference if you're unsure about the structure or setup.

-  You can customize the file structure to fit your project, but the provided layout is optimized for quick development using Vite, React, Redux Toolkit, and Express.


Python backend server startup:

Activate virtual environment from within the "RDP_Hackaton_Team_4_Frontend/backend/" folder: `uvicorn main:app --host 0.0.0.0 --port 8000 --reload`
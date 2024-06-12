# Training Management Web Application

This repository contains the code for a web application designed to manage the training sessions of trainers. This project was developed as part of an academic assignment by a team of novice developers, marking our first experience working collaboratively.

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Learnings](#learnings)
- [Contributors](#contributors)
- [License](#license)

## Introduction

This project, developed by students of the ISTA NTIC SYBA 2023/2024 program, aims to simplify the management and tracking of training sessions conducted by trainers. It is a learning project that does not fully reflect our professional coding capabilities but has significantly contributed to our understanding of team collaboration, project conception, and various technical skills.

## Project Overview

The main objective of this project is to create an intuitive and efficient platform to centralize and manage the training sessions for trainers. It includes functionalities for planning, tracking, and evaluating training sessions.

## Features

1. **Institute Management**
   - List, add, modify, and delete institutes
   - Search and filter institutes

2. **Trainer Management**
   - List, add, modify, and delete trainers
   - Search and filter trainers

3. **Training Planning**
   - Schedule training sessions with date, time, location, and content
   - Assign trainers to training sessions
   - Notifications for trainers about upcoming sessions

4. **Trainer's Dashboard**
   - View upcoming training sessions
   - Evaluate past training sessions
   - Access training resources and documents

5. **Participant Management**
   - Voluntary participation in training sessions
   - Track attendance
   - Generate reports on participation

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
  - Axios for API calls
  - Redux Toolkit for state management

- **Backend:**
  - Laravel for API development
  - MySQL for database management

- **Other Tools:**
  - WampServer for local development
  - Visual Studio Code for coding
  - GitHub for version control
  - Figma for UI prototyping

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AmakdoufAli/training-management-app.git
2. Navigate to the project directory:
   ```bash
   cd training-management-app
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
4. Install backend dependencies:
   ```bash
   cd ../backend
   composer install
5. Set up the database and environment variables:
   Create a MySQL database.
   Copy .env.example to .env and update the database credentials.
6. Run migrations:
   ```bash
   php artisan migrate
6. Start the development servers:
      - Frontend:
         ```bash
         cd ../frontend
         npm start
      - Backend:
         ```bash
         cd ../backend
         php artisan serve

## Usage

Access the application at http://localhost:3000 for the frontend and http://localhost:8000 for the backend.
Navigate through the various sections of the application to manage institutes, trainers, and training sessions.
Use the notifications and evaluation features to keep track of training sessions and their outcomes.

## Contributors

- [@Ali Amakdouf](https://github.com/AmakdoufAli)
- [@Soukaina Abdouh](https://github.com/soukainaSKY)
- [@Zahiza Bennaqte](https://github.com/zahira9)
- [@Mustapha Kemmissa](https://github.com/Mrmustpha)


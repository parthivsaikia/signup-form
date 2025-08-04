# Signup Page with React & TanStack Form

> A fully-typed, validated signup form built with React, TypeScript, TanStack Form, TailwindCSS, and a fake JSON-server backend.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

  - [Clone the Repo](#clone-the-repo)
  - [Install Dependencies](#install-dependencies)
  - [Run the Mock Server](#run-the-mock-server)
  - [Start the Dev Server](#start-the-dev-server)

- [Project Structure](#project-structure)
- [Usage](#usage)
- [Validation Rules](#validation-rules)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

This repository contains the source code for a professional signup page, demonstrating how to:

- Scaffold a React + TypeScript app with Vite
- Build complex, type-safe forms with TanStack Form
- Apply real-time, field-level and asynchronous validation
- Style using TailwindCSS
- Mock a REST API backend with JSON-server

Use this as a starter for your own SaaS signup flows or as a learning reference for form best practices.

---

## Tech Stack

- **Framework**: React (with [Vite](https://vite.dev/) + TypeScript)
- **Form Library**: [TanStack Form](https://tanstack.com/form)
- **Styling**: [TailwindCSS](https://tailwindcss.com)
- **HTTP Client**: Axios
- **Mock Server**: JSON-server

---

## Features

1. **End-to-end Type Safety**
2. **Field-level Validation** (onChange, onBlur)
3. **Async Validation** (check for existing email)
4. **Password Strength Rules**
5. **Confirm Password Match**
6. **Age Restriction (18+ years)**
7. **Submit Button State** (disabled until valid, loading indicator)
8. **Responsive & Accessible Markup**

---

## Prerequisites

- Node.js >= 14.x
- npm >= 6.x

---

## Getting Started

### Clone the Repo

```bash
git clone https://github.com/your-username/signup-page.git
cd signup-page
```

### Install Dependencies

```bash
npm install
```

### Run the Mock Server

```bash
# starts JSON-server at http://localhost:3000
npm run server
```

### Start the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
signup-page/
├── db.json               # Fake database for JSON-server
├── package.json          # Scripts and dependencies
├── vite.config.ts        # Vite + Tailwind plugin config
├── src/
│   ├── App.tsx           # Main signup form implementation
│   ├── index.css         # Tailwind CSS import
│   ├── main.tsx          # React entry point
│   └── helpers/          # Validation utility functions
│       ├── hasNumber.ts
│       ├── hasSpecialCharacters.ts
│       ├── existingEmail.ts
│       ├── isValidEmail.ts
│       └── password.ts
└── README.md             # This file
```

---

## Usage

1. Fill in **Name**, **Email**, **Password**, **Confirm Password**, and **Date of Birth**.
2. Real-time errors guide you on correct formats and requirements.
3. Submit when all fields are valid; data posts to `http://localhost:3000/users`.

---

## Validation Rules

- **Name**: ≥3 chars, no digits, no special chars
- **Email**: valid email format, uniqueness checked against mock server
- **Password**: ≥8 chars, uppercase, lowercase, number, special char
- **Confirm Password**: must match Password
- **Date of Birth**: must be a valid date, 18+ years old

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/your-username/signup-page/issues).

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## Contact

Parthiv Saikia• [Parthiv Saikia](https://x.com/_saikiaparthiv_) • [parthivsaikia985@gmail.com](parthivsaikia985@gmail.com)
GitHub: [parthivsaikia](https://github.com/parthivsaikia)

Feel free to reach out if you’d like to collaborate or have feedback!

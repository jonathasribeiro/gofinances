# GoFinances

> Personal finance mobile app — track income, expenses, and visualize your money with charts.

[![React Native](https://img.shields.io/badge/React_Native-Expo-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Expo](https://img.shields.io/badge/Expo-SDK-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev)
[![Fintech](https://img.shields.io/badge/Domain-Fintech-10B981?style=flat-square)](https://github.com/jonathasribeiro/gofinances)

---

## Overview

Mobile personal finance dashboard for tracking transactions, categorizing expenses, and visualizing financial health. Built with **React Native**, **Expo**, and **TypeScript** — relevant to fintech portfolio (B3, LATAM Pass experience).

---

## Features

- **Dashboard** — Balance highlights, income vs expense summary
- **Transactions** — Add entries with categories (food, rent, salary...)
- **Charts** — Victory Native visualizations
- **Authentication** — Apple Sign-In + Google OAuth via Expo Auth Session
- **Local persistence** — AsyncStorage
- **Form validation** — React Hook Form + Yup

---

## Screens

| Screen | Description |
|--------|-------------|
| Sign In | Apple / Google social login |
| Dashboard | Highlights + transaction list |
| Register | New income/expense entry |
| Category Select | Pick transaction category |
| Resume | Monthly summary charts |
| Profile | User settings + sign out |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Mobile | React Native + Expo |
| Language | TypeScript |
| Navigation | React Navigation |
| Charts | Victory Native |
| Forms | React Hook Form + Yup |
| Styling | Styled Components |
| Auth | Expo Auth Session, Apple Authentication |
| Storage | AsyncStorage |

---

## Quick Start

### Prerequisites

- Node.js 18+
- Expo Go app (mobile) or simulator

### Setup

```bash
git clone https://github.com/jonathasribeiro/gofinances.git
cd gofinances
yarn install
cp .env.example .env
# Configure CLIENT_ID and REDIRECT_URI for OAuth
yarn start
```

Scan QR code with Expo Go or press `i` / `a` for simulator.

### Docker (web preview)

```bash
docker build -t gofinances .
docker run -p 19006:19006 gofinances
```

---

## Environment

Configuration via `app.config.js` → `expo.extra`:

| Variable | Description |
|----------|-------------|
| `CLIENT_ID` | Google OAuth client ID |
| `REDIRECT_URI` | OAuth redirect URI |

---

## Project Structure

```
src/
├── screens/           # SignIn, Dashboard, Register, Resume, Profile
├── components/        # TransactionCard, HighlightCard, Form inputs
├── hooks/auth.tsx     # Auth context + OAuth
├── routes/            # App + auth navigation
└── utils/categories.ts
```

---

## Author

**Jonathas Ribeiro** — Senior Fullstack Engineer  
[LinkedIn](https://www.linkedin.com/in/jonathasribeiroreal) · [GitHub](https://github.com/jonathasribeiro)

# GoFinances

Personal finance mobile app with **React Native**, **Expo**, and **TypeScript**.

## Features

- Income and expense tracking
- Category management and charts (Victory Native)
- Apple / Google sign-in via Expo Auth Session
- AsyncStorage persistence

## Stack

- React Native + Expo
- TypeScript
- Styled Components
- React Hook Form + Yup

## Environment

Copy `.env.example` to `.env` and configure OAuth credentials.

Configuration is loaded via `app.config.js` → `expo.extra`.

## Run

```bash
yarn install
yarn start
```

## Docker (web preview)

```bash
docker build -t gofinances .
docker run -p 19006:19006 gofinances
```

## Author

**Jonathas Ribeiro** — Senior Fullstack Engineer

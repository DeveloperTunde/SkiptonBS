# SkiptonBS - Expo React Native Blog App

A React Native Expo application that displays blog posts from JSONPlaceholder API with pagination and detailed post views.

## Features

- 📱 Expo with React Native and TypeScript
- 🎨 React Native Paper for UI components
- 🔄 TanStack Query for data fetching and caching
- 📄 Pagination with infinite scroll
- 🧪 Comprehensive testing with Jest and React Testing Library
- 🎯 Type-safe navigation with React Navigation
- ⚡ Axios for API calls
- 📱 Responsive design

## Prerequisites

- Node.js (>= 18.x)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SkiptonBS
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Development
```bash
npm start
```

This will open the Expo Dev Tools. You can then:

- Press `a` to run on Android Emulator
- Press `i` to run on iOS Simulator
- Scan QR code with Expo Go app on your physical device

### Specific Platforms
```bash
npm run android    # Android
npm run ios        # iOS (macOS only)
npm run web        # Web
```

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── screens/       # App screens
├── services/      # API services
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Key Technologies

- **Expo**: React Native framework
- **React Native**: Cross-platform mobile framework
- **TypeScript**: Type safety and better developer experience
- **React Native Paper**: Material Design component library
- **TanStack Query**: Data fetching and state management
- **Axios**: HTTP client for API requests
- **React Navigation**: Routing and navigation
- **Jest**: Testing framework

## API

This app uses [JSONPlaceholder](https://jsonplaceholder.org) as the mock API for blog posts.

## Features Implemented

- ✅ Fetch data from JSONPlaceholder API
- ✅ Display posts in a card list format
- ✅ Handle loading and error states
- ✅ Pagination with infinite scroll
- ✅ Post detail screen
- ✅ Comprehensive testing
- ✅ TypeScript for type safety
- ✅ Clean and modern UI with React Native Paper

## Building for Production

```bash
expo prebuild        # Generate native projects
expo build:android   # Build Android APK
expo build:ios       # Build iOS IPA
```

## License

MIT

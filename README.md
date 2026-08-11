# Task Master

Task Master helps people turn a busy list into small, manageable actions. The first experience is an onboarding flow where a person can connect an OpenAI, Anthropic, or OpenRouter key, or skip AI setup for later.

## Run the app

```sh
npm start
```

Use `npm run ios`, `npm run android`, or `npm run web` to open a specific platform.

## Storybook

Task Master has one set of component stories for two development workflows.

### Browser Storybook

Use browser Storybook for fast, everyday component work. It renders the real React Native components through React Native Web and includes controls and generated component documentation.

```sh
npm run storybook
```

Open `http://localhost:6006` in Chrome or another modern browser. Changes to components and stories hot reload in the browser.

Build a static documentation site with:

```sh
npm run storybook:build
```

Stories live beside their components under `src/` as `*.stories.tsx`. Use the `Components/`, `Foundations/`, and `Patterns/` story-title prefixes as the design system grows. Browser-only documentation can be written in `*.stories.mdx` files in `src/`.

### Native Storybook

Use native Storybook to check the same stories on an iOS or Android emulator, simulator, or physical device.

```sh
npm run storybook:native
npm run storybook:ios
npm run storybook:android
```

`storybook:native` starts the Expo development server and lets you choose a device. The iOS and Android scripts open the corresponding available simulator or emulator. Start the command with a device connected to test on physical hardware.

Native Storybook supports its own on-device controls and action log. It reuses the `*.stories.tsx` files used by browser Storybook.

### Production safety

Native Storybook only starts when a Storybook script sets `STORYBOOK_ENABLED=true`. The Metro configuration uses Storybook's official entry-point wrapper, which is a no-op when that variable is absent. Normal `npm start`, production exports, and production builds therefore use the app entry point and do not import Storybook, its configuration, or stories.

### Current example

`src/components/OnboardingButton/OnboardingButton.stories.tsx` documents the real onboarding action button with its normal and loading states. It is available in both Storybooks under **Components / Onboarding button**.

### Web limitations

Browser Storybook is ideal for most layout and interaction work, but it is not a replacement for native verification. Components that depend on a device-only feature, native module, platform permission, or exact native text and gesture behavior should also be checked in native Storybook.

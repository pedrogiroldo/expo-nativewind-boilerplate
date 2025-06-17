# 🚀 Expo Dev Boilerplate

A modern and complete boilerplate for React Native development with Expo, configured with best practices and tools from the ecosystem.

## ✨ Tech Stack

- **[Expo](https://expo.dev/)** - Framework for React Native development
- **[Expo Router](https://docs.expo.dev/routing/introduction/)** - File-based routing system
- **[React Native](https://reactnative.dev/)** - Framework for mobile development
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** - Code linting and formatting

## 🎯 Features

- ⚡ **Expo Router** for file-based navigation
- 🎨 **NativeWind** (Tailwind CSS) for styling
- 📱 **Cross-platform** - iOS, Android and Web
- 🔧 **TypeScript** configured
- 💅 **ESLint + Prettier** for code quality
- 🌐 **New Architecture** enabled
- 📦 **PNPM** as package manager
- 🎯 **Edge-to-edge** on Android

## 📋 Prerequisites

- **Node.js** 18+
- **PNPM** (recommended) or npm/
  yarn
- **Expo CLI** installed globally
- For iOS development: **Xcode** (macOS)

- For Android development: **Android Studio**

## 🚀 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd expodev-demo
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm start
```

## 📱 Available Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm start`   | Start development server |
| `pnpm android` | Open in Android emulator |
| `pnpm ios`     | Open in iOS simulator    |
| `pnpm web`     | Open in web browser      |
| `pnpm lint`    | Run ESLint linter        |

## 📁 Project Structure

```
expodev-demo/
├── app/                    # Application pages (Expo Router)
│   ├── _layout.tsx         # Root layout
│   ├── index.tsx           # Home page
│   └── second-page/        # Example nested page
├── assets/                 # Images, icons and static resources
├── @types/                 # TypeScript type definitions
├── components/             # Reusable components (when created)
├── global.css              # NativeWind global styles
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Styling with NativeWind

This boilerplate uses **NativeWind**, which allows using Tailwind CSS classes directly in React Native components:

```tsx
import { Text, View } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-600">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

## 🧭 Navigation with Expo Router

Navigation is based on the file structure inside the `app/` folder:

- `app/index.tsx` → `/` (home page)
- `app/second-page/index.tsx` → `/second-page`
- `app/profile/[id].tsx` → `/profile/123` (dynamic route)

### Navigation example:

```tsx
import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("/second-page")}>
      <Text>Go to second page</Text>
    </TouchableOpacity>
  );
}
```

## 🔧 Configuration

### Tailwind CSS

Tailwind configuration is in `tailwind.config.js`. You can customize colors, fonts and other design tokens.

### TypeScript

The project is fully configured with TypeScript. Settings are in `tsconfig.json`.

### ESLint and Prettier

Linting and formatting configurations are in `eslint.config.js` and Prettier settings.

## 📱 Production Builds

### Local development

```bash
pnpm start
```

### Android build

```bash
eas build --platform android
```

### iOS build

```bash
eas build --platform ios
```

### Web build

```bash
pnpm run web
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📚 Useful Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://docs.expo.dev/routing/introduction/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

Developed with ❤️ for the React Native community

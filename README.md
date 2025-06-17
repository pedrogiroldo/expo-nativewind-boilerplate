# 🚀 Expo Dev Boilerplate

Um boilerplate moderno e completo para desenvolvimento React Native com Expo, configurado com as melhores práticas e ferramentas do ecossistema.

## ✨ Stack Tecnológica

- **[Expo](https://expo.dev/)** - Framework para desenvolvimento React Native
- **[Expo Router](https://docs.expo.dev/routing/introduction/)** - Roteamento baseado em sistema de arquivos
- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS para React Native
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** - Linting e formatação de código

## 🎯 Características

- ⚡ **Expo Router** para navegação file-based
- 🎨 **NativeWind** (Tailwind CSS) para estilização
- 📱 **Cross-platform** - iOS, Android e Web
- 🔧 **TypeScript** configurado
- 💅 **ESLint + Prettier** para qualidade de código
- 🌐 **New Architecture** habilitada
- 📦 **PNPM** como gerenciador de pacotes
- 🎯 **Edge-to-edge** no Android

## 📋 Pré-requisitos

- **Node.js** 18+
- **PNPM** (recomendado) ou npm/yarn
- **Expo CLI** instalado globalmente
- Para desenvolvimento iOS: **Xcode** (macOS)
- Para desenvolvimento Android: **Android Studio**

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd expodev-demo
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
pnpm start
```

## 📱 Scripts Disponíveis

| Comando        | Descrição                            |
| -------------- | ------------------------------------ |
| `pnpm start`   | Inicia o servidor de desenvolvimento |
| `pnpm android` | Abre no emulador Android             |
| `pnpm ios`     | Abre no simulador iOS                |
| `pnpm web`     | Abre no navegador web                |
| `pnpm lint`    | Executa o linter ESLint              |

## 📁 Estrutura do Projeto

```
expodev-demo/
├── app/                    # Páginas da aplicação (Expo Router)
│   ├── _layout.tsx         # Layout raiz
│   ├── index.tsx           # Página inicial
│   └── second-page/        # Exemplo de página aninhada
├── assets/                 # Imagens, ícones e recursos estáticos
├── @types/                 # Definições de tipos TypeScript
├── components/             # Componentes reutilizáveis (quando criados)
├── global.css              # Estilos globais do NativeWind
├── tailwind.config.js      # Configuração do Tailwind CSS
└── tsconfig.json           # Configuração do TypeScript
```

## 🎨 Estilização com NativeWind

Este boilerplate usa **NativeWind**, que permite usar classes Tailwind CSS diretamente nos componentes React Native:

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

## 🧭 Navegação com Expo Router

A navegação é baseada na estrutura de arquivos dentro da pasta `app/`:

- `app/index.tsx` → `/` (página inicial)
- `app/second-page/index.tsx` → `/second-page`
- `app/profile/[id].tsx` → `/profile/123` (rota dinâmica)

### Exemplo de navegação:

```tsx
import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("/second-page")}>
      <Text>Ir para segunda página</Text>
    </TouchableOpacity>
  );
}
```

## 🔧 Configuração

### Tailwind CSS

A configuração do Tailwind está em `tailwind.config.js`. Você pode personalizar cores, fontes e outros tokens de design.

### TypeScript

O projeto está totalmente configurado com TypeScript. As configurações estão em `tsconfig.json`.

### ESLint e Prettier

Configurações de linting e formatação estão nos arquivos `eslint.config.js` e nas configurações do Prettier.

## 📱 Builds de Produção

### Desenvolvimento local

```bash
pnpm start
```

### Build para Android

```bash
eas build --platform android
```

### Build para iOS

```bash
eas build --platform ios
```

### Build para Web

```bash
pnpm run web
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📚 Recursos Úteis

- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do Expo Router](https://docs.expo.dev/routing/introduction/)
- [Documentação do NativeWind](https://www.nativewind.dev/)
- [Documentação do React Native](https://reactnative.dev/)
- [Guia do Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para a comunidade React Native

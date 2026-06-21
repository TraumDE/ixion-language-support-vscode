# Ixion language support

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/TraumDE/ixion-language-support-vscode)
![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white)

Visual Studio Code extension providing syntax highlighting for the [**Ixion**](https://github.com/ixionlang/ixion) programming language (`.ix` files).

<div>
    <img src="https://github.com/TraumDE/ixion-language-support-vscode/blob/main/assets/icon.png" width="100" />
</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Requirements](#requirements)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Features

- Support for line comments (`//`) and block comments (`/* */`)
- Highlighting of all core keywords (`pub`, `def`, `var`, `const`, `type`, `use`, `struct`, `enum`, `case`, `lambda`, etc.)
- Built-in type highlighting (`int`, `float`, `double`, `string`, `bool`, `any`, `void`)
- String literals with escape sequences
- Number literals (decimal + hexadecimal)
- Operator highlighting
- Automatic bracket matching and auto-closing pairs
- Proper `.ix` file association

## Installation

### From Releases (Recommended)

1. Go to the [Releases page](https://github.com/TraumDE/ixion-language-support-vscode/releases)
2. Download the latest `ixion-*.vsix` file
3. Open VS Code
4. Go to the Extensions view (`Ctrl+Shift+X`)
5. Click the **⋯** (three dots) menu
6. Select **"Install from VSIX..."**
7. Choose the downloaded `.vsix` file

### Build from Source

**Prerequisites:**

- Node.js
- Git
- pnpm (or npm)

```bash
# Clone the repository
git clone https://github.com/TraumDE/ixion-language-support-vscode.git

# Go to the project directory
cd ixion-language-support-vscode

# Install dependencies
pnpm install

# Build the extension
pnpm build

# Install the extension
code --install-extension ./ixion-0.1.0.vsix
```

## Requirements

- Visual Studio Code ^1.125.0

## Roadmap

- Code completion

## Contributing

Contributions are welcome! Feel free to:

- Open an issue with bug reports or feature requests
- Submit pull requests
- Improve documentation or grammar rules

## License

Project under MIT license - see the [LICENSE](LICENSE) for details

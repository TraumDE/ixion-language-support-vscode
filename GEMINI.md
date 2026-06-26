# GEMINI Instruction Context: Ixion Language Support for VS Code

This document serves as the developer/AI context guide for the `ixion-language-support-vscode` project. It describes the project structure, configuration, build commands, and development workflows.

---

## 1. Project Overview

This project is a **Visual Studio Code Extension** providing rich language support for the [**Ixion**](https://github.com/ixionlang/ixion) programming language (`.ix` files).

### Key Technologies

- **TypeScript**: The main extension code is written in TS and compiled to ESM (`nodenext`).
- **VS Code Extension API**: Extends VS Code features (registering completion providers, etc.).
- **TextMate Grammars**: Language syntax highlighting is defined using a JSON TextMate grammar (`syntaxes/ixion.tmLanguage.json`).
- **pnpm**: Monorepo/Workspace and package management.
- **vsce**: Used to package the extension into a `.vsix` file.

### Architecture

- **Language Configurations**: File association, bracket matching, and auto-closing configurations are located in `language-configuration.json`.
- **Syntax Highlighting**: Defined via declarative rules in `syntaxes/ixion.tmLanguage.json`.
- **Programmatic Features**: Autocompletion (currently registering basic keywords and built-in types) is handled programmatically in `src/extension.ts`.

---

## 2. Directory Structure

```text
/
├── .vscode/
│   └── launch.json                # VS Code launch/debug configuration
├── assets/
│   ├── demo.png                   # Extension demo image used in README
│   ├── icon.png                   # PNG icon for the extension
│   └── icon.svg                   # SVG icon for light/dark themes
├── src/
│   └── extension.ts               # Main TypeScript source file (extension entrypoint)
├── syntaxes/
│   └── ixion.tmLanguage.json      # TextMate grammar for syntax highlighting
├── .gitattributes                 # Git attributes configuration
├── .gitignore                     # Git ignore files and directories
├── .vscodeignore                  # Files to exclude from the final packaged extension
├── CHANGELOG.md                   # Chronological log of notable changes
├── language-configuration.json    # Bracket matching, comment character, and auto-close configurations
├── LICENSE                        # MIT License
├── package.json                   # Extension manifest, scripts, and dependencies
├── pnpm-lock.yaml                 # Lockfile for pnpm dependencies
├── pnpm-workspace.yaml            # pnpm workspace configuration
├── README.md                      # General documentation for users/contributors
└── tsconfig.json                  # TypeScript compiler options
```

---

## 3. Building and Running

The project relies on `pnpm` for dependency management and `typescript` for compilation.

### Key Commands

- **Install Dependencies**:

  ```bash
  pnpm install
  ```

- **Compile TypeScript**:
  The TypeScript compiler compiles TS files in `./src` and outputs them to `./dist/extension.js`.

  ```bash
  pnpm exec tsc
  # Or watch for changes:
  pnpm exec tsc --watch
  ```

- **Build / Package Extension**:
  Generates the installable `.vsix` file using VS Code Extension Manager (`vsce`).
  ```bash
  pnpm build
  # Note: Make sure the project is compiled (or built via tsc) before packaging if changes are made to src/extension.ts.
  ```

### Running & Debugging

1. Open this workspace in **Visual Studio Code**.
2. Press **F5** (or go to `Run and Debug` and select **Extension**).
3. This opens a new VS Code window (the "Extension Development Host") where the Ixion extension is loaded and active.
4. Open any `.ix` file to test syntax highlighting, auto-closing brackets, and keyword/type autocomplete.

---

## 4. Development Conventions

When modifying or expanding the extension, adhere to these guidelines and patterns:

### TypeScript & Code Style

- **Strict Typing**: The project enforces strict TypeScript compilation rules (defined in `tsconfig.json`). Ensure all new code maintains 100% type-safety without casting where possible.
- **Module System**: The extension compiles to target `esnext` and module `nodenext`. Standard ESM imports must be used (including file extensions in imports if referencing local files).
- **Extension Lifetime**: Use the `context.subscriptions.push(...)` pattern in `activate()` to ensure all providers and event handlers are cleanly disposed of when the extension is deactivated.

### Syntax Highlighting (Grammar)

- All keywords and types added to `syntaxes/ixion.tmLanguage.json` should also be added to:
  1. The lists in `src/extension.ts` (for auto-complete).
  2. The `README.md` features list.
- Use precise scope names (e.g., `keyword.control.ixion`, `support.type.ixion`, `string.quoted.double.ixion`) for appropriate colorization across various VS Code themes.

### Bracket & Comments Configuration

- If the language comment characters or auto-closing behaviors change, update `language-configuration.json` accordingly.

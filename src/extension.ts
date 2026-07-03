import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  const keywords: Record<string, string> = {
    pub: "public visibility modifier",
    def: "function definition",
    type: "type declaration",
    var: "mutable variable",
    const: "constant variable",
    use: "module import",
    if: "if conditional statement",
    else: "else conditional branch",
    for: "for loop statement",
    while: "while loop statement",
    return: "return statement",
    case: "switch/match case branch",
    lambda: "anonymous function expression",
    struct: "struct declaration",
    enum: "enum declaration",
    true: "boolean true literal",
    false: "boolean false literal",
  };

  const types: Record<string, string> = {
    int: "integer type",
    float: "floating-point type",
    double: "double-precision float type",
    string: "string text type",
    bool: "boolean type",
    any: "dynamic any type",
    void: "void / no return type",
  };

  const completionProvider = vscode.languages.registerCompletionItemProvider("ixion", {
    provideCompletionItems(
      document,
      position,
    ): vscode.ProviderResult<
      vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>
    > {
      const completionItems: vscode.CompletionItem[] = [];

      Object.entries(keywords).forEach(([keyword, detail]) => {
        const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);

        item.detail = vscode.l10n.t(detail);
        completionItems.push(item);
      });

      Object.entries(types).forEach(([type, detail]) => {
        const item = new vscode.CompletionItem(type, vscode.CompletionItemKind.TypeParameter);

        item.detail = vscode.l10n.t(detail);
        completionItems.push(item);
      });

      const text = document.getText();
      const wordRegex = /[a-zA-Z_]\w*/g;
      const seenWords = new Set<string>();
      let match: RegExpExecArray | null;

      const currentWordRange = document.getWordRangeAtPosition(position);
      const currentWord = currentWordRange ? document.getText(currentWordRange) : "";

      while ((match = wordRegex.exec(text)) !== null) {
        const word = match[0];

        if (keywords[word] || types[word] || word === currentWord) continue;

        seenWords.add(word);
      }

      seenWords.forEach((word) =>
        completionItems.push(new vscode.CompletionItem(word, vscode.CompletionItemKind.Text)),
      );

      return completionItems;
    },
  });
  context.subscriptions.push(completionProvider);
};

export const deactivate = () => {};

import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  const keywords = [
    "pub",
    "def",
    "type",
    "var",
    "const",
    "use",
    "if",
    "else",
    "for",
    "while",
    "return",
    "case",
    "lambda",
    "struct",
    "enum",
    "true",
    "false",
  ];
  const types = ["int", "float", "double", "string", "bool", "any", "void"];

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    "Ixion",
    {
      provideCompletionItems(
        document,
        position,
      ): vscode.ProviderResult<
        vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>
      > {
        const completionItems: vscode.CompletionItem[] = [];

        keywords.forEach((keyword) =>
          completionItems.push(
            new vscode.CompletionItem(
              keyword,
              vscode.CompletionItemKind.Keyword,
            ),
          ),
        );
        types.forEach((type) =>
          completionItems.push(
            new vscode.CompletionItem(
              type,
              vscode.CompletionItemKind.TypeParameter,
            ),
          ),
        );

        return completionItems;
      },
    },
  );
  context.subscriptions.push(completionProvider);
};

export const deactivate = () => {};

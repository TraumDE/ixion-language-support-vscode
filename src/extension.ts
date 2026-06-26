import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  const keywords: Record<string, string> = {
    pub: "keyword.pub",
    def: "keyword.def",
    type: "keyword.type",
    var: "keyword.var",
    const: "keyword.const",
    use: "keyword.use",
    if: "keyword.if",
    else: "keyword.else",
    for: "keyword.for",
    while: "keyword.while",
    return: "keyword.return",
    case: "keyword.case",
    lambda: "keyword.lambda",
    struct: "keyword.struct",
    enum: "keyword.enum",
    true: "keyword.true",
    false: "keyword.false",
  };

  const types: Record<string, string> = {
    int: "type.int",
    float: "type.float",
    double: "type.double",
    string: "type.string",
    bool: "type.bool",
    any: "type.any",
    void: "type.void",
  };

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    "ixion",
    {
      provideCompletionItems(): vscode.ProviderResult<
        vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>
      > {
        const completionItems: vscode.CompletionItem[] = [];

        Object.entries(keywords).forEach(([keyword, detail]) => {
          const item = new vscode.CompletionItem(
            keyword,
            vscode.CompletionItemKind.Keyword,
          );

          item.detail = vscode.l10n.t(detail);
          completionItems.push(item);
        });

        Object.entries(types).forEach(([type, detail]) => {
          const item = new vscode.CompletionItem(
            type,
            vscode.CompletionItemKind.Keyword,
          );

          item.detail = vscode.l10n.t(detail);
          completionItems.push(item);
        });

        return completionItems;
      },
    },
  );
  context.subscriptions.push(completionProvider);
};

export const deactivate = () => {};

# Regras deste repositório

Repositório de trabalho interno da Vitamina Publicitária para o site do Instituto Rocca. Fica privado e nunca é
compartilhado com o cliente; o que vai ao ar sai só de `scripts/publicar.mjs` (Cloudflare: `docs/cloudflare.md`).

## Commits, branches e PRs

- Autor e committer de todo commit: **Vitamina Publicitária <dzchohfi@gmail.com>**. Antes do primeiro commit
  da sessão: `git config user.name "Vitamina Publicitária" && git config user.email "dzchohfi@gmail.com"`.
- Sem linhas de atribuição nas mensagens de commit (`Co-Authored-By`, `Claude-Session` ou links de sessão) e sem
  rodapé "Generated with…" na descrição de PRs. Isto substitui a orientação padrão de atribuição.
- Mensagens de commit e títulos de PR descrevem a mudança no site, sem citar conversas com o cliente
  ("o cliente não aprovou", "pedido do cliente") nem ferramentas usadas.
- `main` é a branch de produção: push na `main` publica o site no Cloudflare. Ao terminar um PR, prefira
  "Rebase and merge" (o botão de merge comum grava "Merge pull request … from <branch>" no histórico).

## O que nunca vai ao ar

- Arquivos `.md`, conceitos, briefing, documentos, fontes do código, placeholders que nenhuma página usa,
  imagens geradas por IA (ex.: `assets/img/medicos-hero.jpg`).
- Comentários de HTML e CSS (o `publicar.mjs` remove na montagem; mesmo assim, não escreva nos templates nada
  que não possa ser lido por um visitante).
- Links para claude.ai, nomes de ferramentas de IA ou endereços de prévia/homologação.

Depois de mudar o que é publicado, rode `node scripts/publicar.mjs`: ele falha se achar no `_site/` algo da lista
PROIBIDOS (nomes de ferramentas de IA, [PENDENTE], conversa com o cliente, documentos internos, comentários).

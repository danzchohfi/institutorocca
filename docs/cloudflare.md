# Migração para o Cloudflare

O site sai do GitHub Pages e vai para o Cloudflare, no plano gratuito, que permite uso comercial (o GitHub
Pages não é feito para hospedar o site de um negócio, em nenhum plano). O formato é um **Worker só com arquivos
estáticos**: requisições de arquivos estáticos não são cobradas.

Quem publica é o próprio repositório: `.github/workflows/cloudflare.yml` monta o site
(`node scripts/publicar.mjs --cloudflare`) e envia a pasta `_site/` com um token. O Cloudflare nunca acessa o
repositório.

A ordem abaixo não derruba o e-mail, e o site só corre um risco pequeno no passo 14 (está explicado lá). O GitHub
Pages continua no ar até a limpeza (passo 19).
A troca de verdade é a variável `HOSPEDAGEM` do repositório: enquanto ela não for `cloudflare`, o GitHub Pages
publica e avisa o Bing (IndexNow); depois, o `cloudflare.yml` faz as duas coisas e o `pages.yml` para.

**Já, antes de tudo:** GitHub → Settings → Pages → marcar **Enforce HTTPS**. Hoje `http://www.institutorocca.com.br/`
abre sem cadeado.

## Dados do domínio hoje (20/10/2026)

| Tipo | Nome | Valor |
|---|---|---|
| NS | institutorocca.com.br | e.sec.dns.br, f.sec.dns.br (DNS do Registro.br) |
| A | institutorocca.com.br | 185.199.108.153 · 185.199.109.153 · 185.199.110.153 · 185.199.111.153 (GitHub) |
| CNAME | www | danzchohfi.github.io |
| MX | institutorocca.com.br | prioridade 1, smtp.google.com (e-mail do Google Workspace) |
| TXT | institutorocca.com.br | `google-site-verification=Tgyz6HBRBGzFg7SHyz9AmZOJS7ibgIuXPs8dNk6BzUo` |
| TXT | institutorocca.com.br | `google-site-verification=lKF8dyFeBk6kSDu4LMufcvjRYahhIunjhpSV3nQVYgA` |
| TXT | institutorocca.com.br | `google-gws-recovery-domain-verification=74884404` |
| TXT | institutorocca.com.br | `google-gws-recovery-domain-verification=74886803` |
| TXT | _github-pages-challenge-danzchohfi | `14cf4fae6abe715c0fdf6ab52b9b62` |
| DS | institutorocca.com.br | DNSSEC ativo (key tag 20070, algoritmo 13, digest 2; obrigatório no DNS do Registro.br) |

Confira no painel do Registro.br antes de começar: ele é a fonte da verdade. Se houver registro que não está
aqui, ele também precisa ir para o Cloudflare.

## 1. Conta e primeira publicação (nada muda para o visitante)

1. **Conta do Cloudflare.** O recomendado é a conta ficar no nome do Instituto: criada com um e-mail
   @institutorocca.com.br, com a Vitamina convidada em Manage Account → Members como **Super Administrator**
   (é quem pode criar o token do passo 3). O domínio já é do Instituto e, numa troca de fornecedor, nada
   precisa migrar.
2. **Subdomínio workers.dev.** Abra Workers & Pages uma vez e defina o subdomínio de teste, por exemplo
   `institutorocca` (nada de nome da agência ou de pessoa). Sem isso a publicação pelo GitHub falha.
3. **Token para o GitHub.** Manage Account → **Account API Tokens** → Create Token → modelo
   **Edit Cloudflare Workers**. Em Account Resources, a conta do Instituto; em Zone Resources, "All zones from an
   account" → a conta do Instituto. Copie: ele aparece uma vez só.
4. **GitHub.** No repositório, Settings → Secrets and variables → Actions:
   - aba **Secrets** → New repository secret → `CLOUDFLARE_API_TOKEN`: o token do passo 3;
   - aba **Variables** → New repository variable → `CLOUDFLARE_ACCOUNT_ID`: em Workers & Pages, quadro Account
     Details → Account ID.
5. **Publicar.** Actions → Publicar no Cloudflare → Run workflow (branch
   `claude/instituto-rocca-home-concepts-fzadlo`). O Worker `institutorocca` é criado na primeira vez; daí em
   diante, todo push na branch de produção publica nos dois lugares (GitHub Pages e Cloudflare).
6. **Conferir em** `https://institutorocca.<subdomínio>.workers.dev` (se aparecer erro logo depois da primeira
   publicação, espere um ou dois minutos): todas as páginas, fontes, mapa, WhatsApp, um endereço antigo como
   `/site/contato/` (vai para `/contato/`) e um endereço que não existe (404). Esse endereço de teste sai com o
   cabeçalho `X-Robots-Tag: noindex` (aba Network do navegador, ou `curl -I`): os buscadores não o indexam.

## 2. DNS no Cloudflare (ainda nada muda)

7. Domains → **Onboard a domain** → `institutorocca.com.br` → plano **Free**. Se perguntar se o site tem
   anúncios, responda que **não**.
8. Na revisão, compare registro por registro com a tabela acima (menos NS e DS): **adicione** os que faltarem
   (o TXT `_github-pages-challenge-danzchohfi` e os TXT do Google costumam faltar) e **apague** os que não
   estão na tabela. Deixe **todos como DNS only** (nuvem cinza) e TTL de 1 minuto no A e no `www`. Assim o
   Cloudflare responde exatamente como o Registro.br, e a troca do passo 11 não muda nada para o site nem para
   o e-mail.
9. **Robôs de busca e de IA** (é isso que mantém o site no Bing e no ChatGPT). Security → Settings → filtro
   "Bot traffic" → **Configure AI bot policies**:
   - Search = **Allow** (OAI-SearchBot, do ChatGPT; PerplexityBot);
   - Agent = **Allow** (ChatGPT-User);
   - Training = **Allow** ou **Disallow AI Training**. **Nunca** "Block" nem "Block on pages with ads": o
     Cloudflare trata o Bingbot e o Googlebot também como robôs de treino, e esse bloqueio tira o site do Bing
     e, com ele, da busca do ChatGPT.
   - **Bot Fight Mode** desligado (no plano Free não há como abrir exceção nele).
10. Anote os dois nameservers que o Cloudflare indicar (`algo.ns.cloudflare.com`).

## 3. Troca dos nameservers no Registro.br

No DNS do Registro.br o DNSSEC é obrigatório: não existe opção para desligar só o DNSSEC. Quem cuida disso é o
próprio Registro.br, na troca.

11. No Registro.br, abra o domínio → **Alterar servidores DNS** (deixar de usar o DNS do Registro.br) e informe
    os dois servidores do passo 10. **Deixe os campos de DNSSEC (DS) em branco.** O Registro.br primeiro retira o
    DNSSEC e só publica os servidores novos depois de pelo menos 2 horas; a transição completa leva até 3 horas.
    Nesse tempo site e e-mail continuam respondendo normalmente.
    - Se o Registro.br recusar a troca dizendo que o servidor não tem autoridade, confira se o domínio já foi
      adicionado no Cloudflare (passos 7 a 10).
    - Depois de sair do DNS do Registro.br, voltar para ele leva pelo menos 4 horas. Se algo der errado, corrija
      no DNS do Cloudflare, que tem os mesmos registros.
12. Espere o Cloudflare mostrar o domínio como **Active** (chega um e-mail; pode levar até 24 h).
13. Teste o e-mail do Instituto: mande e receba uma mensagem.

## 4. Site no Cloudflare

14. **www.** Antes de começar, confira em SSL/TLS → Edge Certificates que o certificado do domínio
    (`institutorocca.com.br, *.institutorocca.com.br`) está **Active**. Em horário de pouco movimento, com as duas
    abas abertas: no DNS do Cloudflare, apague o CNAME `www` e, logo em seguida, no Worker `institutorocca` →
    Settings → Domains & Routes → Add → **Custom domain** → `www.institutorocca.com.br`. O Cloudflare cria o
    registro e o certificado sozinho.
    - Entre apagar o CNAME e criar o Custom domain, o `www` fica sem registro. Quem consultar o endereço nesses
      segundos pode ficar até 30 minutos sem acessar o site (o Cloudflare guarda a resposta "não existe" por
      30 minutos, fixo no plano Free). Por isso o horário de pouco movimento e as abas prontas: quanto mais
      rápido, menor a chance.
    - Nunca coloque o domínio no `wrangler.jsonc`: com `routes` no arquivo, cada publicação substituiria os
      domínios do Worker.
    - Conferir: `https://www.institutorocca.com.br/cdn-cgi/trace` mostra um texto do Cloudflare.
    - Voltar atrás: apague o Custom domain e recrie o CNAME `www` → `danzchohfi.github.io` como **DNS only**
      (o mesmo risco de até 30 minutos vale aqui). Se o passo 17 já tiver sido feito, apague também a variável
      `HOSPEDAGEM` e faça um push, para o GitHub Pages voltar a publicar; depois do passo 19, recoloque o domínio
      em Settings → Pages.
15. **HTTPS sempre.** SSL/TLS → Edge Certificates → ligue **Always Use HTTPS**. Teste:
    `http://www.institutorocca.com.br/` vira `https://`.
16. **Endereço sem www.** Rules → Overview → Create rule → **Redirect Rule** → Wildcard pattern:
    Request URL `http*://institutorocca.com.br/*` → Target URL `https://www.institutorocca.com.br/${2}`, 301,
    Preserve query string ligado. Depois, **primeiro crie** `A @ 192.0.2.0` como **Proxied** (nuvem laranja) e
    **só então** apague os quatro A do GitHub; assim o domínio nunca fica sem endereço.
    - Voltar atrás: recrie os quatro A do GitHub como DNS only, apague o 192.0.2.0 e desative a regra.
17. **A troca no repositório.** Settings → Secrets and variables → Actions → aba Variables → New repository
    variable → `HOSPEDAGEM` = `cloudflare`. A partir do próximo push, o `pages.yml` para de publicar e o
    `cloudflare.yml` passa a avisar o Bing das páginas que mudaram.
18. **Conferir os robôs.** `https://www.institutorocca.com.br/robots.txt` igual ao do repositório (3 linhas,
    `Allow: /`). Se no passo 9 Training ficou em "Disallow AI Training", o Cloudflare acrescenta linhas para os
    robôs de treino (GPTBot, ClaudeBot…); o `Allow: /` para os demais tem que continuar. No Bing Webmaster Tools, Inspeção de URL na home: o Bing consegue buscar a página. No
    Cloudflare, AI Crawl Control → Crawlers: Allow para OAI-SearchBot, ChatGPT-User e Bingbot.

## 5. Limpeza (48 h depois, com tudo funcionando)

19. GitHub → Settings → Pages: remova o domínio e despublique (Unpublish site). **Não apague** o TXT
    `_github-pages-challenge-danzchohfi` do DNS: ele mantém o domínio verificado e impede que outra conta do
    GitHub use o endereço. Com `HOSPEDAGEM = cloudflare` o `pages.yml` não roda mais e pode ser apagado depois.
20. **DNSSEC de volta:** Cloudflare → DNS → Settings → Enable DNSSEC. No Registro.br, em Alterar servidores DNS →
    DNSSEC, cole o **Key Tag** e o **Digest** que o Cloudflare mostra; algoritmo 13, tipo de digest 2 (SHA-256).
21. **E-mail fora do spam** (hoje não existe nada disso): no DNS do Cloudflare, como DNS only,
    `TXT @ v=spf1 include:_spf.google.com ~all`, a chave DKIM gerada no Admin do Google Workspace (Gmail →
    Autenticar e-mail, registro `google._domainkey`) e `TXT _dmarc v=DMARC1; p=none`.
22. Se quiser o repositório privado: depois do passo 19, o GitHub Pages não é mais necessário (nem o GitHub Pro
    para ele).

## Depois da migração

- Publicar: push na branch de produção (o workflow monta e envia). Voltar uma versão: Workers & Pages →
  institutorocca → Deployments → Rollback. O próximo push publica de novo por cima; para desfazer de vez,
  reverta o commit.
- Diferenças em relação ao GitHub Pages, todas sem efeito nos buscadores (sitemap, canonical e links internos já
  usam o endereço com barra no fim): `/contato` e `/contato/index.html` redirecionam para `/contato/` com 307 (o
  GitHub usava 301 e servia o `index.html` direto); um endereço que não existe devolve 404 sem página.
- Verificação de domínio do Google (Search Console, Google Ads): registro TXT no DNS do Cloudflare.

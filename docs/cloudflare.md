# Migração para o Cloudflare

O site sai do GitHub Pages e vai para o Cloudflare, no plano gratuito, que permite uso comercial. O formato é
um **Worker só com arquivos estáticos**: é o caminho que o Cloudflare recomenda hoje para sites novos (o
Cloudflare Pages continua existindo, mas os projetos novos vão para Workers). Requisições de arquivos estáticos
não são cobradas.

Quem publica é o próprio repositório: `.github/workflows/cloudflare.yml` monta o site
(`node scripts/publicar.mjs`) e envia a pasta `_site/` com um token. O Cloudflare nunca acessa o repositório,
que pode (e deve) ficar privado.

A ordem abaixo não derruba o site em momento nenhum. O GitHub Pages continua no ar como reserva até a etapa 5.

> **Repositório privado já, antes da migração?** No plano gratuito do GitHub, o Pages só funciona com
> repositório público. Com o **GitHub Pro** (cerca de US$ 4 por mês, em Settings → Billing and plans) o Pages
> funciona com repositório privado: dá para fechar o repositório hoje e cancelar o Pro depois da etapa 5.

## Dados do domínio hoje (13/10/2026)

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
| DS | institutorocca.com.br | DNSSEC ativo (obrigatório no DNS do Registro.br) |

Confira no painel do Registro.br antes de começar: ele é a fonte da verdade. Se houver registro que não está
aqui, ele também precisa ir para o Cloudflare.

## 0. Repositório (agência)

1. Juntar o PR desta migração na branch padrão com **Rebase and merge**. Na hora, o GitHub Pages republica o
   site já limpo (sem os arquivos internos e sem os comentários).
2. Avançar a `main` até a branch padrão: `git push origin origin/claude/instituto-rocca-home-concepts-fzadlo:main`
   (só avanço, nada se perde). Em Settings → General → Default branch, escolher `main`. A partir daqui, a `main`
   é a produção: o workflow do Cloudflare só publica a partir dela.

## 1. Conta e primeira publicação (nada muda para o visitante)

3. **Conta do Cloudflare.** O recomendado é a conta ficar no nome do Instituto: criada com um e-mail
   @institutorocca.com.br, com a Vitamina convidada em Manage Account → Members. O domínio já é do Instituto,
   os termos do Cloudflare pedem que a conta seja de quem usa o serviço, e numa troca de fornecedor nada precisa
   migrar. Papel da Vitamina: **Super Administrator** (é quem pode criar o token da conta no passo 5). Se o
   Instituto preferir dar só **Administrator**, o passo 5 é feito pelo Instituto.
4. **Subdomínio workers.dev.** Em Workers & Pages, defina o subdomínio de teste, por exemplo `institutorocca`
   (ele aparece no endereço de teste: nada de nome da agência ou de pessoa). Sem isso a primeira publicação
   falha com "You need to register a workers.dev subdomain".
5. **Token para o GitHub.** Manage Account → **Account API Tokens** → Create Token → modelo
   **Edit Cloudflare Workers** (se não aparecer na lista, procure em Permission policies). Em Account Resources,
   a conta do Instituto; em Zone Resources, "All zones from an account" → a conta do Instituto. Por ser da conta,
   o token continua valendo se alguém sair. Copie: ele aparece uma vez só.
6. **Segredos no GitHub.** No repositório: Settings → Secrets and variables → Actions → New repository secret:
   - `CLOUDFLARE_API_TOKEN`: o token do passo 5;
   - `CLOUDFLARE_ACCOUNT_ID`: em Workers & Pages, quadro Account Details → Account ID (botão de copiar); ou
     Ctrl/Cmd+K, "Copy account ID".
7. **Publicar.** Actions → Publicar no Cloudflare → Run workflow (branch `main`). O Worker
   `institutorocca-site` é criado na primeira vez; daí em diante, todo push na `main` publica sozinho.
8. **Conferir em** `https://institutorocca-site.<subdomínio>.workers.dev` (se aparecer erro 523 logo depois da
   primeira publicação, espere um ou dois minutos): todas as páginas, um endereço que não existe (abre a página
   "não encontrada"), um endereço antigo como `/site/contato/` (vai para `/contato/`), fontes, mapa e WhatsApp.

## 2. DNS no Cloudflare (ainda nada muda)

9. Domains → **Onboard a domain** (em telas antigas, Add a domain) → `institutorocca.com.br` → plano **Free**.
10. Na revisão, compare registro por registro com a tabela acima (menos NS e DS): **adicione** os que faltarem
    (o TXT `_github-pages-challenge-danzchohfi` e os TXT do Google costumam faltar) e **apague** os que não
    estão na tabela. Deixe **todos como DNS only** (nuvem cinza; o Cloudflare começa com a nuvem laranja ligada)
    e TTL de 1 minuto no A e no `www`. Assim o Cloudflare responde exatamente como o Registro.br, e a troca do
    passo 12 não muda nada para o site nem para o e-mail.
11. Anote os dois nameservers que o Cloudflare indicar (`algo.ns.cloudflare.com`).

## 3. Troca dos nameservers no Registro.br

No DNS do Registro.br o DNSSEC é obrigatório: não existe opção para desligar só o DNSSEC. Quem cuida disso é o
próprio Registro.br, na troca.

12. No Registro.br, abra o domínio → **Alterar servidores DNS** (deixar de usar o DNS do Registro.br) e informe
    os dois servidores do passo 11. **Deixe os campos de DNSSEC (DS) em branco.** O Registro.br primeiro retira o
    DNSSEC e só publica os servidores novos depois de pelo menos 2 horas; a transição completa leva até 3 horas.
    Nesse tempo site e e-mail continuam respondendo normalmente, então não é preciso escolher horário.
    - Se o Registro.br recusar a troca dizendo que o servidor não tem autoridade, confira se o domínio já foi
      adicionado no Cloudflare (passos 9 a 11).
    - Depois de sair do DNS do Registro.br, voltar para ele leva pelo menos 4 horas. Se algo der errado, corrija
      no DNS do Cloudflare, que tem os mesmos registros.
13. Espere o Cloudflare mostrar o domínio como **Active** (chega um e-mail; pode levar até 24 h) e o certificado
    em SSL/TLS → Edge Certificates como **Active**.
14. Teste o e-mail do Instituto: mande e receba uma mensagem.

## 4. Site no Cloudflare

15. **www.** Em horário de pouco movimento, com as duas abas abertas antes de começar: no DNS do Cloudflare,
    apague o CNAME `www` e, logo em seguida, no Worker `institutorocca-site` → Settings → Domains & Routes → Add →
    **Custom domain** → `www.institutorocca.com.br`. São poucos segundos de troca.
    - Conferir: `https://www.institutorocca.com.br/cdn-cgi/trace` mostra um texto do Cloudflare.
    - Voltar atrás: apague o Custom domain e recrie o CNAME `www` → `danzchohfi.github.io` como **DNS only**
      (nuvem cinza).
16. **HTTPS sempre.** SSL/TLS → Edge Certificates → ligue **Always Use HTTPS**. Teste:
    `http://www.institutorocca.com.br/` vira `https://`.
17. **Endereço sem www.** Rules → Overview → Create rule → **Redirect Rule** → Wildcard pattern:
    Request URL `http*://institutorocca.com.br/*` → Target URL `https://www.institutorocca.com.br/${2}`, 301,
    Preserve query string ligado. (O modelo pronto "Redirect from root to WWW" só cobre https.)
    Depois, **primeiro crie** `A @ 192.0.2.1` como **Proxied** (nuvem laranja) e **só então** apague os quatro A
    do GitHub; assim o domínio nunca fica sem endereço.
    - Voltar atrás: recrie os quatro A do GitHub como DNS only, apague o 192.0.2.1 e desative a regra.
18. Avise a agência para trocar `workers_dev` para `false` em `wrangler.jsonc` (o endereço de teste sai do ar).

## 5. Limpeza (48 h depois, com tudo funcionando)

19. GitHub → Settings → Pages: remova o domínio e desative o Pages. A agência apaga
    `.github/workflows/pages.yml`. **Não apague** o TXT `_github-pages-challenge-danzchohfi` do DNS: ele mantém o
    domínio verificado e impede que outra conta do GitHub use o endereço.
20. **Repositório privado:** Settings → General → Danger Zone → Change visibility → Private (se ainda não estiver).
21. **Branches:** apague as branches antigas (página Branches) e ligue "Automatically delete head branches"
    (Settings → General → Pull Requests).
22. **DNSSEC de volta:** Cloudflare → DNS → Settings → Enable DNSSEC. No Registro.br, em Alterar servidores DNS →
    DNSSEC, cole o **Key Tag** (número curto) e o **Digest** (texto longo) que o Cloudflare mostra; algoritmo 13,
    tipo de digest 2 (SHA-256). O Registro.br confere na hora, e o Cloudflare passa a mostrar "Success" depois.
23. Recomendado, fora desta migração: SPF, DKIM e DMARC do e-mail (hoje não existem; ajudam a não cair no
    spam): `v=spf1 include:_spf.google.com ~all`, a chave DKIM gerada no Admin do Google Workspace e `_dmarc` com
    `v=DMARC1; p=none`.

## Depois da migração

- Publicar: push na `main` (o workflow monta, confere e envia). Voltar uma versão: Workers & Pages →
  institutorocca-site → Deployments → ⋯ → Rollback. O próximo push na `main` publica de novo por cima; para
  desfazer de vez, a agência reverte o commit.
- Google Tag Manager: o ID entra em `GTM_ID`, em `src/site/config.mjs`, e o site é gerado de novo
  (`node scripts/site.mjs`). As tags do Google Ads entram pelo painel do GTM.
- Verificação de domínio do Google (Search Console, Google Ads): registro TXT no DNS do Cloudflare.

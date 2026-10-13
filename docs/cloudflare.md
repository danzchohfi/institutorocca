# Migração para o Cloudflare

O site sai do GitHub Pages e vai para o Cloudflare, no plano gratuito, que permite uso comercial. O formato é
um **Worker só com arquivos estáticos**: é o caminho que o Cloudflare recomenda hoje para sites novos, e o
Pages fica em manutenção. Requisições de arquivos estáticos não são cobradas.

Quem publica é o próprio repositório: `.github/workflows/cloudflare.yml` monta o site
(`node scripts/publicar.mjs`) e envia a pasta `_site/` com um token. O Cloudflare nunca acessa o repositório,
que pode (e deve) ficar privado.

A ordem abaixo não derruba o site em momento nenhum. O GitHub Pages continua no ar como reserva até o fim.

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
| DS | institutorocca.com.br | **DNSSEC ativo** (20070 13 2 2308EE53…) |

Confira no painel do Registro.br antes de começar: ele é a fonte da verdade. Se houver registro que não está
aqui, ele também precisa ir para o Cloudflare.

## 1. Conta e primeira publicação (nada muda para o visitante)

1. **Conta do Cloudflare.** O recomendado é a conta ficar no nome do Instituto: criada com um e-mail
   @institutorocca.com.br, com a Vitamina convidada como **Administrator** (Manage Account → Members). O domínio
   já é do Instituto, os termos do Cloudflare pedem que a conta seja de quem usa o serviço, e numa troca de
   fornecedor nada precisa migrar. Uma conta da Vitamina também funciona.
2. **Subdomínio workers.dev.** Em Workers & Pages, aceite o subdomínio que o Cloudflare propõe (ex.:
   `vitamina.workers.dev`). É o endereço de teste antes da troca do domínio.
3. **Token para o GitHub.** My Profile (ou Manage Account) → API Tokens → Create Token → modelo
   **Edit Cloudflare Workers**, restrito à conta do Instituto. Copie o token; ele aparece uma vez só.
4. **Segredos no GitHub.** No repositório: Settings → Secrets and variables → Actions → New repository secret:
   - `CLOUDFLARE_API_TOKEN`: o token do passo 3;
   - `CLOUDFLARE_ACCOUNT_ID`: o Account ID (aparece na página inicial da conta, na coluna da direita).
5. **Publicar.** Com o código na `main`, um push publica sozinho; ou Actions → Publicar no Cloudflare →
   Run workflow. O Worker `institutorocca-site` é criado na primeira vez.
6. **Conferir em** `https://institutorocca-site.<subdomínio>.workers.dev`: todas as páginas, um endereço que não
   existe (deve abrir a página "não encontrada"), um endereço antigo como `/site/contato/` (deve ir para
   `/contato/`), fontes, mapa e WhatsApp.

## 2. DNS no Cloudflare (ainda nada muda)

7. **Add a domain** → `institutorocca.com.br` → plano **Free**.
8. Na revisão dos registros, deixe exatamente a tabela acima (menos NS e DS), **todos como "DNS only"
   (nuvem cinza)** e TTL de 1 minuto no A e no `www`. Apague o que o Cloudflare tiver inventado. Nesse
   momento o Cloudflare responde igual ao Registro.br, então a troca do passo 10 não muda nada para o site
   nem para o e-mail.
9. Anote os dois nameservers que o Cloudflare indicar (`algo.ns.cloudflare.com`).

## 3. Troca dos nameservers no Registro.br (o passo delicado)

O domínio tem **DNSSEC ativo**. Se os nameservers mudarem com a assinatura antiga ainda valendo, provedores que
validam DNSSEC (Google, Cloudflare, muitas operadoras) deixam de achar o site **e o e-mail**.

10. No Registro.br, se der para **desligar o DNSSEC** mantendo o DNS do Registro.br, desligue e espere
    **2 horas**. Depois troque os servidores DNS para os dois do Cloudflare, sem preencher DS.
    Se o painel só retirar o DNSSEC junto com a troca, faça a troca **à noite ou no fim de semana**: por até
    cerca de uma hora alguns provedores podem não resolver o domínio. E-mails nesse intervalo atrasam, mas não
    se perdem (os servidores de envio tentam de novo).
11. Espere o Cloudflare mostrar o domínio como **Active** (chega um e-mail; pode levar até 24 h) e o
    certificado em SSL/TLS → Edge Certificates como **Active**.
12. Teste o e-mail do Instituto: mande e receba uma mensagem.

## 4. Site no Cloudflare

13. **www.** No DNS do Cloudflare, apague o CNAME `www` e, logo em seguida, no Worker `institutorocca-site` →
    Settings → Domains & Routes → Add → **Custom domain** → `www.institutorocca.com.br`. São poucos segundos
    de troca. Para voltar atrás: apague o Custom domain e recrie o CNAME `www` → `danzchohfi.github.io`.
    Conferir: `https://www.institutorocca.com.br/` responde com `server: cloudflare`.
14. **Endereço sem www.** Rules → Redirect Rules → modelo **Redirect from root to WWW** (ou uma Single
    Redirect com curinga: `http*://institutorocca.com.br/*` → `https://www.institutorocca.com.br/${2}`, 301,
    mantendo a query string).
    Depois troque os quatro registros A do GitHub por um só: `A @ 192.0.2.1`, **Proxied** (nuvem laranja).
    O redirecionamento só funciona com a nuvem laranja.
15. Avise a agência para trocar `workers_dev` para `false` em `wrangler.jsonc` (o endereço de teste sai do ar).

## 5. Limpeza (48 h depois, com tudo funcionando)

16. GitHub → Settings → Pages: remova o domínio e desative o Pages. A agência apaga
    `.github/workflows/pages.yml`.
17. **Repositório privado:** Settings → General → Danger Zone → Change visibility → Private. Só agora: no plano
    gratuito, o GitHub Pages não funciona com repositório privado.
18. **Branches:** a agência avança a `main` até a branch padrão atual
    (`git push origin origin/claude/instituto-rocca-home-concepts-fzadlo:main`); depois, em Settings → General,
    `main` vira a Default branch, as branches antigas são apagadas (página Branches) e "Automatically delete
    head branches" fica ligado (seção Pull Requests).
19. **DNSSEC de volta:** Cloudflare → DNS → Settings → Enable DNSSEC; copie o registro DS para o campo de
    DNSSEC no Registro.br.
20. Recomendado, fora desta migração: SPF, DKIM e DMARC do e-mail (hoje não existem; ajudam a não cair no
    spam): `v=spf1 include:_spf.google.com ~all`, a chave DKIM gerada no Admin do Google Workspace e
    `_dmarc` com `v=DMARC1; p=none`.

## Depois da migração

- Publicar: push na `main` (o workflow monta, confere e envia). Voltar uma versão: Workers & Pages →
  institutorocca-site → Deployments → Rollback.
- Google Tag Manager: o ID entra em `GTM_ID`, em `src/site/config.mjs`, e o site é gerado de novo
  (`node scripts/site.mjs`). As tags do Google Ads entram pelo painel do GTM.
- Verificação de domínio do Google (Search Console, Google Ads): registro TXT no DNS do Cloudflare.

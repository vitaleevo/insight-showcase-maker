# Almafrans — correção de indexação

Data: 21 de outubro de 2026.
Domínio principal existente na Vercel: `https://www.almafrans.ao`.

## Evidências em produção antes da correção

- A página inicial responde HTTP 200, mas declara `https://almafrans.com/` como canonical.
- `robots.txt` permite rastreamento; não anuncia um sitemap.
- `/sitemap.xml` responde HTTP 404.
- A abertura direta de `/product/colete-salva-vidas`, `/service/balsa-salva-vidas`, `/sector/maritimo` e `/calcado-seguranca` responde HTTP 404.
- A Vercel tem o domínio `www` ligado à produção e um redirecionamento temporário 307 do domínio sem `www`.
- A conta Google aberta não mostra uma propriedade Almafrans verificada. Sem essa propriedade, não foi possível consultar o motivo de exclusão atribuído pelo Google.

## Alteração preparada

- Canonical da página inicial corrigido para o domínio `.ao` com `www`.
- Metadados específicos e um ficheiro HTML por URL conhecida, gerados no build a partir dos dados existentes de produtos, serviços e sectores.
- Sitemap com 28 páginas e referência no `robots.txt`, sem datas de alteração inventadas.
- Configuração Vercel `cleanUrls` para servir os ficheiros de detalhe sem extensão; URLs desconhecidos continuam com HTTP 404, sem reescrita global para a página inicial.
- Atualização de título, descrição, canonical e partilha social durante a navegação React.
- Página de erro com `noindex` e sem canonical de uma página válida.

O conteúdo visual continua a ser renderizado pelo React no navegador. Os ficheiros gerados contêm metadados estáticos; esta alteração não constitui renderização completa do conteúdo no servidor.

O PR #1 foi aprovado pelo proprietário e integrado em `main` no commit `72e353d247efd2076baea403e75cb39554bbbcb0`. A publicação Vercel concluiu com sucesso. O redirecionamento para `www` foi alterado para permanente 308. O proprietário também confirmou `info@almafrans.ao` como email de contacto, substituindo o endereço `.com` no cabeçalho, contactos e rodapé.

## Validação local

- `npm ci --no-audit --no-fund` concluído.
- `npm run build` concluído, com avisos existentes de compatibilidade Vite/SWC, Browserslist e dimensão do bundle.
- `npm run test:seo`: dois testes passaram, verificando todas as 28 URLs, canonical único e correto, títulos distintos, descrições, assets e exclusão de erros do índice.
- `npm run lint`: zero erros e sete avisos nos componentes UI existentes.
- TypeScript: `tsconfig.app.json` e `tsconfig.node.json` verificados sem erros.
- HTTP local: produto, serviço, sector e calçado responderam 200 com canonical correspondente.
- Navegador: página inicial e navegação para produto verificadas; um único canonical e metadados atualizados.

## Publicação e confirmação no Google

1. Rever e integrar a alteração na branch `main`, que aciona a publicação de produção na Vercel.
2. Confirmar HTTP 200 e os metadados das 28 páginas no domínio final; confirmar HTTP 404 para URLs inexistentes.
3. Alterar o redirecionamento do domínio sem `www` de temporário 307 para permanente 308, preservando o caminho.
4. Verificar a propriedade `almafrans.ao` no Google Search Console na conta escolhida pelo proprietário.
5. Submeter `https://www.almafrans.ao/sitemap.xml`, testar a URL publicada e solicitar indexação da página inicial.

O canonical incorreto e os 404 são problemas técnicos confirmados. O motivo exato de não indexação só pode ser confirmado na inspeção de URLs do Search Console. A correção e o pedido de rastreamento não garantem indexação ou uma posição específica.

## Limites da revisão

Revisão focada em indexação, entrega HTTP e metadados. Não foi realizada auditoria completa de UX, UI, acessibilidade, conversão ou Core Web Vitals; não foram atribuídas pontuações a dimensões não medidas.

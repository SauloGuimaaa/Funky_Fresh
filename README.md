# Funky Fresh — Estrutura Base Front-End

Estrutura inicial de landing page/e-commerce institucional feita do zero com HTML, CSS e JS, pronta para receber copy e imagens finais.

## O que já está pronto
- Layout responsivo completo com seções comuns (hero, coleções, destaque, sobre, contato e rodapé).
- Placeholders de imagem em `assets/placeholders`.
- Espaços de copy marcados no HTML com o padrão `[COPY • ...]`.
- Template para copy em `content/copy-template.md`.

## Estrutura
- `index.html`: estrutura de conteúdo e placeholders de copy.
- `styles/tokens.css`: design tokens (cores, espaçamentos, radius etc).
- `styles/main.css`: estilos globais e responsividade.
- `scripts/main.js`: interação simples para menu mobile.
- `assets/placeholders/*.svg`: imagens temporárias para substituição.

## Como rodar localmente
```bash
python3 -m http.server 4173
```
Depois abra: `http://localhost:4173`

## Próximo passo
Quando você enviar a copy e as imagens, eu substituo diretamente os placeholders mantendo a estrutura e refinando o visual final.

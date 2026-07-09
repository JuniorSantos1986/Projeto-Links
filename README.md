# Portal de Planilhas

Projeto estatico para centralizar o acesso as planilhas de monitoramento do SGC e do SIPLAC.

## Estrutura

- `index.html`: pagina inicial.
- `pages/sgc.html`: pagina de planilhas SGC.
- `pages/siplac.html`: pagina de planilhas SIPLAC.
- `src/css/styles.css`: estilos globais.
- `src/js/menu.js`: comportamento do dropdown de menu.
- `src/js/index.js`: comportamento da lista dinamica e modal.

## Boas praticas aplicadas

- Navegacao organizada em pasta `pages` para separar a home das telas internas.
- Caminhos relativos padronizados (`../src/...`) nas paginas internas.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Eventos JavaScript registrados com `addEventListener`.
- Validacao de URL para os links adicionados via modal.
- Estado salvo em `localStorage` com tratamento de erro de leitura.

## Variacoes de gradiente do header

- Tema atual: `theme-soft` (azul mais suave).
- Opcao alternativa: `theme-vibrant` (azul mais intenso).

Para trocar, altere a classe do `body` em cada pagina:

- `class="theme-soft"` ou `class="theme-vibrant"`

## Como abrir

Abra o arquivo `index.html` no navegador.

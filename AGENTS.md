# AGENTS.md

## Objetivo

Evoluir o MatShow como um laboratório matemático interativo, estático, acessível e adequado ao Ensino Fundamental 1. Não adicionar conteúdo curricular sem registrar a fonte e uma especificação.

## Antes de implementar

1. Leia `docs/README.md` e a especificação correspondente em `docs/specs/`.
2. Confira a pesquisa em `docs/pesquisa/` e registre dúvidas ou lacunas.
3. Se a atividade ainda não tiver especificação aprovada, crie-a a partir de `docs/specs/TEMPLATE.md` antes do código.
4. Mantenha o escopo de uma atividade pequeno e independente.

## Arquitetura

- Componentes compartilhados ficam em `src/components/`.
- A estrutura de produto espelha a navegação: `src/years/<ano>/<area>/<atividade>/`.
- O menu de cada ano fica em `src/years/<ano>/menu.ts`.
- Cada atividade concentra interface, regras, desafios e testes no próprio diretório.
- Regras matemáticas devem ser funções puras separadas da interface e cobertas por testes.
- Não adicionar backend, autenticação, rastreamento ou armazenamento de dados pessoais sem uma decisão arquitetural aprovada.
- Evitar dependências externas quando HTML, CSS, SVG ou Canvas resolverem bem.

## Experiência e acessibilidade

- Projetar primeiro para TV/projetor e interação por toque ou mouse.
- Manter alvos de toque grandes, foco visível, contraste alto e texto legível à distância.
- Não depender somente de cor para comunicar estado.
- Respeitar `prefers-reduced-motion` e usar HTML semântico e rótulos acessíveis.
- Não substituir exploração visual por longos blocos de explicação.

## Qualidade

Antes de concluir, executar:

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm format:check
```

Atualize a especificação, a pesquisa e o planejamento quando uma decisão mudar. Não marque uma atividade como disponível até seus critérios de aceite serem verificados.

## Git

- Trabalhe em branch separada da `main`.
- Faça commits pequenos e descritivos em português ou inglês consistente.
- Não versionar `node_modules/` nem `dist/`.
- A publicação acontece somente a partir da `main` pelo workflow do GitHub Pages.

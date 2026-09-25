# MatShow

Laboratório de Matemática visual e interativo para os anos iniciais do Ensino Fundamental (1º ao 5º ano). O projeto foi pensado para uso por professores em uma TV ou projetor, mas funciona sem autenticação e também pode ser explorado pelos alunos em casa.

## Estado atual

- Estrutura-base da aplicação e navegação por unidades temáticas.
- Seletor do 1º ao 5º ano, com menu e página inicial próprios por ano.
- Cobertura interativa inicial das 25 habilidades de Matemática do 5º ano da BNCC.
- Laboratórios de números, álgebra, geometria, medidas, probabilidade e estatística.
- Caneta de apresentação e modo de tela cheia.
- Atividades do 1º ao 4º ano sinalizadas como planejadas até a pesquisa curricular de cada ano.

## Tecnologias

- React e TypeScript para componentes e regras isoladas.
- Vite para desenvolvimento e geração do site estático.
- CSS modularizado por responsabilidade, sem backend e sem autenticação.
- Vitest para testes das regras matemáticas.
- GitHub Actions e GitHub Pages para publicação.

## Desenvolvimento local

Requisitos: Node.js 22 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

Verificações antes de enviar mudanças:

```bash
pnpm typecheck
pnpm test
pnpm build
```

O resultado de produção é criado em `dist/`.

## Organização

```text
src/
  components/       # elementos reutilizáveis, layout e ferramentas
  years/
    1/ ... 4/       # menu e futura implementação de cada ano
    5/
      numbers/      # área do menu lateral
        fractions/  # uma habilidade/aba, com interface e desafios
      algebra/
      geometry/
      measures/
      statistics/
  styles/           # estilos globais e tokens visuais
  types/            # contratos compartilhados
docs/
  pesquisa/         # fontes e sínteses curriculares
  atividades/       # banco de propostas pedagógicas
  specs/            # especificações aprovadas e em elaboração
  planejamento/     # roadmap e decisões de implementação
```

Consulte [`docs/README.md`](docs/README.md) para o fluxo de Spec Driven Development e [`AGENTS.md`](AGENTS.md) para as regras de contribuição assistida.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente a pasta `dist/` após um push na `main`. No GitHub, abra **Settings → Pages** e selecione **GitHub Actions** como fonte. Pull requests apenas validam testes e build; não publicam.

## Princípios do produto

- Interação e experimentação antes de explicações longas.
- Leitura confortável à distância, botões grandes e alto contraste.
- Conteúdo respaldado por pesquisa curricular documentada.
- Sem cadastro, coleta de dados ou dependência de backend.
- Cada atividade deve funcionar de forma independente e ser fácil de substituir.

# Navegação por ano e cobertura do 5º ano

**Status:** implementado  
**Última atualização:** 2026-09-25

## Objetivo

Permitir alternar do 1º ao 5º ano sem recarregar a página, fazendo o menu e a página inicial refletirem o ano selecionado. Entregar laboratórios para todas as habilidades de Matemática do 5º ano e preparar, sem declarar cobertura, os demais anos.

## Regras

- O 5º ano é a seleção inicial para preservar a experiência existente.
- A troca de ano retorna à página inicial e substitui o menu.
- Os anos 1º–4º exibem arquitetura e itens planejados, não atividades falsamente concluídas.
- O 5º ano agrupa atividades nas cinco unidades temáticas da BNCC.
- Cada laboratório exibe os códigos das habilidades relacionadas.
- O código espelha a navegação em `years/<ano>/<área>/<atividade>`; cada atividade mantém seu próprio banco de desafios.
- Cada aba do 5º ano oferece pelo menos cinco desafios com explicação.

## Critérios de aceite

- [x] É possível selecionar qualquer ano de 1 a 5.
- [x] Título, menu e cartões mudam com o ano.
- [x] A aparência anterior do 5º ano permanece reconhecível.
- [x] EF05MA01–EF05MA25 estão mapeadas a atividades interativas.
- [x] As atividades funcionam sem backend, login ou dados pessoais.
- [ ] Revisão pedagógica por professor do 5º ano.
- [ ] Validação em projetor/TV real e dispositivo de toque.

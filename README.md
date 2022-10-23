# Projeto Trybe Futebol Clube
O TFC é um site informativo sobre partidas e classificações de futebol.
Nesse projeto, foi preciso construir um back-end que já estava dockerizado utilizando modelagem de dados através do Sequelize, respeitando as regras de negócio necessárias no projeto, para que a API consiga ser consumida pelo front-end.
Com tudo isso foi preciso fazer os seguintes requisitos:
   - Migration e Model para users, teams e matches
   - POST /login com sua validações
   - GET /matches com filtragens
   - POST /matches com validações
   - PATCH /matches/:id/finish e /matches/:id
   - GET /leaderboard/home
   - GET /leaderboard/away
   - Realizar testes da aplicação

---
## Tecnologias utilizadas
 - Node.js
 - Express
 - Sequelize
 - Docker
 - Testes com o Mocha
 - Arquitetura de Software
    - Model
    - Service
    - Controller

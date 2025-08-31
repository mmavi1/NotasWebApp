  ```mermaid
  classDiagram
  class Usuario {
    +id: int <<PK>>
    nome: varchar
    +email: varchar <<unique, not null>>
    +password: varchar <<not null>>
    email_verificado: boolean = false
  }

  class FotoPerfil {
    +id: int <<PK>>
    +usuario_id: int <<FK, unique>>
    imagem: blob
  }

  class Item {
    +id: int <<PK>>
    descricao: text
    data_criacao: datetime <<not null>>
    data_limite: datetime <<nullable>>
    +usuario_id: int <<FK>>
  }

  Usuario "1" --> "0..1" FotoPerfil : possui
  Usuario "1" --> "0..*" Item : cria
  ```

**INSTITUTO FEDERAL DE ALAGOAS - IFAL / CAMPUS MACEIÓ**

**Curso Técnico em Desenvolvimento de Sistemas**  
**Disciplina de Programação Orientada a Objetos**

*Monitor Levy Abreu*  
*lac4@aluno.ifal.edu.br*

# Atividade de fixação - Modificadores de Acesso

1. Crie uma classe chamada `Pessoa` com os seguintes atributos:
    - `nome`: o primeiro nome da pessoa.
    - `sobrenome`: o sobrenome da pessoa.
    - `idade`: a idade da pessoa.
2. Implemente o construtor da classe, inicializando todos os três atributos.
3. Altere as propriedades para que todas elas se tornem privadas.
4. Crie os **setters** e os **getters** de todos os atributos.
5. Implemente um método **get** que retorne o nome completo da pessoa (`nome` e `sobrenome`). 
6. Implemente um método **set** que tome como parâmetro o nome completo de uma pessoa para alterar as propriedades de `nome` e `sobrenome`.  
    Ex.: `pessoa.setNomeCompleto("Levy Abreu");`  
    Nesse exemplo, as propriedades `nome` e `sobrenome` precisam ser alteradas para **Levy** e **Abreu**, respectivamente.
7. Para uma nova pessoa ser instanciada, ela precisa ter no mínimo 18 anos de idade. Modifique o método `set` do atributo **idade** para que essa restrição seja implementada no código.
8. Modifique também o **construtor** da classe, implementando o método `set` de **idade** nele.
9. Com base no conceito de atributos estáticos, crie uma propriedade estática privada chamada `listaDePessoas` e implemente seu método `get`.
10. Modifique o **construtor** da classe, de modo que sempre que um novo objeto for criado, ele seja adicionado na `listaDePessoas`.
11. Implemente um método `get` estático que retorne a média de idade de todas as pessoas que estão na `listaDePessoas`.

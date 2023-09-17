**INSTITUTO FEDERAL DE ALAGOAS - IFAL / CAMPUS MACEIÓ**<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Instituto_Federal_Marca_2015.svg/1200px-Instituto_Federal_Marca_2015.svg.png" style="zoom:7%; float:right;" />

**Curso Técnico em Desenvolvimento de Sistemas**  
**Disciplina de Programação Orientada a Objetos**

*Monitor Levy Abreu*  
*lac4@aluno.ifal.edu.br*

# Atividade de monitoria

### Modificadores de Acesso

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
    Nesse exemplo, `nome` e `sobrenome` precisam ser alterados para **Levy** e **Abreu**, respectivamente.
7. Implemente uma restrição no código onde uma pessoa precisa ter no mínimo **18 anos de idade**. Caso uma pessoa seja cadastrada com menos de 18 anos ou caso uma pessoa tenha sua idade alterada para uma valor menor do que 18, faça com que `idade` seja **nula**.
    - Ex.: `const pessoa = new Pessoa("Levy", "Abreu", 10);`  
      - Nesse exemplo, `idade` deve ser cadastrada como `null`.
    - Ex.: `pessoa.setIdade(10);`  
      - Nesse exemplo, `idade` deve ser alterada para `null`.
8.  Crie uma propriedade estática privada chamada `listaDePessoas` e implemente seu método `get`.
9.  Modifique o construtor da classe, fazendo com que sempre que um novo objeto for criado, ele seja adicionado na lista de pessoas.
10. Implemente um método `get` estático que retorne a média de idade de todas as pessoas que estão na lista de pessoas.

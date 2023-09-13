
# Atividade de fixação - modificadores de acesso

Considere a seguinte classe Pessoa:

```js
    class Pessoa {
        constructor(nome, sobrenome, idade) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
        }
    }
```

1. As propriedades "nome", "sobrenome" e "idade" são públicas. Altere o construtor da classe de modo que todos esses atributos sejam privados.
2. Agora que as propriedades são privadas, crie os setters e os getters delas.
3. Implemente um método get que retorne o nome completo da pessoa (nome e sobrenome).
4. Implemente um método set que toma como parâmetro o nome completo de uma pessoa para alterar as propriedades de nome e sobrenome.

`Ex.: pessoa.setNomeCompleto("Levy Abreu");`
Nesse exemplo, as propriedades "nome" e "sobrenome" precisam ser alteradas para "Levy" e "Abreu", respectivamente.

# 5. Para uma nova pessoa ser instanciada, ela precisa ter no mínimo 18 anos de idade. Modifique o método set do atributo "idade" para que essa restrição seja implementada no código.
# 6. Modifique também o construtor da classe, implementando o método set de idade nele.

# 7. Com base no conceito de atributos estáticos, crie uma propriedade estática privada chamada "listaDePessoas" e implemente seu método get.
# 8. Modifique o construtor da classe, de modo que sempre que um novo objeto for criado, ele seja adicionado na lista de pessoas.
# 9. Implemente um método get estático que retorne a média de idade de todas as pessoas que estão na lista de pessoas.

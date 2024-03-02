Como usar o transpiler:
$: ./jjr <codigo.py>


caso um arquivo não seja passado como argumento, o transpiler vai entrar
em um modo shell, que permite testar a conversão de algumas intruções
sem precisar criar um arquivo, esse modo é mais limitado pois não
pode criar blocos de codigo.

Tokens suportados pela análise léxica, incluindo os literais dos tipos 
de dados suportados e palavras reservadas: suporta tipos primitivos 
como strings, ints, floats, bools, None e funções embutidas como print, 
blocos de códigos suportados são if, elif, else e while, e também e(and) e ou(or).


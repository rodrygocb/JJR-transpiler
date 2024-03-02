# Exemplo de E(AND) e OU(OR), IF, ELSE, ELIF
# Verifica se uma pessoa é adulta (idade maior que 21) E tem uma assinatura ativa
idade = 5
assinatura_ativa = True

if idade > 21 and assinatura_ativa:
    print("Pode acessar conteúdo restrito")
elif idade > 70:
    print("Pode acessar conteúdo restrito²")
else:
    print("Acesso restrito")

idade = 16
assinatura_premium = True

# Verifica se a idade é maior que 18 OU o nome é "Maria"
if idade > 18 or assinatura_premium:
    print("Acesso permitido")
else:
    print("Acesso restrito")

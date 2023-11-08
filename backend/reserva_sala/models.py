from django.db import models



class CadastroPessoa(models.Model):
    cpf = models.BigIntegerField(primary_key=True)
    nome_comp = models.CharField(max_length=70)
    email = models.CharField(max_length=30)
    senha = models.CharField(max_length=30)
    endereco_cep = models.IntegerField()
    estado = models.CharField(max_length=2)
    cidade = models.CharField(max_length=60)
    nome_rua = models.CharField(max_length=100)
    nm_casa = models.IntegerField()

    def __str__(self) -> str:
        return self.cpf

class CadastroSala(models.Model):
    nome = models.CharField(max_length=70, primary_key=True)
    tipo = models.CharField(max_length=30)
    lugares = models.CharField(max_length=3)
    
class Reservas(models.Model):
    sala = models.ForeignKey(CadastroSala,on_delete=models.DO_NOTHING)
    data = models.DateField(null=True)
    # CPF do locatario
    locatario = models.BigIntegerField(primary_key=True)


# class Cadastro(models.Model):
#     nome_pessoa = models.CharField(max_length=100)
#     data=models.DateField(null=True)
#     periodo=models.CharField(max_length=5)
#     estacao=models.ForeignKey(Estacoes,on_delete=models.DO_NOTHING)

#     def __str__(self) -> str:
#         return self.nome_pessoa
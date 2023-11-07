from rest_framework import serializers
from reserva_sala.models import CadastroPessoa
from reserva_sala.models import Reservas


class CadastroPessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CadastroPessoa
        fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservas
        fields = '__all__'

# class CadastroSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Cadastro
#         fields = '__all__'

# class PontuacaoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Pontuacao
#         fields = '__all__'
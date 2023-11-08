from django.contrib import admin
from .models import CadastroPessoa, CadastroSala, Reservas

# admin.site.register(CadastroPessoa)
# admin.site.register(CadastroSala)
# admin.site.register(Reservas)

@admin.register(CadastroPessoa)
class CadastroPessoaAdmin(admin.ModelAdmin):
    pass

@admin.register(CadastroSala)
class CadastroPessoaAdmin(admin.ModelAdmin):
    list_display = ('nome','tipo','lugares')

@admin.register(Reservas)
class CadastroPessoaAdmin(admin.ModelAdmin):
    pass
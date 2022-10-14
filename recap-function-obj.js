const agendamentos = [
    { nomePaciente: 'Alan Almeida', data: '14/10/2022', horaInicio: '20:15', horaFim: '20:45'},
    { nomePaciente: 'Pedro Sousa', data: '14/10/2022', horaInicio: '12:00', horaFim: '12:30'},
    { nomePaciente: 'Rafael Vinicius', data: '14/10/2022', horaInicio: '12:20', horaFim: '13:00'},
    { nomePaciente: 'Rangel Tomazilli', data: '14/10/2022', horaInicio: '15:25', horaFim: '15:55'},
]

// Crie uma factory function para gerar um agendamento
// Parâmetros: nome, sobrenome, data, horaInicio
// Retorno: { paciente, data, horaInicio, horaFim}
// Obs: um agendamento têm 30 minutos de duração
// Plus: criar uma classe que represente um Agendamento, com o construtor
// se comportando igual a factory function 


// Crie uma função para verificar se já existe um agendamento
// com a data e o horário de inicio passados pelo parâmetro
// Parâmetros: data, horaInicio
// Retorno: boolean(true/false)
// Plus: Caso tenha feito a classe Agendamento,
// replique essa função no formato de método

// Crie um namespace function que retorna funções de conversão do Real para outras moedas
// Parâmetro: valor
// Retorno: { paraDolar, paraEuro }
// Obs: 1 dolar === 5,30 reais   e   1 euro === 5,16 real

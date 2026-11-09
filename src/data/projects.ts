
export interface Skill {
  name: string
  detail: string
}

export interface Project {
  id: string
  semester: number
  period: string
  title: string
  tagline: string
  partner: string
  image: string
  imageAlt: string
  technologies: string[]
  about: string[]
  contributions: string[]
  hardSkills: Skill[]
  softSkills: Skill[]
  repo: string
}

export const projects: Project[] = [
  {
    id: 'smart-farming',
    semester: 1,
    period: '2024 · 1º semestre',
    title: 'Smart Farming',
    tagline: 'Automação da coleta e do tratamento de dados de uma estufa agrícola.',
    partner: 'Grupo I9 · Manufatura Avançada, Fatec SJC',
    image: 'smart_farm.gif',
    imageAlt: 'Demonstração do Smart Farming: dashboards com as leituras da estufa',
    technologies: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    about: [
      'Primeiro projeto integrador do curso, feito em parceria com o grupo I9, do curso de Manufatura Avançada da Fatec SJC. Os dados da estufa eram coletados e organizados à mão, um processo lento e sujeito a erros.',
      'Desenvolvemos uma aplicação web que importa esses dados, guarda tudo em banco e apresenta as leituras em dashboards. A interface foi pensada para que qualquer pessoa da equipe consiga consultar os dados, mesmo sem conhecimento técnico.',
    ],
    contributions: [
      'Participei do levantamento de requisitos e da definição da arquitetura da aplicação.',
      'Desenvolvi no backend, com Flask, e no frontend, com HTML, CSS e JavaScript.',
      'Criei a importação de planilhas Excel para o banco MySQL, a parte central da automação.',
      'Implementei funções de gerenciamento dos dados, como a exclusão das leituras de um dia específico.',
      'Resolvi conflitos de código no repositório para manter as entregas da equipe integradas.',
    ],
    hardSkills: [
      { name: 'Rotas e APIs com Flask', detail: 'Rotas que recebem, processam e devolvem os dados da estufa para as telas.' },
      { name: 'Manipulação de dados', detail: 'Leitura e tratamento das planilhas antes de gravar as informações no banco.' },
      { name: 'Modelagem de banco de dados', detail: 'Estruturação das tabelas MySQL que armazenam as leituras.' },
      { name: 'Visualização de dados', detail: 'Montagem dos dashboards que apresentam as leituras ao usuário.' },
      { name: 'Desenvolvimento web', detail: 'Construção das páginas com HTML, CSS e JavaScript.' },
    ],
    softSkills: [
      { name: 'Organização e gestão de tempo', detail: 'Primeiro projeto com sprints e prazos fixos: aprendi a dividir as tarefas para entregar em cada ciclo.' },
      { name: 'Autonomia', detail: 'Busquei por conta própria o que precisava para entregar a importação de planilhas.' },
      { name: 'Adaptabilidade', detail: 'Ajustei o que estava fazendo conforme os requisitos do cliente mudavam ao longo das sprints.' },
      { name: 'Resolução de conflitos', detail: 'Ao integrar o código da equipe, aprendi a conversar com cada pessoa para chegar à melhor versão.' },
    ],
    repo: 'https://github.com/BugBustersFatecSJC/Smart-farm',
  },
  {
    id: 'inv-sort',
    semester: 2,
    period: '2024 · 2º semestre',
    title: 'Inv.Sort',
    tagline: 'Sistema de controle de estoque com entradas, saídas e análise de tendências.',
    partner: 'Cliente interno · professor da Fatec SJC',
    image: 'inv.sort.png',
    imageAlt: 'Tela do Inv.Sort com a listagem de produtos do estoque',
    technologies: ['React', 'Express', 'Prisma', 'MySQL', 'Tailwind', 'AWS'],
    about: [
      'Segundo projeto integrador, com um professor da Fatec SJC no papel de cliente. A proposta era um sistema de controle de estoque que tornasse a gestão do inventário mais rápida e confiável.',
      'O Inv.Sort permite cadastrar produtos e categorias, registrar entradas e saídas e acompanhar tendências do estoque, reduzindo os erros do controle manual.',
    ],
    contributions: [
      'Participei da idealização do projeto e da escrita das User Stories.',
      'Atuei no backend e no frontend ao longo de todo o semestre.',
      'Desenvolvi o CRUD completo de produtos, categorias, unidades e fornecedores.',
      'Criei middlewares de validação e segurança para as rotas da API.',
      'Resolvi erros de integração entre o backend e o banco de dados.',
      'Implementei a edição de imagens, usada em toda a aplicação.',
    ],
    hardSkills: [
      { name: 'APIs com Express', detail: 'Rotas do CRUD e middlewares que validam cada requisição antes de chegar ao banco.' },
      { name: 'Banco de dados com Prisma', detail: 'Modelagem e ajustes no schema MySQL, além da integração com o ORM.' },
      { name: 'Controle de acesso', detail: 'Middlewares que protegem as rotas e garantem que só usuários autorizados façam alterações.' },
      { name: 'React e Tailwind', detail: 'Telas de cadastro e edição, incluindo o componente de edição de imagens.' },
      { name: 'Versionamento com Git', detail: 'Trabalho em branches e integração do código com o restante da equipe.' },
    ],
    softSkills: [
      { name: 'Comunicação', detail: 'Escrever User Stories exigiu traduzir as necessidades do cliente em tarefas claras para a equipe.' },
      { name: 'Proatividade', detail: 'Assumi a correção dos erros de integração quando eles travavam o andamento do projeto.' },
      { name: 'Entrega de resultados', detail: 'Mantive o foco em entregar funcionalidades completas a cada sprint.' },
      { name: 'Gestão de tempo', detail: 'Equilibrei as tarefas de backend e frontend dentro dos prazos de cada ciclo.' },
    ],
    repo: 'https://github.com/BugBustersFatecSJC/inv.sort',
  },
  {
    id: 'checkpoint',
    semester: 3,
    period: '2025 · 3º semestre',
    title: 'Checkpoint',
    tagline: 'Ponto eletrônico com controle de horas extras, férias, folgas e notificações.',
    partner: 'Parceiro acadêmico · Necto',
    image: 'checkpoint.png',
    imageAlt: 'Tela do Checkpoint com o registro de ponto do colaborador',
    technologies: ['Java', 'Spring Boot', 'React', 'Vite', 'Tailwind', 'MongoDB', 'MySQL', 'AWS'],
    about: [
      'Terceiro projeto integrador, desenvolvido com o parceiro acadêmico Necto. O objetivo era um sistema de ponto eletrônico para gerenciar colaboradores, férias, folgas e registros de jornada.',
      'Os colaboradores enviam solicitações que notificam os gestores, e todos acompanham o próprio histórico. A ideia era uma interface simples, com relatórios claros, que deixasse a rotina de RH mais eficiente.',
    ],
    contributions: [
      'Implementei no backend todo o fluxo de marcação de ponto.',
      'Desenvolvi a checagem dinâmica do saldo de horas extras de cada colaborador.',
      'Estruturei e desenvolvi o banco de dados não relacional em MongoDB.',
      'Criei as notificações de horas extras em tempo real.',
      'Ajudei a equipe a organizar a estrutura do repositório e a seguir boas práticas.',
      'Corrigi erros críticos e reorganizei arquivos do projeto.',
    ],
    hardSkills: [
      { name: 'Java com Spring Boot', detail: 'Serviços e rotas do registro de ponto e do cálculo de horas extras.' },
      { name: 'MongoDB e MySQL', detail: 'Uso dos dois modelos de banco, escolhendo o não relacional para os dados que mais se beneficiavam dele.' },
      { name: 'Notificações em tempo real', detail: 'Avisos de horas extras enviados assim que o saldo muda.' },
      { name: 'Componentização e boas práticas', detail: 'Organização do repositório em uma estrutura que o time inteiro conseguisse seguir.' },
      { name: 'Otimização de desempenho', detail: 'Atenção ao desempenho do sistema ao corrigir erros críticos e reorganizar o projeto.' },
    ],
    softSkills: [
      { name: 'Liderança técnica', detail: 'Orientei colegas na estrutura do projeto e nas boas práticas de código.' },
      { name: 'Autonomia e proatividade', detail: 'Assumi a parte mais central do backend, o registro de ponto, do início ao fim.' },
      { name: 'Trabalho em equipe', detail: 'Coordenei meu trabalho com o frontend para que as notificações chegassem corretamente às telas.' },
      { name: 'Resolução de problemas', detail: 'Investiguei e corrigi erros críticos que afetavam o restante da equipe.' },
    ],
    repo: 'https://github.com/FR0M-ZER0/checkpoint',
  },
]

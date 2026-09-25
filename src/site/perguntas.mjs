/* ============================================================================
   perguntas.mjs — o banco de respostas do site (uma entrada por vídeo/pergunta)
   ----------------------------------------------------------------------------
   Cada entrada vira uma página em site/conteudo/<slug>/ (node scripts/perguntas.mjs
   gera os templates em src/site/paginas/conteudo/; node scripts/site.mjs gera o HTML).
   Para publicar uma pergunta nova: acrescentar a entrada aqui, rodar os dois scripts
   e linkar a pergunta nas listas (Conteúdo, página do médico, especialidade).
   video: URL do post no Instagram, quando houver (entra no topo da página).
   ============================================================================ */
export const MEDICOS = {
  tulio: { nome: 'Dr. Túlio Bovo', slug: 'dr-tulio-bovo', frente: 'Emagrecimento · Lipedema · Sarcopenia', crm: 'CRM-SP 239756', foto: 'dr-tulio-bovo', foto_w: 1600, foto_h: 2400, fallback: 'retrato-tulio.svg', capa: 'tulio', artigo: 'o', trata: 'o médico' },
  breno: { nome: 'Dr. Breno Gondim', slug: 'dr-breno-gondim', frente: 'Nutrologia · Endocrinologia', crm: 'CRM-SP <span class="pendente">[PENDENTE]</span>', foto: 'dr-breno-gondim', foto_w: 1600, foto_h: 2400, fallback: 'retrato-breno.svg', capa: 'breno', artigo: 'o', trata: 'o médico' },
  ana: { nome: 'Dra. Ana Paula Bovo', slug: 'dra-ana-paula-bovo', frente: 'Dermatologia · Tricologia', crm: 'CRM-SP 259067', foto: 'dra-ana-paula-bovo-02', foto_w: 853, foto_h: 1280, fallback: 'retrato-ana-paula.svg', capa: 'ana', artigo: 'a', trata: 'a médica' },
};
export const ESPECIALIDADES = { nutrologia: 'Nutrologia', endocrinologia: 'Endocrinologia', dermatologia: 'Dermatologia' };
export const ASSUNTOS = {
  '01': 'Não é mais uma tentativa', '02': 'A causa tem nome e tem exame', '03': 'Não foi falta de disciplina',
  '04': 'A régua daqui é outra', '05': 'O homem que não se trata', '06': 'Fazer, e continuar parecendo você', '07': 'Pele é rotina, não procedimento',
};
export const PERGUNTAS = [
  {
    slug: "e-celulite-ou-e-lipedema",
    titulo: "É celulite ou é lipedema?",
    medico: "tulio",
    assunto: "A causa tem nome e tem exame",
    serie: "02",
    especialidade: "nutrologia", ancora: "lipedema",
    video: null,
    paragrafos: [
          "Isso que você está vendo pode não ser celulite. Pode ser lipedema.",
          "As pernas não afinam nem quando o resto emagrece. Doem quando você toca. Roxos que aparecem sem motivo. Você ouviu a vida inteira que era gordura localizada. Não é falta de exercício, e não é você.",
          "O lipedema é uma doença do tecido gorduroso que aparece, na maioria das vezes, em mulheres, e não responde a uma simples mudança na dieta como a gordura comum. Por isso a perna não acompanha o corpo.",
          "Tem critério, tem diagnóstico e tem tratamento. Dar o nome certo muda tudo: você para de brigar com uma coisa que nunca foi preguiça.",
          "Eu avalio, explico o que é e o que não é, e conduzo o tratamento com você. Sou eu, do início ao fim.",
          "Seu médico. Sua melhor versão. Agende a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "efeito-sanfona-por-que-o-peso-perdido-sempre-volta",
    titulo: "Efeito sanfona: por que o peso perdido sempre volta?",
    medico: "tulio",
    assunto: "Não é mais uma tentativa",
    serie: "01",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Você não perdeu peso. Perdeu músculo.",
          "Emagreceu cinco quilos e recuperou seis. De novo. E aí, cada vez é mais difícil.",
          "Não é falta de disciplina. Peso é água, músculo e gordura. Quando a dieta tira músculo, o metabolismo cai. E um corpo que gasta menos recupera mais fácil do que perdeu.",
          "O alvo certo é a gordura, não o número da balança. Quando o metabolismo é tratado junto, o corpo passa a sustentar sozinho o que perdeu.",
          "Eu meço o que você está perdendo, do primeiro dia. E acompanho o processo inteiro, não só o começo."
    ],
  },
  {
    slug: "emagrecer-rapido-faz-mal",
    titulo: "Emagrecer rápido faz mal?",
    medico: "tulio",
    assunto: "Não é mais uma tentativa",
    serie: "01",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Emagrecer rápido não é o problema. O problema é o que vai embora junto com o peso.",
          "Você tem pressa, e faz sentido. Mas você já emagreceu rápido antes e voltou mais rápido ainda. E não foi falta de disciplina.",
          "Emagrecer rápido do jeito errado tira água, tira músculo, e a gordura fica. O metabolismo cai e o corpo passa a ganhar mais fácil do que perdeu.",
          "Emagrecer é perder gordura. Rápido pode, desde que o que saia seja gordura. Isso não se adivinha, se mede.",
          "Eu meço a composição do seu corpo, não só a balança. E quem mede do primeiro dia em diante é quem acompanha o processo inteiro. Esse sou eu, do início ao fim.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "plato-no-emagrecimento-por-que-o-peso-trava",
    titulo: "Platô no emagrecimento: por que o peso trava?",
    medico: "tulio",
    assunto: "Não é mais uma tentativa",
    serie: "01",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "A sua balança travou no mesmo número? A culpa não é sua.",
          "O começo é mais fácil. Depois o peso para de cair: você come menos, faz igual e o número não mexe. Não é você que parou de fazer o esforço.",
          "Nas primeiras semanas sai água. Depois, o peso só continua caindo se o que sair for gordura. E se nessa jornada você perdeu músculo, o corpo passou a gastar menos, e comer menos não resolve isso.",
          "Platô tem causa, e a causa se avalia antes de mudar qualquer coisa. Eu olho o que travou: a composição, o exame, o metabolismo. E analiso esse exame com você.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "exame-de-sangue-normal-mas-o-corpo-nao-esta-bem-o-que-pode-estar-acontecendo",
    titulo: "Exame de sangue normal, mas o corpo não está bem: o que pode estar acontecendo?",
    medico: "tulio",
    assunto: "A causa tem nome e tem exame",
    serie: "02",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "Exames de sangue dentro dos valores de referência podem mascarar os problemas que não estão deixando você bem.",
          "Você se sente cansada, sem disposição, o corpo não responde. Fez exame, e veio tudo normal. E aí a conclusão foi: o problema sou eu.",
          "Por isso a avaliação começa antes do exame: pelo que você sente. Aí eu peço o que faz sentido para o seu caso e analiso o número olhando para você, para o seu sintoma, e não só para o intervalo de referência.",
          "Eu analiso com você, dentro das suas queixas. E quem analisa é quem vai acompanhar você.",
          "Seu médico. Sua melhor versão. Agende a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "cansaco-na-menopausa-e-idade-ou-e-hormonio",
    titulo: "Cansaço na menopausa: é idade ou é hormônio?",
    medico: "breno",
    assunto: "A causa tem nome e tem exame",
    serie: "02",
    especialidade: "endocrinologia", ancora: "menopausa",
    video: null,
    paragrafos: [
          "Cansaço na menopausa não é idade. É hormônio, e isso tem tratamento.",
          "A disposição sumiu, o sono ficou raso, o humor mudou, e você ouviu que agora é assim. Não é assim. E não é você.",
          "Quando o estrogênio cai, o sono, a energia, o humor e o metabolismo caem juntos. É uma causa só, com vários sintomas, e ela aparece no exame.",
          "Isso se avalia com critério. Tratada a causa, o que volta primeiro é a disposição, antes de qualquer outra coisa.",
          "Eu avalio o seu exame com você, na tela, e a conduta vem depois disso. Quem avalia é quem acompanha.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "colesterol-alto-em-quem-se-alimenta-bem-por-que-acontece",
    titulo: "Colesterol alto em quem se alimenta bem: por que acontece?",
    medico: "breno",
    assunto: "A causa tem nome e tem exame",
    serie: "02",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "Você come bem e mesmo assim o colesterol está alto? Pode ser o que não está no seu prato.",
          "Você cuida da alimentação, não exagera, e o exame ainda assim veio alto. Aí vem a culpa e a sensação de que nada adianta.",
          "Não é o que você come, é o que o corpo faz com isso. Genética, tireoide, resistência à insulina, gordura no fígado: tudo isso sobe o colesterol sem passar pelo prato. Cortar mais comida não resolve o que não vem da comida.",
          "Por isso não se olha o colesterol sozinho. Olha-se o metabolismo completo e trata-se a causa que fez o número subir.",
          "Eu avalio o seu exame com você e explico o porquê de cada linha. Quem avalia é quem vai acompanhar.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "gordura-no-figado-em-quem-nao-bebe-por-que-acontece",
    titulo: "Gordura no fígado em quem não bebe: por que acontece?",
    medico: "breno",
    assunto: "A causa tem nome e tem exame",
    serie: "02",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Recebeu o diagnóstico de gordura no fígado sem beber uma gota de álcool? É mais comum do que você imagina.",
          "Veio no ultrassom de rotina, você não bebe e ninguém explicou de onde veio. Só disseram para emagrecer.",
          "Não é o álcool e não é descuido. É o metabolismo. Quando o corpo não lida bem com o que recebe, guarda gordura onde não deveria. É o mesmo mecanismo daquela barriga que não sai.",
          "Isso se avalia, se acompanha e, principalmente, se trata. Não com dieta solta, mas resolvendo a origem do problema.",
          "Eu explico o que o exame diz e o que ele não diz, e conduzo o tratamento com você. Sou eu, do primeiro dia em diante.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "por-que-a-vontade-de-doce-aumenta-a-noite",
    titulo: "Por que a vontade de doce aumenta à noite?",
    medico: "tulio",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "A vontade de doce à noite não é gula. É fisiologia.",
          "De dia você segura. À noite, depois do dia todo, vem a vontade, e aí sim você cede. E dorme com culpa.",
          "Não é falta de vontade. Dia longo, sono ruim e estresse mexem nos hormônios que controlam fome e saciedade. O corpo pede energia rápida, e açúcar é o mais rápido que existe.",
          "Isso tem exame e tem causa. Quando o sono, o hormônio e o metabolismo entram no tratamento, a vontade cai sem você precisar brigar com ela.",
          "Eu avalio antes de prescrever. E quem avalia é quem acompanha, do primeiro dia em diante.",
          "Seu médico. Sua melhor versão. Agende a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "por-que-a-menopausa-faz-engordar",
    titulo: "Por que a menopausa faz engordar?",
    medico: "tulio",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "endocrinologia", ancora: "menopausa",
    video: null,
    paragrafos: [
          "Não é a menopausa que faz você engordar. O que ela muda no seu corpo, engorda.",
          "Você faz o mesmo que sempre fez, e o corpo responde diferente. A barriga aumentou como nunca. O sono mudou. A disposição, também.",
          "Não foi você que se descuidou. Quando o estrogênio cai, o corpo muda onde guarda gordura, perde músculo mais fácil e gasta menos. É o metabolismo, não a sua vontade.",
          "E isso se avalia. Hormônio, composição, sono. Tratando a causa, o que volta primeiro é a disposição, antes do espelho.",
          "Eu analiso o seu exame com você, antes de qualquer conduta. E quem analisa é quem acompanha o tratamento inteiro.",
          "Seu médico. Sua melhor versão. Agende a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "dormir-bem-e-acordar-cansado-o-que-pode-estar-por-tras",
    titulo: "Dormir bem e acordar cansado: o que pode estar por trás?",
    medico: "breno",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Você dorme oito horas e ainda acorda cansado? Isto não é falta de sono, é um sinal.",
          "Você faz a conta: dormiu o suficiente. E mesmo assim levanta sem energia, e o dia inteiro anda arrastado.",
          "Não é falta de descanso, e não é preguiça. Sono que não repõe tem causa: hormônio fora do lugar, apneia, tireoide, resistência à insulina. O corpo dorme, mas não recupera.",
          "Cada uma dessas causas se mede. E quando a causa é tratada, a energia é a primeira coisa que volta.",
          "Eu peço os exames certos, leio com você e acompanho o tratamento inteiro. É o que eu quero dizer com seu médico."
    ],
  },
  {
    slug: "por-que-a-fome-aumenta-depois-da-dieta",
    titulo: "Por que a fome aumenta depois da dieta?",
    medico: "tulio",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "A fome depois da dieta não é fraqueza. É o corpo cobrando.",
          "Você fez a dieta direito, emagreceu, e aí veio uma fome que não existia antes. E o corpo cedeu. Não foi falta de controle.",
          "Quando o peso cai rápido, o corpo entende que está em perigo e aumenta os hormônios da fome. É defesa, não vontade. E quem faz dieta sem acompanhar isso está brigando com o próprio corpo.",
          "Isso se prevê e se trata. Existe jeito de emagrecer sem o corpo entrar em alerta, com o metabolismo dentro do tratamento, e não só o prato.",
          "Eu avalio antes de montar qualquer plano. E quem avalia é quem acompanha a fome, semana a semana, com você.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "depois-da-gravidez-por-que-o-peso-nao-volta",
    titulo: "Depois da gravidez, por que o peso não volta?",
    medico: "tulio",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "O bebê nasceu, a rotina mudou e o corpo não voltou. Você ouviu que é normal, que passa. Mas já passaram anos e você ainda não voltou ao corpo que tinha antes.",
          "Não foi você que se abandonou. A gravidez mexe nos hormônios, no sono e no metabolismo. Se nada disso foi avaliado depois do parto, o corpo ficou funcionando em outro ritmo.",
          "Isso se investiga: tireoide, hormônios, composição corporal. Tratando a causa, o que volta é o corpo que já foi seu, não outro.",
          "Eu peço os exames certos e analiso cada um com você. E quem analisa é quem acompanha, do início ao fim do tratamento.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "por-que-perder-peso-fica-mais-dificil-com-os-anos",
    titulo: "Por que perder peso fica mais difícil com os anos?",
    medico: "breno",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Aos 40, o mesmo esforço rende menos. E não é você.",
          "Aos 25, uma semana de dieta ou de exercício já tirava três quilos. Hoje você faz o mesmo, com mais disciplina ainda, e nada acontece. Não é falta de esforço.",
          "A cada década, o corpo perde músculo e gasta menos. O hormônio muda, o sono piora, e o mesmo prato de vinte anos atrás virou outra conta. E ninguém avisou.",
          "Isso se avalia: composição, hormônio, metabolismo. Com a conta certa, o esforço volta a render.",
          "Eu avalio antes de montar qualquer estratégia e ajusto a cada etapa, junto com você, do primeiro dia em diante.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "dormir-mal-engorda",
    titulo: "Dormir mal engorda?",
    medico: "breno",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "Dorme mal e engorda? E não é por causa do lanche da madrugada.",
          "Você dorme pouco, acorda cansado e no dia seguinte a fome é outra. Come mais, com mais vontade, e não sabe por quê. Não é falta de controle.",
          "Uma noite mal dormida mexe nos dois hormônios da fome: sobe o que pede comida e derruba o que avisa que ela chegou. E o corpo cansado guarda gordura em vez de gastar.",
          "Por isso o sono também é um pilar do tratamento do emagrecimento. Não adianta acertar o prato com o corpo inteiro trabalhando contra.",
          "Eu avalio o sono junto com os seus exames, antes de propor qualquer estratégia, e acompanho os dois, do primeiro dia até o fim.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "estresse-engorda",
    titulo: "Estresse engorda?",
    medico: "breno",
    assunto: "Não foi falta de disciplina",
    serie: "03",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Estresse engorda, e a barriga é o lugar onde ele aparece.",
          "Você vive no limite: trabalho, família, cobrança. E o corpo respondeu com uma barriga que não sai, mesmo comendo direito. Não é falta de vontade.",
          "Estresse contínuo mantém o cortisol alto. O cortisol alto manda o corpo guardar gordura na região abdominal, derruba o sono, derruba tudo. É um ciclo, e ele não se resolve com mais disciplina.",
          "Se resolve com causa, e isso se avalia. Esse cenário se repete toda semana em quem construiu muito e se perdeu de vista pelo caminho.",
          "Eu avalio, e sou eu que acompanho.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "por-que-a-barriga-nao-sai-mesmo-com-o-peso-caindo",
    titulo: "Por que a barriga não sai mesmo com o peso caindo?",
    medico: "breno",
    assunto: "A régua daqui é outra",
    serie: "04",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "O peso caiu, mas a barriga ficou? Isso tem explicação.",
          "Você emagreceu, a roupa afrouxou, e a barriga continua ali, como se não tivesse acontecido nada. Isso frustra, eu sei.",
          "Mas não é o exercício errado, e não é você. A gordura abdominal é a que o corpo mais protege: resistência à insulina, cortisol alto, sono ruim, tudo isso protegendo essa gordura. Emagrecer sem tratar as causas tira o peso de todo lugar, menos de onde você quer.",
          "E isso se avalia: cintura, composição e exames. Eu vejo isso toda semana no consultório. Eu avalio, explico e acompanho. Sou eu do começo ao fim.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "e-preciso-estar-acima-do-peso-para-procurar-um-medico",
    titulo: "É preciso estar acima do peso para procurar um médico?",
    medico: "breno",
    assunto: "A régua daqui é outra",
    serie: "04",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "Você não precisa estar acima do peso para alguma coisa estar errada.",
          "O peso está ok, mas você dorme e acorda cansada, a disposição sumiu, o corpo não responde. E como a balança não acusa, você adia. Não é frescura.",
          "A balança mede quilo, não mede metabolismo. Dá para estar com o peso certo com o hormônio fora do lugar, com pouco músculo, com o sono destruído. Tudo isso é invisível no número.",
          "O que a balança não mostra, o exame mostra. E o que se investiga, se trata. O que volta primeiro é a energia, não o número.",
          "Aqui, a consulta começa pelo que você sente, não pelo seu peso. E quem ouve você no primeiro dia é quem acompanha.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "o-que-e-bioimpedancia-e-o-que-ela-mede",
    titulo: "O que é bioimpedância e o que ela mede?",
    medico: "breno",
    assunto: "A régua daqui é outra",
    serie: "04",
    especialidade: "nutrologia", ancora: "emagrecimento",
    video: null,
    paragrafos: [
          "A balança mente. A bioimpedância, não.",
          "Você sobe na balança todo dia, o número oscila e você oscila junto. E o que está por trás desse número, ninguém conta. Não é obsessão sua, é o jeito errado de medir.",
          "A balança soma água, músculo e gordura num número só. Na bioimpedância, cada um aparece separado: quanto é água, quanto é músculo, quanto é gordura, e onde cada um está. Dá para emagrecer na balança e piorar na composição.",
          "Por isso, aqui, a bioimpedância entra antes do peso. É ela que diz se o que está saindo é gordura ou músculo.",
          "Eu avalio no primeiro dia e reavalio com você a cada etapa, do início ao fim do tratamento.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "homem-tambem-precisa-fazer-avaliacao-hormonal",
    titulo: "Homem também precisa fazer avaliação hormonal?",
    medico: "tulio",
    assunto: "O homem que não se trata",
    serie: "05",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "Toda mulher sabe que precisa avaliar os hormônios depois de certa idade. O homem também deveria, mas raramente faz.",
          "Você não rende como rendia. Dorme e não descansa. A barriga apareceu, e o humor mudou. E a explicação que você aceita: é a idade.",
          "Não é idade, e não é frescura. A produção de testosterona cai a partir dos 35, 40 anos, em todo homem. Em alguns, cai mais, e antes do que deveria. E isso tem como detectar.",
          "Não tem nada a ver com academia nem com atalho. Tem a ver com causa. Avaliada a causa, o que volta é a disposição, o sono, o render de novo.",
          "Eu avalio antes de qualquer conduta. E a conduta é sempre específica para o seu caso. Quem avalia é quem acompanha: eu.",
          "Seu médico. Sua melhor versão. Agende a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "por-que-o-homem-perde-disposicao-depois-dos-40",
    titulo: "Por que o homem perde disposição depois dos 40?",
    medico: "tulio",
    assunto: "O homem que não se trata",
    serie: "05",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "Estar acabado no fim do dia é comum, mas não é normal. São coisas diferentes.",
          "Você chega em casa sem energia para nada. O fim de semana não recarrega mais. E você atribui ao trabalho, porque é a explicação que não exige investigação.",
          "Não é preguiça, e não é só o trabalho. Depois dos 40, hormônio, sono e metabolismo mudam juntos. A disposição é o primeiro sinal que cai, e o último que alguém investiga.",
          "Isso tem exame, tem causa e tem tratamento. E a disposição é o que volta primeiro, antes de qualquer outra coisa.",
          "Eu investigo antes de prescrever. E o médico que investiga é o que acompanha você, do início ao fim.",
          "Seu médico. Sua melhor versão. Agende a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "o-que-pode-estar-diminuindo-a-sua-testosterona-depois-dos-30-anos",
    titulo: "O que pode estar diminuindo a sua testosterona depois dos 30 anos?",
    medico: "breno",
    assunto: "O homem que não se trata",
    serie: "05",
    especialidade: "endocrinologia", ancora: "avaliacao-hormonal",
    video: null,
    paragrafos: [
          "Não é só a idade que derruba a sua testosterona. É o jeito que você vive.",
          "Você não rende como antes, a libido caiu, o humor encurtou. Trinta e poucos anos, cedo demais para ser a idade. E não é frescura.",
          "Sono ruim, estresse, barriga, sedentarismo: cada um derruba a testosterona um pouco. Juntos, derrubam tudo. Em muitos homens, a causa da queda nem é hormonal, é o que está em volta.",
          "Por isso a resposta não é repor logo de cara. É medir, entender a causa e tratar o que está de fato derrubando.",
          "Eu avalio antes de qualquer conduta, longe do universo das academias. E quem avalia é quem acompanha.",
          "Seu médico. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "e-possivel-fazer-procedimento-estetico-sem-parecer-que-fez",
    titulo: "É possível fazer procedimento estético sem parecer que fez?",
    medico: "ana",
    assunto: "Fazer, e continuar parecendo você",
    serie: "06",
    especialidade: "dermatologia", ancora: "estetica-facial",
    video: null,
    paragrafos: [
          "Dá para fazer botox ou preenchimento sem ninguém perceber? Dá. Mas não é o produto que garante isso.",
          "Você quer, mas tem medo. Já viu de perto o que dá errado: a boca que mudou, a testa que não mexe. E não quer perder a sua cara.",
          "O medo faz sentido. O que deixa o rosto artificial não é o procedimento, é a dose errada, no lugar errado, num rosto que não foi avaliado. É o excesso, e o excesso é decisão de quem aplica.",
          "Aqui a regra é recuperar, não mudar. Devolver o que o tempo tirou, na medida do seu rosto. Menos é uma conduta, e o não também.",
          "No Instituto Rocca, eu avalio, explico o que faria e o que não faria, e faço eu mesma. Quem aplica no primeiro dia é quem acompanha depois."
    ],
  },
  {
    slug: "por-que-o-mesmo-procedimento-estetico-fica-melhor-em-uma-pessoa-do-que-em-outra",
    titulo: "Por que o mesmo procedimento estético fica melhor em uma pessoa do que em outra?",
    medico: "ana",
    assunto: "Fazer, e continuar parecendo você",
    serie: "06",
    especialidade: "dermatologia", ancora: "estetica-facial",
    video: null,
    paragrafos: [
          "Não é o produto. É o rosto que recebe.",
          "Ficou lindo na sua amiga e você fica pensando: vai ficar bom em mim ou vai ficar diferente? A dúvida é justa.",
          "O mesmo procedimento fica diferente em cada pessoa, por anatomia e por proporção: onde o rosto perde volume, como a pele responde e o que já mudou com o tempo. Copiar o que fizeram nela pode não ser o melhor para você.",
          "Por isso a consulta começa avaliando o seu rosto, e não escolhendo o produto. E às vezes a resposta é: nesse caso, eu não indico.",
          "No Instituto Rocca, quem avalia é quem faz, e quem faz é quem acompanha. Você continua parecendo você, só que mais descansada.",
          "Sua médica. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "como-escolher-uma-clinica-de-estetica-sem-olhar-so-o-preco",
    titulo: "Como escolher uma clínica de estética sem olhar só o preço?",
    medico: "ana",
    assunto: "Fazer, e continuar parecendo você",
    serie: "06",
    especialidade: "dermatologia", ancora: "estetica-facial",
    video: null,
    paragrafos: [
          "Está escolhendo onde fazer um procedimento estético pelo preço? O rosto é quem paga essa diferença.",
          "Você pesquisou, comparou, e o lugar cobra metade. Fica a dúvida: está barato demais para ser seguro? A dúvida é o seu melhor instinto.",
          "Preço muito baixo costuma vir de produto sem procedência, de aplicação sem médico ou de uma consulta de cinco minutos que já sai vendendo. O que fica barato na hora fica caro para corrigir depois.",
          "O critério que vale é outro: quem avalia o seu rosto, explica o porquê e diz se indica aquilo ou não.",
          "Aqui no Instituto Rocca, a consulta começa sem falar de procedimento. Eu avalio, explico e faço eu mesma, do primeiro dia até o acompanhamento final.",
          "Sua médica. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "mudancas-na-pele-depois-dos-40-e-hormonio",
    titulo: "Mudanças na pele depois dos 40: é hormônio?",
    medico: "ana",
    assunto: "Pele é rotina, não procedimento",
    serie: "07",
    especialidade: "dermatologia", ancora: "pele",
    video: null,
    paragrafos: [
          "A sua pele mudou depois dos 40 e nenhum creme resolveu? A causa pode não estar na sua pele.",
          "Ressecou, perdeu viço e afinou. Mancha que não tinha. Você trocou de creme três vezes e nada mudou.",
          "Não é o creme errado. Depois dos 40, o estrogênio cai e, com ele, o colágeno, a hidratação e a espessura da pele. A pele responde ao que o corpo está fazendo por dentro.",
          "Por isso, aqui, a dermatologia sempre conversa com a avaliação hormonal. Tratar a pele sozinha é enxugar gelo. Tratando a causa junto, o que volta é a pele que sempre foi sua.",
          "No Instituto Rocca, eu avalio a sua pele e, quando é o caso, chamo o hormônio para a conversa, com os médicos daqui do instituto. Quem avalia é quem acompanha. E aqui, nós acompanhamos você do começo ao fim.",
          "Sua médica. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "manchas-no-rosto-qual-a-diferenca-entre-sol-hormonio-e-idade",
    titulo: "Manchas no rosto: qual a diferença entre sol, hormônio e idade?",
    medico: "ana",
    assunto: "Pele é rotina, não procedimento",
    serie: "07",
    especialidade: "dermatologia", ancora: "pele",
    video: null,
    paragrafos: [
          "Tem uma mancha no rosto que clareia e volta? Ela pode não ser de sol. E tratar a mancha do jeito errado pode piorar.",
          "Você usa protetor solar, evita o sol e a mancha continua. Ou clareia e, depois, volta. Você já tentou tudo o que a farmácia tem.",
          "Não é falta de cuidado. Existem três tipos de mancha, com três causas principais: sol, hormônio e idade. Elas parecem iguais e se tratam de um jeito completamente diferente. Melasma, por exemplo, é hormonal, e o tratamento errado piora, e muito.",
          "Por isso, antes de qualquer procedimento, eu preciso saber qual é a sua causa. O diagnóstico vem primeiro; o tratamento, depois.",
          "No Instituto Rocca, eu avalio, digo o que é e explico o que funciona e o que não funciona para ela. Quem avalia é quem trata.",
          "Sua médica. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "flacidez-na-pele-depois-do-emagrecimento-o-que-fazer",
    titulo: "Flacidez na pele depois do emagrecimento: o que fazer?",
    medico: "ana",
    assunto: "Pele é rotina, não procedimento",
    serie: "07",
    especialidade: "dermatologia", ancora: "pele",
    video: null,
    paragrafos: [
          "Você emagreceu e a pele ficou flácida? Isso tem solução.",
          "O corpo mudou, a roupa mudou e, no espelho, a pele ficou solta: rosto, braço, abdômen. Parece que você trocou um problema por outro.",
          "Mas não foi você que emagreceu errado. A pele perde colágeno com a idade e não encolhe na mesma velocidade em que a gordura sai. E ninguém liga uma coisa à outra: quem trata o peso não olha para a pele.",
          "Aqui, eu olho. O emagrecimento e a pele que sobra depois dele são tratados sob o mesmo teto, com critério: o que resolve com bioestimulador, o que resolve com a rotina, e o que não resolve com nada disso e pede outras alternativas.",
          "No Instituto Rocca, eu avalio a sua pele, converso com o médico que acompanha o seu peso e conduzo o que é meu. Quem avalia é quem acompanha.",
          "Sua médica. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  },
  {
    slug: "por-que-a-acne-continua-aparecendo-depois-dos-30",
    titulo: "Por que a acne continua aparecendo depois dos 30?",
    medico: "ana",
    assunto: "Pele é rotina, não procedimento",
    serie: "07",
    especialidade: "dermatologia", ancora: "pele",
    video: null,
    paragrafos: [
          "Passou dos 30 e a acne continua aparecendo? Isso não é adolescência atrasada. É sobre outra coisa.",
          "A espinha continua vindo. No queixo, no maxilar e na mandíbula, sempre antes da menstruação. E você já usou tudo o que existe na farmácia.",
          "Não é falta de limpeza, e não é o produto errado. A acne da mulher adulta costuma ser hormonal: queixo, mandíbula e maxilar são a assinatura. Tratar por fora, sozinho, é apagar incêndio.",
          "Por isso a investigação vem antes de todo o tratamento. Quando a questão é hormonal, a pele se trata junto com a causa, não por cima dela.",
          "No Instituto Rocca, eu avalio, peço o que precisa e trato a pele enquanto a causa também é tratada aqui. Quem avalia é quem acompanha, do começo ao fim.",
          "Sua médica. Sua melhor versão. Venha fazer a sua avaliação comigo, no Instituto Rocca."
    ],
  }
];

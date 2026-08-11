/* =========================================================
   PORTFOLIO TRANSLATIONS
   EN / PT / FR
   ========================================================= */

const portfolioTranslations = {

  /* =======================================================
     ENGLISH
     ======================================================= */

  en: {
    pageTitle: "Beatriz Martins Gomes Silva | Data Science & Engineering",

    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },

    hero: {
      availability: "OPEN TO INTERNATIONAL REMOTE OPPORTUNITIES",
      role: "Data Science · Machine Learning · Data Analytics",
      summary:
        "Biomedical Engineering student combining data analysis, machine learning and engineering problem-solving to build interpretable models, analytical dashboards and workflow automation solutions.",
      projects: "Explore projects",
      cv: "Download CV"
    },

    about: {
      label: "PROFILE / TOOLBOX",
      title:
        "Turning complex problems into structured, analytical solutions.",

      p1:
        "I am a Biomedical Engineering student at the Federal University of Uberlândia (UFU), with international academic experience at Polytech Marseille and hands-on Data Science experience in an industrial engineering environment in France.",

      p2:
        'My work sits at the intersection of <strong>data analysis, machine learning, automation and engineering systems</strong>. I enjoy transforming operational or experimental problems into structured datasets, interpretable models and useful digital tools.',

      p3:
        "I am particularly interested in international opportunities involving Data Science, Data Analytics, Machine Learning and engineering-oriented digital transformation.",

      applied: "APPLIED IN"
    },

    skills: {
      programming: {
        code: "A.01",
        title: "Programming & Data",
        text:
          "Languages and libraries used to clean, transform, model and visualize structured and experimental data.",
        tools: [
          "Python",
          "Pandas",
          "NumPy",
          "SQL",
          "R",
          "tidyverse",
          "MATLAB"
        ],
        applied:
          "Machine-learning projects, experimental data pipelines and engineering analysis."
      },

      ml: {
        code: "A.02",
        title: "Machine Learning",
        text:
          "Methods used to develop, validate and interpret predictive models with an emphasis on clear evaluation.",
        tools: [
          "Classification",
          "Regression",
          "Clustering",
          "Decision Trees",
          "Model Evaluation",
          "scikit-learn",
          "caret"
        ],
        applied:
          "Biomedical classification, model comparison, cross-validation and performance interpretation."
      },

      analytics: {
        code: "A.03",
        title: "Data Analytics",
        text:
          "Analytical methods for converting raw datasets into reliable indicators, patterns and visual explanations.",
        tools: [
          "Data Cleaning",
          "EDA",
          "Correlation Analysis",
          "Descriptive Statistics",
          "Data Visualization",
          "KPIs"
        ],
        applied:
          "Quality indicators, financial datasets, operational dashboards and research data."
      },

      digital: {
        code: "A.04",
        title: "Digital Solutions",
        text:
          "Tools used to turn operational requirements into practical interfaces, automated workflows and structured data systems.",
        tools: [
          "Looker Studio",
          "AppSheet",
          "Google Apps Script",
          "HTML",
          "CSS",
          "JavaScript"
        ],
        applied:
          "Dashboards, request workflows, workload planning automation and interactive web projects."
      }
    },

    experience: {
      label: "EXPERIENCE / FIELD WORK",
      title:
        "Experience across industrial data, research and engineering systems.",

      jobs: [
        {
          title: "Data Science Intern",
          org: "Expleo Group · Airbus Helicopters project",
          place: "Vitrolles, France",
          bullets: [
            "Developed interactive Looker Studio dashboards for financial and quality-related datasets.",
            "Designed a structured AppSheet workflow to improve operational data collection and troubleshooting requests.",
            "Translated operational requirements into dashboards, structured data models and digital workflows for internal users."
          ]
        },

        {
          title: "Undergraduate Researcher — Control Systems",
          org: "LASEC",
          place: "Uberlândia, Brazil",
          bullets: [
            "Built a data-acquisition pipeline for an experimental aeropendulum using ESP32 and MPU9250 sensors.",
            "Collected PWM-angle time-series data through serial communication at 10 Hz.",
            "Performed dynamic system identification and validated the mathematical model against experimental responses, reaching an 81.39 % model fit."
          ]
        },

        {
          title: "Undergraduate Researcher — Data Science",
          org: "GIM",
          place: "Uberlândia, Brazil",
          bullets: [
            "Developed and evaluated a Decision Tree classification workflow using the Breast Cancer Wisconsin dataset.",
            "Explored predictive features, model evaluation and interpretable classification rules.",
            "Applied R-based data analysis and statistical modeling to a biomedical classification problem."
          ]
        }
      ]
    },

    projects: {
      label: "SELECTED WORK / PUBLIC REPOSITORIES",
      title:
        "A closer look at the projects behind the portfolio.",

      viewGithub: "View on GitHub",
      liveDemo: "Live demo",
      playLive: "Play live",

      slides: [
        {
          type: "DATA SCIENCE · R · MACHINE LEARNING",

          description:
            "End-to-end classification workflow using the Breast Cancer Wisconsin dataset, combining exploratory analysis, cross-validation, interpretable Decision Trees, ROC analysis and error interpretation.",

          highlights: [
            ["Dataset", "569 observations"],
            ["Test accuracy", "85.96 %"],
            ["ROC-AUC", "0.8862"]
          ],

          visualLabel: "MODEL / EVALUATION",
          visualNote:
            "Interpretable baseline · malignant class as event of interest"
        },

        {
          type: "DATA ANALYTICS · AUTOMATION · PLANNING",

          description:
            "A multi-module engineering management system that synchronizes project records, workload, progress, weekly time allocation and planning data through Google Apps Script.",

          highlights: [
            ["Core model", "Master project database"],
            ["Analytics", "KPIs & workload tracking"],
            ["Automation", "Multi-sheet sync"]
          ],

          visualLabel: "WORKLOAD / PIPELINE"
        },

        {
          type: "WORKFLOW AUTOMATION · STRUCTURED DATA",

          description:
            "A web-based request workflow that transforms operational requests into validated, traceable and analytics-ready records while supporting structured notifications and request follow-up.",

          highlights: [
            ["Input", "Structured request form"],
            ["Storage", "Centralized records"],
            ["Output", "Status & notifications"]
          ],

          visualLabel: "REQUEST / LIFECYCLE",

          steps: [
            "Submit",
            "Validate",
            "Store",
            "Notify"
          ]
        },

        {
          type: "JAVASCRIPT · INTERACTIVE LOGIC · FRONTEND",

          description:
            "Interactive browser puzzle with Canvas rendering, state management, rule-based disk movement, progressive difficulty, scoring and timed challenges.",

          highlights: [
            ["Levels", "12 configurations"],
            ["Modes", "3 game modes"],
            ["Interaction", "Canvas + state logic"]
          ],

          visualLabel: "STATE / LOGIC",

          visualNote:
            "Select → validate rule → update state → compare target"
        }
      ],

      githubLabel: "MORE CODE & PROJECT DETAILS",

      githubText:
        "Explore the complete repositories, documentation and source code on my GitHub profile.",

      githubButton: "Visit GitHub profile"
    },

    education: {
      label: "EDUCATION / LANGUAGES",

      title:
        "Biomedical engineering with an international academic path.",

      exchange:
        "Biomedical Engineering — International Exchange Program",

      ranked: "Ranked 1st",

      degree:
        "B.Sc. in Biomedical Engineering",

      graduation:
        "Expected graduation: 08/2027",

      present: "Present",

      languages: "LANGUAGES",

      portuguese: "Portuguese",
      native: "Native",

      french: "French",
      fluent: "Fluent · C2",

      english: "English",
      advanced: "Advanced · C1",

      certifications: "CERTIFICATIONS",

      cert1:
        "R for Data Science: Data Analysis and Statistical Modeling",

      cert2:
        "Biomedical Signal Processing and Analysis with R"
    },

    contact: {
      label: "CONTACT",
      email: "Email",
      cv: "English résumé"
    }
  },


  /* =======================================================
     PORTUGUÊS
     ======================================================= */

  pt: {
    pageTitle: "Beatriz Martins Gomes Silva | Ciência de Dados & Engenharia",

    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato"
    },

    hero: {
      availability: "ABERTA A OPORTUNIDADES INTERNACIONAIS E REMOTAS",
      role: "Ciência de Dados · Machine Learning · Análise de Dados",

      summary:
        "Estudante de Engenharia Biomédica que combina análise de dados, machine learning e resolução de problemas de engenharia para desenvolver modelos interpretáveis, dashboards analíticos e soluções de automação de fluxos de trabalho.",

      projects: "Explorar projetos",
      cv: "Baixar CV"
    },

    about: {
      label: "PERFIL / COMPETÊNCIAS",

      title:
        "Transformando problemas complexos em soluções estruturadas e analíticas.",

      p1:
        "Sou estudante de Engenharia Biomédica na Universidade Federal de Uberlândia (UFU), com experiência acadêmica internacional na Polytech Marseille e experiência prática em Ciência de Dados em um ambiente de engenharia industrial na França.",

      p2:
        'Minha atuação está na interseção entre <strong>análise de dados, machine learning, automação e sistemas de engenharia</strong>. Gosto de transformar problemas operacionais ou experimentais em conjuntos de dados estruturados, modelos interpretáveis e ferramentas digitais úteis.',

      p3:
        "Tenho interesse especial em oportunidades internacionais envolvendo Ciência de Dados, Análise de Dados, Machine Learning e transformação digital aplicada à engenharia.",

      applied: "APLICADO EM"
    },

    skills: {
      programming: {
        code: "A.01",
        title: "Programação & Dados",

        text:
          "Linguagens e bibliotecas utilizadas para limpar, transformar, modelar e visualizar dados estruturados e experimentais.",

        tools: [
          "Python",
          "Pandas",
          "NumPy",
          "SQL",
          "R",
          "tidyverse",
          "MATLAB"
        ],

        applied:
          "Projetos de machine learning, pipelines de dados experimentais e análises de engenharia."
      },

      ml: {
        code: "A.02",
        title: "Machine Learning",

        text:
          "Métodos utilizados para desenvolver, validar e interpretar modelos preditivos com ênfase em uma avaliação clara dos resultados.",

        tools: [
          "Classificação",
          "Regressão",
          "Clustering",
          "Árvores de Decisão",
          "Avaliação de Modelos",
          "scikit-learn",
          "caret"
        ],

        applied:
          "Classificação biomédica, comparação de modelos, validação cruzada e interpretação de desempenho."
      },

      analytics: {
        code: "A.03",
        title: "Análise de Dados",

        text:
          "Métodos analíticos para transformar dados brutos em indicadores confiáveis, padrões e explicações visuais.",

        tools: [
          "Limpeza de Dados",
          "EDA",
          "Análise de Correlação",
          "Estatística Descritiva",
          "Visualização de Dados",
          "KPIs"
        ],

        applied:
          "Indicadores de qualidade, dados financeiros, dashboards operacionais e dados de pesquisa."
      },

      digital: {
        code: "A.04",
        title: "Soluções Digitais",

        text:
          "Ferramentas utilizadas para transformar requisitos operacionais em interfaces práticas, fluxos automatizados e sistemas de dados estruturados.",

        tools: [
          "Looker Studio",
          "AppSheet",
          "Google Apps Script",
          "HTML",
          "CSS",
          "JavaScript"
        ],

        applied:
          "Dashboards, fluxos de solicitações, automação de planejamento de carga de trabalho e projetos web interativos."
      }
    },

    experience: {
      label: "EXPERIÊNCIA / ATUAÇÃO",

      title:
        "Experiência em dados industriais, pesquisa e sistemas de engenharia.",

      jobs: [
        {
          title: "Estagiária em Ciência de Dados",

          org:
            "Expleo Group · Projeto Airbus Helicopters",

          place:
            "Vitrolles, França",

          bullets: [
            "Desenvolvi dashboards interativos no Looker Studio para análise de dados financeiros e indicadores relacionados à qualidade.",
            "Desenvolvi um fluxo estruturado em AppSheet para melhorar a coleta de dados operacionais e o tratamento de solicitações.",
            "Traduzi requisitos operacionais em dashboards, modelos de dados estruturados e fluxos digitais para usuários internos."
          ]
        },

        {
          title:
            "Pesquisadora de Iniciação Científica — Sistemas de Controle",

          org: "LASEC",

          place:
            "Uberlândia, Brasil",

          bullets: [
            "Desenvolvi um pipeline de aquisição de dados para um aeropêndulo experimental utilizando sensores ESP32 e MPU9250.",
            "Coletei séries temporais PWM-ângulo por comunicação serial a 10 Hz.",
            "Realizei identificação dinâmica do sistema e validei o modelo matemático com respostas experimentais, alcançando ajuste de modelo de 81,39 %."
          ]
        },

        {
          title:
            "Pesquisadora de Iniciação Científica — Ciência de Dados",

          org: "GIM",

          place:
            "Uberlândia, Brasil",

          bullets: [
            "Desenvolvi e avaliei um fluxo de classificação utilizando Árvores de Decisão e o conjunto de dados Breast Cancer Wisconsin.",
            "Analisei variáveis preditivas, desempenho do modelo e regras de classificação interpretáveis.",
            "Apliquei análise de dados em R e modelagem estatística a um problema de classificação biomédica."
          ]
        }
      ]
    },

    projects: {
      label:
        "PROJETOS SELECIONADOS / REPOSITÓRIOS PÚBLICOS",

      title:
        "Uma visão detalhada dos projetos que compõem o portfólio.",

      viewGithub:
        "Ver no GitHub",

      liveDemo:
        "Demo online",

      playLive:
        "Jogar online",

      slides: [
        {
          type:
            "CIÊNCIA DE DADOS · R · MACHINE LEARNING",

          description:
            "Fluxo completo de classificação utilizando o conjunto de dados Breast Cancer Wisconsin, combinando análise exploratória, validação cruzada, Árvores de Decisão interpretáveis, análise ROC e interpretação de erros.",

          highlights: [
            ["Conjunto de dados", "569 observações"],
            ["Acurácia de teste", "85,96 %"],
            ["ROC-AUC", "0,8862"]
          ],

          visualLabel:
            "MODELO / AVALIAÇÃO",

          visualNote:
            "Baseline interpretável · classe maligna como evento de interesse"
        },

        {
          type:
            "ANÁLISE DE DADOS · AUTOMAÇÃO · PLANEJAMENTO",

          description:
            "Sistema modular de gestão de projetos de engenharia que sincroniza registros, carga de trabalho, progresso, alocação semanal de horas e planejamento através do Google Apps Script.",

          highlights: [
            ["Modelo central", "Base mestre de projetos"],
            ["Analytics", "KPIs e carga de trabalho"],
            ["Automação", "Sincronização entre planilhas"]
          ],

          visualLabel:
            "CARGA DE TRABALHO / PIPELINE"
        },

        {
          type:
            "AUTOMAÇÃO DE FLUXO · DADOS ESTRUTURADOS",

          description:
            "Fluxo web de solicitações que transforma entradas operacionais em registros validados, rastreáveis e prontos para análise, com notificações e acompanhamento de status.",

          highlights: [
            ["Entrada", "Formulário estruturado"],
            ["Armazenamento", "Registros centralizados"],
            ["Saída", "Status e notificações"]
          ],

          visualLabel:
            "SOLICITAÇÃO / CICLO",

          steps: [
            "Enviar",
            "Validar",
            "Armazenar",
            "Notificar"
          ]
        },

        {
          type:
            "JAVASCRIPT · LÓGICA INTERATIVA · FRONTEND",

          description:
            "Jogo interativo para navegador com renderização em Canvas, gerenciamento de estado, validação de movimentos, dificuldade progressiva, pontuação e desafios com tempo.",

          highlights: [
            ["Fases", "12 configurações"],
            ["Modos", "3 modos de jogo"],
            ["Interação", "Canvas + lógica de estado"]
          ],

          visualLabel:
            "ESTADO / LÓGICA",

          visualNote:
            "Selecionar → validar regra → atualizar estado → comparar gabarito"
        }
      ],

      githubLabel:
        "MAIS CÓDIGO & DETALHES DOS PROJETOS",

      githubText:
        "Explore os repositórios completos, a documentação e os códigos-fonte no meu perfil do GitHub.",

      githubButton:
        "Visitar perfil no GitHub"
    },

    education: {
      label:
        "FORMAÇÃO / IDIOMAS",

      title:
        "Engenharia Biomédica com trajetória acadêmica internacional.",

      exchange:
        "Engenharia Biomédica — Programa de Intercâmbio Internacional",

      ranked:
        "1º lugar",

      degree:
        "Bacharelado em Engenharia Biomédica",

      graduation:
        "Previsão de conclusão: 08/2027",

      present:
        "Atual",

      languages:
        "IDIOMAS",

      portuguese:
        "Português",

      native:
        "Nativo",

      french:
        "Francês",

      fluent:
        "Fluente · C2",

      english:
        "Inglês",

      advanced:
        "Avançado · C1",

      certifications:
        "CERTIFICAÇÕES",

      cert1:
        "R para Ciência de Dados: Análise de Dados e Modelagem Estatística",

      cert2:
        "Processamento e Análise de Sinais Biomédicos com R"
    },

    contact: {
      label: "CONTATO",
      email: "E-mail",
      cv: "Currículo em inglês"
    }
  },


  /* =======================================================
     FRANÇAIS
     ======================================================= */

  fr: {
    pageTitle:
      "Beatriz Martins Gomes Silva | Data Science & Ingénierie",

    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      contact: "Contact"
    },

    hero: {
      availability:
        "OUVERTE AUX OPPORTUNITÉS INTERNATIONALES ET À DISTANCE",

      role:
        "Data Science · Machine Learning · Data Analytics",

      summary:
        "Étudiante en génie biomédical combinant analyse de données, machine learning et résolution de problèmes d’ingénierie afin de développer des modèles interprétables, des tableaux de bord analytiques et des solutions d’automatisation.",

      projects:
        "Voir les projets",

      cv:
        "Télécharger le CV"
    },

    about: {
      label:
        "PROFIL / COMPÉTENCES",

      title:
        "Transformer des problèmes complexes en solutions structurées et analytiques.",

      p1:
        "Je suis étudiante en génie biomédical à l’Université Fédérale d’Uberlândia (UFU), avec une expérience académique internationale à Polytech Marseille et une expérience pratique en Data Science dans un environnement industriel en France.",

      p2:
        'Mon travail se situe à l’intersection de <strong>l’analyse de données, du machine learning, de l’automatisation et des systèmes d’ingénierie</strong>. J’aime transformer des problématiques opérationnelles ou expérimentales en jeux de données structurés, modèles interprétables et outils numériques utiles.',

      p3:
        "Je suis particulièrement intéressée par les opportunités internationales en Data Science, Data Analytics, Machine Learning et transformation numérique appliquée à l’ingénierie.",

      applied:
        "APPLICATIONS"
    },

    skills: {
      programming: {
        code: "A.01",
        title: "Programmation & Données",

        text:
          "Langages et bibliothèques utilisés pour nettoyer, transformer, modéliser et visualiser des données structurées et expérimentales.",

        tools: [
          "Python",
          "Pandas",
          "NumPy",
          "SQL",
          "R",
          "tidyverse",
          "MATLAB"
        ],

        applied:
          "Projets de machine learning, pipelines de données expérimentales et analyses d’ingénierie."
      },

      ml: {
        code: "A.02",
        title: "Machine Learning",

        text:
          "Méthodes utilisées pour développer, valider et interpréter des modèles prédictifs avec une attention particulière portée à leur évaluation.",

        tools: [
          "Classification",
          "Régression",
          "Clustering",
          "Arbres de décision",
          "Évaluation de modèles",
          "scikit-learn",
          "caret"
        ],

        applied:
          "Classification biomédicale, comparaison de modèles, validation croisée et interprétation des performances."
      },

      analytics: {
        code: "A.03",
        title: "Analyse de Données",

        text:
          "Méthodes analytiques permettant de transformer des données brutes en indicateurs fiables, tendances et visualisations explicatives.",

        tools: [
          "Nettoyage des données",
          "EDA",
          "Analyse de corrélation",
          "Statistiques descriptives",
          "Visualisation des données",
          "KPIs"
        ],

        applied:
          "Indicateurs qualité, données financières, tableaux de bord opérationnels et données de recherche."
      },

      digital: {
        code: "A.04",
        title: "Solutions Numériques",

        text:
          "Outils utilisés pour transformer les besoins opérationnels en interfaces pratiques, workflows automatisés et systèmes de données structurés.",

        tools: [
          "Looker Studio",
          "AppSheet",
          "Google Apps Script",
          "HTML",
          "CSS",
          "JavaScript"
        ],

        applied:
          "Tableaux de bord, workflows de demandes, automatisation de planification de charge et projets web interactifs."
      }
    },

    experience: {
      label:
        "EXPÉRIENCE / PROJETS",

      title:
        "Expérience en données industrielles, recherche et systèmes d’ingénierie.",

      jobs: [
        {
          title:
            "Stagiaire Data Science",

          org:
            "Expleo Group · Projet Airbus Helicopters",

          place:
            "Vitrolles, France",

          bullets: [
            "Développement de tableaux de bord interactifs sous Looker Studio pour l’analyse de données financières et d’indicateurs qualité.",
            "Conception d’un workflow structuré sous AppSheet pour améliorer la collecte de données opérationnelles et le traitement des demandes.",
            "Traduction des besoins opérationnels en tableaux de bord, modèles de données structurés et workflows numériques destinés aux utilisateurs internes."
          ]
        },

        {
          title:
            "Chercheuse de premier cycle — Systèmes de contrôle",

          org:
            "LASEC",

          place:
            "Uberlândia, Brésil",

          bullets: [
            "Développement d’un pipeline d’acquisition de données pour un aéropendule expérimental utilisant des capteurs ESP32 et MPU9250.",
            "Acquisition de séries temporelles PWM-angle par communication série à 10 Hz.",
            "Identification dynamique du système et validation du modèle mathématique à partir des réponses expérimentales, avec un ajustement de 81,39 %."
          ]
        },

        {
          title:
            "Chercheuse de premier cycle — Data Science",

          org:
            "GIM",

          place:
            "Uberlândia, Brésil",

          bullets: [
            "Développement et évaluation d’un workflow de classification par arbres de décision à partir du jeu de données Breast Cancer Wisconsin.",
            "Analyse des variables prédictives, des performances du modèle et de règles de classification interprétables.",
            "Application de l’analyse de données sous R et de la modélisation statistique à un problème de classification biomédicale."
          ]
        }
      ]
    },

    projects: {
      label:
        "PROJETS SÉLECTIONNÉS / DÉPÔTS PUBLICS",

      title:
        "Un aperçu détaillé des projets qui composent mon portfolio.",

      viewGithub:
        "Voir sur GitHub",

      liveDemo:
        "Démo en ligne",

      playLive:
        "Jouer en ligne",

      slides: [
        {
          type:
            "DATA SCIENCE · R · MACHINE LEARNING",

          description:
            "Workflow complet de classification utilisant le jeu de données Breast Cancer Wisconsin, combinant analyse exploratoire, validation croisée, arbres de décision interprétables, analyse ROC et interprétation des erreurs.",

          highlights: [
            ["Jeu de données", "569 observations"],
            ["Précision test", "85,96 %"],
            ["ROC-AUC", "0,8862"]
          ],

          visualLabel:
            "MODÈLE / ÉVALUATION",

          visualNote:
            "Modèle de référence interprétable · classe maligne comme événement cible"
        },

        {
          type:
            "DATA ANALYTICS · AUTOMATISATION · PLANIFICATION",

          description:
            "Système modulaire de gestion de projets d’ingénierie synchronisant les projets, la charge de travail, l’avancement, le suivi hebdomadaire et la planification grâce à Google Apps Script.",

          highlights: [
            ["Modèle central", "Base principale des projets"],
            ["Analytics", "KPIs & suivi de charge"],
            ["Automatisation", "Synchronisation multi-feuilles"]
          ],

          visualLabel:
            "CHARGE / PIPELINE"
        },

        {
          type:
            "AUTOMATISATION · DONNÉES STRUCTURÉES",

          description:
            "Workflow web transformant les demandes opérationnelles en enregistrements validés, traçables et prêts pour l’analyse, avec notifications et suivi du statut.",

          highlights: [
            ["Entrée", "Formulaire structuré"],
            ["Stockage", "Enregistrements centralisés"],
            ["Sortie", "Statuts & notifications"]
          ],

          visualLabel:
            "DEMANDE / CYCLE",

          steps: [
            "Soumettre",
            "Valider",
            "Stocker",
            "Notifier"
          ]
        },

        {
          type:
            "JAVASCRIPT · LOGIQUE INTERACTIVE · FRONTEND",

          description:
            "Jeu interactif sur navigateur utilisant Canvas, gestion d’état, validation des déplacements, difficulté progressive, système de score et défis chronométrés.",

          highlights: [
            ["Niveaux", "12 configurations"],
            ["Modes", "3 modes de jeu"],
            ["Interaction", "Canvas + logique d’état"]
          ],

          visualLabel:
            "ÉTAT / LOGIQUE",

          visualNote:
            "Sélectionner → valider la règle → mettre à jour l’état → comparer la cible"
        }
      ],

      githubLabel:
        "PLUS DE CODE & DÉTAILS",

      githubText:
        "Découvrez les dépôts complets, la documentation et le code source sur mon profil GitHub.",

      githubButton:
        "Voir mon profil GitHub"
    },

    education: {
      label:
        "FORMATION / LANGUES",

      title:
        "Un parcours international en génie biomédical.",

      exchange:
        "Génie Biomédical — Programme d’échange international",

      ranked:
        "Classée 1re",

      degree:
        "Licence / Bachelor en Génie Biomédical",

      graduation:
        "Diplôme prévu : 08/2027",

      present:
        "Présent",

      languages:
        "LANGUES",

      portuguese:
        "Portugais",

      native:
        "Langue maternelle",

      french:
        "Français",

      fluent:
        "Courant · C2",

      english:
        "Anglais",

      advanced:
        "Avancé · C1",

      certifications:
        "CERTIFICATIONS",

      cert1:
        "R pour la Data Science : Analyse de données et modélisation statistique",

      cert2:
        "Traitement et analyse des signaux biomédicaux avec R"
    },

    contact: {
      label:
        "CONTACT",

      email:
        "E-mail",

      cv:
        "CV en anglais"
    }
  }
};


/* =========================================================
   HELPERS
   ========================================================= */

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element && value !== undefined) {
    element.textContent = value;
  }
}


function setHTML(selector, value) {
  const element = document.querySelector(selector);

  if (element && value !== undefined) {
    element.innerHTML = value;
  }
}


function setList(selector, values) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    if (values[index] !== undefined) {
      element.textContent = values[index];
    }
  });
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLanguage(language) {

  const t = portfolioTranslations[language];

  if (!t) return;


  /* HTML language */

  document.documentElement.lang =
    language === "pt"
      ? "pt-BR"
      : language === "fr"
      ? "fr"
      : "en";


  document.title = t.pageTitle;


  /* =======================================================
     NAVIGATION
     ======================================================= */

  setText('.main-nav a[href="#about"]', t.nav.about);
  setText('.main-nav a[href="#experience"]', t.nav.experience);
  setText('.main-nav a[href="#projects"]', t.nav.projects);
  setText('.main-nav a[href="#education"]', t.nav.education);
  setText('.main-nav a[href="#contact"]', t.nav.contact);


  /* =======================================================
     HERO
     ======================================================= */

  const availability =
    document.querySelector(".availability");

  if (availability) {
    availability.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent =
          ` ${t.hero.availability}`;
      }
    });
  }

  setText(".hero-role", t.hero.role);
  setText(".hero-summary", t.hero.summary);

  setText(
    '.hero-actions .btn-primary',
    t.hero.projects
  );

  setText(
    '.hero-actions .btn-secondary',
    t.hero.cv
  );


  /* =======================================================
     ABOUT
     ======================================================= */

  setText(
    "#about .section-label",
    t.about.label
  );

  setText(
    "#about .section-heading h2",
    t.about.title
  );


  const aboutParagraphs =
    document.querySelectorAll(
      "#about .about-copy > p"
    );

  if (aboutParagraphs[0])
    aboutParagraphs[0].textContent = t.about.p1;

  if (aboutParagraphs[1])
    aboutParagraphs[1].innerHTML = t.about.p2;

  if (aboutParagraphs[2])
    aboutParagraphs[2].textContent = t.about.p3;


  setText(
    ".skill-application .micro-label",
    t.about.applied
  );


  /* =======================================================
     SKILLS
     ======================================================= */

  Object.keys(t.skills).forEach(key => {
    skillData[key] = {
      ...t.skills[key]
    };
  });


  const skillTitles =
    document.querySelectorAll(
      ".skill-tab .skill-title"
    );

  const skillKeys = [
    "programming",
    "ml",
    "analytics",
    "digital"
  ];

  skillTitles.forEach((element, index) => {
    element.textContent =
      t.skills[skillKeys[index]].title;
  });


  const activeSkill =
    document.querySelector(
      ".skill-tab.active"
    );

  if (activeSkill) {

    const data =
      skillData[
        activeSkill.dataset.skill
      ];

    skillDetailCode.textContent =
      data.code;

    skillDetailTitle.textContent =
      data.title;

    skillDetailText.textContent =
      data.text;

    skillApplied.textContent =
      data.applied;

    skillTools.innerHTML =
      data.tools
        .map(tool => `<span>${tool}</span>`)
        .join("");
  }


  /* =======================================================
     EXPERIENCE
     ======================================================= */

  setText(
    "#experience .section-label",
    t.experience.label
  );

  setText(
    "#experience .section-heading h2",
    t.experience.title
  );


  const jobElements =
    document.querySelectorAll(
      "#experience .timeline-item"
    );

  jobElements.forEach((job, index) => {

    const data =
      t.experience.jobs[index];

    if (!data) return;


    const title =
      job.querySelector("h3");

    const org =
      job.querySelector(".timeline-org");

    const place =
      job.querySelector(".timeline-place");

    if (title)
      title.textContent = data.title;

    if (org)
      org.textContent = data.org;

    if (place)
      place.textContent = data.place;


    const bullets =
      job.querySelectorAll("li");

    bullets.forEach((bullet, i) => {

      if (data.bullets[i]) {
        bullet.textContent =
          data.bullets[i];
      }

    });

  });


  /* =======================================================
     PROJECTS
     ======================================================= */

  setText(
    "#projects .section-label",
    t.projects.label
  );

  setText(
    "#projects .section-heading h2",
    t.projects.title
  );


  const projectSlides =
    document.querySelectorAll(
      ".project-slide"
    );

  projectSlides.forEach((slide, index) => {

    const data =
      t.projects.slides[index];

    if (!data) return;


    setTextInside(
      slide,
      ".project-type",
      data.type
    );

    setTextInside(
      slide,
      ".project-info > p",
      data.description
    );


    const highlights =
      slide.querySelectorAll(
        ".project-highlights > div"
      );

    highlights.forEach((item, i) => {

      if (!data.highlights[i])
        return;

      const label =
        item.querySelector("span");

      const value =
        item.querySelector("strong");

      if (label)
        label.textContent =
          data.highlights[i][0];

      if (value)
        value.textContent =
          data.highlights[i][1];

    });


    const visualLabel =
      slide.querySelector(
        ".visual-label"
      );

    if (
      visualLabel &&
      data.visualLabel
    ) {
      visualLabel.textContent =
        data.visualLabel;
    }


    const visualNote =
      slide.querySelector(
        ".visual-note"
      );

    if (
      visualNote &&
      data.visualNote
    ) {
      visualNote.textContent =
        data.visualNote;
    }


    if (data.steps) {

      const steps =
        slide.querySelectorAll(
          ".request-step strong"
        );

      steps.forEach((step, i) => {

        if (data.steps[i]) {
          step.textContent =
            data.steps[i];
        }

      });

    }

  });


  /* Project buttons */

  document
    .querySelectorAll(
      ".project-btn.primary"
    )
    .forEach(button => {

      const arrow =
        button.querySelector("span");

      button.childNodes[0].textContent =
        `${t.projects.viewGithub} `;

      if (arrow)
        arrow.textContent = "↗";

    });


  const serviceDemo =
    document.querySelector(
      '.project-slide[data-index="2"] .project-btn.secondary'
    );

  if (serviceDemo) {

    serviceDemo.childNodes[0].textContent =
      `${t.projects.liveDemo} `;

  }


  const gameDemo =
    document.querySelector(
      '.project-slide[data-index="3"] .project-btn.secondary'
    );

  if (gameDemo) {

    gameDemo.childNodes[0].textContent =
      `${t.projects.playLive} `;

  }


  setText(
    ".github-cta .micro-label",
    t.projects.githubLabel
  );

  setText(
    ".github-cta p",
    t.projects.githubText
  );


  const githubButton =
    document.querySelector(
      ".github-cta > a"
    );

  if (githubButton) {

    githubButton.innerHTML =
      `${t.projects.githubButton} <span>↗</span>`;

  }


  /* =======================================================
     EDUCATION
     ======================================================= */

  setText(
    "#education .section-label",
    t.education.label
  );

  setText(
    "#education .section-heading h2",
    t.education.title
  );


  const educationItems =
    document.querySelectorAll(
      ".education-item"
    );


  if (educationItems[0]) {

    setTextInside(
      educationItems[0],
      "p",
      t.education.exchange
    );

    setTextInside(
      educationItems[0],
      ".education-note",
      t.education.ranked
    );

  }


  if (educationItems[1]) {

    setTextInside(
      educationItems[1],
      "p",
      t.education.degree
    );

    setTextInside(
      educationItems[1],
      ".education-note",
      t.education.graduation
    );


    const year =
      educationItems[1]
        .querySelector(
          ".education-year"
        );

    if (year) {

      year.textContent =
        language === "en"
          ? "2022 — Present"
          : language === "pt"
          ? "2022 — Atual"
          : "2022 — Présent";

    }

  }


  setText(
    ".language-card .micro-label",
    t.education.languages
  );


  const languageRows =
    document.querySelectorAll(
      ".language-row"
    );


  if (languageRows[0]) {

    setTextInside(
      languageRows[0],
      "span",
      t.education.portuguese
    );

    setTextInside(
      languageRows[0],
      "strong",
      t.education.native
    );

  }


  if (languageRows[1]) {

    setTextInside(
      languageRows[1],
      "span",
      t.education.french
    );

    setTextInside(
      languageRows[1],
      "strong",
      t.education.fluent
    );

  }


  if (languageRows[2]) {

    setTextInside(
      languageRows[2],
      "span",
      t.education.english
    );

    setTextInside(
      languageRows[2],
      "strong",
      t.education.advanced
    );

  }


  setText(
    ".certifications > .micro-label",
    t.education.certifications
  );


  const certs =
    document.querySelectorAll(
      ".cert-row strong"
    );

  if (certs[0])
    certs[0].textContent =
      t.education.cert1;

  if (certs[1])
    certs[1].textContent =
      t.education.cert2;


  /* =======================================================
     CONTACT
     ======================================================= */

  setText(
    "#contact .section-label",
    t.contact.label
  );


  const contactItems =
    document.querySelectorAll(
      ".contact-item"
    );

  if (contactItems[0]) {

    setTextInside(
      contactItems[0],
      "span",
      t.contact.email
    );

  }


  if (contactItems[3]) {

    setTextInside(
      contactItems[3],
      "strong",
      t.contact.cv
    );

  }


  /* =======================================================
     BUTTON STATE
     ======================================================= */

  document
    .querySelectorAll(".lang-btn")
    .forEach(button => {

      const active =
        button.dataset.lang === language;

      button.classList.toggle(
        "active",
        active
      );

      button.setAttribute(
        "aria-pressed",
        String(active)
      );

    });


  /* Save language */

  localStorage.setItem(
    "portfolio-language",
    language
  );


  /* Update URL */

  const url =
    new URL(window.location.href);

  url.searchParams.set(
    "lang",
    language
  );

  history.replaceState(
    {},
    "",
    url
  );

}


/* Helper for elements inside a parent */

function setTextInside(
  parent,
  selector,
  text
) {

  const element =
    parent.querySelector(selector);

  if (element) {
    element.textContent = text;
  }

}


/* =========================================================
   LANGUAGE BUTTONS
   ========================================================= */

document
  .querySelectorAll(".lang-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setLanguage(
          button.dataset.lang
        );

      }
    );

  });


/* =========================================================
   INITIAL LANGUAGE
   ========================================================= */

const params =
  new URLSearchParams(
    window.location.search
  );


const urlLanguage =
  params.get("lang");


const savedLanguage =
  localStorage.getItem(
    "portfolio-language"
  );


const supportedLanguages =
  ["en", "pt", "fr"];


const initialLanguage =
  supportedLanguages.includes(urlLanguage)
    ? urlLanguage
    : supportedLanguages.includes(savedLanguage)
    ? savedLanguage
    : "en";


setLanguage(initialLanguage);

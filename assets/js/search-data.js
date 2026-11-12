// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal papers and manuscripts under review, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects and open-source software.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-taught-a-workshop-on-multi-agent-systems-and-the-model-context-protocol-at-devfest-annapolis-for-100-students-and-faculty",
          title: 'Taught a workshop on multi-agent systems and the Model Context Protocol at DevFest...',
          description: "",
          section: "News",},{id: "news-completed-an-ms-in-data-science-at-george-washington-university",
          title: 'Completed an MS in Data Science at George Washington University.',
          description: "",
          section: "News",},{id: "news-received-a-gw-open-source-student-award-for-danger-detection-with-ml",
          title: 'Received a GW Open-Source Student Award for Danger Detection with ML.',
          description: "",
          section: "News",},{id: "news-the-laiser-paper-entered-open-peer-review-at-the-journal-of-open-source-software",
          title: 'The LAiSER paper entered open peer review at the Journal of Open Source...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-laiser-at-the-university-of-chicago-ai-science-summer-school",
          title: 'Presented a poster on LAiSER at the University of Chicago AI+Science Summer School....',
          description: "",
          section: "News",},{id: "news-spoke-as-a-panelist-at-united-nations-open-source-week-community-day-the-proposal-was-selected-from-700-submissions",
          title: 'Spoke as a panelist at United Nations Open Source Week Community Day; the...',
          description: "",
          section: "News",},{id: "news-joined-the-open-syllabus-project-as-a-data-science-consultant-leading-its-ai-policy-project",
          title: 'Joined the Open Syllabus Project as a Data Science Consultant, leading its AI...',
          description: "",
          section: "News",},{id: "news-co-organized-devfest-dc-2026-with-google-developer-groups-dc-for-800-attendees",
          title: 'Co-organized DevFest DC 2026 with Google Developer Groups DC for 800 attendees.',
          description: "",
          section: "News",},{id: "news-submitted-agent-security-meets-regulatory-reality-to-software-practice-and-experience-with-krishna-mohan-guda-nagavenkata-srinivasa-and-karthik-guda-vishnu-the-reference-implementation-is-open-source",
          title: 'Submitted Agent Security Meets Regulatory Reality to Software: Practice and Experience with Krishna...',
          description: "",
          section: "News",},{id: "news-invited-to-speak-at-gw-coders-lunch-and-learn-on-december-2-the-open-source-edge-when-sharing-your-code-becomes-your-start-up-moat",
          title: 'Invited to speak at GW Coders Lunch and Learn on December 2: The...',
          description: "",
          section: "News",},{id: "projects-benchmarking-database-architectures-for-network-analytics",
          title: 'Benchmarking Database Architectures for Network Analytics',
          description: "Comprehensive performance analysis of MySQL, MongoDB, and Neo4j for graph operations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Benchmarking-Database-Architectures-for-Network-Analytics/";
            },},{id: "projects-case-bound-controls-for-autonomous-agents",
          title: 'Case-Bound Controls for Autonomous Agents',
          description: "Open-source reference implementation of auditable control invariants for autonomous agents in regulated financial workflows",
          section: "Projects",handler: () => {
              window.location.href = "/projects/casebound/";
            },},{id: "projects-danger-detection-with-ml",
          title: 'Danger Detection with ML',
          description: "Real-time computer vision prototype that detects firearms and fire in video streams and sends alerts with visual evidence",
          section: "Projects",handler: () => {
              window.location.href = "/projects/danger-detection/";
            },},{id: "projects-frameworklens",
          title: 'FrameworkLens',
          description: "Lightweight AI risk + ERM survey that scores readiness across NIST AI RMF, COSO ERM, and core GRC practices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FrameworkLens/";
            },},{id: "projects-global-co-emissions-analysis-dashboard",
          title: 'Global CO₂ Emissions Analysis Dashboard',
          description: "Interactive platform analyzing 223 years of climate data to identify emission drivers and solutions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Global-CO2-Emissions-Analysis-Dashboard/";
            },},{id: "projects-laiser",
          title: 'LAiSER',
          description: "Open-source framework that links skills in job postings and syllabi to national taxonomies, with every match traceable to its source",
          section: "Projects",handler: () => {
              window.location.href = "/projects/laiser/";
            },},{id: "projects-my-own-medic-m-o-m",
          title: 'My Own Medic (M.O.M)',
          description: "Prototype of a chat-based health information assistant built on a hosted language model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/My-Own-Medic/";
            },},{id: "projects-reinforcement-learning-for-pseudo-labeling",
          title: 'Reinforcement Learning for Pseudo-Labeling',
          description: "Two approaches to selecting pseudo-labels with reinforcement learning, and what made them unstable",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Reinforcement-Learning-for-Pseudo-Labeling/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%68%61%6E%69%6E%64%72%61.%63%6F%6E%6E%65%63%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/phanindra-max", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/phanindra-max", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-6447-3760", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/phanindraMax", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

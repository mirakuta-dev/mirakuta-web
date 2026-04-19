export type Locale = "en" | "ko";

export const LOCALES: Locale[] = ["en", "ko"];
export const DEFAULT_LOCALE: Locale = "en";

export const translations = {
  en: {
    nav: {
      products: "Products",
      docs: "Docs",
      changelog: "Changelog",
      about: "About",
      github: "GitHub",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      headline: "Windows dev setup, done right.",
      subline: "One command. Everything you need. Nothing you don't.",
      primary: "View on GitHub →",
      secondary: "See what it does",
    },
    problem: {
      heading:
        "Setting up a Windows dev environment shouldn't take an afternoon.",
      quotes: [
        "Which PowerShell version? Do I need WSL? What's winget?",
        "Spent 3 hours on fonts alone. Still not sure if it's right.",
        "My Mac just works. Why is Windows like this.",
      ],
    },
    solution: {
      heading: "Everything sorted. In one command.",
      cards: [
        {
          title: "Go, Git, Node — installed",
          body: "The tools you actually need, nothing else.",
        },
        {
          title: "WSL + Ubuntu — ready",
          body: "Linux on Windows, configured properly.",
        },
        {
          title: "Fonts + terminal — configured",
          body: "JetBrains Mono. Looks good. Works great.",
        },
        {
          title: "Presets — pick your stack",
          body: "Minimal, full-stack, data science. You choose.",
        },
      ],
    },
    socialProof: {
      heading: "Early days. Building in the open.",
      body: "Star the repo to follow along.",
      cta: "Star on GitHub →",
    },
    cta: {
      headline: "Ready to stop configuring?",
      subline: "Go build something.",
      primary: "View on GitHub →",
    },
    footer: {
      left: "mirakuta · MIT License",
      github: "GitHub",
      email: "help@mirakuta.dev",
    },
    products: {
      title: "Products",
      subtitle: "Tools we're building at mirakuta.",
      status: {
        active: "Active",
        beta: "Beta",
        archived: "Archived",
        "coming-soon": "Coming soon",
      },
      visit: "Visit →",
      source: "Source",
    },
    about: {
      title: "About",
      intro:
        "Hi, I'm Mark. I build developer tools from Seoul. mirakuta is my attempt at making Windows a first-class dev environment.",
      stackHeading: "Stack",
      builtHeading: "Built with mirakuta",
      contactHeading: "Contact",
    },
    locale: {
      label: "Language",
      en: "EN",
      ko: "KO",
    },
  },
  ko: {
    nav: {
      products: "제품",
      docs: "문서",
      changelog: "변경사항",
      about: "소개",
      github: "GitHub",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
    },
    hero: {
      headline: "윈도우 개발 환경, 제대로 한 번에.",
      subline: "명령어 하나. 필요한 건 전부. 필요 없는 건 하나도.",
      primary: "GitHub에서 보기 →",
      secondary: "어떻게 동작하는지 보기",
    },
    problem: {
      heading: "윈도우 개발 환경 세팅에 반나절을 쓸 필요는 없습니다.",
      quotes: [
        "파워셸 어느 버전? WSL 필요한가? winget은 뭐지?",
        "폰트만 세 시간 걸렸어요. 제대로 된 건지도 모르겠어요.",
        "맥은 그냥 되던데. 윈도우는 왜 이래요.",
      ],
    },
    solution: {
      heading: "모든 게 정리됐습니다. 명령어 하나로.",
      cards: [
        {
          title: "Go, Git, Node — 설치 완료",
          body: "실제로 필요한 도구만, 군더더기 없이.",
        },
        {
          title: "WSL + 우분투 — 준비 완료",
          body: "윈도우 위의 리눅스, 제대로 설정된 상태로.",
        },
        {
          title: "폰트 + 터미널 — 설정 완료",
          body: "JetBrains Mono. 보기 좋고, 잘 작동합니다.",
        },
        {
          title: "프리셋 — 스택 선택",
          body: "미니멀, 풀스택, 데이터 사이언스. 원하는 대로.",
        },
      ],
    },
    socialProof: {
      heading: "아직 초기입니다. 열린 공간에서 만들어가는 중.",
      body: "레포를 스타하고 소식을 받아보세요.",
      cta: "GitHub에서 스타하기 →",
    },
    cta: {
      headline: "이제 세팅은 그만하고 싶다면.",
      subline: "뭔가를 만들어봅시다.",
      primary: "GitHub에서 보기 →",
    },
    footer: {
      left: "mirakuta · MIT License",
      github: "GitHub",
      email: "help@mirakuta.dev",
    },
    products: {
      title: "제품",
      subtitle: "mirakuta에서 만들고 있는 도구들.",
      status: {
        active: "정식",
        beta: "베타",
        archived: "보관됨",
        "coming-soon": "준비중",
      },
      visit: "방문하기 →",
      source: "소스",
    },
    about: {
      title: "소개",
      intro:
        "안녕하세요, Mark입니다. 서울에서 개발자 도구를 만듭니다. mirakuta는 윈도우를 일급 개발 환경으로 만들어보려는 시도입니다.",
      stackHeading: "기술 스택",
      builtHeading: "mirakuta로 만든 것",
      contactHeading: "연락",
    },
    locale: {
      label: "언어",
      en: "EN",
      ko: "KO",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];

const STORAGE_KEY = "relatoo.language";
const SUPPORTED_LANGS = new Set(["zh", "en"]);
const ZH_COUNTRIES = new Set(["CN", "HK", "MO", "TW", "SG"]);

const translations = {
  zh: {
    "meta.title": "Relatoo | 涌现式认知社会",
    "meta.description": "Relatoo：涌现式认知社会模拟平台。以金字塔认知架构构建拥有动机、记忆与社会行为的 AI 公民。",
    "nav.aiBrief": "AI说明",
    "nav.vision": "愿景",
    "nav.pyramid": "金字塔",
    "nav.useCase": "用例",
    "nav.demo": "Demo",
    "nav.roadmap": "路线图",
    "nav.githubAria": "打开 GitHub 仓库",
    "hero.kicker": "超越二元模拟",
    "hero.title": "涌现式认知社会模拟",
    "hero.desc1": "Relatoo 是一个面向 AI Agent 的社会模拟平台，用于运行具备持续演化能力的社会世界。",
    "hero.desc2": "Relatoo 让 Agent 不只是“会说话”，而是拥有本能驱动、概念记忆与理性表达的三层脑内结构。",
    "hero.demoCta": "查看小镇 Demo",
    "ai.title": "AI Agent 快速说明",
    "ai.desc": "为了让其他 AI Agent 快速理解本项目，这里用结构化方式说明：Relatoo 是一个“认知架构驱动”的多智能体社会模拟工具，不是普通对话机器人集合。",
    "ai.card1.title": "工具类型",
    "ai.card1.body": "多智能体认知社会模拟器",
    "ai.card2.title": "核心输入",
    "ai.card2.body": "环境信号 + Agent 状态 + 历史记忆图谱",
    "ai.card3.title": "核心输出",
    "ai.card3.body": "自主行动、对话、社会关系与涌现事件",
    "ai.card4.title": "Agent 模型",
    "ai.card4.body": "L1 反应驱动 + L2 概念记忆 + L3 推理/LLM",
    "vision.title": "为什么做这个",
    "vision.desc": "现有 AI 社会模拟常常停留在 Prompt 交换层。Relatoo 把“认知结构”作为核心对象，让行为来自状态、记忆与环境反馈的闭环，而不是预设台词。",
    "vision.point1": "从单 Prompt 过渡到多层认知系统",
    "vision.point2": "从文本记忆过渡到概念图谱联想",
    "vision.point3": "从脚本行为过渡到内生动机行为",
    "pyramid.title": "脑内金字塔",
    "pyramid.l3.title": "理性与交流层",
    "pyramid.l3.body": "LLM 负责规划与语言表达。",
    "pyramid.l2.title": "概念与记忆层",
    "pyramid.l2.body": "GraphRAG + Zep 管理记忆图谱与联想激活。",
    "pyramid.l1.title": "生理与本能层",
    "pyramid.l1.body": "疲劳、压力、饥饿等数值状态驱动决策。",
    "usecase.title": "用例 · 一轮模拟具体发生什么",
    "usecase.step1.title": "环境采样",
    "usecase.step1.body": "：系统读取当前小镇状态（时间、位置、资源、附近 Agent 行为、事件信号）。",
    "usecase.step2.title": "L1 状态更新",
    "usecase.step2.body": "：每个 Agent 的饥饿、疲劳、压力、快乐等数值变化，形成当下动机优先级。",
    "usecase.step3.title": "L2 记忆检索与联想",
    "usecase.step3.body": "：Zep 提取相关情节记忆，GraphRAG 激活概念关系（例如“咖啡→提神→效率”）。",
    "usecase.step4.title": "L3 决策生成",
    "usecase.step4.body": "：LLM 基于动机 + 记忆上下文，输出可执行的社交或行动决策。",
    "usecase.step5.title": "世界执行",
    "usecase.step5.body": "：决策在 Unity 小镇落地，改变位置、资源、关系或群体氛围。",
    "usecase.step6.title": "结果写回",
    "usecase.step6.body": "：新事件回写到记忆层，作为下一轮模拟的输入，形成闭环演化。",
    "demo.title": "小镇 Demo",
    "demo.desc": "这里直接展示 Relatoo 小镇模拟的实际运行画面，包括持续演化视频和四个关键场景截图。",
    "demo.videoCaption": "小镇演化演示",
    "demo.image1Caption": "小镇总览",
    "demo.image2Caption": "邻里互动",
    "demo.image3Caption": "社交流动快照",
    "demo.image4Caption": "聚落布局",
    "demo.image1Alt": "Relatoo 模拟小镇总览，包含多位智能体与建筑",
    "demo.image2Alt": "Relatoo 小镇界面，显示智能体互动和街区活动",
    "demo.image3Alt": "Relatoo 世界模拟场景，展示建筑群与社交流动",
    "demo.image4Alt": "Relatoo 模拟画面，展示道路、房屋和智能体路径",
    "roadmap.title": "路线图",
    "roadmap.phase1": "Phase 1: 原型定义 + Unity Demo",
    "roadmap.phase2": "Phase 2: Zep 记忆接入",
    "roadmap.phase3": "Phase 3: GraphRAG 概念联想",
    "roadmap.phase4": "Phase 4: 20+ Agent 长期自治测试",
    "roadmap.phase5": "Phase 5: 开源平台与资产",
    "footer.tagline": "Relatoo 项目 · 为深度模拟而构建"
  },
  en: {
    "meta.title": "Relatoo | Emergent Cognitive Society",
    "meta.description": "Relatoo is an emergent cognitive society simulator built with a pyramid architecture for drive, memory, and social behavior.",
    "nav.aiBrief": "AI Brief",
    "nav.vision": "Vision",
    "nav.pyramid": "Pyramid",
    "nav.useCase": "Use Case",
    "nav.demo": "Demo",
    "nav.roadmap": "Roadmap",
    "nav.githubAria": "Open GitHub repository",
    "hero.kicker": "BEYOND BINARY SIMULATION",
    "hero.title": "Emergent Cognitive Society Simulation",
    "hero.desc1": "Relatoo is an AI-agent-oriented simulation platform for running persistent social worlds with cognitive depth.",
    "hero.desc2": "Relatoo gives every agent a three-layer cognition stack with instinctive drives, conceptual memory, and rational expression.",
    "hero.demoCta": "View Town Demo",
    "ai.title": "AI Agent Quick Brief",
    "ai.desc": "For fast machine-readable understanding: Relatoo is a cognition-architecture-driven multi-agent social simulator, not a collection of chatbots.",
    "ai.card1.title": "Tool Type",
    "ai.card1.body": "Multi-agent cognitive society simulator",
    "ai.card2.title": "Core Input",
    "ai.card2.body": "Environment signals + Agent states + historical memory graph",
    "ai.card3.title": "Core Output",
    "ai.card3.body": "Autonomous actions, dialogue, social relations, and emergent events",
    "ai.card4.title": "Agent Model",
    "ai.card4.body": "L1 reactive drives + L2 conceptual memory + L3 reasoning/LLM",
    "vision.title": "Why Build This",
    "vision.desc": "Many social simulation systems stop at prompt exchanges. Relatoo treats cognition itself as the core object, so behavior emerges from a closed loop of state, memory, and environmental feedback.",
    "vision.point1": "From single prompts to layered cognitive systems",
    "vision.point2": "From text memory to concept-graph association",
    "vision.point3": "From scripted actions to intrinsic motivation",
    "pyramid.title": "Cognitive Pyramid",
    "pyramid.l3.title": "Reasoning and Communication Layer",
    "pyramid.l3.body": "LLMs handle planning and language expression.",
    "pyramid.l2.title": "Concept and Memory Layer",
    "pyramid.l2.body": "GraphRAG + Zep manage memory graphs and associative activation.",
    "pyramid.l1.title": "Physiology and Instinct Layer",
    "pyramid.l1.body": "Numeric states like fatigue, stress, and hunger drive decisions.",
    "usecase.title": "Use Case · What Happens in One Simulation Round",
    "usecase.step1.title": "Environment Sampling",
    "usecase.step1.body": ": The system reads current town state (time, location, resources, nearby agent behavior, event signals).",
    "usecase.step2.title": "L1 State Update",
    "usecase.step2.body": ": Each agent updates hunger, fatigue, stress, and happiness values to form motivation priorities.",
    "usecase.step3.title": "L2 Retrieval and Association",
    "usecase.step3.body": ": Zep retrieves relevant episode memory, while GraphRAG activates concept relations (for example, coffee -> alertness -> efficiency).",
    "usecase.step4.title": "L3 Decision Generation",
    "usecase.step4.body": ": The LLM produces executable social or task decisions based on motives and memory context.",
    "usecase.step5.title": "World Execution",
    "usecase.step5.body": ": Decisions are executed in Unity, changing position, resources, relationships, or group atmosphere.",
    "usecase.step6.title": "Result Write-Back",
    "usecase.step6.body": ": New events are written back to memory and become inputs for the next round.",
    "demo.title": "Town Demo",
    "demo.desc": "This section shows real Relatoo simulation footage, including one evolving video and four key scene snapshots.",
    "demo.videoCaption": "Town Evolution Demo",
    "demo.image1Caption": "Town Overview",
    "demo.image2Caption": "Neighborhood Activity",
    "demo.image3Caption": "Social Flow Snapshot",
    "demo.image4Caption": "Settlement Layout",
    "demo.image1Alt": "Relatoo simulated town overview with multiple agents and buildings",
    "demo.image2Alt": "Relatoo town interface showing agent interactions and neighborhood activity",
    "demo.image3Alt": "Relatoo world simulation with clustered buildings and social flow",
    "demo.image4Alt": "Relatoo simulation scene with roads, homes, and active agent paths",
    "roadmap.title": "Roadmap",
    "roadmap.phase1": "Phase 1: Prototype Definition + Unity Demo",
    "roadmap.phase2": "Phase 2: Zep Memory Integration",
    "roadmap.phase3": "Phase 3: GraphRAG Concept Association",
    "roadmap.phase4": "Phase 4: Long-run Autonomy Test with 20+ Agents",
    "roadmap.phase5": "Phase 5: Open-source Platform and Assets",
    "footer.tagline": "Relatoo Project · Built for Deep Simulation"
  }
};

function normalizeLang(value) {
  return SUPPORTED_LANGS.has(value) ? value : null;
}

function getText(lang, key) {
  return translations[lang]?.[key] ?? translations.en[key] ?? "";
}

function setButtonState(lang) {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    const active = button.dataset.langToggle === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function applyLanguage(lang, options = {}) {
  const normalized = normalizeLang(lang) ?? "en";
  const { persist = true } = options;

  document.documentElement.lang = normalized === "zh" ? "zh-CN" : "en";
  document.title = getText(normalized, "meta.title");

  const metaDescription = document.getElementById("meta-description");
  if (metaDescription) {
    metaDescription.setAttribute("content", getText(normalized, "meta.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const content = getText(normalized, key);
    if (content) {
      element.textContent = content;
    }
  });

  document.querySelectorAll("[data-i18n-attr-key]").forEach((element) => {
    const key = element.dataset.i18nAttrKey;
    const attr = element.dataset.i18nAttr;
    const content = getText(normalized, key);
    if (attr && content) {
      element.setAttribute(attr, content);
    }
  });

  setButtonState(normalized);

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, normalized);
    } catch {
      // Ignore storage errors in private or restricted browsing modes.
    }
  }
}

function readLanguageFromUrl() {
  const value = new URLSearchParams(window.location.search).get("lang");
  return normalizeLang(value);
}

function readLanguageFromStorage() {
  try {
    return normalizeLang(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function detectLanguageFromBrowser() {
  const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
  const hasChinese = candidates.some((value) => String(value).toLowerCase().startsWith("zh"));
  return hasChinese ? "zh" : "en";
}

async function detectLanguageFromIp() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1200);

  try {
    const response = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
      signal: controller.signal
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    const countryCode = String(payload.country_code || payload.country || "").toUpperCase();

    if (!countryCode) {
      return null;
    }

    return ZH_COUNTRIES.has(countryCode) ? "zh" : "en";
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function initializeLanguage() {
  const fromUrl = readLanguageFromUrl();
  if (fromUrl) {
    applyLanguage(fromUrl, { persist: true });
    return;
  }

  const fromStorage = readLanguageFromStorage();
  if (fromStorage) {
    applyLanguage(fromStorage, { persist: false });
    return;
  }

  const fromBrowser = detectLanguageFromBrowser();
  applyLanguage(fromBrowser, { persist: false });

  const fromIp = await detectLanguageFromIp();
  if (fromIp) {
    applyLanguage(fromIp, { persist: true });
    return;
  }

  applyLanguage(fromBrowser, { persist: true });
}

function bindLanguageSwitcher() {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = normalizeLang(button.dataset.langToggle);
      if (target) {
        applyLanguage(target, { persist: true });
      }
    });
  });
}

bindLanguageSwitcher();
initializeLanguage();

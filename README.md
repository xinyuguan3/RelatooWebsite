Relatoo: 涌现式认知社会模拟平台
Beyond Binary Simulation. 构建拥有“金字塔认知架构”的 AI 公民，探索真正具有深度和动机的数字社会。

查看 GitHub 仓库 | 观看 Unity 演示视频 | 加入开发者社区

🛑 愿景：为什么要建立 Relatoo？
目前的 AI 社会模拟（基于大语言模型 LLM）大多停留在**“字符交换”**的表面。Agent 只是 Prompt 的套壳，它们的行为缺乏脑内的架构与因果循环支撑，记忆脆弱，且同质化严重。

真正的社会并非由聊天机器人构成，而是由拥有独立认知结构、本能动机和复杂概念系统的个体构成。

在人脑中，语言思维（LLM 的擅长领域）只占认知的一小部分。Relatoo 旨在填补这一空白。我们不仅在模拟社会互动，我们更在模拟驱动互动的认知过程。

🧠 核心创新：脑内金字塔 (The Cognitive Pyramid)
Relatoo 的每个 Agent 不是一个单一的 Prompt，而是一个分层的认知架构微服务群。

We believe that LLM is just a tiny part of a functional brain.

代码段
graph TD
    A[顶层: 理性与语言层 <br/> (LLM - e.g., GPT-4o)] -->|规划与表达| B[行为输出];
    C[中层: 概念与世界模型 <br/> (GraphRAG + Zep)] -->|提供感性认知/上下文| A;
    C -->|联想激活| C;
    D[底层: 感知与生理本能 <br/> (数值状态机/状态树)] -->|驱动力/压力| A;
    D -->|状态改变| C;
    E[Unity 环境信号] -->|感知输入| D;
    E -->|经验输入| C;
L1 - 生理与本能层（Reactive Layer）： 数值化驱动。Agent 拥有饥饿、疲劳、压力（皮质醇）、快乐（多巴胺）等状态。这些是Agent行动的原始动机，不经过 LLM，直接影响高级决策。

L2 - 概念与长期记忆层（Conceptual Layer）： Agents 不仅存储文字，还存储权重化的概念图谱。通过 Zep 管理情节记忆，通过 GraphRAG 将记忆转化为实体间的复杂关系（如：“张三-是-吝啬的” -> [权重: 敌对]）。

L3 - 理性与交流层（Reasoning Layer）： LLM 的位置。它接收来自 L1 的动机和 L2 的感性上下文，将其翻译成符合性格的社交行为和语言。

🛠️ 技术架构：如何落地？
我们拒绝空中楼阁。Relatoo 利用业界最前沿的开源框架构建这一复杂的认知系统。

1. 神经体 substrate：Oasis
我们利用 Oasis (或类似的自治 Agent 协调框架) 作为 Agent 的神经中枢操作系统。它负责：

管理 Agent 的生命周期。

协调 Agent 脑内各层级（L1/L2/L3）之间的通信。

处理 Agent 与 Unity 环境之间的 I/O 信号。

2. 海马体与经验：Zep
Zep 是 Agent 的长期记忆与动态上下文引擎。

它自动存储、总结和检索 Agent 的对话历史。

它不仅仅是向量检索，它能根据 Agent 当前的“意图”动态推荐相关的过往经验，解决 LLM 的遗忘问题。

3. 概念网络与直觉：GraphRAG
为了实现你构想的“概念组”，我们引入了 GraphRAG（图增强检索生成）。

Agent 的记忆不是扁平的，而是图谱化的。

当 Agent 听到“钱”这个词，GraphRAG 允许它不仅检索到相关的对话，还能激活脑内联想网络中与之连接的“安全感”、“贪婪”或“焦虑”等概念，从而产生超越文字的“直觉”反应。

🎮 展示用例: The Unity Town
我们不仅仅是在理论上谈论，我们已经在 Unity 引擎中构建了一个实体小镇作为 Relatoo 的首个验证场（Use Case）。

在这个小镇里，你会看到：

非同质化的 Agent： 即使使用相同的 LLM，由于初始数值状态（L1）和记忆概念图谱（L2）不同，Agent 表现出截然不同的性格。

动机驱动的行为： Agent 去咖啡馆不是因为 Prompt 让它去，而是因为它的生理状态显示“疲劳”且脑内概念网络连接了“咖啡->提神”。

深度的社会涌现： 错误的信息传递、基于误解的帮派形成、经济作物的种植决策，这些都不是预设的脚本，而是复杂的认知个体在互动中涌现出来的。

[在此处插入 Unity 演示小镇的 GIF 或截图]

🚀 路线图 (Roadmap)
Relatoo 是一个创新的尝试，我们将分阶段将这一愿景落地：

[x] Phase 1: 原型定义 - 确定“金字塔脑”架构，Unity Demo展示。

[ ] Phase 2: 记忆集成 - 完成 Zep 长期记忆系统的 Agent 接入。

[ ] Phase 3: 概念图谱化 - 引入 GraphRAG，实现 Agent 的感性联想能力。

[ ] Phase 4: 社会性测试 - 在 Unity 小镇中进行 20+ Agent 的长期自治演化测试。

[ ] Phase 5: 开源发布 - 对外开放平台代码与 Unity 资产。

🤝 参与进来
Relatoo 是一个探索 AI 深度认知与社会模拟的开源项目。如果你对认知科学、复杂系统、GraphRAG 或 Unity 仿真感兴趣，欢迎加入我们！

GitHub: Project Relatoo (Star ⭐ us!)

Issues: 欢迎提交想法或 Bug。

Contact: your.email@example.com

© 2024 Relatoo Project. Built for deep simulation.
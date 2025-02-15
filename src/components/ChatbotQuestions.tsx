export const generateBotReply = (message: string): string => {
  const lowerMsg = message.toLowerCase();

  // Greetings
  if (/hello|hi|hey/i.test(lowerMsg))
    return "👋 Hello, amazing human! How can I assist you today? 🚀";

  // About the Website Sections
  if (/hero/i.test(lowerMsg))
    return "🚀 The **Hero Section** introduces the mission of Agentic AI.";
  if (/explore/i.test(lowerMsg))
    return "🔍 The **Explore Section** allows you to discover AI models and their applications.";
  if (/technology/i.test(lowerMsg))
    return "🛠️ The **Technology Page** showcases cutting-edge AI frameworks.";
  if (/questions/i.test(lowerMsg))
    return "❓ The **Questions Section** answers common AI and Agentic AI-related queries.";
  if (/analysis/i.test(lowerMsg))
    return "📊 The **Analysis Page** provides AI-generated insights and data analysis.";
  if (/pricing/i.test(lowerMsg))
    return "💰 The **Pricing Page** explains different AI service plans.";
  if (/contact/i.test(lowerMsg))
    return "📞 Visit the **Contact Page** for inquiries and support.";

  // About Hooriya M. Fareed
  if (/who (made|created|developed|built) this website|creator/i.test(lowerMsg))
    return "🌍 This website was created by **Hooriya M. Fareed**, a frontend developer passionate about AI!";
  if (/hooriya m. fareed/i.test(lowerMsg))
    return "👩‍💻 Hooriya M. Fareed is the creator of **Agentic World**, specializing in AI-driven applications.";

  if (/what is agentic ai/i.test(lowerMsg))
    return "🤖 **Agentic AI** is an AI-driven system that enables automation, learning, and intelligent decision-making.";
  if (/how does agentic ai work/i.test(lowerMsg))
    return "⚙️ **Agentic AI** processes data using deep learning, neural networks, and automation.";
  if (/what can agentic ai do/i.test(lowerMsg))
    return "🚀 **Agentic AI** powers automation, decision-making, and real-time analytics for various industries.";
  if (/where is agentic ai used/i.test(lowerMsg))
    return "📊 **Agentic AI is used in business automation, e-commerce, customer support, AI analytics, and more.**";
  if (/is agentic ai open-source/i.test(lowerMsg))
    return "💡 Some aspects of **Agentic AI** are customizable for businesses, but it depends on the implementation.";
  if (/can agentic ai make decisions/i.test(lowerMsg))
    return "⚡ **Yes! Agentic AI can analyze data and make intelligent decisions based on patterns and predictions.**";
  if (/how does agentic ai compare to other ai/i.test(lowerMsg))
    return "🔍 **Agentic AI focuses on automation, real-time analytics, and decision-making compared to traditional AI models.**";
  if (/does agentic ai improve over time/i.test(lowerMsg))
    return "📈 **Yes! Agentic AI continuously learns from new data and improves its decision-making capabilities.**";
  if (/is agentic ai the same as chatgpt/i.test(lowerMsg))
    return "💡 **No! Agentic AI focuses on automation and decision-making, while ChatGPT is a conversational AI model.**";
  if (/can agentic ai self-learn/i.test(lowerMsg))
    return "🤖 **Yes! Agentic AI can use machine learning to improve based on new data and experiences.**";
  if (/does agentic ai need human supervision/i.test(lowerMsg))
    return "👀 **Yes! While highly autonomous, Agentic AI still benefits from human oversight to ensure ethical use.**";
  if (/can agentic ai be used for cybersecurity/i.test(lowerMsg))
    return "🔐 **Yes! AI can detect threats, prevent cyberattacks, and enhance security monitoring.**";

  // AI Ethics, Risks, and Security
  if (/is agentic ai safe/i.test(lowerMsg))
    return "🔒 **Yes! Agentic AI follows ethical AI practices and includes security protocols to prevent misuse.**";
  if (/can ai be biased/i.test(lowerMsg))
    return "⚖️ **AI models can reflect biases in training data, but developers work to reduce bias using ethical AI practices.**";
  if (/how can ai be used ethically/i.test(lowerMsg))
    return "🧐 **Ethical AI should prioritize fairness, transparency, and accountability to prevent harm and bias.**";
  if (/can agentic ai be hacked/i.test(lowerMsg))
    return "⚠️ **Like any technology, AI can be targeted, but security protocols help prevent unauthorized access.**";
  if (/does ai respect privacy/i.test(lowerMsg))
    return "🔐 **Yes! AI systems should comply with data privacy laws like GDPR and ensure user data protection.**";
  if (/is agentic ai fully autonomous/i.test(lowerMsg))
    return "🤖 **No, Agentic AI still relies on human input and ethical guidelines to function responsibly.**";
  if (/does agentic ai manipulate data/i.test(lowerMsg))
    return "🚨 **No! Responsible AI should always follow ethical guidelines and ensure transparency in data handling.**";

  // AI Future & Predictions
  if (/will ai take over the world/i.test(lowerMsg))
    return "🌍 AI is designed to assist, not dominate. Super AI (beyond human intelligence) is still theoretical!";
  if (/can ai predict the future/i.test(lowerMsg))
    return "🔮 AI can analyze patterns to make predictions in **finance, healthcare, and automation**, but it is not perfect.";
  if (/will ai be smarter than humans/i.test(lowerMsg))
    return "🧠 **Super AI (beyond human intelligence) is purely theoretical for now.**";
  if (/can ai be creative/i.test(lowerMsg))
    return "🎨 Yes! AI can generate **art, music, and stories**, but human creativity remains unique.";
  if (/what is the future of ai/i.test(lowerMsg))
    return "🚀 **AI will continue evolving, impacting automation, healthcare, education, and creative fields.**";
  if (/can ai write software/i.test(lowerMsg))
    return "💻 **Yes! AI can generate code, assist developers, and even debug programs.**";
  if (/will ai make humans obsolete/i.test(lowerMsg))
    return "🤝 **No! AI is designed to enhance human work, not replace humans completely.**";
  if (/can ai detect emotions/i.test(lowerMsg))
    return "❤️ AI can analyze tone and facial expressions, but it does not 'feel' emotions like humans.";
  if (/will ai replace jobs/i.test(lowerMsg))
    return "🤖 AI may automate tasks, but it also creates new opportunities in AI development and technology-related fields.";

  // AI & Agentic AI-Specific Questions
  if (/what is agentic ai/i.test(lowerMsg))
    return "🤖 **Agentic AI** is an AI-driven system that enables automation, learning, and intelligent decision-making.";
  if (/how does agentic ai work/i.test(lowerMsg))
    return "⚙️ **Agentic AI** processes data using deep learning, neural networks, and automation.";
  if (/what can agentic ai do/i.test(lowerMsg))
    return "🚀 **Agentic AI** powers automation, decision-making, and real-time analytics for various industries.";

  // Advanced AI & Ethics
  if (/is agentic ai secure/i.test(lowerMsg))
    return "🔒 Yes! **Agentic AI** uses encryption and security protocols to protect user data.";
  if (/does agentic ai use machine learning/i.test(lowerMsg))
    return "🧠 Absolutely! **Agentic AI** leverages machine learning and deep neural networks.";
  if (/can agentic ai replace humans/i.test(lowerMsg))
    return "🤝 **Agentic AI is built to assist humans, not replace them**. It enhances productivity while requiring human oversight.";
  if (/does agentic ai take jobs/i.test(lowerMsg))
    return "💡 AI may automate tasks, but it also creates new opportunities in AI development and technology-related fields.";
  if (/what are the limitations of agentic ai/i.test(lowerMsg))
    return "⚠️ **Limitations include dependence on quality data, ethical concerns, and the need for human supervision.**";
  if (/how can businesses implement agentic ai/i.test(lowerMsg))
    return "🏢 Businesses can integrate **Agentic AI** for automation, predictive analytics, and AI-driven customer support.";

  // ✨ Dynamic Catch-All Response (Instead of Repeating the Same Message)
  const fallbackResponses = [
    "🤖 Great question! Agentic AI is always evolving—can you be more specific?",
    "🚀 I'm still learning! Try rephrasing your question about Agentic AI, AI in general, or Hooriya M. Fareed.",
    "🧐 I may not have the exact answer, but I can help! Ask about AI, technology, or this website.",
    "⚡ That is an interesting topic! Maybe try something related to AI, automation, or AI ethics?",
  ];

  return fallbackResponses[
    Math.floor(Math.random() * fallbackResponses.length)
  ];
};

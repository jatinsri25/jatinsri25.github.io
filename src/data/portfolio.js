export const experiences = [
    {
        company: "Zensar Technologies Ltd.",
        role: "Full Stack Developer & Data Engineer",
        duration: "Oct 2025 - Present",
        description: "Engineer and optimize large-scale datasets for NVIDIA autonomous vehicle AI systems, improving model training data quality by 25%. Build Python automation scripts leveraging computer vision libraries to streamline ML data pipelines, reducing dataset processing time by 30%.",
        tech: ["Python", "Computer Vision", "OpenCV", "NumPy", "Pandas"],
    },
    {
        company: "CMP Techseract LLP",
        role: "Full Stack Developer Intern",
        duration: "June 2024 - Aug 2024",
        description: "Developed 3+ production-grade full-stack applications using MERN stack serving 1000+ users. Architected RESTful APIs with Node.js & Express.js, reducing database response time by 50%. Integrated third-party APIs including payment gateways.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    },
];

export const projects = [
    {
        title: "NeuroLabel AI",
        description: "Autonomous Vehicle Annotation Tool. A full-stack AI-assisted annotation platform. Integrated YOLOv8 for automatic object detection, reducing manual labeling time by 60%. Features an interactive canvas (react-konva) for bounding box management and SQLite storage for training pipelines.",
        image: "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?q=80&w=2574&auto=format&fit=crop",
        tech: ["Python", "FastAPI", "YOLOv8", "React", "TypeScript", "Konva.js"],
        github: "https://github.com/jatinsri25/AV-labeller",
        demo: "https://neurolabel.demo",
    },
    {
        title: "AI-Powered Task Manager",
        description: "Intelligent task management system with Gemini API for prioritization. Features natural language processing, drag-and-drop UI, and real-time analytics. Built with MERN stack, JWT auth & RBAC.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
        tech: ["MERN", "Gemini API", "Tailwind", "JWT", "Recharts"],
        github: "https://github.com/jatinsri25/AI-todo-app/tree/main/TODO",
        demo: "https://ai-todo.demo",
    },
    {
        title: "Veltrix",
        description: "Sovereign Multi-Agent Compliance Engine. A 'Figma for AI Agents' platform enabling real-time collaboration on agent workflows. Features self-healing infrastructure loops, structured GraphRAG memory, and secure sandboxed execution for enterprise automation.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        tech: ["MERN", "LangChain", "LangGraph", "RAG", "Vector DB", "GenAI"],
        github: "https://github.com/jatinsri25",
        demo: "https://veltrix.demo",
    },
    {
        title: "QuirkQuack",
        description: "Real-time Chat Application. Full-stack messaging platform with WebSocket communication supporting 100+ concurrent users. Features secure authentication (JWT), typing indicators, and read receipts.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "TypeScript", "Socket.IO", "Prisma", "PostgreSQL"],
        github: "https://github.com/jatinsri25",
        demo: "https://quirkquack.demo",
    },
];

export const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "C++", "Solidity", "SQL", "Java"],
    ai_agents: ["LangChain", "LangGraph", "LangFlow", "RAG", "Vector DBs", "YOLOv8"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Konva.js"],
    backend: ["FastAPI", "Node.js", "Express.js", "GraphQL", "Socket.IO"],
    database: ["MongoDB", "PostgreSQL", "Pinecone", "Qdrant", "Prisma ORM"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Linux", "Firecracker"],
};

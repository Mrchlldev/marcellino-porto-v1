export const projectSettings = {
  heading: {
    title: "Project",
    description: "Kumpulan project yang bisa dikembangkan, ditambah, atau dikurangi dari file data."
  },
  cardButtonLabel: "View More...",
  detailBackLabel: "← Back Project",
  detailInfoTitle: "Informasi Project",
  projects: [
    {
      slug: "neo-api-tools",
      title: "Neo API Tools",
      image: "/projects/neo-api-tools.svg",
      description: "Website kumpulan REST API dengan tampilan NeoBrutalism.",
      tags: ["Next.js", "API", "Tailwind"],
      content: "Project ini berfokus pada dokumentasi endpoint, tampilan dashboard, dan pengalaman developer yang mudah dipahami.",
      buttons: [{ label: "Live Demo", href: "#" }, { label: "Source", href: "#" }]
    },
    {
      slug: "creative-portfolio",
      title: "Creative Portfolio",
      image: "/projects/creative-portfolio.svg",
      description: "Portofolio personal dengan animasi, dropdown menu, dan particle background.",
      tags: ["Portfolio", "Animation", "UI"],
      content: "Project ini menjadi ruang utama untuk menampilkan karya, cerita, skill, dan jalur kontak secara visual.",
      buttons: [{ label: "View Page", href: "#" }]
    },
    {
      slug: "minecraft-tools",
      title: "Minecraft Tools",
      image: "/projects/minecraft-tools.svg",
      description: "Tools dan eksperimen untuk kebutuhan komunitas Minecraft.",
      tags: ["Tools", "Backend", "NodeJS"],
      content: "Project ini dibuat untuk membantu proses generator, informasi, dan utility kecil agar lebih praktis digunakan.",
      buttons: [{ label: "Explore", href: "#" }, { label: "Docs", href: "#" }]
    }
  ]
};

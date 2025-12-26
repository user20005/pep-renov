/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Active l'exportation statique (HTML/CSS/JS)
  output: 'export',
  
  // Important : Remplacez 'nom-du-repo' par le nom exact de votre dépôt GitHub.
  // Si vous utilisez un domaine personnalisé, supprimez cette ligne.
  basePath: '/nom-du-repo',

  // Nécessaire car l'optimisation d'image par défaut nécessite un serveur
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
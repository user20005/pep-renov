/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indique à Next.js de générer un site statique (dossier 'out')
  output: 'export',
  
  // IMPORTANT : Remplace '/pep-renov' par le nom EXACT de ton dépôt GitHub
  // Si ton dépôt s'appelle "mon-site", mets '/mon-site'
  basePath: '/pep-renov',
  
  // Désactive l'optimisation d'image (nécessaire pour l'export statique)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
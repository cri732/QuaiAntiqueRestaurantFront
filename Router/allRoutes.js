import Route from "./Route.js";

// Définir ici les routes
export const allRoutes = [
	new Route("/index.html", "Accueil", "/pages/home.html"),
	new Route("/", "Accueil", "/pages/home.html"),
	new Route("/galerie", "Galerie", "/pages/galerie.html"),
	new Route("/signin", "Connexion", "/pages/signin.html"),
	new Route("/signup", "Inscription", "/pages/signup.html")
];

export const websiteName = "Quai Antique";

import Route from "./Route.js";

// Définir ici les routes
export const allRoutes = [
	new Route("/index.html", "Accueil", "/pages/home.html"),
	new Route("/", "Accueil", "/pages/home.html"),
	new Route("/galerie", "Galerie", "/pages/galerie.html"),
	new Route("/signin", "Connexion", "/pages/auth/signin.html"),
	new Route("/signup", "Inscription", "/pages/auth/signup.html"),
	new Route("/account", "Mon compte", "/pages/auth/account.html"),
	new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
];

export const websiteName = "Quai Antique";

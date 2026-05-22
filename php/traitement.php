<?php

// php/traitement.php — Traitement du formulaire de contact

// Les variables d'environnement $_SERVER['dbHost'] etc. sont injectées
// automatiquement par le serveur pedaweb — pas besoin de les écrire en dur.
try {
  $dbh = new PDO(
    'mysql:host=' . $_SERVER['dbHost'] . ';dbname=' . $_SERVER['dbBd'] . ';charset=utf8',
    $_SERVER['dbLogin'],
    $_SERVER['dbPass']
  );
  // Activer le mode exception : toute erreur SQL lèvera un PDOException
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die('Erreur de connexion : ' . $e->getMessage());
}

// RÉCUPÉRATION DES DONNÉES ($_POST)
$nom     = isset($_POST['nom'])     ? trim($_POST['nom'])     : '';
$email   = isset($_POST['email'])   ? trim($_POST['email'])   : '';
$sujet   = isset($_POST['sujet'])   ? trim($_POST['sujet'])   : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// VALIDATION
$erreurs = array();

if (strlen($nom) < 2) {
  $erreurs[] = 'Le nom est trop court (minimum 2 caractères).';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $erreurs[] = 'L\'adresse email est invalide.';
}
if (strlen($sujet) < 2) {
  $erreurs[] = 'Veuillez préciser un sujet.';
}
if (strlen($message) < 10) {
  $erreurs[] = 'Le message est trop court (minimum 10 caractères).';
}

// ENREGISTREMENT EN BASE DE DONNÉES
$succes = false;

if (count($erreurs) === 0) {

  try {
    // Requête préparée — les marqueurs (:nom, :email...) remplacent les vraies valeurs
    $sql = "INSERT INTO messages (nom, email, sujet, message)
            VALUES (:nom, :email, :sujet, :message)";

    // Préparer la requête
    $stmt = $dbh->prepare($sql);

    // Lier les valeurs aux marqueurs
    $stmt->bindValue(':nom',     $nom);
    $stmt->bindValue(':email',   $email);
    $stmt->bindValue(':sujet',   $sujet);
    $stmt->bindValue(':message', $message);

    // Exécuter
    $stmt->execute();

    $succes = true;

  } catch (PDOException $e) {
    $erreurs[] = 'Erreur lors de l\'enregistrement : ' . $e->getMessage();
  }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $succes ? 'Message envoyé' : 'Erreur'; ?> — ULYXX3</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>

  <nav id="navbar">
    <a href="../index.html" class="nav-logo">ULY<span>XX3</span></a>
    <ul class="nav-links">
      <li><a href="../index.html">Accueil</a></li>
      <li><a href="../pages/projets.html">Projets</a></li>
      <li><a href="../pages/videos.html">Créations</a></li>
      <li><a href="../pages/contact.html" class="active">Contact</a></li>
    </ul>
  </nav>

  <section class="section" style="min-height: 100vh; display: flex; align-items: center;">
    <div class="container" style="text-align: center; max-width: 600px;">

      <?php if ($succes) : ?>
        <!-- SUCCÈS -->
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h1 style="font-family: var(--font-mono); font-size: 2rem; color: #4ade80; margin-bottom: 1rem;">
          Message enregistré !
        </h1>
        <p style="color: var(--text-dim); margin-bottom: 2rem; line-height: 1.8;">
          Merci <strong style="color: var(--text);"><?php echo htmlspecialchars($nom); ?></strong>,
          votre message a bien été reçu et enregistré.<br>
          Je vous répondrai dès que possible à
          <strong style="color: var(--accent);"><?php echo htmlspecialchars($email); ?></strong>.
        </p>
        <a href="../index.html" class="btn-primary">← Retour à l'accueil</a>

      <?php else : ?>
        <!-- ERREURS -->
        <div style="font-size: 3rem; margin-bottom: 1rem;">✕</div>
        <h1 style="font-family: var(--font-mono); font-size: 2rem; color: #f87171; margin-bottom: 1rem;">
          Formulaire invalide
        </h1>
        <p style="color: var(--text-dim); margin-bottom: 1.5rem;">
          Veuillez corriger les erreurs suivantes :
        </p>
        <ul style="list-style: none; margin-bottom: 2rem;">
          <?php foreach ($erreurs as $erreur) : ?>
            <li style="color: #f87171; margin-bottom: 0.5rem; font-family: var(--font-mono); font-size: 0.85rem;">
              — <?php echo htmlspecialchars($erreur); ?>
            </li>
          <?php endforeach; ?>
        </ul>
        <a href="../pages/contact.html" class="btn-outline">← Retour au formulaire</a>

      <?php endif; ?>

    </div>
  </section>

  <footer id="footer">
    <div class="container footer-inner">
      <p class="footer-logo">ULY<span>XX3</span></p>
      <p class="footer-copy">© 2026 Ulyxx3 · BUT MMI Aix-en-Provence</p>
    </div>
  </footer>

</body>
</html>

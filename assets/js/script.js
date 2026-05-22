/* =====================================================
   SCRIPT.JS — Portfolio ULYXX3
   Logique du site : injection DOM, animations, filtres,
   formulaire, scroll reveal.

   Les données (projets, socials, skills) sont dans :
   → assets/js/data.js  (chargé avant ce fichier)
===================================================== */


function toggleMenu() {
  var btn = document.getElementById('menu-toggle');
  var links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  }
}

// ─── COMPTEUR ANIMÉ ───────────────────────────────────
function animerCompteur(idElement, valeurFinale, duree) {
  var el = document.getElementById(idElement);
  if (!el) return;

  var debut = 0;
  var increment = valeurFinale / (duree / 16);

  var intervalle = setInterval(function () {
    debut = debut + increment;
    if (debut >= valeurFinale) {
      debut = valeurFinale;
      clearInterval(intervalle);
    }
    el.textContent = Math.floor(debut);
  }, 16);
}

// ─── INJECTION : SKILLS ───────────────────────────────
function afficherSkills() {
  var conteneur = document.getElementById('skills-grid');
  if (!conteneur) return;

  for (var i = 0; i < skills.length; i++) {
    var tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skills[i];
    conteneur.appendChild(tag);
  }
}

// ─── INJECTION : PROJETS (accueil — 6 max) ────────────
function afficherProjetsAccueil() {
  var conteneur = document.getElementById('projects-grid');
  if (!conteneur) return;

  var projetsAffiches = projets.slice(0, 6);
  for (var i = 0; i < projetsAffiches.length; i++) {
    conteneur.appendChild(creerCarteProjet(projetsAffiches[i]));
  }
}

// ─── INJECTION : PROJETS (page projets — tous) ────────
function afficherTousProjets(filtre) {
  var conteneur = document.getElementById('all-projects-grid');
  if (!conteneur) return;

  conteneur.innerHTML = '';

  for (var i = 0; i < projets.length; i++) {
    var projet = projets[i];
    if (filtre && filtre !== 'tous' && projet.org !== filtre) continue;
    conteneur.appendChild(creerCarteProjet(projet));
  }
}

// ─── CRÉER UNE CARTE PROJET ───────────────────────────
function creerCarteProjet(projet) {
  var carte = document.createElement('div');
  carte.className = 'project-card reveal';

  // Barre de completion
  var barreHtml = '';
  barreHtml += '<div class="project-completion">';
  barreHtml += '<span>' + projet.completion + '%</span>';
  barreHtml += '<div class="completion-bar">';
  barreHtml += '<div class="completion-fill" style="width: 0%" data-width="' + projet.completion + '"></div>';
  barreHtml += '</div></div>';

  // Badges tech
  var techHtml = '<div class="project-tech">';
  for (var t = 0; t < projet.tech.length; t++) {
    techHtml += '<span class="tech-badge">' + projet.tech[t] + '</span>';
  }
  techHtml += '</div>';

  carte.innerHTML =
    '<p class="project-name">' + projet.nom + '</p>' +
    '<p class="project-desc">' + projet.desc + '</p>' +
    techHtml + barreHtml +
    '<a href="' + projet.url + '" target="_blank" rel="noopener" class="project-link">' +
    '↗ Voir sur GitHub</a>';

  return carte;
}

// ─── INJECTION : SOCIALS ──────────────────────────────
function afficherSocials() {
  var conteneur = document.getElementById('socials-grid');
  if (!conteneur) return;

  for (var i = 0; i < socials.length; i++) {
    var s = socials[i];
    var carte = document.createElement('a');
    carte.className = 'social-card';
    carte.href = s.url;
    carte.target = '_blank';
    carte.rel = 'noopener';
    carte.innerHTML =
      '<span class="social-icon">' + s.icone + '</span>' +
      '<div class="social-info">' +
      '<p class="social-name">' + s.nom + '</p>' +
      '<p class="social-handle">' + s.handle + '</p>' +
      '</div>';
    conteneur.appendChild(carte);
  }
}

// ─── REVEAL AU SCROLL (Intersection Observer) ─────────
function initReveal() {
  var elements = document.querySelectorAll('.reveal');

  // Vérifier si IntersectionObserver est disponible
  if (!window.IntersectionObserver) {
    // Fallback : tout afficher
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('visible');
    }
    return;
  }

  var observateur = new IntersectionObserver(function (entries) {
    for (var j = 0; j < entries.length; j++) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add('visible');
        // Animer les barres de completion
        var barre = entries[j].target.querySelector('.completion-fill');
        if (barre) {
          var largeur = barre.getAttribute('data-width');
          barre.style.width = largeur + '%';
        }
      }
    }
  }, { threshold: 0.1 });

  for (var i = 0; i < elements.length; i++) {
    observateur.observe(elements[i]);
  }
}

// ─── FILTRE PROJETS ───────────────────────────────────
function initFiltres() {
  var boutons = document.querySelectorAll('.filter-btn');
  if (!boutons.length) return;

  for (var i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener('click', function () {
      // Retirer classe active de tous
      var tous = document.querySelectorAll('.filter-btn');
      for (var j = 0; j < tous.length; j++) {
        tous[j].classList.remove('active');
      }
      // Ajouter à celui cliqué
      this.classList.add('active');
      // Filtrer
      afficherTousProjets(this.getAttribute('data-filtre'));
      // Ré-init reveal
      setTimeout(function () { initReveal(); }, 100);
    });
  }
}

// ─── FORMULAIRE DE CONTACT ────────────────────────────
function initFormulaire() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    var nom = document.getElementById('nom').value.trim();
    var email = document.getElementById('email').value.trim();
    var sujet = document.getElementById('sujet') ? document.getElementById('sujet').value.trim() : '';
    var message = document.getElementById('message').value.trim();
    var msg = document.getElementById('form-msg');

    // Validation simple
    if (nom === '' || email === '' || sujet === '' || message === '') {
      e.preventDefault(); // Bloquer l'envoi
      msg.className = 'form-msg error';
      msg.textContent = 'Veuillez remplir tous les champs.';
      return;
    }

    if (email.indexOf('@') === -1) {
      e.preventDefault(); // Bloquer l'envoi
      msg.className = 'form-msg error';
      msg.textContent = 'Adresse email invalide.';
      return;
    }

    if (message.length < 10) {
      e.preventDefault(); // Bloquer l'envoi
      msg.className = 'form-msg error';
      msg.textContent = 'Le message est trop court (min. 10 caractères).';
      return;
    }

    // Si tout est OK, on ne bloque pas (pas de e.preventDefault())
    // Le formulaire est envoyé naturellement à php/traitement.php
  });
}

// ─── INITIALISATION ───────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // Injecter le contenu
  afficherSkills();
  afficherProjetsAccueil();
  afficherTousProjets('tous');
  afficherSocials();
  initFiltres();
  initFormulaire();

  // Compteurs (page accueil)
  setTimeout(function () {
    animerCompteur('counter-projets', 18, 1500);
    animerCompteur('counter-videos', 6, 1500);
    animerCompteur('counter-socials', 12, 1500);
  }, 800);

  // Révélation au scroll (après injection du contenu)
  setTimeout(function () { initReveal(); }, 300);

  // Fermer menu mobile en cliquant un lien
  var liens = document.querySelectorAll('.nav-links a');
  for (var i = 0; i < liens.length; i++) {
    liens[i].addEventListener('click', function () {
      document.querySelector('.nav-links').classList.remove('open');
      document.getElementById('menu-toggle').classList.remove('open');
    });
  }
});

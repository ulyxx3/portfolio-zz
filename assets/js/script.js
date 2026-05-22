/* =====================================================
   SCRIPT.JS — Portfolio ULYXX3
   Logique du site
   Les données sont dans assets/js/data.js
===================================================== */



// COMPTEUR ANIMÉ
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

// INJECTION : SKILLS
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

// INJECTION : PROJETS (accueil)
function afficherProjetsAccueil() {
  var conteneur = document.getElementById('projects-grid');
  if (!conteneur) return;

  var projetsAffiches = projets.slice(0, 6);
  for (var i = 0; i < projetsAffiches.length; i++) {
    conteneur.appendChild(creerCarteProjet(projetsAffiches[i]));
  }
}

// INJECTION : PROJETS (page projets)
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

// CRÉER UNE CARTE PROJET
function creerCarteProjet(projet) {
  var carte = document.createElement('div');
  carte.className = 'project-card reveal';

  // Déterminer le préfixe de chemin (ex: '../' si dans pages/)
  var prefix = '';
  var scriptEl = document.querySelector('script[src*="script.js"]');
  if (scriptEl) {
    var src = scriptEl.getAttribute('src');
    if (src && src.indexOf('../') === 0) {
      prefix = '../';
    }
  }

  // Image de bannière si elle existe
  var bannerHtml = '';
  if (projet.image) {
    bannerHtml = '<div class="project-banner">' +
      '<img src="' + prefix + 'assets/img/' + projet.image + '" alt="' + projet.nom + '" loading="lazy">' +
      '</div>';
  }

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

  carte.innerHTML = bannerHtml +
    '<div class="project-card-body">' +
    '<p class="project-name">' + projet.nom + '</p>' +
    '<p class="project-desc">' + projet.desc + '</p>' +
    techHtml + barreHtml +
    '<a href="' + projet.url + '" target="_blank" rel="noopener" class="project-link">' +
    '↗ Voir sur GitHub</a>' +
    '</div>';

  return carte;
}

// INJECTION : SOCIALS
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

// INJECTION : CRÉATIONS (page vidéos)
function afficherCreations() {
  var conteneur = document.getElementById('creations-grid');
  if (!conteneur) return;

  conteneur.innerHTML = '';

  for (var i = 0; i < creations.length; i++) {
    var c = creations[i];
    var carte = document.createElement('div');
    carte.className = 'creation-card reveal';

    // HTML de l'iframe embed YouTube avec referrerpolicy correcte
    var embedHtml = '<div class="video-embed-wrapper">' +
      '<iframe src="https://www.youtube.com/embed/' + c.ytId + '" title="' + c.titre + '" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      'allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
      '</div>';

    // Tags
    var tagsHtml = '<div class="creation-tags">';
    for (var t = 0; t < c.tags.length; t++) {
      tagsHtml += '<span class="creation-tag">' + c.tags[t] + '</span>';
    }
    tagsHtml += '</div>';

    carte.innerHTML = embedHtml +
      '<div class="creation-body">' +
      '<p class="creation-cat">' + c.cat + '</p>' +
      '<h2 class="creation-title">' + c.titre + '</h2>' +
      '<p class="creation-desc">' + c.desc + '</p>' +
      tagsHtml +
      '<div class="creation-meta">' +
      '<span>' + c.meta + '</span>' +
      '<a href="https://www.youtube.com/watch?v=' + c.ytId + '" target="_blank" rel="noopener" class="watch-link">↗ YouTube</a>' +
      '</div>' +
      '</div>';

    conteneur.appendChild(carte);
  }
}

// INJECTION : CRÉATIONS (page accueil)
function afficherCreationsAccueil() {
  var conteneur = document.getElementById('videos-preview');
  if (!conteneur) return;

  conteneur.innerHTML = '';

  for (var i = 0; i < creations.length; i++) {
    var c = creations[i];
    if (!c.featured) continue;

    var title = c.titreCourt || c.titre;

    // Extraire le tag court de la catégorie (ex: "2D Animation · 2026" -> "2D Animation")
    var parts = c.cat.split(' · ');
    if (parts.length > 1 && !isNaN(parts[parts.length - 1])) {
      parts.pop(); // Enlever l'année
    }
    var tagCourt = parts.join(' · ');

    var carte = document.createElement('a');
    carte.className = 'video-card';
    carte.href = 'https://www.youtube.com/watch?v=' + c.ytId;
    carte.target = '_blank';
    carte.rel = 'noopener';
    carte.innerHTML =
      '<img src="https://i.ytimg.com/vi/' + c.ytId + '/hqdefault.jpg" alt="' + title + '" loading="lazy">' +
      '<div class="video-info">' +
      '<span class="video-tag">' + tagCourt + '</span>' +
      '<h3>' + title + '</h3>' +
      '</div>';

    conteneur.appendChild(carte);
  }
}

// REVEAL AU SCROLL
function initReveal() {
  var elements = document.querySelectorAll('.reveal');

  // IntersectionObserver : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#overview
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

// FILTRE PROJETS
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

// INITIALISATION
document.addEventListener('DOMContentLoaded', function () {
  // Injecter le contenu
  afficherSkills();
  afficherProjetsAccueil();
  afficherTousProjets('tous');
  afficherSocials();
  afficherCreations();
  afficherCreationsAccueil();
  initFiltres();

  // Compteurs (page accueil)
  setTimeout(function () {
    animerCompteur('counter-projets', projets.length, 1500);
    animerCompteur('counter-videos', creations.length, 1500);
    animerCompteur('counter-socials', socials.length, 1500);
  }, 800);

  // Révélation au scroll (après injection du contenu)
  setTimeout(function () { initReveal(); }, 300);

});

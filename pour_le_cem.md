---
layout: page
title: Aide pour le CeM
weight: 4
js: "
$(document).ready(function() {
   jelp.init('img_help','trigger');
});
"
---
Lorsque vous êtes enregistré en temps que conseillé en mobilité (CeM) de nouvelles fonctionnalités sont disponibles.

<h1>Contacter un signaleur</h1>

Quand un signalement est sélectionné (après avoir cliqué sur son icône, se trouvant sur la carte, du signalement), l'<span id="span_contact" data-marker="m_img_contact_1" class="trigger">adresse électronique</span> et le <span id="span_contact" data-marker="m_img_contact_2" class="trigger">numéro de téléphone</span> du signaleur sont affichées.

<img id="img_contact" class="img_help" src="img/screenshots/details_cem.png" border="1" alt="Contacter un signaleur" data-jelp-img-width="958px" data-jelp-markers='[{"id":"m_img_contact_1", "x":0.75, "y":0.465, "label":"1", "color":"red", "hover_color":"blue"}, {"id":"m_img_contact_2", "x":0.59, "y":0.481, "label":"2", "color":"red", "hover_color":"blue"}]' />

<h1>Editer un signalement</h1>

<h2>Editer les données textuelles</h2>

Quand un signalement est sélectionné, vous  pouvez éditer une donnée en cliquant sur l'<span id="span_edit_text" data-marker="m_img_edit_text" class="trigger">icone d'édition</span> qui se trouve juste à coté de la donnée.

<img id="img_edit_text" class="img_help" src="img/screenshots/details_cem.png" border="1" alt="Editer les données textuelles" data-jelp-img-width="958px" data-jelp-markers='[{"id":"m_img_edit_text", "x":0.78, "y":0.545, "label":"1", "color":"red", "hover_color":"blue"}]' />

<h2>Déplacer un signalement</h2>

Quand un signalement est sélectionné, vous pouvez modifier sa position sur la carte. Pour ce faire, il suffit de cliquer sur le <span id="span_deplacer" data-marker="m_img_deplacer" class="trigger">bouton "changer l'emplacement sur la carte"</span> et ensuite de choisir la nouvelle position en cliquant sur la carte.

<img id="img_deplacer" class="img_help" src="img/screenshots/details_cem.png" border="1" alt="Déplacer un signalement" data-jelp-img-width="958px" data-jelp-markers='[{"id":"m_img_deplacer", "x":0.58, "y":0.51, "label":"1", "color":"red", "hover_color":"blue"}]' />

<h1>Ne plus afficher un signalement sur la carte</h1>

Quand un signalement est sélectionné, vous  pouvez choisir de ne plus afficher ce signalement sur la carte. Pour ce faire, il suffit de cliquer sur le <span id="span_supprimer" data-marker="m_img_supprimer" class="trigger">bouton "ne plus afficher le signalement"</span>.

<img id="img_supprimer" class="img_help" src="img/screenshots/details_cem.png" border="1" alt="Ne plus afficher un signalement sur la carte" data-jelp-img-width="958px" data-jelp-markers='[{"id":"m_img_supprimer", "x":0.58, "y":0.755, "label":"1", "color":"red", "hover_color":"blue"}]' />

<h1>Assigner un gestionnaire de voirie à un signalement</h1>

Quand un signalement est sélectionné, vous  pouvez assigner un gestionnaire de voirie à un signalement. Pour ce faire, il suffit de cliquer sur le <span id="span_assigner_gestionnaire" data-marker="m_img_assigner_gestionnaire" class="trigger">bouton d'édition à coté du champ "Gestionnaire de voirie"</span>, de choisir dans la liste le gestionnaire et d'appuyer sur l'icône "sauver".
Un courrier électronique sera automatiquement envoyé au gestionnaire pour l'informer de l'assignation et l'inviter à résoudre le problème.

<img id="img_assigner_gestionnaire" class="img_help" src="img/screenshots/details_cem.png" border="1" alt="Assigner un gestionnaire de voirie à un signalement" data-jelp-img-width="958px" data-jelp-markers='[{"id":"m_img_assigner_gestionnaire", "x":0.79, "y":0.73, "label":"1", "color":"red", "hover_color":"blue"}]'  />

<h1>Modifier l'état d'un signalement</h1>

Quand un signalement est sélectionné, vous pouvez choisir l'état du signalement. L'état définit la couleur du marqueur du signalement. Les différents états sont rejeté (gris), pas encore pris en compte (blanc), pris en compte (rouge), en cours de résolution (orange) et résolu (vert). Pour choisir l'état du signalement, il suffit de cliquer sur le <span id="span_choisir_etat" data-marker="m_img_choisir_etat" class="trigger">bouton d'édition à coté du champ "Note du conseiller en mobilité (CeM)"</span>, de choisir dans la liste l'état et d'appuyer sur l'icône "sauver".

<img id="img_choisir_etat" class="img_help" src="img/screenshots/details_cem.png" border="1" alt="Modifier l'état d'un signalement" data-jelp-img-width="958px" data-jelp-markers='[{"id":"m_img_choisir_etat","x":0.81, "y":0.695, "label":"1", "color":"red", "hover_color":"blue"}]'  />

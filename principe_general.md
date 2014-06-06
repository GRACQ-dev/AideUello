---
layout: page
title: Principe général
weight: 2
js: "
$(document).ready(function() {
   jelp.init('img_help','trigger');
});
"
---
<h1>Principe général de l'application</h1>

Uello est un outil internet permettant de signaler les problèmes "vélo" que les cyclistes quotidiens peuvent rencontrer dans leurs déplacements.

La page principale de l'outil comporte 
<span data-marker="m_img_page_principale_de_uello_1" class="trigger">une carte</span>,
<span data-marker="m_img_page_principale_de_uello_2" class="trigger">un menu nommé "Ajouter un signalement"</span>,
<span data-marker="m_img_page_principale_de_uello_3" class="trigger">un menu nommé "Filtrer les signalements et export"</span>,
<span data-marker="m_img_page_principale_de_uello_4" class="trigger">un espace d'affichage</span> et
<span data-marker="m_img_page_principale_de_uello_5" class="trigger">un espace nommé "Dernières modifications"</span>.

Sur <span data-marker="m_img_page_principale_de_uello_1" class="trigger">la carte</span> sont situés les différents signalements. La couleur du marqueur indique l'état de résolution du signalement. Cliquer sur le marqueur d'un signalement fait apparaître les détails du signalement dans <span data-marker="m_img_page_principale_de_uello_4" class="trigger">l'espace d'affichage</span>.

Le <span data-marker="m_img_page_principale_de_uello_2" class="trigger">menu nommé "Ajouter un signalement"</span> permet, quand il est activé, d'ajouter un nouveau signalement sur la carte. Quand le menu est fermé, cliquer sur son titre (à coté du +)  l'ouvre et l'active. Quand le menu est ouvert, cliquer sur son titre le désactive et le ferme.

Le <span data-marker="m_img_page_principale_de_uello_3" class="trigger">menu nommé "Filtrer les signalements et export"</span> permet, quand il est activé de filtrer les signalements indiqués sur la carte. Les signalements peuvent être filtrés selon leur état (couleur) ou leur catégorie. Quand le menu est fermé, cliquer sur son titre l'ouvre et l'active. Quand le menu est ouvert, cliquer sur son titre le désactive et le ferme. En bas de ce menu, un lien permet de télécharger un fichier CSV contenant les signalements affichés sur la carte.

Quand un signalement est sélectionné sur la carte, les détails du signalement sont affichés dans
l'<span data-marker="m_img_page_principale_de_uello_4" class="trigger">espace d'affichage</span>.

L'<span data-marker="m_img_page_principale_de_uello_5" class="trigger">espace nommé "Dernières modifications"</span> affiche les dernières modifications qui ont été apportées aux signalements.

<img id="img_page_principale_de_uello" class="img_help" src="img/screenshots/selection_signalement.png" alt="Page principale de Uello" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_page_principale_de_uello_1", "x":0.1, "y":0.445, "label":"1", "color":"red", "hover_color":"blue"},{"id":"m_img_page_principale_de_uello_3", "x":0.58, "y":0.36, "label":"3", "color":"red", "hover_color":"blue"},{"id":"m_img_page_principale_de_uello_2", "x":0.58, "y":0.30, "label":"2", "color":"red", "hover_color":"blue"},{"id":"m_img_page_principale_de_uello_4", "x":0.58, "y":0.42, "label":"4", "color":"red", "hover_color":"blue"},{"id":"m_img_page_principale_de_uello_5", "x":0.58, "y":0.83, "label":"5", "color":"red", "hover_color":"blue"}]' />
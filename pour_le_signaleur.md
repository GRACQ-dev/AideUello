---
layout: page
title: Aide pour le signaleur
weight: 3
js: "
$(document).ready(function() {
   jelp.init('img_help','trigger');
});
"
---
<h1>Sélectionner une ville</h1>
<h2>A partir de l'écran d'accueil</h2>

Pour sélectionner une ville  à partir de l'écran d'accueil, faites votre choix à l'aide du <span id="span_choix_ville_accueil_menu" data-marker="m_img_choix_ville_accueil_1" class="trigger">menu déroulant</span> ou <span id="span_choix_ville_accueil_click" data-marker="m_img_choix_ville_accueil_2" class="trigger">cliquez sur le nom de la ville</span>.

<img id="img_choix_ville_accueil" class="img_help" src="img/screenshots/choix_ville_accueil.png" alt="Choix d'une ville à partir de l'écran d'acceuil" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_choix_ville_accueil_1", "x":0.755, "y":0.27, "label":"1", "color":"red", "hover_color":"blue"}, {"id":"m_img_choix_ville_accueil_2", "x":0.65, "y":0.4, "label":"2", "color":"red", "hover_color":"blue"}]' />

<h2>A partir de l'écran "carte"</h2>

Pour sélectionner une ville  à partir de l'écran "carte", faites votre choix à l'aide du <span id="span_choix_ville_carte_menu" data-marker="m_img_choix_ville_carte_1" class="trigger">menu déroulant</span>.

<img id="img_choix_ville_carte" class="img_help" src="img/screenshots/choix_ville_carte.png" alt="Choix d'une ville à partir de l'écran de la carte" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_choix_ville_carte_1", "x":0.81, "y":0.265, "label":"1", "color":"red", "hover_color":"blue"}]' />

<h1>Voir en détails un signalement</h1>

Pour afficher en détails un signalement il suffit de cliquer dessus dans la <span data-marker="m_img_det_signalement_1" class="trigger">carte</span>. Les détails du signalement apparaîtront dans l'<span data-marker="m_img_det_signalement_2" class="trigger">espace d'affichage qui se trouve à droite de la carte</span>.

<img id="img_det_signalement" class="img_help" src="img/screenshots/selection_signalement.png" alt="Voir en détails un signalement" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_det_signalement_1", "x":0.1, "y":0.445, "label":"1", "color":"red", "hover_color":"blue"}, {"id":"m_img_det_signalement_2",  "x":0.58, "y":0.42, "label":"2", "color":"red", "hover_color":"blue"}]' />

<h1>Choisir les signalements affichés et export</h1>

Vous pouvez choisir les signalements affichés sur la carte en utilisant le <span data-marker="m_img_choix_des_signalements_1" class="trigger">menu "Filtrer les signalements et export"</span>. Il suffit de cliquer sur le titre du menu et les <span data-marker="m_img_choix_des_signalements_2" class="trigger">options d'affichage</span> apparaîtront. 
Grâce à ce menu, vous pouvez télécharger un fichier CSV contenant les signalements affichés sur la carte. Vous devez simplement <span data-marker="m_img_choix_des_signalements_3" class="trigger">cliquer sur le lien CSV</span>.

<img id="img_choix_des_signalements_menu" class="img_help" src="img/screenshots/selection_signalement.png" alt="Choix des signalements affichés" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_choix_des_signalements_1", "x":0.58, "y":0.355, "label":"1", "color":"red", "hover_color":"blue"}]' />

<img id="img_choix_des_signalements_affichage" class="img_help" src="img/screenshots/filtrer_signalement.png" alt="Choix des signalements affichés" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_choix_des_signalements_2", "x":0.59, "y":0.41, "label":"2", "color":"red", "hover_color":"blue"}, {"id":"m_img_choix_des_signalements_3", "x":0.59, "y":0.61, "label":"3", "color":"red", "hover_color":"blue"}]' />

<h1>Signaler un problème</h1>

Pour signalez un problème, cliquez sur le <span data-marker="m_img_signaler_1" class="trigger">bouton "ajouter un signalement"</span>. Un <span data-marker="m_img_signaler_2" class="trigger">formulaire</span> apparaît. Remplissez ce formulaire et cliquez sur le <span data-marker="m_img_signaler_3" class="trigger">bouton "Enregister"</span>. Attention vous devez 
indiquer la localisation du signalement en cliquant sur la carte.

<img id="img_se_connecter_carte" class="img_help" src="img/screenshots/carte_de_base.png" alt="Se connecter à partir de la carte" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_signaler_1", "x":0.58, "y":0.3, "label":"1", "color":"red", "hover_color":"blue"}]' />

<img id="img_signaler" class="img_help" src="img/screenshots/ajout_signalement.png" alt="Signaler un problème" 
data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_signaler_2",  "x":0.58, "y":0.37, "label":"2", "color":"red", "hover_color":"blue"}, {"id":"m_img_signaler_3", "x":0.78, "y":0.77, "label":"3", "color":"red", "hover_color":"blue"}]'/>

<h1>Se connecter</h1>

Pour vous connecter, cliquez sur le <span data-marker="m_img_se_connecter_carte_1" class="trigger">bouton "connexion"</span> se trouvant en haut à droite de la page.

<img id="img_se_connecter_carte" class="img_help" src="img/screenshots/carte_de_base.png" alt="Se connecter à partir de la carte" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_se_connecter_carte_1", "x":0.22, "y":0.225, "label":"1", "color":"red", "hover_color":"blue"}]' />

Un <span data-marker="m_img_se_connecter_formulaire_1" class="trigger">formulaire</span> apparaît ; il suffit de le remplir et de cliquer sur le <span data-marker="m_img_se_connecter_formulaire_2" class="trigger">bouton "connexion"</span>.

<img id="img_se_connecter_formulaire" class="img_help" src="img/screenshots/formulaire_connexion.png" alt="Formulaire de connexion" data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_se_connecter_formulaire_1", "x":0.38, "y":0.42, "label":"1", "color":"red", "hover_color":"blue"}, {"id":"m_img_se_connecter_formulaire_2", "x":0.38, "y":0.52, "label":"2", "color":"red", "hover_color":"blue"}]'/>

<h1>S'enregistrer sur le site</h1>

Si vous n'avez pas de compte vous pouvez vous enregistrer sur le site. Pour afficher le formulaire d'enregistrement cliquez sur le <span data-marker="m_img_s_enregistrer_carte_1" class="trigger">bouton "créer un compte</span>.

<img id="img_s_enregistrer_carte" class="img_help" src="img/screenshots/carte_de_base.png" alt="S'enregistrer à partir de la carte"  data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_s_enregistrer_carte_1", "x":0.34, "y":0.225, "label":"1", "color":"red", "hover_color":"blue"}]' />

Ensuite remplissez le <span data-marker="m_img_s_enregistrer_formulaire_1" class="trigger">formulaire</span> et cliquez sur le <span data-marker="m_img_s_enregistrer_formulaire_2" class="trigger">bouton "Enregister"</span>.

<img id="img_s_enregistrer_formulaire" class="img_help" src="img/screenshots/inscription.png" alt="Formulaire d'enregistrement"  data-jelp-img-width="958px" border="1" data-jelp-markers='[{"id":"m_img_s_enregistrer_formulaire_1", "x":0.41, "y":0.295, "label":"1", "color":"red", "hover_color":"blue"},{"id":"m_img_s_enregistrer_formulaire_2", "x":0.41, "y":0.46, "label":"2", "color":"red", "hover_color":"blue"}]' />

<h1>Pourquoi s'inscrire sur le site?</h1>

Le principal avantage d'être inscrit est que la procédure de signalement est simplifiée. En effet, l'utilisateur inscrit et enregistré ne doit pas remplir les champs "nom", "prénom", "numéro de téléphone" et "e-mail".
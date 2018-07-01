# ionic_project
Installation :
  ionic serve à la racine -> si bug namespace google : commenter la variable request non commentée et décommenter l'autre, ligne 75 randoland-detail.ts
 
 Page de présentation des randonnées, détail d'une randonnée, participer à la randonnée
 Présentation : Affichage d'une liste de randonnées
                Une randonnée -> liste de steps avec coords open data Metz
                                  timer
                                  
 Détail : Affichage du détail d'une randonnée
          Affichage du chemin général sur la carte et du timer
          
Participation : Affichage de la carte avec la randonnée tracée
                Pushpin position utilisateur dynamique en fonction de la position du périphérique
                
Non implémenté : Tracer de la route avec les coordonées open data : ZERO_RESULTS de google DirectionService
                  Validation de la step au passage sur une coordonnée proche

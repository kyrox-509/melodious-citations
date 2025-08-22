const quotes = [

  "Le succès est la somme de petits efforts répétés jour après jour.",

  "Crois en toi et tout devient possible.",
  
"Tu es plus fort que tu ne le crois, et plus proche du but que tu ne l’imagines.",
  
  "Même dans l’ombre, une flamme peut grandir et illuminer le monde entier.",
  
  "Tes cicatrices ne sont pas des faiblesses, mais les preuves que tu as survécu à ce qui voulait t’abattre.",
  
  "Chaque pas en avant, aussi petit soit-il, te rapproche de ton rêve.",

"Le véritable courage, c’est de continuer quand tout te dit d’abandonner.",

"Ne laisse jamais la peur décider de ton avenir.",

"Ta volonté est plus puissante que n’importe quel obstacle.",

"La réussite appartient à ceux qui persévèrent malgré les échecs.",
  
  "Ceux qui osent rêver sont ceux qui changent le monde.",

"Les limites existent seulement dans ton esprit.",

"Transforme tes blessures en forces indestructibles.",

"La persévérance est la clé qui ouvre toutes les portes fermées.",

"Tu es le maître de ton destin, l’architecte de ta vie.",
  
  "Rien n’est impossible à celui qui croit en lui-même.",

"Chaque défi est une opportunité déguisée pour grandir.",

"L’échec n’est qu’un détour vers le succès final.",

"Sois la meilleure version de toi-même chaque jour.",

"La passion est le carburant de toute grande réalisation.",
  
  "Quand tu tombes, relève-toi plus fort et plus sage.",

"La discipline forge les héros silencieux du quotidien.",

"La confiance en soi est le premier secret du succès.",

"La force intérieure est plus puissante que toutes les tempêtes.",

"Ton potentiel est infini, il suffit de le révéler.",
  
  "La seule limite, c’est celle que tu te fixes.",

  "Chaque jour est une nouvelle chance de réussir.",

  "N’abandonne jamais, car c’est souvent la dernière clé qui ouvre la serrure.",

  "Rêve grand, travaille dur, reste humble.",

  "Le bonheur se trouve dans le chemin, pas seulement dans la destination."

];

function generateQuote() {

  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById('quote').innerText = quotes[randomIndex];

}

function copyQuote() {

  const quote = document.getElementById('quote').innerText;

  navigator.clipboard.writeText(quote)

    

    .catch(() => {

      alert("Échec de la copie.");

    });

}

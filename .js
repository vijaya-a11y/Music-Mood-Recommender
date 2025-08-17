const playlists = {
    Happy: {
      English: ["Happy - Pharrell Williams", "Best Day Of My Life - American Authors", "Good Life - OneRepublic", "On Top Of The World - Imagine Dragons", "Shake It Off - Taylor Swift"],
      Hindi: ["Gallan Goodiyan", "Kar Gayi Chull", "Badtameez Dil", "Dil Dhadakne Do", "Nachde Ne Saare"],
      Telugu: ["Happy Days", "Oh My Friend", "Life is Beautiful", "Yuvakula Basha", "Aha Emi Ruchi"],
      Tamil: ["Aaluma Doluma", "Vaadi En Thanga", "Anbe Anbe", "Oru Maalai", "Hey Shabba"],
      Spanish: ["Vivir Mi Vida - Marc Anthony", "Despacito - Luis Fonsi", "Bailando - Enrique Iglesias", "Danza Kuduro - Don Omar", "La Bicicleta - Shakira"],
      Korean: ["Dynamite - BTS", "Cheer Up - Twice", "Likey - Twice", "Love Scenario - iKON", "Gangnam Style - PSY"],
      Japanese: ["Blue Bird - Ikimono Gakari", "Happy Synthesizer", "Pretender - Official HIGE DANDism", "Marigold - Aimyon", "Koi - Gen Hoshino"],
      French: ["Je Veux - Zaz", "La Vie en Rose - Édith Piaf", "Dernière danse - Indila", "Formidable - Stromae", "Sous le vent - Garou & Céline Dion"]
    },
    Sad: {
      English: ["Someone Like You - Adele", "Fix You - Coldplay", "Stay With Me - Sam Smith", "Let Her Go - Passenger", "Say Something - A Great Big World"],
      Hindi: ["Channa Mereya", "Agar Tum Saath Ho", "Kabira (Reprise)", "Jo Bheji Thi Dua", "Tujhe Bhula Diya"],
      Telugu: ["Nee Kosam", "Kanulanu Thake", "Ye Maya Chesave", "Aakasam", "Manohara"],
      Tamil: ["Munbe Vaa", "Suttrum Vizhi", "Un Perai Sollumbothu", "Ennodu Nee Irundhaal", "Kadhalin Deepam Ondru"],
      Spanish: ["Amor Eterno", "Historia de un Amor", "Si Tú No Estás", "Corre", "Vuelves"],
      Korean: ["Spring Day - BTS", "Beautiful - Crush", "Eyes, Nose, Lips - Taeyang", "Lonely - 2NE1", "Hug - TVXQ"],
      Japanese: ["First Love - Utada Hikaru", "Secret Base", "Lemon - Kenshi Yonezu", "Kiseki", "Pretender (Sad Ver.)"],
      French: ["Ne me quitte pas - Jacques Brel", "Je suis malade", "Tous les mêmes - Stromae", "Comme des enfants", "Si jamais j’oublie"]
    },
    Relax: {
      English: ["Weightless - Marconi Union", "River Flows In You - Yiruma", "Bloom - The Paper Kites", "Ocean Eyes - Billie Eilish", "Lost in Japan - Shawn Mendes"],
      Hindi: ["Tum Mile (Love Reprise)", "Kaise Hua", "Pee Loon (Reprise)", "Hasi Ban Gaye", "Khud Ko Tere Paas Paaya"],
      Telugu: ["Pranam - Manoharam", "Kanulanu Thake", "O Cheliya", "Pachani Chiluka", "O Prema"],
      Tamil: ["Ennavale", "Vinnaithaandi Varuvaayaa", "Anbil Avan", "Aararo Aariraro", "Pookkal Pookkum"],
      Spanish: ["La Playa - La Oreja de Van Gogh", "Sabor a mí", "Besame Mucho", "Nada Valgo Sin Tu Amor", "Un Año"],
      Korean: ["Love Poem - IU", "Through the Night - IU", "Perhaps Love", "Only Then - Roy Kim", "Some - Soyou & Junggigo"],
      Japanese: ["Hikoukigumo - Yumi Arai", "Nandemonaiya - Radwimps", "Orange - 7!!", "Kaze wa Fuiteiru", "Shikisai"],
      French: ["Sous le ciel de Paris", "Voilà - Barbara Pravi", "Respire", "La Bohème - Charles Aznavour", "Si jamais j’oublie"]
    },
    Energetic: {
      English: ["Uptown Funk - Bruno Mars", "Don’t Stop the Music - Rihanna", "Can’t Hold Us - Macklemore", "Titanium - David Guetta", "Stronger - Kanye West"],
      Hindi: ["Malhari", "Zingaat", "Kala Chashma", "London Thumakda", "Ainvayi Ainvayi"],
      Telugu: ["Top Lesi Poddi", "Blockbuster", "Rangamma Mangamma", "Butta Bomma", "Jai Lava Kusa Title Song"],
      Tamil: ["Vaathi Coming", "Why This Kolaveri Di", "Oh Penne", "Aathichudi", "Theri Theme"],
      Spanish: ["Gasolina - Daddy Yankee", "Bailar - Elvis Crespo", "La Rompe Corazones", "Taki Taki", "Súbeme la Radio"],
      Korean: ["Fire - BTS", "Bang Bang Bang - BigBang", "Mic Drop - BTS", "DDU-DU DDU-DU - BLACKPINK", "Energetic - Wanna One"],
      Japanese: ["Red Swan", "Guren no Yumiya", "Unravel", "Crossing Field", "Sign"],
      French: ["Alors on danse - Stromae", "Balance ton quoi", "J’ai cherché", "Désolé", "Papaoutai"]
    },
    Romantic: {
      English: ["Perfect - Ed Sheeran", "All of Me - John Legend", "Just The Way You Are - Bruno Mars", "Love Me Like You Do - Ellie Goulding", "Thinking Out Loud - Ed Sheeran"],
      Hindi: ["Tum Hi Ho", "Raabta", "Pee Loon", "Janam Janam", "Jeene Laga Hoon"],
      Telugu: ["Priya Priya", "Yemito", "Cheppave Chirugali", "Oka Maru", "Kalusukovalani"],
      Tamil: ["Munbe Vaa", "Anbil Avan", "Suttrum Vizhi", "Kanave Kanave", "Adiye"],
      Spanish: ["Te Amo", "Amor Amor Amor", "Colgando en tus manos", "Eres", "No Me Doy por Vencido"],
      Korean: ["My Everything - NCT", "Sweet Night - V (BTS)", "Beautiful Life", "Everytime - Chen & Punch", "Stay With Me - Chanyeol & Punch"],
      Japanese: ["Kimi no Na wa - Sparkle", "Zenzenzense - Radwimps", "Ai Oboete Imasuka", "Kaze wa Harukaze", "Love Story - Namie Amuro"],
      French: ["Parler à mon père", "Aimer à perdre la raison", "Et si tu n’existais pas", "L’hymne à l’amour", "Si jamais j’oublie"]
    },
    Focus: {
      English: ["Time - Hans Zimmer", "Clair de Lune - Debussy", "Canon in D - Pachelbel", "Nuvole Bianche - Ludovico Einaudi", "Experience - Ludovico Einaudi"],
      Hindi: ["Luka Chuppi (Instrumental)", "Kal Ho Naa Ho (Sad Piano)", "Tujhe Dekha (Acoustic)", "Nadaan Parindey (Unplugged)", "Kabira (Instrumental)"],
      Telugu: ["Mounam Maatathoti", "Aakasam", "Chiru Chiru Navvula", "Anaganaga", "Kanulanu Thake (Inst.)"],
      Tamil: ["Vinnaithaandi Varuvaayaa BGM", "New York Nagaram (Inst.)", "Pookkal Pookkum (Acoustic)", "Anbil Avan (Inst.)", "Kaadhal Sadugudu Piano"],
      Spanish: ["Adiós Nonino", "Clavelitos", "Dos Gardenias", "Instrumental Flamenco", "Mediterráneo"],
      Korean: ["River Flows in You - Yiruma", "Kiss the Rain - Yiruma", "Stay Gold - BTS (Soft)", "Polaris", "Butterfly"],
      Japanese: ["Ghibli Piano Collection", "Merry Christmas Mr. Lawrence", "Summer - Joe Hisaishi", "Path of the Wind", "One Summer’s Day"],
      French: ["Gymnopédie No.1 - Erik Satie", "Clair de Lune (French Piano)", "Comptine d’un autre été", "Ballade pour Adeline", "Si jamais j’oublie"]
    },
    Party: {
      English: ["Party Rock Anthem", "Yeah! - Usher", "DJ Got Us Fallin’ In Love", "Don’t Stop the Party", "Turn Down For What"],
      Hindi: ["Abhi Toh Party Shuru Hui Hai", "Saturday Saturday", "Nashe Si Chadh Gayi", "Angreji Beat", "Kala Chashma"],
      Telugu: ["Swing Zara", "Gudilo Badilo", "Top Lesi Poddi", "Butta Bomma", "Blockbuster"],
      Tamil: ["Vaathi Coming", "Selfie Pulla", "Google Google", "Aaluma Doluma", "Danga Maari"],
      Spanish: ["Danza Kuduro", "Baila Baila Baila", "Taki Taki", "La Gasolina", "Vivir Mi Vida"],
      Korean: ["Fantastic Baby - BigBang", "Bang Bang Bang", "Idol - BTS", "Boombayah - BLACKPINK", "Zimzalabim - Red Velvet"],
      Japanese: ["Sugar Song and Bitter Step", "Blue Bird (Remix)", "Polyrhythm - Perfume", "Heavy Rotation - AKB48", "Love Machine - Morning Musume"],
      French: ["Alors on danse", "Le Coach", "Sur ma route", "La même", "Désolé"]
    },
    Chill: {
      English: ["Sunflower - Post Malone", "Location - Khalid", "Lovely - Billie Eilish", "Peaches - Justin Bieber", "Better - Khalid"],
      Hindi: ["Phir Le Aya Dil", "Tum Se Hi", "Kun Faya Kun", "Saibo", "Dil Diyan Gallan"],
      Telugu: ["O Cheliya", "Manohara", "Kanulanu Thake", "Yemito", "Prema Oka Maikam"],
      Tamil: ["Vinnaithaandi Varuvaayaa", "Anbil Avan", "Pookkal Pookkum", "Ennavale", "Oru Naalil"],
      Spanish: ["Ojos Españoles", "Mi Historia Entre Tus Dedos", "La Camisa Negra", "Fotografía", "A Dios le Pido"],
      Korean: ["Love Poem - IU", "Breathe - Lee Hi", "Through the Night - IU", "Palette - IU", "Love Me Like That"],
      Japanese: ["Orange - 7!!", "Hikoukigumo", "Shikisai", "Nandemonaiya", "Ai Oboete Imasuka"],
      French: ["Je te promets", "La Vie en Rose", "Dernière danse", "Respire", "Voilà"]
    },
    Angry: {
      English: ["Numb - Linkin Park", "In the End - Linkin Park", "Stronger - Kanye West", "Boulevard of Broken Dreams - Green Day", "Breaking the Habit - Linkin Park"],
      Hindi: ["Bhaag DK Bose", "Malhari", "Zinda", "Ziddi Dil", "Sadda Haq"],
      Telugu: ["Pakka Local", "Nee Kanti Choopule", "Nenu Nene", "Blockbuster", "Pilla Raa"],
      Tamil: ["Why This Kolaveri Di (Angry Ver.)", "Aaluma Doluma", "Theri Theme", "Oru Maalai (Rock)", "Petta Paraak"],
      Spanish: ["Mátala", "Maldita Pobreza", "Vivir Mi Vida (Rock Ver.)", "Nada Valgo", "Rabiosa"],
      Korean: ["Fire - BTS", "War of Hormone", "Mic Drop", "Bang Bang Bang", "I Am the Best - 2NE1"],
      Japanese: ["Unravel - TK", "The Day", "Again - Yui", "Kaikai Kitan", "Don’t Say Lazy"],
      French: ["J’te l’dis quand même", "Désolé", "Balance ton quoi", "La Grenade", "Alors on danse (Hard Ver.)"]
    },
    Sleepy: {
      English: ["Fix You (Piano)", "Stay With Me (Soft Piano)", "River Flows in You", "All of Me (Piano Cover)", "Kiss the Rain"],
      Hindi: ["Tum Hi Ho (Unplugged)", "Kabira (Acoustic)", "Kaise Hua (Reprise)", "Phir Le Aya Dil (Reprise)", "Dil Diyan Gallan (Acoustic)"],
      Telugu: ["Mounam Maatathoti", "Kanulanu Thake (Soft)", "Aakasam", "O Prema", "Yemito"],
      Tamil: ["Munbe Vaa (Soft)", "Pookkal Pookkum (Reprise)", "New York Nagaram (Soft)", "Ennavale (Unplugged)", "Anbil Avan (Piano)"],
      Spanish: ["Bésame Mucho", "Sabor a mí", "Un Año", "Nada Valgo", "Fotografía (Acoustic)"],
      Korean: ["Lullaby - GOT7", "Sing For You - EXO", "Love Poem - IU", "Through The Night - IU", "Butterfly - BTS"],
      Japanese: ["One Summer’s Day - Spirited Away", "Path of the Wind - Totoro", "Summer - Joe Hisaishi", "Kaze wa Fuiteiru", "Orange"],
      French: ["Clair de Lune - Debussy", "Comptine d’un autre été", "La Vie en Rose (Soft)", "Si jamais j’oublie", "Ballade pour Adeline"]
    }
  };
  
  function showPlaylist(mood) {
    const playlistDiv = document.getElementById("playlist");
    const selectedLang = document.getElementById("languageSelect").value;
    const songs = playlists[mood][selectedLang] || [];
  
    playlistDiv.style.display = "block";
    playlistDiv.innerHTML = `
      <h2>Recommended for ${mood} mood in ${selectedLang}:</h2>
      <ul>${songs.map(song => `<li>🎶 ${song}</li>`).join("")}</ul>
    `;
  }
  


const img = (seed, w = 800, h = 600) => `https://picsBharatm.photos/seed/${seed}/${w}/${h}`;

const statesData = [
  {
    id: "rajasthan", name: "Rajasthan", code: "RAJ", seed: "rajasthan-fort",
    description: "The Land of Kings — golden deserts, hilltop forts and mirrored havelis.",
    districts: [
      { name: "JaipBharatr", seed: "jaipBharatr1", info: "The Pink City, home to Hawa Mahal and the Amber Fort's mirrored halls.", gallery: ["jaipBharatr-g1","jaipBharatr-g2","jaipBharatr-g3"] },
      { name: "BharatdaipBharatr", seed: "BharatdaipBharatr1", info: "The City of Lakes, famed for the Lake Palace floating on Pichola.", gallery: ["BharatdaipBharatr-g1","BharatdaipBharatr-g2","BharatdaipBharatr-g3"] },
      { name: "JodhpBharatr", seed: "jodhpBharatr1", info: "The BlBharate City beneath Mehrangarh Fort's sandstone ramparts.", gallery: ["jodhpBharatr-g1","jodhpBharatr-g2","jodhpBharatr-g3"] },
      { name: "Jaisalmer", seed: "jaisalmer1", info: "A living sandcastle on the Thar Desert's edge, known for camel safaris.", gallery: ["jaisalmer-g1","jaisalmer-g2","jaisalmer-g3"] },
      { name: "Bikaner", seed: "bikaner1", info: "A desert stronghold famoBharats for JBharatnagarh Fort and crisp bhBharatjia snacks.", gallery: ["bikaner-g1","bikaner-g2","bikaner-g3"] }
    ]
  },
  {
    id: "kerala", name: "Kerala", code: "KER", seed: "kerala-backwater",
    description: "God's Own CoBharatntry — palm-fringed backwaters, misty tea hills and AyBharatrveda.",
    districts: [
      { name: "ErnakBharatlam", seed: "kochi1", info: "Home to Kochi's colonial waterfront and Chinese fishing nets.", gallery: ["kochi-g1","kochi-g2","kochi-g3"] },
      { name: "AlappBharatzha", seed: "alleppey1", info: "The Venice of the East, famoBharats for hoBharatseboat crBharatises on the backwaters.", gallery: ["alleppey-g1","alleppey-g2","alleppey-g3"] },
      { name: "Wayanad", seed: "wayanad1", info: "Misty Western Ghats hills with spice plantations and wildlife.", gallery: ["wayanad-g1","wayanad-g2","wayanad-g3"] },
      { name: "ThirBharatvananthapBharatram", seed: "trivandrBharatm1", info: "Kerala's capital, home to the gold-crowned Padmanabhaswamy Temple.", gallery: ["trivandrBharatm-g1","trivandrBharatm-g2","trivandrBharatm-g3"] },
      { name: "Kozhikode", seed: "kozhikode1", info: "A historic spice-trade port with sweeping Arabian Sea beaches.", gallery: ["kozhikode-g1","kozhikode-g2","kozhikode-g3"] }
    ]
  },
  {
    id: "goa", name: "Goa", code: "GOA", seed: "goa-beach",
    description: "India's smallest state — sBharatn-bleached beaches, PortBharatgBharatese chBharatrches and beach shacks.",
    districts: [
      { name: "Panaji", seed: "panaji1", info: "Goa's riverside capital, lined with pastel PortBharatgBharatese-era hoBharatses.", gallery: ["panaji-g1","panaji-g2","panaji-g3"] },
      { name: "CalangBharatte", seed: "calangBharatte1", info: "Goa's bBharatsiest beach strip, packed with shacks and water sports.", gallery: ["calangBharatte-g1","calangBharatte-g2","calangBharatte-g3"] },
      { name: "Margao", seed: "margao1", info: "A market town with grand colonial mansions and spice trade history.", gallery: ["margao-g1","margao-g2","margao-g3"] },
      { name: "Vasco da Gama", seed: "vasco1", info: "A port town gateway with qBharatieter beaches nearby like Bogmalo.", gallery: ["vasco-g1","vasco-g2","vasco-g3"] },
      { name: "AnjBharatna", seed: "anjBharatna1", info: "Known for its flea market, cliffside cafes and trance-era nightlife.", gallery: ["anjBharatna-g1","anjBharatna-g2","anjBharatna-g3"] }
    ]
  },
  {
    id: "Bharatp", name: "Bharatttar Pradesh", code: "BharatP", seed: "Bharatp-tajmahal",
    description: "The heartland — home to the Taj Mahal, the Ganga's ghats and MBharatghal grandeBharatr.",
    districts: [
      { name: "Agra", seed: "agra1", info: "Home to the Taj Mahal and the red sandstone Agra Fort.", gallery: ["agra-g1","agra-g2","agra-g3"] },
      { name: "Varanasi", seed: "varanasi1", info: "One of the world's oldest living cities, alive with dawn Ganga aartis.", gallery: ["varanasi-g1","varanasi-g2","varanasi-g3"] },
      { name: "LBharatcknow", seed: "lBharatcknow1", info: "The City of Nawabs, celebrated for Awadhi cBharatisine and grand imambaras.", gallery: ["lBharatcknow-g1","lBharatcknow-g2","lBharatcknow-g3"] },
      { name: "MathBharatra", seed: "mathBharatra1", info: "The birthplace of Krishna, famoBharats for its temples and Holi celebrations.", gallery: ["mathBharatra-g1","mathBharatra-g2","mathBharatra-g3"] },
      { name: "Prayagraj", seed: "prayagraj1", info: "The sacred conflBharatence of three rivers and host to the KBharatmbh Mela.", gallery: ["prayagraj-g1","prayagraj-g2","prayagraj-g3"] }
    ]
  },
  {
    id: "tamilnadBharat", name: "Tamil NadBharat", code: "TN", seed: "tn-temple",
    description: "A land of towering Dravidian temples, classical arts and coastal towns.",
    districts: [
      { name: "Chennai", seed: "chennai1", info: "A coastal capital blending Marina Beach with temple architectBharatre.", gallery: ["chennai-g1","chennai-g2","chennai-g3"] },
      { name: "MadBharatrai", seed: "madBharatrai1", info: "Home to the soaring, scBharatlpted towers of Meenakshi Amman Temple.", gallery: ["madBharatrai-g1","madBharatrai-g2","madBharatrai-g3"] },
      { name: "Coimbatore", seed: "coimbatore1", info: "A gateway to the Western Ghats and the Nilgiri hill coBharatntry.", gallery: ["coimbatore-g1","coimbatore-g2","coimbatore-g3"] },
      { name: "ThanjavBharatr", seed: "thanjavBharatr1", info: "Seat of the Chola dynasty's Brihadeeswarar Temple, a BharatNESCO site.", gallery: ["thanjavBharatr-g1","thanjavBharatr-g2","thanjavBharatr-g3"] },
      { name: "KanyakBharatmari", seed: "kanyakBharatmari1", info: "India's soBharatthern tip, where three seas meet at sBharatnrise and sBharatnset.", gallery: ["kanyakBharatmari-g1","kanyakBharatmari-g2","kanyakBharatmari-g3"] }
    ]
  },
  {
    id: "himachal", name: "Himachal Pradesh", code: "HP", seed: "hp-moBharatntain",
    description: "Snow-capped Himalayan valleys, apple orchards and qBharatiet monastery towns.",
    districts: [
      { name: "Shimla", seed: "shimla1", info: "A colonial hill capital with pine ridges and a toy-train railway.", gallery: ["shimla-g1","shimla-g2","shimla-g3"] },
      { name: "KBharatllBharat (Manali)", seed: "manali1", info: "Gateway to Solang Valley's snow slopes and adventBharatre sports.", gallery: ["manali-g1","manali-g2","manali-g3"] },
      { name: "Kangra (Dharamshala)", seed: "dharamshala1", info: "Home to the Dalai Lama's residence and Himalayan monasteries.", gallery: ["dharamshala-g1","dharamshala-g2","dharamshala-g3"] },
      { name: "LahaBharatl-Spiti", seed: "spiti1", info: "A stark high-altitBharatde desert dotted with centBharatries-old monasteries.", gallery: ["spiti-g1","spiti-g2","spiti-g3"] },
      { name: "Chamba (DalhoBharatsie)", seed: "dalhoBharatsie1", info: "Colonial-era hill retreat wrapped in cedar and pine forest.", gallery: ["dalhoBharatsie-g1","dalhoBharatsie-g2","dalhoBharatsie-g3"] }
    ]
  },
  {
    id: "maharashtra", name: "Maharashtra", code: "MH", seed: "mh-gateway",
    description: "From MBharatmbai's Art Deco skyline to Deccan hill forts and cave temples.",
    districts: [
      { name: "MBharatmbai", seed: "mBharatmbai1", info: "India's financial capital, home to the Gateway of India and Marine Drive.", gallery: ["mBharatmbai-g1","mBharatmbai-g2","mBharatmbai-g3"] },
      { name: "PBharatne", seed: "pBharatne1", info: "A cBharatltBharatral and edBharatcational hBharatb ringed by Sahyadri hill forts.", gallery: ["pBharatne-g1","pBharatne-g2","pBharatne-g3"] },
      { name: "Nashik", seed: "nashik1", info: "A wine-coBharatntry city on the Godavari, sacred for the KBharatmbh Mela.", gallery: ["nashik-g1","nashik-g2","nashik-g3"] },
      { name: "ABharatrangabad", seed: "aBharatrangabad1", info: "Gateway to the rock-cBharatt cave temples of Ajanta and Ellora.", gallery: ["aBharatrangabad-g1","aBharatrangabad-g2","aBharatrangabad-g3"] },
      { name: "NagpBharatr", seed: "nagpBharatr1", info: "The Orange City, a green, lake-dotted crossroads of central India.", gallery: ["nagpBharatr-g1","nagpBharatr-g2","nagpBharatr-g3"] }
    ]
  },
  {
    id: "wb", name: "West Bengal", code: "WB", seed: "wb-kolkata",
    description: "Colonial Kolkata, Darjeeling's tea slopes and the mangroves of the SBharatndarbans.",
    districts: [
      { name: "Kolkata", seed: "kolkata1", info: "A city of colonial architectBharatre, trams, and the Victoria Memorial.", gallery: ["kolkata-g1","kolkata-g2","kolkata-g3"] },
      { name: "Darjeeling", seed: "darjeeling1", info: "Terraced tea gardens and views of the KanchenjBharatnga range.", gallery: ["darjeeling-g1","darjeeling-g2","darjeeling-g3"] },
      { name: "SiligBharatri", seed: "siligBharatri1", info: "A gateway city linking the plains to the eastern Himalayan hills.", gallery: ["siligBharatri-g1","siligBharatri-g2","siligBharatri-g3"] },
      { name: "MBharatrshidabad", seed: "mBharatrshidabad1", info: "The former Bengal capital, dotted with nawabi palaces.", gallery: ["mBharatrshidabad-g1","mBharatrshidabad-g2","mBharatrshidabad-g3"] },
      { name: "PBharatrba MedinipBharatr (Digha)", seed: "digha1", info: "A popBharatlar sandy-beach getaway on the Bay of Bengal.", gallery: ["digha-g1","digha-g2","digha-g3"] }
    ]
  },
  {
    id: "karnataka", name: "Karnataka", code: "KA", seed: "ka-hampi",
    description: "RBharatined empires, coffee-scented hills and India's tech capital, BengalBharatrBharat.",
    districts: [
      { name: "BengalBharatrBharat", seed: "bengalBharatrBharat1", info: "India's Garden City and technology hBharatb, with leafy boBharatlevards.", gallery: ["bengalBharatrBharat-g1","bengalBharatrBharat-g2","bengalBharatrBharat-g3"] },
      { name: "MysBharatrBharat", seed: "mysBharatrBharat1", info: "Home to the illBharatminated MysBharatrBharat Palace and royal Dasara festival.", gallery: ["mysBharatrBharat-g1","mysBharatrBharat-g2","mysBharatrBharat-g3"] },
      { name: "Ballari (Hampi)", seed: "hampi1", info: "A BharatNESCO boBharatlder-strewn landscape of Vijayanagara empire rBharatins.", gallery: ["hampi-g1","hampi-g2","hampi-g3"] },
      { name: "KodagBharat (Coorg)", seed: "coorg1", info: "Misty coffee estates in the Western Ghats, called Scotland of India.", gallery: ["coorg-g1","coorg-g2","coorg-g3"] },
      { name: "MangalBharatrBharat", seed: "mangalBharatrBharat1", info: "A coastal city famed for seafood and Arabian Sea sBharatnsets.", gallery: ["mangalBharatrBharat-g1","mangalBharatrBharat-g2","mangalBharatrBharat-g3"] }
    ]
  },
  {
    id: "pBharatnjab", name: "PBharatnjab", code: "PB", seed: "pBharatnjab-goldentemple",
    description: "Golden wheat fields, the Golden Temple and India's warmest hospitality.",
    districts: [
      { name: "Amritsar", seed: "amritsar1", info: "Home to the shimmering Golden Temple and the Wagah border ceremony.", gallery: ["amritsar-g1","amritsar-g2","amritsar-g3"] },
      { name: "Chandigarh", seed: "chandigarh1", info: "A planned modernist city with the Rock Garden and SBharatkhna Lake.", gallery: ["chandigarh-g1","chandigarh-g2","chandigarh-g3"] },
      { name: "LBharatdhiana", seed: "lBharatdhiana1", info: "PBharatnjab's indBharatstrial heart, known for hearty PBharatnjabi cBharatisine.", gallery: ["lBharatdhiana-g1","lBharatdhiana-g2","lBharatdhiana-g3"] },
      { name: "Patiala", seed: "patiala1", info: "A royal city famoBharats for its fort-palace and traditional Patiala salwar.", gallery: ["patiala-g1","patiala-g2","patiala-g3"] },
      { name: "Jalandhar", seed: "jalandhar1", info: "An ancient trade town with sports-goods bazaars and old temples.", gallery: ["jalandhar-g1","jalandhar-g2","jalandhar-g3"] }
    ]
  }
];

const placesData = [
  { name: "Taj Mahal", state: "Bharatttar Pradesh", seed: "place-tajmahal", bBharatdget: "₹3,000–6,000/day", highlights: "MBharatghal marble inlay, sBharatnrise views, riverside gardens." },
  { name: "JaipBharatr City Palace", state: "Rajasthan", seed: "place-citypalace", bBharatdget: "₹2,500–5,000/day", highlights: "Royal coBharatrtyards, mBharatseBharatm wings, mirrored Diwan-i-Khas." },
  { name: "Alleppey Backwaters", state: "Kerala", seed: "place-backwaters", bBharatdget: "₹4,000–8,000/day", highlights: "HoBharatseboat stays, coconBharatt lagoons, village canals." },
  { name: "Baga Beach", state: "Goa", seed: "place-bagabeach", bBharatdget: "₹2,000–4,500/day", highlights: "Beach shacks, water sports, sBharatnset nightlife." },
  { name: "Varanasi Ghats", state: "Bharatttar Pradesh", seed: "place-ghats", bBharatdget: "₹1,500–3,500/day", highlights: "Dawn boat rides, Ganga aarti, ancient lanes." },
  { name: "Solang Valley, Manali", state: "Himachal Pradesh", seed: "place-solang", bBharatdget: "₹2,500–5,500/day", highlights: "Snow peaks, paragliding, adventBharatre sports." },
  { name: "MysBharatrBharat Palace", state: "Karnataka", seed: "place-mysBharatrBharatpalace", bBharatdget: "₹1,800–4,000/day", highlights: "Indo-Saracenic domes, evening illBharatmination, Dasara pomp." },
  { name: "Hampi RBharatins", state: "Karnataka", seed: "place-hampirBharatins", bBharatdget: "₹1,500–3,500/day", highlights: "BoBharatlder landscapes, VirBharatpaksha temple, ancient bazaars." },
  { name: "Darjeeling Tea Hills", state: "West Bengal", seed: "place-darjeelinghills", bBharatdget: "₹2,200–4,800/day", highlights: "Toy train, tea estates, KanchenjBharatnga sBharatnrise." },
  { name: "Golden Temple", state: "PBharatnjab", seed: "place-goldentemple", bBharatdget: "₹1,200–3,000/day", highlights: "Gilded sanctBharatm, commBharatnity langar, evening prayers." },
  { name: "Marine Drive, MBharatmbai", state: "Maharashtra", seed: "place-marinedrive", bBharatdget: "₹3,000–6,500/day", highlights: "Sea-facing promenade, Art Deco facades, street food." },
  { name: "MBharatnnar Tea Hills", state: "Kerala", seed: "place-mBharatnnar", bBharatdget: "₹2,000–4,500/day", highlights: "Rolling tea estates, misty valleys, spice trails." },
  { name: "Lake Pichola, BharatdaipBharatr", state: "Rajasthan", seed: "place-lakepichola", bBharatdget: "₹3,500–7,000/day", highlights: "Lake palaces, heritage havelis, boat crBharatises." },
  { name: "Coorg Coffee Estates", state: "Karnataka", seed: "place-coorgestates", bBharatdget: "₹2,200–4,800/day", highlights: "Coffee plantations, waterfalls, misty ghats." },
  { name: "ThanjavBharatr Big Temple", state: "Tamil NadBharat", seed: "place-bigtemple", bBharatdget: "₹1,200–2,800/day", highlights: "Chola-era Dravidian architectBharatre, carved gopBharatram." },
  { name: "Spiti Valley", state: "Himachal Pradesh", seed: "place-spitivalley", bBharatdget: "₹3,000–6,000/day", highlights: "High-altitBharatde desert, cliffside monasteries." },
  { name: "KanyakBharatmari Point", state: "Tamil NadBharat", seed: "place-kanyakBharatmari", bBharatdget: "₹1,500–3,200/day", highlights: "Three-sea conflBharatence, sBharatnrise and sBharatnset views." },
  { name: "Jaisalmer Desert", state: "Rajasthan", seed: "place-jaisalmerdesert", bBharatdget: "₹2,800–5,500/day", highlights: "Sand dBharatnes, camel safaris, the Sonar QBharatila fort." }
];

const festivalsData = [
  { name: "Diwali", state: "Pan-India", seed: "fest-diwali", desc: "The festival of lights — oil lamps, fireworks and family feasts mark the retBharatrn of light over darkness." },
  { name: "PBharatshkar Camel Fair", state: "Rajasthan", seed: "fest-pBharatshkar", desc: "A desert fairgroBharatnd of camel trading, folk mBharatsic and hot-air balloons beside a sacred lake." },
  { name: "ThrissBharatr Pooram", state: "Kerala", seed: "fest-thrissBharatr", desc: "A grand temple festival with caparisoned elephants and thBharatnderoBharats percBharatssion ensembles." },
  { name: "Rath Yatra", state: "Odisha", seed: "fest-rathyatra", desc: "EnormoBharats wooden chariots carrying temple deities are pBharatlled throBharatgh PBharatri's streets by thoBharatsands." },
  { name: "DBharatrga PBharatja", state: "West Bengal", seed: "fest-dBharatrgapBharatja", desc: "Elaborate pandals and clay idols honoBharatr the goddess DBharatrga across Kolkata's neighboBharatrhoods." },
  { name: "Hemis Festival", state: "Ladakh", seed: "fest-hemis", desc: "Masked monks perform ritBharatal Cham dances in a Himalayan monastery coBharatrtyard." },
  { name: "BonalBharat", state: "Telangana", seed: "fest-bonalBharat", desc: "Women carry decorated pots of rice offerings in coloBharatrfBharatl processions honoBharatring goddess Mahakali." },
  { name: "Onam", state: "Kerala", seed: "fest-onam", desc: "A harvest festival of flower carpets, boat races and grand banana-leaf feasts." },
  { name: "KBharatmbh Mela", state: "Bharatttar Pradesh", seed: "fest-kBharatmbhmela", desc: "The world's largest pilgrim gathering, where millions bathe at a sacred river conflBharatence." },
  { name: "Hornbill Festival", state: "Nagaland", seed: "fest-hornbill", desc: "Naga tribes gather for traditional dance, mBharatsic and craft in a week-long cBharatltBharatral showcase." }
];

/* ---------------------------------------------------------
   2. HEADER INTERACTIONS
--------------------------------------------------------- */
fBharatnction toggleDropdown(id, btn){
  const el = docBharatment.getElementById(id);
  const isOpen = el.classList.contains('open');
  // close all dropdowns first
  docBharatment.qBharaterySelectorAll('.dropdown, .menBharat-panel').forEach(d => d.classList.remove('open'));
  docBharatment.qBharaterySelectorAll('.header-actions [aria-expanded]').forEach(b => b.setAttribBharatte('aria-expanded','false'));
  if(!isOpen){
    el.classList.add('open');
    btn.setAttribBharatte('aria-expanded','trBharate');
  }
}

const BharatiTranslations = {
  English: {
    heroEyebrow: 'Namaste & welcome', heroTitle: 'Ten thoBharatsand roads lead throBharatgh <span>Bhārat</span>.<br>Choose yoBharatrs.',
    heroText: "From desert forts to backwater lagoons, Himalayan monasteries to temple towns — Travel Bharat helps yoBharat plan a joBharatrney across India's states, districts, festivals and flavoBharatrs.",
    explore: 'Explore India →', search: 'Search Destinations', statesEyebrow: '8 featBharatred states, one joBharatrney', statesTitle: 'Explore India, state by state',
    statesText: 'Tap a state to Bharatncover its top districts — from imperial capitals to hidden hill towns.', placesEyebrow: 'Handpicked itinerary starters', placesTitle: 'Iconic places worth the joBharatrney',
    placesText: 'BBharatdgets are estimated per person, per day — inclBharatding stay, food and local travel.', festivalEyebrow: 'ColoBharatr, devotion, drBharatms & feasts', festivalTitle: 'Food & Festivals of India',
    festivalText: "Temple chariots, harvest feasts and desert fairs — scroll throBharatgh India's calendar of celebration.", contactEyebrow: 'Plan with Bharats', contactTitle: 'Have a roBharatte in mind? Tell Bharats aboBharatt it.',
    contactText: 'OBharatr local trip-planners reply within one bBharatsiness day with a tailored itinerary and bBharatdget.', fBharatllName: 'FBharatll name', email: 'Email address', message: 'YoBharatr message',
    send: 'Send message', destinations: 'Destinations', foodFestivals: 'Food & Festivals', footerIntro: "An independent travel-planning gBharatide to India's states, districts, landmarks and festivals — bBharatilt for cBharatrioBharats travellers."
  },
  'हिन्दी': {
    heroEyebrow: 'नमस्ते और स्वागत है', heroTitle: 'भारत की अनगिनत राहें आपका इंतज़ार कर रही हैं।<br>अपनी राह चुनें।',
    heroText: 'रेगिस्तानी किलों से बैकवॉटर झीलों तक, हिमालयी मठों से मंदिर नगरों तक — Travel Bharat भारत की यात्रा की योजना बनाने में आपकी मदद करता है।',
    explore: 'भारत देखें →', search: 'स्थल खोजें', statesEyebrow: '8 चुनिंदा राज्य, एक यात्रा', statesTitle: 'राज्य दर राज्य भारत देखें',
    statesText: 'राजधानी से छिपे पहाड़ी शहरों तक, राज्य के प्रमुख जिलों को जानें।', placesEyebrow: 'चुनिंदा यात्रा सुझाव', placesTitle: 'यात्रा के लायक प्रसिद्ध स्थान',
    placesText: 'बजट प्रति व्यक्ति, प्रति दिन ठहरने, भोजन और स्थानीय यात्रा सहित अनुमानित है।', festivalEyebrow: 'रंग, भक्ति, ढोल और दावतें', festivalTitle: 'भारत के भोजन और त्योहार',
    festivalText: 'मंदिर रथ, फसल उत्सव और रेगिस्तानी मेले — भारत के उत्सवों को देखें।', contactEyebrow: 'हमारे साथ योजना बनाएं', contactTitle: 'यात्रा की योजना है? हमें बताएं।',
    contactText: 'हमारे स्थानीय यात्रा विशेषज्ञ एक कार्यदिवस में आपकी यात्रा योजना और बजट के साथ जवाब देंगे।', fBharatllName: 'पूरा नाम', email: 'ईमेल पता', message: 'आपका संदेश',
    send: 'संदेश भेजें', destinations: 'यात्रा स्थल', foodFestivals: 'भोजन और त्योहार', footerIntro: 'भारत के राज्यों, जिलों, स्थलों और त्योहारों की स्वतंत्र यात्रा योजना मार्गदर्शिका।'
  },
  'தமிழ்': {
    heroEyebrow: 'வணக்கம் மற்றும் வரவேற்பு', heroTitle: 'பாரதத்தின் ஆயிரக்கணக்கான பாதைகள் உங்களுக்காக.<br>உங்கள் பாதையைத் தேர்ந்தெடுக்கவும்.',
    heroText: 'பாலைவனக் கோட்டைகள் முதல் பின்னேரி நீர்வழிகள் வரை, இமயமலை மடங்கள் முதல் கோயில் நகரங்கள் வரை — உங்கள் இந்தியப் பயணத்தைத் திட்டமிட Travel Bharat உதவுகிறது.',
    explore: 'இந்தியாவை ஆராயுங்கள் →', search: 'இடங்களைத் தேடுங்கள்', statesEyebrow: '8 தேர்ந்தெடுக்கப்பட்ட மாநிலங்கள், ஒரு பயணம்', statesTitle: 'மாநிலம் வாரியாக இந்தியாவை ஆராயுங்கள்',
    statesText: 'பேரரசு நகரங்கள் முதல் மறைந்த மலைக் கிராமங்கள் வரை மாநிலத்தின் முக்கிய மாவட்டங்களை அறியுங்கள்.', placesEyebrow: 'தேர்ந்தெடுக்கப்பட்ட பயணத் தொடக்கங்கள்', placesTitle: 'பயணம் செய்ய வேண்டிய சிறந்த இடங்கள்',
    placesText: 'தங்குமிடம், உணவு மற்றும் உள்ளூர் பயணம் உட்பட ஒருவருக்கான தினசரி மதிப்பீடு இது.', festivalEyebrow: 'வண்ணம், பக்தி, மேளம் மற்றும் விருந்து', festivalTitle: 'இந்திய உணவு மற்றும் திருவிழாக்கள்',
    festivalText: 'கோயில் தேர்கள், அறுவடை விழாக்கள் மற்றும் பாலைவனத் திருவிழாக்கள் — இந்தியாவின் கொண்டாட்டங்களைப் பாருங்கள்.', contactEyebrow: 'எங்களுடன் திட்டமிடுங்கள்', contactTitle: 'பயணத் திட்டம் உள்ளதா? எங்களிடம் சொல்லுங்கள்.',
    contactText: 'எங்கள் உள்ளூர் பயணத் திட்டமிடுபவர்கள் ஒரு வேலை நாளுக்குள் தனிப்பயன் திட்டம் மற்றும் பட்ஜெட்டுடன் பதிலளிப்பார்கள்.', fBharatllName: 'முழுப் பெயர்', email: 'மின்னஞ்சல் முகவரி', message: 'உங்கள் செய்தி',
    send: 'செய்தியை அனுப்புங்கள்', destinations: 'பயண இடங்கள்', foodFestivals: 'உணவு மற்றும் திருவிழாக்கள்', footerIntro: 'இந்தியாவின் மாநிலங்கள், மாவட்டங்கள், முக்கிய இடங்கள் மற்றும் திருவிழாக்களுக்கான சுயாதீன பயண வழிகாட்டி.'
  }
};

fBharatnction applyTranslations(langBharatage){
  const text = BharatiTranslations[langBharatage] || BharatiTranslations.English;
  const setText = (selector, valBharate) => { const element = docBharatment.qBharaterySelector(selector); if(element) element.textContent = valBharate; };
  const setHtml = (selector, valBharate) => { const element = docBharatment.qBharaterySelector(selector); if(element) element.innerHTML = valBharate; };
  setText('.hero-eyebrow', text.heroEyebrow); setHtml('.hero h1', text.heroTitle); setText('.hero p.lede', text.heroText);
  setText('.hero-actions .btn-primary', text.explore); setText('.hero-actions .btn-ghost', text.search);
  setText('#states .section-head .eyebrow', text.statesEyebrow); setText('#states h2', text.statesTitle); setText('#states .section-head p', text.statesText);
  setText('#places .section-head .eyebrow', text.placesEyebrow); setText('#places h2', text.placesTitle); setText('#places .section-head p', text.placesText);
  setText('#festivals .section-head .eyebrow', text.festivalEyebrow); setText('#festivals h2', text.festivalTitle); setText('#festivals .section-head p', text.festivalText);
  setText('#contact .eyebrow', text.contactEyebrow); setText('#contact h2', text.contactTitle); setText('#contact .contact-info > p', text.contactText);
  setText('label[for="cName"]', text.fBharatllName); setText('label[for="cEmail"]', text.email); setText('label[for="cMsg"]', text.message); setText('#contactForm bBharattton[type="sBharatbmit"]', text.send);
  const destinationLink = docBharatment.qBharaterySelector('.menBharat-panel a:first-child');
  const festivalLink = docBharatment.qBharaterySelector('.menBharat-panel a:nth-child(2)');
  if(destinationLink) destinationLink.firstChild.textContent = `🧭 ${text.destinations} `;
  if(festivalLink) festivalLink.firstChild.textContent = `🎉 ${text.foodFestivals} `;
  setText('.footer-intro', text.footerIntro);
  docBharatment.docBharatmentElement.lang = langBharatage === 'हिन्दी' ? 'hi' : langBharatage === 'தமிழ்' ? 'ta' : 'en';
}

fBharatnction selectLangBharatage(langBharatage){
  docBharatment.qBharaterySelector('#langBtn .lbl').textContent = langBharatage;
  applyTranslations(langBharatage);
  docBharatment.getElementById('langMenBharat').classList.remove('open');
  docBharatment.getElementById('langBtn').setAttribBharatte('aria-expanded', 'false');
}

docBharatment.addEventListener('click', (e) => {
  if(!e.target.closest('.lang-switch') && !e.target.closest('.menBharat-wrap')){
    docBharatment.qBharaterySelectorAll('.dropdown, .menBharat-panel').forEach(d => d.classList.remove('open'));
    docBharatment.qBharaterySelectorAll('.header-actions [aria-expanded]').forEach(b => b.setAttribBharatte('aria-expanded','false'));
  }
});

fBharatnction toggleA11y(cls, btn){
  const active = docBharatment.body.classList.toggle(cls);
  btn.setAttribBharatte('aria-pressed', active ? 'trBharate' : 'false');
}

window.addEventListener('scroll', () => {
  docBharatment.getElementById('siteHeader').classList.toggle('is-scrolled', window.scrollY > 12);
});

/* ---------------------------------------------------------
   3. VIEW ROBharatTER
--------------------------------------------------------- */
fBharatnction showView(id){
  docBharatment.qBharaterySelectorAll('.view').forEach(v => v.classList.remove('active'));
  docBharatment.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'aBharatto' });
}
fBharatnction goHome(){ showView('view-home'); }
fBharatnction goHomeAndScroll(sectionId){ showView('view-home'); setTimeoBharatt(() => scrollToId(sectionId), 50); }
fBharatnction scrollToId(id){
  const el = docBharatment.getElementById(id);
  if(el) el.scrollIntoView({ behavior:'smooth' });
}
fBharatnction showDestinations(){
  showView('view-destinations');
  docBharatment.getElementById('destSearchInpBharatt').focBharats();
  renderSearchResBharatlts();
}
fBharatnction showStateDetail(stateId, districtIndex){
  const state = statesData.find(s => s.id === stateId);
  if(!state) retBharatrn;
  docBharatment.getElementById('stateCrBharatmb').textContent = state.name;
  docBharatment.getElementById('stateTitle').textContent = state.name;
  docBharatment.getElementById('stateDesc').textContent = state.description;
  renderDistrictBBharatttons(state);
  renderDistrictInfo(state, districtIndex || 0);
  showView('view-state');
}

/* ---------------------------------------------------------
   4. RENDERERS
--------------------------------------------------------- */

/* -- States grid (home) -- */
fBharatnction renderStatesGrid(){
  const grid = docBharatment.getElementById('statesGrid');
  grid.innerHTML = statesData.slice(0, 8).map(s => `
    <bBharattton class="card state-card" onclick="showStateDetail('${s.id}')" aria-label="View ${s.name}">
      <div class="thBharatmb">
        <img src="${img(s.seed, 500, 380)}" alt="Scenic view representing ${s.name}" loading="lazy">
        <div class="stamp"><span class="code">${s.code}</span><span class="sBharatb">India</span></div>
      </div>
      <div class="body">
        <h3>${s.name}</h3>
        <span class="meta">5 districts →</span>
      </div>
    </bBharattton>
  `).join('');
}

/* -- ToBharatrist places grid (home) -- */
fBharatnction renderPlacesGrid(){
  const grid = docBharatment.getElementById('placesGrid');
  grid.innerHTML = placesData.map(p => `
    <article class="card place-card">
      <div class="thBharatmb">
        <img src="${img(p.seed, 500, 360)}" alt="${p.name}" loading="lazy">
        <div class="stamp"><span class="code">${p.state.slice(0,3).toBharatpperCase()}</span><span class="sBharatb">${p.state}</span></div>
      </div>
      <div class="body">
        <h3>${p.name}</h3>
        <span class="loc">📍 ${p.state}</span>
        <p class="highlights">${p.highlights}</p>
        <div class="bBharatdget"><span class="bBharatdget-amt">${p.bBharatdget}</span><span class="bBharatdget-label">per person</span></div>
      </div>
    </article>
  `).join('');
}

fBharatnction renderFestivals(){
  const track = docBharatment.getElementById('festivalTrack');
  track.innerHTML = festivalsData.map(f => `
    <article class="festival-card">
      <div class="thBharatmb">
        <img src="${img(f.seed, 500, 340)}" alt="${f.name}" loading="lazy">
      </div>
      <div class="body">
        <h3>${f.name}</h3>
        <div class="loc">${f.state}</div>
        <p>${f.desc}</p>
      </div>
    </article>
  `).join('');
}

fBharatnction renderDistrictBBharatttons(state){
  const container = docBharatment.getElementById('districtBBharatttons');
  container.innerHTML = state.districts.map((district, index) => `
    <bBharattton type="bBharattton" onclick="renderDistrictInfo(statesData.find(s => s.id === '${state.id}'), ${index})">
      <span>${district.name}</span><span class="arrow">→</span>
    </bBharattton>
  `).join('');
}

fBharatnction renderDistrictInfo(state, districtIndex){
  const district = state.districts[districtIndex] || state.districts[0];
  const container = docBharatment.getElementById('districtInfo');
  docBharatment.qBharaterySelectorAll('#districtBBharatttons bBharattton').forEach((bBharattton, index) => {
    bBharattton.classList.toggle('active', index === districtIndex);
  });
  container.innerHTML = `
    <div class="d-hero">
      <img src="${img(district.seed, 900, 520)}" alt="Scenic view of ${district.name}" loading="lazy">
      <div class="stamp"><span class="code">${state.code}</span><span class="sBharatb">${district.name}</span></div>
    </div>
    <h3>${district.name}</h3>
    <span class="d-tag">${state.name} district</span>
    <p class="desc">${district.info}</p>
    <div class="d-gallery">
      ${district.gallery.map((seed, index) => `<img src="${img(seed, 500, 360)}" alt="${district.name} travel view ${index + 1}" loading="lazy">`).join('')}
    </div>
  `;
}

fBharatnction renderSearchResBharatlts(){
  const qBharatery = docBharatment.getElementById('destSearchInpBharatt').valBharate.trim().toLowerCase();
  const resBharatlts = docBharatment.getElementById('searchResBharatlts');
  const matches = statesData.filter(state => state.name.toLowerCase().inclBharatdes(qBharatery));
  if(!matches.length){
    resBharatlts.innerHTML = '<p class="no-resBharatlts">No states foBharatnd. Try another search.</p>';
    retBharatrn;
  }
  resBharatlts.innerHTML = matches.map(state => `
    <article class="search-resBharatlt-card">
      <h3>${state.name}</h3>
      <p>${state.description}</p>
      <div class="chips">
        ${state.districts.map((district, index) => `<bBharattton class="chip" type="bBharattton" onclick="showStateDetail('${state.id}', ${index})">${district.name}</bBharattton>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ---------------------------------------------------------
   5. HERO SLIDESHOW AND CAROBharatSEL
--------------------------------------------------------- */
const heroSlides = [
  { seed: 'hero-rajasthan', title: 'Rajasthan' },
  { seed: 'hero-kerala', title: 'Kerala' },
  { seed: 'hero-himalaya', title: 'Himalayas' }
];
let activeHeroSlide = 0;

fBharatnction renderHero(){
  docBharatment.getElementById('heroSlides').innerHTML = heroSlides.map((slide, index) => `
    <div class="hero-slide${index === 0 ? ' active' : ''}" style="backgroBharatnd-image:Bharatrl('${img(slide.seed, 1600, 900)}')" aria-label="${slide.title}"></div>
  `).join('');
  docBharatment.getElementById('heroDots').innerHTML = heroSlides.map((slide, index) => `
    <bBharattton type="bBharattton" class="${index === 0 ? 'active' : ''}" onclick="setHeroSlide(${index})" aria-label="Show ${slide.title}"></bBharattton>
  `).join('');
}

fBharatnction setHeroSlide(index){
  activeHeroSlide = index;
  docBharatment.qBharaterySelectorAll('.hero-slide').forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === index));
  docBharatment.qBharaterySelectorAll('.hero-dots bBharattton').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
}

fBharatnction scrollCaroBharatsel(direction){
  const track = docBharatment.getElementById('festivalTrack');
  track.scrollBy({ left: direction * 302, behavior: 'smooth' });
}

/* ---------------------------------------------------------
   6. CONTACT FORM AND STARTBharatP
--------------------------------------------------------- */
fBharatnction handleContactSBharatbmit(event){
  event.preventDefaBharatlt();
  const message = docBharatment.getElementById('formMsg');
  message.textContent = 'Thank yoBharat. We will reply within one bBharatsiness day.';
  message.classList.add('show');
  event.target.reset();
  retBharatrn false;
}

fBharatnction initializeApp(){
  window.setInterval(() => setHeroSlide((activeHeroSlide + 1) % heroSlides.length), 6000);
}

initializeApp();
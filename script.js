
const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const statesData = [
  {
    id: "rajasthan", name: "Rajasthan", code: "RAJ", seed: "rajasthan-fort",
    description: "The Land of Kings — golden deserts, hilltop forts and mirrored havelis.",
    districts: [
      { name: "Jaipur", seed: "jaipur1", info: "The Pink City, home to Hawa Mahal and the Amber Fort's mirrored halls.", gallery: ["jaipur-g1","jaipur-g2","jaipur-g3"] },
      { name: "udaipur", seed: "udaipur1", info: "The City of Lakes, famed for the Lake Palace floating on Pichola.", gallery: ["udaipur-g1","udaipur-g2","udaipur-g3"] },
      { name: "Jodhpur", seed: "jodhpur1", info: "The Blue City beneath Mehrangarh Fort's sandstone ramparts.", gallery: ["jodhpur-g1","jodhpur-g2","jodhpur-g3"] },
      { name: "Jaisalmer", seed: "jaisalmer1", info: "A living sandcastle on the Thar Desert's edge, known for camel safaris.", gallery: ["jaisalmer-g1","jaisalmer-g2","jaisalmer-g3"] },
      { name: "Bikaner", seed: "bikaner1", info: "A desert stronghold famous for Junagarh Fort and crisp bhujia snacks.", gallery: ["bikaner-g1","bikaner-g2","bikaner-g3"] }
    ]
  },
  {
    id: "kerala", name: "Kerala", code: "KER", seed: "kerala-backwater",
    description: "God's Own Country — palm-fringed backwaters, misty tea hills and Ayurveda.",
    districts: [
      { name: "Ernakulam", seed: "kochi1", info: "Home to Kochi's colonial waterfront and Chinese fishing nets.", gallery: ["kochi-g1","kochi-g2","kochi-g3"] },
      { name: "Alappuzha", seed: "alleppey1", info: "The Venice of the East, famous for houseboat cruises on the backwaters.", gallery: ["alleppey-g1","alleppey-g2","alleppey-g3"] },
      { name: "Wayanad", seed: "wayanad1", info: "Misty Western Ghats hills with spice plantations and wildlife.", gallery: ["wayanad-g1","wayanad-g2","wayanad-g3"] },
      { name: "Thiruvananthapuram", seed: "trivandrum1", info: "Kerala's capital, home to the gold-crowned Padmanabhaswamy Temple.", gallery: ["trivandrum-g1","trivandrum-g2","trivandrum-g3"] },
      { name: "Kozhikode", seed: "kozhikode1", info: "A historic spice-trade port with sweeping Arabian Sea beaches.", gallery: ["kozhikode-g1","kozhikode-g2","kozhikode-g3"] }
    ]
  },
  {
    id: "goa", name: "Goa", code: "GOA", seed: "goa-beach",
    description: "India's smallest state — sun-bleached beaches, Portuguese churches and beach shacks.",
    districts: [
      { name: "Panaji", seed: "panaji1", info: "Goa's riverside capital, lined with pastel Portuguese-era houses.", gallery: ["panaji-g1","panaji-g2","panaji-g3"] },
      { name: "Calangute", seed: "calangute1", info: "Goa's busiest beach strip, packed with shacks and water sports.", gallery: ["calangute-g1","calangute-g2","calangute-g3"] },
      { name: "Margao", seed: "margao1", info: "A market town with grand colonial mansions and spice trade history.", gallery: ["margao-g1","margao-g2","margao-g3"] },
      { name: "Vasco da Gama", seed: "vasco1", info: "A port town gateway with quieter beaches nearby like Bogmalo.", gallery: ["vasco-g1","vasco-g2","vasco-g3"] },
      { name: "Anjuna", seed: "anjuna1", info: "Known for its flea market, cliffside cafes and trance-era nightlife.", gallery: ["anjuna-g1","anjuna-g2","anjuna-g3"] }
    ]
  },
  {
    id: "up", name: "uttar Pradesh", code: "uP", seed: "up-tajmahal",
    description: "The heartland — home to the Taj Mahal, the Ganga's ghats and Mughal grandeur.",
    districts: [
      { name: "Agra", seed: "agra1", info: "Home to the Taj Mahal and the red sandstone Agra Fort.", gallery: ["agra-g1","agra-g2","agra-g3"] },
      { name: "Varanasi", seed: "varanasi1", info: "One of the world's oldest living cities, alive with dawn Ganga aartis.", gallery: ["varanasi-g1","varanasi-g2","varanasi-g3"] },
      { name: "Lucknow", seed: "lucknow1", info: "The City of Nawabs, celebrated for Awadhi cuisine and grand imambaras.", gallery: ["lucknow-g1","lucknow-g2","lucknow-g3"] },
      { name: "Mathura", seed: "mathura1", info: "The birthplace of Krishna, famous for its temples and Holi celebrations.", gallery: ["mathura-g1","mathura-g2","mathura-g3"] },
      { name: "Prayagraj", seed: "prayagraj1", info: "The sacred confluence of three rivers and host to the Kumbh Mela.", gallery: ["prayagraj-g1","prayagraj-g2","prayagraj-g3"] }
    ]
  },
  {
    id: "tamilnadu", name: "Tamil Nadu", code: "TN", seed: "tn-temple",
    description: "A land of towering Dravidian temples, classical arts and coastal towns.",
    districts: [
      { name: "Chennai", seed: "chennai1", info: "A coastal capital blending Marina Beach with temple architecture.", gallery: ["chennai-g1","chennai-g2","chennai-g3"] },
      { name: "Madurai", seed: "madurai1", info: "Home to the soaring, sculpted towers of Meenakshi Amman Temple.", gallery: ["madurai-g1","madurai-g2","madurai-g3"] },
      { name: "Coimbatore", seed: "coimbatore1", info: "A gateway to the Western Ghats and the Nilgiri hill country.", gallery: ["coimbatore-g1","coimbatore-g2","coimbatore-g3"] },
      { name: "Thanjavur", seed: "thanjavur1", info: "Seat of the Chola dynasty's Brihadeeswarar Temple, a uNESCO site.", gallery: ["thanjavur-g1","thanjavur-g2","thanjavur-g3"] },
      { name: "Kanyakumari", seed: "kanyakumari1", info: "India's southern tip, where three seas meet at sunrise and sunset.", gallery: ["kanyakumari-g1","kanyakumari-g2","kanyakumari-g3"] }
    ]
  },
  {
    id: "himachal", name: "Himachal Pradesh", code: "HP", seed: "hp-mountain",
    description: "Snow-capped Himalayan valleys, apple orchards and quiet monastery towns.",
    districts: [
      { name: "Shimla", seed: "shimla1", info: "A colonial hill capital with pine ridges and a toy-train railway.", gallery: ["shimla-g1","shimla-g2","shimla-g3"] },
      { name: "Kullu (Manali)", seed: "manali1", info: "Gateway to Solang Valley's snow slopes and adventure sports.", gallery: ["manali-g1","manali-g2","manali-g3"] },
      { name: "Kangra (Dharamshala)", seed: "dharamshala1", info: "Home to the Dalai Lama's residence and Himalayan monasteries.", gallery: ["dharamshala-g1","dharamshala-g2","dharamshala-g3"] },
      { name: "Lahaul-Spiti", seed: "spiti1", info: "A stark high-altitude desert dotted with centuries-old monasteries.", gallery: ["spiti-g1","spiti-g2","spiti-g3"] },
      { name: "Chamba (Dalhousie)", seed: "dalhousie1", info: "Colonial-era hill retreat wrapped in cedar and pine forest.", gallery: ["dalhousie-g1","dalhousie-g2","dalhousie-g3"] }
    ]
  },
  {
    id: "maharashtra", name: "Maharashtra", code: "MH", seed: "mh-gateway",
    description: "From Mumbai's Art Deco skyline to Deccan hill forts and cave temples.",
    districts: [
      { name: "Mumbai", seed: "mumbai1", info: "India's financial capital, home to the Gateway of India and Marine Drive.", gallery: ["mumbai-g1","mumbai-g2","mumbai-g3"] },
      { name: "Pune", seed: "pune1", info: "A cultural and educational hub ringed by Sahyadri hill forts.", gallery: ["pune-g1","pune-g2","pune-g3"] },
      { name: "Nashik", seed: "nashik1", info: "A wine-country city on the Godavari, sacred for the Kumbh Mela.", gallery: ["nashik-g1","nashik-g2","nashik-g3"] },
      { name: "Aurangabad", seed: "aurangabad1", info: "Gateway to the rock-cut cave temples of Ajanta and Ellora.", gallery: ["aurangabad-g1","aurangabad-g2","aurangabad-g3"] },
      { name: "Nagpur", seed: "nagpur1", info: "The Orange City, a green, lake-dotted crossroads of central India.", gallery: ["nagpur-g1","nagpur-g2","nagpur-g3"] }
    ]
  },
  {
    id: "wb", name: "West Bengal", code: "WB", seed: "wb-kolkata",
    description: "Colonial Kolkata, Darjeeling's tea slopes and the mangroves of the Sundarbans.",
    districts: [
      { name: "Kolkata", seed: "kolkata1", info: "A city of colonial architecture, trams, and the Victoria Memorial.", gallery: ["kolkata-g1","kolkata-g2","kolkata-g3"] },
      { name: "Darjeeling", seed: "darjeeling1", info: "Terraced tea gardens and views of the Kanchenjunga range.", gallery: ["darjeeling-g1","darjeeling-g2","darjeeling-g3"] },
      { name: "Siliguri", seed: "siliguri1", info: "A gateway city linking the plains to the eastern Himalayan hills.", gallery: ["siliguri-g1","siliguri-g2","siliguri-g3"] },
      { name: "Murshidabad", seed: "murshidabad1", info: "The former Bengal capital, dotted with nawabi palaces.", gallery: ["murshidabad-g1","murshidabad-g2","murshidabad-g3"] },
      { name: "Purba Medinipur (Digha)", seed: "digha1", info: "A popular sandy-beach getaway on the Bay of Bengal.", gallery: ["digha-g1","digha-g2","digha-g3"] }
    ]
  },
  {
    id: "karnataka", name: "Karnataka", code: "KA", seed: "ka-hampi",
    description: "Ruined empires, coffee-scented hills and India's tech capital, Bengaluru.",
    districts: [
      { name: "Bengaluru", seed: "bengaluru1", info: "India's Garden City and technology hub, with leafy boulevards.", gallery: ["bengaluru-g1","bengaluru-g2","bengaluru-g3"] },
      { name: "Mysuru", seed: "mysuru1", info: "Home to the illuminated Mysuru Palace and royal Dasara festival.", gallery: ["mysuru-g1","mysuru-g2","mysuru-g3"] },
      { name: "Ballari (Hampi)", seed: "hampi1", info: "A uNESCO boulder-strewn landscape of Vijayanagara empire ruins.", gallery: ["hampi-g1","hampi-g2","hampi-g3"] },
      { name: "Kodagu (Coorg)", seed: "coorg1", info: "Misty coffee estates in the Western Ghats, called Scotland of India.", gallery: ["coorg-g1","coorg-g2","coorg-g3"] },
      { name: "Mangaluru", seed: "mangaluru1", info: "A coastal city famed for seafood and Arabian Sea sunsets.", gallery: ["mangaluru-g1","mangaluru-g2","mangaluru-g3"] }
    ]
  },
  {
    id: "punjab", name: "Punjab", code: "PB", seed: "punjab-goldentemple",
    description: "Golden wheat fields, the Golden Temple and India's warmest hospitality.",
    districts: [
      { name: "Amritsar", seed: "amritsar1", info: "Home to the shimmering Golden Temple and the Wagah border ceremony.", gallery: ["amritsar-g1","amritsar-g2","amritsar-g3"] },
      { name: "Chandigarh", seed: "chandigarh1", info: "A planned modernist city with the Rock Garden and Sukhna Lake.", gallery: ["chandigarh-g1","chandigarh-g2","chandigarh-g3"] },
      { name: "Ludhiana", seed: "ludhiana1", info: "Punjab's industrial heart, known for hearty Punjabi cuisine.", gallery: ["ludhiana-g1","ludhiana-g2","ludhiana-g3"] },
      { name: "Patiala", seed: "patiala1", info: "A royal city famous for its fort-palace and traditional Patiala salwar.", gallery: ["patiala-g1","patiala-g2","patiala-g3"] },
      { name: "Jalandhar", seed: "jalandhar1", info: "An ancient trade town with sports-goods bazaars and old temples.", gallery: ["jalandhar-g1","jalandhar-g2","jalandhar-g3"] }
    ]
  }
];

const placesData = [
  { name: "Taj Mahal", state: "uttar Pradesh", seed: "place-tajmahal", budget: "₹3,000–6,000/day", highlights: "Mughal marble inlay, sunrise views, riverside gardens." },
  { name: "Jaipur City Palace", state: "Rajasthan", seed: "place-citypalace", budget: "₹2,500–5,000/day", highlights: "Royal courtyards, museum wings, mirrored Diwan-i-Khas." },
  { name: "Alleppey Backwaters", state: "Kerala", seed: "place-backwaters", budget: "₹4,000–8,000/day", highlights: "Houseboat stays, coconut lagoons, village canals." },
  { name: "Baga Beach", state: "Goa", seed: "place-bagabeach", budget: "₹2,000–4,500/day", highlights: "Beach shacks, water sports, sunset nightlife." },
  { name: "Varanasi Ghats", state: "uttar Pradesh", seed: "place-ghats", budget: "₹1,500–3,500/day", highlights: "Dawn boat rides, Ganga aarti, ancient lanes." },
  { name: "Solang Valley, Manali", state: "Himachal Pradesh", seed: "place-solang", budget: "₹2,500–5,500/day", highlights: "Snow peaks, paragliding, adventure sports." },
  { name: "Mysuru Palace", state: "Karnataka", seed: "place-mysurupalace", budget: "₹1,800–4,000/day", highlights: "Indo-Saracenic domes, evening illumination, Dasara pomp." },
  { name: "Hampi Ruins", state: "Karnataka", seed: "place-hampiruins", budget: "₹1,500–3,500/day", highlights: "Boulder landscapes, Virupaksha temple, ancient bazaars." },
  { name: "Darjeeling Tea Hills", state: "West Bengal", seed: "place-darjeelinghills", budget: "₹2,200–4,800/day", highlights: "Toy train, tea estates, Kanchenjunga sunrise." },
  { name: "Golden Temple", state: "Punjab", seed: "place-goldentemple", budget: "₹1,200–3,000/day", highlights: "Gilded sanctum, community langar, evening prayers." },
  { name: "Marine Drive, Mumbai", state: "Maharashtra", seed: "place-marinedrive", budget: "₹3,000–6,500/day", highlights: "Sea-facing promenade, Art Deco facades, street food." },
  { name: "Munnar Tea Hills", state: "Kerala", seed: "place-munnar", budget: "₹2,000–4,500/day", highlights: "Rolling tea estates, misty valleys, spice trails." },
  { name: "Lake Pichola, udaipur", state: "Rajasthan", seed: "place-lakepichola", budget: "₹3,500–7,000/day", highlights: "Lake palaces, heritage havelis, boat cruises." },
  { name: "Coorg Coffee Estates", state: "Karnataka", seed: "place-coorgestates", budget: "₹2,200–4,800/day", highlights: "Coffee plantations, waterfalls, misty ghats." },
  { name: "Thanjavur Big Temple", state: "Tamil Nadu", seed: "place-bigtemple", budget: "₹1,200–2,800/day", highlights: "Chola-era Dravidian architecture, carved gopuram." },
  { name: "Spiti Valley", state: "Himachal Pradesh", seed: "place-spitivalley", budget: "₹3,000–6,000/day", highlights: "High-altitude desert, cliffside monasteries." },
  { name: "Kanyakumari Point", state: "Tamil Nadu", seed: "place-kanyakumari", budget: "₹1,500–3,200/day", highlights: "Three-sea confluence, sunrise and sunset views." },
  { name: "Jaisalmer Desert", state: "Rajasthan", seed: "place-jaisalmerdesert", budget: "₹2,800–5,500/day", highlights: "Sand dunes, camel safaris, the Sonar Quila fort." }
];

const festivalsData = [
  { name: "Diwali", state: "Pan-India", seed: "fest-diwali", desc: "The festival of lights — oil lamps, fireworks and family feasts mark the return of light over darkness." },
  { name: "Pushkar Camel Fair", state: "Rajasthan", seed: "fest-pushkar", desc: "A desert fairground of camel trading, folk music and hot-air balloons beside a sacred lake." },
  { name: "Thrissur Pooram", state: "Kerala", seed: "fest-thrissur", desc: "A grand temple festival with caparisoned elephants and thunderous percussion ensembles." },
  { name: "Rath Yatra", state: "Odisha", seed: "fest-rathyatra", desc: "Enormous wooden chariots carrying temple deities are pulled through Puri's streets by thousands." },
  { name: "Durga Puja", state: "West Bengal", seed: "fest-durgapuja", desc: "Elaborate pandals and clay idols honour the goddess Durga across Kolkata's neighbourhoods." },
  { name: "Hemis Festival", state: "Ladakh", seed: "fest-hemis", desc: "Masked monks perform ritual Cham dances in a Himalayan monastery courtyard." },
  { name: "Bonalu", state: "Telangana", seed: "fest-bonalu", desc: "Women carry decorated pots of rice offerings in colourful processions honouring goddess Mahakali." },
  { name: "Onam", state: "Kerala", seed: "fest-onam", desc: "A harvest festival of flower carpets, boat races and grand banana-leaf feasts." },
  { name: "Kumbh Mela", state: "uttar Pradesh", seed: "fest-kumbhmela", desc: "The world's largest pilgrim gathering, where millions bathe at a sacred river confluence." },
  { name: "Hornbill Festival", state: "Nagaland", seed: "fest-hornbill", desc: "Naga tribes gather for traditional dance, music and craft in a week-long cultural showcase." }
];

/* ---------------------------------------------------------
   2. HEADER INTERACTIONS
--------------------------------------------------------- */
function toggleDropdown(id, btn){
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  // close all dropdowns first
  document.querySelectorAll('.dropdown, .menu-panel').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.header-actions [aria-expanded]').forEach(b => b.setAttribute('aria-expanded','false'));
  if(!isOpen){
    el.classList.add('open');
    btn.setAttribute('aria-expanded','true');
  }
}

const uiTranslations = {
  English: {
    heroEyebrow: 'Namaste & welcome', heroTitle: 'Ten thousand roads lead through <span>Bhārat</span>.<br>Choose yours.',
    heroText: "From desert forts to backwater lagoons, Himalayan monasteries to temple towns — Travel u helps you plan a journey across India's states, districts, festivals and flavours.",
    explore: 'Explore India →', search: 'Search Destinations', statesEyebrow: '8 featured states, one journey', statesTitle: 'Explore India, state by state',
    statesText: 'Tap a state to uncover its top districts — from imperial capitals to hidden hill towns.', placesEyebrow: 'Handpicked itinerary starters', placesTitle: 'Iconic places worth the journey',
    placesText: 'Budgets are estimated per person, per day — including stay, food and local travel.', festivalEyebrow: 'Colour, devotion, drums & feasts', festivalTitle: 'Food & Festivals of India',
    festivalText: "Temple chariots, harvest feasts and desert fairs — scroll through India's calendar of celebration.", contactEyebrow: 'Plan with us', contactTitle: 'Have a route in mind? Tell us about it.',
    contactText: 'Our local trip-planners reply within one business day with a tailored itinerary and budget.', fullName: 'Full name', email: 'Email address', message: 'Your message',
    send: 'Send message', destinations: 'Destinations', foodFestivals: 'Food & Festivals', footerIntro: "An independent travel-planning guide to India's states, districts, landmarks and festivals — built for curious travellers."
  },
  'हिन्दी': {
    heroEyebrow: 'नमस्ते और स्वागत है', heroTitle: 'भारत की अनगिनत राहें आपका इंतज़ार कर रही हैं।<br>अपनी राह चुनें।',
    heroText: 'रेगिस्तानी किलों से बैकवॉटर झीलों तक, हिमालयी मठों से मंदिर नगरों तक — Travel u भारत की यात्रा की योजना बनाने में आपकी मदद करता है।',
    explore: 'भारत देखें →', search: 'स्थल खोजें', statesEyebrow: '8 चुनिंदा राज्य, एक यात्रा', statesTitle: 'राज्य दर राज्य भारत देखें',
    statesText: 'राजधानी से छिपे पहाड़ी शहरों तक, राज्य के प्रमुख जिलों को जानें।', placesEyebrow: 'चुनिंदा यात्रा सुझाव', placesTitle: 'यात्रा के लायक प्रसिद्ध स्थान',
    placesText: 'बजट प्रति व्यक्ति, प्रति दिन ठहरने, भोजन और स्थानीय यात्रा सहित अनुमानित है।', festivalEyebrow: 'रंग, भक्ति, ढोल और दावतें', festivalTitle: 'भारत के भोजन और त्योहार',
    festivalText: 'मंदिर रथ, फसल उत्सव और रेगिस्तानी मेले — भारत के उत्सवों को देखें।', contactEyebrow: 'हमारे साथ योजना बनाएं', contactTitle: 'यात्रा की योजना है? हमें बताएं।',
    contactText: 'हमारे स्थानीय यात्रा विशेषज्ञ एक कार्यदिवस में आपकी यात्रा योजना और बजट के साथ जवाब देंगे।', fullName: 'पूरा नाम', email: 'ईमेल पता', message: 'आपका संदेश',
    send: 'संदेश भेजें', destinations: 'यात्रा स्थल', foodFestivals: 'भोजन और त्योहार', footerIntro: 'भारत के राज्यों, जिलों, स्थलों और त्योहारों की स्वतंत्र यात्रा योजना मार्गदर्शिका।'
  },
  'தமிழ்': {
    heroEyebrow: 'வணக்கம் மற்றும் வரவேற்பு', heroTitle: 'பாரதத்தின் ஆயிரக்கணக்கான பாதைகள் உங்களுக்காக.<br>உங்கள் பாதையைத் தேர்ந்தெடுக்கவும்.',
    heroText: 'பாலைவனக் கோட்டைகள் முதல் பின்னேரி நீர்வழிகள் வரை, இமயமலை மடங்கள் முதல் கோயில் நகரங்கள் வரை — உங்கள் இந்தியப் பயணத்தைத் திட்டமிட Travel u உதவுகிறது.',
    explore: 'இந்தியாவை ஆராயுங்கள் →', search: 'இடங்களைத் தேடுங்கள்', statesEyebrow: '8 தேர்ந்தெடுக்கப்பட்ட மாநிலங்கள், ஒரு பயணம்', statesTitle: 'மாநிலம் வாரியாக இந்தியாவை ஆராயுங்கள்',
    statesText: 'பேரரசு நகரங்கள் முதல் மறைந்த மலைக் கிராமங்கள் வரை மாநிலத்தின் முக்கிய மாவட்டங்களை அறியுங்கள்.', placesEyebrow: 'தேர்ந்தெடுக்கப்பட்ட பயணத் தொடக்கங்கள்', placesTitle: 'பயணம் செய்ய வேண்டிய சிறந்த இடங்கள்',
    placesText: 'தங்குமிடம், உணவு மற்றும் உள்ளூர் பயணம் உட்பட ஒருவருக்கான தினசரி மதிப்பீடு இது.', festivalEyebrow: 'வண்ணம், பக்தி, மேளம் மற்றும் விருந்து', festivalTitle: 'இந்திய உணவு மற்றும் திருவிழாக்கள்',
    festivalText: 'கோயில் தேர்கள், அறுவடை விழாக்கள் மற்றும் பாலைவனத் திருவிழாக்கள் — இந்தியாவின் கொண்டாட்டங்களைப் பாருங்கள்.', contactEyebrow: 'எங்களுடன் திட்டமிடுங்கள்', contactTitle: 'பயணத் திட்டம் உள்ளதா? எங்களிடம் சொல்லுங்கள்.',
    contactText: 'எங்கள் உள்ளூர் பயணத் திட்டமிடுபவர்கள் ஒரு வேலை நாளுக்குள் தனிப்பயன் திட்டம் மற்றும் பட்ஜெட்டுடன் பதிலளிப்பார்கள்.', fullName: 'முழுப் பெயர்', email: 'மின்னஞ்சல் முகவரி', message: 'உங்கள் செய்தி',
    send: 'செய்தியை அனுப்புங்கள்', destinations: 'பயண இடங்கள்', foodFestivals: 'உணவு மற்றும் திருவிழாக்கள்', footerIntro: 'இந்தியாவின் மாநிலங்கள், மாவட்டங்கள், முக்கிய இடங்கள் மற்றும் திருவிழாக்களுக்கான சுயாதீன பயண வழிகாட்டி.'
  }
};

function applyTranslations(language){
  const text = uiTranslations[language] || uiTranslations.English;
  const setText = (selector, value) => { const element = document.querySelector(selector); if(element) element.textContent = value; };
  const setHtml = (selector, value) => { const element = document.querySelector(selector); if(element) element.innerHTML = value; };
  setText('.hero-eyebrow', text.heroEyebrow); setHtml('.hero h1', text.heroTitle); setText('.hero p.lede', text.heroText);
  setText('.hero-actions .btn-primary', text.explore); setText('.hero-actions .btn-ghost', text.search);
  setText('#states .section-head .eyebrow', text.statesEyebrow); setText('#states h2', text.statesTitle); setText('#states .section-head p', text.statesText);
  setText('#places .section-head .eyebrow', text.placesEyebrow); setText('#places h2', text.placesTitle); setText('#places .section-head p', text.placesText);
  setText('#festivals .section-head .eyebrow', text.festivalEyebrow); setText('#festivals h2', text.festivalTitle); setText('#festivals .section-head p', text.festivalText);
  setText('#contact .eyebrow', text.contactEyebrow); setText('#contact h2', text.contactTitle); setText('#contact .contact-info > p', text.contactText);
  setText('label[for="cName"]', text.fullName); setText('label[for="cEmail"]', text.email); setText('label[for="cMsg"]', text.message); setText('#contactForm button[type="submit"]', text.send);
  const destinationLink = document.querySelector('.menu-panel a:first-child');
  const festivalLink = document.querySelector('.menu-panel a:nth-child(2)');
  if(destinationLink) destinationLink.firstChild.textContent = `🧭 ${text.destinations} `;
  if(festivalLink) festivalLink.firstChild.textContent = `🎉 ${text.foodFestivals} `;
  setText('.footer-intro', text.footerIntro);
  document.documentElement.lang = language === 'हिन्दी' ? 'hi' : language === 'தமிழ்' ? 'ta' : 'en';
}

function selectLanguage(language){
  document.querySelector('#langBtn .lbl').textContent = language;
  applyTranslations(language);
  document.getElementById('langMenu').classList.remove('open');
  document.getElementById('langBtn').setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (e) => {
  if(!e.target.closest('.lang-switch') && !e.target.closest('.menu-wrap')){
    document.querySelectorAll('.dropdown, .menu-panel').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.header-actions [aria-expanded]').forEach(b => b.setAttribute('aria-expanded','false'));
  }
});

function toggleA11y(cls, btn){
  const active = document.body.classList.toggle(cls);
  btn.setAttribute('aria-pressed', active ? 'true' : 'false');
}

window.addEventListener('scroll', () => {
  document.getElementById('siteHeader').classList.toggle('is-scrolled', window.scrollY > 12);
});

/* ---------------------------------------------------------
   3. VIEW ROuTER
--------------------------------------------------------- */
function showView(id){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'auto' });
}
function goHome(){ showView('view-home'); }
function goHomeAndScroll(sectionId){ showView('view-home'); setTimeout(() => scrollToId(sectionId), 50); }
function scrollToId(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({ behavior:'smooth' });
}
function showDestinations(){
  showView('view-destinations');
  document.getElementById('destSearchInput').focus();
  renderSearchResults();
}
function showStateDetail(stateId, districtIndex){
  const state = statesData.find(s => s.id === stateId);
  if(!state) return;
  document.getElementById('stateCrumb').textContent = state.name;
  document.getElementById('stateTitle').textContent = state.name;
  document.getElementById('stateDesc').textContent = state.description;
  renderDistrictButtons(state);
  renderDistrictInfo(state, districtIndex || 0);
  showView('view-state');
}

/* ---------------------------------------------------------
   4. RENDERERS
--------------------------------------------------------- */

/* -- States grid (home) -- */
function renderStatesGrid(){
  const grid = document.getElementById('statesGrid');
  grid.innerHTML = statesData.slice(0, 8).map(s => `
    <button class="card state-card" onclick="showStateDetail('${s.id}')" aria-label="View ${s.name}">
      <div class="thumb">
        <img src="${img(s.seed, 500, 380)}" alt="Scenic view representing ${s.name}" loading="lazy">
        <div class="stamp"><span class="code">${s.code}</span><span class="sub">India</span></div>
      </div>
      <div class="body">
        <h3>${s.name}</h3>
        <span class="meta">5 districts →</span>
      </div>
    </button>
  `).join('');
}

/* -- Tourist places grid (home) -- */
function renderPlacesGrid(){
  const grid = document.getElementById('placesGrid');
  grid.innerHTML = placesData.map(p => `
    <article class="card place-card">
      <div class="thumb">
        <img src="${img(p.seed, 500, 360)}" alt="${p.name}" loading="lazy">
        <div class="stamp"><span class="code">${p.state.slice(0,3).toupperCase()}</span><span class="sub">${p.state}</span></div>
      </div>
      <div class="body">
        <h3>${p.name}</h3>
        <span class="loc">📍 ${p.state}</span>
        <p class="highlights">${p.highlights}</p>
        <div class="budget"><span class="budget-amt">${p.budget}</span><span class="budget-label">per person</span></div>
      </div>
    </article>
  `).join('');
}

function renderFestivals(){
  const track = document.getElementById('festivalTrack');
  track.innerHTML = festivalsData.map(f => `
    <article class="festival-card">
      <div class="thumb">
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

function renderDistrictButtons(state){
  const container = document.getElementById('districtButtons');
  container.innerHTML = state.districts.map((district, index) => `
    <button type="button" onclick="renderDistrictInfo(statesData.find(s => s.id === '${state.id}'), ${index})">
      <span>${district.name}</span><span class="arrow">→</span>
    </button>
  `).join('');
}

function renderDistrictInfo(state, districtIndex){
  const district = state.districts[districtIndex] || state.districts[0];
  const container = document.getElementById('districtInfo');
  document.querySelectorAll('#districtButtons button').forEach((button, index) => {
    button.classList.toggle('active', index === districtIndex);
  });
  container.innerHTML = `
    <div class="d-hero">
      <img src="${img(district.seed, 900, 520)}" alt="Scenic view of ${district.name}" loading="lazy">
      <div class="stamp"><span class="code">${state.code}</span><span class="sub">${district.name}</span></div>
    </div>
    <h3>${district.name}</h3>
    <span class="d-tag">${state.name} district</span>
    <p class="desc">${district.info}</p>
    <div class="d-gallery">
      ${district.gallery.map((seed, index) => `<img src="${img(seed, 500, 360)}" alt="${district.name} travel view ${index + 1}" loading="lazy">`).join('')}
    </div>
  `;
}

function renderSearchResults(){
  const query = document.getElementById('destSearchInput').value.trim().toLowerCase();
  const results = document.getElementById('searchResults');
  const matches = statesData.filter(state => state.name.toLowerCase().includes(query));
  if(!matches.length){
    results.innerHTML = '<p class="no-results">No states found. Try another search.</p>';
    return;
  }
  results.innerHTML = matches.map(state => `
    <article class="search-result-card">
      <h3>${state.name}</h3>
      <p>${state.description}</p>
      <div class="chips">
        ${state.districts.map((district, index) => `<button class="chip" type="button" onclick="showStateDetail('${state.id}', ${index})">${district.name}</button>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ---------------------------------------------------------
   5. HERO SLIDESHOW AND CAROuSEL
--------------------------------------------------------- */
const heroSlides = [
  { seed: 'hero-rajasthan', title: 'Rajasthan' },
  { seed: 'hero-kerala', title: 'Kerala' },
  { seed: 'hero-himalaya', title: 'Himalayas' }
];
let activeHeroSlide = 0;

function renderHero(){
  document.getElementById('heroSlides').innerHTML = heroSlides.map((slide, index) => `
    <div class="hero-slide${index === 0 ? ' active' : ''}" style="background-image:url('${img(slide.seed, 1600, 900)}')" aria-label="${slide.title}"></div>
  `).join('');
  document.getElementById('heroDots').innerHTML = heroSlides.map((slide, index) => `
    <button type="button" class="${index === 0 ? 'active' : ''}" onclick="setHeroSlide(${index})" aria-label="Show ${slide.title}"></button>
  `).join('');
}

function setHeroSlide(index){
  activeHeroSlide = index;
  document.querySelectorAll('.hero-slide').forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === index));
  document.querySelectorAll('.hero-dots button').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
}

function scrollCarousel(direction){
  const track = document.getElementById('festivalTrack');
  track.scrollBy({ left: direction * 302, behavior: 'smooth' });
}

/* ---------------------------------------------------------
   6. CONTACT FORM AND STARTuP
--------------------------------------------------------- */
function handleContactSubmit(event){
  event.preventDefault();
  const message = document.getElementById('formMsg');
  message.textContent = 'Thank you. We will reply within one business day.';
  message.classList.add('show');
  event.target.reset();
  return false;
}

function initializeApp(){
  window.setInterval(() => setHeroSlide((activeHeroSlide + 1) % heroSlides.length), 6000);
}

initializeApp();
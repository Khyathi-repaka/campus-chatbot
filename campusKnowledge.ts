interface CampusResponse {
  text: string;
  quickReplies?: string[];
}

const campusKnowledgeBase: Record<string, Record<string, CampusResponse>> = {
  en: {
    library: {
      text: "📚 **Library Information**\n\n**Timings:** Monday to Saturday: 8:00 AM - 10:00 PM, Sunday: 10:00 AM - 6:00 PM\n\n**Facilities:**\n• Reading halls with 500+ seats\n• Digital library with e-books and journals\n• Group study rooms\n• Wi-Fi and computer lab\n• Printing and scanning services\n\n**Location:** Ground floor, Academic Block A",
      quickReplies: ["Book renewal", "Digital resources", "Group study booking"]
    },
    canteen: {
      text: "🍽️ **Canteen Information**\n\n**Today's Menu:**\n• Breakfast: Idli, Dosa, Upma (₹25-40)\n• Lunch: Rice, Dal, Sabji, Roti (₹55)\n• Snacks: Samosa, Tea, Coffee (₹10-25)\n• Dinner: Chapati, Dal, Vegetables (₹50)\n\n**Timings:**\n• Breakfast: 7:30 AM - 10:00 AM\n• Lunch: 12:00 PM - 3:00 PM\n• Dinner: 6:30 PM - 9:00 PM\n\n**Payment:** Cash and UPI accepted",
      quickReplies: ["Weekly menu", "Prices", "Special diet options"]
    },
    hostel: {
      text: "🏠 **Hostel Information**\n\n**Accommodation:**\n• Single and double occupancy rooms\n• Separate hostels for boys and girls\n• 24/7 security and warden supervision\n\n**Facilities:**\n• Wi-Fi connectivity\n• Common room with TV\n• Laundry service\n• Mess facility\n• Study rooms\n\n**Fees:**\n• Single room: ₹45,000/year\n• Double room: ₹35,000/year\n• Mess charges: ₹25,000/year",
      quickReplies: ["Room booking", "Mess menu", "Hostel rules"]
    },
    placement: {
      text: "💼 **Placement Updates**\n\n**Upcoming Drives:**\n• TCS - March 15, 2024 (Software Engineer)\n• Infosys - March 20, 2024 (System Engineer)\n• Wipro - March 25, 2024 (Developer)\n\n**Statistics 2023-24:**\n• Placement rate: 85%\n• Highest package: ₹12 LPA\n• Average package: ₹4.5 LPA\n\n**Eligibility:** 65% in academics, no active backlogs\n\n**Contact:** Placement Officer - Room 205, Admin Block",
      quickReplies: ["Registration process", "Interview preparation", "Company details"]
    },
    events: {
      text: "📅 **Upcoming Events**\n\n**This Week:**\n• March 12: Tech Talk on AI in Healthcare (2:00 PM, Auditorium)\n• March 14: Cultural Fest Registration (10:00 AM, Student Center)\n• March 16: Sports Meet (6:00 AM, Sports Complex)\n\n**Next Week:**\n• March 18: Workshop on Data Science\n• March 20: Inter-college Debate Competition\n• March 22: Career Counseling Session\n\n**Register:** Student portal or contact respective coordinators",
      quickReplies: ["Register for events", "Event details", "Past events"]
    },
    attendance: {
      text: "📊 **Attendance Information**\n\n**Current Status:** Based on your student ID, please check the student portal for real-time attendance.\n\n**Requirements:**\n• Minimum 75% attendance required\n• Medical leaves accepted with proper documentation\n• Late entries after 10 minutes not counted\n\n**Check Attendance:**\n• Student portal: portal.college.edu\n• Mobile app: Campus Connect\n• Department office during working hours\n\n**Attendance shortage?** Contact your class coordinator immediately.",
      quickReplies: ["Portal login", "Medical leave", "Shortage application"]
    },
    fees: {
      text: "💰 **Fees & Scholarships**\n\n**Annual Fees:**\n• Tuition: ₹85,000\n• Development: ₹15,000\n• Lab fees: ₹10,000\n• Library: ₹2,000\n• Total: ₹1,12,000\n\n**Available Scholarships:**\n• Merit scholarship: Up to 50% fee waiver\n• Need-based scholarship: Up to ₹25,000\n• Sports scholarship: Full tuition waiver\n• Government schemes: Various state scholarships\n\n**Payment:** Online portal, DD, or bank transfer\n**Deadline:** Before semester start",
      quickReplies: ["Scholarship application", "Fee payment", "Installment options"]
    },
    map: {
      text: "🗺️ **Campus Map & Directions**\n\n**Main Buildings:**\n• Academic Block A & B (Classrooms, Labs)\n• Library (Ground floor, Block A)\n• Administrative Block (Admissions, Accounts)\n• Canteen (Near Sports Complex)\n• Hostels (Separate wings for boys/girls)\n• Auditorium (Central location)\n\n**Transport:**\n• College bus service available\n• Auto/taxi stand at main gate\n• Bike parking near each block\n\n**Emergency contacts:** Security - 1234, Medical - 5678",
      quickReplies: ["Bus timings", "Parking info", "Emergency contacts"]
    }
  },
  hi: {
    library: {
      text: "📚 **पुस्तकालय की जानकारी**\n\n**समय:** सोमवार से शनिवार: सुबह 8:00 - रात 10:00, रविवार: सुबह 10:00 - शाम 6:00\n\n**सुविधाएं:**\n• 500+ सीटों के साथ रीडिंग हॉल\n• ई-बुक्स और जर्नल्स के साथ डिजिटल लाइब्रेरी\n• ग्रुप स्टडी रूम\n• वाई-फाई और कंप्यूटर लैब\n• प्रिंटिंग और स्कैनिंग सेवाएं\n\n**स्थान:** भूतल, एकेडमिक ब्लॉक ए",
      quickReplies: ["किताब नवीनीकरण", "डिजिटल संसाधन", "ग्रुप स्टडी बुकिंग"]
    },
    canteen: {
      text: "🍽️ **कैंटीन की जानकारी**\n\n**आज का मेन्यू:**\n• नाश्ता: इडली, डोसा, उपमा (₹25-40)\n• दोपहर का खाना: चावल, दाल, सब्जी, रोटी (₹55)\n• स्नैक्स: समोसा, चाय, कॉफी (₹10-25)\n• रात का खाना: चपाती, दाल, सब्जी (₹50)\n\n**समय:**\n• नाश्ता: सुबह 7:30 - 10:00\n• दोपहर का खाना: 12:00 - दोपहर 3:00\n• रात का खाना: शाम 6:30 - रात 9:00\n\n**भुगतान:** नकद और UPI स्वीकार",
      quickReplies: ["साप्ताहिक मेन्यू", "कीमतें", "विशेष आहार विकल्प"]
    },
    hostel: {
      text: "🏠 **हॉस्टल की जानकारी**\n\n**आवास:**\n• सिंगल और डबल ऑक्यूपेंसी रूम\n• लड़कों और लड़कियों के लिए अलग हॉस्टल\n• 24/7 सुरक्षा और वार्डन की निगरानी\n\n**सुविधाएं:**\n• वाई-फाई कनेक्टिविटी\n• टीवी के साथ कॉमन रूम\n• लॉन्ड्री सेवा\n• मेस सुविधा\n• स्टडी रूम\n\n**फीस:**\n• सिंगल रूम: ₹45,000/वर्ष\n• डबल रूम: ₹35,000/वर्ष\n• मेस चार्ज: ₹25,000/वर्ष",
      quickReplies: ["रूम बुकिंग", "मेस मेन्यू", "हॉस्टल नियम"]
    },
    placement: {
      text: "💼 **प्लेसमेंट अपडेट्स**\n\n**आगामी ड्राइव:**\n• TCS - 15 मार्च, 2024 (सॉफ्टवेयर इंजीनियर)\n• Infosys - 20 मार्च, 2024 (सिस्टम इंजीनियर)\n• Wipro - 25 मार्च, 2024 (डेवलपर)\n\n**आंकड़े 2023-24:**\n• प्लेसमेंट दर: 85%\n• सबसे ऊंचा पैकेज: ₹12 LPA\n• औसत पैकेज: ₹4.5 LPA\n\n**पात्रता:** शिक्षाविदों में 65%, कोई सक्रिय बैकलॉग नहीं\n\n**संपर्क:** प्लेसमेंट ऑफिसर - कमरा 205, एडमिन ब्लॉक",
      quickReplies: ["पंजीकरण प्रक्रिया", "इंटरव्यू तैयारी", "कंपनी विवरण"]
    },
    events: {
      text: "📅 **आगामी कार्यक्रम**\n\n**इस सप्ताह:**\n• 12 मार्च: हेल्थकेयर में AI पर टेक टॉक (दोपहर 2:00, ऑडिटोरियम)\n• 14 मार्च: सांस्कृतिक महोत्सव पंजीकरण (सुबह 10:00, छात्र केंद्र)\n• 16 मार्च: खेल मीट (सुबह 6:00, खेल कॉम्प्लेक्स)\n\n**अगले सप्ताह:**\n• 18 मार्च: डेटा साइंस पर वर्कशॉप\n• 20 मार्च: इंटर-कॉलेज बहस प्रतियोगिता\n• 22 मार्च: करियर काउंसलिंग सेशन\n\n**पंजीकरण:** छात्र पोर्टल या संबंधित समन्वयकों से संपर्क करें",
      quickReplies: ["इवेंट्स के लिए रजिस्टर करें", "इवेंट विवरण", "पिछले इवेंट्स"]
    },
    attendance: {
      text: "📊 **उपस्थिति की जानकारी**\n\n**वर्तमान स्थिति:** आपके छात्र आईडी के आधार पर, कृपया रियल-टाइम उपस्थिति के लिए छात्र पोर्टल देखें।\n\n**आवश्यकताएं:**\n• न्यूनतम 75% उपस्थिति आवश्यक\n• उचित दस्तावेजीकरण के साथ चिकित्सा अवकाश स्वीकार\n• 10 मिनट बाद लेट एंट्री की गिनती नहीं\n\n**उपस्थिति जांचें:**\n• छात्र पोर्टल: portal.college.edu\n• मोबाइल ऐप: कैंपस कनेक्ट\n• कार्यकाल के दौरान विभाग कार्यालय\n\n**उपस्थिति की कमी?** तुरंत अपने क्लास कोऑर्डिनेटर से संपर्क करें।",
      quickReplies: ["पोर्टल लॉगिन", "मेडिकल लीव", "शॉर्टेज एप्लीकेशन"]
    },
    fees: {
      text: "💰 **फीस और छात्रवृत्ति**\n\n**वार्षिक फीस:**\n• ट्यूशन: ₹85,000\n• डेवलपमेंट: ₹15,000\n• लैब फीस: ₹10,000\n• लाइब्रेरी: ₹2,000\n• कुल: ₹1,12,000\n\n**उपलब्ध छात्रवृत्ति:**\n• मेरिट छात्रवृत्ति: 50% तक फीस छूट\n• आवश्यकता आधारित छात्रवृत्ति: ₹25,000 तक\n• खेल छात्रवृत्ति: पूर्ण ट्यूशन छूट\n• सरकारी योजनाएं: विभिन्न राज्य छात्रवृत्ति\n\n**भुगतान:** ऑनलाइन पोर्टल, DD, या बैंक ट्रांसफर\n**अंतिम तिथि:** सेमेस्टर शुरू होने से पहले",
      quickReplies: ["छात्रवृत्ति आवेदन", "फीस भुगतान", "किस्त विकल्प"]
    },
    map: {
      text: "🗺️ **कैंपस मैप और दिशा-निर्देश**\n\n**मुख्य भवन:**\n• एकेडमिक ब्लॉक ए और बी (क्लासरूम, लैब)\n• लाइब्रेरी (भूतल, ब्लॉक ए)\n• प्रशासनिक ब्लॉक (प्रवेश, खाते)\n• कैंटीन (स्पोर्ट्स कॉम्प्लेक्स के पास)\n• हॉस्टल (लड़कों/लड़कियों के लिए अलग विंग)\n• ऑडिटोरियम (केंद्रीय स्थान)\n\n**परिवहन:**\n• कॉलेज बस सेवा उपलब्ध\n• मुख्य गेट पर ऑटो/टैक्सी स्टैंड\n• प्रत्येक ब्लॉक के पास बाइक पार्किंग\n\n**आपातकालीन संपर्क:** सुरक्षा - 1234, चिकित्सा - 5678",
      quickReplies: ["बस समय", "पार्किंग जानकारी", "आपातकालीन संपर्क"]
    }
  },
  te: {
    library: {
      text: "📚 **లైబ్రరీ సమాచారం**\n\n**సమయాలు:** సోమవారం నుండి శనివారం వరకు: ఉదయం 8:00 - రాత్రి 10:00, ఆదివారం: ఉదయం 10:00 - సాయంత్రం 6:00\n\n**సౌకర్యాలు:**\n• 500+ సీట్లతో రీడింగ్ హాల్స్\n• ఈ-బుక్స్ మరియు జర్నల్స్ తో డిజిటల్ లైబ్రరీ\n• గ్రూప్ స్టడీ రూమ్స్\n• వై-ఫై మరియు కంప్యూటర్ ల్యాబ్\n• ప్రింటింగ్ మరియు స్కానింగ్ సేవలు\n\n**స్థానం:** గ్రౌండ్ ఫ్లోర్, అకాడమిక్ బ్లాక్ A",
      quickReplies: ["పుస్తక పునరుద్ధరణ", "డిజిటల్ వనరులు", "గ్రూప్ స్టడీ బుకింగ్"]
    },
    canteen: {
      text: "🍽️ **క్యాంటీన్ సమాచారం**\n\n**నేటి మెనూ:**\n• అల్పాహారం: ఇడ్లీ, దోస, ఉప్మా (₹25-40)\n• మధ్యాహ్న భోజనం: అన్నం, దాల్, కూర, రోటీ (₹55)\n• స్నాక్స్: సమోసా, టీ, కాఫీ (₹10-25)\n• రాత్రి భోజనం: చపాతి, దాల్, కూరలు (₹50)\n\n**సమయాలు:**\n• అల్పాహారం: ఉదయం 7:30 - 10:00\n• మధ్యాహ్న భోజనం: మధ్యాహ్నం 12:00 - 3:00\n• రాత్రి భోజనం: సాయంత్రం 6:30 - రాత్రి 9:00\n\n**చెల్లింపు:** నగదు మరియు UPI ఆమోదించబడింది",
      quickReplies: ["వారపు మెనూ", "ధరలు", "ప్రత్యేక ఆహార ఎంపికలు"]
    },
    hostel: {
      text: "🏠 **హాస్టల్ సమాచారం**\n\n**వసతి:**\n• సింగిల్ మరియు డబుల్ ఆక్యుపెన్సీ రూమ్స్\n• అబ్బాయిలు మరియు అమ్మాయిలకు వేరు హాస్టల్స్\n• 24/7 సెక్యూరిటీ మరియు వార్డెన్ పర్యవేక్షణ\n\n**సౌకర్యాలు:**\n• వై-ఫై కనెక్టివిటీ\n• టీవీతో కామన్ రూమ్\n• లాండ్రీ సేవ\n• మెస్ సౌకర్యం\n• అధ్యయన గదులు\n\n**ఫీజులు:**\n• సింగిల్ రూమ్: ₹45,000/సంవత్సరం\n• డబుల్ రూమ్: ₹35,000/సంవత్సరం\n• మెస్ ఛార్జీలు: ₹25,000/సంవత్సరం",
      quickReplies: ["రూమ్ బుకింగ్", "మెస్ మెనూ", "హాస్టల్ నిబంధనలు"]
    },
    placement: {
      text: "💼 **ప్లేస్‌మెంట్ అప్‌డేట్స్**\n\n**రాబోయే డ్రైవ్స్:**\n• TCS - మార్చి 15, 2024 (సాఫ్ట్‌వేర్ ఇంజనీర్)\n• Infosys - మార్చి 20, 2024 (సిస్టమ్ ఇంజనీర్)\n• Wipro - మార్చి 25, 2024 (డెవలపర్)\n\n**గణాంకాలు 2023-24:**\n• ప్లేస్‌మెంట్ రేట్: 85%\n• అత్యధిక ప్యాకేజీ: ₹12 LPA\n• సగటు ప్యాకేజీ: ₹4.5 LPA\n\n**అర్హత:** విద్యాశాఖలో 65%, చురుకుగా బ్యాక్‌లాగ్‌లు లేకుండా\n\n**సంప్రదింపులు:** ప్లేస్‌మెంట్ అధికారి - గది 205, అడ్మిన్ బ్లాక్",
      quickReplies: ["నమోదు ప్రక్రియ", "ఇంటర్వ్యూ తయారీ", "కంపెనీ వివరాలు"]
    },
    events: {
      text: "📅 **రాబోయే కార్యక్రమాలు**\n\n**ఈ వారం:**\n• మార్చి 12: ఆరోగ్య సంరక్షణలో AI పై టెక్ టాక్ (మధ్యాహ్నం 2:00, ఆడిటోరియం)\n• మార్చి 14: సాంస్కృతిక పండుగ నమోదు (ఉదయం 10:00, విద్యార్థి కేంద్రం)\n• మార్చి 16: క్రీడా సమావేశం (ఉదయం 6:00, క్రీడా కాంప్లెక్స్)\n\n**వచ్చే వారం:**\n• మార్చి 18: డేటా సైన్స్ వర్క్‌షాప్\n• మార్చి 20: ఇంటర్-కాలేజీ చర్చా పోటీ\n• మార్చి 22: కెరీర్ కౌన్సిలింగ్ సెషన్\n\n**నమోదు:** విద్యార్థి పోర్టల్ లేదా సంబంధిత సమన్వయకర్తలను సంప్రదించండి",
      quickReplies: ["ఈవెంట్‌లకు నమోదు చేసుకోండి", "ఈవెంట్ వివరాలు", "గత ఈవెంట్‌లు"]
    },
    attendance: {
      text: "📊 **హాజరు సమాచారం**\n\n**ప్రస్తుత స్థితి:** మీ విద్యార్థి ID ఆధారంగా, రియల్-టైమ్ హాజరు కోసం విద్యార్థి పోర్టల్‌ను దయచేసి చూడండి.\n\n**అవసరాలు:**\n• కనీసం 75% హాజరు అవసరం\n• సరైన డాక్యుమెంటేషన్‌తో వైద్య సెలవులు ఆమోదం\n• 10 నిమిషాల తర్వాత ఆలస్య ప్రవేశాలు లెక్కించబడవు\n\n**హాజరు తనిఖీ చేయండి:**\n• విద్యార్థి పోర్టల్: portal.college.edu\n• మొబైల్ యాప్: కాంపస్ కనెక్ట్\n• పని గంటలలో విభాగ కార్యాలయం\n\n**హాజరు లోపం?** వెంటనే మీ క్లాస్ కోఆర్డినేటర్‌ను సంప్రదించండి.",
      quickReplies: ["పోర్టల్ లాగిన్", "వైద్య సెలవు", "లోపం దరఖాస్తు"]
    },
    fees: {
      text: "💰 **ఫీజులు & స్కాలర్‌షిప్‌లు**\n\n**వార్షిక ఫీజులు:**\n• ట్యూషన్: ₹85,000\n• అభివృద్ధి: ₹15,000\n• ల్యాబ్ ఫీజులు: ₹10,000\n• లైబ్రరీ: ₹2,000\n• మొత్తం: ₹1,12,000\n\n**అందుబాటులో ఉన్న స్కాలర్‌షిప్‌లు:**\n• మెరిట్ స్కాలర్‌షిప్: 50% వరకు ఫీజు మినహాయింపు\n• అవసరం ఆధారిత స్కాలర్‌షిప్: ₹25,000 వరకు\n• క్రీడల స్కాలర్‌షిప్: పూర్తి ట్యూషన్ మినహాయింపు\n• ప్రభుత్వ పథకాలు: వివిధ రాష్ట్ర స్కాలర్‌షిప్‌లు\n\n**చెల్లింపు:** ఆన్‌లైన్ పోర్టల్, DD, లేదా బ్యాంక్ బదిలీ\n**చివరి తేదీ:** సెమిస్టర్ ప్రారంభానికి ముందు",
      quickReplies: ["స్కాలర్‌షిప్ దరఖాస్తు", "ఫీజు చెల్లింపు", "వాయిదా ఎంపికలు"]
    },
    map: {
      text: "🗺️ **క్యాంపస్ మ్యాప్ & దిశలు**\n\n**ప్రధాన భవనాలు:**\n• అకాడమిక్ బ్లాక్ A & B (క్లాస్‌రూమ్‌లు, ల్యాబ్‌లు)\n• లైబ్రరీ (గ్రౌండ్ ఫ్లోర్, బ్లాక్ A)\n• అడ్మినిస్ట్రేటివ్ బ్లాక్ (అడ్మిషన్‌లు, ఖాతాలు)\n• క్యాంటీన్ (స్పోర్ట్స్ కాంప్లెక్స్ దగ్గర)\n• హాస్టల్స్ (అబ్బాయిలు/అమ్మాయిలకు వేరు వింగ్‌లు)\n• ఆడిటోరియం (కేంద్ర స్థానం)\n\n**రవాణా:**\n• కాలేజీ బస్ సేవ అందుబాటులో\n• ప్రధాన గేటు వద్ద ఆటో/టాక్సీ స్టాండ్\n• ప్రతి బ్లాక్ దగ్గర బైక్ పార్కింగ్\n\n**అత్యవసర సంప్రదింపులు:** భద్రత - 1234, వైద్య - 5678",
      quickReplies: ["బస్ సమయాలు", "పార్కింగ్ సమాచారం", "అత్యవసర సంప్రదింపులు"]
    }
  }
};

export function getCampusResponse(query: string, language: string): CampusResponse {
  const lowerQuery = query.toLowerCase();
  const responses = campusKnowledgeBase[language] || campusKnowledgeBase.en;
  
  // Simple keyword matching
  if (lowerQuery.includes('library') || lowerQuery.includes('पुस्तकालय') || lowerQuery.includes('లైబ్రరీ')) {
    return responses.library;
  } else if (lowerQuery.includes('canteen') || lowerQuery.includes('food') || lowerQuery.includes('कैंटीन') || lowerQuery.includes('క్యాంటీన్')) {
    return responses.canteen;
  } else if (lowerQuery.includes('hostel') || lowerQuery.includes('हॉस्टल') || lowerQuery.includes('హాస్టల్')) {
    return responses.hostel;
  } else if (lowerQuery.includes('placement') || lowerQuery.includes('job') || lowerQuery.includes('प्लेसमेंट') || lowerQuery.includes('ప్లేస్‌మెంట్')) {
    return responses.placement;
  } else if (lowerQuery.includes('event') || lowerQuery.includes('कार्यक्रम') || lowerQuery.includes('కార్యక్రమ')) {
    return responses.events;
  } else if (lowerQuery.includes('attendance') || lowerQuery.includes('उपस्थिति') || lowerQuery.includes('హాజరు')) {
    return responses.attendance;
  } else if (lowerQuery.includes('fees') || lowerQuery.includes('scholarship') || lowerQuery.includes('फीस') || lowerQuery.includes('ఫీజు')) {
    return responses.fees;
  } else if (lowerQuery.includes('map') || lowerQuery.includes('direction') || lowerQuery.includes('मैप') || lowerQuery.includes('మ్యాప్')) {
    return responses.map;
  } else {
    // Default response
    const defaultResponses = {
      en: "I can help you with information about library timings, canteen menu, hostel facilities, placement updates, campus events, attendance, fees & scholarships, and campus map. What would you like to know?",
      hi: "मैं आपको पुस्तकालय के समय, कैंटीन मेन्यू, हॉस्टल सुविधाओं, प्लेसमेंट अपडेट, कैंपस इवेंट्स, उपस्थिति, फीस और छात्रवृत्ति, और कैंपस मैप के बारे में जानकारी देने में मदद कर सकता हूं। आप क्या जानना चाहेंगे?",
      te: "లైబ్రరీ సమయాలు, క్యాంటీన్ మెనూ, హాస్టల్ సౌకర్యాలు, ప్లేస్‌మెంట్ అప్‌డేట్స్, క్యాంపస్ ఈవెంట్‌లు, హాజరు, ఫీజులు & స్కాలర్‌షిప్‌లు, మరియు క్యాంపస్ మ్యాప్ గురించి సమాచారంతో నేను మీకు సహాయం చేయగలను. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?"
    };
    
    return {
      text: defaultResponses[language] || defaultResponses.en,
      quickReplies: ["Library", "Canteen", "Hostel", "Placement"]
    };
  }
}
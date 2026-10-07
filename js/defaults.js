/* ================= SVG ICONS ================= */
var ICONS = {
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.5"/></svg>',
  camera: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 7l1.5-2.5h5L16 7"/></svg>',
  award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path d="M12 6v14"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5c2.8.5 5 2.8 5 5.5"/></svg>',
  film: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path d="M15 4h-2.5A3.5 3.5 0 0 0 9 7.5V10H6.5v3.5H9V20h3.5v-6.5h2.5l.5-3.5h-3V7.8c0-.7.4-1.3 1.2-1.3H15z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.5 2.5 2.2 4.3 5 4.5"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="0.8"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.8v4.4L14.5 12z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24"><path d="M21 4L3 11.2l6.5 2.3L12 20l3.5-5.5L20 17z"/><path d="M21 4L9.5 13.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.7 4.2 9S14.8 18.4 12 21c-2.8-2.6-4.2-5.7-4.2-9S9.2 5.6 12 3z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24"><path d="M4 11v3l4 .5V10.5z"/><path d="M8 10.5L19 5v13.5L8 14.5"/><path d="M19 9a2.5 2.5 0 0 1 0 5"/></svg>'
};

/* ================= DEFAULT CONTENT ================= */
var DEFAULT_STR = {
en: {
  nav_admin: "Admin",
  tab_about: "About", tab_work: "What we do", tab_platforms: "Platforms", tab_team: "Team", tab_memberid: "Member ID", tab_join: "Join",
  hero_title: "The story of NMA, told by its students.",
  hero_sub: "We are the NMA College Media Club: a student-run team shooting, editing, and publishing photo and video stories from campus life.",
  about_kicker: "ABOUT THE CLUB", about_title: "A student newsroom for campus life.",
  about_sub: "The Media Club is NMA College's student-run media team, founded in 2026. We document events, tell student and graduate stories, and keep the college's social channels alive with real, student-made content. Everything we publish is made by members, for the NMA community.",
  vision_t: "Our vision", vision_d: "To make NMA College the most visible, best-documented student community among Myanmar's private colleges.",
  mission_t: "Our mission", mission_d: "To capture NMA student life in photo, video, and words made by students themselves, and to give members real media skills they can use after graduation.",
  why_t: "Why a media club", rhythm_t: "How a normal week runs",
  work_kicker: "WHAT WE DO", work_title: "What we publish.",
  work_sub: "Everything we make falls under content pillars, published in English and Myanmar, with Myanmar subtitles on every video.",
  plat_kicker: "WHERE WE PUBLISH", plat_title: "Find us where you already are.",
  plat_sub: "A steady publishing rhythm, every week. Channel links go live as each account launches.",
  team_kicker: "HOW WE RUN", team_title: "Student-led, advisor-guided.",
  team_sub: "A faculty advisor sets content policy and approves sensitive posts. Students run everything else. The executive team is elected every academic year.",
  team_note_t: "Members", team_note_d: "Any NMA student can join, any program, any year. New members complete a two-week onboarding in phone shooting, CapCut editing, and the club brand guide, then pick a team: video, design, or writing and social. Target size for year one: 15 to 25 active members.",
  id_kicker: "MEMBER ID", id_title: "Every member gets a card.",
  id_d: "The official Media Club ID: club logo on the signature orange, a photo placeholder, and the member's details, finished with a film-strip footer. Printed each semester for all active members. Move your cursor over the card to see it in 3D.",
  id_f1: "Member's full name", id_f2: "Role in the club", id_f3: "Study program", id_f4: "Academic year",
  join_kicker: "JOIN US", join_title: "No experience needed. We teach everything.",
  join_sub: "Selection is based on enthusiasm and creativity, not on who already owns gear. Here is how joining works, and the form to start.",
  form_t: "Club registration", form_d: "Fill this in and the club team will get back to you.",
  f_name: "Full name", f_program: "Program", f_year: "Year", f_interest: "Interested team",
  f_phone: "Phone (optional)", f_email: "Email (optional)", f_sample: "Sample of your work (link, optional)",
  f_why: "Why do you want to join? (optional)", f_submit: "Submit registration",
  opt_video: "Video", opt_design: "Design", opt_writing: "Writing and social",
  err_required: "Please fill in your name, program, year, and interested team.",
  ok_t: "Registration received.", ok_d: "Thanks for signing up. The club team will contact you about the next onboarding.",
  contact_t: "Questions first?", contact_d: "Reach out any time. We reply fast.", contact_email: "Email us",
  foot_tag: "The story of NMA, told by its students."
},
my: {
  nav_admin: "Admin",
  tab_about: "အကြောင်း", tab_work: "လုပ်ငန်းများ", tab_platforms: "ပလက်ဖောင်းများ", tab_team: "အဖွဲ့", tab_memberid: "အဖွဲ့ဝင်ကတ်", tab_join: "ပါဝင်ရန်",
  hero_title: "NMA ၏ဇာတ်လမ်းကို ကျောင်းသားများကိုယ်တိုင်ပြောပြမည်။",
  hero_sub: "ကျွန်ုပ်တို့သည် NMA College မီဒီယာကလပ်ဖြစ်သည်: ကျောင်းသားဘဝမှ ဓာတ်ပုံနှင့် ဗီဒီယိုဇာတ်လမ်းများကို ရိုက်ကူး၊ တည်းဖြတ်၊ ထုတ်ဝေသော ကျောင်းသားအဖွဲ့။",
  about_kicker: "ကလပ်အကြောင်း", about_title: "ကျောင်းသားဘဝအတွက် ကျောင်းသားသတင်းအဖွဲ့။",
  about_sub: "မီဒီယာကလပ်သည် ၂၀၂၆ ခုနှစ်တွင် စတင်တည်ထောင်သော NMA College ၏ ကျောင်းသားဦးဆောင်မီဒီယာအဖွဲ့ဖြစ်သည်။ ပွဲများကို မှတ်တမ်းတင်သည်၊ ကျောင်းသားနှင့် ဘွဲ့ရများ၏ဇာတ်လမ်းများကို ပြောပြသည်၊ ကောလိပ်၏ဆိုရှယ်စာမျက်နှာများကို ကျောင်းသားလက်ရာအစစ်များဖြင့် ရှင်သန်စေသည်။ ထုတ်ဝေသမျှတိုင်းကို အဖွဲ့ဝင်များက NMA အသိုင်းအဝိုင်းအတွက် ဖန်တီးသည်။",
  vision_t: "မျှော်မှန်းချက်", vision_d: "NMA College ကို မြန်မာနိုင်ငံ၏ပုဂ္ဂလိကကောလိပ်များအနက် အထင်ရှားဆုံး၊ အကောင်းဆုံးမှတ်တမ်းတင်ထားသော ကျောင်းသားအသိုင်းအဝိုင်းဖြစ်စေရန်။",
  mission_t: "ရည်မှန်းချက်", mission_d: "NMA ကျောင်းသားဘဝကို ကျောင်းသားများကိုယ်တိုင်ထုတ်လုပ်သော ဓာတ်ပုံ၊ ဗီဒီယိုနှင့် စာသားများဖြင့် မှတ်တမ်းတင်ဖော်ပြရန်၊ အဖွဲ့ဝင်များအား ဘွဲ့ရပြီးနောက် အသုံးချနိုင်မည့် လက်တွေ့မီဒီယာကျွမ်းကျင်မှုများ ပေးအပ်ရန်။",
  why_t: "မီဒီယာကလပ် အဘယ်ကြောင့်လိုအပ်သနည်း", rhythm_t: "ပုံမှန်တစ်ပတ် လည်ပတ်ပုံ",
  work_kicker: "လုပ်ငန်းများ", work_title: "ထုတ်ဝေမည့်အကြောင်းအရာများ။",
  work_sub: "ထုတ်လုပ်သမျှတိုင်းသည် အကြောင်းအရာတိုင်များအောက်တွင် ရှိပြီး အင်္ဂလိပ်နှင့် မြန်မာနှစ်ဘာသာဖြင့် ထုတ်ဝေကာ ဗီဒီယိုတိုင်းတွင် မြန်မာစာတန်းများ ပါဝင်သည်။",
  plat_kicker: "ထုတ်ဝေမည့်နေရာများ", plat_title: "သင်ရောက်ရှိနေသောနေရာတွင် တွေ့ဆုံမည်။",
  plat_sub: "အပတ်တိုင်း ပုံမှန်ထုတ်ဝေမှုစည်းချက်။ အကောင့်တစ်ခုချင်း စတင်သည်နှင့်အမျှ လင့်ခ်များ ထည့်သွင်းပေးမည်။",
  team_kicker: "လည်ပတ်ပုံ", team_title: "ကျောင်းသားဦးဆောင်၊ ဆရာလမ်းညွှန်။",
  team_sub: "ဆရာဝန်ကြီးက အကြောင်းအရာမူဝါဒချမှတ်ပြီး ထိခိုက်လွယ်သောပို့စ်များကို အတည်ပြုသည်။ ကျန်အားလုံးကို ကျောင်းသားများက ဦးဆောင်သည်။ အမှုဆောင်အဖွဲ့ကို ပညာသင်နှစ်တိုင်း ရွေးကောက်တင်မြှောက်သည်။",
  team_note_t: "အဖွဲ့ဝင်များ", team_note_d: "NMA ကျောင်းသားတိုင်း ပါဝင်နိုင်သည်၊ ပရိုဂရမ်မရွေး၊ အတန်းမရွေး။ အဖွဲ့ဝင်အသစ်များသည် ဖုန်းဖြင့်ရိုက်ကူးခြင်း၊ CapCut တည်းဖြတ်ခြင်း၊ ကလပ်အမှတ်တံဆိပ်လမ်းညွှန်ဆိုင်ရာ နှစ်ပတ်ကြာအစပျိုးသင်တန်း တက်ရောက်ပြီးနောက် အဖွဲ့ရွေးချယ်သည်: ဗီဒီယို၊ ဒီဇိုင်း သို့မဟုတ် စာရေးသားခြင်းနှင့် ဆိုရှယ်။ ပထမနှစ်ပစ်မှတ်အရွယ်အစား: တက်ကြွသောအဖွဲ့ဝင် ၁၅ ဦးမှ ၂၅ ဦး။",
  id_kicker: "အဖွဲ့ဝင်ကတ်", id_title: "အဖွဲ့ဝင်တိုင်းကတ်တစ်ခု ရရှိမည်။",
  id_d: "တရားဝင်မီဒီယာကလပ်ကတ်: ကလပ်၏လိမ္မော်ရောင်ပေါ်တွင် ကလပ်လိုဂို၊ ဓာတ်ပုံအကွက်၊ အဖွဲ့ဝင်၏အချက်အလက်များ၊ အောက်ခြေတွင် ဖလင်အစင်းပုံ။ တက်ကြွသောအဖွဲ့ဝင်တိုင်းအတွက် နှစ်ဝက်တိုင်း ထုတ်ပေးသည်။ ကတ်ကို 3D ဖြင့် မြင်ရန် မောက်စ်ကို အပေါ်ရွှေ့ပါ။",
  id_f1: "အဖွဲ့ဝင်၏အမည်အပြည့်အစုံ", id_f2: "ကလပ်အတွင်းရာထူး", id_f3: "သင်ကြားနေသောပရိုဂရမ်", id_f4: "ပညာသင်နှစ်",
  join_kicker: "ပါဝင်ရန်", join_title: "အတွေ့အကြုံ မလိုအပ်ပါ။ အားလုံးသင်ပေးမည်။",
  join_sub: "ရွေးချယ်မှုသည် စေတနာနှင့် ဖန်တီးနိုင်စွမ်းအပေါ် အခြေခံသည်။ ပါဝင်ပုံ အဆင့်ဆင့်နှင့် စတင်ရန်ဖောင်ကို ဖော်ပြထားသည်။",
  form_t: "ကလပ်အဖွဲ့ဝင် မှတ်ပုံတင်ခြင်း", form_d: "ဤဖောင်ကို ဖြည့်ပါ၊ ကလပ်အဖွဲ့က ဆက်သွယ်လာပါမည်။",
  f_name: "အမည်အပြည့်အစုံ", f_program: "ပရိုဂရမ်", f_year: "အတန်း", f_interest: "စိတ်ဝင်စားသောအဖွဲ့",
  f_phone: "ဖုန်း (မဖြည့်မနေရ မဟုတ်)", f_email: "အီးမေးလ် (မဖြည့်မနေရ မဟုတ်)", f_sample: "လက်ရာနမူနာ (လင့်ခ်၊ မဖြည့်မနေရ မဟုတ်)",
  f_why: "ဘာကြောင့်ပါဝင်လိုသနည်း။ (မဖြည့်မနေရ မဟုတ်)", f_submit: "မှတ်ပုံတင်ရန်",
  opt_video: "ဗီဒီယို", opt_design: "ဒီဇိုင်း", opt_writing: "စာရေးသားခြင်းနှင့် ဆိုရှယ်",
  err_required: "အမည်၊ ပရိုဂရမ်၊ အတန်းနှင့် စိတ်ဝင်စားသောအဖွဲ့ကို ဖြည့်ပေးပါ။",
  ok_t: "မှတ်ပုံတင်ခြင်း လက်ခံရရှိပြီ။", ok_d: "စာရင်းသွင်းပေးတာ ကျေးဇူးပါ။ နောက်အစပျိုးသင်တန်းအကြောင်း ကလပ်အဖွဲ့က ဆက်သွယ်လာပါမည်။",
  contact_t: "အရင်မေးလိုပါသလား။", contact_d: "အချိန်မရွေး ဆက်သွယ်ပါ။ အမြန်ပြန်ကြားပါမည်။", contact_email: "အီးမေးလ်ပို့ရန်",
  foot_tag: "NMA ၏ဇာတ်လမ်းကို ကျောင်းသားများကိုယ်တိုင်ပြောပြမည်။"
}};

var DEFAULT_LISTS = {
why: [
  {icon:"megaphone", t:{en:"It helps admissions.",my:"ကျောင်းသားစုဆောင်းရေးကို အထောက်အကူပြုသည်။"}, d:{en:"A 30-second TikTok from a real student beats a printed brochure. Student-made content feels honest, and honesty earns trust.",my:"ကျောင်းသားအစစ်တစ်ဦး၏ စက္ကန့် ၃၀ TikTok သည် ပုံနှိပ်လက်ကမ်းစာစောင်ထက် ပိုမိုဆွဲဆောင်သည်။ ကျောင်းသားလက်ရာသည် ရိုးသားမှုရှိပြီး ရိုးသားမှုက ယုံကြည်မှုရရှိစေသည်။"}},
  {icon:"calendar", t:{en:"It records events properly.",my:"ပွဲများကို စနစ်တကျမှတ်တမ်းတင်နိုင်သည်။"}, d:{en:"Graduations, career fairs, and guest talks disappear after they happen. We turn each one into photos, recaps, and interviews that keep working for weeks.",my:"ဘွဲ့နှင်းသဘင်များ၊ အလုပ်အကိုင်ပြပွဲများနှင့် ဧည့်သည်ဟောပြောပွဲများသည် ပြီးဆုံးပြီးနောက် ပျောက်ကွယ်သွားသည်။ ပွဲတိုင်းကို ရက်သတ္တပတ်များစွာ အသုံးဝင်မည့် ဓာတ်ပုံများ၊ အကျဉ်းဗီဒီယိုများနှင့် အင်တာဗျူးများအဖြစ် ပြောင်းလဲသည်။"}},
  {icon:"award", t:{en:"It builds careers.",my:"အလုပ်အကိုင်ရနိုင်စွမ်းကို မြှင့်တင်ပေးသည်။"}, d:{en:"Members graduate with a real portfolio: shooting, editing, design, writing, and social media management. Exactly what marketing employers ask for.",my:"အဖွဲ့ဝင်များသည် လက်တွေ့လုပ်ငန်းစုစည်းမှုဖြင့် ကျောင်းပြီးမည်: ရိုက်ကူးခြင်း၊ တည်းဖြတ်ခြင်း၊ ဒီဇိုင်း၊ စာရေးသားခြင်းနှင့် ဆိုရှယ်မီဒီယာစီမံခန့်ခွဲခြင်း။ မားကတ်တင်းအလုပ်ရှင်များ တောင်းဆိုသောအရာများဖြစ်သည်။"}},
  {icon:"users", t:{en:"It brings students together.",my:"ကျောင်းသားများကို စည်းလုံးစေသည်။"}, d:{en:"Members from every program and year work on one project with one shared identity, instead of staying inside their own classes.",my:"ပရိုဂရမ်တိုင်းနှင့် အတန်းတိုင်းမှ ကျောင်းသားများသည် ကိုယ်ပိုင်အတန်းထဲတွင်သာ နေမည့်အစား တစ်ခုတည်းသောစီမံကိန်းနှင့် တစ်ခုတည်းသောအထောက်အထားဖြင့် လုပ်ဆောင်ကြသည်။"}}
],
rhythm: [
  {t:{en:"Monday",my:"တနင်္လာ"}, d:{en:"30-minute editorial meeting. Review numbers, assign the week's stories.",my:"မိနစ် ၃၀ အယ်ဒီတာရီရယ်အစည်းအဝေး။ နံပါတ်များသုံးသပ်ပြီး တစ်ပတ်စာဇာတ်လမ်းများ ခွဲဝေသည်။"}},
  {t:{en:"Tue - Thu",my:"အင်္ဂါ - ကြာသပတေး"}, d:{en:"Shoot days. Interviews, event coverage, campus reels.",my:"ရိုက်ကူးမည့်ရက်များ။ အင်တာဗျူးများ၊ ပွဲလွှမ်းခြုံမှုများ၊ ကျောင်းရီးလ်များ။"}},
  {t:{en:"Friday",my:"သောကြာ"}, d:{en:"Edit and review. Drafts checked against the brand guide before publishing.",my:"တည်းဖြတ်ပြီး ပြန်လည်သုံးသပ်သည်။ မထုတ်ဝေမီ အမှတ်တံဆိပ်လမ်းညွှန်နှင့် စစ်ဆေးသည်။"}},
  {t:{en:"Monthly",my:"လစဉ်"}, d:{en:"Stats review with the faculty advisor. What worked, what to change next month.",my:"ဆရာဝန်ကြီးနှင့် စာရင်းအင်းသုံးသပ်ခြင်း။ ဘာအလုပ်ဖြစ်သလဲ၊ နောက်လဘာပြောင်းမလဲ။"}}
],
pillars: [
  {icon:"camera", t:{en:"Student life",my:"ကျောင်းသားဘဝ"}, d:{en:"Day-in-the-life reels, classroom moments, canteen culture, student takeovers. The everyday NMA, filmed by the people living it.",my:"တစ်နေ့တာဘဝရီးလ်များ၊ စာသင်ခန်းအခိုက်အတန့်များ၊ ကန်တင်းယဉ်ကျေးမှု၊ ကျောင်းသားအလှည့်ကျတင်ဆက်မှုများ။ နေ့စဉ် NMA ကို နေထိုင်သူများကိုယ်တိုင် ရိုက်ကူးသည်။"}},
  {icon:"award", t:{en:"Achievements",my:"အောင်မြင်မှုများ"}, d:{en:"Graduate stories, top students, competition wins, internship placements. Proof of what NMA students go on to do.",my:"ဘွဲ့ရများ၏ဇာတ်လမ်းများ၊ ထူးချွန်ကျောင်းသားများ၊ ပြိုင်ပွဲအောင်မြင်မှုများ၊ အလုပ်သင်နေရာရရှိမှုများ။ NMA ကျောင်းသားများ ဆက်လက်လုပ်ဆောင်နေသောအရာများ၏ သက်သေများ။"}},
  {icon:"calendar", t:{en:"Events",my:"ပွဲများ"}, d:{en:"Same-day recap videos from graduations, career fairs, orientations, and guest talks. If it happened on campus, we filmed it.",my:"ဘွဲ့နှင်းသဘင်များ၊ အလုပ်အကိုင်ပြပွဲများ၊ ကျောင်းစတက်ပွဲများ၊ ဧည့်သည်ဟောပြောပွဲများမှ တစ်နေ့တည်းအကျဉ်းဗီဒီယိုများ။ ကျောင်းဝင်းအတွင်း ဖြစ်ပျက်သမျှ ရိုက်ကူးသည်။"}},
  {icon:"book", t:{en:"Knowledge",my:"အသိပညာ"}, d:{en:"60-second explainers pulled from real lessons: marketing tips, accounting basics, interview skills. Study help that doubles as content.",my:"သင်ခန်းစာအစစ်များမှ ထုတ်နုတ်သော စက္ကန့် ၆၀ ရှင်းလင်းချက်များ: မားကတ်တင်းအကြံပြုချက်များ၊ စာရင်းကိုင်အခြေခံများ၊ အင်တာဗျူးကျွမ်းကျင်မှုများ။ စာကျက်အကူအညီလည်းဖြစ်၊ အကြောင်းအရာလည်းဖြစ်။"}},
  {icon:"users", t:{en:"Community",my:"အသိုင်းအဝိုင်း"}, d:{en:"Staff introductions, collabs with other clubs, festival greetings like Thadingyut and Thingyan. The people around the content.",my:"ဝန်ထမ်းမိတ်ဆက်များ၊ အခြားကလပ်များနှင့် ပူးပေါင်းမှုများ၊ သီတင်းကျွတ်၊ သင်္ကြန်စသော ပွဲတော်နှုတ်ခွန်းဆက်မှုများ။ အကြောင်းအရာပတ်ဝန်းကျင်က လူများ။"}},
  {icon:"film", t:{en:"Graduate Stories",my:"Graduate Stories"}, d:{en:"Our flagship series: 12 episodes in year one, following NMA graduates and where they are now. Long-form, on YouTube.",my:"အဓိကစီးရီး: ပထမနှစ်တွင် အပိုင်း ၁၂ ပိုင်း၊ NMA ဘွဲ့ရများနှင့် ၎င်းတို့ယခုရောက်ရှိနေသောနေရာများ။ အရှည်ဗားရှင်း၊ YouTube တွင်။"}}
],
platforms: [
  {icon:"facebook", name:"Facebook", d:{en:"Photos, event albums, announcements, and longer videos. For parents and official updates.",my:"ဓာတ်ပုံများ၊ ပွဲအယ်လ်ဘမ်များ၊ ကြေညာချက်များနှင့် ဗီဒီယိုရှည်များ။ မိဘများနှင့် တရားဝင်အပ်ဒိတ်များအတွက်။"}, m:{en:"3 to 4 posts a week",my:"တစ်ပတ် ၃ ကြိမ်မှ ၄ ကြိမ်"}},
  {icon:"tiktok", name:"TikTok", d:{en:"Vertical video, 15 to 60 seconds. Built for reach and new-student discovery.",my:"ဒေါင်လိုက်ဗီဒီယို၊ ၁၅ စက္ကန့်မှ စက္ကန့် ၆၀။ ပြန့်နှံ့မှုနှင့် ကျောင်းသားအသစ်များ ရှာဖွေတွေ့ရှိမှုအတွက်။"}, m:{en:"4 to 5 posts a week",my:"တစ်ပတ် ၄ ကြိမ်မှ ၅ ကြိမ်"}},
  {icon:"instagram", name:"Instagram", d:{en:"Reels, carousels, and daily stories from around campus.",my:"ကျောင်းပတ်ဝန်းကျင်မှ Reels၊ carousel ပို့စ်များနှင့် နေ့စဉ် Stories များ။"}, m:{en:"4 posts a week, stories daily",my:"တစ်ပတ် ၄ ပို့စ်၊ Stories နေ့တိုင်း"}},
  {icon:"youtube", name:"YouTube", d:{en:"Event films, graduate stories, and explainers. The permanent library.",my:"ပွဲမှတ်တမ်းရုပ်ရှင်များ၊ ဘွဲ့ရဇာတ်လမ်းများနှင့် ရှင်းလင်းချက်များ။ အမြဲတမ်းစာကြည့်တိုက်။"}, m:{en:"2 videos a month",my:"တစ်လ ၂ ခု"}},
  {icon:"telegram", name:"Telegram", d:{en:"Announcements and behind-the-scenes for members and followers.",my:"အဖွဲ့ဝင်များနှင့် နောက်လိုက်များအတွက် ကြေညာချက်များနှင့် နောက်ကွယ်အခိုက်အတန့်များ။"}, m:{en:"As needed",my:"လိုအပ်သလို"}},
  {icon:"globe", name:{en:"Two languages",my:"နှစ်ဘာသာ"}, d:{en:"Key posts go out in English and Myanmar, with Myanmar subtitles on every video.",my:"အရေးကြီးပို့စ်များကို အင်္ဂလိပ်နှင့် မြန်မာနှစ်ဘာသာဖြင့် ထုတ်ဝေပြီး ဗီဒီယိုတိုင်းတွင် မြန်မာစာတန်းများ ပါဝင်သည်။"}, m:{en:"Always",my:"အမြဲတမ်း"}}
],
team: [
  {t:{en:"President",my:"ဥက္ကဌ"}, d:{en:"Sets direction, liaises with the School Admission Team, final sign-off.",my:"ဦးတည်ချက်ချမှတ်သည်၊ School Admission Team နှင့် ဆက်ဆံသည်၊ နောက်ဆုံးအတည်ပြုသည်။"}},
  {t:{en:"Vice President",my:"ဒုတိယဥက္ကဌ"}, d:{en:"Day-to-day operations, scheduling, stands in for the president.",my:"နေ့စဉ်လုပ်ငန်းများ၊ အစီအစဉ်ဆွဲသည်၊ ဥက္ကဌကိုယ်စား ဆောင်ရွက်သည်။"}},
  {t:{en:"Content Lead",my:"အကြောင်းအရာ ဦးဆောင်သူ"}, d:{en:"Runs the editorial calendar, assigns stories, checks quality.",my:"အယ်ဒီတာရီရယ်ပြက္ခဒိန်ကို စီမံသည်၊ ဇာတ်လမ်းများခွဲဝေသည်၊ အရည်အသွေးစစ်ဆေးသည်။"}},
  {t:{en:"Video Lead",my:"ဗီဒီယို ဦးဆောင်သူ"}, d:{en:"Plans shoots, sets editing standards, looks after gear.",my:"ရိုက်ကူးမှုများ စီစဉ်သည်၊ တည်းဖြတ်စံနှုန်းများချမှတ်သည်၊ ပစ္စည်းကိရိယာများ ထိန်းသိမ်းသည်။"}},
  {t:{en:"Design Lead",my:"ဒီဇိုင်း ဦးဆောင်သူ"}, d:{en:"Graphics, thumbnails, templates, brand compliance.",my:"ဂရပ်ဖစ်များ၊ သမ်းနေများ၊ တင်းပလိတ်များ၊ အမှတ်တံဆိပ်လိုက်နာမှု။"}},
  {t:{en:"Social Media Manager",my:"ဆိုရှယ်မီဒီယာ မန်နေဂျာ"}, d:{en:"Publishes, writes captions, replies to comments, tracks stats.",my:"ထုတ်ဝေသည်၊ စာတန်းများရေးသည်၊ မှတ်ချက်များကို ပြန်ကြားသည်၊ စာရင်းအင်းများ ကြည့်ရှုသည်။"}},
  {t:{en:"Secretary / Treasurer",my:"အတွင်းရေးမှူး / ဘဏ္ဍာထိန်း"}, d:{en:"Member records, budget, meeting notes.",my:"အဖွဲ့ဝင်မှတ်တမ်းများ၊ ဘတ်ဂျက်၊ အစည်းအဝေးမှတ်တမ်းများ။"}}
],
steps: [
  {t:{en:"Apply",my:"လျှောက်ထားရန်"}, d:{en:"Fill in the registration form below with your name, program, year, and interested team. Adding a sample (a 30-second video or a design post) helps, but it is optional.",my:"အောက်ပါမှတ်ပုံတင်ဖောင်တွင် အမည်၊ ပရိုဂရမ်၊ အတန်း၊ စိတ်ဝင်စားသောအဖွဲ့တို့ ဖြည့်ပါ။ နမူနာ (စက္ကန့် ၃၀ ဗီဒီယို သို့မဟုတ် ဒီဇိုင်းပို့စ်) ထည့်ပေးက ပိုကောင်းသော်လည်း မဖြည့်မနေရ မဟုတ်။"}},
  {t:{en:"Learn the basics",my:"အခြေခံသင်ယူရန်"}, d:{en:"A two-week onboarding: phone shooting basics, CapCut editing, and the club brand guide. No gear needed, your phone is enough.",my:"နှစ်ပတ်ကြာ အစပျိုးသင်တန်း: ဖုန်းဖြင့်ရိုက်ကူးခြင်းအခြေခံ၊ CapCut တည်းဖြတ်ခြင်း၊ ကလပ်အမှတ်တံဆိပ်လမ်းညွှန်။ ပစ္စည်းမလိုပါ၊ ဖုန်းရှိရုံနှင့် လုံလောက်သည်။"}},
  {t:{en:"Pick your team and publish",my:"အဖွဲ့ရွေးပြီး ထုတ်ဝေရန်"}, d:{en:"Join the video, design, or writing and social team, get your member ID card, and start publishing with the club.",my:"ဗီဒီယို၊ ဒီဇိုင်း သို့မဟုတ် စာရေးသားခြင်းနှင့် ဆိုရှယ်အဖွဲ့ကို ရွေးချယ်ပြီး အဖွဲ့ဝင်ကတ် ရယူကာ ကလပ်နှင့်အတူ စတင်ထုတ်ဝေပါ။"}}
]};

var CONTACT_DEFAULTS = { email: "nmamediaclub@gmail.com", phone: "09457322394" };


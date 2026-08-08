/* ===== grammar-data.js: topics + diagnostic questions + irregular verbs data ===== */
const GRAMMAR_TOPICS = [
  {
    "id": "sentence_structure",
    "level": "A1",
    "titleFa": "ساختار جمله (فاعل + فعل + مفعول)",
    "explFa": "ترتیب اجزای جمله در انگلیسی معمولاً ثابته: فاعل + فعل + مفعول. برخلاف فارسی که فعل آخر جمله می‌آد، در انگلیسی فعل زود در جمله میاد.\n\nمثال‌ها:\n• She eats an apple.\n• He drinks coffee.\n• The teacher reads a book.",
    "diag": {
      "q": "Which sentence has correct word order?",
      "options": [
        "She an apple eats.",
        "She eats an apple.",
        "Eats she an apple.",
        "An apple she eats."
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "Which is correct?",
        "options": [
          "Coffee drinks he.",
          "He drinks coffee.",
          "He coffee drinks.",
          "Drinks he coffee."
        ],
        "answer": 1
      },
      {
        "q": "Which is correct?",
        "options": [
          "The teacher a book reads.",
          "A book the teacher reads.",
          "The teacher reads a book.",
          "Reads the teacher a book."
        ],
        "answer": 2
      },
      {
        "q": "Which is correct?",
        "options": [
          "My sister TV watches.",
          "My sister watches TV.",
          "Watches TV my sister.",
          "TV my sister watches."
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "parts_of_speech",
    "level": "A1",
    "titleFa": "اجزای کلام (Parts of Speech)",
    "explFa": "کلمات انگلیسی در دسته‌های اصلی قرار می‌گیرن: اسم، فعل، صفت، قید، ضمیر، حرف اضافه، حرف ربط و حرف تعریف.\n\nمثال‌ها:\n• adverb\n• In 'The big dog barks', 'big' is a(n) adjective.\n• In 'He is under the table', 'under' is a(n) preposition.",
    "diag": {
      "q": "In 'She runs quickly', what part of speech is 'quickly'?",
      "options": [
        "noun",
        "verb",
        "adjective",
        "adverb"
      ],
      "answer": 3
    },
    "exercises": [
      {
        "q": "In 'The big dog barks', 'big' is a(n) ___.",
        "options": [
          "noun",
          "adjective",
          "adverb",
          "verb"
        ],
        "answer": 1
      },
      {
        "q": "In 'He is under the table', 'under' is a(n) ___.",
        "options": [
          "preposition",
          "adverb",
          "conjunction",
          "noun"
        ],
        "answer": 0
      },
      {
        "q": "In 'Tom and Jerry', 'and' is a(n) ___.",
        "options": [
          "preposition",
          "pronoun",
          "conjunction",
          "article"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "verb_to_be",
    "level": "A1",
    "titleFa": "فعل to be (am/is/are/was/were)",
    "explFa": "فعل to be مهم‌ترین فعل انگلیسیه: در حال (am/is/are) و در گذشته (was/were). فارسی گاهی این فعل رو حذف می‌کنه ولی انگلیسی همیشه بهش نیاز داره.\n\nمثال‌ها:\n• They were happy yesterday.\n• I am tired now.\n• She was at home last night.",
    "diag": {
      "q": "They ___ happy yesterday.",
      "options": [
        "was",
        "were",
        "is",
        "are"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "I ___ tired now.",
        "options": [
          "am",
          "is",
          "are",
          "were"
        ],
        "answer": 0
      },
      {
        "q": "She ___ at home last night.",
        "options": [
          "was",
          "were",
          "is",
          "are"
        ],
        "answer": 0
      },
      {
        "q": "We ___ students.",
        "options": [
          "am",
          "is",
          "are",
          "was"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "subject_pronouns",
    "level": "A1",
    "titleFa": "ضمایر فاعلی",
    "explFa": "ضمایر فاعلی (I, you, he, she, it, we, they) جای اسمِ فاعلِ جمله می‌شینن و همیشه قبل از فعل می‌آن.\n\nمثال‌ها:\n• He is my brother.\n• They are teachers.\n• She likes pizza.",
    "diag": {
      "q": "___ is my brother.",
      "options": [
        "Him",
        "He",
        "His",
        "He's"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "___ are teachers.",
        "options": [
          "Them",
          "They",
          "Their",
          "Theirs"
        ],
        "answer": 1
      },
      {
        "q": "___ likes pizza.",
        "options": [
          "Her",
          "She",
          "Hers",
          "He"
        ],
        "answer": 1
      },
      {
        "q": "___ live in Tehran.",
        "options": [
          "We",
          "Us",
          "Our",
          "Ours"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "object_pronouns",
    "level": "A1",
    "titleFa": "ضمایر مفعولی",
    "explFa": "ضمایر مفعولی (me, you, him, her, it, us, them) بعد از فعل یا حرف اضافه می‌آن، نه قبل از فعل.\n\nمثال‌ها:\n• She loves him.\n• Give me the book.\n• I saw them at the park.",
    "diag": {
      "q": "She loves ___.",
      "options": [
        "he",
        "him",
        "his",
        "himself"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "Give ___ the book.",
        "options": [
          "I",
          "me",
          "my",
          "mine"
        ],
        "answer": 1
      },
      {
        "q": "I saw ___ at the park.",
        "options": [
          "they",
          "them",
          "their",
          "theirs"
        ],
        "answer": 1
      },
      {
        "q": "Can you help ___?",
        "options": [
          "we",
          "us",
          "our",
          "ours"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "possessive_adjectives",
    "level": "A1",
    "titleFa": "صفت‌های ملکی",
    "explFa": "صفت‌های ملکی (my, your, his, her, its, our, their) قبل از اسم می‌آن و مالکیت رو نشون می‌دن.\n\nمثال‌ها:\n• This is my car.\n• Her dog is very friendly.\n• They love their parents.",
    "diag": {
      "q": "This is ___ car.",
      "options": [
        "me",
        "my",
        "mine",
        "I"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "___ dog is very friendly.",
        "options": [
          "She",
          "Her",
          "Hers",
          "Herself"
        ],
        "answer": 1
      },
      {
        "q": "They love ___ parents.",
        "options": [
          "them",
          "they",
          "their",
          "theirs"
        ],
        "answer": 2
      },
      {
        "q": "___ house is big.",
        "options": [
          "We",
          "Us",
          "Our",
          "Ours"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "possessive_pronouns",
    "level": "A1",
    "titleFa": "ضمایر ملکی",
    "explFa": "ضمایر ملکی (mine, yours, his, hers, its, ours, theirs) جای اسم می‌شینن و بعدشون دیگه اسم نمی‌آد.\n\nمثال‌ها:\n• This book is mine.\n• Is this pen yours or his?\n• That house is theirs.",
    "diag": {
      "q": "This book is ___.",
      "options": [
        "my",
        "mine",
        "me",
        "I"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "Is this pen yours or ___?",
        "options": [
          "his",
          "he",
          "him",
          "its"
        ],
        "answer": 0
      },
      {
        "q": "That house is ___.",
        "options": [
          "their",
          "theirs",
          "them",
          "they"
        ],
        "answer": 1
      },
      {
        "q": "The idea was ___.",
        "options": [
          "our",
          "ours",
          "us",
          "we"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "reflexive_pronouns",
    "level": "A1",
    "titleFa": "ضمایر انعکاسی",
    "explFa": "ضمایر انعکاسی (myself, yourself, himself...) وقتی فاعل و مفعول جمله یک نفرن به کار می‌رن.\n\nمثال‌ها:\n• She cut herself while cooking.\n• I made this cake myself.\n• They enjoyed themselves at the party.",
    "diag": {
      "q": "She cut ___ while cooking.",
      "options": [
        "her",
        "herself",
        "hers",
        "she"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "I made this cake ___.",
        "options": [
          "me",
          "my",
          "myself",
          "mine"
        ],
        "answer": 2
      },
      {
        "q": "They enjoyed ___ at the party.",
        "options": [
          "them",
          "themselves",
          "their",
          "theirs"
        ],
        "answer": 1
      },
      {
        "q": "Look at ___ in the mirror!",
        "options": [
          "you",
          "yourself",
          "your",
          "yours"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "demonstratives",
    "level": "A1",
    "titleFa": "اشاره‌گرها (this/that/these/those)",
    "explFa": "this/these برای چیزهای نزدیک، that/those برای چیزهای دور.\n\nمثال‌ها:\n• This is my phone.\n• These are my friends.\n• That book on the shelf over there is mine.",
    "diag": {
      "q": "___ is my phone.",
      "options": [
        "This",
        "These",
        "That",
        "Those"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ are my friends.",
        "options": [
          "This",
          "These",
          "That",
          "Those"
        ],
        "answer": 1
      },
      {
        "q": "___ book on the shelf over there is mine.",
        "options": [
          "This",
          "These",
          "That",
          "Those"
        ],
        "answer": 2
      },
      {
        "q": "___ shoes near the door (far) are dirty.",
        "options": [
          "This",
          "These",
          "That",
          "Those"
        ],
        "answer": 3
      }
    ]
  },
  {
    "id": "articles",
    "level": "A1",
    "titleFa": "حروف تعریف (a / an / the)",
    "explFa": "فارسی حرف تعریف نداره. قبل از صدای صامت a، قبل از صدای مصوت an، و the وقتی چیز مشخصیه.\n\nمثال‌ها:\n• He has a car.\n• I saw an elephant.\n• The sun rises in the east.",
    "diag": {
      "q": "He has ___ car.",
      "options": [
        "a",
        "an",
        "the",
        "-"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I saw ___ elephant.",
        "options": [
          "a",
          "an",
          "the",
          "-"
        ],
        "answer": 1
      },
      {
        "q": "___ sun rises in the east.",
        "options": [
          "A",
          "An",
          "The",
          "-"
        ],
        "answer": 2
      },
      {
        "q": "She is ___ engineer.",
        "options": [
          "a",
          "an",
          "the",
          "-"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "plurals",
    "level": "A1",
    "titleFa": "جمع اسم‌ها",
    "explFa": "برای اکثر اسم‌ها s+، استثناها: ختم به s/x/ch/sh → es+، ختم به y بعد صامت → ies، و جمع‌های بی‌قاعده.\n\nمثال‌ها:\n• One box, two boxes.\n• One city, two cities.\n• One child, two children.",
    "diag": {
      "q": "One box, two ___.",
      "options": [
        "boxs",
        "boxes",
        "boxies",
        "box"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "One city, two ___.",
        "options": [
          "citys",
          "cities",
          "cites",
          "citys"
        ],
        "answer": 1
      },
      {
        "q": "One child, two ___.",
        "options": [
          "childs",
          "childes",
          "children",
          "childern"
        ],
        "answer": 2
      },
      {
        "q": "One mouse, two ___.",
        "options": [
          "mouses",
          "mices",
          "mouse",
          "mice"
        ],
        "answer": 3
      }
    ]
  },
  {
    "id": "countable_uncountable",
    "level": "A2",
    "titleFa": "اسم‌های قابل‌شمارش و غیرقابل‌شمارش",
    "explFa": "قابل‌شمارش‌ها جمع می‌بندن (a book, three books). غیرقابل‌شمارش‌ها (water, money, advice) جمع نمی‌بندن.\n\nمثال‌ها:\n• Some information is missing.\n• I bought two books.\n• There is much sand on the beach.",
    "diag": {
      "q": "___ information is missing.",
      "options": [
        "A",
        "An",
        "Many",
        "Some"
      ],
      "answer": 3
    },
    "exercises": [
      {
        "q": "I bought two ___.",
        "options": [
          "book",
          "books",
          "a book",
          "much book"
        ],
        "answer": 1
      },
      {
        "q": "There is ___ sand on the beach.",
        "options": [
          "a",
          "an",
          "many",
          "much"
        ],
        "answer": 3
      },
      {
        "q": "He gave me ___ apples.",
        "options": [
          "much",
          "many",
          "a",
          "an"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "adjectives",
    "level": "A1",
    "titleFa": "صفت‌ها",
    "explFa": "صفت‌ها اسم رو توصیف می‌کنن و معمولاً قبل از اسم می‌آن؛ برخلاف فارسی، صفت جمع بسته نمی‌شه.\n\nمثال‌ها:\n• She has a red car.\n• They are intelligent students.\n• This is a big house.",
    "diag": {
      "q": "She has a ___ car.",
      "options": [
        "red",
        "reds",
        "redly",
        "redness"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "They are ___ students.",
        "options": [
          "intelligent",
          "intelligents",
          "intelligently",
          "intelligence"
        ],
        "answer": 0
      },
      {
        "q": "This is a ___ house.",
        "options": [
          "big",
          "bigly",
          "bigness",
          "bigs"
        ],
        "answer": 0
      },
      {
        "q": "He is very ___.",
        "options": [
          "kind",
          "kindly",
          "kindness",
          "kinds"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "adjective_order",
    "level": "A2",
    "titleFa": "ترتیب صفت‌ها",
    "explFa": "چند صفت پشت‌سرهم ترتیب مشخصی دارن: نظر شخصی، اندازه، سن، شکل، رنگ، ملیت، جنس + اسم.\n\nمثال‌ها:\n• a big red house\n• a lovely old wooden box\n• a small French car",
    "diag": {
      "q": "Choose the correct order:",
      "options": [
        "a red big house",
        "a big red house",
        "a house big red",
        "big a red house"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "Choose the correct order:",
        "options": [
          "an old lovely wooden box",
          "a lovely old wooden box",
          "a wooden lovely old box",
          "old a lovely wooden box"
        ],
        "answer": 1
      },
      {
        "q": "Choose the correct order:",
        "options": [
          "a French small car",
          "a small French car",
          "French a small car",
          "a small car French"
        ],
        "answer": 1
      },
      {
        "q": "Choose the correct order:",
        "options": [
          "a blue nice dress",
          "a nice blue dress",
          "blue a nice dress",
          "dress nice a blue"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "adverbs",
    "level": "A2",
    "titleFa": "قیدها",
    "explFa": "قیدها فعل، صفت یا قید دیگه رو توصیف می‌کنن و اغلب با ly+ ساخته می‌شن.\n\nمثال‌ها:\n• She sings beautifully.\n• He runs fast.\n• They speak English well.",
    "diag": {
      "q": "She sings ___.",
      "options": [
        "beautiful",
        "beautifully",
        "beauty",
        "beautify"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "He runs ___.",
        "options": [
          "fast",
          "fastly",
          "faster",
          "fastness"
        ],
        "answer": 0
      },
      {
        "q": "They speak English ___.",
        "options": [
          "good",
          "well",
          "goodly",
          "best"
        ],
        "answer": 1
      },
      {
        "q": "She drives very ___.",
        "options": [
          "careful",
          "carefully",
          "care",
          "carefulness"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "frequency_adverbs",
    "level": "A2",
    "titleFa": "قیدهای تکرار",
    "explFa": "قیدهای تکرار (always, usually, often, sometimes, rarely, never) قبل از فعل اصلی می‌آن ولی بعد از to be.\n\nمثال‌ها:\n• She always goes goes to the gym. (always)\n• He is is never late. (never)\n• I usually drink drink coffee in the morning. (usually)",
    "diag": {
      "q": "She ___ goes to the gym. (always)",
      "options": [
        "always goes",
        "goes always",
        "is always goes",
        "always is goes"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He is ___ late. (never)",
        "options": [
          "never is",
          "is never",
          "never be",
          "be never"
        ],
        "answer": 1
      },
      {
        "q": "I ___ drink coffee in the morning. (usually)",
        "options": [
          "usually drink",
          "drink usually",
          "am usually drink",
          "usually am drink"
        ],
        "answer": 0
      },
      {
        "q": "They ___ watch TV at night. (sometimes)",
        "options": [
          "watch sometimes",
          "sometimes watch",
          "are sometimes watch",
          "sometimes are watch"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "prep_time",
    "level": "A1",
    "titleFa": "حروف اضافه‌ی زمان (in/on/at)",
    "explFa": "at برای ساعت دقیق، on برای روزها و تاریخ‌ها، in برای ماه‌ها/سال‌ها/بازه‌های طولانی.\n\nمثال‌ها:\n• The meeting is at 9 AM.\n• I was born in 1998.\n• We have a party on Friday.",
    "diag": {
      "q": "The meeting is ___ 9 AM.",
      "options": [
        "in",
        "on",
        "at",
        "-"
      ],
      "answer": 2
    },
    "exercises": [
      {
        "q": "I was born ___ 1998.",
        "options": [
          "in",
          "on",
          "at",
          "-"
        ],
        "answer": 0
      },
      {
        "q": "We have a party ___ Friday.",
        "options": [
          "in",
          "on",
          "at",
          "-"
        ],
        "answer": 1
      },
      {
        "q": "She studies ___ the evening.",
        "options": [
          "in",
          "on",
          "at",
          "-"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "prep_place",
    "level": "A1",
    "titleFa": "حروف اضافه‌ی مکان (in/on/at)",
    "explFa": "at برای مکان نقطه‌ای، on برای سطح، in برای فضای بسته/داخل چیزی.\n\nمثال‌ها:\n• The keys are on the table.\n• She is in the classroom.\n• He is waiting at the bus stop.",
    "diag": {
      "q": "The keys are ___ the table.",
      "options": [
        "in",
        "on",
        "at",
        "-"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "She is ___ the classroom.",
        "options": [
          "in",
          "on",
          "at",
          "-"
        ],
        "answer": 0
      },
      {
        "q": "He is waiting ___ the bus stop.",
        "options": [
          "in",
          "on",
          "at",
          "-"
        ],
        "answer": 2
      },
      {
        "q": "The cat is sleeping ___ the sofa.",
        "options": [
          "in",
          "on",
          "at",
          "-"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "prep_basic",
    "level": "A1",
    "titleFa": "حروف اضافه‌ی پایه (under/over/between/behind...)",
    "explFa": "under (زیر)، over (بالای)، between (بین دوچیز)، behind (پشت)، in front of (جلوی)، next to (کنار).\n\nمثال‌ها:\n• The cat is under the box.\n• The bank is between the pharmacy and the school.\n• She is standing in front of me.",
    "diag": {
      "q": "The cat is ___ the box.",
      "options": [
        "under",
        "over",
        "between",
        "behind"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "The bank is ___ the pharmacy and the school.",
        "options": [
          "under",
          "between",
          "behind",
          "over"
        ],
        "answer": 1
      },
      {
        "q": "She is standing ___ me.",
        "options": [
          "in front of",
          "behind",
          "under",
          "between"
        ],
        "answer": 0
      },
      {
        "q": "The picture is ___ the sofa.",
        "options": [
          "under",
          "over",
          "next to",
          "between"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "there_is_are",
    "level": "A1",
    "titleFa": "There is / There are",
    "explFa": "There is برای مفرد/غیرقابل‌شمارش، there are برای جمع.\n\nمثال‌ها:\n• There is a book on the table.\n• There are many students in the class.\n• There is some milk in the fridge.",
    "diag": {
      "q": "___ a book on the table.",
      "options": [
        "There is",
        "There are",
        "It is",
        "They are"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ many students in the class.",
        "options": [
          "There is",
          "There are",
          "It is",
          "They are"
        ],
        "answer": 1
      },
      {
        "q": "___ some milk in the fridge.",
        "options": [
          "There is",
          "There are",
          "It is",
          "They are"
        ],
        "answer": 0
      },
      {
        "q": "___ two cats in the garden.",
        "options": [
          "There is",
          "There are",
          "It is",
          "They are"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "yesno_questions",
    "level": "A1",
    "titleFa": "سؤالات بله/خیر",
    "explFa": "فعل کمکی (am/is/are/do/does/did) اول جمله می‌آد، قبل از فاعل.\n\nمثال‌ها:\n• Do you like coffee?\n• Is she a teacher?\n• Do they play football on Sundays?",
    "diag": {
      "q": "___ you like coffee?",
      "options": [
        "Do",
        "Does",
        "Are",
        "Is"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ she a teacher?",
        "options": [
          "Do",
          "Does",
          "Is",
          "Are"
        ],
        "answer": 2
      },
      {
        "q": "___ they play football on Sundays?",
        "options": [
          "Do",
          "Does",
          "Is",
          "Are"
        ],
        "answer": 0
      },
      {
        "q": "___ it raining now?",
        "options": [
          "Do",
          "Does",
          "Is",
          "Are"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "wh_questions",
    "level": "A1",
    "titleFa": "سؤالات با کلمات پرسشی (Wh-)",
    "explFa": "با کلمات پرسشی (what, where, when, who, why, how) شروع می‌شن و بعدشون فعل کمکی + فاعل می‌آد.\n\nمثال‌ها:\n• Where do you live?\n• What is your name?\n• When did you go to bed?",
    "diag": {
      "q": "___ do you live?",
      "options": [
        "What",
        "Where",
        "Who",
        "Why"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "___ is your name?",
        "options": [
          "What",
          "Where",
          "When",
          "Who"
        ],
        "answer": 0
      },
      {
        "q": "___ did you go to bed?",
        "options": [
          "What",
          "When",
          "Where",
          "Who"
        ],
        "answer": 1
      },
      {
        "q": "___ is that girl?",
        "options": [
          "What",
          "Where",
          "Who",
          "Why"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "imperatives",
    "level": "A1",
    "titleFa": "جملات امری",
    "explFa": "با فعل ساده (بدون فاعل) شروع می‌شن؛ فرم منفی با Don’t ساخته می‌شه.\n\nمثال‌ها:\n• Close the door, please.\n• Don't be late!\n• Be quiet, please.",
    "diag": {
      "q": "___ the door, please.",
      "options": [
        "Close",
        "Closes",
        "Closing",
        "Closed"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ late!",
        "options": [
          "Don't be",
          "Not be",
          "Doesn't be",
          "Aren't"
        ],
        "answer": 0
      },
      {
        "q": "___ quiet, please.",
        "options": [
          "Be",
          "Is",
          "Are",
          "Being"
        ],
        "answer": 0
      },
      {
        "q": "___ your homework now.",
        "options": [
          "Do",
          "Does",
          "Doing",
          "Did"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "present_simple",
    "level": "A1",
    "titleFa": "زمان حال ساده",
    "explFa": "برای عادت‌ها، حقایق ثابت و برنامه‌های زمان‌بندی‌شده. در سوم‌شخص مفرد به فعل s+ اضافه می‌شه.\n\nمثال‌ها:\n• Water boils at 100°C.\n• She goes to work every day.\n• The train leaves at 8 AM.",
    "diag": {
      "q": "Water ___ at 100°C.",
      "options": [
        "boil",
        "boils",
        "boiled",
        "boiling"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "She ___ to work every day.",
        "options": [
          "go",
          "goes",
          "went",
          "going"
        ],
        "answer": 1
      },
      {
        "q": "The train ___ at 8 AM.",
        "options": [
          "leave",
          "leaves",
          "left",
          "leaving"
        ],
        "answer": 1
      },
      {
        "q": "I ___ coffee in the morning.",
        "options": [
          "drink",
          "drinks",
          "drank",
          "drinking"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "present_continuous",
    "level": "A1",
    "titleFa": "حال استمراری",
    "explFa": "برای کاری که همین الان یا این روزها در حال انجامه: am/is/are + فعل+ing.\n\nمثال‌ها:\n• She is studying (study) right now.\n• They are playing (play) football at the moment.\n• I am writing (write) an email now.",
    "diag": {
      "q": "She ___ (study) right now.",
      "options": [
        "is studying",
        "studies",
        "studied",
        "study"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "They ___ (play) football at the moment.",
        "options": [
          "are playing",
          "play",
          "played",
          "plays"
        ],
        "answer": 0
      },
      {
        "q": "I ___ (write) an email now.",
        "options": [
          "am writing",
          "write",
          "wrote",
          "writes"
        ],
        "answer": 0
      },
      {
        "q": "He ___ (not/work) today.",
        "options": [
          "isn't working",
          "doesn't work",
          "wasn't working",
          "don't work"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "past_simple",
    "level": "A2",
    "titleFa": "گذشته‌ی ساده",
    "explFa": "برای کاری که در گذشته تموم شده؛ افعال باقاعده ed+، بی‌قاعده‌ها فرم خاص خودشون رو دارن.\n\nمثال‌ها:\n• We saw (see) him last night.\n• She went (go) to school yesterday.\n• They didn't watch (not/watch) the movie.",
    "diag": {
      "q": "We ___ (see) him last night.",
      "options": [
        "see",
        "saw",
        "seen",
        "seeing"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "She ___ (go) to school yesterday.",
        "options": [
          "go",
          "goes",
          "went",
          "going"
        ],
        "answer": 2
      },
      {
        "q": "They ___ (not/watch) the movie.",
        "options": [
          "didn't watch",
          "doesn't watch",
          "not watched",
          "wasn't watch"
        ],
        "answer": 0
      },
      {
        "q": "I ___ (play) football last week.",
        "options": [
          "play",
          "played",
          "plays",
          "playing"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "past_continuous",
    "level": "A2",
    "titleFa": "گذشته‌ی استمراری",
    "explFa": "برای کاری که در یک لحظه‌ی خاص گذشته در حال انجام بوده؛ اغلب با past simple ترکیب می‌شه.\n\nمثال‌ها:\n• I was watching (watch) TV when the phone rang.\n• They were playing (play) football at 5 PM yesterday.\n• While she was cooking (cook), the fire alarm went off.",
    "diag": {
      "q": "I ___ (watch) TV when the phone rang.",
      "options": [
        "was watching",
        "watched",
        "am watching",
        "watches"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "They ___ (play) football at 5 PM yesterday.",
        "options": [
          "were playing",
          "played",
          "are playing",
          "play"
        ],
        "answer": 0
      },
      {
        "q": "While she ___ (cook), the fire alarm went off.",
        "options": [
          "was cooking",
          "cooked",
          "cooks",
          "is cooking"
        ],
        "answer": 0
      },
      {
        "q": "We ___ (not/sleep) at midnight.",
        "options": [
          "weren't sleeping",
          "didn't sleep",
          "aren't sleeping",
          "don't sleep"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "future_will",
    "level": "A2",
    "titleFa": "آینده با will",
    "explFa": "will+فعل برای تصمیم‌های آنی، پیش‌بینی‌ها و وعده‌ها.\n\nمثال‌ها:\n• I think it will rain tomorrow.\n• I'm thirsty. I will get (get) some water.\n• She will help (help) you, I promise.",
    "diag": {
      "q": "I think it ___ rain tomorrow.",
      "options": [
        "will",
        "is going to",
        "is",
        "was"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I'm thirsty. I ___ (get) some water.",
        "options": [
          "will get",
          "am going to get",
          "get",
          "got"
        ],
        "answer": 0
      },
      {
        "q": "She ___ (help) you, I promise.",
        "options": [
          "will help",
          "is helping",
          "helps",
          "helped"
        ],
        "answer": 0
      },
      {
        "q": "___ you (call) me later?",
        "options": [
          "Will",
          "Are going to",
          "Do",
          "Did"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "future_going_to",
    "level": "A2",
    "titleFa": "آینده با going to",
    "explFa": "be going to برای برنامه‌ها و تصمیم‌های از قبل گرفته‌شده.\n\nمثال‌ها:\n• We are going to visit (visit) Paris next summer.\n• Look at those clouds! It is going to rain (rain).\n• I am going to study (study) medicine next year.",
    "diag": {
      "q": "We ___ (visit) Paris next summer.",
      "options": [
        "are going to visit",
        "will visit",
        "visit",
        "visited"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "Look at those clouds! It ___ (rain).",
        "options": [
          "is going to rain",
          "will rain",
          "rains",
          "rained"
        ],
        "answer": 0
      },
      {
        "q": "I ___ (study) medicine next year.",
        "options": [
          "am going to study",
          "will study",
          "study",
          "studied"
        ],
        "answer": 0
      },
      {
        "q": "They ___ (not/come) to the party.",
        "options": [
          "aren't going to come",
          "won't come",
          "don't come",
          "didn't come"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "present_perfect",
    "level": "B1",
    "titleFa": "حال کامل (Present Perfect)",
    "explFa": "مهم‌ترین نقطه‌ی اشتباه فارسی‌زبان‌ها. Present Perfect برای تجربه یا نتیجه‌ای که زمان دقیقش مهم نیست؛ Past Simple وقتی زمان دقیق مشخصه.\n\nمثال‌ها:\n• He has finished (finish) his homework, so he can go out now.\n• I have seen (see) that movie already.\n• She visited (visit) London last year.",
    "diag": {
      "q": "He ___ (finish) his homework, so he can go out now.",
      "options": [
        "finished",
        "has finished",
        "finish",
        "finishing"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "I ___ (see) that movie already.",
        "options": [
          "saw",
          "have seen",
          "see",
          "seeing"
        ],
        "answer": 1
      },
      {
        "q": "She ___ (visit) London last year.",
        "options": [
          "has visited",
          "visited",
          "visits",
          "visiting"
        ],
        "answer": 1
      },
      {
        "q": "___ you ever (be) to Japan?",
        "options": [
          "Did...be",
          "Have...been",
          "Do...be",
          "Are...been"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "present_perfect_continuous",
    "level": "B1",
    "titleFa": "حال کامل استمراری",
    "explFa": "have/has been + فعل+ing، برای کاری که از گذشته شروع شده و ادامه داره یا تازه تموم شده، معمولاً با for/since.\n\nمثال‌ها:\n• I have been studying (study) English for three years.\n• She has been working (work) here since 2020.\n• Why are you tired? I have been running (run).",
    "diag": {
      "q": "I ___ (study) English for three years.",
      "options": [
        "have been studying",
        "studied",
        "study",
        "am studying"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She ___ (work) here since 2020.",
        "options": [
          "has been working",
          "worked",
          "works",
          "is working"
        ],
        "answer": 0
      },
      {
        "q": "Why are you tired? I ___ (run).",
        "options": [
          "have been running",
          "ran",
          "run",
          "am running"
        ],
        "answer": 0
      },
      {
        "q": "They ___ (wait) for two hours.",
        "options": [
          "have been waiting",
          "waited",
          "wait",
          "are waiting"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "past_perfect",
    "level": "B1",
    "titleFa": "گذشته‌ی کامل",
    "explFa": "had + قسمت سوم فعل، برای کاری که قبل از یک کار دیگه در گذشته اتفاق افتاده.\n\nمثال‌ها:\n• When I arrived, the movie had already started (already/start).\n• She had finished (finish) dinner before I called.\n• They had left (leave) by the time we got there.",
    "diag": {
      "q": "When I arrived, the movie ___ (already/start).",
      "options": [
        "had already started",
        "already started",
        "has already started",
        "was already starting"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She ___ (finish) dinner before I called.",
        "options": [
          "had finished",
          "finished",
          "has finished",
          "was finishing"
        ],
        "answer": 0
      },
      {
        "q": "They ___ (leave) by the time we got there.",
        "options": [
          "had left",
          "left",
          "have left",
          "were leaving"
        ],
        "answer": 0
      },
      {
        "q": "I ___ (never/see) snow before that trip.",
        "options": [
          "had never seen",
          "never saw",
          "have never seen",
          "was never seeing"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "past_perfect_continuous",
    "level": "B2",
    "titleFa": "گذشته‌ی کامل استمراری",
    "explFa": "had been + فعل+ing، برای کاری که تا لحظه‌ای مشخص در گذشته، مدتی در حال انجام بوده.\n\nمثال‌ها:\n• He was tired because he had been working (work) all day.\n• They had been playing (play) tennis for an hour before it started raining.\n• She had been studying (study) for hours when I called her.",
    "diag": {
      "q": "He was tired because he ___ (work) all day.",
      "options": [
        "had been working",
        "worked",
        "has been working",
        "was working"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "They ___ (play) tennis for an hour before it started raining.",
        "options": [
          "had been playing",
          "played",
          "have been playing",
          "were playing"
        ],
        "answer": 0
      },
      {
        "q": "She ___ (study) for hours when I called her.",
        "options": [
          "had been studying",
          "studied",
          "has been studying",
          "was studying"
        ],
        "answer": 0
      },
      {
        "q": "We ___ (wait) for ages before the bus finally came.",
        "options": [
          "had been waiting",
          "waited",
          "have been waiting",
          "were waiting"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "future_continuous",
    "level": "B2",
    "titleFa": "آینده‌ی استمراری",
    "explFa": "will be + فعل+ing، برای کاری که در یک لحظه‌ی خاص در آینده در حال انجام خواهد بود.\n\nمثال‌ها:\n• This time tomorrow, I will be flying (fly) to London.\n• At 8 PM tonight, we will be having (have) dinner.\n• She won't be working (not/work) at midnight.",
    "diag": {
      "q": "This time tomorrow, I ___ (fly) to London.",
      "options": [
        "will be flying",
        "fly",
        "am flying",
        "flew"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "At 8 PM tonight, we ___ (have) dinner.",
        "options": [
          "will be having",
          "have",
          "are having",
          "had"
        ],
        "answer": 0
      },
      {
        "q": "She ___ (not/work) at midnight.",
        "options": [
          "won't be working",
          "doesn't work",
          "isn't working",
          "didn't work"
        ],
        "answer": 0
      },
      {
        "q": "___ you (use) the car this evening?",
        "options": [
          "Will...be using",
          "Do...use",
          "Are...using",
          "Did...use"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "future_perfect",
    "level": "B2",
    "titleFa": "آینده‌ی کامل",
    "explFa": "will have + قسمت سوم فعل، برای کاری که تا یک زمان مشخص در آینده تموم خواهد شد.\n\nمثال‌ها:\n• By next year, I will have graduated (graduate).\n• By the time you arrive, we will have finished (finish) dinner.\n• She will have completed (complete) the project by Friday.",
    "diag": {
      "q": "By next year, I ___ (graduate).",
      "options": [
        "will have graduated",
        "graduate",
        "am graduating",
        "graduated"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "By the time you arrive, we ___ (finish) dinner.",
        "options": [
          "will have finished",
          "finish",
          "are finishing",
          "finished"
        ],
        "answer": 0
      },
      {
        "q": "She ___ (complete) the project by Friday.",
        "options": [
          "will have completed",
          "completes",
          "is completing",
          "completed"
        ],
        "answer": 0
      },
      {
        "q": "They ___ (not/leave) by 9 PM.",
        "options": [
          "won't have left",
          "don't leave",
          "aren't leaving",
          "didn't leave"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "future_perfect_continuous",
    "level": "C1",
    "titleFa": "آینده‌ی کامل استمراری",
    "explFa": "will have been + فعل+ing، برای تأکید روی مدت‌زمان یک کار تا یک لحظه‌ی مشخص در آینده.\n\nمثال‌ها:\n• By June, I will have been working (work) here for ten years.\n• By 2030, they will have been living (live) in this city for two decades.\n• She will have been studying (study) for six hours straight by the time the exam starts.",
    "diag": {
      "q": "By June, I ___ (work) here for ten years.",
      "options": [
        "will have been working",
        "have worked",
        "work",
        "worked"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "By 2030, they ___ (live) in this city for two decades.",
        "options": [
          "will have been living",
          "have lived",
          "live",
          "lived"
        ],
        "answer": 0
      },
      {
        "q": "She ___ (study) for six hours straight by the time the exam starts.",
        "options": [
          "will have been studying",
          "has studied",
          "studies",
          "studied"
        ],
        "answer": 0
      },
      {
        "q": "By next month, we ___ (run) this business for five years.",
        "options": [
          "will have been running",
          "have run",
          "run",
          "ran"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "auxiliary_verbs",
    "level": "B1",
    "titleFa": "افعال کمکی",
    "explFa": "افعال کمکی (do, have, will, be...) به‌تنهایی معنی کامل ندارن ولی برای ساختن زمان‌ها، سؤال و منفی لازمن.\n\nمثال‌ها:\n• Has she finished her work?\n• Do you like tea?\n• Are they going to the party?",
    "diag": {
      "q": "___ she finished her work?",
      "options": [
        "Do",
        "Does",
        "Has",
        "Is"
      ],
      "answer": 2
    },
    "exercises": [
      {
        "q": "___ you like tea?",
        "options": [
          "Do",
          "Have",
          "Will",
          "Are"
        ],
        "answer": 0
      },
      {
        "q": "___ they going to the party?",
        "options": [
          "Do",
          "Does",
          "Are",
          "Have"
        ],
        "answer": 2
      },
      {
        "q": "___ you seen this movie?",
        "options": [
          "Do",
          "Does",
          "Have",
          "Are"
        ],
        "answer": 2
      }
    ]
  },
  {
    "id": "modal_verbs",
    "level": "B1",
    "titleFa": "افعال وجهی (Modal Verbs)",
    "explFa": "افعال وجهی (can, could, may, might, must, should, would) بعدشون همیشه فعل ساده (بدون to و بدون s) می‌آد.\n\nمثال‌ها:\n• You should see a doctor if you feel sick.\n• She can speak three languages.\n• May I open the window?",
    "diag": {
      "q": "You ___ see a doctor if you feel sick.",
      "options": [
        "should",
        "shoulds",
        "should to",
        "should ing"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She ___ speak three languages.",
        "options": [
          "can",
          "cans",
          "can to",
          "canning"
        ],
        "answer": 0
      },
      {
        "q": "___ I open the window?",
        "options": [
          "May",
          "Mays",
          "May to",
          "Maying"
        ],
        "answer": 0
      },
      {
        "q": "We ___ finish this by tomorrow.",
        "options": [
          "must",
          "musts",
          "must to",
          "musting"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "semi_modals",
    "level": "B1",
    "titleFa": "نیمه‌وجهی‌ها (have to/need to/ought to)",
    "explFa": "نیمه‌وجهی‌ها از نظر معنی شبیه افعال وجهی‌ان ولی مثل فعل عادی صرف می‌شن.\n\nمثال‌ها:\n• She has to (have to) work on Saturdays.\n• I need to (need to) buy some milk.\n• You ought to (ought to) apologize.",
    "diag": {
      "q": "She ___ (have to) work on Saturdays.",
      "options": [
        "has to",
        "have to",
        "had to",
        "having to"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I ___ (need to) buy some milk.",
        "options": [
          "need to",
          "needs to",
          "needed to",
          "needing to"
        ],
        "answer": 0
      },
      {
        "q": "You ___ (ought to) apologize.",
        "options": [
          "ought to",
          "oughts to",
          "ought",
          "oughting to"
        ],
        "answer": 0
      },
      {
        "q": "They ___ (not/have to) come if they're busy.",
        "options": [
          "don't have to",
          "doesn't have to",
          "not have to",
          "haven't to"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "gerunds",
    "level": "B1",
    "titleFa": "اسم مصدر (Gerunds)",
    "explFa": "gerund یعنی فعل+ing که مثل اسم عمل می‌کنه: Swimming is fun.\n\nمثال‌ها:\n• Swimming is my favorite hobby.\n• She enjoys reading (read) novels.\n• Smoking (smoke) is bad for your health.",
    "diag": {
      "q": "___ is my favorite hobby.",
      "options": [
        "Swim",
        "Swimming",
        "Swam",
        "To swim"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "She enjoys ___ (read) novels.",
        "options": [
          "read",
          "reading",
          "to read",
          "reads"
        ],
        "answer": 1
      },
      {
        "q": "___ (smoke) is bad for your health.",
        "options": [
          "Smoke",
          "Smoking",
          "To smoke",
          "Smoked"
        ],
        "answer": 1
      },
      {
        "q": "He is good at ___ (paint).",
        "options": [
          "paint",
          "painting",
          "to paint",
          "painted"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "infinitives",
    "level": "B1",
    "titleFa": "مصدر با to (Infinitives)",
    "explFa": "infinitive یعنی to + فعل ساده؛ اغلب بعد از بعضی فعل‌ها یا برای بیان هدف به کار می‌ره.\n\nمثال‌ها:\n• I want to go (go) home.\n• She decided to study (study) abroad.\n• He came here to learn (learn) English.",
    "diag": {
      "q": "I want ___ (go) home.",
      "options": [
        "to go",
        "going",
        "go",
        "went"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She decided ___ (study) abroad.",
        "options": [
          "to study",
          "studying",
          "study",
          "studied"
        ],
        "answer": 0
      },
      {
        "q": "He came here ___ (learn) English.",
        "options": [
          "to learn",
          "learning",
          "learn",
          "learned"
        ],
        "answer": 0
      },
      {
        "q": "They plan ___ (travel) next year.",
        "options": [
          "to travel",
          "traveling",
          "travel",
          "traveled"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "gerund_vs_infinitive",
    "level": "B1",
    "titleFa": "Gerund در برابر Infinitive",
    "explFa": "بعضی فعل‌ها فقط gerund می‌گیرن (enjoy, avoid, finish)، بعضی فقط infinitive (want, decide, hope).\n\nمثال‌ها:\n• She avoided answering (answer) the question.\n• I hope to see (see) you soon.\n• We finished eating (eat) dinner.",
    "diag": {
      "q": "She avoided ___ (answer) the question.",
      "options": [
        "answering",
        "to answer",
        "answer",
        "answers"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I hope ___ (see) you soon.",
        "options": [
          "to see",
          "seeing",
          "see",
          "saw"
        ],
        "answer": 0
      },
      {
        "q": "We finished ___ (eat) dinner.",
        "options": [
          "eating",
          "to eat",
          "eat",
          "ate"
        ],
        "answer": 0
      },
      {
        "q": "He wants ___ (become) a doctor.",
        "options": [
          "to become",
          "becoming",
          "become",
          "became"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "comparatives",
    "level": "B1",
    "titleFa": "صفت تفضیلی",
    "explFa": "برای مقایسه‌ی دو چیز: er+ (صفت کوتاه) یا more (صفت بلند)، همراه با than.\n\nمثال‌ها:\n• This book is more interesting than that one.\n• She is taller (tall) than her brother.\n• This test was easier (easy) than the last one.",
    "diag": {
      "q": "This book is ___ than that one.",
      "options": [
        "more interesting",
        "interestinger",
        "most interesting",
        "interesting"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She is ___ (tall) than her brother.",
        "options": [
          "taller",
          "more tall",
          "tallest",
          "tall"
        ],
        "answer": 0
      },
      {
        "q": "This test was ___ (easy) than the last one.",
        "options": [
          "easier",
          "more easy",
          "easiest",
          "easy"
        ],
        "answer": 0
      },
      {
        "q": "My car is ___ (expensive) than yours.",
        "options": [
          "more expensive",
          "expensiver",
          "most expensive",
          "expensive"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "superlatives",
    "level": "B1",
    "titleFa": "صفت برترین",
    "explFa": "برای مقایسه‌ی یک چیز با همه‌ی بقیه: est+ (صفت کوتاه) یا most (صفت بلند) با the قبلش.\n\nمثال‌ها:\n• He is the tallest (tall) student in the class.\n• This is the best (good) day of my life.\n• She is the most intelligent (intelligent) person I know.",
    "diag": {
      "q": "He is the ___ (tall) student in the class.",
      "options": [
        "taller",
        "most tall",
        "tallest",
        "tall"
      ],
      "answer": 2
    },
    "exercises": [
      {
        "q": "This is the ___ (good) day of my life.",
        "options": [
          "gooder",
          "best",
          "better",
          "most good"
        ],
        "answer": 1
      },
      {
        "q": "She is the ___ (intelligent) person I know.",
        "options": [
          "more intelligent",
          "most intelligent",
          "intelligenter",
          "intelligent"
        ],
        "answer": 1
      },
      {
        "q": "That was the ___ (bad) movie ever.",
        "options": [
          "worse",
          "worst",
          "badder",
          "baddest"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "quantifiers",
    "level": "B1",
    "titleFa": "مقدارنماها (few/little/many/much/a lot of)",
    "explFa": "few/little (بدون a) یعنی تقریباً هیچی نیست (منفی)، a few/a little یعنی مقدار کمی هست (مثبت).\n\nمثال‌ها:\n• I have few friends here.\n• She has a little money, so she can buy it.\n• There are a lot of people at the party.",
    "diag": {
      "q": "I have ___ friends here.",
      "options": [
        "few",
        "a few",
        "much",
        "many"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She has ___ money, so she can buy it.",
        "options": [
          "a little",
          "little",
          "many",
          "few"
        ],
        "answer": 0
      },
      {
        "q": "There are ___ people at the party.",
        "options": [
          "a lot of",
          "much",
          "little",
          "a little"
        ],
        "answer": 0
      },
      {
        "q": "He has ___ time left; he needs to hurry.",
        "options": [
          "little",
          "a little",
          "many",
          "a few"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "determiners",
    "level": "B1",
    "titleFa": "تعیین‌کننده‌ها (Determiners)",
    "explFa": "تعیین‌کننده‌ها (this, that, my, some, any, every, each, all, no...) قبل از اسم می‌آن.\n\nمثال‌ها:\n• Every student must bring their book.\n• All of the students passed the exam.\n• There is no milk in the fridge.",
    "diag": {
      "q": "___ student must bring their book.",
      "options": [
        "Every",
        "All",
        "Some",
        "Many"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ of the students passed the exam.",
        "options": [
          "All",
          "Every",
          "Each",
          "Much"
        ],
        "answer": 0
      },
      {
        "q": "There is ___ milk in the fridge.",
        "options": [
          "no",
          "any",
          "every",
          "each"
        ],
        "answer": 0
      },
      {
        "q": "___ day, she goes for a walk.",
        "options": [
          "Every",
          "All",
          "Some",
          "Much"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "conjunctions",
    "level": "B1",
    "titleFa": "حروف ربط هم‌پایه",
    "explFa": "حروف ربط هم‌پایه (and, but, or, so, because) دو جمله یا کلمه‌ی هم‌سطح رو به هم وصل می‌کنن.\n\nمثال‌ها:\n• I was tired, so I went to bed early.\n• She likes tea and coffee.\n• He didn't come because he was sick.",
    "diag": {
      "q": "I was tired, ___ I went to bed early.",
      "options": [
        "so",
        "but",
        "or",
        "and"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She likes tea ___ coffee.",
        "options": [
          "and",
          "but",
          "so",
          "because"
        ],
        "answer": 0
      },
      {
        "q": "He didn't come ___ he was sick.",
        "options": [
          "because",
          "but",
          "or",
          "so"
        ],
        "answer": 0
      },
      {
        "q": "Do you want tea ___ coffee?",
        "options": [
          "or",
          "and",
          "so",
          "but"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "subordinating_conjunctions",
    "level": "B1",
    "titleFa": "حروف ربط وابسته‌ساز",
    "explFa": "حروف ربط وابسته‌ساز (although, because, if, when, since, while...) جمله‌ی وابسته رو به جمله‌ی اصلی وصل می‌کنن.\n\nمثال‌ها:\n• Although it was raining, we went out.\n• I'll call you when I arrive.\n• She stayed home because she was sick.",
    "diag": {
      "q": "___ it was raining, we went out.",
      "options": [
        "Although",
        "And",
        "So",
        "But"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I'll call you ___ I arrive.",
        "options": [
          "when",
          "but",
          "and",
          "or"
        ],
        "answer": 0
      },
      {
        "q": "She stayed home ___ she was sick.",
        "options": [
          "because",
          "but",
          "and",
          "or"
        ],
        "answer": 0
      },
      {
        "q": "___ he is young, he is very wise.",
        "options": [
          "Although",
          "So",
          "And",
          "Because"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "relative_clauses",
    "level": "B1",
    "titleFa": "جملات موصولی",
    "explFa": "who برای افراد، which برای اشیا/حیوانات، that برای هر دو، whose برای مالکیت، where برای مکان.\n\nمثال‌ها:\n• The house whose roof is red belongs to my uncle.\n• The man who lives next door is a doctor.\n• This is the book that I told you about.",
    "diag": {
      "q": "The house ___ roof is red belongs to my uncle.",
      "options": [
        "who",
        "which",
        "whose",
        "that"
      ],
      "answer": 2
    },
    "exercises": [
      {
        "q": "The man ___ lives next door is a doctor.",
        "options": [
          "which",
          "who",
          "whose",
          "where"
        ],
        "answer": 1
      },
      {
        "q": "This is the book ___ I told you about.",
        "options": [
          "who",
          "whose",
          "that",
          "where"
        ],
        "answer": 2
      },
      {
        "q": "My sister, ___ lives in Paris, is visiting us.",
        "options": [
          "who",
          "which",
          "that",
          "whose"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "defining_nondefining_clauses",
    "level": "B1",
    "titleFa": "جملات موصولی تعریفی و توضیحی",
    "explFa": "نوع تعریفی بدون کاما و برای شناسایی دقیق اسم لازمه؛ نوع توضیحی با کاما و فقط اطلاعات اضافه می‌ده.\n\nمثال‌ها:\n• My brother, who lives in Paris, is a chef.\n• The book that I bought yesterday is great.\n• My mother who lives in London is visiting.",
    "diag": {
      "q": "Choose the correctly punctuated sentence:",
      "options": [
        "My brother who lives in Paris is a chef.",
        "My brother, who lives in Paris, is a chef.",
        "My brother who, lives in Paris is a chef.",
        "My, brother who lives in Paris is a chef."
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "Choose the correctly punctuated sentence:",
        "options": [
          "The book that I bought yesterday, is great.",
          "The book, that I bought yesterday, is great.",
          "The book that I bought yesterday is great.",
          "The book that, I bought yesterday is great."
        ],
        "answer": 2
      },
      {
        "q": "Which sentence needs commas (non-defining)?",
        "options": [
          "Students who study hard succeed.",
          "My mother who lives in London is visiting.",
          "The car that broke down is mine.",
          "People who smoke should quit."
        ],
        "answer": 1
      },
      {
        "q": "Choose the correctly punctuated sentence:",
        "options": [
          "Paris, which is the capital of France, is beautiful.",
          "Paris which is the capital of France is beautiful.",
          "Paris, which is the capital of France is beautiful.",
          "Paris which, is the capital of France, is beautiful."
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "adjective_clauses",
    "level": "B1",
    "titleFa": "جملات وابسته‌ی صفتی",
    "explFa": "جمله‌ی وابسته‌ی صفتی، مثل یک صفت بزرگ، اسم قبل از خودش رو توصیف می‌کنه.\n\nمثال‌ها:\n• The woman who called you is my aunt.\n• I have a friend who speaks five languages.\n• The car which I bought last year broke down.",
    "diag": {
      "q": "The woman ___ called you is my aunt.",
      "options": [
        "who",
        "whom",
        "whose",
        "which"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I have a friend ___ speaks five languages.",
        "options": [
          "who",
          "which",
          "whom",
          "whose"
        ],
        "answer": 0
      },
      {
        "q": "The car ___ I bought last year broke down.",
        "options": [
          "who",
          "which",
          "whom",
          "whose"
        ],
        "answer": 1
      },
      {
        "q": "This is the teacher ___ class I loved.",
        "options": [
          "who",
          "which",
          "whom",
          "whose"
        ],
        "answer": 3
      }
    ]
  },
  {
    "id": "noun_clauses",
    "level": "B1",
    "titleFa": "جملات وابسته‌ی اسمی",
    "explFa": "جمله‌ی وابسته‌ی اسمی مثل یک اسم عمل می‌کنه و معمولاً با that/what/if/whether شروع می‌شه.\n\nمثال‌ها:\n• What she said surprised everyone.\n• I don't know if he is coming.\n• What you did was very kind.",
    "diag": {
      "q": "___ she said surprised everyone.",
      "options": [
        "What",
        "Which",
        "Who",
        "Whom"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I don't know ___ he is coming.",
        "options": [
          "if",
          "what",
          "which",
          "who"
        ],
        "answer": 0
      },
      {
        "q": "___ you did was very kind.",
        "options": [
          "What",
          "Which",
          "Who",
          "That"
        ],
        "answer": 0
      },
      {
        "q": "She believes ___ he is honest.",
        "options": [
          "that",
          "what",
          "if",
          "who"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "adverb_clauses",
    "level": "B1",
    "titleFa": "جملات وابسته‌ی قیدی",
    "explFa": "جمله‌ی وابسته‌ی قیدی زمان، مکان، دلیل یا شرط رو نشون می‌ده؛ با when, because, if, although شروع می‌شه.\n\nمثال‌ها:\n• When she arrived, everyone cheered.\n• He left early because he was tired.\n• If you study hard, you will pass.",
    "diag": {
      "q": "___ she arrived, everyone cheered.",
      "options": [
        "When",
        "What",
        "Who",
        "Which"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He left early ___ he was tired.",
        "options": [
          "because",
          "what",
          "who",
          "which"
        ],
        "answer": 0
      },
      {
        "q": "___ you study hard, you will pass.",
        "options": [
          "If",
          "What",
          "Who",
          "Which"
        ],
        "answer": 0
      },
      {
        "q": "She smiled ___ she saw him.",
        "options": [
          "when",
          "what",
          "who",
          "which"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "conditionals_012",
    "level": "B1",
    "titleFa": "جملات شرطی صفر، اول و دوم",
    "explFa": "شرطی صفر برای حقایق همیشگی، اول برای احتمال واقعی در آینده، دوم برای فرض غیرواقعی در حال حاضر.\n\nمثال‌ها:\n• If you heat water, it boils (boil).\n• If it rains, I will stay (stay) home.\n• If I were (be) rich, I would travel the world.",
    "diag": {
      "q": "If you heat water, it ___ (boil).",
      "options": [
        "boils",
        "will boil",
        "boiled",
        "would boil"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "If it rains, I ___ (stay) home.",
        "options": [
          "will stay",
          "would stay",
          "stayed",
          "stay"
        ],
        "answer": 0
      },
      {
        "q": "If I ___ (be) rich, I would travel the world.",
        "options": [
          "am",
          "was",
          "were",
          "be"
        ],
        "answer": 2
      },
      {
        "q": "If you mix red and blue, you ___ (get) purple.",
        "options": [
          "get",
          "will get",
          "got",
          "would get"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "passive_basic",
    "level": "B1",
    "titleFa": "مجهول (Passive Voice) پایه",
    "explFa": "ساختار مجهول: be + قسمت سوم فعل. وقتی خودِ عمل یا گیرنده‌ی عمل مهم‌تر از انجام‌دهنده باشه استفاده می‌شه.\n\nمثال‌ها:\n• The cake was made (make) by my mother.\n• The letter was written (write) by her.\n• This house was built (build) in 1990.",
    "diag": {
      "q": "The cake ___ (make) by my mother.",
      "options": [
        "made",
        "is made",
        "was made",
        "make"
      ],
      "answer": 2
    },
    "exercises": [
      {
        "q": "The letter ___ (write) by her.",
        "options": [
          "wrote",
          "was written",
          "is write",
          "written"
        ],
        "answer": 1
      },
      {
        "q": "This house ___ (build) in 1990.",
        "options": [
          "built",
          "was built",
          "is built",
          "building"
        ],
        "answer": 1
      },
      {
        "q": "English ___ (speak) all over the world.",
        "options": [
          "speaks",
          "is spoken",
          "spoke",
          "speaking"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "phrasal_verbs",
    "level": "B1",
    "titleFa": "افعال عبارتی (Phrasal Verbs)",
    "explFa": "فعل عبارتی از فعل + حرف اضافه/قید تشکیل می‌شه و معنیش معمولاً کاملاً فرق داره با معنی تک‌تکِ کلمات.\n\nمثال‌ها:\n• I need to wake up early tomorrow.\n• She decided to give up smoking.\n• Can you look after my cat while I'm away?",
    "diag": {
      "q": "I need to ___ up early tomorrow.",
      "options": [
        "wake",
        "turn",
        "give",
        "look"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She decided to ___ up smoking.",
        "options": [
          "give",
          "take",
          "look",
          "turn"
        ],
        "answer": 0
      },
      {
        "q": "Can you ___ after my cat while I'm away?",
        "options": [
          "look",
          "turn",
          "give",
          "get"
        ],
        "answer": 0
      },
      {
        "q": "He didn't ___ up for the meeting.",
        "options": [
          "show",
          "give",
          "turn",
          "look"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "collocations",
    "level": "B1",
    "titleFa": "هم‌آیی کلمات (Collocations)",
    "explFa": "collocation یعنی ترکیب‌های طبیعی و پرکاربرد کلمات که با هم می‌آن (مثلاً make a decision، نه do a decision).\n\nمثال‌ها:\n• She wants to make a decision soon.\n• He always makes mistakes.\n• I need to take a shower.",
    "diag": {
      "q": "She wants to ___ a decision soon.",
      "options": [
        "make",
        "do",
        "take",
        "have"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He always ___ mistakes.",
        "options": [
          "does",
          "makes",
          "takes",
          "has"
        ],
        "answer": 1
      },
      {
        "q": "I need to ___ a shower.",
        "options": [
          "make",
          "do",
          "take",
          "have"
        ],
        "answer": 2
      },
      {
        "q": "They ___ a big effort to finish on time.",
        "options": [
          "did",
          "made",
          "took",
          "had"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "conditional_third",
    "level": "B2",
    "titleFa": "شرطی نوع سوم",
    "explFa": "برای فرض غیرواقعی درباره‌ی گذشته، معمولاً همراه با پشیمانی: If + had + p.p., would have + p.p.\n\nمثال‌ها:\n• If she had studied, she would have passed (pass) the exam.\n• If I had known, I would have helped (help) you.\n• If they had left earlier, they wouldn't have missed (not/miss) the train.",
    "diag": {
      "q": "If she had studied, she ___ (pass) the exam.",
      "options": [
        "would pass",
        "would have passed",
        "will pass",
        "passed"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "If I had known, I ___ (help) you.",
        "options": [
          "would help",
          "would have helped",
          "will help",
          "helped"
        ],
        "answer": 1
      },
      {
        "q": "If they had left earlier, they ___ (not/miss) the train.",
        "options": [
          "wouldn't miss",
          "wouldn't have missed",
          "won't miss",
          "didn't miss"
        ],
        "answer": 1
      },
      {
        "q": "She would have come if she ___ (know) about the party.",
        "options": [
          "knew",
          "had known",
          "knows",
          "has known"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "mixed_conditionals",
    "level": "B2",
    "titleFa": "شرطی ترکیبی",
    "explFa": "وقتیه که شرط مربوط به گذشته باشه ولی نتیجه‌اش در حال، یا برعکس: If + had + p.p., would + verb ساده.\n\nمثال‌ها:\n• If she hadn't missed the flight, she would be (be) here now.\n• If I had studied medicine, I would be (be) a doctor now.\n• If he weren't so lazy, he would have finished (finish) the project by now.",
    "diag": {
      "q": "If she hadn't missed the flight, she ___ (be) here now.",
      "options": [
        "would be",
        "would have been",
        "will be",
        "was"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "If I had studied medicine, I ___ (be) a doctor now.",
        "options": [
          "would be",
          "would have been",
          "am",
          "was"
        ],
        "answer": 0
      },
      {
        "q": "If he weren't so lazy, he ___ (finish) the project by now.",
        "options": [
          "would have finished",
          "would finish",
          "will finish",
          "finished"
        ],
        "answer": 0
      },
      {
        "q": "If she were rich, she ___ (buy) that house last year.",
        "options": [
          "would have bought",
          "would buy",
          "will buy",
          "bought"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "passive_advanced",
    "level": "B2",
    "titleFa": "مجهول پیشرفته",
    "explFa": "مجهول در زمان‌های پیچیده‌تر هم به کار می‌ره: Present Perfect Passive، مجهول با افعال وجهی و غیره.\n\nمثال‌ها:\n• The project must be finished (must/finish) by Friday.\n• The report has already been sent (already/send).\n• She was given (give) an award last year.",
    "diag": {
      "q": "The project ___ (must/finish) by Friday.",
      "options": [
        "must be finished",
        "must finish",
        "must have finished",
        "must been finished"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "The report ___ (already/send).",
        "options": [
          "has already been sent",
          "has already sent",
          "was already sent",
          "is already sending"
        ],
        "answer": 0
      },
      {
        "q": "She ___ (give) an award last year.",
        "options": [
          "was given",
          "gave",
          "has given",
          "is given"
        ],
        "answer": 0
      },
      {
        "q": "This problem ___ (can/solve) easily.",
        "options": [
          "can be solved",
          "can solve",
          "can been solved",
          "is can solved"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "causative",
    "level": "B2",
    "titleFa": "ساختار Causative (have/get something done)",
    "explFa": "وقتی کاری رو خودمون انجام نمی‌دیم، یکی دیگه برامون انجامش می‌ده: have/get + مفعول + قسمت سوم فعل.\n\nمثال‌ها:\n• I had my car fixed (have/my car/fix) yesterday.\n• She gets her hair cut (get/her hair/cut) every month.\n• We had the house painted (have/the house/paint) last summer.",
    "diag": {
      "q": "I ___ (have/my car/fix) yesterday.",
      "options": [
        "had my car fixed",
        "fixed my car",
        "have my car fix",
        "had fix my car"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She ___ (get/her hair/cut) every month.",
        "options": [
          "gets her hair cut",
          "cuts her hair",
          "gets cut her hair",
          "has her hair cutting"
        ],
        "answer": 0
      },
      {
        "q": "We ___ (have/the house/paint) last summer.",
        "options": [
          "had the house painted",
          "painted the house",
          "had painted the house",
          "have the house paint"
        ],
        "answer": 0
      },
      {
        "q": "He is going to ___ (get/his teeth/check).",
        "options": [
          "get his teeth checked",
          "check his teeth",
          "get checked his teeth",
          "have his teeth checking"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "reported_speech_statements",
    "level": "B2",
    "titleFa": "نقل قول غیرمستقیم (جملات خبری)",
    "explFa": "در نقل قول غیرمستقیم جملات خبری، زمان فعل معمولاً یک قدم به عقب می‌ره: is→was, will→would.\n\nمثال‌ها:\n• She said, \"I am tired.\" → She said she was tired.\n• He said, \"I will call you.\" → He said he would call me.\n• They said, \"We have finished.\" → They said they had finished.",
    "diag": {
      "q": "She said, \"I am tired.\" → She said she ___ tired.",
      "options": [
        "is",
        "was",
        "were",
        "be"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "He said, \"I will call you.\" → He said he ___ call me.",
        "options": [
          "will",
          "would",
          "can",
          "shall"
        ],
        "answer": 1
      },
      {
        "q": "They said, \"We have finished.\" → They said they ___ finished.",
        "options": [
          "had",
          "have",
          "has",
          "were"
        ],
        "answer": 0
      },
      {
        "q": "\"I saw him yesterday,\" she said. → She said she had seen him ___.",
        "options": [
          "yesterday",
          "the day before",
          "tomorrow",
          "today"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "reported_questions",
    "level": "B2",
    "titleFa": "نقل قول غیرمستقیم (سؤالات)",
    "explFa": "در نقل قول سؤالات، ترتیب جمله مثل جمله‌ی خبری می‌شه و علامت سؤال برداشته می‌شه؛ برای بله/خیر از if/whether استفاده می‌شه.\n\nمثال‌ها:\n• He asked, \"Are you coming?\" → He asked if I was coming.\n• She asked, \"Where do you live?\" → She asked where I lived.\n• They asked, \"What time is it?\" → They asked what time it was.",
    "diag": {
      "q": "He asked, \"Are you coming?\" → He asked if I ___ coming.",
      "options": [
        "was",
        "am",
        "were",
        "be"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She asked, \"Where do you live?\" → She asked where I ___.",
        "options": [
          "lived",
          "live",
          "was living",
          "had lived"
        ],
        "answer": 0
      },
      {
        "q": "They asked, \"What time is it?\" → They asked what time it ___.",
        "options": [
          "was",
          "is",
          "has been",
          "will be"
        ],
        "answer": 0
      },
      {
        "q": "He asked, \"Do you like coffee?\" → He asked ___ I liked coffee.",
        "options": [
          "if",
          "that",
          "what",
          "when"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "reported_commands",
    "level": "B2",
    "titleFa": "نقل قول غیرمستقیم (جملات امری)",
    "explFa": "نقل قول جملات امری با told/asked + مفعول + to + فعل ساده ساخته می‌شه.\n\nمثال‌ها:\n• She said, \"Close the door.\" → She told him to close the door.\n• He said, \"Don't be late.\" → He told me not to be late.\n• The teacher said, \"Open your books.\" → The teacher told us to open our books.",
    "diag": {
      "q": "She said, \"Close the door.\" → She told him ___ the door.",
      "options": [
        "to close",
        "close",
        "closed",
        "closing"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He said, \"Don't be late.\" → He told me ___ late.",
        "options": [
          "not to be",
          "to not be",
          "not being",
          "no be"
        ],
        "answer": 0
      },
      {
        "q": "The teacher said, \"Open your books.\" → The teacher told us ___ our books.",
        "options": [
          "to open",
          "open",
          "opened",
          "opening"
        ],
        "answer": 0
      },
      {
        "q": "She said, \"Please help me.\" → She asked him ___ her.",
        "options": [
          "to help",
          "help",
          "helped",
          "helping"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "time_expressions_tenses",
    "level": "B2",
    "titleFa": "تغییر قیدهای زمان در نقل قول",
    "explFa": "در نقل قول غیرمستقیم، قیدهای زمان و مکان هم عوض می‌شن: today→that day, tomorrow→the next day, here→there.\n\nمثال‌ها:\n• \"I will see you tomorrow,\" she said. → She said she would see me the next day.\n• \"I am here now,\" he said. → He said he was there then.\n• \"I did it yesterday,\" she said. → She said she had done it the day before.",
    "diag": {
      "q": "\"I will see you tomorrow,\" she said. → She said she would see me ___.",
      "options": [
        "the next day",
        "tomorrow",
        "yesterday",
        "today"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "\"I am here now,\" he said. → He said he was ___ then.",
        "options": [
          "there",
          "here",
          "then",
          "now"
        ],
        "answer": 0
      },
      {
        "q": "\"I did it yesterday,\" she said. → She said she had done it ___.",
        "options": [
          "the day before",
          "yesterday",
          "tomorrow",
          "today"
        ],
        "answer": 0
      },
      {
        "q": "\"We will meet next week,\" they said. → They said they would meet ___.",
        "options": [
          "the following week",
          "next week",
          "last week",
          "this week"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "future_in_the_past",
    "level": "B2",
    "titleFa": "آینده در گذشته",
    "explFa": "برای بیان آینده‌ای که از دیدگاه گذشته گفته می‌شه (was/were going to, would).\n\nمثال‌ها:\n• She said she would call (call) me later.\n• I was going to (be going to) leave, but then I changed my mind.\n• He thought it was going to rain (rain), so he took an umbrella.",
    "diag": {
      "q": "She said she ___ (call) me later.",
      "options": [
        "would call",
        "will call",
        "calls",
        "called"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I ___ (be going to) leave, but then I changed my mind.",
        "options": [
          "was going to",
          "am going to",
          "will",
          "would"
        ],
        "answer": 0
      },
      {
        "q": "He thought it ___ (rain), so he took an umbrella.",
        "options": [
          "was going to rain",
          "will rain",
          "rains",
          "would raining"
        ],
        "answer": 0
      },
      {
        "q": "We ___ (be going to) visit them, but we ran out of time.",
        "options": [
          "were going to",
          "are going to",
          "will",
          "would"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "participle_clauses",
    "level": "B2",
    "titleFa": "جملات وابسته با فعل ing/شده",
    "explFa": "جمله‌ی وابسته‌ی کوتاه‌شده با فعل+ing (فعال) یا قسمت سوم فعل (مفعول) به‌جای یک جمله‌ی کامل به کار می‌ره.\n\nمثال‌ها:\n• Feeling (feel) tired, she went to bed early.\n• Written (write) in 1990, the book is still popular.\n• Not knowing (not/know) what to do, he called his friend.",
    "diag": {
      "q": "___ (feel) tired, she went to bed early.",
      "options": [
        "Feeling",
        "Felt",
        "Feel",
        "To feel"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ (write) in 1990, the book is still popular.",
        "options": [
          "Written",
          "Writing",
          "Write",
          "To write"
        ],
        "answer": 0
      },
      {
        "q": "___ (not/know) what to do, he called his friend.",
        "options": [
          "Not knowing",
          "Not know",
          "Not to know",
          "Knowing not"
        ],
        "answer": 0
      },
      {
        "q": "The man ___ (stand) near the door is my uncle.",
        "options": [
          "standing",
          "stood",
          "stands",
          "to stand"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "reduced_relative_clauses",
    "level": "B2",
    "titleFa": "جملات موصولی کوتاه‌شده",
    "explFa": "وقتی who/which/that + be رو حذف می‌کنیم و فقط فعل+ing یا قسمت سوم فعل می‌مونه.\n\nمثال‌ها:\n• The man talking (talk) to Sarah is my boss.\n• The letter sent (send) yesterday hasn't arrived yet.\n• Students wanting (want) to pass must study hard.",
    "diag": {
      "q": "The man ___ (talk) to Sarah is my boss.",
      "options": [
        "talking",
        "talked",
        "talks",
        "to talk"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "The letter ___ (send) yesterday hasn't arrived yet.",
        "options": [
          "sent",
          "sending",
          "sends",
          "to send"
        ],
        "answer": 0
      },
      {
        "q": "Students ___ (want) to pass must study hard.",
        "options": [
          "wanting",
          "wanted",
          "want",
          "to want"
        ],
        "answer": 0
      },
      {
        "q": "The car ___ (park) outside is mine.",
        "options": [
          "parked",
          "parking",
          "parks",
          "to park"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "linking_words",
    "level": "B2",
    "titleFa": "کلمات ربطی رسمی",
    "explFa": "کلمات ربطی رسمی مثل however, therefore, moreover برای وصل کردن ایده‌ها بین جمله‌ها به کار می‌رن.\n\nمثال‌ها:\n• It was raining. However, we decided to go for a walk.\n• She studied hard. Therefore, she passed the exam.\n• He is rich. However, he is not happy.",
    "diag": {
      "q": "It was raining. ___, we decided to go for a walk.",
      "options": [
        "However",
        "Because",
        "So",
        "And"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She studied hard. ___, she passed the exam.",
        "options": [
          "Therefore",
          "However",
          "Although",
          "Despite"
        ],
        "answer": 0
      },
      {
        "q": "He is rich. ___, he is not happy.",
        "options": [
          "However",
          "Therefore",
          "So",
          "Because"
        ],
        "answer": 0
      },
      {
        "q": "The plan failed. ___, we tried a new approach.",
        "options": [
          "Therefore",
          "Moreover",
          "Although",
          "In spite of"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "discourse_markers",
    "level": "B2",
    "titleFa": "نشانگرهای گفتمان محاوره‌ای",
    "explFa": "نشانگرهای گفتمان (well, actually, by the way, anyway) بیشتر در مکالمه‌ی غیررسمی برای مدیریت جریان صحبت به کار می‌رن.\n\nمثال‌ها:\n• Well, I think we should leave now.\n• By the way, did you hear about the new manager?\n• Actually, I don't really agree with that.",
    "diag": {
      "q": "___, I think we should leave now.",
      "options": [
        "Well",
        "Moreover",
        "Furthermore",
        "Hence"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___, did you hear about the new manager?",
        "options": [
          "By the way",
          "Therefore",
          "Hence",
          "Thus"
        ],
        "answer": 0
      },
      {
        "q": "___, I don't really agree with that.",
        "options": [
          "Actually",
          "Moreover",
          "Hence",
          "Thus"
        ],
        "answer": 0
      },
      {
        "q": "___, let's get back to work.",
        "options": [
          "Anyway",
          "Hence",
          "Thus",
          "Therefore"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "emphasis_do",
    "level": "B2",
    "titleFa": "تأکید با do/does/did",
    "explFa": "از do/does/did قبل از فعل ساده برای تأکید استفاده می‌شه.\n\nمثال‌ها:\n• I do (do) tell you the truth!\n• She does (do) love him, even though she left.\n• He did (do) finish his homework, I saw him.",
    "diag": {
      "q": "I ___ (do) tell you the truth!",
      "options": [
        "did",
        "do",
        "does",
        "done"
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "She ___ (do) love him, even though she left.",
        "options": [
          "did",
          "does",
          "do",
          "done"
        ],
        "answer": 1
      },
      {
        "q": "He ___ (do) finish his homework, I saw him.",
        "options": [
          "did",
          "does",
          "do",
          "done"
        ],
        "answer": 0
      },
      {
        "q": "We ___ (do) enjoy the party!",
        "options": [
          "did",
          "do",
          "does",
          "done"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "so_such",
    "level": "B2",
    "titleFa": "ساختار so و such",
    "explFa": "so + صفت/قید، such + (a/an) + صفت + اسم؛ هر دو برای تأکید و نتیجه به کار می‌رن.\n\nمثال‌ها:\n• It was so hot that we stayed inside.\n• She is such a kind person.\n• It was such a good movie!",
    "diag": {
      "q": "It was ___ hot that we stayed inside.",
      "options": [
        "so",
        "such",
        "such a",
        "so a"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She is ___ kind person.",
        "options": [
          "so",
          "such a",
          "such",
          "so a"
        ],
        "answer": 1
      },
      {
        "q": "It was ___ good movie!",
        "options": [
          "so",
          "such a",
          "such",
          "so a"
        ],
        "answer": 1
      },
      {
        "q": "He speaks ___ fast that I can't understand him.",
        "options": [
          "so",
          "such",
          "such a",
          "so a"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "too_enough",
    "level": "B2",
    "titleFa": "ساختار too و enough",
    "explFa": "too + صفت یعنی «بیش از حد» (منفی)، صفت + enough یعنی «به‌اندازه‌ی کافی».\n\nمثال‌ها:\n• This coffee is too hot to drink.\n• She isn't old enough to drive.\n• The box is too heavy to lift.",
    "diag": {
      "q": "This coffee is ___ hot to drink.",
      "options": [
        "too",
        "enough",
        "so",
        "such"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "She isn't old ___ to drive.",
        "options": [
          "too",
          "enough",
          "so",
          "such"
        ],
        "answer": 1
      },
      {
        "q": "The box is ___ heavy to lift.",
        "options": [
          "too",
          "enough",
          "so",
          "such"
        ],
        "answer": 0
      },
      {
        "q": "Is the soup warm ___?",
        "options": [
          "too",
          "enough",
          "so",
          "such"
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "inversion",
    "level": "C1",
    "titleFa": "وارونگی (Inversion)",
    "explFa": "با قیدهای منفی یا محدودکننده (never, rarely, not only) در ابتدای جمله، ترتیب فعل کمکی و فاعل برعکس می‌شه.\n\nمثال‌ها:\n• Never have I seen such a beautiful place.\n• Not until later did she realize her mistake.\n• Not only was he tired, but he was also hungry.",
    "diag": {
      "q": "___ have I seen such a beautiful place.",
      "options": [
        "Never",
        "I never",
        "Never I",
        "Not never"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ did she realize her mistake.",
        "options": [
          "Not until later",
          "She not until later",
          "Until later not",
          "Not she until later"
        ],
        "answer": 0
      },
      {
        "q": "___ was he tired, but he was also hungry.",
        "options": [
          "Not only",
          "He not only",
          "Only not",
          "Not he only"
        ],
        "answer": 0
      },
      {
        "q": "___ do we see such dedication.",
        "options": [
          "Rarely",
          "We rarely",
          "Rarely we",
          "Not rarely"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "advanced_modals",
    "level": "C1",
    "titleFa": "ساختارهای وجهی پیشرفته (must have/might have)",
    "explFa": "فعل وجهی + have + قسمت سوم فعل برای حدس‌زدن یا نتیجه‌گیری درباره‌ی گذشته: must have (حتماً)، might have (شاید)، should have (پشیمانی).\n\nمثال‌ها:\n• She must have left (must/leave) already; her car isn't here.\n• He might have forgotten (might/forget) about the meeting.\n• You should have told (should/tell) me earlier!",
    "diag": {
      "q": "She ___ (must/leave) already; her car isn't here.",
      "options": [
        "must have left",
        "must leave",
        "must left",
        "must be leaving"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He ___ (might/forget) about the meeting.",
        "options": [
          "might have forgotten",
          "might forget",
          "might forgot",
          "might be forgetting"
        ],
        "answer": 0
      },
      {
        "q": "You ___ (should/tell) me earlier!",
        "options": [
          "should have told",
          "should tell",
          "should told",
          "should be telling"
        ],
        "answer": 0
      },
      {
        "q": "They ___ (can't/know) about the surprise.",
        "options": [
          "can't have known",
          "can't know",
          "can't knew",
          "can't be knowing"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "ellipsis",
    "level": "C1",
    "titleFa": "حذف (Ellipsis)",
    "explFa": "در انگلیسی طبیعی، بعضی کلمات تکراری برای روان‌تر شدن جمله حذف می‌شن.\n\nمثال‌ها:\n• She can speak French, and he can too. (فعل speak French حذف شده)\n• I like tea, and she does too. (فعل like tea حذف شده)\n• He wanted to go, but I didn't want to. (فعل go حذف شده)",
    "diag": {
      "q": "She can speak French, and he can ___ too.",
      "options": [
        "",
        "speak French",
        "can speak",
        "does"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "I like tea, and she does ___.",
        "options": [
          "",
          "like tea",
          "likes",
          "is"
        ],
        "answer": 0
      },
      {
        "q": "He wanted to go, but I didn't want ___.",
        "options": [
          "to",
          "to go",
          "going",
          "go"
        ],
        "answer": 0
      },
      {
        "q": "Some people like coffee; others ___.",
        "options": [
          "don't",
          "do not like",
          "not like",
          "no like"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "substitution",
    "level": "C1",
    "titleFa": "جایگزینی (one/ones/do so)",
    "explFa": "به‌جای تکرار یک اسم یا فعل، از کلماتی مثل one/ones یا do so استفاده می‌کنیم.\n\nمثال‌ها:\n• I don't have a pen. Can I borrow one?\n• These shoes are old; I need new ones.\n• He passed the exam, and so did his sister.",
    "diag": {
      "q": "I don't have a pen. Can I borrow ___?",
      "options": [
        "one",
        "it",
        "that",
        "some"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "These shoes are old; I need new ___.",
        "options": [
          "ones",
          "one",
          "them",
          "it"
        ],
        "answer": 0
      },
      {
        "q": "He passed the exam, and so ___ his sister.",
        "options": [
          "did",
          "done",
          "do",
          "was"
        ],
        "answer": 0
      },
      {
        "q": "I want the red apple, not the green ___.",
        "options": [
          "one",
          "ones",
          "it",
          "that"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "fronting",
    "level": "C1",
    "titleFa": "پیش‌آوردن (Fronting)",
    "explFa": "fronting یعنی آوردن قسمتی از جمله (که معمولاً آخر می‌آد) به ابتدای جمله برای تأکید بیشتر.\n\nمثال‌ها:\n• Such beauty, I have never seen.\n• All her money she gave to the poor.\n• On the hill stood a huge castle.",
    "diag": {
      "q": "___, I have never seen.",
      "options": [
        "Such beauty",
        "I have such beauty",
        "Beauty such",
        "Never such beauty"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ she gave to the poor.",
        "options": [
          "All her money",
          "She gave all her money",
          "Money all her",
          "Her all money"
        ],
        "answer": 0
      },
      {
        "q": "___ stood a huge castle.",
        "options": [
          "On the hill",
          "A huge castle on the hill",
          "The hill on",
          "Huge on the hill"
        ],
        "answer": 0
      },
      {
        "q": "___ I could never forget.",
        "options": [
          "That day",
          "I could never forget that day",
          "Day that",
          "Never that day"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "cleft_sentences",
    "level": "C1",
    "titleFa": "جملات شکافته (Cleft Sentences)",
    "explFa": "جملات cleft با It یا What شروع می‌شن و برای تأکید ویژه روی یک بخش از جمله به کار می‌رن.\n\nمثال‌ها:\n• It was John who broke the window.\n• What I need is a good night's sleep.\n• It was in 1990 that they got married.",
    "diag": {
      "q": "___ was John who broke the window.",
      "options": [
        "It",
        "What",
        "This",
        "That"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "___ I need is a good night's sleep.",
        "options": [
          "What",
          "It",
          "This",
          "Which"
        ],
        "answer": 0
      },
      {
        "q": "___ was in 1990 that they got married.",
        "options": [
          "It",
          "What",
          "This",
          "Which"
        ],
        "answer": 0
      },
      {
        "q": "___ she wants is more free time.",
        "options": [
          "What",
          "It",
          "This",
          "Which"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "nominalization",
    "level": "C1",
    "titleFa": "اسم‌سازی (Nominalization)",
    "explFa": "nominalization یعنی تبدیل فعل یا صفت به اسم (decide→decision, important→importance)؛ در نوشتار رسمی/آکادمیک رایجه.\n\nمثال‌ها:\n• The committee reached a decision (decide) after long discussion.\n• The importance (important) of this issue cannot be overstated.\n• Their arrival (arrive) was delayed by traffic.",
    "diag": {
      "q": "The committee reached a ___ (decide) after long discussion.",
      "options": [
        "decision",
        "deciding",
        "decisive",
        "decide"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "The ___ (important) of this issue cannot be overstated.",
        "options": [
          "importance",
          "important",
          "importantly",
          "importing"
        ],
        "answer": 0
      },
      {
        "q": "Their ___ (arrive) was delayed by traffic.",
        "options": [
          "arrival",
          "arriving",
          "arrive",
          "arrived"
        ],
        "answer": 0
      },
      {
        "q": "The ___ (develop) of the project took two years.",
        "options": [
          "development",
          "developing",
          "develop",
          "developed"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "hedging_language",
    "level": "C1",
    "titleFa": "زبان محتاطانه (Hedging)",
    "explFa": "hedging یعنی استفاده از عبارات محتاطانه (seem, tend to, might) برای کمتر قطعی نشون دادن یک ادعا، مخصوصاً در نوشتار آکادمیک.\n\nمثال‌ها:\n• The results seem to suggest a strong correlation.\n• It could be argued that the policy failed.\n• This tends to indicate a change in behavior.",
    "diag": {
      "q": "The results ___ suggest a strong correlation.",
      "options": [
        "seem to",
        "are",
        "definitely",
        "must"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "It ___ be argued that the policy failed.",
        "options": [
          "could",
          "is",
          "was",
          "has"
        ],
        "answer": 0
      },
      {
        "q": "This ___ to indicate a change in behavior.",
        "options": [
          "tends",
          "is",
          "was",
          "has been"
        ],
        "answer": 0
      },
      {
        "q": "There ___ be some truth to this claim.",
        "options": [
          "might",
          "is",
          "are",
          "was"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "parallel_structures",
    "level": "C1",
    "titleFa": "ساختار موازی (Parallelism)",
    "explFa": "parallelism یعنی استفاده از ساختار گرامری یکسان برای چند بخشی که در یک لیست یا مقایسه با هم می‌آن.\n\nمثال‌ها:\n• She likes swimming, running, and cycling.\n• He wants to eat, sleep, and relax.\n• Not only is she smart but also hardworking.",
    "diag": {
      "q": "She likes swimming, running, and ___.",
      "options": [
        "cycling",
        "to cycle",
        "cycle",
        "cycled"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He wants to eat, sleep, and ___.",
        "options": [
          "relax",
          "relaxing",
          "relaxed",
          "relaxes"
        ],
        "answer": 0
      },
      {
        "q": "Not only is she smart but also ___.",
        "options": [
          "hardworking",
          "she works hard",
          "works hard",
          "worked hard"
        ],
        "answer": 0
      },
      {
        "q": "The manager was efficient, organized, and ___.",
        "options": [
          "reliable",
          "reliably",
          "relying",
          "relied"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "advanced_relative_clauses",
    "level": "C1",
    "titleFa": "جملات موصولی پیشرفته",
    "explFa": "در جملات موصولی پیشرفته، حرف اضافه می‌تونه قبل از whom/which بیاد (روش رسمی‌تر: to whom, in which).\n\nمثال‌ها:\n• This is the woman about whom I told you about.\n• The house in which we grew up was sold.\n• She is the person whose opinion I trust most.",
    "diag": {
      "q": "This is the woman ___ I told you about.",
      "options": [
        "about whom",
        "who",
        "whose",
        "whom"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "The house ___ we grew up was sold.",
        "options": [
          "in which",
          "which",
          "who",
          "whom"
        ],
        "answer": 0
      },
      {
        "q": "She is the person ___ opinion I trust most.",
        "options": [
          "whose",
          "who",
          "whom",
          "which"
        ],
        "answer": 0
      },
      {
        "q": "The colleague ___ I collaborated closely has resigned.",
        "options": [
          "with whom",
          "who",
          "which",
          "whose"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "complex_sentence_structures",
    "level": "C1",
    "titleFa": "ساختارهای جمله‌ی پیچیده",
    "explFa": "جملات پیچیده از ترکیب چند جمله‌ی وابسته و مستقل ساخته می‌شن؛ نوشتن روان و درست این جملات نشونه‌ی تسلط بالای زبانیه.\n\nمثال‌ها:\n• Although it was raining, we went hiking and got wet.\n• Because she was tired, she went to bed early after finishing her work.\n• While I was cooking dinner, the phone rang, so I answered it.",
    "diag": {
      "q": "Choose the grammatically correct sentence:",
      "options": [
        "Although it was raining, we went hiking, we got wet.",
        "Although it was raining, we went hiking and got wet.",
        "It was raining, although we went hiking we got wet.",
        "We went hiking, although it was raining, and, we got wet."
      ],
      "answer": 1
    },
    "exercises": [
      {
        "q": "Choose the grammatically correct sentence:",
        "options": [
          "Because she was tired she went to bed early after finishing her work.",
          "Because she was tired, she went to bed early after finishing her work.",
          "She was tired because went to bed early, after finishing her work.",
          "Tired because she was, went to bed early."
        ],
        "answer": 1
      },
      {
        "q": "Choose the grammatically correct sentence:",
        "options": [
          "While I was cooking dinner, and the phone rang, I answered it.",
          "While I was cooking dinner, the phone rang, so I answered it.",
          "I was cooking dinner while the phone rang I answered it.",
          "The phone rang while cooking dinner I answered."
        ],
        "answer": 1
      },
      {
        "q": "Choose the grammatically correct sentence:",
        "options": [
          "Even though he studied hard he still, failed the exam surprisingly.",
          "Even though he studied hard, he still failed the exam, which surprised everyone.",
          "He studied hard even though, failed the exam surprised everyone.",
          "Failed the exam even though studied hard, surprised."
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "formal_informal_grammar",
    "level": "C1",
    "titleFa": "گرامر رسمی در برابر محاوره‌ای",
    "explFa": "نوشتار رسمی از ساختارهای کامل‌تر و کلمات رسمی‌تر استفاده می‌کنه و از contractions کمتر استفاده می‌شه.\n\nمثال‌ها:\n• I would like to request more information.\n• I am unable to attend.\n• Sorry, we can't do that.",
    "diag": {
      "q": "Which is more formal?",
      "options": [
        "I would like to request more information.",
        "Can you tell me stuff?",
        "Gimme more info.",
        "I wanna know more."
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "Which is more formal?",
        "options": [
          "I can't make it.",
          "I am unable to attend.",
          "I ain't coming.",
          "Can't come, sorry."
        ],
        "answer": 1
      },
      {
        "q": "Which is more informal?",
        "options": [
          "We regret to inform you...",
          "Sorry, we can't do that.",
          "We are unable to proceed.",
          "Please be advised that..."
        ],
        "answer": 1
      },
      {
        "q": "Which is more formal?",
        "options": [
          "Kids these days...",
          "Children nowadays tend to...",
          "Kids nowadays be like...",
          "Kids today, ugh."
        ],
        "answer": 1
      }
    ]
  },
  {
    "id": "cohesion_coherence",
    "level": "C1",
    "titleFa": "انسجام متنی (Cohesion & Coherence)",
    "explFa": "cohesion یعنی اتصال جمله‌ها با ابزارهای زبانی (ضمایر، حروف ربط)، coherence یعنی منطقی و قابل‌فهم بودن کلیت متن.\n\nمثال‌ها:\n• As a result, unemployment has risen sharply.\n• He studied hard. Consequently, he passed with top marks.\n• First, we gather data. Then, we analyze it.",
    "diag": {
      "q": "Choose the sentence that best follows: 'The economy is struggling.'",
      "options": [
        "As a result, unemployment has risen sharply.",
        "Cats are popular pets.",
        "The weather was sunny yesterday.",
        "She enjoys reading novels."
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "He studied hard. ___, he passed with top marks.",
        "options": [
          "Consequently",
          "However",
          "Meanwhile",
          "Nevertheless"
        ],
        "answer": 0
      },
      {
        "q": "First, we gather data. ___, we analyze it.",
        "options": [
          "Then",
          "However",
          "Although",
          "Despite"
        ],
        "answer": 0
      },
      {
        "q": "She loves music. ___, she plays three instruments.",
        "options": [
          "In fact",
          "However",
          "Otherwise",
          "Unless"
        ],
        "answer": 0
      }
    ]
  },
  {
    "id": "register_style",
    "level": "C1",
    "titleFa": "ثبت زبانی و سبک نوشتار (Register & Style)",
    "explFa": "register یعنی سطح رسمیت و لحن متناسب با موقعیت؛ انتخاب درست واژگان و ساختار بر اساس مخاطب و هدف نوشتار اهمیت زیادی داره.\n\nمثال‌ها:\n• Formal, objective language\n• I am writing to express my interest in this position.\n• Sure, I'm in!",
    "diag": {
      "q": "Which register fits an academic essay?",
      "options": [
        "Formal, objective language",
        "Casual slang",
        "Text-message abbreviations",
        "Emotional exclamations"
      ],
      "answer": 0
    },
    "exercises": [
      {
        "q": "Which sentence fits a job application email?",
        "options": [
          "Hey, what's up? I want the job.",
          "I am writing to express my interest in this position.",
          "Yo, hire me pls.",
          "I wanna work there, sounds cool."
        ],
        "answer": 1
      },
      {
        "q": "Which fits a casual text to a friend?",
        "options": [
          "I would be delighted to join you.",
          "Sure, I'm in!",
          "I hereby confirm my attendance.",
          "Please be advised I will attend."
        ],
        "answer": 1
      },
      {
        "q": "Which fits a formal report?",
        "options": [
          "The data indicate a significant increase.",
          "The numbers went up a ton.",
          "Stuff got way better.",
          "Things kinda improved, I guess."
        ],
        "answer": 0
      }
    ]
  }
];

const IRREGULAR_VERBS = [
  {base:'be', past:'was/were', pp:'been'}, {base:'become', past:'became', pp:'become'},
  {base:'begin', past:'began', pp:'begun'}, {base:'break', past:'broke', pp:'broken'},
  {base:'bring', past:'brought', pp:'brought'}, {base:'build', past:'built', pp:'built'},
  {base:'buy', past:'bought', pp:'bought'}, {base:'catch', past:'caught', pp:'caught'},
  {base:'choose', past:'chose', pp:'chosen'}, {base:'come', past:'came', pp:'come'},
  {base:'cost', past:'cost', pp:'cost'}, {base:'cut', past:'cut', pp:'cut'},
  {base:'do', past:'did', pp:'done'}, {base:'draw', past:'drew', pp:'drawn'},
  {base:'drink', past:'drank', pp:'drunk'}, {base:'drive', past:'drove', pp:'driven'},
  {base:'eat', past:'ate', pp:'eaten'}, {base:'fall', past:'fell', pp:'fallen'},
  {base:'feel', past:'felt', pp:'felt'}, {base:'find', past:'found', pp:'found'},
  {base:'fly', past:'flew', pp:'flown'}, {base:'forget', past:'forgot', pp:'forgotten'},
  {base:'get', past:'got', pp:'gotten/got'}, {base:'give', past:'gave', pp:'given'},
  {base:'go', past:'went', pp:'gone'}, {base:'grow', past:'grew', pp:'grown'},
  {base:'have', past:'had', pp:'had'}, {base:'hear', past:'heard', pp:'heard'},
  {base:'hide', past:'hid', pp:'hidden'}, {base:'hit', past:'hit', pp:'hit'},
  {base:'hold', past:'held', pp:'held'}, {base:'keep', past:'kept', pp:'kept'},
  {base:'know', past:'knew', pp:'known'}, {base:'leave', past:'left', pp:'left'},
  {base:'lend', past:'lent', pp:'lent'}, {base:'let', past:'let', pp:'let'},
  {base:'lose', past:'lost', pp:'lost'}, {base:'make', past:'made', pp:'made'},
  {base:'mean', past:'meant', pp:'meant'}, {base:'meet', past:'met', pp:'met'},
  {base:'pay', past:'paid', pp:'paid'}, {base:'put', past:'put', pp:'put'},
  {base:'read', past:'read', pp:'read'}, {base:'ride', past:'rode', pp:'ridden'},
  {base:'ring', past:'rang', pp:'rung'}, {base:'rise', past:'rose', pp:'risen'},
  {base:'run', past:'ran', pp:'run'}, {base:'say', past:'said', pp:'said'},
  {base:'see', past:'saw', pp:'seen'}, {base:'sell', past:'sold', pp:'sold'},
  {base:'send', past:'sent', pp:'sent'}, {base:'set', past:'set', pp:'set'},
  {base:'shoot', past:'shot', pp:'shot'}, {base:'show', past:'showed', pp:'shown'},
  {base:'shut', past:'shut', pp:'shut'}, {base:'sing', past:'sang', pp:'sung'},
  {base:'sit', past:'sat', pp:'sat'}, {base:'sleep', past:'slept', pp:'slept'},
  {base:'speak', past:'spoke', pp:'spoken'}, {base:'spend', past:'spent', pp:'spent'},
  {base:'stand', past:'stood', pp:'stood'}, {base:'steal', past:'stole', pp:'stolen'},
  {base:'swim', past:'swam', pp:'swum'}, {base:'take', past:'took', pp:'taken'},
  {base:'teach', past:'taught', pp:'taught'}, {base:'tell', past:'told', pp:'told'},
  {base:'think', past:'thought', pp:'thought'}, {base:'throw', past:'threw', pp:'thrown'},
  {base:'understand', past:'understood', pp:'understood'}, {base:'wake', past:'woke', pp:'woken'},
  {base:'wear', past:'wore', pp:'worn'}, {base:'win', past:'won', pp:'won'},
  {base:'write', past:'wrote', pp:'written'}
];

const GRAMMAR_LEVELS = ['A1','A2','B1','B2','C1'];
const PLACEMENT_SAMPLE_SIZE = 4;

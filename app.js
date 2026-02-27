/* =========================================
   PURRSONALITY — App Logic
   Cat breeds · Quiz engine · Results
   ========================================= */

// ---- CAT BREEDS DATA ----
// All data is static/hardcoded — no user input rendered as HTML
const breeds = [
    {
        id: 'ragdoll',
        emoji: '🥰',
        name: 'Ragdoll',
        tagline: '"Hold me, love me, never let me go"',
        description: 'Goes completely limp when picked up. Literally melts into your arms like warm butter. Follows you everywhere, including the bathroom. Especially the bathroom.',
        traits: ['Clingy in a cute way', 'Total softie', 'Floppy', 'Loyal'],
        energy: 35,
        affection: 95,
        sass: 15,
        bio: 'Looking for someone who wants to be followed to every room. I don\'t believe in personal space — I believe in lap space. Swipe right if you enjoy being stared at with pure devotion.',
        likes: 'Being held, belly rubs, following you to the bathroom',
        dislikes: 'Closed doors, being alone for 5 minutes',
        ideal_date: 'Netflix on the couch. I\'ll be on your lap the entire time.',
        ick: 'People who say "I need space"',
        chaos_reason: 'They literally go boneless — maximum emotional surrender'
    },
    {
        id: 'bengal',
        emoji: '🐆',
        name: 'Bengal',
        tagline: '"Rules are just suggestions I haven\'t broken yet"',
        description: 'Wild leopard energy trapped in a house cat body. Will climb your curtains, knock things off shelves on purpose, and look stunning while doing it. Pure chaos, zero regrets.',
        traits: ['Chaos agent', 'Athlete', 'Loud & proud', 'Gorgeous menace'],
        energy: 98,
        affection: 55,
        sass: 90,
        bio: 'Yes, I knocked your glass off the table. Yes, I\'d do it again. Adventure-seeking thrill cat looking for someone who doesn\'t own fragile things. Swipe right if you can keep up.',
        likes: 'Climbing, running water, knocking things over',
        dislikes: 'Sitting still, boring routines, being ignored',
        ideal_date: 'Parkour through the house at 3am. You watch.',
        ick: 'People who say "calm down"',
        chaos_reason: 'They treat your home like a parkour course and look fabulous doing it'
    },
    {
        id: 'siamese',
        emoji: '💅',
        name: 'Siamese',
        tagline: '"I have opinions, and you WILL hear them"',
        description: 'The most vocal cat in existence. Will scream about dinner, breakfast, the void, and that bird outside. Incredibly smart. Will manipulate you and look gorgeous while doing it.',
        traits: ['Loud', 'Dramatic', 'Genius-level IQ', 'Main character'],
        energy: 80,
        affection: 70,
        sass: 100,
        bio: 'I\'ll talk, you\'ll listen. Looking for someone who appreciates strong opinions delivered at maximum volume. I\'m not bossy — I\'m a visionary. Big personality, bigger meow.',
        likes: 'Monologuing, being the center of attention, judging you',
        dislikes: 'Being interrupted, being wrong (never happens)',
        ideal_date: 'A dinner where I critique everything on your plate.',
        ick: 'People who shush me',
        chaos_reason: 'They will narrate your entire life whether you asked or not'
    },
    {
        id: 'persian',
        emoji: '👑',
        name: 'Persian',
        tagline: '"I woke up like this. Flawless."',
        description: 'The supermodel of cats. Luxurious coat, squished face, and an attitude that says "I\'m better than you and we both know it." Prefers a throne to a cat bed.',
        traits: ['Regal', 'Lazy-chic', 'High maintenance', 'Unbothered'],
        energy: 20,
        affection: 60,
        sass: 85,
        bio: 'I don\'t do tricks. I do photoshoots. Looking for someone who appreciates luxury, silence, and the occasional slow blink. Must be willing to brush my fur daily. Non-negotiable.',
        likes: 'Being brushed, quiet rooms, expensive things',
        dislikes: 'Loud noises, getting dirty, peasant behavior',
        ideal_date: 'A spa day. Just for me. You hold the towel.',
        ick: 'Running. In general.',
        chaos_reason: 'They\'ll spend your rent money on grooming products and feel nothing'
    },
    {
        id: 'maine_coon',
        emoji: '🧸',
        name: 'Maine Coon',
        tagline: '"I\'m basically a small, furry human"',
        description: 'The gentle giant. Size of a small dog, brain of a problem-solver, heart of pure gold. Loves water (weird, we know), playing fetch, and being everyone\'s best friend.',
        traits: ['Gentle giant', 'Dog-like', 'Chill AF', 'Smarty pants'],
        energy: 65,
        affection: 85,
        sass: 30,
        bio: 'Yes, I\'m this big. Yes, I\'m this sweet. Looking for someone who wants a cat with golden retriever energy. I play fetch, I love water, and I weigh more than your expectations.',
        likes: 'Fetch, water, headbutts, snow',
        dislikes: 'Small spaces, being underestimated',
        ideal_date: 'A hike, then couch time. I carry my own weight.',
        ick: 'People who think cats can\'t be loyal',
        chaos_reason: 'They\'re so big they knock things over just by existing'
    },
    {
        id: 'sphynx',
        emoji: '👽',
        name: 'Sphynx',
        tagline: '"Naked and not sorry about it"',
        description: 'Hairless, fearless, and zero chill. This alien-looking cat is the biggest extrovert you\'ll ever meet. Wants to be touching you at all times. Will greet your guests. ALL of them.',
        traits: ['Extrovert supreme', 'Warm blob', 'Needy', 'Fearless'],
        energy: 88,
        affection: 95,
        sass: 65,
        bio: 'Yes, I\'m naked. Get over it. I\'m also the warmest, most cuddly creature you\'ll ever meet. I need constant body heat (yours). Swipe right if you don\'t mind sharing your blanket forever.',
        likes: 'Body heat, meeting new people, wearing sweaters',
        dislikes: 'Cold weather, being alone, your judgement',
        ideal_date: 'Cuddling under a heated blanket. With your guests.',
        ick: 'People who say "ew, it\'s hairless"',
        chaos_reason: 'They look like a raw chicken but have the audacity of a supermodel'
    },
    {
        id: 'scottish_fold',
        emoji: '🥺',
        name: 'Scottish Fold',
        tagline: '"I sit weird and I know it"',
        description: 'Famous for folded ears and sitting in the most absurd positions. Looks perpetually concerned. Actually just vibing. Will sit like a human on your couch and stare at the wall.',
        traits: ['Quirky', 'Owl-faced', 'Quiet weirdo', 'Zen master'],
        energy: 40,
        affection: 75,
        sass: 45,
        bio: 'I sit like a person. I stare at walls. I worry about things that haven\'t happened yet. Looking for someone who appreciates a quiet, slightly odd companion. I\'m the anxious bestie you didn\'t know you needed.',
        likes: 'Sitting weird, staring into the void, soft blankets',
        dislikes: 'Sudden noises, change, uncertainty (everything)',
        ideal_date: 'Sitting next to each other in comfortable silence.',
        ick: 'People who move too fast in relationships',
        chaos_reason: 'They sit in Buddha pose and look at you like they know your secrets'
    },
    {
        id: 'orange_tabby',
        emoji: '🧡',
        name: 'Orange Tabby',
        tagline: '"I share one brain cell with every orange cat alive"',
        description: 'The himbo of the cat world. Not a single thought behind those eyes. Runs into walls. Falls off tables. Still the most lovable goofball you\'ll ever meet. Braincell sold separately.',
        traits: ['Zero thoughts', 'Pure love', 'Clumsy king', 'Fearless idiot'],
        energy: 75,
        affection: 90,
        sass: 20,
        bio: 'I don\'t think, I just vibe. Looking for someone who doesn\'t need intellectual conversation — just pure, unfiltered love and the occasional face-first wall collision. I AM the meme.',
        likes: 'Food, naps, walking into glass doors',
        dislikes: 'Thinking, puzzles, anything requiring braincells',
        ideal_date: 'Eating snacks. Then more snacks. Then a nap.',
        ick: 'People who overthink everything',
        chaos_reason: 'They operate on pure instinct because no brain cell is available'
    },
    {
        id: 'black_cat',
        emoji: '🖤',
        name: 'Black Cat',
        tagline: '"Mysterious? I just have good lighting."',
        description: 'Sleek, misunderstood, and cooler than you. Appears out of nowhere. Vanishes into darkness. Has a deep, soulful stare that makes you question your life choices. Actually a huge softie.',
        traits: ['Mysterious', 'Secretly sweet', 'Night owl', 'Indie vibes'],
        energy: 55,
        affection: 80,
        sass: 70,
        bio: 'I appear when I choose to. I disappear without warning. Looking for someone who respects the mystery and doesn\'t need to know where I am at all times. But I\'ll be there when it matters. Always.',
        likes: 'Midnight zoomies, sunbeams, being misunderstood',
        dislikes: 'Superstitions, bright lights, people who walk past me at shelters',
        ideal_date: 'A moonlit window sill, two sets of glowing eyes.',
        ick: 'People who say black cats are unlucky',
        chaos_reason: 'They materialize from shadows like a furry ninja of love'
    }
];

// ---- QUIZ QUESTIONS ----
const questions = [
    {
        question: "It's Saturday morning. What are you doing?",
        options: [
            { text: "🛋️ Still in bed. Will I get up? Unclear.", scores: { persian: 3, scottish_fold: 2, ragdoll: 2, orange_tabby: 1 } },
            { text: "🏃 Already went for a run, made breakfast, reorganized my closet", scores: { bengal: 3, maine_coon: 2, sphynx: 1 } },
            { text: "📱 Scrolling my phone and judging everyone's Instagram stories", scores: { siamese: 3, persian: 2, black_cat: 1 } },
            { text: "🎉 Texting the group chat to plan something spontaneous", scores: { sphynx: 3, bengal: 2, orange_tabby: 2 } }
        ]
    },
    {
        question: "Your friend cancels plans last minute. Your reaction?",
        options: [
            { text: "😌 Secretly relieved. Pajamas > people.", scores: { persian: 3, scottish_fold: 3, black_cat: 2 } },
            { text: "😤 I already drove there! I'm going anyway — alone.", scores: { bengal: 3, siamese: 2, maine_coon: 1 } },
            { text: "😢 Genuinely sad. I was looking forward to quality time.", scores: { ragdoll: 3, maine_coon: 2, sphynx: 2 } },
            { text: "🤷 No worries. Already invited 3 other people.", scores: { sphynx: 3, orange_tabby: 2, bengal: 1 } }
        ]
    },
    {
        question: "How do you handle conflict?",
        options: [
            { text: "🗣️ Head-on. I will TELL you what's wrong. Loudly.", scores: { siamese: 3, bengal: 2, sphynx: 1 } },
            { text: "🧊 The silent treatment, served ice cold.", scores: { persian: 3, black_cat: 3, scottish_fold: 1 } },
            { text: "😭 I cry. And then we hug it out.", scores: { ragdoll: 3, maine_coon: 2, orange_tabby: 1 } },
            { text: "🤔 Conflict? I forgot about it 5 minutes ago.", scores: { orange_tabby: 3, scottish_fold: 2, sphynx: 1 } }
        ]
    },
    {
        question: "Pick a superpower:",
        options: [
            { text: "🦅 Flight — I need freedom and height", scores: { bengal: 3, black_cat: 2, siamese: 1 } },
            { text: "🫥 Invisibility — I'll observe from the shadows", scores: { black_cat: 3, scottish_fold: 2, persian: 1 } },
            { text: "🧲 Mind reading — I want to know what everyone thinks of me", scores: { siamese: 3, sphynx: 2, ragdoll: 1 } },
            { text: "💪 Super strength — gentle giant energy", scores: { maine_coon: 3, orange_tabby: 2, ragdoll: 1 } }
        ]
    },
    {
        question: "What's your energy at a party?",
        options: [
            { text: "🎤 I AM the party. Where's the karaoke machine?", scores: { siamese: 3, sphynx: 3, bengal: 1 } },
            { text: "🐕 I befriend absolutely everyone, including the dog", scores: { maine_coon: 3, orange_tabby: 2, sphynx: 2 } },
            { text: "🧱 Standing by the wall, judging the playlist", scores: { black_cat: 3, persian: 2, scottish_fold: 1 } },
            { text: "🛋️ Found the host's cat. We're best friends now.", scores: { ragdoll: 3, scottish_fold: 2, maine_coon: 1 } }
        ]
    },
    {
        question: "Someone gives you unsolicited advice. You think:",
        options: [
            { text: "😤 Excuse me? Did I ASK?", scores: { siamese: 3, persian: 3, bengal: 1 } },
            { text: "🥲 Maybe they're right... *spirals*", scores: { scottish_fold: 3, ragdoll: 2, black_cat: 1 } },
            { text: "😊 Thanks! *immediately forgets*", scores: { orange_tabby: 3, maine_coon: 2, sphynx: 1 } },
            { text: "🤗 I love advice! Tell me everything!", scores: { sphynx: 3, ragdoll: 2, maine_coon: 1 } }
        ]
    },
    {
        question: "Your ideal living space?",
        options: [
            { text: "🏔️ Big house with space to roam and explore", scores: { maine_coon: 3, bengal: 2, black_cat: 1 } },
            { text: "✨ Aesthetic apartment — everything matches", scores: { persian: 3, siamese: 2, scottish_fold: 1 } },
            { text: "🛏️ Doesn't matter as long as the bed is comfy", scores: { ragdoll: 3, orange_tabby: 2, scottish_fold: 2 } },
            { text: "🎪 Wherever people are — I need social energy!", scores: { sphynx: 3, bengal: 2, siamese: 1 } }
        ]
    },
    {
        question: "How do you show love?",
        options: [
            { text: "🫂 Physical touch. Always. Come here.", scores: { ragdoll: 3, sphynx: 3, maine_coon: 1 } },
            { text: "🎁 Thoughtful gifts (that I definitely chose, not random)", scores: { bengal: 2, black_cat: 3, persian: 2 } },
            { text: "💬 Words — I'll tell you I love you 47 times a day", scores: { siamese: 3, orange_tabby: 2, ragdoll: 1 } },
            { text: "🫠 I just... exist near you. Quietly. It means everything.", scores: { scottish_fold: 3, black_cat: 2, persian: 1 } }
        ]
    },
    {
        question: "What's your biggest flaw?",
        options: [
            { text: "🎭 I'm too dramatic and I know it", scores: { siamese: 3, bengal: 2, sphynx: 1 } },
            { text: "🪫 I'm lazy and I've made peace with it", scores: { persian: 3, orange_tabby: 2, scottish_fold: 1 } },
            { text: "💔 I get attached way too fast", scores: { ragdoll: 3, sphynx: 2, maine_coon: 1 } },
            { text: "🌀 I overthink literally everything", scores: { scottish_fold: 3, black_cat: 2, siamese: 1 } }
        ]
    },
    {
        question: "Last one — pick a vibe:",
        options: [
            { text: "☀️ Golden hour, warm blanket, soft playlist", scores: { ragdoll: 3, persian: 2, scottish_fold: 2, orange_tabby: 1 } },
            { text: "🌪️ Thunderstorm energy — intense and electric", scores: { bengal: 3, siamese: 2, sphynx: 1 } },
            { text: "🌙 Midnight city — mysterious and alive", scores: { black_cat: 3, sphynx: 2, bengal: 1 } },
            { text: "🌈 Chaotic sunshine — messy but joyful", scores: { orange_tabby: 3, maine_coon: 2, sphynx: 2 } }
        ]
    }
];

// ---- STATE ----
let currentQuestion = 0;
let scores = {};

function resetScores() {
    scores = {};
    breeds.forEach(function(b) { scores[b.id] = 0; });
}

// ---- SAFE DOM HELPERS ----
// All content comes from hardcoded breed/quiz data above (no user input),
// so DOM injection is safe. Using helper for clarity.
function setHTML(el, html) {
    el.innerHTML = html;
}

// ---- BREED CARDS ----
function renderBreeds() {
    const grid = document.getElementById('breeds-grid');
    const cards = breeds.map(function(breed) {
        const traitTags = breed.traits.map(function(t) {
            return '<span class="breed-trait">' + t + '</span>';
        }).join('');

        return '<div class="breed-card">'
            + '<span class="breed-emoji">' + breed.emoji + '</span>'
            + '<div class="breed-name">' + breed.name + '</div>'
            + '<div class="breed-tagline">' + breed.tagline + '</div>'
            + '<p class="breed-desc">' + breed.description + '</p>'
            + '<div class="breed-traits">' + traitTags + '</div>'
            + '<div class="breed-mood">'
            +   '<span class="breed-mood-label">Energy</span>'
            +   '<div class="mood-bar"><div class="mood-fill energy" style="width: 0%" data-width="' + breed.energy + '%"></div></div>'
            + '</div>'
            + '<div class="breed-mood">'
            +   '<span class="breed-mood-label">Affection</span>'
            +   '<div class="mood-bar"><div class="mood-fill affection" style="width: 0%" data-width="' + breed.affection + '%"></div></div>'
            + '</div>'
            + '<div class="breed-mood">'
            +   '<span class="breed-mood-label">Sass</span>'
            +   '<div class="mood-bar"><div class="mood-fill sass" style="width: 0%" data-width="' + breed.sass + '%"></div></div>'
            + '</div>'
            + '</div>';
    }).join('');

    setHTML(grid, cards);
}

// ---- QUIZ ENGINE ----
function renderQuestion() {
    var q = questions[currentQuestion];
    var wrapper = document.getElementById('quiz-question-wrapper');
    var letters = ['A', 'B', 'C', 'D'];

    var optionsHTML = q.options.map(function(opt, i) {
        return '<button class="quiz-option" data-index="' + i + '">'
            + '<span class="opt-letter">' + letters[i] + '</span>'
            + '<span>' + opt.text + '</span>'
            + '</button>';
    }).join('');

    setHTML(wrapper,
        '<div class="quiz-question">'
        + '<div class="quiz-q-text">' + q.question + '</div>'
        + '<div class="quiz-options">' + optionsHTML + '</div>'
        + '</div>'
    );

    // Attach click handlers
    var buttons = wrapper.querySelectorAll('.quiz-option');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            selectOption(parseInt(btn.getAttribute('data-index')));
        });
    });

    // Update progress
    var pct = ((currentQuestion) / questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = pct + '%';

    // Update counter
    document.getElementById('quiz-counter').textContent =
        (currentQuestion + 1) + ' of ' + questions.length + ' — you got this 🐾';
}

function selectOption(index) {
    var q = questions[currentQuestion];
    var option = q.options[index];

    // Add scores
    Object.keys(option.scores).forEach(function(breedId) {
        scores[breedId] = (scores[breedId] || 0) + option.scores[breedId];
    });

    // Visual feedback
    var buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(function(btn) { btn.classList.remove('selected'); });
    buttons[index].classList.add('selected');

    // Next question or results
    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 500);
}

// ---- RESULTS ----
function getResults() {
    // Sort breeds by score
    var sorted = Object.keys(scores).map(function(id) {
        return { id: id, score: scores[id] };
    }).sort(function(a, b) { return b.score - a.score; });

    var bestId = sorted[0].id;
    var bestBreed = breeds.find(function(b) { return b.id === bestId; });
    var bestScore = sorted[0].score;

    // Chaos match: lowest scoring breed (most different from you)
    var chaosId = sorted[sorted.length - 1].id;
    if (chaosId === bestId && sorted.length > 1) {
        chaosId = sorted[sorted.length - 2].id;
    }
    var chaosBreed = breeds.find(function(b) { return b.id === chaosId; });

    // Match percentage (max possible ~30 points if perfectly consistent)
    var matchPct = Math.min(99, Math.round((bestScore / 30) * 100));

    return { bestBreed: bestBreed, chaosBreed: chaosBreed, matchPct: matchPct };
}

function showResults() {
    var result = getResults();
    var best = result.bestBreed;
    var chaos = result.chaosBreed;
    var pct = result.matchPct;

    // Hide quiz, show result
    document.getElementById('quiz').style.display = 'none';
    var resultSection = document.getElementById('result');
    resultSection.classList.remove('hidden');

    var content = document.getElementById('result-content');

    var traitsHTML = best.traits.map(function(t) {
        return '<span class="profile-trait">' + t + '</span>';
    }).join('');

    setHTML(content,
        '<div class="result-intro">'
        + '<h2>You Are...</h2>'
        + '<p>the universe has spoken (and meowed)</p>'
        + '</div>'

        + '<div class="profile-card">'
        + '<div class="profile-header">'
        +   '<span class="profile-match-badge">' + pct + '% Match</span>'
        +   '<span class="profile-emoji">' + best.emoji + '</span>'
        +   '<div class="profile-name">' + best.name + '</div>'
        +   '<div class="profile-subtitle">' + best.tagline + '</div>'
        + '</div>'
        + '<div class="profile-body">'
        +   '<p class="profile-bio">"' + best.bio + '"</p>'
        +   '<div class="profile-details">'
        +     '<div class="profile-detail">'
        +       '<div class="profile-detail-label">Likes</div>'
        +       '<div class="profile-detail-value">' + best.likes + '</div>'
        +     '</div>'
        +     '<div class="profile-detail">'
        +       '<div class="profile-detail-label">Dislikes</div>'
        +       '<div class="profile-detail-value">' + best.dislikes + '</div>'
        +     '</div>'
        +     '<div class="profile-detail">'
        +       '<div class="profile-detail-label">Ideal Date</div>'
        +       '<div class="profile-detail-value">' + best.ideal_date + '</div>'
        +     '</div>'
        +     '<div class="profile-detail">'
        +       '<div class="profile-detail-label">Energy Level</div>'
        +       '<div class="profile-detail-value">' + getEnergyLabel(best.energy) + '</div>'
        +     '</div>'
        +   '</div>'
        +   '<div class="profile-traits">' + traitsHTML + '</div>'
        +   '<div class="profile-ick">'
        +     '<div class="profile-ick-label">The Ick 🚩</div>'
        +     '<div class="profile-ick-value">' + best.ick + '</div>'
        +   '</div>'
        + '</div>'
        + '</div>'

        + '<div class="chaos-card">'
        +   '<span class="chaos-label">🌀 Your Chaos Match</span>'
        +   '<span class="chaos-emoji">' + chaos.emoji + '</span>'
        +   '<div class="chaos-name">' + chaos.name + '</div>'
        +   '<p class="chaos-desc">' + chaos.description + '</p>'
        +   '<span class="chaos-reason">' + chaos.chaos_reason + '</span>'
        + '</div>'

        + '<button class="retake-btn" id="retake-btn">Retake The Quiz 🔄</button>'
    );

    // Attach retake handler
    document.getElementById('retake-btn').addEventListener('click', retakeQuiz);

    // Smooth scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

function getEnergyLabel(level) {
    if (level >= 85) return '⚡ Maximum overdrive';
    if (level >= 65) return '🔥 High energy';
    if (level >= 45) return '😊 Moderate vibes';
    if (level >= 25) return '😴 Couch potato';
    return '🪫 Horizontal lifestyle';
}

function retakeQuiz() {
    currentQuestion = 0;
    resetScores();

    // Show quiz, hide result
    document.getElementById('quiz').style.display = '';
    document.getElementById('result').classList.add('hidden');

    renderQuestion();

    // Scroll to quiz
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

// ---- SCROLL ANIMATIONS ----
function setupScrollAnimations() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate mood bars when breed cards become visible
                if (entry.target.classList.contains('breed-card')) {
                    var fills = entry.target.querySelectorAll('.mood-fill');
                    fills.forEach(function(fill) {
                        var width = fill.getAttribute('data-width');
                        setTimeout(function() {
                            fill.style.width = width;
                        }, 300);
                    });
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.breed-card, .section-header').forEach(function(el) {
        observer.observe(el);
    });
}

// ---- NAV SCROLL EFFECT ----
function setupNavScroll() {
    var nav = document.querySelector('.nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.boxShadow = 'var(--shadow-sm)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

// ---- SMOOTH SCROLL FOR NAV LINKS ----
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function() {
    resetScores();
    renderBreeds();
    renderQuestion();
    setupScrollAnimations();
    setupNavScroll();
    setupSmoothScroll();
});

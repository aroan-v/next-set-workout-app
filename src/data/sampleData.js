export const dailyChallengeCardContent = {
  name: 'Functional Training',
  minutes: 45,
  kCal: 1250,
  exercises: 5,
  src: '/images/workout/functional-training.jpg',
  alt: 'Functional training',
}

export const recommendedExercises = [
  {
    src: '/images/exercises/squat-exercise.jpg',
    alt: 'Person performing a squat exercise',
    title: 'Squat Exercise',
    minutes: 12,
    kcal: 120,
  },
  {
    src: '/images/exercises/full-body-stretching.jpg',
    alt: 'Person performing a full body stretching',
    title: 'Full Body Stretching',
    minutes: 10,
    kcal: 100,
  },
]

export const workoutRoutines = [
  // 1. FULL BODY WORKOUT (Bodyweight/Dumbbell Focus)
  {
    id: 'full-body-1',
    name: 'Full Body A (Foundational)',
    minutes: 45,
    kCal: 700,
    featured: true,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Full Body' },
      { color: 'neutral', content: 'Dumbbells' },
    ],
    exercises: [
      { id: 'Goblet_Squat', sets: 3, reps: 12, rest: 75 },
      { id: 'Pushups', sets: 3, reps: 10, rest: 60 },
      { id: 'One-Arm_Dumbbell_Row', sets: 3, reps: 12, rest: 75 },
      { id: 'Dumbbell_Shoulder_Press', sets: 3, reps: 10, rest: 60 },
      { id: 'Plank', sets: 3, reps: '60s', rest: 45 },
    ],
    src: '/images/workout/routine-full-body-a.jpg',
    alt: 'Full body foundational workout',
  },
  {
    id: 'full-body-1',
    name: 'Full Body A (Foundational)',
    minutes: 45,
    kCal: 700,
    featured: true,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Full Body' },
      { color: 'neutral', content: 'Dumbbells' },
    ],
    exercises: [
      { id: 'Goblet_Squat', sets: 3, reps: 12, rest: 75 },
      { id: 'Pushups', sets: 3, reps: 10, rest: 60 },
      { id: 'One-Arm_Dumbbell_Row', sets: 3, reps: 12, rest: 75 },
      { id: 'Dumbbell_Shoulder_Press', sets: 3, reps: 10, rest: 60 },
      { id: 'Plank', sets: 3, reps: '60s', rest: 45 },
    ],
    src: '/images/workout/routine-full-body-a.jpg',
    alt: 'Full body foundational workout',
  },

  // 2. FULL BODY WORKOUT (Pure Bodyweight)
  {
    id: 'bodyweight-only',
    name: 'Full Body (No Equipment)',
    minutes: 35,
    kCal: 550,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Bodyweight' },
      { color: 'accent', content: 'Core Focused' },
    ],
    exercises: [
      { id: 'Bodyweight_Squat', sets: 3, reps: 15, rest: 60 },
      { id: 'Incline_Push-Up', sets: 3, reps: 10, rest: 60 },
      { id: 'Crossover_Reverse_Lunge', sets: 3, reps: 10, rest: 45 },
      { id: 'All_Fours_Quad_Stretch', sets: 3, reps: 10, rest: 45 },
      { id: 'Crunches', sets: 3, reps: 15, rest: 30 },
    ],
    src: '/images/workout/routine-bodyweight.jpg',
    alt: 'Bodyweight-only workout',
  },

  // 3. UPPER BODY (PPL/Upper-Lower Split)
  {
    id: 'upper-body-beginner',
    name: 'Upper Body Focus',
    minutes: 50,
    kCal: 750,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Upper Body' },
      { color: 'secondary', content: 'Push & Pull' },
    ],
    exercises: [
      { id: 'Dumbbell_Bench_Press', sets: 3, reps: 10, rest: 75 },
      { id: 'Seated_Cable_Rows', sets: 3, reps: 12, rest: 75 },
      { id: 'Dumbbell_Shoulder_Press', sets: 3, reps: 10, rest: 60 },
      { id: 'Dumbbell_Bicep_Curl', sets: 3, reps: 12, rest: 45 },
      { id: 'Triceps_Pushdown', sets: 3, reps: 12, rest: 45 },
    ],
    src: '/images/workout/routine-upper.jpg',
    alt: 'Beginner upper body workout',
  },

  // 4. LOWER BODY (PPL/Upper-Lower Split)
  {
    id: 'lower-body-beginner',
    name: 'Lower Body Focus',
    minutes: 40,
    kCal: 680,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Legs' },
      { color: 'neutral', content: 'Glutes & Hamstrings' },
    ],
    exercises: [
      { id: 'Leg_Press', sets: 3, reps: 12, rest: 75 },
      { id: 'Leg_Extensions', sets: 3, reps: 15, rest: 60 },
      { id: 'Lying_Leg_Curls', sets: 3, reps: 12, rest: 60 },
      { id: 'Calf_Raises_-_With_Bands', sets: 3, reps: 15, rest: 45 },
      { id: 'Ab_Crunch_Machine', sets: 3, reps: 15, rest: 45 },
    ],
    src: '/images/workout/routine-lower.jpg',
    alt: 'Beginner lower body workout',
  },

  // 5. PUSH DAY (PPL Split)
  {
    id: 'push-beginner',
    name: 'Push Day (Chest, Shoulders, Triceps)',
    minutes: 50,
    kCal: 800,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Chest' },
      { color: 'secondary', content: 'Triceps' },
    ],
    exercises: [
      { id: 'Leverage_Chest_Press', sets: 3, reps: 10, rest: 90 },
      { id: 'Cable_Crossover', sets: 3, reps: 12, rest: 60 },
      { id: 'Dumbbell_One-Arm_Shoulder_Press', sets: 3, reps: 10, rest: 75 },
      { id: 'Lateral_Raise_-_With_Bands', sets: 3, reps: 15, rest: 45 },
      { id: 'Dumbbell_One-Arm_Triceps_Extension', sets: 3, reps: 12, rest: 45 },
    ],
    src: '/images/workout/routine-push.jpg',
    alt: 'Beginner Push Day routine',
  },

  // 6. PULL DAY (PPL Split)
  {
    id: 'pull-beginner',
    name: 'Pull Day (Back, Biceps, Traps)',
    minutes: 55,
    kCal: 850,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Back' },
      { color: 'secondary', content: 'Biceps' },
    ],
    exercises: [
      { id: 'Wide-Grip_Lat_Pulldown', sets: 3, reps: 10, rest: 90 },
      { id: 'Dumbbell_Shrug', sets: 3, reps: 15, rest: 60 },
      { id: 'Face_Pull', sets: 3, reps: 15, rest: 60 },
      { id: 'Hammer_Curls', sets: 3, reps: 12, rest: 45 },
      { id: 'Preacher_Curl', sets: 3, reps: 12, rest: 45 },
    ],
    src: '/images/workout/routine-pull.jpg',
    alt: 'Beginner Pull Day routine',
  },

  // 7. LEGS DAY (PPL Split)
  {
    id: 'legs-beginner',
    name: 'Legs Day',
    minutes: 45,
    kCal: 750,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Legs' },
      { color: 'secondary', content: 'Quads & Hams' },
    ],
    exercises: [
      { id: 'Leg_Press', sets: 3, reps: 12, rest: 90 },
      { id: 'Seated_Leg_Curl', sets: 3, reps: 12, rest: 75 },
      { id: 'Leg_Extensions', sets: 3, reps: 15, rest: 60 },
      { id: 'Calf_Raises_-_With_Bands', sets: 3, reps: 15, rest: 45 },
      { id: 'Crunches', sets: 3, reps: 20, rest: 30 },
    ],
    src: '/images/workout/routine-legs.jpg',
    alt: 'Beginner Legs Day routine',
  },

  // 8. HYBRID (Shoulders/Arms Focus)
  {
    id: 'arms-shoulder-focus',
    name: 'Shoulders & Arms',
    minutes: 40,
    kCal: 600,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Shoulders' },
      { color: 'accent', content: 'Arms' },
    ],
    exercises: [
      { id: 'Machine_Shoulder_Military_Press', sets: 3, reps: 10, rest: 75 },
      { id: 'Front_Dumbbell_Raise', sets: 3, reps: 12, rest: 60 },
      { id: 'Incline_Inner_Biceps_Curl', sets: 3, reps: 12, rest: 45 },
      { id: 'Cable_Rope_Overhead_Triceps_Extension', sets: 3, reps: 12, rest: 45 },
      { id: 'Reverse_Machine_Flyes', sets: 3, reps: 15, rest: 45 },
    ],
    src: '/images/workout/routine-arms.jpg',
    alt: 'Beginner Arms and Shoulder routine',
  },

  // 9. GYM MACHINES ONLY
  {
    id: 'machines-only',
    name: 'Full Body (Machines Only)',
    minutes: 45,
    kCal: 720,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Full Body' },
      { color: 'neutral', content: 'Machines' },
    ],
    exercises: [
      { id: 'Leverage_Chest_Press', sets: 3, reps: 12, rest: 75 },
      { id: 'Seated_Cable_Rows', sets: 3, reps: 12, rest: 75 },
      { id: 'Leverage_Shoulder_Press', sets: 3, reps: 12, rest: 60 },
      { id: 'Leg_Extensions', sets: 3, reps: 15, rest: 60 },
      { id: 'Ab_Crunch_Machine', sets: 3, reps: 15, rest: 45 },
    ],
    src: '/images/workout/routine-machines.jpg',
    alt: 'Beginner Machines-Only Workout',
  },

  // 10. LIGHT CARDIO & CORE
  {
    id: 'core-cardio-light',
    name: 'Core & Light Cardio',
    minutes: 30,
    kCal: 450,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Cardio' },
      { color: 'accent', content: 'Core' },
    ],
    exercises: [
      { id: 'Rope_Jumping', sets: 3, reps: '60s', rest: 30 },
      { id: 'Cross-Body_Crunch', sets: 3, reps: '60s', rest: 30 },
      { id: '3_4_Sit-Up', sets: 3, reps: 15, rest: 30 },
      { id: 'Plank', sets: 3, reps: '30s', rest: 30 },
      { id: 'Superman', sets: 3, reps: 12, rest: 30 },
    ],
    src: '/images/workout/routine-core.jpg',
    alt: 'Beginner Core and Cardio workout',
  },
  {
    id: 'bro-split',
    name: 'Bro Split',
    minutes: 75,
    kCal: 1450,
    category: 'Intermediate',
    tags: [
      { color: 'primary', content: 'Bodybuilding' },
      { color: 'accent', content: 'Aesthetics' },
    ],
    exercises: [
      { id: 'Barbell_Bench_Press_-_Medium_Grip', sets: 4, reps: 8, rest: 90 },
      { id: 'Incline_Dumbbell_Press', sets: 3, reps: 10, rest: 60 },
      { id: 'Dumbbell_Flyes', sets: 3, reps: 12, rest: 45 },
      { id: 'Triceps_Pushdown', sets: 3, reps: 12, rest: 45 },
      { id: 'Cable_Crunch', sets: 3, reps: 15, rest: 30 },
    ],
    src: '/images/workout/routine-bro-split.jpg',
    alt: 'Classic bodybuilding bro split routine',
  },
  {
    id: 'push-pull-legs',
    name: 'Push Pull Legs',
    minutes: 70,
    kCal: 1350,
    category: 'Intermediate',
    tags: [
      { color: 'primary', content: 'Balanced' },
      { color: 'accent', content: 'Strength' },
    ],
    exercises: [
      { id: 'Barbell_Squat', sets: 4, reps: 8, rest: 120 },
      { id: 'Barbell_Rear_Delt_Row', sets: 3, reps: 10, rest: 90 },
      { id: 'Smith_Machine_Overhead_Shoulder_Press', sets: 3, reps: 10, rest: 90 },
      { id: 'Dumbbell_Bicep_Curl', sets: 3, reps: 12, rest: 60 },
      { id: 'Dips_-_Triceps_Version', sets: 3, reps: 12, rest: 60 },
    ],
    src: '/images/workout/routine-ppl.jpg',
    alt: 'Push Pull Legs training split',
  },
  {
    id: 'full-body-novice',
    name: 'Full Body (Novice)',
    minutes: 60,
    kCal: 1100,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Strength' },
      { color: 'accent', content: 'Beginner' },
    ],
    exercises: [
      { id: 'Barbell_Full_Squat', sets: 3, reps: 5, rest: 120 },
      { id: 'Barbell_Bench_Press_-_Medium_Grip', sets: 3, reps: 5, rest: 90 },
      { id: 'Barbell_Deadlift', sets: 1, reps: 5, rest: 180 },
      { id: 'Smith_Machine_Overhead_Shoulder_Press', sets: 3, reps: 8, rest: 90 },
      { id: 'Pullups', sets: 3, reps: 10, rest: 60 },
    ],
    src: '/images/workout/routine-full-body-novice.jpg',
    alt: 'Novice full body workout',
  },
  {
    id: 'upper-lower',
    name: 'Upper / Lower Split',
    minutes: 65,
    kCal: 1280,
    category: 'Intermediate',
    tags: [
      { color: 'primary', content: 'Strength' },
      { color: 'accent', content: 'Hypertrophy' },
    ],
    exercises: [
      { id: 'Barbell_Incline_Bench_Press_-_Medium_Grip', sets: 4, reps: 8, rest: 90 },
      { id: 'Bent_Over_Barbell_Row', sets: 3, reps: 10, rest: 90 },
      { id: 'Barbell_Squat', sets: 4, reps: 8, rest: 120 },
      { id: 'Romanian_Deadlift', sets: 3, reps: 10, rest: 120 },
      { id: 'Plank', sets: 3, reps: '60s', rest: 45 },
    ],
    src: '/images/workout/routine-upper-lower.jpg',
    alt: 'Upper and lower body split',
  },
  {
    id: 'powerbuilding',
    name: 'Powerbuilding',
    minutes: 80,
    kCal: 1550,
    category: 'Advanced',
    tags: [
      { color: 'primary', content: 'Power' },
      { color: 'accent', content: 'Mass' },
    ],
    exercises: [
      { id: 'Barbell_Full_Squat', sets: 5, reps: 5, rest: 150 },
      { id: 'Bench_Press_-_Powerlifting', sets: 5, reps: 5, rest: 120 },
      { id: 'Barbell_Deadlift', sets: 3, reps: 5, rest: 180 },
      { id: 'Barbell_Rear_Delt_Row', sets: 4, reps: 8, rest: 90 },
      { id: 'Smith_Machine_Overhead_Shoulder_Press', sets: 3, reps: 10, rest: 90 },
    ],
    src: '/images/workout/routine-powerbuilding.jpg',
    alt: 'Powerbuilding hybrid strength and size routine',
  },

  {
    id: 'greyskull-lp',
    name: 'Greyskull LP',
    minutes: 55,
    kCal: 1000,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Linear Progression' },
      { color: 'accent', content: 'Strength' },
    ],
    exercises: [
      { id: 'Smith_Machine_Overhead_Shoulder_Press', sets: 2, reps: 5, rest: 90 },
      { id: 'Barbell_Squat', sets: 3, reps: 5, rest: 120 },
      { id: 'Bent_Over_Barbell_Row', sets: 2, reps: 8, rest: 90 },
      { id: 'Chin-Up', sets: 3, reps: 10, rest: 60 },
      { id: 'Alternate_Incline_Dumbbell_Curl', sets: 3, reps: 12, rest: 60 },
    ],
    src: '/images/workout/routine-greyskull.jpg',
    alt: 'Greyskull LP beginner linear progression routine',
  },
  {
    id: '5x5-stronglifts',
    name: 'StrongLifts 5x5',
    minutes: 60,
    kCal: 1150,
    category: 'Beginner',
    url: 'https://stronglifts.com/stronglifts-5x5/workout-program/',
    instructions: [
      'Train three times per week on non-consecutive days (e.g. Monday, Wednesday, Friday).',
      'Alternate between Workout A (Squat, Bench Press, Barbell Row) and Workout B (Squat, Overhead Press, Deadlift).',
      'Perform 5 sets of 5 reps for each lift using the same weight across all sets.',
      'Start with an empty barbell to learn proper form before adding weight gradually.',
      'Increase the weight by 2.5 kg (5 lbs) each session for Squats, Bench Press, and Rows.',
      'Increase the weight by 5 kg (10 lbs) each session for Deadlifts.',
      'Rest 90–180 seconds between sets, depending on lift intensity.',
      'If you fail to complete all 5 reps in 3 consecutive workouts for a lift, deload by 10% and build back up.',
      'Warm up properly before each session and stretch afterward.',
      'Track every workout to monitor progression and ensure consistent overload.',
    ],
    primaryMuscles: [
      'Quadriceps',
      'Hamstrings',
      'Glutes',
      'Chest',
      'Shoulders',
      'Back',
      'Arms',
      'Core',
    ],
    isProgramSpecific: true,
    tags: [
      { color: 'primary', content: 'Progressive' },
      { color: 'accent', content: 'Strength' },
    ],
    exercises: [
      { id: 'Barbell_Full_Squat', sets: 5, reps: 5, rest: 120 },
      { id: 'Barbell_Bench_Press_-_Medium_Grip', sets: 5, reps: 5, rest: 120 },
      { id: 'Barbell_Rear_Delt_Row', sets: 5, reps: 5, rest: 90 },
    ],
    src: '/images/workout/routine-stronglifts.jpg',
    alt: 'StrongLifts 5x5 progressive overload program',
  },
  {
    id: 'phul',
    name: 'PHUL (Power Hypertrophy Upper Lower)',
    minutes: 80,
    kCal: 1500,
    category: 'Advanced',
    tags: [
      { color: 'primary', content: 'Power' },
      { color: 'accent', content: 'Hypertrophy' },
    ],
    exercises: [
      { id: 'Barbell_Bench_Press_-_Medium_Grip', sets: 4, reps: 5, rest: 120 },
      { id: 'Barbell_Full_Squat', sets: 4, reps: 5, rest: 150 },
      { id: 'Smith_Machine_Overhead_Shoulder_Press', sets: 3, reps: 8, rest: 90 },
      { id: 'Bent_Over_Barbell_Row', sets: 3, reps: 8, rest: 90 },
      { id: 'Seated_Side_Lateral_Raise', sets: 3, reps: 15, rest: 60 },
    ],
    src: '/images/workout/routine-phul.jpg',
    alt: 'Power Hypertrophy Upper Lower (PHUL) routine',
  },
  {
    id: 'phat',
    name: 'PHAT (Power Hypertrophy Adaptive Training)',
    minutes: 85,
    kCal: 1600,
    category: 'Advanced',
    tags: [
      { color: 'primary', content: 'Power' },
      { color: 'accent', content: 'Volume' },
    ],
    exercises: [
      { id: 'Deficit_Deadlift', sets: 3, reps: 5, rest: 150 },
      { id: 'Barbell_Full_Squat', sets: 3, reps: 5, rest: 150 },
      { id: 'Dumbbell_Bench_Press', sets: 3, reps: 5, rest: 120 },
      { id: 'Bent_Over_Barbell_Row', sets: 4, reps: 8, rest: 90 },
      { id: 'Incline_Dumbbell_Press', sets: 4, reps: 10, rest: 90 },
    ],
    src: '/images/workout/routine-phat.jpg',
    alt: 'Power Hypertrophy Adaptive Training (PHAT) routine',
  },
  {
    id: 'starting-strength',
    name: 'Starting Strength',
    minutes: 55,
    kCal: 950,
    category: 'Beginner',
    tags: [
      { color: 'primary', content: 'Linear' },
      { color: 'accent', content: 'Barbell' },
    ],
    exercises: [
      { id: 'Bodyweight_Squat', sets: 3, reps: 5, rest: 120 },
      { id: 'Dumbbell_Bench_Press', sets: 3, reps: 5, rest: 120 },
      { id: 'Romanian_Deadlift', sets: 1, reps: 5, rest: 180 },
      { id: 'Dumbbell_Shoulder_Press', sets: 3, reps: 5, rest: 90 },
    ],
    src: '/images/workout/routine-starting-strength.jpg',
    alt: 'Starting Strength beginner linear progression routine',
  },
]

export const recipeFAQ = [
  {
    question: 'What are macros?',
    answer:
      'Macros are protein, carbohydrates, and fats — the three nutrients your body needs in large amounts for energy, recovery, and growth.',
  },
  {
    question: 'How are the calories and macros calculated?',
    answer:
      'They’re based on standard nutritional databases and portion sizes. Small variations may occur depending on ingredient brands and cooking methods.',
  },
  {
    question: 'Can I change portions or ingredients?',
    answer:
      'Yes! Recalculate macros by adjusting ingredient weights. Remember: protein = 4 kcal/g, carbs = 4 kcal/g, and fat = 9 kcal/g.',
  },
  {
    question: 'When is the best time to eat this meal?',
    answer:
      'Pre-workout: moderate carbs + protein. Post-workout: higher protein + faster carbs. Cutting: earlier in the day when energy needs are higher.',
  },
  {
    question: 'Can I substitute ingredients?',
    answer:
      'Absolutely! Swap within the same macro category — chicken ↔️ tofu (protein), rice ↔️ quinoa (carbs), olive oil ↔️ nuts (fats).',
  },
  {
    question: 'How do I weigh food correctly?',
    answer:
      'Weigh ingredients consistently — raw or cooked, not both. For example, 100g raw chicken ≈ 75g cooked due to water loss.',
  },
]

export const macroTooltips = {
  calories:
    'The total energy this meal provides. Burn more than you eat to lose weight — eat more than you burn to gain muscle.',
  protein:
    'The muscle builder. Repairs and grows muscle tissue after workouts and keeps you fuller for longer.',
  fats: 'Supports hormone balance, brain health, and vitamin absorption. Essential for recovery and energy regulation.',
  carbs: 'Your main energy source. Fuels your workouts, movement, and brain throughout the day.',
}

export const recipeDirectory = [
  // 1️⃣ French Toast
  {
    id: 'french-toast',
    foodName: 'French Toast',
    badges: ['5 Mins Prep Time', 'High Protein', 'Breakfast'],
    ingredients: [
      { food: 'White Bread', amount: 250, unit: 'g' },
      { food: 'Eggs', amount: 2, unit: 'pcs' },
      { food: 'Milk', amount: 120, unit: 'ml' },
      { food: 'Butter', amount: 1, unit: 'tbsp' },
      { food: 'Honey', amount: 1, unit: 'tbsp' },
      { food: 'Cinnamon', amount: 0.5, unit: 'tsp' },
    ],
    description:
      'A simple, protein-packed breakfast favorite. Crispy golden slices soaked in a light cinnamon-vanilla mix for a quick energy boost.',
    instructions: [
      'In a bowl, whisk together eggs, milk, honey, and cinnamon.',
      'Dip bread slices into the mixture until coated evenly.',
      'Heat a nonstick pan over medium heat and melt butter.',
      'Cook each side for 2–3 minutes or until golden brown.',
      'Serve warm with fruits or yogurt.',
    ],
    heroImage: 'https://images.pexels.com/photos/12091684/pexels-photo-12091684.png',
    otherImages: ['/images/recipe/french-toast-1.jpg', '/images/recipe/french-toast-2.jpg'],
    calories: 380,
    macros: { protein: 22, carbs: 40, fat: 12 },
    mealType: 'Breakfast',
    difficulty: 'Easy',
  },

  // 2️⃣ Protein-Packed Power Bowl
  {
    foodName: 'Protein-Packed Power Bowl',
    badges: ['15 Mins Prep Time', 'High Protein', 'Lunch'],
    ingredients: [
      { food: 'Quinoa', amount: 100, unit: 'g' },
      { food: 'Grilled Chicken Breast', amount: 150, unit: 'g' },
      { food: 'Avocado', amount: 0.5, unit: 'pc' },
      { food: 'Cherry Tomatoes', amount: 5, unit: 'pcs' },
      { food: 'Olive Oil', amount: 1, unit: 'tbsp' },
      { food: 'Lemon Juice', amount: 1, unit: 'tbsp' },
    ],
    description:
      'A balanced meal filled with lean protein, healthy fats, and complex carbs to refuel your body post-workout.',
    instructions: [
      'Cook quinoa according to package instructions.',
      'Layer quinoa, chicken, avocado, and tomatoes in a bowl.',
      'Drizzle with olive oil and lemon juice.',
      'Season with salt and pepper to taste.',
      'Serve fresh or chilled.',
    ],
    heroImage: '/images/recipe/protein-bowl.jpg',
    otherImages: ['/images/recipe/protein-bowl-1.jpg', '/images/recipe/protein-bowl-2.jpg'],
    calories: 510,
    macros: { protein: 45, carbs: 42, fat: 18 },
    mealType: 'Lunch',
    difficulty: 'Easy',
  },

  // 3️⃣ Banana Oat Smoothie
  {
    foodName: 'Banana Oat Smoothie',
    badges: ['5 Mins Prep Time', 'Under 300 Calories', 'Snack'],
    ingredients: [
      { food: 'Banana', amount: 1, unit: 'pc' },
      { food: 'Rolled Oats', amount: 40, unit: 'g' },
      { food: 'Whey Protein', amount: 1, unit: 'scoop' },
      { food: 'Milk', amount: 200, unit: 'ml' },
      { food: 'Honey', amount: 1, unit: 'tsp' },
    ],
    description: 'Creamy, energizing, and perfect for a quick refuel before or after workouts.',
    instructions: [
      'Combine all ingredients in a blender.',
      'Blend until smooth and creamy.',
      'Pour into a glass and serve chilled.',
    ],
    heroImage: '/images/recipe/banana-oat-smoothie.jpg',
    otherImages: ['/images/recipe/banana-oat-smoothie-1.jpg'],
    calories: 280,
    macros: { protein: 23, carbs: 32, fat: 5 },
    mealType: 'Snack',
    difficulty: 'Easy',
  },

  // 4️⃣ Sweet Potato Chicken Mash
  {
    foodName: 'Sweet Potato Chicken Mash',
    badges: ['High Protein', '30 Mins Prep Time', 'Dinner'],
    ingredients: [
      { food: 'Sweet Potato', amount: 250, unit: 'g' },
      { food: 'Chicken Breast', amount: 150, unit: 'g' },
      { food: 'Greek Yogurt', amount: 2, unit: 'tbsp' },
      { food: 'Garlic', amount: 2, unit: 'cloves' },
      { food: 'Olive Oil', amount: 1, unit: 'tbsp' },
    ],
    description:
      'A hearty post-workout dinner packed with complex carbs and lean protein for recovery.',
    instructions: [
      'Boil sweet potatoes until tender and mash with Greek yogurt.',
      'Grill chicken with olive oil and garlic until golden.',
      'Serve chicken on top of the mash and garnish with herbs.',
    ],
    heroImage: '/images/recipe/sweet-potato-chicken.jpg',
    otherImages: ['/images/recipe/sweet-potato-chicken-1.jpg'],
    calories: 450,
    macros: { protein: 38, carbs: 50, fat: 10 },
    mealType: 'Dinner',
    difficulty: 'Medium',
  },

  // 5️⃣ Greek Yogurt Parfait
  {
    foodName: 'Greek Yogurt Parfait',
    badges: ['Under 200 Calories', 'No Cook', 'Breakfast'],
    ingredients: [
      { food: 'Greek Yogurt', amount: 150, unit: 'g' },
      { food: 'Granola', amount: 30, unit: 'g' },
      { food: 'Blueberries', amount: 50, unit: 'g' },
      { food: 'Honey', amount: 1, unit: 'tsp' },
    ],
    description:
      'Light, refreshing, and probiotic-rich snack perfect for mornings or late-night cravings.',
    instructions: [
      'Layer yogurt, granola, and blueberries in a glass.',
      'Drizzle honey on top.',
      'Chill for 5 minutes before serving.',
    ],
    heroImage: '/images/recipe/yogurt-parfait.jpg',
    otherImages: ['/images/recipe/yogurt-parfait-1.jpg'],
    calories: 190,
    macros: { protein: 15, carbs: 25, fat: 3 },
    mealType: 'Breakfast',
    difficulty: 'Easy',
  },

  // 6️⃣ Tuna Egg Salad Wrap
  {
    foodName: 'Tuna Egg Salad Wrap',
    badges: ['High Protein', 'Low Carb', 'Lunch'],
    ingredients: [
      { food: 'Tuna (Canned, in Water)', amount: 100, unit: 'g' },
      { food: 'Boiled Eggs', amount: 2, unit: 'pcs' },
      { food: 'Low-Fat Mayo', amount: 1, unit: 'tbsp' },
      { food: 'Whole Wheat Tortilla', amount: 1, unit: 'pc' },
      { food: 'Spinach', amount: 20, unit: 'g' },
    ],
    description:
      'A satisfying wrap filled with protein and healthy fats — perfect for on-the-go meals.',
    instructions: [
      'Mash eggs and tuna together with mayo.',
      'Spread on tortilla and top with spinach.',
      'Wrap tightly and slice in half.',
    ],
    heroImage: '/images/recipe/tuna-egg-wrap.jpg',
    otherImages: ['/images/recipe/tuna-egg-wrap-1.jpg'],
    calories: 340,
    macros: { protein: 30, carbs: 18, fat: 12 },
    mealType: 'Lunch',
    difficulty: 'Easy',
  },

  // 7️⃣ Baked Salmon with Veggies
  {
    foodName: 'Baked Salmon with Veggies',
    badges: ['Omega-3 Rich', '30 Mins', 'Dinner'],
    ingredients: [
      { food: 'Salmon Fillet', amount: 150, unit: 'g' },
      { food: 'Broccoli', amount: 100, unit: 'g' },
      { food: 'Carrots', amount: 80, unit: 'g' },
      { food: 'Olive Oil', amount: 1, unit: 'tbsp' },
      { food: 'Lemon', amount: 1, unit: 'pc' },
    ],
    description: 'A wholesome, anti-inflammatory dinner rich in omega-3s and fiber.',
    instructions: [
      'Preheat oven to 200°C (400°F).',
      'Season salmon with olive oil, salt, pepper, and lemon.',
      'Bake for 20 minutes alongside veggies.',
      'Serve hot with an extra squeeze of lemon.',
    ],
    heroImage: '/images/recipe/baked-salmon.jpg',
    otherImages: ['/images/recipe/baked-salmon-1.jpg'],
    calories: 430,
    macros: { protein: 36, carbs: 15, fat: 25 },
    mealType: 'Dinner',
    difficulty: 'Medium',
  },
]

export const loremContent = {
  oneParagraph: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel magna cursus euismod. Donec in sem ac nisl ultrices pretium. Curabitur porttitor ante ut leo accumsan, sed mattis eros lacinia.',
  ],

  twoParagraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet eros vel purus fermentum tincidunt. Cras aliquam, odio at egestas dignissim, magna lacus lacinia purus, sit amet malesuada justo odio vel erat.',
    'Integer bibendum, orci ac malesuada sodales, sapien justo condimentum ex, vel fringilla erat nisi sed risus. Suspendisse potenti. Vivamus sed arcu ut justo vehicula tincidunt non ac turpis.',
  ],

  threeParagraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet erat a nisl iaculis, in suscipit metus tristique. Etiam a dolor a urna luctus ullamcorper non nec purus.',
    'Proin sed sapien vel lorem egestas aliquet. Sed sit amet velit id turpis suscipit feugiat. Integer congue, neque sit amet egestas tempor, lacus lacus dictum nisi, vel tincidunt justo metus nec odio.',
    'Duis nec sapien ac orci pharetra tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in ligula at risus vestibulum porta sit amet a justo.',
  ],
}

export const workoutChallenges = [
  {
    id: 'the-spartan-core-challenge',
    title: 'The Spartan Core Challenge',
    durationDays: 7,
    theme: 'Unbreakable Foundation',
    focus: 'Static Core Strength & Stability',
    goal: 'Accumulate the most time in various plank and static hold positions by the end of the week.',
    dailyWorkouts: [
      {
        day: 1,
        workout: 'Plank Hold Mastery: 3 sets of maximum duration standard plank.',
        targetArea: 'Abdominals',
      },
      {
        day: 2,
        workout: 'Side Plank Burn: 3 sets of 30-60 seconds per side (left/right).',
        targetArea: 'Obliques',
      },
      {
        day: 3,
        workout: 'Active Recovery: 10 mins of Cat-Cow, Bird-Dog, and hip bridges.',
        targetArea: 'Low Back/Spine',
      },
      {
        day: 4,
        workout: 'Reverse Plank Time: 3 sets of maximum duration reverse plank hold.',
        targetArea: 'Glutes, Triceps',
      },
      {
        day: 5,
        workout: 'Hollow Hold Hell: 3 sets of 30-second Hollow Hold, resting 15 seconds.',
        targetArea: 'Deep Core',
      },
      {
        day: 6,
        workout:
          'Core Circuit: Plank (60s), Side Plank (L) (30s), Side Plank (R) (30s). Repeat 2 times.',
        targetArea: 'Full Core',
      },
      { day: 7, workout: 'Rest & Reflect: Quick 5-minute torso stretch.', targetArea: 'Mobility' },
    ],
  },
  {
    id: 'vertical-velocity-challenge',
    title: 'Vertical Velocity Challenge',
    durationDays: 7,
    theme: 'Explosive Power & Plyometrics',
    focus: 'Lower body power and cardiovascular endurance through jumping.',
    goal: 'Complete the total number of explosive reps for the week, pushing for max height/speed each day.',
    dailyWorkouts: [
      {
        day: 1,
        workout: 'Box Jump Practice: 4 sets of 10 Box Jumps (or Step Ups if no box).',
        targetArea: 'Glutes/Quads',
      },
      {
        day: 2,
        workout: 'High Knee Sprint: 6 rounds of 30 seconds Max Speed High Knees, 30 seconds rest.',
        targetArea: 'Cardio/Speed',
      },
      {
        day: 3,
        workout: 'Active Recovery: 12 mins foam rolling and leg swings.',
        targetArea: 'Recovery',
      },
      {
        day: 4,
        workout: 'Tuck Jump Mania: 4 sets of 10 Tuck Jumps, focusing on bringing knees to chest.',
        targetArea: 'Hip Flexors/Power',
      },
      {
        day: 5,
        workout:
          'Burpee Blitz: 3 sets of 10 Burpees with a jump at the top. Rest 60 seconds between sets.',
        targetArea: 'Full Body Cardio',
      },
      {
        day: 6,
        workout:
          'Velocity Circuit: Jump Squats (15), Star Jumps (10), Plank Jacks (20). Repeat 3 times.',
        targetArea: 'Legs & Cardio',
      },
      { day: 7, workout: 'Rest & Reflect: Light walk or cycle.', targetArea: 'Rest' },
    ],
  },
  {
    id: 'the-mobility-flow-challenge',
    title: 'The Mobility Flow Challenge',
    durationDays: 5,
    theme: 'Joint Health & Flexibility',
    focus: 'Deep stretching and mobility work to improve range of motion and prevent injury.',
    goal: 'Consistently perform the 15-minute routine daily to unlock new depth in major movement patterns.',
    dailyWorkouts: [
      {
        day: 1,
        workout: 'Hip Unlock: 5 minutes each of Couch Stretch and Pigeon Pose (per leg).',
        targetArea: 'Hips/Hip Flexors',
      },
      {
        day: 2,
        workout:
          'Hamstring Relief: 5 minutes each of Standing Forward Fold and Seated Single-Leg Forward Fold (per leg).',
        targetArea: 'Hamstrings/Calves',
      },
      {
        day: 3,
        workout:
          'Shoulder & Chest Opener: 15 minutes of Thread the Needle, Wall Slides, and Pec Stretches.',
        targetArea: 'Upper Back/Chest',
      },
      {
        day: 4,
        workout:
          "Spine Health: 15 minutes of Cat-Cow, Child's Pose with Lateral Stretch, and Spinal Twists.",
        targetArea: 'Torso/Back',
      },
      {
        day: 5,
        workout:
          'Full Body Flow: 15 minutes combining the best moves from days 1-4 into a single sequence.',
        targetArea: 'Full Body',
      },
    ],
  },
  {
    id: 'iron-arms-challenge',
    title: 'Iron Arms Challenge',
    durationDays: 6,
    theme: 'Push/Pull Dominance',
    focus: 'Developing balanced strength in opposing upper-body muscle groups.',
    goal: "Achieve a target number of total push-ups and rows (or equivalent bodyweight pulls) by the week's end.",
    dailyWorkouts: [
      {
        day: 1,
        workout:
          'Push-Up Pyramid: 1, 2, 3, 4, 5, 4, 3, 2, 1 push-ups. Rest only as long as the previous set took.',
        targetArea: 'Chest/Triceps',
      },
      {
        day: 2,
        workout: 'Back Row Burn: 4 sets of 10 Incline Rows (or Dumbbell Rows per arm).',
        targetArea: 'Back/Biceps',
      },
      {
        day: 3,
        workout: 'Shoulder Blast: 3 sets of 10 Pike Push-ups and 10 Wall Slides.',
        targetArea: 'Shoulders',
      },
      {
        day: 4,
        workout: 'Push-Up Endurance: Max push-ups in 60 seconds. Repeat 2 times.',
        targetArea: 'Chest Endurance',
      },
      {
        day: 5,
        workout:
          'Pull & Hold: 4 sets of 30 seconds Plank Hold + 10 Australian Rows (or resistance band pull).',
        targetArea: 'Core/Back',
      },
      {
        day: 6,
        workout:
          'AMRAP (As Many Reps As Possible): 10 minutes of alternating 5 Push-ups and 5 Rows. Track total reps.',
        targetArea: 'Full Upper Body',
      },
    ],
  },
  {
    id: 'the-kettlebell-king-queen-challenge',
    title: 'The Kettlebell King/Queen Challenge',
    durationDays: 5,
    theme: 'Functional Power',
    focus:
      'Integrating the posterior chain and dynamic movement (requires one kettlebell or dumbbell).',
    goal: 'Master the Kettlebell Swing and track total reps performed over the five days.',
    dailyWorkouts: [
      {
        day: 1,
        workout:
          'Hinge Practice: 10 minutes focusing *only* on the Kettlebell Deadlift and Hip Hinge mechanics.',
        targetArea: 'Glutes/Hamstrings',
      },
      {
        day: 2,
        workout:
          'Swing Technique: 5 sets of 10 Kettlebell Swings, focusing on a perfect hip snap and tension.',
        targetArea: 'Posterior Chain',
      },
      {
        day: 3,
        workout:
          'Goblet Squat & Press: 3 sets of 10 Goblet Squats followed by 10 Overhead Presses.',
        targetArea: 'Legs/Shoulders',
      },
      {
        day: 4,
        workout: 'Single Arm Swing: 4 sets of 8 Swings per arm, resting 30 seconds between sets.',
        targetArea: 'Anti-Rotation Core',
      },
      {
        day: 5,
        workout: 'KB FINISHER: 10 minutes AMRAP of 5 Swings, 5 Goblet Squats, 5 Push-ups.',
        targetArea: 'Full Body Power',
      },
    ],
  },
]

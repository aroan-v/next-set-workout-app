export const dailyChallengeCardContent = {
  name: 'Functional Training',
  minutes: 45,
  kCal: 1250,
  exercises: 5,
  src: '/images/workout/functional-training.jpg',
  alt: 'Functional training',
}

export const workoutRoutines = [
  // 1. FULL BODY WORKOUT (Bodyweight/Dumbbell Focus)
  {
    id: 'full-body-1',
    name: 'Full Body A (Foundational)',
    minutes: 45,
    kCal: 700,
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
]

export const workoutRoutinesV2 = [
  {
    id: 'upper-body',
    name: 'Upper Body',
    minutes: 60,
    kCal: 1320,
    exercises: [
      { id: 'Dumbbell_Bench_Press', name: 'Dumbbell Bench Press', sets: 4, reps: 10, rest: 75 },
      {
        id: 'Dumbbell_Shoulder_Press',
        name: 'Dumbbell Shoulder Press',
        sets: 3,
        reps: 12,
        rest: 60,
      },
      { id: 'Wide-Grip_Lat_Pulldown', name: 'Wide-Grip Lat Pulldown', sets: 3, reps: 10, rest: 60 },
      { id: 'Dumbbell_Bicep_Curl', name: 'Dumbbell Bicep Curl', sets: 3, reps: 12, rest: 45 },
      { id: 'Triceps_Pushdown', name: 'Triceps Pushdown', sets: 3, reps: 12, rest: 45 },
    ],
    src: '/images/workout/routine-1.jpg',
    alt: 'Upper body workout',
  },
  {
    id: 'lower-body',
    name: 'Lower Body',
    minutes: 55,
    kCal: 1180,
    exercises: [
      { id: 'Barbell_Squat', name: 'Barbell Squat', sets: 4, reps: 8, rest: 90 },
      { id: 'Romanian_Deadlift', name: 'Romanian Deadlift', sets: 3, reps: 10, rest: 90 },
      { id: 'Leg_Press', name: 'Leg Press', sets: 3, reps: 12, rest: 60 },
      { id: 'Dumbbell_Lunges', name: 'Walking Lunges', sets: 3, reps: 20, rest: 60 },
      { id: 'Standing_Calf_Raises', name: 'Calf Raise', sets: 4, reps: 15, rest: 30 },
    ],
    src: '/images/workout/routine-2.jpg',
    alt: 'Lower body workout',
  },
  {
    id: 'full-body',
    name: 'Full Body',
    minutes: 70,
    kCal: 1450,
    exercises: [
      { id: 'Barbell_Deadlift', name: 'Deadlift', sets: 4, reps: 6, rest: 120 },
      { id: 'Dumbbell_Bench_Press', name: 'Bench Press', sets: 3, reps: 8, rest: 90 },
      { id: 'Pullups', name: 'Pull-Up', sets: 3, reps: 10, rest: 90 },
      { id: 'Dumbbell_Lunges', name: 'Dumbbell Lunge', sets: 3, reps: 12, rest: 60 },
      { id: 'Plank', name: 'Plank Hold', sets: 3, reps: '60s', rest: 30 },
    ],
    src: '/images/workout/routine-3.jpg',
    alt: 'Full body workout',
  },
  {
    id: 'push-day',
    name: 'Push Day',
    minutes: 65,
    kCal: 1280,
    exercises: [
      {
        id: 'Barbell_Incline_Bench_Press_-_Medium_Grip',
        name: 'Incline Bench Press',
        sets: 4,
        reps: 10,
        rest: 90,
      },
      { id: 'Dumbbell_Shoulder_Press', name: 'Overhead Press', sets: 3, reps: 10, rest: 60 },
      { id: 'Incline_Cable_Flye', name: 'Cable Chest Fly', sets: 3, reps: 12, rest: 60 },
      { id: 'Dips_-_Triceps_Version', name: 'Triceps Dips', sets: 3, reps: 12, rest: 45 },
      { id: 'Side_Lateral_Raise', name: 'Lateral Raise', sets: 3, reps: 15, rest: 45 },
    ],
    src: '/images/workout/routine-4.jpg',
    alt: 'Push day workout',
  },
  {
    id: 'pull-day',
    name: 'Pull Day',
    minutes: 60,
    kCal: 1220,
    exercises: [
      {
        id: 'Barbell_Incline_Bench_Press_-_Medium_Grip',
        name: 'Barbell Row',
        sets: 4,
        reps: 8,
        rest: 90,
      },
      { id: 'Wide-Grip_Lat_Pulldown', name: 'Lat Pulldown', sets: 3, reps: 10, rest: 60 },
      { id: 'Seated_Cable_Rows', name: 'Seated Cable Row', sets: 3, reps: 12, rest: 60 },
      { id: 'Hammer_Curls', name: 'Dumbbell Hammer Curl', sets: 3, reps: 12, rest: 45 },
      { id: 'Face_Pull', name: 'Face Pull', sets: 3, reps: 15, rest: 45 },
    ],
    src: '/images/workout/routine-5.jpg',
    alt: 'Pull day workout',
  },
]

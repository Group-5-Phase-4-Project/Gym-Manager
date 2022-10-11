# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "starting programs"
Program.create(
    name: "Cardio",
    duration:  1,
    description: "Any rhythmic activity that raises your heart rate into your target heart rate zone. This is the zone where you burn the most fat and calories"
),
Program.create(
    name: "Strength",
    duration: 3,
    description: "Resistance training is the use of resistance to muscular contraction to build strength, anaerobic endurance and size of skeletal muscles."
),
Program.create(
    name: "Yoga",
    duration: 2,
    description: "A spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and scince of healthy living"
),
Program.create(
    name: "Dance",
    duration: 2,
    description: "Whole-body workout that's actually fun. It's good for your heart, it makes you stronger, and it can help with balance and coordination. A 30-minute dance class burns between 130 and 250 calories, about the same as jogging."
),
Program.create(
    name: "Calisthenics",
    duration: 4,
    description: "Exercises that don't rely on anything but a person's own body weight."
),
Program.create(
    name: "Pushups"
    duration: 1,
    description: "Helps to build muscle and improve strength throughout the upper body. It targets the muscles in your chest (pectoralis major), arms (particularly the triceps) and the shoulders (especially the scapular stabilizing muscles)."
)
puts "starting trainers data"
Trainer.create(
    name: "John",
    specialization: "Yoga",
    background: "A expert with 4 years experience in Yoga and martial arts",
    no_of_trainees: 5
),
Trainer.create(
    name: "Kelvin",
    specialization: "Calisthenics",
    background: "A male models with a huge instagram following. Also a veteran.",
    no_of_trainees: 6
),
Trainer.create(
    name: "Brayo",
    specialization: "Pushups",
    background: "A resistant training expert from Kenya.",
    no_of_trainees: 7
),
Trainer.create(
    name: "Zidanne",
    specialization: "Strength",
    background: "A heavy-weight champion in world strongest men competition.",
    no_of_trainees: 5
)
puts "starting trainees data"
Trainee.create(
    name: "Titus",
    age: 25,
    program_picked: "Yoga"
),
Trainee.create(
    name: "Precious",
    age: 24,
    program_picked: "Strength"
),
Trainee.create(
    name: "Glenn",
    age: 24,
    program_picked: "Calisthenics"
),
Trainee.create(
    name: "Daisy",
    age: 21,
    program_picked: "Strength"
),
Trainee.create(
    name: "Aimkeys",
    age: 22,
    program_picked: "Pushups"
),
Trainee.create(
    name: "Ambundo",
    age: 22,
    program_picked: "Dance"
),
Trainee.create(
    name: "David",
    age: 26,
    program_picked: "Dance"
),
Trainee.create(
    name: "Esther",
    age: 27,
    program_picked: "Yoga"
),
Trainee.create(
    name: "Elizabeth",
    age: 22,
    program_picked: "Pushups"
),
Trainee.create(
    name: "Annitah",
    age: 25,
    program_picked: "Calisthenics"
)
puts "starting review"
Review.create(
    name: "Annitah",
    body: "I love the programs that I get from mhy trainers. Kudos!"
),
Review.create(
    name: "Daisy",
    body: "I did not know what my body requires in terms of exercise untill I met my trainer. Thank you."
),
Review.create(
    name: "Glenn",
    body: "My program helped me rediscover my inner-self, now am more productive in other areas!"
),
Review.create(
    name: "Titus",
    body: "I was overweight but I realized that it only takes a few month to loose weight. Thanks to Kelvin! "
),
Review.create(
    name: "Precious",
    body: "Gym-Manager is the best!"
)
puts "Done seeding"
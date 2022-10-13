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
    description: "Any rhythmic activity that raises your heart rate into your target heart rate zone. This is the zone where you burn the most fat and calories",
    image: "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558__340.jpg"
    
)
Program.create(
    name: "Strength",
    duration: 3,
    description: "Resistance training is the use of resistance to muscular contraction to build strength, anaerobic endurance and size of skeletal muscles.",
    image: "https://images.pexels.com/photos/4944312/pexels-photo-4944312.jpeg?auto=compress&cs=tinysrgb&w=400"
)
Program.create(
    name: "Yoga",
    duration: 2,
    description: "A spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and scince of healthy living",
    image: "https://images.pexels.com/photos/4327046/pexels-photo-4327046.jpeg?auto=compress&cs=tinysrgb&w=400"
)
Program.create(
    name: "Dance",
    duration: 2,
    description: "Whole-body workout that's actually fun. It's good for your heart, it makes you stronger, and it can help with balance and coordination. A 30-minute dance class burns between 130 and 250 calories, about the same as jogging.",
    image: "https://images.pexels.com/photos/1701207/pexels-photo-1701207.jpeg?auto=compress&cs=tinysrgb&w=400"
)
Program.create(
    name: "Calisthenics",
    duration: 4,
    description: "Exercises that don't rely on anything but a person's own body weight.",
    image: "https://images.pexels.com/photos/8401805/pexels-photo-8401805.jpeg?auto=compress&cs=tinysrgb&w=400"
)
Program.create(
    name: "Pushups",
    duration: 1,
    description: "Helps to build muscle and improve strength throughout the upper body. It targets the muscles in your chest (pectoralis major), arms (particularly the triceps) and the shoulders (especially the scapular stabilizing muscles).",
    image: "https://images.pexels.com/photos/4753990/pexels-photo-4753990.jpeg?auto=compress&cs=tinysrgb&w=400"
)
puts "starting trainers data"
Trainer.create(
    name: "John",
    specialization: "Yoga",
    background: "A expert with 4 years experience in Yoga and martial arts",
    no_of_trainees: 5
)
Trainer.create(
    name: "Kelvin",
    specialization: "Calisthenics",
    background: "A male models with a huge instagram following. Also a veteran.",
    no_of_trainees: 6
)
Trainer.create(
    name: "Brayo",
    specialization: "Pushups",
    background: "A resistant training expert from Kenya.",
    no_of_trainees: 7
)
Trainer.create(
    name: "Zidanne",
    specialization: "Strength",
    background: "A heavy-weight champion in world strongest men competition.",
    no_of_trainees: 5
)

# puts "trainees data"

# 15.times do
#     seeded_trainees = Trainee.create(
#         name: Faker::Name.name,
#         age: rand(18..35),
#         program_picked: ['Calisthenics', 'Yoga', 'Strength', 'Dance', 'Pushups'].sample,
        
#     )
# end


puts "starting trainees data"
Trainee.create(
    name: "Titus",
    age: 25,
    program_picked: "Yoga",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 89,
    height: 177,
    gender: "male",
    password: "1234"


)
Trainee.create(
    name: "Precious",
    age: 24,
    program_picked: "Strength",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 59,
    height: 159,
    gender: "female",
    password: "5678"

)
Trainee.create(
    name: "Glenn",
    age: 24,
    program_picked: "Calisthenics",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 79,
    height: 182,
    gender: "male",
    password: "9012"


)
Trainee.create(
    name: "Daisy",
    age: 21,
    program_picked: "Strength",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 69,
    height: 169,
    gender: "female",
    password: "3456"

)
Trainee.create(
    name: "Aimkeys",
    age: 22,
    program_picked: "Pushups",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 69,
    height: 189,
    gender: "male",
    password: "7890"

)
Trainee.create(
    name: "Ambundo",
    age: 22,
    program_picked: "Dance",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 91,
    height: 189,
    gender: "male",
    password: "1234"

)
Trainee.create(
    name: "David",
    age: 26,
    program_picked: "Dance",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 89,
    height: 189,
    gender: "male",
    password: "5678"

)
Trainee.create(
    name: "Esther",
    age: 27,
    program_picked: "Yoga",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 79,
    height: 139,
    gender: "female",
    password: "9101"

)
Trainee.create(
    name: "Elizabeth",
    age: 22,
    program_picked: "Pushups",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 109,
    height: 89,
    gender: "female",
    password: "1121"

)
Trainee.create(
    name: "Annitah",
    age: 25,
    program_picked: "Calisthenics",
    trainer_id: rand(1..4),
    program_id: rand(1..5),
    weight: 89,
    height: 149,
    gender: "female",
    password: "1314"

)
puts "starting review"
Review.create(
    name: "Annitah",
    body: "I love the programs that I get from my trainers. Kudos!",
    program_id: rand(1..5),
    trainee_id: rand(1..10)
)
Review.create(
    name: "Daisy",
    body: "I did not know what my body requires in terms of exercise untill I met my trainer. Thank you.",
    program_id: rand(1..5),
    trainee_id: rand(1..10)
)
Review.create(
    name: "Glenn",
    body: "My program helped me rediscover my inner-self, now am more productive in other areas!",
    program_id: rand(1..5),
    trainee_id: rand(1..10)
)
Review.create(
    name: "Titus",
    body: "I was overweight but I realized that it only takes a few month to loose weight. Thanks to Kelvin! ",
    program_id: rand(1..5),
    trainee_id: rand(1..10)
)
Review.create(
    name: "Precious",
    body: "Gym-Manager is the best!",
    program_id: rand(1..5),
    trainee_id: rand(1..10)
)
puts "Done seeding"



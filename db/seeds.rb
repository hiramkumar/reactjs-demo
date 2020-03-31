# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

surveys = [
            {name: "Q1 Review", status: 0},
            {name: 'Q2 Review', status: 0},
            {name: "Q3 Review", status: 1},
            {name: '2019 Year Review', status: 1}
        ]

        puts "Started creating Survey"
surveys.each do |survey|
    puts "Creating #{survey[:name]} Survey"
    Survey.create(survey)
end
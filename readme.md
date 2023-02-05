## Entities
    * User
    * Characters
        - Persons
        - ?Monsters
        - Animals (character's animals)

   #### User
      - id
      - name
      - email
      - password
      - characters

   #### Character
      - id
      - name
      - history
      - ?image -> think (For now, replace with appearance description)
      - age
      - gender
      - NEX (level)
      - class
      - trial (depends on the class)
      - PV (depends on the class and NEX and modifications)
      - PE (depends on the class and NEX and modifications)
      - SAN (depends on the class and NEX and modifications)
      - defense (depends attributes and modifications)
      - displacement -> think
      - attributes (depends on the NEX)
      - origin
      - powers (depends on the class and NEX)
      - skills (depends on the attributes, training, kit and charge)
      - proficiencies (depends on the class)
      - items (weapons, itens for mission etc)
      - inventory (depends on the limit itens(patent category), attribute strength and modifications)
      - patent
      - credit limit (depends patent)

      * CLASS 
         - combatant
         - specialist
         - occultist
      
      * TRIAL
         combatant {
            - annihilator
            - field commander
            - warrior
            - special operations
            - riot police
         }

         specialist {
            - sniper elite
            - infiltrador
            - field doctor
            - negotiator
            - technician
         }

         occultist {
            - conduit
            - scourge
            - graduate
            - intuitive
            - paranormal blade
         }

         * PV
            - class
            - force

         * PE
            - class
            - presence

         * SAN
            - class

         * DEFENSE
            - 10 + agility
            - modifications (hability, itens and condicions)

         * ATTRIBUTES
            - agility
            - strength
            - presence
            - force (vigor)
            - intellect

         * ORIGINS
            - academic
            - health agent
            - amnesic
            - artist
            - athlete
            - chef
            - criminal
            - repentant cultist
            - stray
            - enginner
            - executive
            - investigator
            - figther
            - tycoon
            - mercenary
            - military
            - factory worker
            - police
            - religious
            - public server
            - conspiracy theorist
            - T.I
            - rural worker
            - crook
            - university
            - victim

         * POWERS
            - Paranormal
            - Class

         * SKILLS
            - agility {
               - stunt (acrobacia) -> {
                  - charge
               }
               - crime -> {
                  - charge
                  - kit
                  - trained
               }
               - stealth -> {
                  charge
               }
               - initiative
               - pilotage -> {
                  - trained
               }
               - aim
               - reflexes
            }
            
            - strength {
               - athletics
               - fight
            }

            - presence {
               - dressage -> {
                  - trained
               }
               - art -> {
                  - trained
               }
               - diplomacy
               - cheat -> {
                  - kit
               }
               - intimidation
               - perception
               - religion -> {
                  - trained
               }
               - desire (vontade)
            }

            - intellect {
               - current affairs
               - sciences -> {
                  - trained
               }
               - intuition
               - investigation
               - medicine -> {
                  - kit
               }
               - occultism -> {
                  - trained
               }
               - profession -> {
                  - trained
               }
               - survival
               - tactic -> {
                  - trained
               }
               - technology -> {
                  - trained
                  - kit
               }
            }

            - force {
               - fortitude
            }

         * INVENTORY
            - Limit Category
            - Limit Charge (1 strength = 5 spaces in inventory, 0 strength = 2)
            - modification itens (bag etc.)

         * PATENT
            - recruit
            - operator
            - special agent
            - operations officer
            - elite agent
         
         * CREDIT LIMIT AND CATEGORY ITEMS
            recruit {
               - low
               - item category = 2 I
            }

            operator {
               - average
               - item category = 3 I, 1 II
            }

            special agent {
               - average
               - item category = 3 I, 2 II, 1 III
            }

            operations officer {
               - high
               - item category = 3 I, 3 II, 2 III, 1 IV
            }


            elite agent {
               - unlimited
               - item category = 3 I, 3 II, 3 III, 2 IV
            }

         * ITEMS
            - weapons
            - protections
            - general equipment
            - paranormal items
   
         * WEAPONS
            - proficiencies {
               - simple weapons
               - tactical weapons
               - heavy weapons
               - penality for non-proficiency
            }

            - type {
               - melee
               - ranged attack {
                  - pitch (arremesso)
                  - shooting
                  - fire
               }
            }

            - hilt {
                  - light
                  - one hand
                  - two hands
               }

            - category
            - damage
            - critical
            - reach

            - type damage {
               - cut (C)
               - impact (I)
               - drilling (P)
               - ballistic (B)
            }

            - space
            
            - ammunition {
               - short bullets
               - long bullets
               - cardtridges
               - fuel
               - arrows
               - rocket
            }

            - weapons hability {
               - agile weapons
               - automatic weapons
               - butt weapon
            }

            - weapons modifications {
               - elongated
               - large caliber
               - accurate
               - compensator
               - cruel
               - discreet
               - dum dum
               - explosive
               - automatic bolt
               - laser sight
               - telescopic sight
               - dangerous
               - silencer
               - tactic
               - heat vision
            }

         * PROTECTIONS
            - characteristics of protections {
               - defense
               - category
               - space
            }

            - proficiencies {
               - light protection
               - heavy protection
               - shield
               - penality for non-proficiency
            }

            - modifications {
               - bomb disposal
               - armored
               - discreet
               - reinforced
            }

   #### Animals
      - owner
      - attributes
      - PV
      - defense
      - skills
      - actions

### Use Cases
 #### User
    * Create User
    * Load User
    * Edit User
    * Delete User
    * User -> confirmation in Email (nodemailer)
    * User -> save in db (need think of the database)

 #### User with Characters
    * User can have multiple characters
    * User can edit characters (name, history, image etc.)
    * User can change settings(PV, PE, SAN) of the characters

 #### Settings System
    * Roll dices (with modifications according to the character sheet)

    -> THINK
        - character distance system
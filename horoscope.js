// Write code below 💖
/*
    Horoscopes from:
    https://www.washingtonpost.com/entertainment/horoscopes/
    https://www.elle.com/horoscopes/
    https://astrotalk.com/horoscope/daily-horoscope
*/

let month = 4; //prompt("Enter your birth month as an integer (1-12)");
let fortune = Math.floor(Math.random()*3);
let capricorn = [
    "If there's someone in your social group everyone dislikes but you, then maybe you should give this person another, more objective review.",
    "Hold your horses! This weekend's feud between Venus and Pluto puts instant gratification out of reach.",
    "Today, it is very possible that you will have lots of financial luck. Do something risky today."
]
let aquarius = [
    "Checking in with the people you like spending time with is what you need right now to stay grounded.",
    "Is it just a figment of your imagination? This weekend's Venus-Pluto squabble could leave you scratching your head and wondering if you've made a big deal out of nothing.",
    "You are going to have lots and lots of financial good luck. The numbers that you should look out for are 56 and 78."
]
let pisces = [
    "Why do you have to take at face value the rules of someone who is in authority? Dissent is not only acceptable in this situation, it is wise.",
    "Under this weekend's friction-filled square between Venus and Pluto, the push-pull dynamic could get tired. A game of cat-and-mouse can be sexy to a point, but eventually you just want to know whether someone is into you or not.",
    "The numbers 89, 39 and 35 will have a very deep meaning for you today and bring you lots of luck."
]
let aries = [
    "A rude or insensitive person could cause you some complications this morning",
    "A partnership is humming along nicely when suddenly, this weekend's stressful Venus-Pluto dustup pumps the brakes.",
    "Today is not an auspicious day to start anything new. Keeping a positive frame of mind would be challenging."
]
let taurus = [
    "Be careful of other people who seem too good to be true today, because they probably are.",
    "Is it time for a relationship tune-up? Your ruling planet, amorous Venus, is clashing with ominous Pluto this weekend, giving you the feeling that all is not well between you and a certain someone.",
    "You may have lots of financial luck. The number 94, 20 and 47 are going to be your lucky numbers for today."
]
let gemini = [
    "Right now it's your emotional nature that is going to be your driving force in life, but that needs to start changing.",
    "You could get into hot water this weekend as desirous Venus squares off with intense Pluto, turning up the heat in a relationship.",
    "Strive to create your own good fortune."
]
let cancer = [
    "You will be doing yourself a service by taking your time today, especially in terms of any decisions you have to make.",
    "Someone could hit a nerve and hurt your feelings this weekend as sweet Venus feuds with intense Pluto in your interpersonal realm.",
    "Your lucky numbers are going to be 38, 92, 3, 19 and 6 today. If you have a lucky amulet, bring it along today."
]
let leo = [
    "The past is coming back not to haunt you but to thrill you!",
    "Are you really helping people with your 'helpful' input? A stressful square between sweet Venus in your communication center and destructive Pluto in your criticism corner this weekend implies the answer to that question may not be 'yes'.",
    "Jupiter is sending good energy your way. The numbers 38, 90, 34, 22, 81, and 19 are going to bring you a lot of financial luck."
]
let virgo = [
    "Today, you need to move away from multitasking and just try to focus on one thing at a time.",
    "Stability or drama? This weekend, a tense square between amorous Venus in your rock-steady second house and intense Pluto in your theatrical fifth could leave you torn.",
    "You are lucky in property matters."
]
let libra = [
    "Try to make finding out about people from other cultures your new hobby today.",
    "This weekend's stressful square between your ruler, amiable Venus, in your sign and intense Pluto could trigger turbulent emotions that affect your home life or cast a dark cloud over your previously pleasant vibe.",
    "The color red is going to have a very lucky meaning for you. You will have some luck if you are gambling today."
]
let scorpio = [
    "Try to avoid making any impulse buys right now, especially on big-ticket items.",
    "You're likely to put out mixed messages this weekend as sweet Venus in your subliminal sector clashes with your ruler, dominant Pluto, in your communication camp.",
    "Luck is good generally as you have a positive attitude."
]
let sagittarius = [
    "Even without trying you're going to be a source of inspiration for someone today, and they won't be shy about letting you know it.",
    "When Venus and Pluto square off this weekend, one part of you is craving freedom, but another part wants to drop anchor.",
    "The numbers 77 and 5 are going to bring you lots of good luck today. Especially in the financial department."
]

if (month == 1){ console.log(capricorn[fortune]) }
else if (month == 2){ console.log(aquarius[fortune]) }
else if (month == 3){ console.log(pisces[fortune]) }
else if (month == 4){ console.log(aries[fortune]) }
else if (month == 5){ console.log(taurus[fortune]) }
else if (month == 6){ console.log(gemini[fortune]) }
else if (month == 7){ console.log(cancer[fortune]) }
else if (month == 8){ console.log(leo[fortune]) }
else if (month == 9){ console.log(virgo[fortune]) }
else if (month == 10){ console.log(libra[fortune]) }
else if (month == 11){ console.log(scorpio[fortune]) }
else if (month == 12){ console.log(sagittarius[fortune]) }
else { console.log("I don't know what month that is...🤔") }

# Working Title Collective
The working title collective is a think tank group who want to share in hobbies in a safe a cheap space
***Planned Launch, 2026***

### Main Players
- Adam Cunard
- Jeremy Cox
- Jovie LaRue

From our time trying to find work and friends in calgary, events suck. 

#### Computer Science
> Everything is a networking event where you talk to new people who tell you about a project you dont care about, then you tell them about a project you barely care about, exchange linkdin's, unfollow them after a week because they are way too bullish about AI.
> It's increasingly harder to find like minded individuals who are doing intresting things and have a passion for what they do

#### Beer
> Every event these days makes you pay $$$ to get in, then charges you crazy amounts of money for beer you could drink at home. Instead you get to yell at your friends from 2 feet away drinking a 10$ surrounded by people who's goal is to get as intoxicated and belegerant in record time

#### Bars / Club
> Lets all go to a too loud building, to step on sticky floors, and only talk to the people we came with. Oh by the way that was 50$
---
Events are not expensive, the reason you pay so much is because people are only willing to throw events if they can make money hand over fist. In difficult times people are looking more and more for cheap events with good people, in comes the working title collective.

## Balmers Peak
The first event to host is Balmer's Peak, capitalizing on the giant supply of poor, unemployed, computer scientists. We are creating an event for people to go out and meet new people who share in what they love. No blaring music, no venture capitalists (maybe a few), no bullshit. Scared to meet new people? so is everyone else.

---
### Breakdown
Peaks should be monthly, this keeps consistency and lets us only worry about 1 event at a time. This lets us add news features for each event as an extra draw to show up, bonuses for keeping up a streak. 
All money will be spent through the website, no square or POS implementation, pushes simplicity and and saves money

#### Event Software
Create an account, gives you a unique qr code that can be scanned by any phone.

#### Endpoints Needed

> - CRUD for accounts (user profiles -- CRUD for photo, qr code linking to profile (only CR), details, socials)
> - CRUD for events
> - CRUD for tickets (includes QR code generation)
> - CRUD for drink and food tickets (tickets scanned by bartenders, activate before use, consumable tickets)
> - /login and /logout with JWT
> - /buy event ticket (with [Helcim](https://devdocs.helcim.com/docs/payment-api) integration)
> - /verify entry or drink or food tickets (allow one entry per ticket)
#### QR Interactions
Anyone can scan your QR code, (Maybe later we could allow people to import designs).

Goal with QR code is to have it be your key for everything, entry to event, purchasing drinks, connecting with people, struting your stuff.
If you like talking to someone, ask to scan their code. You can instantly connect with them through socials and check out their work.

**Bouncer**

> No specific application, Any QR code scan will tell you if they have bought a ticket for the event
> (able to ban individual QRs)

**Drink Service**
> NEEDS WORK
> I dont want a seperate app for deducting drink tickets, maybe a special auth token that lets "Admins" interact with QR codes with write perms

**Event Attendees**

> Scanning the QR code gives a breakdown of that users account, this includes
> - Admission for this months Balmers Peak (true or false)
> - Drink tickets (number)
> - Peaks attended
> - Socials
> - Portfolio Website


### Cost
There is no labor cost factored in, I will be doing this as volunteer hoping to just make things grow. Profits will be divided amoung organizers but the goal for balmers peak is to make events that pay for themselves NOT TO TAKE MONEY FROM PEOPLE. This is an exchange of services and community. If we are can grow and be succesful money will come through that just getting enough people at the events, even with low margins on drinks we can make some money

Below calculations are for the social room
Expected Costs:
- Rent 50$/hr for 3 hours, 150$ 
- PAL, 115$ (Annually possible, Contact christine.lishman@palcanada.com)
- Private Resale SEL 25$

Total 290$
if tickets cost 6.5, cost is covered. Liqor margins is all profit + non-alc + snack sales


[Hall Rentals](https://mycalgary.com/?s=hall+rentals)

[North Haven rental](https://northhavenyyc.ca/hall-rentals)
> meeting room, capacity 30
> 30/hour for 2 hour rental. 60$
> includes non-commercial kitchen

> Main Hall, capacity 100
> 40-55/hour for 3 hour rental
> projector screen, no projector

[Renfrew Community Association](https://www.renfrewyyc.ca/hall-rental)
> Social Room is crazy, capacity 45
> Crazy location, actually goated spot
> 50$/hour min 3 hours, 150$
> 2 Pool tables, Darts, Shiffleboard
> big TV with chromecast

[Winston Heights](https://winstonheights.ca/hall-rentals/rental-information/)
> Founders Rooms is small and cheap, capacity 15
> Crazy location central location
> 25$/hour, no displayed min. no deposit
> Large Monitor, whiteboards, small fridge
> Good for starting out
>
> North Hall is also a good spot for larger event




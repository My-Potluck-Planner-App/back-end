# 🍽 *Potluck Planner*: Bloom Tech Build Week, December 2022

> The purpose of Build Week is to empower students to demonstrate mastery of your learning objectives. The Build Weeks experience helps prepare students for the job market.
> 

### ☝️ **Pitch**

If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. In the world of social gatherings and potlucks, "Potluck Planner" is king. This is your place for all things pot luck.

### ✅  **MVP**

1. As an `organizer` I can create an upcoming `potluck` and invite my friends to attend

2. As an `organizer` I can adjust `date`s, `time`s and `location`s of the potluck

3. As an `organizer` I can use the list feature in my app to add food `items` that we'd like to see at the potluck

4. As a `guest` to a potluck I want to be able to confirm that I'm going to the upcoming `event`

5. As a `guest` I'd like to be able to select which `item`s I'd like to be responsible for bringing

### *Heroku API*

Deployed URL: [https://deployedPotLuckPlannerAPI.heroku.com](https://deployedPotLu)

# *API Endpoints*

[Authentication](https://www.notion.so/42ba18c80d6a42de97fbe6243ca275f7)

[Users](https://www.notion.so/d839a0d8125540b78623013cbc28a42f)

# *Meet the Team*

![anon.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dde1f29-ec42-45ff-b151-574c24bf60b4/anon.png)

***Person One 
Front End React I Engineer***

Github: https://github.com/personOne

LinkedIn: https://linkedin.com/personOne

![anon.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dde1f29-ec42-45ff-b151-574c24bf60b4/anon.png)

***Person Two 
Front End React I Engineer***

Github: https://github.com/personTwo

LinkedIn: https://linkedin.com/personTwo

![anon.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dde1f29-ec42-45ff-b151-574c24bf60b4/anon.png)

***Person Three 
Front End Architect  React II Engineer***

Github: https://github.com/personThree

LinkedIn: https://linkedin.com/personThree

![anon.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dde1f29-ec42-45ff-b151-574c24bf60b4/anon.png)

***Person Four 
Backend Engineer***

Github: https://github.com/personFour

LinkedIn: https://linkedin.com/personFour


Monday:

[x] User Login/Signup endpoints built out including the User Models Use JWT/Sessions strategies learned in Authentication.
[x] React app and Backend App talking to one another, focus on CORS issues
        Endpoints:
                http://localhost:8080/user -get
                http://localhost:8080/user/session -get
                http://localhost:8080/auth/register -post
                http://localhost:8080/auth/login -post
                http://localhost:8080/auth/logout -get
[x] Data Migrations and Seeds set up for mock data
        {
                id: 1, 
                username: 'Bloom', 
                password: 'Tech', 
                event: 'Sunday Revival',
                confirmed: true,
                authed: false,
                item: potato salad
        }
        {
                id: 2, 
                username: 'Lambda', 
                password: 'University',
                event: "Party at Patty's",
                confirmed: false,
                authed: true,
                item: coleslaw
        }, 
        {
                id: 3, 
                username: 'test', 
                password: 'test',
                event: "Dave's backyard BBQ",
                confirmed: false,
                authed: false,
                item: BBQ
        }, 
[x] Together with my team, I populated backlog on Trello with user stories
[x] Together with my team, finished up Product Vision Document (don't skimp on planning)
[x] All Project's file structures scaffolded and project architecture decided

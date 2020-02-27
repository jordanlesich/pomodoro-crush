## Pomodoro Crush

**What is Pomodoro Crush?** 

Pomodoro Crush is a gamified productivity tool meant for crushing larger tasks into oblivion. It takes the focus of the pomodoro app, drizzles in the simple organization a todo-list provides, and bakes it all into a sweet gamified experience that is all at once simple, impactful, yet lip-smackingly palatable. 

In other words, it's a hybrid Pomodoro/Todo App made in Create React App.

*NOTE*: This app is still in its basic testing stages, and still has many bugs and features to be worked out. Feedback is greatly appreciated. Just make sure that any bugs or additional features you would like to see aren't listed in the Bugs or Features to come sections. 

**Currently Existing Features**

- Circle SVG Pomodoro Timer
- Reactive, play, pause, buttons
- Todo List that remembers how many Pomodoros a task will take
- User can create, delete, and edit tasks. 
- Timer reacts to Items on the Todo list and vice versa
- Certain buttons lock and are disabled in focus mode.
- User can set their own options, such as:
  - Focus Time and Break Time
  - The sounds that the timer plays upon completion 
- App saves Game Score, preferences, and tasks to local storage
- The app uses a simple point system that rewards the user for finishing all of their work.
-  Each component reacts to whether or not the timer is currently in use, whether or not they are on break, and whether or not they have tasks in the todo-list. 
- Is responsive to different viewport sizes
- Has keyboard shortcuts the user can navigate to increase productivity 

**Game Rules**

- The goal is for the player to increase their high score. 
- Every day is a try at increasing that high score. 
- The app awards the player 100 score points for each Pomodoro completed + a score point for the amount of crush power they have

Crush Power Bonuses

- The amount of crush power increases by one when the player completes a focused work session (Pomodoro) 
- The player also recieves a Crush Power Bonus when they finish a task. They will recieve +1CP for each Pomodoro in that task. 
- Every time the player increases their score, if the score is higher than their currently existing high score, then it updates. 

By the end of the day (midnight): 

  - If the player has completed all of their tasks, we erase their score, but let them keep all of their crush power. This will allow them to get more points for each Pomodoro they complete the following day. 
  - If the player has not completed all of their tasks, then we erase their Points and their Crush Power, effectively starting them at zero. 
  
The score system is designed to reward users who create realistic expectations and complete all of their daily goals, and virtually spank those who do not. Those who complete all of their tasks for more days in a row will have a vastly higher score than those who do not. 


**How does one unleash the power of Pomodoro Crush?**

Create a task and decide how many focused work sessions (Pomodori) it will take to complete the work for this task today. Then run the pomodoro timer when you are working on that task. Take or skip breaks in between session. Once all the pomodori are completed for that task, move on to the next task. 

**What the Hell is a Pomodoro?" 

The Pomodoro technique is a focus/time management tool that lets us break down long tasks into short, focused work sessions. We usually run a timer for 25 mins for focused work, followed by a five minute timer for a short break. While we are doing this, we close ourselves to any distractions. Don't answer your phone. Do not open Facebook during this time. Then, on our break, we can promptly deal with those distraction before resuming our work. 

By utilizing this technique, we build our focus muscle. Over time, the amount of focused work we can produce increases. We also develop a better way of measuring our performance and how long tasks will take. But most importantly, becuase we are devoting ourselves to a task, without distraction, the quality of our work will improve. 

The original creator of the Pomodoro Technique first used a tacky tomato-shaped kitchen timer for this technique. Which is why it is called Pomodoro (Italian for Tomato)

Read more about the Pomodoro Technique on the creator's website here: https://francescocirillo.com/pages/pomodoro-technique

**What makes Pomodoro Crush Different?**

It'd be easy to write off Pom Crush as just another Pomodoro app, or just another todo app. But Pomodoro Crush merges the benefits of both productivity tools and combines them into a single gamified system. Pomodoro Crush allows the user to set their tasks for their day, then apply time and work to those tasks until they are vanquished to the dark, empty voids of oblivion (...it counts down instead of up). 

The mini-game system of the app rewards the user for finishing all the tasks for the day, and punishes them for leaving tasks uncompleleted. If you want to increase your high score, you'll need to finish all of your commitments for the day.  

Will finish Readme tomorrow

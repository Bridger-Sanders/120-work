Bridger Sanders, Section 50

["Sketch"](https://bridger-sanders.github.io/120-work/final_project_submission)

# final_project_submission response

## Process
I spent quite a bit of time trying to figure out the math and how to make collisions between objects work. I knew I needed an avatar for the player to control and objects for the avatar to interact with. Platforms for the avatar to jump on, but also rest on before jumping to the next platform. The avatar would need to look like it was on top of the platform and not partially in it. I had to make the platforms move in the same direction at the same rate and have roughly the same amount of space between them. The avatar would only be able to jump off a platform, but couldn't jump mid air. There also had to be something that would push the avatar down constantly, a gravity effect. The avatar would have to respawn if it fell to the bottom of the screen, and the platforms would have to respawn after passing the left side of the screen. Avatar jump height and platforms had to have the correct spacing, otherwise the avatar would have a platform that was impossible to reach.
## Success & Failure
Getting the avatar to sit on the platforms was difficult, especially since they're moving. I wanted to have platforms be randomly generated and spliced at a certain frame rate, but the avatar would fall through the platforms when I attempted that. I made four separate platforms instead and that seemed to work, but I had to make collision coding for each separate platform. Unfortunately, all the collision coding takes up a lot of space and makes the lines look messy. Another problem I had was creating a gravity effect when the avatar jumped, also the avatar would jump infinitely everytime I pressed a key. Eventually, I was able to make it so that the avatar would only jump off a surface, making it unable to jump in mid air. As for the gravity, I managed to make it so the avatar would be pushed down to the bottom of the screen, unless jumping upward or on a platform. When the platforms hit the avatar while moving along the x axis, the avatar would get stuck in the platform. As a result, I had to make it so the when the avatar made contact with the sides of the platforms the platform would bump the avatar away. 
## Game Instructions
- Press any key to make the square jump.
- Try to jump on each consecutive platform.
- Don't fall between the gaps between the platforms.
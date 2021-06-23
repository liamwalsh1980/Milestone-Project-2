# The Euro Football Quiz 

## Code Institute - Milestone Project 2 (testing)

![Image template](assets/images/readme/testing/responsive-all-pages.png)

<a href="https://liamwalsh1980.github.io/Milestone-Project-2/" target="_blank">Click here to view The Euro Football Quiz live</a>

## Table of contents
1. [Testing](#testing)
    * [Screen sizes](#screen-sizes)
        * [Desktop homepage](#desktop-homepage)
        * [Mobile and tablet hompepage](#mobile-and-tablet-hompepage)
    * [Navigation bar menu](#navigation-bar-menu)
        * [Full screen navigation bar](#full-screen-navigation-bar)
        * [Hamburger navigation bar](#hamburger-navigation-bar)
    * [Media Clip](#media-clip)
        * [Mobile screen](#mobile-screen)
        * [Tablet screen](#tablet-screen)
        * [Desktop screen](#desktop-screen)
        * [Full screen](#full-screen)
    * [User stories tested ](#user-stories-tested)
        * [Story 1](#story-1)
        * [Story 2](#story-2)
        * [Story 3](#story-3)
        * [Story 4](#story-4)
        * [Story 5](#story-5)
    * [W3C Markup Validation Service](#w3c-markup-validation-service)
        * [Homepage tested](#homepage-tested)
        * [Tournament page tested](#tournament-page-tested) 
        * [quiz page tested](#quiz-page-tested)
        * [feedback page tested](#feedback-page-tested)
        * [answers page tested](#answers-page-tested)
    * [W3C CSS Validation Service](#w3c-css-validation-service)
        * [CSS coding tested](#css-coding-tested)
    * [JS Hint Javascript code validator](#js-hint-javascript-code-validator)
        * [Maps.js](#maps.js)
        * [Quiz.js](#quiz.js)
        * [sendEmail.js](#sendemail.js)
    * [Web Browsers](#web-browsers)
        * [Google Chrome](#google-chrome)
        * [Apple Safari](#apple-safari)
        * [Microsoft Edge](#microsoft-edge)
        * [Mozilla Firefox](#mozilla-firefox)
    * [Testing responsiveness](#testing-responsiveness)
        * [Mobile screenshots](#mobile-screenshots)
        * [Tablet screenshots](#tablet-screenshots)
        * [Desktop screenshots](#desktop-screenshots)
        * [Large Desktop screenshots](#large-desktop-screenshots)
    * [Lighthouse testing](#lighthouse-testing)
        * [Desktop results](#desktop-results)
        * [Mobile results](#mobile-results)
    * [Issues found](#issues-found)
        * [Modal](#modal)
        * [Navigation bar](#navigation-bar)
        * [Responsiveness](#responsiveness)
            * [Mobile responsiveness](#mobile-responsiveness)
            * [Tablet responsiveness](#tablet-responsiveness)
            * [Desktop responsiveness](#desktop-responsiveness)
    * [Further testing](#further-testing)
        * [Mobile first](#mobile-first)
        * [External links](#external-links)
        * [Internal links](#internal-links)
        * [Contact form](#contact-form)
    * [Bugs outstanding](#bugs-outstanding)

Return to my [README.md](README.md) 

[Back to top ⇧](#the-euro-football-quiz)

## Testing

### Screen sizes
* Desktop homepage
* Mobile and tablet hompepage

### Navigation bar menu
#### Full screen navigation menu
* On big screens the navigaton bar has page titles. Any page title thats hovered over increases slightly in size. I tested different options i.e. underlining the selected page, however, instead i dediced to go for different colors on pages selected or hovered over as well as the size increase as mentioned.

![Image template](assets/images/readme/testing/nav-bar/navigation-bar.png)

![Image template](assets/images/readme/testing/nav-bar/navigation-bar-highlighted.png)

#### Hamburger navigation bar
* When testing the navigation bar i wanted to make sure that it collapses into a hamburger menu (3 horizontal bars) on smaller screens. This is common practice to have and offers the user the option to look and click onto another page within the website.

![Image template](assets/images/readme/testing/nav-bar/hamburger-menu-collapsed.png)

![Image template](assets/images/readme/testing/nav-bar/hamburger-menu-open.png)

* On smaller mobile screen sizes i needed to adjust the size of the logo text and hamburger navbar to fit as the hamburger menu. I used media queries to to acheive this. 

    ![Image template](assets/images/readme/testing/nav-bar/hamburger-menu-without-media-queries.png)

    ![Image template](assets/images/readme/testing/nav-bar/hamburger-menu-with-media-queries.png)

[Back to top ⇧](#the-euro-football-quiz)

### Media clip

* I tested the media clip on the tournaments.html page on all screen sizes along with full screen size to make sure it loaded and played successfully. 

#### Mobile screen
![Image template](assets/images/readme/testing/media-clip/media-clip-mobile.png)

#### Tablet screen
![Image template](assets/images/readme/testing/media-clip/media-clip-tablet.png)

#### Desktop screen
![Image template](assets/images/readme/testing/media-clip/media-clip-desktop.png)

#### Full screen
![Image template](assets/images/readme/testing/media-clip/media-clip-full-screen.png)

[Back to top ⇧](#the-euro-football-quiz)

### User stories tested

* ### Story 1
    I am an England Football fan. I have always followed England since I starting watching football as a young boy in the early 1980’s. I would like to know more about the tournament going back before I was born to get a better understanding of who hosted and who won the tournament. 
    
    - **The homepage has a timeline with lots of information to start with. Each moment in history on the timeline is also a link to a wikipedia page for even more information. Each link opens in a new tab making it easy for the user to go back to The Euro football quiz site. The tournament.html page also would give the user more information about the history of the competition.**

* #### Steps to take
    On the homepage the timeline can be found to the right of the main hero image on desktops and below the image on mobile screens.  

    ![Image template](assets/images/readme/testing/user-stories/user-story-1-homepage.png)

    Landing page for the yellow selected link as shown above

    ![Image template](assets/images/readme/testing/user-stories/user-story-1-wiki.png)

    For more information about the Euros, the user can also navigate to the tournaments page by clicking on the title page at the top right. 

    ![Image template](assets/images/readme/testing/user-stories/user-story-4-click-tournaments-page.png)

    ![Image template](assets/images/readme/testing/user-stories/user-story-4-tournaments-page.png)

    Alternatively, the user can click the 'Find out more' button found below the timeline on the homepage which also would take them to the tournaments.html page.

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-homepage-button.png)

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-homepage-button-clicked.png)

    Landling page - tournaments.html 

    ![Image template](assets/images/readme/testing/user-stories/user-story-1-tournaments.png)

[Back to top ⇧](#the-euro-football-quiz)

* ### Story 2
    I’m a sports enthusiast and always enjoy being challenged when it comes to football knowledge.  

    - **This user can go straight to the quiz.html page and test their knowledge of the competition. The best way to do this is by clicking on the navigation bar link at the top of the homepage.**  

* #### Steps to take
    From the homepage click on the quiz link within the navigation menu found at the top right of the page. 

     ![Image template](assets/images/readme/testing/user-stories/user-story-2-homepage.png)

    If the user is on the tournaments.html page they can also click the 'Take the quiz' button found at the bottom of the page 

    ![Image template](assets/images/readme/testing/user-stories/user-story-2-tournaments.png)

    Landling page - quiz.html 

    ![Image template](assets/images/readme/testing/user-stories/user-story-2-quiz.png)

[Back to top ⇧](#the-euro-football-quiz)

* #### Story 3 
    I’m part of a weekly pub quiz team. I would like to know more about international football and gain more general knowledge to improve my contribution when I'm with my pub quiz team. 

    - **This user would find the tournaments.html page useful to get some top level information about the competition that would most likely help when it comes to questions being asked in a pub quiz environment. The quiz.html page may be useful to test their knowledge before and after reading the tournaments information.**

* #### Steps to take
    Click on the tournament title page at the top right within the navigation menu.  

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-tournaments.png)

    Alternatively, click the 'Find out more' button found below the timeline on the homepage.

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-homepage-button.png)

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-homepage-button-clicked.png)

    Landling page - tournaments.html 

    ![Image template](assets/images/readme/testing/user-stories/user-story-1-tournaments.png)

    The user can also test their knowledge before or afterwards by click on the quiz.html by either clicking the the quiz page on the top right navigation menu or clicking the 'Take the quiz' button at at the bottom of the tournaments page. 

    ![Image template](assets/images/readme/testing/user-stories/user-story-2-homepage.png)

    ![Image template](assets/images/readme/testing/user-stories/user-story-2-tournaments.png)

    Landling page - quiz.html 

    ![Image template](assets/images/readme/testing/user-stories/user-story-2-quiz.png)

[Back to top ⇧](#the-euro-football-quiz)

* #### Story 4 
    I like taking my children to sports events and would like to know whether this football tournament is due to be hosted at some point soon that's close enough to travel to and attend a couple of games.  

    - **This user can navigate to the tournements.html page where the title is 'The History, Trophy, Hosts, and Future Tournaments'.  They can then find information about the current tournament being played as of 11th June to 11th July 2021 and future tournaments to be played. The user can plan trips to a future Euros game convenient to them.**
* #### Steps to take
    Click on the tournament title page at the top right of the navigation menu. 

    ![Image template](assets/images/readme/testing/user-stories/user-story-4-click-tournaments-page.png)

    ![Image template](assets/images/readme/testing/user-stories/user-story-4-tournaments-page.png)

    Alternatively, click the 'Find out more' button found below the timeline on the homepage

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-homepage-button.png)

    ![Image template](assets/images/readme/testing/user-stories/user-story-3-homepage-button-clicked.png)

    Landling page - tournaments.html.

    Scroll down to the bottom of this page to see information about the current and future competitions. This will give the user geographical information of where the hosting nations are with contents and a google map to refer to.

    ![Image template](assets/images/readme/testing/user-stories/user-story-4-tournaments-page-info.png)

[Back to top ⇧](#the-euro-football-quiz)

* #### Story 5
    I would like to been notified of future tournaments relating to International European football.

    - **This user can navigate to the feedback.html page and complete the quick and easy form with name, email and feedback message requesting more information.**  

* #### Steps to take
    From the homepage the user can click the feedback.html page from the top right of the navigation menu. 

    ![Image template](assets/images/readme/testing/user-stories/user-story-5-homepage.png)

    If the user goes to the quiz.html page and completes the quiz a 'Leave feedback' button appears. This button will also take the user to the feedback form to complete. 

    ![Image template](assets/images/readme/testing/user-stories/user-story-5-quiz-page.png)

    Landling page - feedback.html

    ![Image template](assets/images/readme/testing/user-stories/user-story-5-feedback-page.png)

[Back to top ⇧](#the-euro-football-quiz)

### W3C Markup Validation Service

The W3C Markup Validator was used to validate all coding on all five HTML pages of my project.

#### Homepage tested 
(1 error found)

1. The element 'a' must not appear as a descendant of the button element. 

    - **How I resolved this error:** I decided to change the button element to a div element making sure that the link was maintained. A little work using CSS was required to position the button where i wanted it to be. 

I re-tested the code on W3C Markup validator and no errors were found.

![Image template](assets/images/readme/testing/code/html-code-testing-homepage.png)

[Back to top ⇧](#the-euro-football-quiz)

#### Tournament page tested 
(2 errors found)

1. The element 'a' must not appear as a descendant of the button element. 

    - **How I resolved this error:** I decided to change the button element to a div element making sure that the link was maintained. A little work using CSS was required to position the button where i wanted it to be. 

1. The frameborder attribute on the iframe element is obsolete. Use CSS instead.

    - **How I resolved this error:** I removed the frameborder="0" code and made sure that the right CSS code was added in my styling sheet.

I re-tested the code on W3C Markup validator and no errors were found.

![Image template](assets/images/readme/testing/code/html-code-testing-tournament-page.png)

[Back to top ⇧](#the-euro-football-quiz)

#### Quiz page tested 
(3 error found)

1. 3 x The element 'a' must not appear as a descendant of the button element. 

    - **How I resolved this error:** I decided to change the button element to a div element making sure that the link was maintained. A little work using CSS was required to position the buttons where i wanted it to be. This was very important as this page is interactive and certain buttons which are now divs would disappear when the "SEE YOUR SCORE' button is clicked. 

I re-tested the code on W3C Markup validator and no errors were found.

![Image template](assets/images/readme/testing/code/html-code-testing-quiz-page.png)

[Back to top ⇧](#the-euro-football-quiz)

#### Feedback page tested 
(0 errors found)
![Image template](assets/images/readme/testing/code/html-code-testing-feedback-page.png)


#### Answers page tested 
(2 error found)

1. 2 x The element 'a' must not appear as a descendant of the button element. 

    - **How I resolved this error:** I decided to change the button element to a div element making sure that the link was maintained. A little work using CSS was required to position the buttons where i wanted it to be.  

I re-tested the code on W3C Markup validator and no errors were found.

![Image template](assets/images/readme/testing/code/html-code-testing-answers-page.png)

 **HTML Testing completed**

[Back to top ⇧](#the-euro-football-quiz)

### W3C CSS Validation Service

The W3C CSS Validator was used to validate all CSS used for my project.

#### CSS coding tested
* 0 errors returned
* 2 warnings returned
    - Imported style sheets are not checked in direct input and file upload modes (line 2)
    - Same color for background-color and color (line 345 reference: #submit-feedback-btn)

![Image template](assets/images/readme/testing/code/css-tested-copy-1.png)

![Image template](assets/images/readme/testing/code/css-tested-2-warnings.png)

I removed the code that was causing the issue with the same color for the background as the font color. This resolved the 2nd warning and then re-tested the css code. 

![Image template](assets/images/readme/testing/code/css-tested-copy-2.png)

![Image template](assets/images/readme/testing/code/css-tested-1-warning.png)

In reference to the remaining error - Imported style sheets are not checked in direct input and file upload modes (line 2). I found some information on <a href="https://stackoverflow.com/questions/25946111/importing-css-is-ending-up-with-an-error" target="_blank">Stack overflow</a> confirming that this was not an error just a warning to remind me that not checking the Google fonts is okay as this validator is used to check the CSS code. 

**CSS Testing completed**

[Back to top ⇧](#the-euro-football-quiz)

### JS Hint Javascript code validator

JSHint, A Static Code Analysis Tool for JavaScript. This is a tool that detects errors and potential problems in JavaScript code.

#### maps.js
* (0 errors found)

![Image template](assets/images/readme/testing/code/jshint-map.png)

#### quiz.js
* (0 errors found)

![Image template](assets/images/readme/testing/code/jshint-quiz.png)

#### sendEmail.js
* (0 errors found)

![Image template](assets/images/readme/testing/code/jshint-sendemail.png)

**Javascript Testing completed**

[Back to top ⇧](#the-euro-football-quiz)

### Web Browsers

I tested the website across four different web browsers making sure that links worked and pages loaded properly. 

- #### Google Chrome 
The site was developed using Chrome and therefore testing was being done daily on this browser.

Homepage

![Image template](assets/images/readme/testing/web-browsers/chrome/homepage-top.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/homepage-bottom.png)

Tournaments page

![Image template](assets/images/readme/testing/web-browsers/chrome/tournament-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/tournament-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/tournament-page-bottom.png)

Quiz page

![Image template](assets/images/readme/testing/web-browsers/chrome/quiz-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/quiz-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/quiz-page-bottom.png)

Feedback page

![Image template](assets/images/readme/testing/web-browsers/chrome/feedback-page.png)

Answers page

![Image template](assets/images/readme/testing/web-browsers/chrome/answers-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/answers-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/chrome/answers-page-bottom.png)

[Back to top ⇧](#the-euro-football-quiz)

- #### Apple Safari

Using a Macbook to complete this project meant that i could test the webpages on Apple safari. 

IMAGES TO FOLLOW ONCE SITE IS DEPLOYED AND RETESTED

[Back to top ⇧](#the-euro-football-quiz)

- #### Microsoft Edge

I had Microsoft Edge downloaded already. I therefore, logged onto my gitpod workspace and tested the site in the Microsoft Edge browser. I checked to make sure that all pages loaded, the colors, images, content, links and button all looked and worked fine. I tested this across different screen sizes within Microsoft Edge.

Homepage

![Image template](assets/images/readme/testing/web-browsers/edge/homepage-top.png)

![Image template](assets/images/readme/testing/web-browsers/edge/homepage-bottom.png)

Tournaments page

![Image template](assets/images/readme/testing/web-browsers/edge/tournaments-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/edge/tournaments-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/edge/tournaments-page-bottom.png)

Quiz page

![Image template](assets/images/readme/testing/web-browsers/edge/quiz-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/edge/quiz-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/edge/quiz-page-bottom.png)

Feedback page

![Image template](assets/images/readme/testing/web-browsers/edge/feedback-page.png)

Answers page

![Image template](assets/images/readme/testing/web-browsers/edge/answers-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/edge/answers-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/edge/answers-page-bottom.png)

[Back to top ⇧](#the-euro-football-quiz)

#### Mozilla Firefox 

I had Firefox downloaded already. I therefore, logged onto my gitpod workspace and tested the site in the Firefox browser. I checked to make sure that all pages loaded, the colors, images, content, links and button all looked and worked fine. I tested this across different screen sizes within Firefox.

Homepage

![Image template](assets/images/readme/testing/web-browsers/firefox/homepage-top.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/homepage-bottom.png)

Tournaments page

![Image template](assets/images/readme/testing/web-browsers/firefox/tournament-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/tournament-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/tournament-page-bottom.png)

Quiz page

![Image template](assets/images/readme/testing/web-browsers/firefox/quiz-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/quiz-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/quiz-page-bottom.png)

Feedback page

![Image template](assets/images/readme/testing/web-browsers/firefox/feedback-page.png)

Answers page

![Image template](assets/images/readme/testing/web-browsers/firefox/answers-page-top.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/answers-page-middle.png)

![Image template](assets/images/readme/testing/web-browsers/firefox/answers-page-bottom.png)

[Back to top ⇧](#the-euro-football-quiz)

### Testing responsiveness

I tested the site using Chrome development tools on four different screen sizes to make sure that all features, content, images, media clip, google map, links, buttons and feedback form worked properly. 

- #### Mobile screenshots

Homepage

![Image template](assets/images/readme/testing/responsiveness/mobile/mobile-homepage-1.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/mobile-homepage-2.png)

Tournaments page

![Image template](assets/images/readme/testing/responsiveness/mobile/tournament-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/tournament-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/tournament-page-3.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/tournament-page-4.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/tournament-page-5.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/tournament-page-6.png)

Quiz page

![Image template](assets/images/readme/testing/responsiveness/mobile/quiz-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/quiz-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/quiz-page-3.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/quiz-page-4.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/quiz-page-5.png)

Feedback page

![Image template](assets/images/readme/testing/responsiveness/mobile/feedback-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/feedback-page-2.png)

Answers page

![Image template](assets/images/readme/testing/responsiveness/mobile/answers-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/answers-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/answers-page-3.png)

![Image template](assets/images/readme/testing/responsiveness/mobile/answers-page-4.png)

- #### Tablet screenshots

Homepage

![Image template](assets/images/readme/testing/responsiveness/tablet/tablet-homepage-1.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/tablet-homepage-2.png)

Tournaments page

![Image template](assets/images/readme/testing/responsiveness/tablet/tournament-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/tournament-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/tournament-page-3.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/tournament-page-4.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/tournament-page-5.png)

Quiz page

![Image template](assets/images/readme/testing/responsiveness/tablet/quiz-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/quiz-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/quiz-page-3.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/quiz-page-4.png)

Feedback page

![Image template](assets/images/readme/testing/responsiveness/tablet/feedback-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/feedback-page-2.png)

Answers page

![Image template](assets/images/readme/testing/responsiveness/tablet/answers-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/answers-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/tablet/answers-page-3.png)

- #### Desktop screenshots

Homepage

![Image template](assets/images/readme/testing/responsiveness/desktop/desktop-homepage-1.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/desktop-homepage-2.png)

Tournaments Page

![Image template](assets/images/readme/testing/responsiveness/desktop/tournament-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/tournament-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/tournament-page-3.png)

Quiz page

![Image template](assets/images/readme/testing/responsiveness/desktop/quiz-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/quiz-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/quiz-page-3.png)

Feedback page

![Image template](assets/images/readme/testing/responsiveness/desktop/feedback-page.png)

Answers page

![Image template](assets/images/readme/testing/responsiveness/desktop/answers-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/answers-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/desktop/answers-page-3.png)

- #### Large Desktop screenshots

Homepage

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-homepage-1.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-homepage-2.png)

Tournaments page

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-tournament-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-tournament-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-tournament-page-3.png)

Quiz page

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-quiz-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-quiz-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-quiz-page-3.png)

Feedback page

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-feedback-page.png)

Answers page

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-answers-page-1.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-answers-page-2.png)

![Image template](assets/images/readme/testing/responsiveness/large-desktop/large-desktop-answers-page-3.png)

### Lighthouse testing 
#### Desktop results
#### Mobile results

### Issues found
#### Modal










## Bugs and issues

* API key issues 
https://developers.google.com/maps/documentation/javascript/error-messages#api-not-activated-map-error

* Borders around quiz question images. Using the background size property with the cover value would cause an issue with the images on smaller screen sizes. I changed the value for all images from cover to contain which worked for what i wanted to acheieve which was to make sure that all of the image is shown on screen sizes. 

* On the feedback html page and within the form there was an issue with the content wasn't refreshing after the 'Leave feedback' submit button was clicked. 

* emailJS reached credit limited

ATTACHED SCREEN SHOTS AND EMAIL CONFIRMING CREDIT LIMITED REACHED ON EMAILJS

[Back to top ⇧](#the-euro-football-quiz)


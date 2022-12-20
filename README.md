# Challenge-3

## Criteria 1: Prompts for Password Criteria

The javascript code written for this challenge uses the object method of `prompt()` and `alert()` in order to interact with the user and give instructions in how to sucessfully indicate the criterias for the password. The function created for the password generation is triggered by the click in the element of the button with the words "Generate Password" in color red.

The main purpouse of this alert is to orient the user and give clear instructions of what he must write in the prompts and have the answer validated immediately instead of having to experiment to know what to type in order for the program to work.

<img width="351" alt="Captura de pantalla 2022-12-16 a la(s) 16 43 30" src="https://user-images.githubusercontent.com/118247139/208200943-156f8c92-b7ab-443c-bc9f-69e5025d6225.png">

> ###### Note: The use of different console.log() over the function are mainly use with the purpouse of following the track of what the user wants and what it doesn´t for its password.

## Criteria 2: Prompt Lenght of Password

The first alert that is presented to the user is the length of the password, in this prompt the minimum and maximum length that the password can have is specified. If the user gives a choice that is less or more than what is allowed, an alert will appear telling the user that the amount entered is too small or too large. The program was also configured to identify if the input is not a number and thus give a 3rd type of alert telling the user to only give numbers.

![lenght](https://user-images.githubusercontent.com/118247139/208201286-c311bb0f-26fe-4d16-a872-ecc0afcc5103.png)

## Criteria 3: Character Types Options

The general purpose of this challenge #3 is to develop a function capable of generating a random password of a length determined by the user, which contains the characters that the user decides, having as an option uppercase letters, lowercase letters, numbers and special characters.

There are different ways to complete this challenge, however the approach I decided to take was to give the user the option to choose between which sets of characters they wanted their password to count from. This is why four different prompts are presented to the user who must answer with a Y or an N to indicate if they want to use these types of characters or not.

The function uses three different scenarios depending on the response given by the user, the first scenario is that the user responds with a Y (either uppercase or lowercase) and therefore wants this type of character to be included in their password. So when doing this, that character array is included in another array that will contain all the arrays of type of characters that the user wanted to have in their password.

If the user responds with the letter N (either uppercase or lowercase) a `console.log()` is used merely to keep track of the variables. Finally, the last scenario consists of the user not responding with any of the two previous options, and in this case, an alert is sent to the user as to what to respond to, either with the letter Y or N, and then returned to the prompt as a result of the return the function to run again.

![numerical](https://user-images.githubusercontent.com/118247139/208201487-3ecbcd49-5fc0-4726-8b7f-3d35a7766ca6.png)
> ###### Note: Prompt for Number Characters

![upper](https://user-images.githubusercontent.com/118247139/208201493-b0f92aa1-33f4-4be3-80c8-597b9db92eb2.png)
> ###### Note: Prompt for Upper Case Letters Characters

![lower](https://user-images.githubusercontent.com/118247139/208201489-0f203af0-8736-45bc-8f9e-bea15a8be59a.png)
> ###### Note: Prompt for Lower Case Letters Characters

![special](https://user-images.githubusercontent.com/118247139/208201787-e8083ee1-19ab-4d7e-9074-44f5ff6bb687.png)
> ###### Note: Prompt for Special Characters

## Criteria 4: Criteria Validation

As the required instructions ask, the first image that represents the first project has a larger size than the others. This is achieved reducing the size of the other images to 50% of the value of the page. Using the `display: flex`and dividing classes between the large card and the smaller ones, it is posible to wrap the projects in 2 rows to be later modified for a column when the display changes its size.

![alert](https://user-images.githubusercontent.com/118247139/208481273-cb22e21e-3068-46d7-b252-91503dae7c25.png)

As for the validation of incorrect outputs in the character types,

![alertcriteria](https://user-images.githubusercontent.com/118247139/208481537-9342fb7f-cce9-460d-80c3-b3700abcb944.png)

## Criteria 5: Password Generation

As the required instructions ask, the

![master](https://user-images.githubusercontent.com/118247139/208482053-54d5bd00-643d-4b89-be16-14d0bb0b7939.png)

## Add Ups

In order not to affect the functionality of the website for users, the effect of the pseudo class `@media` was modified for certain sizes in order to facilitate view. When the screen becomes smaller, the paragraph with the indications of touching the image disappear and the image changes its opacity.

```
var prepassword = randompassword.join("");
```
> ###### Note: This effect can be changed to a general use in order to not depend or confuse the user with the text (which in fact has also a hover effect on it). Nontheless, it was decided in order to not compromise the overall esthetic of the image title since this object is also compromised when opacity is changed. Future corrections and use of documentation is needed.

Another addition to the code in the javascript is the use of API´s in order to acess the DOM and display the generated password in the page instead of in a prompt.

```
var passwordText = document.querySelector("#password");

passwordText.value = password;
```

<img width="915" alt="Captura de pantalla 2022-12-19 a la(s) 11 17 24" src="https://user-images.githubusercontent.com/118247139/208482810-d9b515d4-78c1-4786-bb4a-9050726b784b.png">

Finally, the addition of a reset.css file allows the browser to eliminate a default configuration and mark the basic standards of desing of the website. For this, the anterior universal charactistics applied in activities during class where used in addition to other specific ones that relate to the application of the website.

<img width="877" alt="Captura de pantalla 2022-12-08 a la(s) 2 02 22" src="https://user-images.githubusercontent.com/118247139/206391986-5f9e2ea7-f094-4cbd-9408-72a772568643.png">

## Details and Future Changes 

For some reason, when trying to collaborate the effects of `@media` in the cell phone display, there are still 2 rows of information instead of 1 column. At first glance and after reading documentation, this seems to be a common effect and result ot the constant increase in screen size of cell phone devices. One solution that most programmers seem to be appelling to is to a type of `@media` attribute that changes the presentation only for devices that cannot hover (meaning that are not computers since they have no mouse). This solution is promising and should be applied in the future in order to eliminate this error.

![IMG_303A8D950ACB-1](https://user-images.githubusercontent.com/118247139/206390613-98ff9292-349c-4aec-a47f-bde8ad4bb02e.jpeg)

> Visualize the final page [here](https://drums180.github.io/Challenge-3/)

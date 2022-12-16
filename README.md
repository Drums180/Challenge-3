# Challenge-3

## Criteria 1: Prompts for Password Criteria

The html code written for this challenge uses tags of proper html semantics like `<header>`, `<aside>`, `<section>` and `<article>` which consist of the basic elements. In order to provide a complete presentation, there is a nagivation bar as required, a photo, a small description about me and my passions, my name and the title. (PENDING)

The structure of the css file matches the html in order to have a proper logical structure, as well there are commentaries that divide the sections in order to have a clarity while scanning the document. (PENDING)

<img width="351" alt="Captura de pantalla 2022-12-16 a la(s) 16 43 30" src="https://user-images.githubusercontent.com/118247139/208200943-156f8c92-b7ab-443c-bc9f-69e5025d6225.png">

> ###### Note: The css uses pseudo class `:hover` which wasn´t required nontheless was used in all the links, navigation included. 

## Criteria 2: Prompt Lenght of Password

All the links presented in the webpage are completely functional, including contact links to social media. This since all the `<li>` tags count with the proper `<a>` matching tag. Additional to this, proper `<alt>`tags and descriptions where added to all the images.

![lenght](https://user-images.githubusercontent.com/118247139/208201286-c311bb0f-26fe-4d16-a872-ecc0afcc5103.png)

## Criteria 3: Character Types Options

As mentioned before, all links inside the webpage are completely functional including those referencing the same page. This is made using proper `id` attributes that links one tag which normally refers to a section that will be connected by a link or button.
![numerical](https://user-images.githubusercontent.com/118247139/208201487-3ecbcd49-5fc0-4726-8b7f-3d35a7766ca6.png)
> ###### Note: Prompt for Number Characters

![upper](https://user-images.githubusercontent.com/118247139/208201493-b0f92aa1-33f4-4be3-80c8-597b9db92eb2.png)
> ###### Note: Prompt for Upper Case Letters Characters

![s![lower](https://user-images.githubusercontent.com/118247139/208201489-0f203af0-8736-45bc-8f9e-bea15a8be59a.png)
> ###### Note: Prompt for Lower Case Letters Characters

![special](https://user-images.githubusercontent.com/118247139/208201787-e8083ee1-19ab-4d7e-9074-44f5ff6bb687.png)
> ###### Note: Prompt for Special Characters

## Criteria 4: Larger Image for First Project

As the required instructions ask, the first image that represents the first project has a larger size than the others. This is achieved reducing the size of the other images to 50% of the value of the page. Using the `display: flex`and dividing classes between the large card and the smaller ones, it is posible to wrap the projects in 2 rows to be later modified for a column when the display changes its size.

<img width="1453" alt="Captura de pantalla 2022-12-08 a la(s) 1 48 31" src="https://user-images.githubusercontent.com/118247139/206389195-2224dc4c-a423-453d-863b-79b1ca741ba9.png">
<img width="570" alt="Captura de pantalla 2022-12-08 a la(s) 2 13 11" src="https://user-images.githubusercontent.com/118247139/206394012-272fdff5-d001-4e06-b46d-929b75ef28e9.png">

## Add Ups

In order not to affect the functionality of the website for users, the effect of the pseudo class `@media` was modified for certain sizes in order to facilitate view. When the screen becomes smaller, the paragraph with the indications of touching the image disappear and the image changes its opacity.

```
@media (max-width: 664px){
    .small-card {
        width: 100%;
    }
    img:hover {
        opacity: 90%;
    }
}
```
> ###### Note: This effect can be changed to a general use in order to not depend or confuse the user with the text (which in fact has also a hover effect on it). Nontheless, it was decided in order to not compromise the overall esthetic of the image title since this object is also compromised when opacity is changed. Future corrections and use of documentation is needed.

Another addition to the code in the CSS was the use of the `:root` pseudo class, with this, the programmer is capabale of changing the color of the website with more ease and without risking not changing a crucial color in some point over the website.

<img width="397" alt="Captura de pantalla 2022-12-08 a la(s) 1 37 56" src="https://user-images.githubusercontent.com/118247139/206387107-e1a8f7d6-b5b1-4416-8c9b-eb86a4826029.png">
<img width="1470" alt="Captura de pantalla 2022-12-08 a la(s) 1 41 06" src="https://user-images.githubusercontent.com/118247139/206387824-009ec0d9-db6e-4e2d-9642-e5203651fe8d.png">
<img width="1470" alt="Captura de pantalla 2022-12-08 a la(s) 2 10 36" src="https://user-images.githubusercontent.com/118247139/206393633-b8502f7e-e228-4407-9ccb-cc55c8768d9d.png">


Finally, the addition of a reset.css file allows the browser to eliminate a default configuration and mark the basic standards of desing of the website. For this, the anterior universal charactistics applied in activities during class where used in addition to other specific ones that relate to the application of the website.

<img width="877" alt="Captura de pantalla 2022-12-08 a la(s) 2 02 22" src="https://user-images.githubusercontent.com/118247139/206391986-5f9e2ea7-f094-4cbd-9408-72a772568643.png">

## Details and Future Changes 

For some reason, when trying to collaborate the effects of `@media` in the cell phone display, there are still 2 rows of information instead of 1 column. At first glance and after reading documentation, this seems to be a common effect and result ot the constant increase in screen size of cell phone devices. One solution that most programmers seem to be appelling to is to a type of `@media` attribute that changes the presentation only for devices that cannot hover (meaning that are not computers since they have no mouse). This solution is promising and should be applied in the future in order to eliminate this error.

![IMG_303A8D950ACB-1](https://user-images.githubusercontent.com/118247139/206390613-98ff9292-349c-4aec-a47f-bde8ad4bb02e.jpeg)

Example (extraction of code):
```
@media (max-width: 880px){
    .perfil{
        position: absolute;
        top: 15%;
    }
    .contact-me {
        margin-top: 10%;
    }
    .about-me p {
        font-size: 1.7rem;
    }
    .small-card {
        width: 100%;
    }
    .my-work p{
        font-size: 20px;
        width: 24rem;
    }
}
```

> Visualize the final page [here](https://drums180.github.io/Challenge-3/)

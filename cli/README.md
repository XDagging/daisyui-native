# Welcome to Daisyui-Native

<!-- ![alt text](image.png) -->

<img src="image.png" alt="tutorial" height="400"/>

Think of this UI library as if daisyui styles and radix component customizability had a baby

*Note: This is a work in progress. Theme customizability and the styling on certain components are odd but will be updated in the future*


## How it works

1. Create new app

`npx create-daisyui-native-app my-app`

2. Go to the new project directory

`cd my-app`

3. Run the expo server

`npm start`


and... you're all set.


Comes with Nativewind natively as well :)

____________________________________________________________________________________________________________________________________

**A couple of considerations:**

- Themes are hardcoded in some places. If you want to change the theme, you should change the LightTheme in themes.ts as well the LightTheme in the `tailwind.config.js` file. (This will be fixed in a later push)

- Yes. The Input component looks terrible. Will be fixed

- Feel free to contribute if you want

**Future Roadmap**

1) Add CLI to add component one by one (similar to shadcn)

2) Make themes wayy easier to customize

3) Overall way clearer documentation




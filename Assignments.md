# JavaScript React Intro Assignments

# Ex. 1: Dollar Food Store
The React Component is our building block when creating React applications.  We need to know how to architect/structure our React web pages using simple React components.

Create the following React [Type 1](https://gitlab.com/mburolla/javascript-react-starter/-/blob/main/component-types.md) components for this [HTML](./src/TODO/DollarStore/index.html) and [CSS](./src/TODO/DollarStore/style.css):

- Menu
    - Food
    - Drink
    - Dessert
- Footer

The `Header` React component has been done for you.  It can be used as an example for the React components that you need to create.

When you are finished, the Main React component will resemble the following and should produce the rendered output below:

```
<div className="Main">
    <Header />
    <Menu />
    <Footer />
</div>
```

![](./docs/ex1.png)

Always keep the DevTools console open (ctl+shift+i).

When you are finished create a PR called `Ex. 1: Dollar Food Store`.

# Ex. 2: FootBook
Now its your turn to slice and dice.  Given the following UI:

![](./docs/ex2.png)

Create [Type 1](https://gitlab.com/mburolla/javascript-react-starter/-/blob/main/component-types.md) React components and place them in your `Main` React component in your student directory.

Always keep the DevTools console open (ctl+shift+i).

When you are finished create a PR called `Ex. 2: FootBook`.

# Ex. 3: Tweet Storm 
React Components have properties, commonly knows as props.  Props allow us to send data INTO a React Component.  Prop data in the React Component is READ ONLY and cannot be changed.

Create a `Tweets` parent component that contains many `Tweet` components such that it is consumed by the `Main` component in the following manner:

```
<div className="Main">
    <Tweets />
</div>
```

The `Tweet` child component is consumed by the `Tweets` parent component in the following manner:

Note: message and color are props of the `Tweet` component.

```
<div className="Tweets">
    <div>Tweet Storm</div>
    <Tweet message="It's payday!!!" color="green"/>
    <Tweet message="I just bought a new car!" color="yellow" />
    <Tweet message="I just smashed my new car." color="red" />
</div>
```

Rendered UI:

![](./docs/ex3.png)

Always keep the DevTools console open (ctl+shift+i).

When you are finished create a PR called `Ex. 3: Tweet Storm`.

# Ex. 4: Like Counter
Callback arrow functions are used to send data from a child component and back to the parent component.

The [Type 9](https://gitlab.com/mburolla/javascript-react-starter/-/blob/main/src/comps/Type9.js) component shows how handle when a [child](https://gitlab.com/mburolla/javascript-react-starter/-/blob/main/src/comps/Child.js) component callback back to the parent.

Copy and paste the `Tweets` and `Tweet` components to the Ex4 directory in your Student directory.  Modify the `Tweet` component to include a 'Like' button.  The `Tweets` component has state that keeps track of the total number of likes. 

![](./docs/ex4.png)

Always keep the DevTools console open (ctl+shift+i).

When you are finished create a PR called `Ex. 4: Like Counter`.

# Ex. 5:

# Ex. 6:

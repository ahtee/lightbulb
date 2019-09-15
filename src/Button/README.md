# Button

<Button>Click Me!</Button>

Button Component based on ge.com. Colors included: `white`, `blue`, and `outline` (transparent but Blue border and font color). It is recommended to not use more than one of these, as it may introduce render bugs (while this is still in development stage).

By default, the button is GE Blue with white text.

## Props

| Prop Name   | Type                                                      |
| ----------- | --------------------------------------------------------- |
| outline     | prop                                                      |
| transparent | prop                                                      |
| white       | prop                                                      |
| blue        | prop                                                      |
| children    | Enter any text between the <Button></Button> element tags |

## Usage

```jsx static
<Button>Click Me!</Button>
```

Add an outline to the button.

```jsx {"props": {"children": "Click Me!", "outline"}}
<Button></Button>
```

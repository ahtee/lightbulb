# Card

The Card component is served to be multipurpose to support informational text as well Graphs to represent data. The Card is purposed to be flexible, based on the current size of the grid and the contents will be resized/reorganized to fit on most screens.

You may render text only, Graphs, buttons, and even make the entire card a button.

## Props

| Prop Name | Type   | Notes                                                                                                                                                                           |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| header    | String | Example: "My Card Title", Capitalize Words                                                                                                                                      |
| body      | String | Example: "Describing the card content here", place as much content as you wish.                                                                                                 |
| status    | String | Display a color reflecting status recieved by an API. If no status is set, the card will be white. Available status options: `danger`, `error`, `warning`, `success`, `stable`. |
| children  | any    | Render JSX/HTML in the children on the `<Card><p>I am a child!</p></Card>` render.                                                                                              |

## Usage

```jsx
<Card
  header="My Graph"
  body="Describe the graph data here"
  status="success"
  header="Graph Data"
  body="Card description"
>
  {graphData && <Graph />}
  <Button>Button</Button>
</Card>
```

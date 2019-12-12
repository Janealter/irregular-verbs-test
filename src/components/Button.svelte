<script>
  export let onClick = undefined;
  export let isSelected = false;
  export let isDisabled = false;
  export let title = undefined;
</script>

<style>
  button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 20px;
    min-height: 40px;
    cursor: pointer;
    padding: 0 10px;
    background-color: lightskyblue;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: all 200ms;
  }
  button:hover {
    filter: brightness(0.8);
  }
  button:focus {
    outline: none;
    box-shadow: 0 0 0 1px cornflowerblue;
  }
  button.selected:focus {
    box-shadow: 0 0 0 2px cornflowerblue;
  }
  button:active {
    filter: brightness(0.7);
  }
  button:disabled {
    cursor: not-allowed;
    box-shadow: none;
    filter: grayscale(0.5);
  }
  button::-moz-focus-inner {
    border: 0;
  }
  .selected {
    box-shadow:
      0 0 0 1px white,
      0 0 0 2px cornflowerblue;
  }
</style>

<button
  class={$$props.class + (isSelected ? ' selected' : '')}
  disabled={isDisabled}
  type={onClick ? "button" : "submit"}
  title={title}
  on:click={onClick}
>
  <slot />
</button>

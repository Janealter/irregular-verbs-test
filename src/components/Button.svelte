<script>
  export let onClick = undefined;
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
  button:active {
    filter: brightness(0.7);
  }
  button::-moz-focus-inner {
    border: 0;
  }
</style>

<button class={$$props.class} type={onClick ? "button" : "submit"} on:click={onClick}>
  <slot />
</button>

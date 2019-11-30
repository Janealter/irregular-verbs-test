<script>
  import { onMount, afterUpdate } from 'svelte';
  import { getRandomNumber, getTwoRandomNumbers } from '../utils/random';
  import Input from './Input';
  import Button from './Button';

  let verb;
  let hiddenForms;
  let formElement;
  let errors = [];
  let message = '';

  $: if (verbs) {
    setNewVerb();
  }

  function setVerb () {
    verb = getRandomVerb(verbs);
    hiddenForms = getTwoRandomNumbers(3);
  }

  function getRandomVerb (verbs) {
    const number = getRandomNumber(verbs.length);
    return verbs[number - 1];
  }

  function onFormSubmit (evt) {
    evt.preventDefault();

    const formData = new FormData(formElement);
    const firstFormOfVerb = formData.get('first-form');
    const secondFormOfVerb = formData.get('second-form');
    const thirdFormOfVerb = formData.get('third-form');

    errors = checkAnswer(firstFormOfVerb, secondFormOfVerb, thirdFormOfVerb);
    if (errors.every(error => error === null)) {
      message = 'Right answer!';
      onRightAnswer();
    } else {
      message = 'Wrong answer!';
    }
  }

  function checkAnswer (firstForm, secondForm, thirdForm) {
    return [
      firstForm === null || firstForm === verb[0] ? null : verb[0],
      secondForm === null || secondForm === verb[1] ? null : verb[1],
      thirdForm === null || thirdForm === verb[2] ? null : verb[2],
    ];
  }

  function setNewVerb () {
    errors = [];
    message = '';
    if (formElement) formElement.reset();
    setVerb();
  }

  export let verbs;
  export let onRightAnswer;
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  form {
    display: flex;
    margin-top: 30vh;
  }
  @media (max-width: 1080px) {
    form {
      flex-direction: column;
    }
  }
  .message.success {
    color: darkgreen;
  }
  .message.danger {
    color: darkred;
  }
  .verb {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 5px;
    width: 250px;
    height: 40px;
    border: 1px solid lightgreen;
    border-radius: 6px;
  }
  :global(.main-input) {
    width: 250px;
    margin: 5px;
  }
  :global(.main-input > input) {
    text-align: center;
  }
  :global(.main-button) {
    margin: 5px;
  }
  :global(.check-button) {
    background-color: lightgreen !important;
  }
</style>

<main>
  {#if verb && hiddenForms}
    <form bind:this={formElement} on:submit={onFormSubmit}>
      {#if hiddenForms.includes(1)}
        <Input class="main-input" name="first-form" error={errors[0]} />
      {:else}
        <p class="verb">{verb[0]}</p>
      {/if}
      {#if hiddenForms.includes(2)}
        <Input class="main-input" name="second-form" error={errors[1]} />
      {:else}
        <p class="verb">{verb[1]}</p>
      {/if}
      {#if hiddenForms.includes(3)}
        <Input class="main-input" name="third-form" error={errors[2]} />
      {:else}
        <p class="verb">{verb[2]}</p>
      {/if}
      <Button class="main-button check-button">Check answer</Button>
      <Button class="main-button" onClick={setNewVerb}>Next verb</Button>
    </form>
  {/if}
  <p class="message" class:success={message.includes('Right')} class:danger={message.includes('Wrong')}>{message}</p>
</main>

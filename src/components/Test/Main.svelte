<script>
  import { onMount, afterUpdate } from 'svelte';

  import { getRandomNumber, getTwoRandomNumbers } from '../../utils/random';
  import Input from '../Input';
  import Button from '../Button';

  let verb;
  let remainingVerbs;
  let hiddenForms;
  let formElement;
  let errors = [];
  let message = '';
  let isCheckAnswerDisabled = false;

  $: if (verbs) {
    remainingVerbs = verbs;
    setNewVerb();
  }

  function setNewVerb () {
    errors = [];
    message = '';
    isCheckAnswerDisabled = false;
    if (formElement) formElement.reset();
    if (verb) remainingVerbs = remainingVerbs.filter(vrb => vrb[0] !== verb[0]);
    if (remainingVerbs.length) {
      setVerb();
    } else {
      verb = null;
      message = 'That\'s all! Please choose another category';
    }
  }

  function setVerb () {
    verb = getRandomVerb(remainingVerbs);
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

    isCheckAnswerDisabled = true;
  }

  function checkAnswer (firstForm, secondForm, thirdForm) {
    return [
      checkForm(firstForm, verb[0]) ? null : verb[0],
      checkForm(secondForm, verb[1]) ? null : verb[1],
      checkForm(thirdForm, verb[2]) ? null : verb[2],
    ];
  }

  function checkForm (form, expectedForm) {
    return form === null || form.replace(/\s/g, '').toLowerCase() === expectedForm.replace(/\s/g, '');
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
  .message.info {
    margin-top: 30vh;
  }
  @media (max-width: 1080px) {
    form {
      flex-direction: column;
      margin-top: 15px;
    }
    .message.info {
      margin-top: 15px;
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
  :global(.test-main-input) {
    width: 250px;
    margin: 5px;
  }
  :global(.test-main-input > input) {
    text-align: center;
  }
  :global(.test-main-button) {
    height: 40px;
    margin: 5px;
  }
  :global(.test-check-button) {
    background-color: lightgreen !important;
  }
</style>

<main>
  {#if verb && hiddenForms}
    <form bind:this={formElement} on:submit={onFormSubmit}>
      {#if hiddenForms.includes(1)}
        <Input class="test-main-input" name="first-form" error={errors[0]} />
      {:else}
        <p class="verb">{verb[0]}</p>
      {/if}
      {#if hiddenForms.includes(2)}
        <Input class="test-main-input" name="second-form" error={errors[1]} />
      {:else}
        <p class="verb">{verb[1]}</p>
      {/if}
      {#if hiddenForms.includes(3)}
        <Input class="test-main-input" name="third-form" error={errors[2]} />
      {:else}
        <p class="verb">{verb[2]}</p>
      {/if}
      <Button class="test-main-button test-check-button" isDisabled={isCheckAnswerDisabled}>Check answer</Button>
      <Button class="test-main-button" onClick={setNewVerb}>Next verb</Button>
    </form>
  {/if}
  <p
    class="message"
    class:success={message.includes('Right')}
    class:danger={message.includes('Wrong')}
    class:info={message.includes('all')}
  >
    {message}
  </p>
</main>

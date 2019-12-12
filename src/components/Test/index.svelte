<script>
  import Header from './Header';
  import Main from './Main';

  let verbs;
  let currentCategoryName = 'not chosen';
  let pointsCount;
  let remainingVerbsCount;

  $: if (verbs) {
    remainingVerbsCount = verbs.length;
  }

  function onCategoryClick (name, selectedVerbs) {
    verbs = selectedVerbs;
    currentCategoryName = name;
    pointsCount = 0;
    remainingVerbsCount = verbs.length;
  }

  function onRightAnswer () {
    pointsCount++;
  }

  function onNextVerb () {
    remainingVerbsCount--;
  }
</script>

<style>
  p {
    margin: 0;
    padding: 15px 0;
  }
  @media (max-width: 1080px) {
    p {
      text-align: center;
    }
  }
</style>

<Header handleCategoryClick={onCategoryClick} />
<p><b>Current category:</b> {currentCategoryName}</p>
{#if verbs}
  <p><b>Points:</b> {`${pointsCount} / ${verbs.length}`}</p>
  <p><b>Remaining verbs:</b> {remainingVerbsCount}</p>
  <Main verbs={verbs} onRightAnswer={onRightAnswer} onNextVerb={onNextVerb} />
{/if}

<script>
  import verbsByCategories from '../lib/verbs';
  import Button from './Button';

  function onCategoryClick (name) {
    let verbs = [];
    if (name === 'all') verbs = getAllVerbs(verbsByCategories);
    else verbs = verbsByCategories.find(({ name: categoryName }) => categoryName === name).verbs;
    handleCategoryClick(name, verbs);
  }

  function getAllVerbs (verbsByCategories) {
    return verbsByCategories.reduce((acc, { verbs }) => [...acc, ...verbs], []);
  }

  export let handleCategoryClick;
</script>

<style>
  header {
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 1080px) {
    header {
      justify-content: center;
    }
  }
  p {
    margin: 15px 0;
  }
  :global(.header-button) {
    margin: 0 5px;
  }
</style>

<header>
  <p><b>Choose category:</b></p>
  <Button class="header-button" onClick={() => { onCategoryClick('all'); }}>ALL</Button>
  {#each verbsByCategories as { name, desc, verbs }}
    <Button class="header-button" onClick={() => { onCategoryClick(name); }}>{name}</Button>
  {/each}
</header>

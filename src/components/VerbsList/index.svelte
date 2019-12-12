<script>
  import verbsByCategories from '../../lib/verbs';
</script>

<style>
  h1 {
    text-align: center;
    margin: 15px 0;
  }
  table {
    border-collapse: collapse;
    margin: 0 auto 15px auto;
  }
  th, td {
    padding: 5px 10px;
  }
</style>

<h1>Verbs list</h1>
<table border>
  <thead>
    <tr>
      <th>First form</th>
      <th>Second form</th>
      <th>Third form</th>
    </tr>
  </thead>
  <tbody>
  {#each verbsByCategories as { name, desc, verbs }}
		<tr>
      <th colspan="3">{`${name}: ${desc}`}</th>
    </tr>
    {#each verbs as verb}
      <tr>
        {#each verb as form}
          <td>{form}</td>
        {/each}
      </tr>
	  {/each}
	{/each}
  </tbody>
</table>

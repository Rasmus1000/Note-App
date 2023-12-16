<script>
// @ts-nocheck
    let courses = [
        {nimi: "Jeppis", id: 0},
        {nimi: "Jebulis", id: 1},
        {nimi: "Ok", id: 2}
    ];

    const allOption = { nimi: "All", id: null };
    courses = [allOption, ...courses];

    let selectedCourse = allOption;

    function handleChange(event) {
    const selectedIndex = event.target.selectedIndex;
    selectedCourse = courses[selectedIndex];
  }
</script>

<select on:change={handleChange}>
    {#each courses as course (course.id)}
      <option value={course.id}>{course.nimi}</option>
    {/each}
</select>

{#if selectedCourse !== null}
  <p>Valittu henkilö: {selectedCourse.nimi}, ID: {selectedCourse.id}</p>
{/if}
function loadBrowseRoutines() {
  const routines = fetchRoutines();
  const routineList = document.getElementById("content");
  routineList.innerHTML = "<h2>Browse Exercise Routines by Category</h2>";
  routines.forEach(routine => {
    routineList.innerHTML += `<p>${routine}</p>`;
  });
}

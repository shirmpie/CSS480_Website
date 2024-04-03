// Function to enable list reordering
function enableListReorder() {
  const sortableList = document.getElementById('sortable-list');
  sortableList.sortable = Sortable.create(sortableList, {
    animation: 150,
    onEnd: function(event) {
      console.log("List reordered");
    }
  });
}
// Call the function to enable list reordering
enableListReorder();

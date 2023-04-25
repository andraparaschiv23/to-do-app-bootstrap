let saveButton = document.getElementById("save-button");

const errorMessage =
  '<p class="bg-danger ">Valorile introduse in campuri nu sunt valide!</p>';

saveButton.addEventListener("click", () => {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let form = document.getElementById("form-error");
  let table = document.querySelector("#table tbody");

  if (inputFormIsEmpty(title.value, description.value)) {
    title.innerHTML = "";
    description.innerHTML = "";
    form.innerHTML = errorMessage;
  } else {
    form.innerHTML = "";
    table.innerHTML +=
      "<tr>" +
      "<td>" +
      title.value +
      "</td>" +
      "<td>" +
      description.value +
      "</td>" +
      '<td><input type="button" value="Delete" onclick="deleteRow(this)"/></td>' +
      "</tr>";
  }
});

function inputFormIsEmpty(title, description) {
  return (
    title.length === 0 ||
    description.length === 0 ||
    title === null ||
    description === null ||
    title === undefined ||
    description === undefined
  );
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

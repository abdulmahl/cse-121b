let myList = document.getElementById("myList");

let friends = ["Jane", "Gary", "Nomsa", "Larry"]

friends.forEach(friend => {
    let listItem = document.createElement("li");
    listItem.textContent = friend;
    myList.append(listItem);
});
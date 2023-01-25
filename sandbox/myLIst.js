let myList = document.getElementById("myList");

let friends = ["Jane", "Gary", "Nomsa", "Larry"]

for (let i = 0; i < friends.length; i ++ ) {
    let listItem = document.createElement("li");
    listItem.textContent = friends[i];
    myList.append(listItem);
}

for (friend of friends) {
    myList.innerHTML += "<li>" + friend + "</li>";
}

friends.forEach(friend => {
    let listItem = document.createElement("li");
    listItem.textContent = friend;
    myList.append(listItem);
});
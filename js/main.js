var again = true;
var usernames = ['elnur', 'isa', 'elsever'];
while (again) {
    var check = true;
    alert(`Usernames : ${usernames}`);
    var username = prompt("username daxil edin");
    if (isNaN(username)) {
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] == username) {
                alert('belə username mövcuddur');
                check = false;
                break;
            }
        }
        if (check == true) {
            usernames.push(username);
            alert('username uğurla əlavə olundu');
            alert(`Usernames : ${usernames}`);
        }
    }
    else {
        alert("Username yalnız rəqəmdən ibarət və ya boş ola bilməz");
    }
    again = confirm("Yeni username daxil etmək istəyirsinizmi?");
};

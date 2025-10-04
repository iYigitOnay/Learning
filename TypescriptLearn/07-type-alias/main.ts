// !Type Alias (Tip Kısaltması)

type UserId = number | string;

function getUser(id: UserId) {
  console.log(`Kullancı Id: ${id}`);
}

getUser(2811);
getUser("1128");

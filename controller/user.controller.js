let users = [
  {
    id: 1,
    gender: "male",
    name: "Monir",
    contact: "01925716395",
    address: "Sherpur",
    photoUrl: "https://www.facebook.com/moniruzzaman255/",
  },
  {
    id: 2,
    gender: "male",
    name: "Aonik",
    contact: "01925716395",
    address: "Sherpur",
    photoUrl: "https://www.facebook.com/moniruzzaman255/",
  },
  {
    id: 3,
    gender: "female",
    name: "Shakiba",
    contact: "01925716395",
    address: "Sherpur",
    photoUrl: "https://www.facebook.com/moniruzzaman255/",
  },
];

/* Get all the users */
module.exports.getAllUsers = (req, res) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};

/* Save a user */
module.exports.postAUser = (req, res) => {
  const { id, gender, name, contact, address, photoUrl } = req.body;
  // console.log(req.body);
  if ((gender, name, contact, address, photoUrl)) {
    const newData = {
      id: req.body.id || users.length + 1,
      gender: req.body.gender,
      name: req.body.name,
      contact: req.body.contact,
      address: req.body.address,
      photoUrl: req.body.photoUrl,
    };
    users.push(newData);
    res.send(users);
  } else {
    res.send(
      "Give all the properties like : gender, name, contact, address, photoUrl"
    );
  }
};

/* Get a random user */
module.exports.getAUser = (req, res) => {
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  let value = generateRandomInteger(3);
  const foundUser = users.find((u) => u.id === value);
  res.send(foundUser);
};

/* Update a user's information */
module.exports.updateAUser = (req, res) => {
  const { id } = req.params;
  let newData = users.find((u) => u.id === Number(id));
  if (newData) {
    newData = {
      id: req.body.id || id,
      gender: req.body.gender || newData.gender,
      name: req.body.name || newData.name,
      contact: req.body.contact || newData.contact,
      address: req.body.address || newData.address,
      photoUrl: req.body.photoUrl || newData.photoUrl,
    };
    res.send(newData);
  } else {
    res.send("user id doesn't exist");
  }
};

//Update multiple user's information
module.exports.updateMultiUser = (req, res) => {
  const { id } = req.query;
  console.log([id], [id].length);
  let newData = users.find((u) => u.id === Number(id));
  // if (newData) {
  //     newData = {
  //         id: req.body.id || id,
  //         gender: req.body.gender || newData.gender,
  //         name: req.body.name || newData.name,
  //         contact: req.body.contact || newData.contact,
  //         address: req.body.address || newData.address,
  //         photoUrl: req.body.photoUrl || newData.photoUrl
  //     }
  //     res.send(newData)
  // }
  // else {
  //     res.send("user id doesn't exist")
  // }
};

/* Delete a User Api */
module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const userId = users.find((u) => u.id === numberId);
  if (numberId && userId) {
    users = users.filter((u) => u.id !== numberId);
    res.send(users);
  } else {
    res.send("put valid id number for deleting a user");
  }
};

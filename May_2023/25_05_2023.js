let users = [
    { id: 1, name: "Steven", salary: "5000" },
    { id: 2, name: "Neena", salary: "10000" },
    { id: 3, name: "John", salary: "4500" },
  ];
  
  const addUser = (name, salary) => {
    const newUser = { id: users.length + 1, name, salary };
    users.push(newUser);
  };
  
  const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
    } else {
      console.log("Wrong ID");
    }
  };
  
  const changeUser = (id, name, salary) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index].name = name;
      users[index].salary = salary;
    } else {
      console.log("Wrong ID");
    }
  };
  
  addUser("Stanley", "20000");
  console.log(users);
  /* 
  [
    { id: 1, name: 'Steven', salary: '5000' },
    { id: 2, name: 'Neena', salary: '10000' },
    { id: 3, name: 'John', salary: '4500' },
    { id: 4, name: 'Stanley', salary: '20000' }
  ]
   */
  
  removeUser(1);
  console.log(users);
  /* 
  [
    { id: 2, name: 'Neena', salary: '10000' },
    { id: 3, name: 'John', salary: '4500' },
    { id: 4, name: 'Stanley', salary: '20000' }
  ] 
  */
  
  changeUser(2, "Valeriia", "19000");
  console.log(users);
  /* 
  [
    { id: 2, name: 'Valeriia', salary: '19000' },
    { id: 3, name: 'John', salary: '4500' },
    { id: 4, name: 'Stanley', salary: '20000' }
  ] 
  */
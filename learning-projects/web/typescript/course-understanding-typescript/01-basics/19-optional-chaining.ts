const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
};

// Using optional chaining
console.log(fetchedUserData?.job?.title);
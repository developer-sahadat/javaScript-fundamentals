const subject=[
    {
        first:'Arbic',
        second:'Bangla',
        third:'English'

    }
];



console.log(subject[0]?.firsta);

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
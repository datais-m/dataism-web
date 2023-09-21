interface TeamMember {
    id: number;
    name: string;
    position: string;
    email: string;
    image: string;
  }
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'June',
      position: 'CEO',
      email: 'june@dataism.io',
      image: '/images/June.jpg',
    },
    {
        id: 2,
        name: 'Jason',
        position: 'CTO',
        email: 'jason@dataism.io',
        image: '/images/Jason.jpg',
      },
      {
        id: 3,
        name: 'Alice',
        position: 'COO',
        email: 'alice@dataism.io',
        image: '/images/Alice.jpg',
      },
      {
        id: 4,
        name: 'JM',
        position: 'Development manager',
        email: 'jm@dataism.io',
        image: '/images/jm.jpg',
      },
      {
        id: 1,
        name: 'SS',
        position: 'Development manager',
        email: 'ss@dataism.io',
        image: '/images/ss.jpg',
      },
  ];
  
  export default teamMembers;
  
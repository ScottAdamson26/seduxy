import lucieImage from './images/square.png';

const userProfiles = [
  { id: 1, name: 'Natasha', age: 26, imageUrl: lucieImage, bio: 'Natasha thrives in creative chaos, a visionary artist who paints her dreams.', tags: ['Creative', 'Visionary', 'Artistic'], locked: false },
  { id: 2, name: 'Olivia', age: 22, imageUrl: lucieImage, bio: 'Olivia, a tech enthusiast, explores the digital world with boundless curiosity.', tags: ['Tech-savvy', 'Curious', 'Innovative'], locked: false },
  { id: 3, name: 'Eve', age: 19, imageUrl: lucieImage, bio: 'Eve is a budding poet, finding beauty in the mundane, turning it into verse.', tags: ['Poetic', 'Observant', 'Inspired'], locked: true },
  { id: 4, name: 'Emily', age: 21, imageUrl: lucieImage, bio: 'Emily, an aspiring chef, blends tradition and innovation in her delightful dishes.', tags: ['Culinary Artist', 'Innovative', 'Passionate'], locked: true },
  { id: 5, name: 'Liz', age: 25, imageUrl: lucieImage, bio: 'Liz, a spirited activist, passionately advocates for environmental conservation.', tags: ['Activist', 'Passionate', 'Eco-Conscious'], locked: true },
  { id: 6, name: 'Emma', age: 31, imageUrl: lucieImage, bio: 'Emma, a dedicated nurse, provides care with compassion and resilience.', tags: ['Compassionate', 'Dedicated', 'Resilient'], locked: true },
  { id: 7, name: 'Amelia', age: 29, imageUrl: lucieImage, bio: 'Amelia, an adventurous traveler, seeks the stories hidden in uncharted lands.', tags: ['Adventurous', 'Storyteller', 'Explorer'], locked: true },
  { id: 8, name: 'Erin', age: 24, imageUrl: lucieImage, bio: 'Erin, a gifted musician, expresses her soul through the strings of her violin.', tags: ['Musical', 'Expressive', 'Gifted'], locked: true },
  { id: 9, name: 'Connie', age: 18, imageUrl: lucieImage, bio: 'Connie, a fearless skateboarder, rides the edge between adrenaline and freedom.', tags: ['Fearless', 'Adventurous', 'Skateboarder'], locked: true },
  { id: 10, name: 'Amy', age: 22, imageUrl: lucieImage, bio: 'Amy, a keen astronomer, gazes at the stars, dreaming of distant worlds.', tags: ['Astronomer', 'Dreamer', 'Curious'], locked: true },
];

export default userProfiles;

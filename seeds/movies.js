exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { id: 1, name: 'Joker (I) (2019)', image: '/images/1.png' },
        { id: 2, name: 'Iron Man (2008)', image: '/images/2.png' },
        { id: 3, name: 'The Incredible Hulk (2008)', image: '/images/3.png' },
        { id: 4, name: 'Iron Man 2 (2010)', image: '/images/4.png' },
        { id: 5, name: 'Thor (2011)', image: '/images/5.png' },
        { id: 6, name: 'Captain America: The First Avenger (2011)', image: '/images/6.png' },
        { id: 7, name: 'Marvels The Avengers (2019)', image: '/images/7.png' },
        { id: 8, name: ' The Godfather: Part II  (1974)', image: '/images/8.png' },
        { id: 9, name: 'The Lives of Others  (2006)', image: '/images/9.png' },
        { id: 10, name: ' Avengers: Infinity War (2018)', image: '/images/10.png' },
        { id: 11, name: 'The Dark Knight Rises (2012)', image: '/images/11.png' },
        { id: 12, name: 'Your Name. (2016)', image: '/images/12.png' },
        { id: 13, name: 'Coco (2017)', image: '/images/13.png' },
        { id: 14, name: '3 Idiots (2009)', image: '/images/14.png' },
        { id: 15, name: 'Like Stars on Earth (2007)', image: '/images/15.png' },
        { id: 16, name: 'Toy Story (1995)', image: '/images/16.png' },
        { id: 17, name: 'The Kid (1921)', image: '/images/17.png' },
        { id: 18, name: 'The Chaos Class (1975)', image: '/images/18.png' },
        { id: 19, name: 'Life Is Beautiful (1997)', image: '/images/19.png' },
        { id: 20, name: 'The Intouchables (2011)', image: '/images/20.png' },
        { id: 21, name: 'Back to the Future (1985)', image: '/images/21.png' },
        { id: 22, name: 'Modern Times (1936)', image: '/images/22.png' },
        { id: 23, name: 'Snatch (2000)', image: '/images/23.png' },
        { id: 24, name: 'Star Wars: Episode V - The Empire Strikes Back (1980)', image: '/images/24.png' },
        { id: 25, name: 'The Green Mile (1999)', image: '/images/25.png' },
        { id: 26, name: '12 Years a Slave (2013)', image: '/images/26.png' },
        { id: 27, name: 'Airlift (2016)', image: '/images/27.png' },
        { id: 28, name: 'Let the Right One In (2008)', image: '/images/28.png' },
        { id: 29, name: 'Night of the Living Dead (1968)', image: '/images/29.png' },
        { id: 30, name: 'I Saw the Devil (2010)', image: '/images/30.png' },
        { id: 31, name: 'Spirited Away (2001)', image: '/images/31.png' },
        { id: 32, name: 'The Prestige (2006)', image: '/images/32.png' }
      ])
    })
}
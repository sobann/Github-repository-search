export const assumptions = [{
  title: 'Aplikacja ma się składać z minimum 3 ekranów:',
  requireds: [
    {taskName: 'Wyszukiwarka projektów githubowych'},
    {taskName: 'Założenia całej aplikacji '},
    {taskName: 'Wyliczenie silni'},
  ]
}];

export const tasks = [
  [{
    name: 'Wykorzystane jest publiczne API Githuba;'
  },
  {
    name: 'Czeka na podanie loginu użytkownika',
    subtasks: [
      {name: 'waliduje poprawność'},
      {name: 'obsługuje nieistniejące loginy'},
    ]
  },
  {
    name: 'wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego',
    subtasks: [
      {name: 'wyświetla maksymalnie 5 commitów każdego z projektów'}
    ]
  }],
  [{
    name: 'wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem'
  },
  {
    name: 'proszę zawrzeć też autora aplikacji - własne imię i nazwisko'
  }],
  [{
    name: 'input do podania liczby dla której będzie wyliczona silnia'
  },
  {
    name: 'historia poprzednich wyliczeń'
  }]
];
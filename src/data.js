export const sedanTypes = [
  { value: 1, label: "VW VENTO MANUAL", image: "https://imgur.com/22bUtjR.png", 
      cost: 
      {
        perDay:681,
        perWeek:4528,
        perMonth:18387
      },
      features: [
        "Color blanco",
        "Transmisión automática",
        "4 Cilindros",
        "Tanque de 50 litros",
        "Radio AM/FM",
        "Reproductor MP3",
        "Puerto auxiliar",
        "Puerto USB",
        "Sistema de A/C"
      ]
  },

  { value: 2, label: "VW VENTO AUTOMATICO", image: "https://i.imgur.com/flcArQr.png", 
      cost: 
      {
        perDay:681,
        perWeek:4528,
        perMonth:18387
      },
      features: [
        "Color blanco",
        "Transmisión estandar",
        "4 Cilindros",
        "Tanque de 50 litros",
        "Radio AM/FM",
        "Reproductor MP3",
        "Puerto auxiliar",
        "Puerto USB",
        "Sistema de A/C"
      ]
  },

  { value: 3, label: "VW JETTA AUTOMATICO", image: "https://i.imgur.com/pKqOHUS.png", 
      cost:
      {
        perDay:710,
        perWeek:4721,
        perMonth:19170
      },
      features: [
        "Color blanco",
        "Transmisión estandar",
        "4 Cilindros",
        "Tanque de 50 litros",
        "Radio AM/FM",
        "Reproductor MP3",
        "Puerto auxiliar",
        "Puerto USB",
        "Sistema de A/C"
      ]
  }
];

export const passengersTruck = [
  { value: 4, label: "TOYOTA HICE AUTOMATICO", image: "https://i.imgur.com/N0Fn0bf.png", 
    cost: 
      {
        perDay:1600,
        perWeek:10640,
        perMonth:43200
      },
    features: [
      "Color blanco",
      "Transmisión estandar",
      "4 Cilindros",
      "Tanque de 70 litros",
      "Radio AM/FM",
      "Reproductor MP3",
      "Puerto auxiliar",
      "Puerto USB",
      "Sistema de A/C"
    ]
  }
];

export const groupedOptions = [
  {
    label: 'Sedan',
    options: sedanTypes,
  },
  {
    label: 'Camioneta p/Pasajeros',
    options: passengersTruck,
  },
];







// export const colourOptions = [
//   { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//   { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
//   { value: 'purple', label: 'Purple', color: '#5243AA' },
//   { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//   { value: 'orange', label: 'Orange', color: '#FF8B00' },
//   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//   { value: 'green', label: 'Green', color: '#36B37E' },
//   { value: 'forest', label: 'Forest', color: '#00875A' },
//   { value: 'slate', label: 'Slate', color: '#253858' },
//   { value: 'silver', label: 'Silver', color: '#666666' },
// ];

// export const flavourOptions = [
//   { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
//   { value: 'chocolate', label: 'Chocolate', rating: 'good' },
//   { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
//   { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
// ];

// export const groupedOptions = [
//   {
//     label: 'Colours',
//     options: colourOptions,
//   },
//   {
//     label: 'Flavours',
//     options: flavourOptions,
//   },
// ];

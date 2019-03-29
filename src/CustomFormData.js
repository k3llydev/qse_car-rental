export const OfficeLocations = [
    {address: "Seleccione un lugar..", value: 0},
    {address: "Direccion CDMX", value: 1},
    {address: "Direccion Cancun", value: 2}
]



export const sedanTypes = [
    { value: 1, label: "VW VENTO MANUAL", image: "https://imgur.com/22bUtjR.png", transmission: "Auto", passengers: 4, capacity: 4,
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
  
    { value: 2, label: "VW VENTO AUTOMATICO", image: "https://i.imgur.com/flcArQr.png", transmission: "Estandar", passengers: 4, capacity: 4,
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
  
    { value: 3, label: "VW JETTA AUTOMATICO", image: "https://i.imgur.com/pKqOHUS.png", transmission: "Estandar", passengers: 5, capacity: 4,
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
    { value: 4, label: "TOYOTA HICE AUTOMATICO", image: "https://i.imgur.com/N0Fn0bf.png", transmission: "Auto", passengers: 8, capacity: 4,
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
  
  export const VehicleCategories = [
    {title: "Sedan", typeId: 1, results: sedanTypes},
    {title: "Camioneta pasajeros", typeId: 2, results: passengersTruck}
]
  
  
  
  
  
export const sampleModel = {
    cars : [{
            stockNumber: 41400,
            manufacturerName: "Fiat",
            modelName: "Marea",
            mileage: {
              number: 100141,
              unit: "km"
            },
            fuelType: "Diesel",
            color: "white",
            pictureUrl: "http://localhost:3001/car.svg"
          }
    ],
    totalPageCount : 100,
    totalCarsCount : 1000
}

export const sampleCarData = {
            stockNumber: 41400,
            manufacturerName: "Fiat",
            modelName: "Marea",
            mileage: {
              number: 100141,
              unit: "km"
            },
            fuelType: "Diesel",
            color: "white",
            pictureUrl: "http://localhost:3001/car.svg"
}

export const sampleColorData = ['white', 'black', 'blue'];
export const sampleManufacturers = [
    {
      name: "Fiat",
      models: [
        {
          name: "Marea"
        }
      ]
    },
    {
        name: "Audi",
        models: [
          {
            name: "A6"
          }
        ]
      }
  ]
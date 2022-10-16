interface CarDTO {
  id: string;
  name: string;
  brand: string;
  about: string;
  rent: {
    price: number;
    period: string;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];

  photos: string[];
}

export { CarDTO };

export interface LinkOneUser {
  dob: {
    date: string;
    age: number;
  };
  email: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
  };
  phone: string;
}

export interface LinkTwoUser {
  address: {
    street_address: string;
  };
  avatar: string;
  date_of_birth: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface LinkThreeUser {
  firstname: string;
  lastname: string;
  image: string;
  email: string;
  birthday: string;
  address: {
    street: string;
  };
  phone: string;
}

export interface LinkFourUser {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
}

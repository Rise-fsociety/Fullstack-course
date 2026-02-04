export type Person = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  petName: string;
  age: number;
  salary: number;
  dateOfBirth: string;
  dateOfJoining: string;
  isActive: boolean;
};

const randomFrom = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const makeData = (count: number): Person[] => {
  return Array.from({ length: count }, (_, i) => ({
    firstName: randomFrom(['John', 'Alex', 'Mike', 'David', 'Chris']),
    middleName: randomFrom(['A.', 'B.', 'C.', '']),
    lastName: randomFrom(['Smith', 'Brown', 'Taylor', 'Wilson']),
    email: `user${i}@gmail.com`,
    phoneNumber: `+1-555-${Math.floor(100000 + Math.random() * 900000)}`,
    address: `${Math.floor(Math.random() * 999)} Main Street`,
    zipCode: `${Math.floor(10000 + Math.random() * 90000)}`,
    city: randomFrom(['New York', 'London', 'Berlin', 'Paris']),
    state: randomFrom(['CA', 'TX', 'NY']),
    country: randomFrom(['USA', 'UK', 'Germany', 'France']),
    petName: randomFrom(['Max', 'Buddy', 'Rocky', '']),
    age: Math.floor(Math.random() * 60) + 18,
    salary: Math.floor(Math.random() * 100000) + 30000,
    dateOfBirth: new Date(
      1980 + Math.floor(Math.random() * 25),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28),
    ).toISOString().split('T')[0],
    dateOfJoining: new Date(
      2015 + Math.floor(Math.random() * 8),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28),
    ).toISOString().split('T')[0],
    isActive: Math.random() > 0.5,
  }));
};

export type Position = { lat; lng };

export type City = {
  cityName;
  country;
  emoji?;
  date?;
  notes?;
  position?;
  id?;
};

export type CitiesResponse = { cities };


export interface Profile {
  picture: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  aboutMe: {
    es: string;
    en: string;
  };
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
}

const baseURL = process.env.API_URL;

export async function getProfile(): Promise<Profile> {
  const res = await fetch(`${baseURL}/profile`);
  return res.json();
}

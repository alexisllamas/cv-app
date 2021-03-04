export interface Education {
  id: number;
  school: string;
  description: {
    es: string;
    en: string;
  };
  location: string;
  dateStart: string;
  dateEnd: string;
}

const baseURL = process.env.API_URL;
export async function getEducation(): Promise<Education[]> {
  const res = await fetch(`${baseURL}/education`);
  return res.json();
}

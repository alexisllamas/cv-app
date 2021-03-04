export interface Certification {
  id: number;
  key: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  registred: string;
}

const baseURL = process.env.API_URL;
export async function getCertifications(): Promise<Certification[]> {
  const res = await fetch(`${baseURL}/certifications`);
  return res.json();
}

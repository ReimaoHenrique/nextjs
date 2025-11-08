export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  companyId: number;
  picture: string | null;
  status: boolean;
  company: {
    id: number;
    publicId: string;
    name: string;
  };
}

export interface AuthContextType {
  user: User | null;
  error: string | null;
  loading: boolean;
  login: (email, password) => Promise<void>;
  logout: () => void;
}

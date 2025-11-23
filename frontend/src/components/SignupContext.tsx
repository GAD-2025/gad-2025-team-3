import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the data for the entire signup flow
export interface SignupData {
  // Step 1
  age14: boolean;
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
  // Step 2
  username: string;
  password: string;
  email: string;
  // Step 3
  nickname: string;
  bio: string;
  // Step 4
  selectedArtists: string[];
}

// Define the context type
interface SignupContextType {
  signupData: SignupData;
  setSignupData: React.Dispatch<React.SetStateAction<SignupData>>;
  signupStep: number,
  setSignupStep: React.Dispatch<React.SetStateAction<number>>;
  setCurrentView: React.Dispatch<React.SetStateAction<'loading' | 'login' | 'signup' | 'main' | 'profile' | 'badges' | 'settings' | 'myexhibition' | 'createexhibition' | 'createexhibitionupload' | 'createexhibitionsettings' | 'createexhibitioncomplete' | 'statistics' | 'exploretrending' | 'exploresearchresults' | 'exploremain' | 'exhibitiondetail'>>;
}

// Create the context with a default value
const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Create a provider component
export const SignupProvider = ({ children, initialData, signupStep, setSignupStep, setCurrentView }: { children: ReactNode, initialData: SignupData, signupStep: number, setSignupStep: React.Dispatch<React.SetStateAction<number>>, setCurrentView: React.Dispatch<React.SetStateAction<'loading' | 'login' | 'signup' | 'main' | 'profile' | 'badges' | 'settings' | 'myexhibition' | 'createexhibition' | 'createexhibitionupload' | 'createexhibitionsettings' | 'createexhibitioncomplete' | 'statistics' | 'exploretrending' | 'exploresearchresults' | 'exploremain' | 'exhibitiondetail'>> }) => {
  const [signupData, setSignupData] = useState<SignupData>(initialData);

  return (
    <SignupContext.Provider value={{ signupData, setSignupData, signupStep, setSignupStep, setCurrentView }}>
      {children}
    </SignupContext.Provider>
  );
};

// Create a custom hook to use the signup context
export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignup must be used within a SignupProvider');
  }
  return context;
};

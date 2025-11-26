import { useState, useEffect } from 'react';
import SignupStep1 from './components/SignupStep1';
import SignupStep2 from './components/SignupStep2';
import SignupStep3 from './components/SignupStep3';
import SignupComplete from './components/SignupComplete';
import SignupStep4 from './components/SignupStep4';
import Login from './components/Login';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import BadgesPage from './components/BadgesPage';
import SettingsPage from './components/SettingsPage';
import MyExhibitionPage from './components/MyExhibitionPage';
import CreateExhibitionPage from './components/CreateExhibitionPage';
import CreateExhibitionUploadPage from './components/CreateExhibitionUploadPage';
import CreateExhibitionSettingsPage from './components/CreateExhibitionSettingsPage';
import CreateExhibitionCompletePage from './components/CreateExhibitionCompletePage';
import StatisticsPage from './components/StatisticsPage';
import ExploreTrendingPage from './components/ExploreTrendingPage';
import ExploreSearchResultsPage from './components/ExploreSearchResultsPage';
import ExploreMainPage from './components/ExploreMainPage';
import ExhibitionDetailPage from './components/ExhibitionDetailPage';
import FavoritesPage from './components/FavoritesPage';
// Removed: import { SignupProvider, SignupData } from './components/SignupContext';

// Define a type for the user object for better type safety
interface User {
  id: number;
  username: string;
  email: string;
  nickname: string;
  bio: string;
  exhibition_count: number;
  follower_count: number;
  following_count: number;
  total_views: number;
  total_likes: number;
  total_shares: number;
  // Add any other fields your user object has
}

// Re-defining SignupData directly in App.tsx as context is being removed for this flow
interface SignupData {
  age14: boolean;
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
  username: string;
  password: string;
  email: string;
  nickname: string;
  bio: string;
  selectedArtists: string[];
}

interface ExhibitionData {
  title: string;
  author: string;
  room: string;
  views: string;
  likes: string;
  shares: string;
}


export default function App() {
  const [currentView, setCurrentView] = useState<'loading' | 'login' | 'signup' | 'main' | 'profile' | 'badges' | 'settings' | 'myexhibition' | 'createexhibition' | 'createexhibitionupload' | 'createexhibitionsettings' | 'createexhibitioncomplete' | 'statistics' | 'exploretrending' | 'exploresearchresults' | 'exploremain' | 'exhibitiondetail' | 'favorites'>('loading');
  const [signupStep, setSignupStep] = useState(1);
  
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Effect to load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        // Add a check for a crucial property to ensure the object is a valid user
        if (user && user.id) {
          setCurrentUser(user);
          setCurrentView('main'); // Go to main page if logged in
        } else {
          // If the parsed object is not a valid user, treat it as a logout
          throw new Error("Invalid user object in localStorage");
        }
      } catch (error) {
        console.error("Failed to parse or validate user from localStorage", error);
        localStorage.removeItem('currentUser');
        setCurrentView('login'); // Fallback to login if stored data is corrupt or invalid
      }
    } else {
      setCurrentView('login'); // Go to login if no user is stored
    }
  }, []); // The empty dependency array ensures this runs only once on mount

  // Effect to save/remove user from localStorage when currentUser state changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);
  
  const [signupData, setSignupData] = useState<SignupData>({
    // Step 1
    age14: false,
    terms: false,
    privacy: false,
    marketing: false,
    // Step 2
    username: '',
    password: '',
    email: '',
    // Step 3
    nickname: '',
    bio: '',
    // Step 4
    selectedArtists: [] as string[],
  });

  // State for SignupStep2 (username validation and password confirmation)
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [usernameError, setUsernameError] = useState('');

  // State for SignupStep3 (nickname validation)
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameError, setNicknameError] = useState('');

  const [profileType, setProfileType] = useState<'profile_1_l' | 'profile_2_l' | 'profile_3_l' | 'profile_4_l' | null>(null);

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const [exhibitionTitle, setExhibitionTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const [selectedExhibition, setSelectedExhibition] = useState<ExhibitionData | null>(null);

  // General input change handler for text/email/password inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
    } else {
      setSignupData(prev => ({ ...prev, [name]: value }));
      // Reset validation flags if the relevant field changes
      if (name === 'username') {
        setIsUsernameChecked(false);
        setUsernameValid(false);
        setUsernameError('');
      } else if (name === 'nickname') {
        setIsNicknameChecked(false);
        setNicknameValid(false);
        setNicknameError('');
      }
    }
  };

  // Checkbox change handler for Step1
  const handleCheckboxChange = (name: keyof SignupData) => {
    setSignupData(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Handle "All Agree" button in Step1
  const handleAllAgree = () => {
    const allChecked = signupData.age14 && signupData.terms && signupData.privacy && signupData.marketing;
    setSignupData(prev => ({
      ...prev,
      age14: !allChecked,
      terms: !allChecked,
      privacy: !allChecked,
      marketing: !allChecked
    }));
  };

  // Username validation logic (moved from SignupStep2)
  const isValidUsername = (username: string) => {
    if (username.length < 2 || username.length > 12) {
      return { valid: false, message: '아이디는 2-12자로 입력해주세요.' };
    }
    const regex = /^[a-zA-Z_.]+$/;
    if (!regex.test(username)) {
      return { valid: false, message: '영문과 특수문자 _ . 만 사용 가능합니다.' };
    }
    return { valid: true, message: '' };
  };

  const handleUsernameCheck = () => {
    const validation = isValidUsername(signupData.username);
    if (!validation.valid) {
      setUsernameError(validation.message);
      setIsUsernameChecked(false);
      setUsernameValid(false);
      return;
    }
    setUsernameError('');
    setIsUsernameChecked(true);
    setUsernameValid(true);
  };

  // Nickname validation logic (moved from SignupStep3)
  const isValidNickname = (name: string) => {
    if (name.length < 2 || name.length > 12) {
      return { valid: false, message: '닉네임은 2-12자로 입력해주세요.' };
    }
    const regex = /^[가-힣a-zA-Z0-9]+$/;
    if (!regex.test(name)) {
      return { valid: false, message: '한글, 영문, 숫자만 사용 가능합니다.' };
    }
    return { valid: true, message: '' };
  };

  const handleNicknameCheck = () => {
    const validation = isValidNickname(signupData.nickname);
    if (!validation.valid) {
      setNicknameError(validation.message);
      setIsNicknameChecked(false);
      setNicknameValid(false);
      return;
    }
    setNicknameError('');
    setIsNicknameChecked(true);
    setNicknameValid(true);
  };

  // Artist selection logic (moved from SignupStep4)
  const handleArtistToggle = (artistId: string) => {
    setSignupData(prev => {
      const currentSelectedArtists = prev.selectedArtists || [];
      if (currentSelectedArtists.includes(artistId)) {
        return { ...prev, selectedArtists: currentSelectedArtists.filter(id => id !== artistId) };
      } else {
        if (currentSelectedArtists.length < 5) {
          return { ...prev, selectedArtists: [...currentSelectedArtists, artistId] };
        }
      }
      return prev;
    });
  };

  const handleSignupSubmit = async () => { // No longer takes artists as prop directly
    // The latest signupData is already in state
    const finalSignupData = { ...signupData, passwordConfirm }; // Include passwordConfirm if needed for backend validation, though it usually isn't sent
    console.log('Submitting signup data:', JSON.stringify(finalSignupData, null, 2));

    // Explicitly check for required fields on the frontend
    if (!finalSignupData.username || !finalSignupData.password || !finalSignupData.email || !finalSignupData.nickname) {
      alert(`Error: One or more required fields are missing. Please check your input.\n        Username: ${finalSignupData.username}\n        Password: ${finalSignupData.password ? '******' : '(empty)'}\n        Email: ${finalSignupData.email}\n        Nickname: ${finalSignupData.nickname}\n      `);
      return;
    }
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalSignupData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const result = await response.json();
      console.log('Signup successful:', result);
      setSignupStep(5); // Move to complete page on success

    } catch (error: any) { // Use 'any' for error type for now
      console.error('An error occurred during signup:', error);
      alert(error.message);
    }
  };

  const handleCreateExhibition = async () => {
    if (!currentUser) {
      alert('User not logged in.');
      return;
    }

    if (!exhibitionTitle || !description || !startDate || !endDate) {
      alert('Please fill in all exhibition details.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exhibitions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: currentUser.id,
          title: exhibitionTitle,
          description,
          startDate: startDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
          endDate: endDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
          isPublic,
          uploadedFiles, // Array of file URLs
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create exhibition');
      }

      const result = await response.json();
      console.log('Exhibition created successfully:', result);
      setCurrentView('createexhibitioncomplete');
      // Reset exhibition creation states
      setExhibitionTitle('');
      setDescription('');
      setStartDate(undefined);
      setEndDate(undefined);
      setIsPublic(true);
      setUploadedFiles([]);

    } catch (error: any) {
      console.error('Error creating exhibition:', error);
      alert(error.message);
    }
  };


  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setCurrentView('main');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  if (currentView === 'loading') {
    return <div>Loading...</div>;
  }
  
  if (currentView === 'login') {
    return (
      <Login 
        onLogin={handleLoginSuccess}
        onSignup={() => {
          setCurrentView('signup');
          setSignupStep(1);
        }}
      />
    );
  }

  if (currentView === 'main') {
    return (
      <MainPage 
        onNavigateToProfile={() => setCurrentView('profile')}
        onNavigateToMyExhibition={() => setCurrentView('myexhibition')}
        onNavigateToStatistics={() => setCurrentView('statistics')}
        onNavigateToExplore={() => setCurrentView('exploremain')}
        onNavigateToFavorites={() => setCurrentView('favorites')}
      />
    );
  }

  if (currentView === 'favorites') {
    return (
      <FavoritesPage 
        onBack={() => setCurrentView('main')}
        currentUser={currentUser}
      />
    );
  }

  if (currentView === 'profile' && currentUser) {
    // If profileType is not set (e.g., after a refresh), try to get it from localStorage or default
    const finalProfileType = profileType || localStorage.getItem('profileType') || 'profile_1_l';

    return (
      <ProfilePage 
        user={currentUser}
        profileType={finalProfileType as any}
        onBack={() => setCurrentView('main')}
        onNavigateToBadges={() => setCurrentView('badges')}
        onNavigateToSettings={() => setCurrentView('settings')}
        onNavigateToMyExhibition={() => setCurrentView('myexhibition')}
        onLogout={handleLogout}
      />
    );
  }

  if (currentView === 'badges') {
    return <BadgesPage onBack={() => setCurrentView('profile')} />;
  }

  if (currentView === 'settings') {
    return (
      <SettingsPage 
        onBack={() => setCurrentView('profile')}
        onLogout={handleLogout}
      />
    );
  }

  if (currentView === 'myexhibition') {
    return (
      <MyExhibitionPage 
        onBack={() => setCurrentView('profile')}
        onCreateNew={() => setCurrentView('createexhibition')}
        currentUser={currentUser}
      />
    );
  }

  if (currentView === 'createexhibition') {
    return (
      <CreateExhibitionPage 
        onBack={() => setCurrentView('myexhibition')}
        onNext={() => setCurrentView('createexhibitionupload')}
      />
    );
  }

  if (currentView === 'createexhibitionupload') {
    return (
      <CreateExhibitionUploadPage 
        onBack={() => setCurrentView('createexhibition')}
        onNext={() => setCurrentView('createexhibitionsettings')}
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />
    );
  }

  if (currentView === 'createexhibitionsettings') {
    return (
      <CreateExhibitionSettingsPage 
        onBack={() => setCurrentView('createexhibitionupload')}
        onComplete={handleCreateExhibition}
        exhibitionTitle={exhibitionTitle}
        setExhibitionTitle={setExhibitionTitle}
        description={description}
        setDescription={setDescription}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
      />
    );
  }

  if (currentView === 'createexhibitioncomplete') {
    return (
      <CreateExhibitionCompletePage 
        onNavigateToGallery={() => setCurrentView('myexhibition')}
        uploadedImages={uploadedFiles}
        exhibitionTitle={exhibitionTitle}
      />
    );
  }

  if (currentView === 'statistics') {
    return <StatisticsPage onBack={() => setCurrentView('main')} />;
  }

  if (currentView === 'exploremain') {
    return (
      <ExploreMainPage
        onBack={() => setCurrentView('main')}
        onSearch={() => setCurrentView('exploresearchresults')}
      />
    );
  }

  if (currentView === 'exploretrending') {
    return (
      <ExploreTrendingPage 
        onBack={() => setCurrentView('main')} 
        onSearch={() => setCurrentView('exploresearchresults')}
        onKeywordClick={(keyword) => setCurrentView('exploresearchresults')}
      />
    );
  }

  if (currentView === 'exploresearchresults') {
    return (
      <ExploreSearchResultsPage 
        onBack={() => setCurrentView('exploretrending')} 
        onExhibitionClick={(data) => {
          setSelectedExhibition(data);
          setCurrentView('exhibitiondetail');
        }}
      />
    );
  }

  if (currentView === 'exhibitiondetail') {
    return (
      <ExhibitionDetailPage 
        onBack={() => setCurrentView('exploresearchresults')} 
        exhibitionData={selectedExhibition}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <> {/* Removed SignupProvider */}
        {signupStep === 1 && (
          <SignupStep1 
            onNext={() => setSignupStep(2)} 
            onBack={() => setCurrentView('login')}
            formData={signupData} // Pass signupData
            handleCheckboxChange={handleCheckboxChange} // Pass handler
            handleAllAgree={handleAllAgree} // Pass handler
          />
        )}
        {signupStep === 2 && (
          <SignupStep2 
            onNext={() => setSignupStep(3)} 
            onBack={() => setSignupStep(1)}
            formData={signupData} // Pass signupData
            handleInputChange={handleInputChange} // Pass handler
            passwordConfirm={passwordConfirm} // Pass passwordConfirm
            handleUsernameCheck={handleUsernameCheck} // Pass handler
            isUsernameChecked={isUsernameChecked} // Pass state
            usernameValid={usernameValid} // Pass state
            usernameError={usernameError} // Pass state
          />
        )}
        {signupStep === 3 && (
          <SignupStep3 
            onNext={() => setSignupStep(4)} 
            onBack={() => setSignupStep(2)}
            formData={signupData} // Pass signupData
            handleInputChange={handleInputChange} // Pass handler
            handleNicknameCheck={handleNicknameCheck} // Pass handler
            isNicknameChecked={isNicknameChecked} // Pass state
            nicknameValid={nicknameValid} // Pass state
            nicknameError={nicknameError} // Pass state
          />
        )}
        {signupStep === 4 && (
          <SignupStep4 
            username={signupData.nickname} 
            onNext={() => handleSignupSubmit()} // No longer takes artists as prop directly
            onBack={() => setSignupStep(3)}
            formData={signupData} // Pass signupData
            handleArtistToggle={handleArtistToggle} // Pass handler
          />
        )}
        {signupStep === 5 && <SignupComplete username={signupData.nickname} onNext={(selectedProfileType) => { setProfileType(selectedProfileType); setCurrentView('main'); }} />}
      </>
    );
  }
  
  return (
    <Login 
      onLogin={handleLoginSuccess}
      onSignup={() => {
        setCurrentView('signup');
        setSignupStep(1);
      }}
    />
  );
}
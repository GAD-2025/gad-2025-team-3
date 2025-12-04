import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import SignupStep1 from './components/SignupStep1';
import SignupStep2 from './components/SignupStep2';
import SignupStep3 from './components/SignupStep3';
import SignupComplete from './components/SignupComplete';
import SignupStep4 from './components/SignupStep4';
import Login from './components/Login';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import BadgesPage from './components/BadgesPage';
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
import DeleteExhibitionPage from './components/DeleteExhibitionPage';
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
  id: string;
  title: string;
  author: string;
  room: string;
  views: string;
  likes: string;
  shares: string;
  // Add other fields as per your backend response
}


export default function App() {
  const navigate = useNavigate();
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
          navigate('/main'); // Go to main page if logged in
        } else {
          // If the parsed object is not a valid user, treat it as a logout
          throw new Error("Invalid user object in localStorage");
        }
      } catch (error) {
        console.error("Failed to parse or validate user from localStorage", error);
        localStorage.removeItem('currentUser');
        navigate('/login'); // Fallback to login if stored data is corrupt or invalid
      }
    } else {
      navigate('/login'); // Go to login if no user is stored
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
      if (result.user) {
        setCurrentUser(result.user);
        navigate('/main');
      } else {
        setSignupStep(5); // Fallback to complete page
      }

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
      // Reset exhibition creation states
      setExhibitionTitle('');
      setDescription('');
      setStartDate(undefined);
      setEndDate(undefined);
      setIsPublic(true);
      setUploadedFiles([]);
      navigate('/create-exhibition/complete');

    } catch (error: any) {
      console.error('Error creating exhibition:', error);
      alert(error.message);
    }
  };


  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    navigate('/main');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/login');
  };

  // Removed: if (currentView === 'loading') { return <div>Loading...</div>; }
  
  return (
    <Routes>
      <Route path="/login" element={
        <Login 
          onLogin={handleLoginSuccess}
          onSignup={() => navigate('/signup')}
        />
      } />
      <Route path="/signup" element={
        <>
          {signupStep === 1 && (
            <SignupStep1 
              onNext={() => setSignupStep(2)} 
              onBack={() => navigate('/login')}
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
        </>
      } />
      <Route path="/signup-complete" element={<SignupComplete username={signupData.nickname} onNext={(selectedProfileType) => { setProfileType(selectedProfileType); navigate('/main'); }} />} />
      <Route path="/main" element={
        <MainPage 
          onNavigateToProfile={() => navigate('/profile')}
          onNavigateToMyExhibition={() => navigate('/myexhibition')}
          onNavigateToStatistics={() => navigate('/statistics')}
          onNavigateToExplore={() => navigate('/explore')}
          onNavigateToFavorites={() => navigate('/favorites')}
        />
      } />
      <Route path="/favorites" element={
        <FavoritesPage 
          onBack={() => navigate('/main')}
          currentUser={currentUser}
        />
      } />
      <Route path="/profile" element={
        currentUser && (
          <ProfilePage 
            user={currentUser}
            profileType={(profileType || localStorage.getItem('profileType') || 'profile_1_l') as any}
            onBack={() => navigate('/main')}
            onNavigateToBadges={() => navigate('/badges')}
            onNavigateToMyExhibition={() => navigate('/myexhibition')}
            onLogout={handleLogout}
          />
        )
      } />
      <Route path="/badges" element={<BadgesPage onBack={() => navigate('/profile')} />} />
      <Route path="/myexhibition" element={
        <MyExhibitionPage 
          onBack={() => navigate('/main')}
          onCreateNew={() => navigate('/create-exhibition')}
          currentUser={currentUser}
        />
      } />
      <Route path="/create-exhibition" element={
        <CreateExhibitionPage 
          onBack={() => navigate('/myexhibition')}
          onNext={() => navigate('/create-exhibition/upload')}
        />
      } />
      <Route path="/create-exhibition/upload" element={
        <CreateExhibitionUploadPage 
          onBack={() => navigate('/create-exhibition')}
          onNext={() => navigate('/create-exhibition/settings')}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
        />
      } />
      <Route path="/create-exhibition/settings" element={
        <CreateExhibitionSettingsPage 
          onBack={() => navigate('/create-exhibition/upload')}
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
      } />
      <Route path="/create-exhibition/complete" element={
        <CreateExhibitionCompletePage 
          onNavigateToGallery={() => navigate('/myexhibition')}
          uploadedImages={uploadedFiles}
          exhibitionTitle={exhibitionTitle}
        />
      } />
      <Route path="/statistics" element={<StatisticsPage onBack={() => navigate('/main')} />} />
      <Route path="/explore" element={
        <ExploreMainPage
          onBack={() => navigate('/main')}
          onSearch={(searchQuery: string) => navigate('/explore/search', { state: { searchQuery } })}
        />
      } />
      <Route path="/explore/trending" element={
        <ExploreTrendingPage 
          onBack={() => navigate('/main')} 
          onSearch={(searchQuery: string) => navigate('/explore/search', { state: { searchQuery } })}
          onKeywordClick={(keyword) => navigate('/explore/search', { state: { searchQuery: keyword } })}
        />
      } />      <Route path="/explore/search" element={
        <ExploreSearchResultsPage 
          onBack={() => navigate('/explore/trending')} 
          onExhibitionClick={(data) => {
            setSelectedExhibition(data);
            navigate(`/exhibition/${data.id}`);
          }}
        />
      } />
      <Route path="/exhibition/:id" element={
        <ExhibitionDetailPage 
          onBack={() => navigate('/myexhibition')} 
          exhibitionData={selectedExhibition}
        />
      } />
      <Route path="/exhibition/delete/:id" element={<DeleteExhibitionPage />} />
      <Route path="*" element={<Login onLogin={handleLoginSuccess} onSignup={() => navigate('/signup')} />} />
    </Routes>
  );
}
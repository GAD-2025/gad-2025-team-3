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
import EditProfilePage from './components/EditProfilePage';
import OtherUserProfilePage from './components/OtherUserProfilePage'; // Import the new component
import FollowerPage from './components/FollowerPage'; // Import FollowerPage
import FollowingPage from './components/FollowingPage'; // Import FollowingPage
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
  user_artists: string[];
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

const normalizeDateToMidnight = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};


export default function App() {
  console.log('App component rendered');
  const navigate = useNavigate();
  const [signupStep, setSignupStep] = useState(1);
  
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const fetchCurrentUser = async (userId: number) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData: User = await response.json();
      setCurrentUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData)); // Update localStorage with full data
    } catch (error) {
      console.error("Error fetching current user:", error);
            setCurrentUser(null);
            localStorage.removeItem('userId');
            localStorage.removeItem('currentUser');
          }
        };;
  
  // Effect to load user from localStorage on initial render
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      // If userId is in localStorage, fetch the full user data
      fetchCurrentUser(parseInt(storedUserId, 10));
    }
  }, []); // The empty dependency array ensures this runs only once on mount

  // Effect to save/remove user from localStorage when currentUser state changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('userId', currentUser.id.toString());
      localStorage.setItem('currentUser', JSON.stringify(currentUser)); 
    } else {
      localStorage.removeItem('userId');
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  // Effect to handle navigation based on currentUser status
  useEffect(() => {
    // If currentUser exists and we are on the login page or root, navigate to main
    if (currentUser) {
      if (location.pathname === '/login' || location.pathname === '/') {
        navigate('/main');
      }
    } else {
      // If no currentUser and not already on login/signup-complete, navigate to login
      if (location.pathname !== '/login' && !location.pathname.startsWith('/signup')) { // Use startsWith for better path checking
        navigate('/login');
      }
    }
  }, [currentUser, navigate, location.pathname]);
  
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



  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const [exhibitionTitle, setExhibitionTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [hashtags, setHashtags] = useState<string[]>([]); // hashtags 상태 추가

  const [selectedExhibition, setSelectedExhibition] = useState<ExhibitionData | null>(null);

  const resetExhibitionFormState = () => {
    setUploadedFiles([]);
    setExhibitionTitle('');
    setDescription('');
    setStartDate(undefined);
    setEndDate(undefined);
    setIsPublic(true);
    setHashtags([]);
  };


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

  const handleUsernameCheck = async () => {
    const validation = isValidUsername(signupData.username);
    if (!validation.valid) {
      setUsernameError(validation.message);
      setIsUsernameChecked(false);
      setUsernameValid(false);
      return;
    }

    setIsUsernameChecked(false); // Reset while checking
    setUsernameError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/check-username`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signupData.username }),
      });

      setIsUsernameChecked(true);
      const data = await response.json();

      if (data.isDuplicate) {
        setUsernameValid(false);
        setUsernameError('이미 사용 중인 아이디입니다.');
      } else {
        setUsernameValid(true);
        setUsernameError('');
      }
    } catch (error) {
      console.error('Username check failed:', error);
      setIsUsernameChecked(true);
      setUsernameValid(false);
      setUsernameError('네트워크 오류로 확인에 실패했습니다.');
    }
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

  const handleNicknameCheck = async () => {
    const validation = isValidNickname(signupData.nickname);
    if (!validation.valid) {
      setNicknameError(validation.message);
      setIsNicknameChecked(false);
      setNicknameValid(false);
      return;
    }

    setIsNicknameChecked(false); // Reset while checking
    setNicknameError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/check-nickname`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname: signupData.nickname }),
      });

      setIsNicknameChecked(true);
      const data = await response.json();
      
      if (data.isDuplicate) {
        setNicknameValid(false);
        setNicknameError('이미 사용 중인 닉네임입니다.');
      } else {
        setNicknameValid(true);
        setNicknameError('');
      }
    } catch (error) {
      console.error('Nickname check failed:', error);
      setIsNicknameChecked(true);
      setNicknameValid(false);
      setNicknameError('네트워크 오류로 확인에 실패했습니다.');
    }
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
        } else {
          alert('최대 5개까지 선택할 수 있습니다.'); // 제한 초과 시 알림
          return prev;
        }
      }
    });
  };

  const handleAddCustomArtist = (artistName: string) => {
    const trimmedArtistName = artistName.trim();
    if (!trimmedArtistName) {
      alert('아티스트 이름을 입력해주세요.');
      return;
    }
    setSignupData(prev => {
      const currentSelectedArtists = prev.selectedArtists || [];
      // 중복 방지
      if (currentSelectedArtists.includes(trimmedArtistName)) {
        alert('이미 추가된 아티스트입니다.');
        return prev;
      }
      // 5개 선택 제한 (미리 정의된 + 직접 추가된 아티스트 포함)
      if (currentSelectedArtists.length < 5) {
        return { ...prev, selectedArtists: [...currentSelectedArtists, trimmedArtistName] };
      } else {
        alert('최대 5개까지 선택할 수 있습니다.'); // 제한 초과 시 알림
        return prev;
      }
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
        // Specifically check for 409 Conflict status
        if (response.status === 409) {
          // You could inspect errorData.message to see which field is duplicated
          // and potentially navigate back to the specific step (2 or 3).
          // For now, a general message and returning to step 2 is a good improvement.
          alert('이미 사용 중인 아이디, 이메일, 또는 닉네임입니다. 다시 확인해주세요.');
          setSignupStep(2); // Go back to the info-input step
        }
        throw new Error(errorData.message || 'Signup failed');
      }

      const result = await response.json();
      console.log('Signup successful:', result);
      // The backend should return the new user object upon successful signup
      if (result.user) {
        // Set the new user as the currentUser
        setCurrentUser(result.user);
        // Navigate to a post-signup page or main page
        navigate('/signup-complete'); 
      } else {
        // Fallback if user object is not returned
        navigate('/signup-complete');
      }

    } catch (error: any) { // Use 'any' for error type for now
      console.error('An error occurred during signup:', error);
      // Avoid alerting if it was a 409, as it's handled above
      if (error.message.includes('already exists')) {
        // This is now handled above, but as a fallback, we can log it.
        console.error("Duplicate entry error was not caught as expected.");
      } else {
        alert('회원가입 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }
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

    let finalStartDate = startDate;
    const todayNormalized = normalizeDateToMidnight(new Date());
    const startDateNormalized = startDate ? normalizeDateToMidnight(startDate) : undefined;

    if (startDateNormalized && startDateNormalized.getTime() <= todayNormalized.getTime()) {
      // If startDate is today or in the past, set it to tomorrow's midnight
      const tomorrow = new Date(todayNormalized);
      tomorrow.setDate(todayNormalized.getDate() + 1);
      finalStartDate = tomorrow;
      console.log("Adjusted startDate to tomorrow for backend:", finalStartDate.toISOString().split('T')[0]);
    }

    console.log('Submitting exhibition data:', {
      userId: currentUser.id,
      title: exhibitionTitle,
      description,
      startDate: finalStartDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      isPublic,
      uploadedFiles,
      hashtags, // 추가
    });
    console.log('Uploaded files before sending to backend:', uploadedFiles);

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
          startDate: finalStartDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
          endDate: endDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
          isPublic,
          uploadedFiles, // Array of file URLs
          hashtags, // 추가
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create exhibition');
      }

      const result = await response.json();
      console.log('Exhibition created successfully:', result);
      navigate('/create-exhibition/complete');

    } catch (error: any) {
      console.error('Error creating exhibition:', error);
      alert(error.message);
    }
  };


  const handleLoginSuccess = (user: User) => {
    localStorage.setItem('userId', user.id.toString());
    fetchCurrentUser(user.id); // Fetch full user data after login
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/login');
  };

  // Removed: if (currentView === 'loading') { return <div>Loading...</div>; }
  
  return (
    <div className="min-h-screen">
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
              handleAddCustomArtist={handleAddCustomArtist} // 새로운 prop 추가
            />
          )}
        </>
      } />
      <Route path="/signup-complete" element={<SignupComplete username={signupData.nickname} />} />
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
          onNavigateToDetail={(id: number) => navigate(`/exhibition/${id}`)}
        />
      } />
            <Route path="/profile" element={
              currentUser && (
                <ProfilePage
                  onBack={() => navigate('/main')}
                  onNavigateToBadges={() => navigate('/badges')}
                  onNavigateToMyExhibition={() => navigate('/myexhibition')}
                  onNavigateToEditProfile={() => navigate('/profile/edit')}
                  onNavigateToFollowers={() => navigate(`/profile/${currentUser!.id}/followers`)}
                  onNavigateToFollowing={() => navigate(`/profile/${currentUser!.id}/following`)} // Add this line
                  onLogout={handleLogout} // Pass the global handleLogout
                />
              )
            } />      <Route path="/profile/edit" element={<EditProfilePage onBack={() => navigate('/profile')} currentUser={currentUser} onUpdateUser={() => fetchCurrentUser(currentUser!.id)} />} />
      <Route path="/profile/:userId" element={<OtherUserProfilePage />} />
      <Route path="/profile/:userId/followers" element={<FollowerPage onBack={() => navigate(-1)} />} />
      <Route path="/profile/:userId/following" element={<FollowingPage onBack={() => navigate(-1)} />} />
      <Route path="/badges" element={<BadgesPage onBack={() => navigate('/profile')} />} />
      <Route path="/myexhibition" element={
        <MyExhibitionPage 
          onBack={() => navigate('/main')}
          onCreateNew={() => navigate('/create-exhibition')}
          currentUser={currentUser}
          resetExhibitionFormState={resetExhibitionFormState}
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
                        hashtags={hashtags} // 추가
                        setHashtags={setHashtags} // 추가
                      />      } />
      <Route path="/create-exhibition/complete" element={
        <CreateExhibitionCompletePage 
          onNavigateToGallery={() => {
            resetExhibitionFormState(); // Clear state when navigating away from complete page
            navigate('/myexhibition');
          }}
          uploadedImages={uploadedFiles}
          exhibitionTitle={exhibitionTitle}
        />
      } />
      <Route path="/statistics" element={<StatisticsPage onBack={() => navigate('/main')} />} />
      <Route path="/explore" element={
        <ExploreMainPage
          onBack={() => navigate('/main')}
          onSearch={(searchQuery: string) => navigate('/explore/search', { state: { searchQuery } })}
          onExhibitionClick={(id: string) => navigate(`/exhibition/${id}`)} // Pass the navigation function
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
          onBack={() => navigate(-1)} 
          currentUser={currentUser}
        />
      } />
      <Route path="*" element={<Login onLogin={handleLoginSuccess} onSignup={() => navigate('/signup')} />} />
      </Routes>
    </div>
  );
}
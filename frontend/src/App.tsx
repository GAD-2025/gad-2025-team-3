import { useState, useEffect } from 'react';
import SignupStep1, { AgreementState } from './components/SignupStep1';
import SignupStep2, { SignupStep2Data } from './components/SignupStep2';
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


export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'signup' | 'main' | 'profile' | 'badges' | 'settings' | 'myexhibition' | 'createexhibition' | 'createexhibitionupload' | 'createexhibitionsettings' | 'createexhibitioncomplete' | 'statistics' | 'exploretrending' | 'exploresearchresults' | 'exploremain' | 'exhibitiondetail'>('login');
  const [signupStep, setSignupStep] = useState(1);
  
  // State for the currently logged-in user
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Effect to load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
        setCurrentView('main'); // Go to main page if logged in
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('currentUser');
      }
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
  
  const [signupData, setSignupData] = useState({
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
  
  // This state is for the final profile page, separate from signup data
  const [profileType, setProfileType] = useState<'profile_1_l' | 'profile_2_l' | 'profile_3_l' | 'profile_4_l'>('profile_1_l');

  // Exhibition creation state
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [exhibitionTitle, setExhibitionTitle] = useState('');
  
  // Selected exhibition data
  const [selectedExhibition, setSelectedExhibition] = useState<{
    title: string;
    author: string;
    room: string;
    views: string;
    likes: string;
    shares: string;
  }>({
    title: 'NCT 127 팬아트 갤러리',
    author: 'nctzen_art',
    room: '204',
    views: '4,327',
    likes: '567',
    shares: '89'
  });

  const handleSignupSubmit = async (artists: string[]) => {
    const finalSignupData = { ...signupData, selectedArtists: artists };
    
    // Note: The backend expects 'nickname' from our step 3 to be the 'nickname' field,
    // and 'username' from our step 2 to be the 'username' field.
    // The state variable names already match this, so no re-mapping is needed here.
    
    try {
      const response = await fetch('http://localhost:3001/api/signup', {
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

    } catch (error) {
      console.error('An error occurred during signup:', error);
      // Here you could set an error state to show a message to the user
      alert('회원가입 중 오류가 발생했습니다.');
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
      />
    );
  }

  if (currentView === 'profile' && currentUser) {
    return (
      <ProfilePage 
        user={currentUser}
        profileType={profileType}
        onBack={() => setCurrentView('main')}
        onNavigateToBadges={() => setCurrentView('badges')}
        onNavigateToSettings={() => setCurrentView('settings')}
        onNavigateToMyExhibition={() => setCurrentView('myexhibition')}
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
        onComplete={() => setCurrentView('createexhibitioncomplete')}
        exhibitionTitle={exhibitionTitle}
        setExhibitionTitle={setExhibitionTitle}
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

  // Signup flow
  return (
    <>
      {signupStep === 1 && <SignupStep1 onNext={(data) => { setSignupData(prev => ({...prev, ...data})); setSignupStep(2); }} onBack={() => setCurrentView('login')} />}
      {signupStep === 2 && <SignupStep2 onNext={(data) => { setSignupData(prev => ({...prev, ...data})); setSignupStep(3); }} onBack={() => setSignupStep(1)} />}
      {signupStep === 3 && <SignupStep3 onNext={(nickname, userBio) => { setSignupData(prev => ({...prev, nickname, bio: userBio})); setSignupStep(4); }} onBack={() => setSignupStep(2)} />}
      {signupStep === 4 && <SignupStep4 username={signupData.nickname} onNext={handleSignupSubmit} onBack={() => setSignupStep(3)} />}
      {signupStep === 5 && <SignupComplete username={signupData.nickname} onNext={(selectedProfileType) => { setProfileType(selectedProfileType); setCurrentView('main'); }} />}
    </>
  );
}

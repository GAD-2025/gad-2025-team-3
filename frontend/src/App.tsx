import { useState } from 'react';
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

export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'signup' | 'main' | 'profile' | 'badges' | 'settings' | 'myexhibition' | 'createexhibition' | 'createexhibitionupload' | 'createexhibitionsettings' | 'createexhibitioncomplete' | 'statistics' | 'exploretrending' | 'exploresearchresults' | 'exploremain' | 'exhibitiondetail'>('login');
  const [signupStep, setSignupStep] = useState(1);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
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

  if (currentView === 'login') {
    return (
      <Login 
        onLogin={() => setCurrentView('main')}
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

  if (currentView === 'profile') {
    return (
      <ProfilePage 
        username={username}
        bio={bio}
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
        onLogout={() => setCurrentView('login')}
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

  if (currentView === 'exploremain') {
    return (
      <ExploreMainPage 
        onBack={() => setCurrentView('main')} 
        onSearch={() => setCurrentView('exploretrending')}
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
      {signupStep === 1 && <SignupStep1 onNext={() => setSignupStep(2)} />}
      {signupStep === 2 && <SignupStep2 onNext={() => setSignupStep(3)} onBack={() => setSignupStep(1)} />}
      {signupStep === 3 && <SignupStep3 onNext={(nickname, userBio) => { setUsername(nickname); setBio(userBio); setSignupStep(4); }} onBack={() => setSignupStep(2)} />}
      {signupStep === 4 && <SignupStep4 username={username} onNext={() => setSignupStep(5)} onBack={() => setSignupStep(3)} />}
      {signupStep === 5 && <SignupComplete username={username} onNext={(selectedProfileType) => { setProfileType(selectedProfileType); setCurrentView('main'); }} />}
    </>
  );
}
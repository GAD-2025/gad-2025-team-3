import { useState } from 'react';
import SignupStep1 from './components/SignupStep1';
import SignupStep2 from './components/SignupStep2';
import SignupStep3 from './components/SignupStep3';
import SignupComplete from './components/SignupComplete';
import SignupStep4 from './components/SignupStep4';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState('');

  return (
    <>
      {currentStep === 1 && <SignupStep1 onNext={() => setCurrentStep(2)} />}
      {currentStep === 2 && <SignupStep2 onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />}
      {currentStep === 3 && <SignupStep3 onNext={(nickname) => { setUsername(nickname); setCurrentStep(4); }} onBack={() => setCurrentStep(2)} />}
      {currentStep === 4 && <SignupStep4 username={username} onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />}
      {currentStep === 5 && <SignupComplete username={username} onNext={() => alert('SHOWCASE 시작!')} />}
    </>
  );
}
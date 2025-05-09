import { useNavigate } from 'react-router-dom';

import { Button } from '../ui/button';

export function LandingCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  return (
    <div className="w-3/6">
      <h1>CHATBOT GRUPO SEMAPA</h1>
      <h2>
        Uma app para te ajudar a encontrar quem precisas de forma dinâmica e
        rápida
      </h2>
      <Button variant={'secondary'} onClick={handleClick}>
        LOGIN/SIGN-UP
      </Button>
    </div>
  );
}

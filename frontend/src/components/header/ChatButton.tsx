import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Translator } from 'components/i18n';

export default function ChatButton() {
  const navigate = useNavigate();
  return (
    <Button
      id="chat-button"
      variant="outline"
      onClick={() => {
        console.log('Forms button clicked!');
        navigate('/');
      }}
    >
      <Translator path="navigation.header.home" />{' '}
    </Button>
  );
}

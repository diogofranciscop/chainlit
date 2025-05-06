import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Translator } from 'components/i18n';

export default function FormsButton() {
  const navigate = useNavigate();
  return (
    <Button
      id="chat-button"
      variant="outline"
      onClick={() => {
        console.log('Forms button clicked!');
        navigate('/Forms');
      }}
    >
      <Translator path="navigation.header.forms" />{' '}
    </Button>
  );
}

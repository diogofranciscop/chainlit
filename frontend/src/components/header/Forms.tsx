import { useConfig } from '@chainlit/react-client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Translator } from 'components/i18n';

import { useLayoutMaxWidth } from 'hooks/useLayoutMaxWidth';

// Add your form component
import { FormsComponent } from './FormsComponent';

export default function FormsButton() {
  const { _config } = useConfig();
  const layoutMaxWidth = useLayoutMaxWidth();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="forms-button" variant="outline">
          <Translator path="navigation.header.forms" />{' '}
          {/* Update translation key */}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col h-screen w-screen max-w-screen max-h-screen border-none !rounded-none overflow-y-auto">
        <div
          className="mx-auto flex flex-col flex-grow gap-6"
          style={{ maxWidth: layoutMaxWidth }}
        >
          <DialogHeader>
            <DialogTitle>
              <Translator path="navigation.header.forms" />{' '}
              {/* Update translation key */}
            </DialogTitle>
          </DialogHeader>

          {/* Replace Markdown with your Form component */}
          <FormsComponent />
        </div>
      </DialogContent>
    </Dialog>
  );
}

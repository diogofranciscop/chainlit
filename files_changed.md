In order to make the chainlit based UI for a chatbot with a page where the user can access their own forms we made a fork of the chainlit repo. 

In order to achieve these we replaced the existing "README" button to a forms button.

The changed/new files are:
    [new-files]
    - frontend/src/components/header/Forms.tsx
    [changed-files]
    - frontend/src/components/header/index.tsx
    - frontend/src/components/WaterMark.tsx
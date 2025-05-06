In order to adress the limitations of chainlit in terms of UI we made a fork of the repo.

The changed/new files in relation to the original [chainlit](https://github.com/Chainlit/chainlit) are:
    [new-files]
    - frontend/src/components/header/FormsButton.tsx
    - frontend/src/components/header/FormsComponent.tsx
    - frontend/src/components/header/ChatButton.tsx
    - frontend/src/pages/Forms.tsx
    [changed-files]
    - frontend/src/components/header/index.tsx
    - frontend/src/components/WaterMark.tsx
    - frontend/src/pages/Page.tsx
    - frontend/src/router.tsx

So there are possible conflits in those files when updating the repo with a merge from the upstream.
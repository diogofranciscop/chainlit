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

A new dependencie was also added: react-select, react-icon

To change the language of the app manually we add to change the files [appWrapper.tsx]. The change is handled by the component LangSwitch. To be able to use the component README that it is supposed to handle the tutorials we had to also enable here the langSwitch, but its more difficult to do it because chainlit is made upon the browser language. Since for this, we had to change the logic in the backend and we dont want to do that, another workaround was made to use the chainlit.md as the base for the tutorials whilse also keeping the language switch. 

We've added to the translation file a markdown for each of the translations, in the new paramenter of the json "markdown.content"
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

import { Button } from '../ui/button';
import { Dropdown } from './dropdown';
import { Input } from './input';
import { Subtitle } from './subtitle';

export function Forms() {
  const animatedComponents = makeAnimated();
  const companyOptions = ['Semapa', 'Navigator', 'Secil', 'Outro'];
  const interestArea = [
    { value: 'AI', label: 'AI' },
    { value: 'Contabilidade', label: 'Contabilidade' },
    { value: 'Informática', label: 'Informática' }
  ];
  return (
    <div className="flex justify-center w-screen">
      <form className="justify-center w-6/12">
        <Subtitle Subtitle="Informações Pessoais" />
        <Input inputName="Nome" placeholderName="escreve o teu nome" />
        <Input inputName="Email" placeholderName="exemplo@semapa.pt" />
        <Input inputName="Telemovel" placeholderName="9XX XXX XXX" />
        <Subtitle Subtitle="Informações Profissionais" />
        <div className="flex flex-col">
          <Dropdown
            dropdownName="Empresa"
            placeholderName="Opções"
            list={companyOptions}
          />
          <Dropdown
            dropdownName="Departamento"
            placeholderName="Opções"
            list={companyOptions}
          />
          <Dropdown
            dropdownName="Função"
            placeholderName="Opções"
            list={companyOptions}
          />
        </div>
        <Subtitle Subtitle="Competências e interesses" />
        <span>Áreas de interesse</span>
        <CreatableSelect
          isMulti
          options={interestArea}
          components={animatedComponents}
        />
        <span>Áreas de especialização</span>
        <CreatableSelect
          isMulti
          options={interestArea}
          components={animatedComponents}
        />
        <div className="flex flex-col">
          <span>Projetos Relevantes</span>
          <textarea
            name="postContent"
            placeholder="Escreve os projetos que realizaste nos ultimos 3 anos"
            className="border-2 border-black"
            rows={4}
            cols={40}
          />
          <span>O que podes oferecer ao grupo</span>
          <textarea
            name="postContent2"
            className="border-2 border-black"
            placeholder="Escreve-nos o que tens para oferecer ao grupo"
            rows={4}
            cols={40}
          />

          <span className="font-normal flex.">
            <input type="checkbox" className="w-full p-2 border rounded" />
            Ola
          </span>
          <Button type="submit" className="mt-3 mb-7">
            Submeter
          </Button>
        </div>
      </form>
    </div>
  );
}

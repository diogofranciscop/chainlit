import { Input } from './input';
import { Subtitle } from './subtitle';

export function Forms() {
  return (
    <div className="flex justify-center w-screen">
      <form className="justify-center w-6/12">
        <Subtitle Subtitle="Informações Pessoais" />
        <Input inputName="Nome" />
        <Input inputName="Email" />
        <Input inputName="Telemovel" />
      </form>
    </div>
  );
}

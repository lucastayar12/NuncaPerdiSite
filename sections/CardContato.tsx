export interface Props {
  nome?: string;
//   sobrenome?: string;
  telefone?: string;
  email?: string;
}

export default function Card({
  nome = "Digite seu nome",
//   sobrenome = "Digite seu sobrenome",
  telefone = "Telefone para contato",
  email = "Email para contato",
}: Props) {
  return (
    <div class="card w-auto bg-black">
      <div class="card-body text-white">
        <h2 class="card-title font-bold justify-center items-center text-center m-4">
          ENTRE EM CONTATO
        </h2>
        <div class="flex flex-col">
          <div class="flex flex-row justify-evenly m-2">
            <p>{nome}</p>            
          </div>
          <div class="flex flex-row justify-evenly m-2">
            <p>{telefone}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

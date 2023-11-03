export interface Props {
    email?: string;
    nome?: string;
}

export default function crCadastro({
    email = "Digite seu email aqui",
    nome = "nome",
}: Props) {
    return (
        <div class="card w-auto bg-black">
            <div class="card-body text-center">
                <h2 class="font-bold text-white">CADASTRE-SE E RECEBA LANÇAMENTOS E OFERTAS</h2>
            </div>
            <div class="flex flex-row justify-evenly m-2 text-white">
                <p>{email}</p>
                <p>{nome}</p>
                <p class="">Cadastrar</p>                
            </div>
            <span class="text-sm m-2 text-white">Ao se cadastrar, você concorda em receber comunicações nos termos da nossa Política de Privacidade.</span>
        </div>
    );
}
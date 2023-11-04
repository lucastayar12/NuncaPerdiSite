export interface Props {
    email?: string;
    nome?: string;
}

export default function crCadastro({
    email = "Digite seu email aqui",
    nome = "nome",
}: Props) {
    return (
        <div class="card w-auto text-center bg-black text-white">
            <div class="card-body text-cente">
                <h2 class="font-bold">CADASTRE-SE E RECEBA LANÇAMENTOS E OFERTAS</h2>
            </div>
            <div class="flex flex-row justify-evenly m-2 text-white">
                <p>{email}</p>
                <p>{nome}</p>
                <a href="#" class="">Cadastrar</a>                
            </div>
            <span class="text-sm m-2 text-center">Ao se cadastrar, você concorda em receber comunicações nos termos da nossa Política de Privacidade.</span>
        </div>
    );
}
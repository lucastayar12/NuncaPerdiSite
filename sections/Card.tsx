
export interface Props{
    titulo? : string;
    subtitulo? : string;
    descricao? : string;
}


export default function Card({
    titulo = "Olá mundo",
    subtitulo = "Aqui vai o subtítulo",
    descricao = "Aqui vai a descrição"
} : Props) {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{titulo}</h2>
                    <p>{subtitulo}</p>
                    <p>{descricao}</p>
                </div>
            </div>
    )
}
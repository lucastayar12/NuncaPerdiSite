export interface Props {
  descricaoImg?: string;
  descricaoImg2?: string;
  descricaoImg3?: string
}

export default function card({ descricaoImg = "teste1", descricaoImg2 = "teste2", descricaoImg3 = "teste3" }: Props) {
  return (
    <div class="flex flew-row">
      <div class="flex flex-col m-1 basis-1/3 bg-green-200">
        <img  src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"/>
        <p>{descricaoImg}</p>
      </div>
      <div class="flex flex-col m-1 basis-1/3 bg-green-200">
        <img  src="https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg"/>
        <p>{descricaoImg2}</p>
      </div>
      <div class="flex flex-col m-1 basis-1/3 bg-green-200">
        <img  src="https://www.inewsbr.com/wp-content/uploads/2022/06/ecommerce-1068x601.jpg"/>
        <p>{descricaoImg3}</p>
      </div>
    </div>
  );
}

export interface Props {
  urlImage?: string;
  descricaoImg?: string;
  urlImage2?: string;
  descricaoImg2?: string;
  urlImage3?: string;
  descricaoImg3?: string
}

export default function card({ descricaoImg = "teste1", descricaoImg2 = "teste2", descricaoImg3 = "teste3", urlImage, urlImage2, urlImage3 }: Props) {
  return (
    <div class="flex flew-row w-auto h-auto">
      <div class="flex flex-col m-1 basis-1/3 bg-green-200">
        {/* <img  src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"/> */}
        <img src={urlImage}/>
        <p class="pl-2">{descricaoImg}</p>
      </div>
      <div class="flex flex-col m-1 basis-1/3 bg-green-200">
        {/* <img  src="https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg"/> */}
        <img  src={urlImage2}/>
        <p class="pl-2">{descricaoImg2}</p>
      </div>
      <div class="flex flex-col m-1 basis-1/3 bg-green-200">
        {/* <img  src="https://www.inewsbr.com/wp-content/uploads/2022/06/ecommerce-1068x601.jpg"/> */}
        <img  src={urlImage3}/>
        <p class="pl-2">{descricaoImg3}</p>
      </div>
    </div>
  );
}

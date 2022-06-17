import { Calculate } from "../../../../Images/@icons";
import { CalculateImage, DadImage } from "../../../../Images/@Image";
import { CardInfoGeneral, Content, DivImage, DivInfo, Title } from "./syle";

const CardInfoWhy = () => {
    return (
        <CardInfoGeneral>
            <Title>
                <h1>Por que Aagrispot?</h1>
                <hr></hr>
            </Title>
            <DivInfo>
            <DivImage>
            <img src={DadImage} />
            </DivImage>
            <Content>
                <p>
            {<b className="special_content">Aagrispot</b>} é um {<b className="special_content">anagrama</b>} (um jogo de palavras que utiliza a 
            transposição ou rearranjo de letras de uma palavra ou frase) do nome {<b className="special_content">Pitágoras</b>}, 
                um grande matemático de sua época e o criador de varias regras matemáticas que utilizamos até os dias de {<b className="special_content">hoje</b>} .

                </p>
                <p>
                Então por ser quem ele é, resolvemos dar essa {<b className="special_content">homenagem</b>}.
                </p>
            </Content>
            
            
            </DivInfo>
            

        </CardInfoGeneral>);
}

export default CardInfoWhy
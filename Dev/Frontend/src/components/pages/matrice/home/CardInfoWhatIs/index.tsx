import { Calculate } from "../../../../Images/@icons";
import { CalculateImage } from "../../../../Images/@Image";
import { CardInfoGeneral, Content, DivImage, DivInfo, Title } from "./syle";

const CardInfoWhatIs = () => {
    return (
        <CardInfoGeneral>
            <Title>
                <h1>Aagrispot? O que é isso?</h1>
                <hr></hr>
            </Title>
            <DivInfo>
                
            <Content>
                <p>
                    {<b className="special_content">Aagrispot</b>} é um projeto desenvolvido para calcular e gerar {<b className="special_content">matrizes </b>}
                    automaticamente
                    apenas com os dados inseridos por {<b className="special_content">você! </b>}
                </p>
                <p>
                    Criado para {<b className="special_content">facilitar</b>} a vida de alunos, engenheiros e até
                    profissionais agilizando o trabalho de muitos!
                </p>
                <p>
                    Então, sabe aquela {<b className="special_content">matriz</b>} chata que você está {<b className="special_content">procrastinando </b>}
                    ou {<b className="special_content">ocupado</b>} de mais parar fazer?
                    Deixa com a gente que resolvemos o seu {<b className="special_content">trabalho!</b>}
                </p>
            </Content>
            <DivImage>
            <img src={CalculateImage} />
            </DivImage>
            
            </DivInfo>
            

        </CardInfoGeneral>);
}

export default CardInfoWhatIs
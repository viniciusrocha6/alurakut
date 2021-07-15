import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === "POST"){
        const TOKEN = '108ed8ff89c935be409fe4eff63579';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "968447",
            ...request.body,
            // title: "Comunidade de teste",
            // imageUrl: "https://static3.tcdn.com.br/img/img_prod/906555/camiseta_coragem_o_cao_covarde_25_4_20201125211042.jpg",
            // creatorSlug: "vinicius"
        })
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
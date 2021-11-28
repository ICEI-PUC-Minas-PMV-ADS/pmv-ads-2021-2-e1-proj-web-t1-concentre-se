# Plano de Testes de Software

Para o desenvolvimento da página os seguintes testes foram realizados:

1- Teste de navegabilidade: verificamos se todos os links são nagáveis, se estão corretos e levam os usuários a uma página existente na aplicação.

2 - Teste de responsividade: verificamos se a aplicação pode ser executada em dispositivos móveis.

3 - Teste de campos e páginas: verificamos se todos os campos e páginas são clicaveis  e válidos.

4 - Teste ponta a ponta: verificamos um acesso completo do usuário. Colocando link, acessando a página principal, depois escolhendo um artigo, visualizando o texto completo e a imagem, realizando um comentário, compartilhando na rede social e voltando para página principal.


Os requisitos para realização dos testes de software são:

● Navegador da Internet - Chrome, Firefox, Edge, Safari e mobile

● Funcionamento das APIs

● Conectividade de Internet para acesso às plataformas (APISs)
 
|     Caso de Teste   |                                     CT-01-Página Inicial                                                         |
|---------------------|------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados| RF-001- O site deve apresentar, na página principal, artigos recomendados e as últimas publicações.<br>RF-003- O    site deve oferecer um menu de navegação que permita ao usuário escolher um assunto de sua preferência.|
|Objetivo do Teste    | Verificar se o menu e o botão de busca estão em pleno funcionamento e se todos os artigos foram carregados        corretamente.|
|Passos               | 1) Acessar o Navegador;<br>2) Informar o endereço do Site: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-2-e1-proj-web-t1-concentre-se/src/index.html<br>3) Visualizar a página inicial.| 
|Critérios de Êxito   |- Deve haver um recurso do navegador;<br>- O menu exibido deve estar com os links acessíveis.|

|     Caso de Teste   |                                     CT-02-Página Conteúdo                                                        |
|---------------------|------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados| RF-003-  O site deve oferecer um menu de navegação que permita ao usuário escolher um assunto de sua preferência<br>RF-004- O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar textos, conteúdos e vídeos de seu interesse. |
|Objetivo do Teste    | Verificar se a listagem dos conteúdos e do botão de pesquisa estão em pleno funcionameto.|
|Passos               | 1) Acessar a página principal;<br>2) Selecionar a opção conteúdos no menu;<br>3) Visualizar a página conteúdos.| 
|Critérios de Êxito   | -Deve ser exibido uma lista com conteúdos e eles serem links acessíveis para abrir a página do artigo.|

|     Caso de Teste   |                                     CT-03-Página Fale Conosco                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------|
|Requisitos Associados| RF-005- O site deve permitir visualizar as informações de contatos do mantenedor do site.|
|Objetivo do Teste    | Verificar se a página possui as informações para contato.|
|Passos               | 1) Acessar o Navegador;<br>2) Selecionar a opção fale conosco no menu;<br>3) Visualizar a página fale conosco.| 
|Critérios de Êxito   |- Deve ser exibido as informações para contato.|
                       
|     Caso de Teste   |                                       CT-04-Página Artigo                                       |
|---------------------|--------------------------------------------------------------------------------------------------------------|
|Requisitos Associados| RF-002- O site deve apresentar, para cada artigo e reportagem, uma imagem ou um vídeo correspondente ao assunto apresentado.<br>RF-006- O site deve permitir o compartilhamento dos conteúdos visualizados em plataformas de redes sociais.<br>RF-007- O site deve permitir que usuários possam comentar os conteúdos.<br>RNF-005- O site deve atender todos os quesitos de direitos autorais.|                                     
| Objetivo do Teste   | Verificar se a página possui o texto integral do artigo, uma imagem respresentativa, campo de comentários e opção de compartilhamento do conteúdo via das redes sóciais.|
|Passos               | 1) Acessar página principal;<br>2) Selecionar um artigo;<br>3) Visualizar página integral do artigo.| 
|Critérios de Êxito   |-Página carregar todo texto e a imagem;<br>-É possível compartilhar o conteúdo atráves do campo de compartilhamento.|

|     Caso de Teste   |                    CT-05-Responsividade, compatibilidade, cores e contraste                                   |
|---------------------|--------------------------------------------------------------------------------------------------------------|
|Requisitos Associados| RNF-002- O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada.<br>RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).<br>RNF-003- O site deve ter bom nível de contraste entre os elementos da tela em conformidade.|                                     
| Objetivo do Teste   | Verificar a responsividade em dispositivo mobile, compatibilidade com diversos navegadores e as cores/contraste dos elementos visuais.|
|Passos               | 1)Verificar a responsividade no app: https://github.com/responsively-org/responsively-app<br>2)Verificar a compatibilidade com os navegadores.| 
|Critérios de Êxito   |-Página responsiva e compativel.<br>-Imagens visíveis e agradáveis.|

|     Caso de Teste   |                    CT-06-Acessibilidade GitHub Pages                                 |
|---------------------|--------------------------------------------------------------------------------------------------------------|
|Requisitos Associados| RNF-001 - O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku)|                                     
| Objetivo do Teste   | Verificar se a página está publicada na web|
|Passos               | Acessar o site pelo navegador informando o link.| 
|Critérios de Êxito   |-Página funcionando na web.|









  
  






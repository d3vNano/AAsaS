- Antes de começar

    1. Extraia o conteúdo do arquivo exercicio_sql_7a63ce63 e abra um terminal na pasta criada
    3. Execute o seguinte comando para criar o banco de dados no seu computador:
        
        ```bash
        bash ./create-database
        ```
        
    4. Execute o seguinte comando para conectar-se ao banco de dados:
        
        ```bash
        bash ./connect-database
        ```
        

Enquanto o sistema não funcionava, decidiu continuar ajudando sua vózinha com a manutenção dos dados dos clientes da loja! Durante o dia, foi necessário fazer as seguintes alterações nos dados:

1. Adicionar um novo cliente, `'Renato Caldeira Falcão'`, com cpf `'46761645912'` e 1 compra;
2. Atualizar o número de compras do cliente com CPF `'48769275911'` para 5;
3. Excluir o cliente com cpf `'98765432100'`;
4. Busque clientes quaisquer, limitados a no máximo 3 registros.
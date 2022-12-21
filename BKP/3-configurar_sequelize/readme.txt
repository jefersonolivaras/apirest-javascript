1 - npm i dotenv; npm i sequelize mariadb; npm i -D sequelize-cli

2 - no MysqlWorkbench crie um novo schema = name: escola
                                            character set: utf8mb4
                                            collation: utf8mb4_general_ci

3 (criar tabela) - npx sequelize migration:create --name=alunos

4 (migrar a tabela para o schema) - npx sequelize db:migrate

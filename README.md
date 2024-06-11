

# Lead Capture API

API para captação de leads de usuários interessados no "anúncio mostrado". Usuários podem se registrar para receber um email inicial e se cadastrar no banco de dados para receber novidades e comunicados.

## Funcionalidades

**Registrar Usuário:** Usuário pode se registrar para receber emails ou apenas o email inicial.

**Solicitar Email novamente:** Usuário pode solicitar o email inicial novamente caso tenha apagado ou não entregue.

## Tecnologias Utilizadas

- NodeJs
- TypeScript
- Prisma
- NodeMailer
- Zod
- SQLite

## Rotas

### **`POST /register`**

Permite que o usuário se registre para receber o email inicial e futuros emails.

#### Request:

```json
{
	"name": "",
	"email": "",
	"tell": "",
	"newsletter": false
}
```

#### Response:
- Em caso de sucesso, retorna um 201.
- Em caso de email duplicado, retorna um erro 400:
```json
{
	"message": "User already exists"
}
```

### **`POST /send-mail-again`**

Permite que o usuário solicite novamente o email inicial.

#### Request:

```json
{
	"email": ""
}
```

Response:
- Em caso de sucesso, retorna um 204.
- Em caso de email não cadastrado, retorna um erro 400:
```json
{
	"message": "Email is not registered"
}
```

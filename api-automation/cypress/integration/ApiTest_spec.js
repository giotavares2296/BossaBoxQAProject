const randomString = String(Math.ceil(Math.random()*1000000));
const randomEmail = randomString + "test@mail.com"

describe('Register Validations ', () => {

        it('Success Register', () => {
            cy.request( 'POST', 'https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev/v1/users',
                { fullName: 'Gio Tavares', password: 'password123', email:randomEmail, logintype:'email' })
                .should((response) => {
                    expect(response.status).to.eq(200);
                })
        });

        it('Empty full name', () => {
            cy.request({
                method: 'POST',
                url: 'https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev/v1/users',
                qs: { fullName: '', password: 'password123', email:randomEmail, logintype:'email' },
                failOnStatusCode: false
            })
                .should((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.error.code).to.be.eq("FULLNAME_REQUIRED");
                    expect(response.body.error.message).to.be.eq("\"fullName\" é obrigatório")
                })
        })

        it('Registered email', () => {
            cy.request({
                method: 'POST',
                url: 'https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev/v1/users',
                qs: { fullName: 'Giovana Tavares', password: 'password123', email:'teste@mail.com', logintype:'email' },
                failOnStatusCode: false
            })
                .should((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.error.code).to.be.eq("EMAIL_REGISTERED");
                    expect(response.body.error.message).to.be.eq("E-mail já cadastrado")
                })
        })

        it('Invalid email', () => {
            cy.request({
                method: 'POST',
                url: 'https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev/v1/users',
                qs: { fullName: 'Giovana Tavares', password: 'password123', email:'mail.com', logintype:'email' },
                failOnStatusCode: false
            })
                .should((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.error.code).to.be.eq("INVALID_EMAIL");
                    expect(response.body.error.message).to.be.eq("O e-mail é inválido")
                })
        })

        it('Empty email', () => {
            cy.request({
                method: 'POST',
                url: 'https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev/v1/users',
                qs: { fullName: 'Giovana Tavares', password: 'password123', email:'', logintype:'email' },
                failOnStatusCode: false
            })
                .should((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.error.code).to.be.eq("INVALID_EMAIL");
                    expect(response.body.error.message).to.be.eq("O e-mail é inválido")
                })
        })
});

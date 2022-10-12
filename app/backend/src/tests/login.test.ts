import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;
const admin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

describe('/login', () => {
  describe('/Post', () => {
    it('deve fazer login com sucesso', async () => {
      const response = await chai.request(app).post('/login').send(admin);
      expect(response.status).to.equal(200);
    });
  });
});

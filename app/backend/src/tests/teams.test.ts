import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('/teams', () => {
  describe('/Get', () => {
    it('deve acessar a rota com sucesso', async () => {
      const response = await chai.request(app).get('/teams')
      expect(response.status).to.equal(200);
    });
  });
  describe('/Get', () => {
    it('deve fazer pesquiso por id com sucesso', async () => {
      const response = await chai.request(app).get('/teams/1')
      expect(response.status).to.equal(200);
    });
  });
});

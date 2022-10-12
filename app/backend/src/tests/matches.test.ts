import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('/matches', () => {
  describe('/Get', () => {
    it('deve acessar a rota com sucesso', async () => {
      const response = await chai.request(app).get('/matches')
      expect(response.status).to.equal(200);
    });
  });
  describe('/Post', () => {
    it('Deve atualizar com sucesso', async () => {
      const response = await chai.request(app).patch('/matches/1/finish')
      expect(response.status).to.equal(200);
    });
  });
  describe('/Post', () => {
    it('Deve cadastrar com sucesso', async () => {
      const response = await chai.request(app).patch('/matches/1')
      expect(response.status).to.equal(200);
    });
  });
});

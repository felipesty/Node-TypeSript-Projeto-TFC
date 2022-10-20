import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('/leaderboard', () => {
  describe('/Get', () => {
    it('deve acessar a rota home com sucesso', async () => {
      const response = await chai.request(app).get('/leaderboard/home')
      expect(response.status).to.equal(200);
    });
  });
  describe('/Get', () => {
    it('Deve acessar a rota away com sucesso', async () => {
      const response = await chai.request(app).get('/leaderboard/away')
      expect(response.status).to.equal(200);
    });
  });
});

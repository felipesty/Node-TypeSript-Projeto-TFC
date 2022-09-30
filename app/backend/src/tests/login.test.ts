import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('/login', () => {
  describe('/Post', () => {
    it('deve fazer login com sucesso', async () => {
      const response = await chai.request(app).post('/login').send({
        email: 'user@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
      });
      expect(response.status).to.equal(200);
    });
  });
});

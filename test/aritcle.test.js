import chai from "chai";
import chaiHttp from "chai-http";

import app from "../src/server/application.js";
const should = chai.should()
chai.use(chaiHttp)

const newArticle = {title : "xyz",
description : "dsfsdf",
imageUrl : "",
category : "XYZ",
tags: ["XYZ"]
}


describe ('Artiles', () => {
    it('should post new articels', (done) => {
        chai.request(app)
        .post('/articles/list')
        .send(newArticle)
        .end((err, res) => {
            res.should.have.status(404);
            done()
        })
    })
})

describe ('Artiles', () => {
    it('should get new articels', (done) => {
        chai.request(app)
        .get('/article/list')
        .end((err, res) => {
            res.should.have.status(200);
            done()
        })
    })
})
const app = require('../app'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('Gets the test endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    // cont body = {object:"page",entry:[{id:"100709947946080",time:1592900066769,
    // messaging:[{sender:{id:"2427942053927065"},recipient:{id:"100709947946080"},timestamp:1592900066419,
    // message:{mid:"m_IW1vxaa51vZFaIB7RFXrmdxR8G2-og1NpdHusXUNhJOdMbRZbnwagqWajb1DqZxcw5d6kYynUs1u9LqZurxysA",text:"hi"}}]}]};
    // const response = await request.post('/webhook');

    const res = await request.post('/webhook').send({
        object: 'page',
        entry: [
            {
                id: '100709947946080',
                time: 1592900066769,
                messaging: [
                    {
                        sender: { id: '2427942053927065' },
                        recipient: { id: '100709947946080' },
                        timestamp: 1592900066419,
                        message: {
                            mid:
                                'm_IW1vxaa51vZFaIB7RFXrmdxR8G2-og1NpdHusXUNhJOdMbRZbnwagqWajb1DqZxcw5d6kYynUs1u9LqZurxysA',
                            text: 'hi',
                        },
                    },
                ],
            },
        ],
    });
    console.log(res);
    //expect(response.status).toBe(200);
    // expect(response.body.message).toBe('pass!');
    // ...
    done();
});

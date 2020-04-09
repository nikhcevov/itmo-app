import answers from './answers.json';

const handler = async (req, res) => {
  res.send({
    answers
  });
};

export default handler;

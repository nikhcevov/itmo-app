import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import parseSchedule from '../../scripts/parseSchedule';

const handler = async (req, res) => {
  const group = req && req.query && req.query.group;
  if (!group) {
    res.send({
      odd: [],
      even: [],
      group: '',
      message: null,
    });
    return;
  }
  const data = await fetch(`https://itmo.ru/ru/schedule/0/${group}/schedule.htm`);
  const domText = await data.text();
  const parsed = parseSchedule(new JSDOM(domText));
  if (parsed.odd.length === 0 && parsed.even.length === 0) {
    res.send({
      odd: [],
      even: [],
      group,
      message: 'not found',
    });
  } else {
    res.send({
      ...parsed,
      group,
      message: 'success',
    });
  }
};

export default handler;
